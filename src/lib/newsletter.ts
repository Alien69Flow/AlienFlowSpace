/**
 * Newsletter submission — framework-free logic, kept out of the component so it
 * can be tested without a browser.
 *
 * The rule it enforces: a subscription is only reported as successful when the
 * server really accepted it. Any other outcome (bad address, non-2xx response,
 * network failure, timeout) is reported as a failure or as a manual fallback —
 * never as success.
 *
 * Where the address goes: `POST /api/newsletter`, a Vercel function that holds
 * the Brevo key server-side (see api/newsletter.ts). There is no secret in the
 * bundle, only the same-origin path. `VITE_NEWSLETTER_ENDPOINT` still works to
 * point at another collector, and an empty value in development keeps the
 * mailto fallback so nothing is silently dropped.
 */

export type NewsletterResult =
  | { status: 'ok'; confirmationSent: boolean; alreadySubscribed: boolean }
  | { status: 'fallback'; mailto: string }
  | { status: 'invalid'; message: string }
  | { status: 'error'; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const DEFAULT_TIMEOUT_MS = 12000;

/** Same-origin endpoint in builds; nothing in development (vite has no /api). */
export const newsletterEndpoint =
  (import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined)?.trim() ||
  (import.meta.env.PROD ? '/api/newsletter' : '');

export const contactEmail =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || 'info@alienflow.space';

export const isValidEmail = (value: string) => EMAIL_RE.test(value.trim());

export const buildMailtoUrl = (email: string, to: string = contactEmail) =>
  `mailto:${to}` +
  `?subject=${encodeURIComponent('Newsletter subscription')}` +
  `&body=${encodeURIComponent(
    `Please add this address to the AlienFlowSpace newsletter:\n\n${email.trim()}\n`
  )}`;

interface Options {
  endpoint?: string;
  contactEmail?: string;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  isDev?: boolean;
}

interface ServerAnswer {
  ok?: boolean;
  code?: string;
  mode?: 'double-opt-in' | 'added' | 'already-subscribed';
}

export async function submitNewsletter(
  rawEmail: string,
  options: Options = {}
): Promise<NewsletterResult> {
  const email = rawEmail.trim();
  const endpoint = (options.endpoint ?? newsletterEndpoint).trim();
  const to = options.contactEmail || contactEmail;
  const doFetch = options.fetchImpl ?? fetch;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  if (!isValidEmail(email)) {
    return { status: 'invalid', message: 'That address looks incomplete — please check it and try again.' };
  }

  // No endpoint configured: never fake a subscription. Hand the visitor a
  // pre-filled message so the lead still reaches a human.
  if (!endpoint) {
    if (options.isDev ?? import.meta.env.DEV) {
      console.warn(
        '[Newsletter] no endpoint configured: the form runs in email-app fallback mode and ' +
          'stores nothing. Configure the server-side endpoint before publishing.'
      );
    }
    return { status: 'fallback', mailto: buildMailtoUrl(email, to) };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await doFetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        email,
        source: 'alienflow.space',
        subscribedAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    });

    // The body is read before deciding: the server distinguishes "not wired to a
    // provider yet" (503 + code) from a real failure, and only the latter is an
    // error the visitor can act on.
    let answer: ServerAnswer = {};
    try {
      answer = (await res.json()) as ServerAnswer;
    } catch {
      answer = {};
    }

    if (answer.code === 'not_configured') {
      return { status: 'fallback', mailto: buildMailtoUrl(email, to) };
    }

    if (!res.ok) {
      if (answer.code === 'invalid_email' || res.status === 400) {
        return {
          status: 'invalid',
          message: 'That address was rejected — please check it and try again.',
        };
      }
      if (res.status === 429) {
        return {
          status: 'error',
          message: 'Too many attempts from this connection. Please try again in a few minutes.',
        };
      }
      return {
        status: 'error',
        message: 'We could not save your address just now. Please try again in a moment.',
      };
    }

    return {
      status: 'ok',
      confirmationSent: answer.mode !== 'added',
      alreadySubscribed: answer.mode === 'already-subscribed',
    };
  } catch (error) {
    const aborted =
      error instanceof Error && (error.name === 'AbortError' || error.message.includes('aborted'));
    return {
      status: 'error',
      message: aborted
        ? 'The request timed out. Please try again.'
        : 'We could not reach the server. Please check your connection and try again.',
    };
  } finally {
    clearTimeout(timer);
  }
}
