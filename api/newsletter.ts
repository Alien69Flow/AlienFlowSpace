/**
 * `/api/newsletter` — función serverless de Vercel.
 *
 * El navegador solo hace `POST { email }` a su propio origen; la clave de Brevo
 * vive en el servidor (`BREVO_API_KEY`) y nunca viaja en el bundle. El contrato
 * con el formulario es estricto: solo se responde 2xx cuando Brevo aceptó el
 * contacto. Si falta configuración se devuelve 503 con `code: not_configured`, y
 * el formulario cae al modo reserva (mailto) en vez de fingir un alta.
 *
 * Variables de entorno (Vercel → Settings → Environment Variables):
 *   BREVO_API_KEY            obligatoria para que funcione.
 *   BREVO_LIST_ID            id numérico de la lista destino.
 *   BREVO_DOI_TEMPLATE_ID    opcional: si está, se usa doble opt-in (GDPR).
 *   BREVO_API_BASE           opcional, solo para pruebas locales.
 */

interface ApiRequest {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
}

interface ApiResponse {
  statusCode: number;
  setHeader(name: string, value: string): void;
  end(chunk?: string): void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const DEFAULT_BASE = 'https://api.brevo.com/v3';
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const PROVIDER_TIMEOUT_MS = 8000;

/** Límite por IP en memoria: es por instancia, sirve de freno barato, no de cuota. */
const hits = new Map<string, number[]>();

const send = (res: ApiResponse, status: number, payload: Record<string, unknown>) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
};

const header = (req: ApiRequest, name: string): string => {
  const raw = req.headers?.[name] ?? req.headers?.[name.toLowerCase()];
  return Array.isArray(raw) ? (raw[0] ?? '') : (raw ?? '');
};

const clientIp = (req: ApiRequest): string => header(req, 'x-forwarded-for').split(',')[0].trim() || 'unknown';

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
};

const readBody = async (req: ApiRequest): Promise<unknown> => {
  // Vercel entrega el cuerpo ya parseado cuando el Content-Type es JSON.
  if (req.body !== undefined && req.body !== null && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  const stream = req as unknown as NodeJS.EventEmitter & { destroy?: () => void };
  if (typeof stream.on !== 'function') return null;

  return new Promise((resolve) => {
    let raw = '';
    stream.on('data', (chunk: Buffer | string) => {
      raw += chunk.toString();
      if (raw.length > 2000) {
        resolve(null);
        stream.destroy?.();
      }
    });
    stream.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : null);
      } catch {
        resolve(null);
      }
    });
    stream.on('error', () => resolve(null));
  });
};

interface SubscribeOutcome {
  status: number;
  payload: Record<string, unknown>;
}

async function subscribe(email: string, origin: string): Promise<SubscribeOutcome> {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const listId = Number(process.env.BREVO_LIST_ID);
  const doiTemplateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);

  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    return { status: 503, payload: { ok: false, code: 'not_configured' } };
  }

  const base = (process.env.BREVO_API_BASE?.trim() || DEFAULT_BASE).replace(/\/+$/, '');
  const doubleOptIn = Number.isInteger(doiTemplateId) && doiTemplateId > 0;

  const url = doubleOptIn ? `${base}/contacts/doubleOptinConfirmation` : `${base}/contacts`;
  const body = doubleOptIn
    ? {
        email,
        includeListIds: [listId],
        templateId: doiTemplateId,
        redirectionUrl: `${origin}/?newsletter=confirmed`,
      }
    : { email, listIds: [listId], updateEnabled: true };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROVIDER_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (res.ok) {
      return { status: 200, payload: { ok: true, mode: doubleOptIn ? 'double-opt-in' : 'added' } };
    }

    // Brevo responde 400 "duplicate_parameter" si la dirección ya estaba: para el
    // visitante es un éxito (no hay nada que arreglar), y no se le inventa nada.
    const detail = await res.text();
    const duplicate = res.status === 400 && /duplicate|already exist/i.test(detail);
    if (duplicate) {
      return { status: 200, payload: { ok: true, mode: 'already-subscribed' } };
    }

    // Se registra el fallo sin volcar datos personales ni la clave.
    console.error('[newsletter] provider rejected the contact', { status: res.status });
    return { status: 502, payload: { ok: false, code: 'provider_error' } };
  } catch (error) {
    const aborted = error instanceof Error && error.name === 'AbortError';
    console.error('[newsletter] provider request failed', { aborted });
    return { status: aborted ? 504 : 502, payload: { ok: false, code: 'provider_unreachable' } };
  } finally {
    clearTimeout(timer);
  }
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    send(res, 405, { ok: false, code: 'method_not_allowed' });
    return;
  }

  // Un JSON con `Content-Type` obliga al navegador a un preflight: corta el
  // envío desde formularios de terceros, que es el abuso trivial aquí.
  if (!header(req, 'content-type').includes('application/json')) {
    send(res, 415, { ok: false, code: 'unsupported_media_type' });
    return;
  }

  if (isRateLimited(clientIp(req))) {
    send(res, 429, { ok: false, code: 'rate_limited' });
    return;
  }

  const body = (await readBody(req)) as { email?: unknown } | null;
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    send(res, 400, { ok: false, code: 'invalid_email' });
    return;
  }

  const proto = header(req, 'x-forwarded-proto') || 'https';
  const host = header(req, 'x-forwarded-host') || header(req, 'host') || 'www.alienflow.space';
  const origin = `${proto}://${host}`;

  const outcome = await subscribe(email, origin);
  send(res, outcome.status, outcome.payload);
}
