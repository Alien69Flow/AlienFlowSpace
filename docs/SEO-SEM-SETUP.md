# SEO & SEM Setup Guide — AlienFlowSpace DAO

This guide covers every manual step needed to complete the professional SEO/SEM setup. The code-level work (meta tags, structured data, sitemap, multi-language routing) is already implemented in the codebase.

---

## 1. Google Search Console (GSC)

### Create and verify your account

1. Go to https://search.google.com/search-console
2. Sign in with your Google account
3. Click "Add property" and choose "URL prefix"
4. Enter `https://alienflow.space/`
5. Verify ownership using one of:
   - **HTML meta tag**: Add the provided `<meta name="google-site-verification" ...>` tag to `index.html` inside `<head>`
   - **DNS TXT record**: Add the TXT record to your domain's DNS (recommended — verifies all subdomains)
6. Repeat for each language prefix if you want separate properties:
   - `https://alienflow.space/es/`
   - `https://alienflow.space/pt/`
   - `https://alienflow.space/fr/`

### Submit your sitemap

1. In GSC, go to "Sitemaps"
2. Enter `sitemap.xml` and click "Submit"
3. Check back in 24-48 hours for indexing status

### Monitor

- Check "Coverage" regularly for indexing errors
- Check "Core Web Vitals" for performance metrics
- Set up email alerts for critical issues

---

## 2. Google Analytics 4 (GA4)

### Setup

1. Go to https://analytics.google.com
2. Create a new property for "AlienFlowSpace DAO"
3. Set up a web data stream with URL `https://alienflow.space`
4. Copy the Measurement ID (format: `G-XXXXXXXXXX`)
5. Add the GA4 script to `index.html` or use the `@vercel/analytics` package already installed

### Key conversions to track

The following events are already instrumented in `src/lib/analytics.ts`:

| Event | What it measures |
|---|---|
| `cta_click` | Clicks on call-to-action buttons |
| `chat_open` | AI chatbot opened |
| `affiliate_click` | Clicks on affiliate links |
| `outbound_click` | Clicks on external links |
| `newsletter_submit` | Newsletter form submitted |
| `newsletter_success` | Newsletter subscription confirmed |
| `newsletter_error` | Newsletter subscription failed |
| `ad_impression` | Ad banner visible |
| `ad_click` | Ad banner clicked |
| `merch_click` | Eco product clicked |

Mark these as conversions in GA4: Admin > Events > toggle "Mark as conversion"

---

## 3. Google Ads (SEM)

### Create your account

1. Go to https://ads.google.com
2. Create a new account (not Smart Mode — use Expert Mode)
3. Set your billing country and currency

### Keyword strategy by page

| Page | Primary keywords | Match type |
|---|---|---|
| Home | `dao blockchain`, `web3 ecosystem`, `defi dao` | Phrase |
| Academy | `learn blockchain`, `web3 courses`, `defi education` | Phrase |
| Clubs | `crypto community`, `nft club`, `dao membership` | Phrase |
| CoNetWorKing | `defi services`, `dex exchange`, `staking crypto` | Phrase |
| AlienTrip | `nft mint`, `dao tokenomics`, `nft passport` | Phrase |

### Campaign structure

1. **Search campaign** — Target each page with its own ad group
2. **Display campaign** — Retargeting for visitors who didn't convert
3. **Performance Max** — Automated across Google networks

### Conversion tracking

1. In Google Ads, go to Tools > Conversions
2. Create a new conversion action for each event listed above
3. Link your GA4 property to Google Ads (Admin > Linked accounts)
4. Import the GA4 conversions into Google Ads

### Targeting

- **Languages**: English, Spanish, Portuguese, French
- **Locations**: Global (with separate ad groups for LATAM, Europe, and international)
- **Budget**: Start with $10-20/day per campaign, scale based on ROAS

---

## 4. Google Merchant Center (for eco products)

### Setup

1. Go to https://merchants.google.com
2. Create a new merchant account
3. Link it to your Google Ads account
4. Verify your domain (same as GSC verification)

### Product feed

The eco products (hats, earrings) are defined in `src/data/merch.ts`. To list them in Merchant Center:

1. Create a product feed (CSV or XML) with:
   - Product ID, title, description
   - Image URL (use the `lovable-uploads/eco-*` paths)
   - Price (when set in merch.ts)
   - Availability (set to "out of stock" for products without a `url`)
   - Category: Apparel & Accessories > Headwear / Jewelry
2. Upload the feed or connect via Content API
3. Once approved, products appear in Google Shopping tabs and Shopping ads

### Important

- Products without a `url` in `merch.ts` cannot be purchased yet — mark them as "out of stock" in the feed
- When you add real store URLs and prices to `merch.ts`, update the Merchant Center feed accordingly

---

## 5. Backlink Strategy

### Priority profiles to create

1. **GitHub Organization**: https://github.com/Alien69Flow (already exists — add a link to alienflow.space in the org description)
2. **Crunchbase**: Create a company profile for AlienFlowSpace DAO
3. **Product Hunt**: Launch the DAO platform
4. **Mirror.xyz**: Publish DAO articles on Mirror (Web3-native publishing)
5. **DAO-specific directories**: Submit to daolist.net, deepdao.io, boardroom.io
6. **Web3 directories**: Submit to dapp.com, dappradar.com, stateofthedapps.com

### Content marketing

- Publish a blog or news section with weekly updates about the DAO, token launches, and ecosystem news
- Write guest posts on Web3 media sites (CoinTelegraph, Decrypt, Bankless)
- Create educational content on the Academy page that ranks for "learn blockchain" queries

---

## 6. Ongoing Maintenance

### Monthly

- Review GSC for new indexing errors
- Check Core Web Vitals scores
- Review keyword positions and adjust ad bids
- Update sitemap `lastmod` dates after content changes

### Quarterly

- Audit structured data with Google Rich Results Test
- Review and update keyword strategy
- Check competitor rankings
- Review and optimize ad copy

### After any content change

- The `useSeo` hook automatically updates meta tags on page navigation
- If you add a new page, add its metadata to `src/lib/seo.ts` in the `SEO_PAGES` object
- If you add a new language, add translations to `src/lib/seo.ts` and `src/i18n/LanguageContext.tsx`
- Update `public/sitemap.xml` with the new URLs
- Submit the updated sitemap in Google Search Console

---

## Technical SEO summary (already implemented)

| Feature | File | Status |
|---|---|---|
| Dynamic meta tags per page | `src/hooks/useSeo.ts` | Done |
| Per-page SEO metadata (4 languages) | `src/lib/seo.ts` | Done |
| JSON-LD structured data | `src/lib/structuredData.ts` | Done |
| Organization schema in HTML | `index.html` | Done |
| Multi-language routing (en/es/pt/fr) | `src/App.tsx` | Done |
| Language context & switcher | `src/i18n/LanguageContext.tsx` | Done |
| hreflang tags (4 languages + x-default) | `index.html` + `useSeo.ts` | Done |
| Sitemap with lastmod + multi-lang + images | `public/sitemap.xml` | Done |
| Vercel rewrites for language routes | `vercel.json` | Done |
| Image alt texts with keywords | All page components | Done |
| Analytics events for conversions | `src/lib/analytics.ts` | Done |
| Clean, indexable page titles | `src/lib/seo.ts` | Done |
| Breadcrumb structured data | `src/lib/structuredData.ts` | Done |
| Product structured data (eco products) | `src/lib/structuredData.ts` | Done |
| Course/EducationalOrg schema (Academy) | `src/lib/structuredData.ts` | Done |
| Legal pages marked noindex | `src/lib/seo.ts` | Done |
