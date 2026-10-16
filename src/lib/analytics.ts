import { track } from '@vercel/analytics';

/**
 * Measurement layer. @vercel/analytics and @vercel/speed-insights were installed and
 * never called, so the site had no instrument at all: nothing could be counted, and a
 * change could not be proven to help. These events are the ones that map to money.
 *
 * Vercel Analytics only sends from a Vercel deployment; anywhere else `track` is a
 * no-op, which is why wrapping it in try/catch is enough — and why measurement must
 * never be allowed to break the interaction it is measuring.
 */
export type ConversionEvent =
  | 'cta_click'
  | 'chat_open'
  | 'affiliate_click'
  | 'outbound_click'
  | 'newsletter_submit'
  | 'newsletter_success'
  | 'newsletter_fallback'
  | 'newsletter_error';

export const trackEvent = (
  event: ConversionEvent,
  props?: Record<string, string | number | boolean>,
): void => {
  try {
    track(event, props);
  } catch {
    /* a failed beacon is not a failed click */
  }
};
