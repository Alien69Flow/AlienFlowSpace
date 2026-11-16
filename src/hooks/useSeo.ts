import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getSeoMeta,
  buildCanonical,
  buildHreflangAlternates,
  SITE_URL,
  type SupportedLang,
} from '@/lib/seo';
import { generateJsonLd } from '@/lib/structuredData';

interface UseSeoOptions {
  lang?: SupportedLang;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string): void {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>): void {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string): void {
  const el = document.getElementById(id);
  if (el) el.remove();
}

export function useSeo({ lang = 'en' }: UseSeoOptions = {}): void {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const meta = getSeoMeta(path);
    if (!meta) return;

    const title = meta.title[lang] || meta.title.en;
    const description = meta.description[lang] || meta.description.en;
    const canonical = buildCanonical(path, lang);
    const ogImage = meta.ogImage
      ? meta.ogImage.startsWith('http') ? meta.ogImage : `${SITE_URL}${meta.ogImage}`
      : `${SITE_URL}/lovable-uploads/ALogo.png`;

    document.title = title;

    upsertMeta('name', 'description', description);

    if (meta.keywords?.length) {
      upsertMeta('name', 'keywords', meta.keywords.join(', '));
    }

    upsertMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow');

    upsertLink('canonical', canonical);

    const alternates = buildHreflangAlternates(path);
    alternates.forEach(({ lang: altLang, href }) => {
      upsertLink('alternate', href, altLang);
    });
    upsertLink('alternate', alternates[0]?.href || canonical, 'x-default');

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:type', meta.type || 'website');
    upsertMeta('property', 'og:locale', lang);
    upsertMeta('property', 'og:site_name', 'AlienFlowSpace DAO');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    const jsonLdType = meta.jsonLdType || 'none';
    if (jsonLdType === 'none') {
      removeJsonLd('af-jsonld-page');
    } else {
      const data = generateJsonLd({ path, lang, type: jsonLdType as 'organization' | 'website' | 'course' | 'product' | 'breadcrumb' | 'faq' | 'none' });
      if (data) {
        upsertJsonLd('af-jsonld-page', data);
      }
    }

    if (!meta.noindex) {
      const breadcrumb = generateJsonLd({ path, lang, type: 'breadcrumb' });
      if (breadcrumb) upsertJsonLd('af-jsonld-breadcrumb', breadcrumb);
    } else {
      removeJsonLd('af-jsonld-breadcrumb');
    }
  }, [path, lang]);
}
