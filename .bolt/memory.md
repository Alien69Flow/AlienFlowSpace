# Project memory

## Product intent & audience

- Multi-language website supporting 7 languages via real URL paths: English (`/`), Spanish (`/es/`), Portuguese (`/pt/`), French (`/fr/`), Chinese (`/zh/`), Hindi (`/hi/`), Japanese (`/ja/`) for SEO indexability.

## Brand personality & voice

- User communicates in Spanish; assistant responds in Spanish for this project.

## Visual design & UX direction

- Language selector uses a **planet icon** dropdown — present in desktop nav and mobile menu; canonical single selector.
- Avoid duplicate language switchers; reuse the existing planet-icon component.
- Mobile and desktop nav each have their own instance of the planet dropdown.
- Selector displays all 7 languages.

## Decisions, constraints & rationale

- **Migrated from Google Translate to URL-based i18n.** Google Translate fully removed (script from Layout, `translator.ts`).
- All 7 original languages now have real URLs (previously only 4 had URLs; Chinese, Hindi, Japanese were dropped during migration and then re-added).
- A redundant `LanguageSwitcher` component was added by mistake and then removed.
- The existing planet-icon dropdown was rewired to use `useLanguage` hook instead of Google Translate.
- For each language: SEO titles/descriptions, navigation translations, sitemap entries with cross-language hreflang tags, structured data breadcrumbs, and Vercel rewrites are configured.
- Rationale: real URLs per language are better for SEO than auto-translation.

## Open questions & assumptions

- Assumes `useLanguage` hook handles route switching to all 7 URL paths correctly.
- Content for each language is assumed to exist at those URL paths (not auto-translated).
- No info yet on whether all pages have translated content or if some fall back to English.