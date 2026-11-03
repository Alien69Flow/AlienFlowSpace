/**
 * Cookie/ads consent — one source of truth for the whole app.
 *
 * The banner used to write `localStorage` on its own, so nothing else could know
 * whether the visitor had accepted: ad scripts would load regardless. Now the
 * banner and every ad slot read and write through here, and changes are
 * broadcast so a slot can react the moment the visitor clicks.
 */

export type ConsentState = 'accepted' | 'declined' | 'unset';

const STORAGE_KEY = 'cookie-consent';
const EVENT = 'af:consent-change';

export const readConsent = (): ConsentState => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'accepted' || stored === 'declined' ? stored : 'unset';
  } catch {
    // Storage blocked (private mode, third-party cookie policy): treat as unset.
    return 'unset';
  }
};

export const writeConsent = (state: Exclude<ConsentState, 'unset'>): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, state);
  } catch {
    /* the choice still applies to this page view */
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(EVENT, { detail: state }));
};

export const onConsentChange = (listener: (state: ConsentState) => void): (() => void) => {
  const handler = (event: Event) => listener((event as CustomEvent<ConsentState>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
};

/** True only for an explicit "accept": ads must never load on silence. */
export const hasAdsConsent = (): boolean => readConsent() === 'accepted';
