# Project memory

## Product intent & audience

- Multi-language website supporting English, Spanish, Portuguese, and French via real URL paths (`/`, `/es/`, `/pt/`, `/fr/`) for SEO indexability.

## Brand personality & voice

- User communicates in Spanish; assistant responds in Spanish for this project.

## Visual design & UX direction

- Language selector uses a **planet icon** dropdown — already present in desktop nav and mobile menu; this is the canonical single selector.
- Avoid adding duplicate language switchers; reuse the existing planet-icon component.
- Mobile and desktop nav each have their own instance of the planet dropdown.

## Decisions, constraints & rationale

- **Migrated from Google Translate to URL-based i18n.** Google Translate was fully removed (script from Layout, `translator.ts`).
- A redundant `LanguageSwitcher` component was added by mistake and then removed.
- The existing planet-icon dropdown was rewired to use the new `useLanguage` hook instead of Google Translate.
- Only languages with real URLs are offered: English, Spanish, Portuguese, French (4 total).
- Rationale: real URLs per language are better for SEO than auto-translation.

## Open questions & assumptions

- Assumes `useLanguage` hook handles route switching to `/`, `/es/`, `/pt/`, `/fr/` correctly.
- Content for each language is assumed to exist at those URL paths (not auto-translated).
- No info yet on whether all pages have translated content or if some fall back to English.