/**
 * Affiliate links have to be disclosed as such (`rel="sponsored"`), which is both a
 * search-engine requirement and a legal one in the EU, and their clicks have to be
 * counted or the revenue they produce cannot be seen. The pages that publish them
 * keep their link lists in different shapes, so the rule lives here, keyed by host,
 * instead of being repeated — and getting out of sync — in each of them.
 *
 * The EcoFlow shop runs on Printify, Printful, Etsy, Amazon and Temu links, so those
 * hosts are listed too: publishing them without `sponsored` is the same problem as
 * an undisclosed paid post.
 */
const AFFILIATE_HOSTS = [
  // Crypto / tooling partner programmes already in use.
  'aads.com',
  'partner.bitget.com',
  'bitget.com',
  'lovable.dev',
  'freebuff.com',
  // Shop and marketplace programmes.
  'amzn.to',
  'amazon.com',
  'amazon.es',
  'amazon.co.uk',
  'amazon.de',
  'amazon.fr',
  'amazon.it',
  'amazon.nl',
  'amazon.se',
  'amazon.com.mx',
  'temu.com',
  'printify.com',
  'printful.com',
  'etsy.com',
  'redbubble.com',
  'aliexpress.com',
  'ebay.com',
  'ebay.es',
];

export const isAffiliateUrl = (url?: string): boolean => {
  if (!url) return false;
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, '');
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
