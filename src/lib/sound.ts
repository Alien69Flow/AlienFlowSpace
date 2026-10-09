/**
 * UI sound design — short synthesised cues, no audio files.
 *
 * Design rules:
 *  - Nothing plays without a user gesture (browsers block it anyway) and every
 *    cue is quiet (gain <= 0.06) so it reads as instrument feedback, not noise.
 *  - The AudioContext is created lazily on the first cue, so a visitor who never
 *    interacts never pays for an audio graph, and the context starts unlocked
 *    (a context created outside a gesture stays "suspended" in most browsers).
 *  - Missing Web Audio, blocked autoplay or a throwing constructor must never
 *    break the UI: every path returns a boolean instead of throwing.
 *  - Users can turn it off; the choice is remembered in localStorage.
 */

type Tone = {
  /** Frequency in Hz. */
  freq: number;
  /** Duration in seconds. */
  duration?: number;
  type?: OscillatorType;
  gain?: number;
  /** Offset from "now" in seconds. */
  delay?: number;
};

const STORAGE_KEY = 'af-sound-enabled';

const listeners = new Set<() => void>();
let ctx: AudioContext | null = null;
let enabled = readStoredPreference();

function readStoredPreference(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    // Default is ON: cues only fire on hover/click, and the toggle is always visible.
    return window.localStorage.getItem(STORAGE_KEY) !== '0';
  } catch {
    return true;
  }
}

export function isSoundEnabled(): boolean {
  return enabled;
}

export function setSoundEnabled(next: boolean): void {
  if (next === enabled) return;
  enabled = next;
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
    } catch {
      /* private mode: preference is session-only */
    }
  }
  if (!next) closeContext();
  listeners.forEach((listener) => listener());
}

export function subscribeSound(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function closeContext(): void {
  const current = ctx;
  ctx = null;
  if (current && typeof current.close === 'function') {
    void current.close().catch(() => undefined);
  }
}

function audioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  try {
    if (!ctx) ctx = new Ctor();
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

/** Schedules a short cue. Returns true only when sound was actually produced. */
export function play(tones: Tone[]): boolean {
  if (!enabled || tones.length === 0) return false;
  const audio = audioContext();
  if (!audio) return false;

  try {
    const now = audio.currentTime;
    for (const tone of tones) {
      const osc = audio.createOscillator();
      const amp = audio.createGain();
      osc.type = tone.type ?? 'sine';
      const start = now + (tone.delay ?? 0);
      const duration = tone.duration ?? 0.08;
      const end = start + duration;
      const peak = Math.min(0.06, Math.max(0.0008, tone.gain ?? 0.03));

      osc.frequency.setValueAtTime(tone.freq, start);
      amp.gain.setValueAtTime(0.0001, start);
      amp.gain.exponentialRampToValueAtTime(peak, start + Math.min(0.015, duration / 3));
      amp.gain.exponentialRampToValueAtTime(0.0001, end);

      osc.connect(amp);
      amp.connect(audio.destination);
      osc.start(start);
      osc.stop(end + 0.02);
    }
    return true;
  } catch {
    return false;
  }
}

export const sfx = {
  /** Cursor entering an interactive element — the quietest cue. */
  hover: () => play([{ freq: 1180, duration: 0.045, gain: 0.018, type: 'sine' }]),
  /** Confirmed press. */
  click: () => play([
    { freq: 620, duration: 0.05, gain: 0.035, type: 'triangle' },
    { freq: 930, duration: 0.07, gain: 0.028, type: 'sine', delay: 0.035 },
  ]),
  /** Route change / entering a new scene. */
  navigate: () => play([
    { freq: 420, duration: 0.09, gain: 0.03, type: 'sine' },
    { freq: 660, duration: 0.12, gain: 0.026, type: 'sine', delay: 0.06 },
    { freq: 990, duration: 0.14, gain: 0.02, type: 'sine', delay: 0.12 },
  ]),
  /** Panel or section opened. */
  open: () => play([
    { freq: 520, duration: 0.07, gain: 0.028, type: 'triangle' },
    { freq: 780, duration: 0.1, gain: 0.022, type: 'sine', delay: 0.05 },
  ]),
  /** A real success from the server (newsletter subscribed, wallet connected). */
  success: () => play([
    { freq: 660, duration: 0.1, gain: 0.035, type: 'sine' },
    { freq: 880, duration: 0.1, gain: 0.032, type: 'sine', delay: 0.08 },
    { freq: 1320, duration: 0.16, gain: 0.028, type: 'sine', delay: 0.16 },
  ]),
  /** A real failure. Low, short, never alarming. */
  error: () => play([
    { freq: 240, duration: 0.14, gain: 0.032, type: 'triangle' },
    { freq: 170, duration: 0.18, gain: 0.026, type: 'sine', delay: 0.09 },
  ]),
};

/**
 * Rate limiter for hover cues: sliding the cursor across a grid of cards would
 * otherwise fire a dozen cues per second.
 */
export function createRateLimiter(minIntervalMs: number) {
  let lastAt = -Infinity;
  return {
    allow(now: number): boolean {
      if (now - lastAt < minIntervalMs) return false;
      lastAt = now;
      return true;
    },
    reset(): void {
      lastAt = -Infinity;
    },
  };
}

const INTERACTIVE_SELECTOR =
  'a[href], button:not([disabled]), [role="button"], input[type="submit"], .af-pill, .af-spotlight';

/**
 * Delegated cue wiring: one pair of document listeners covers every current and
 * future button, pill, link and card, instead of touching each component.
 * Returns a cleanup function for the effect that installed it.
 */
export function attachGlobalSfx(doc: Document | null = typeof document === 'undefined' ? null : document): () => void {
  if (!doc) return () => undefined;

  const hoverLimiter = createRateLimiter(110);

  const onPointerOver = (event: Event) => {
    const target = event.target as Element | null;
    const element = target?.closest?.(INTERACTIVE_SELECTOR);
    if (!element) return;
    if (!hoverLimiter.allow(performance.now())) return;
    sfx.hover();
  };

  const onClick = (event: Event) => {
    const target = event.target as Element | null;
    const element = target?.closest?.(INTERACTIVE_SELECTOR);
    if (!element) return;
    // Controls that manage sound themselves opt out (the toggle would otherwise
    // fire a click cue in the same tick it disables audio).
    if (element.closest('[data-sfx="off"]')) return;
    sfx.click();
  };

  doc.addEventListener('pointerover', onPointerOver, { passive: true });
  doc.addEventListener('click', onClick, { passive: true });

  return () => {
    doc.removeEventListener('pointerover', onPointerOver);
    doc.removeEventListener('click', onClick);
  };
}
