/**
 * Affiliate links have to be disclosed as such (`rel="sponsored"`), which is both a
 * search-engine requirement and a legal one in the EU, and their clicks have to be
 * counted or the revenue they produce cannot be seen. The three pages that publish
 * them keep their link lists in three different shapes, so the rule lives here, keyed
 * by host, instead of being repeated — and getting out of sync — in each of them.
 */
const AFFILIATE_HOSTS = ['aads.com', 'partner.bitget.com', 'bitget.com', 'lovable.dev'];

export const isAffiliateUrl = (url?: string): boolean => {
  if (!url) return false;
  try {
    const { hostname } = new URL(url);
    return AFFILIATE_HOSTS.some((host) => hostname === host || hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
};

/** The value handed to analytics: the bare host, never the full URL with its parameters. */
export const hostLabel = (url?: string): string => {
  if (!url) return 'unknown';
  try {
    return new URL(url).hostname;
  } catch {
    return 'unknown';
  }
};
