# Project memory

## Product intent & audience

- Multi-language website supporting 7 languages via real URL paths: English (`/`), Spanish (`/es/`), Portuguese (`/pt/`), French (`/fr/`), Chinese (`/zh/`), Hindi (`/hi/`), Japanese (`/ja/`) for SEO indexability.
- Domain: `alienflow.space`.
- Three core spaces: **Academy**, **Clubs**, **CoNetWorKing**.

## Brand personality & voice

- User communicates in Spanish; assistant responds in Spanish for this project.
- Tone: professional, global-world-class level.

## Visual design & UX direction

- Language selector uses a **planet icon** dropdown — present in desktop nav and mobile menu; canonical single selector. Avoid duplicate switchers.
- **"Explore Spaces" dropdown**: professional, global-level aesthetic — clean rows with logo, title, one-line description, and entry arrow.
- Each space has a single improved description used consistently across desktop nav, mobile nav, and homepage "Explore Spaces" section (fixes prior "like-minded profits" typo/error).

## Decisions, constraints & rationale

- **Migrated from Google Translate to URL-based i18n.** Google Translate fully removed.
- All 7 languages have real URLs, SEO titles/descriptions, nav translations, sitemap + hreflang, structured data breadcrumbs, and Vercel rewrites.
- **Contact email**: `contact@alienflow.space` — used in footer, loading screen, Google structured data, privacy policy, and terms.
- **Newsletter email**: `69@alienflow.space` — used exclusively for newsletter subscriptions.
- Rationale: real URLs per language better for SEO; separate newsletter email keeps subscriptions isolated from general contact.

## Open questions & assumptions

- Assumes `useLanguage` hook handles route switching to all 7 URL paths correctly.
- Assumes translated content exists at each language URL path (not auto-translated).
- No info yet on whether all pages have translated content or if some fall back to English.