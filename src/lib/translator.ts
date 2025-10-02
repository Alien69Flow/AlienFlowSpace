/* Simple in-page translation using Google Website Translator */

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export function initGoogleTranslate() {
  if (document.getElementById('google-translate-script')) return;
  // Define init callback
  window.googleTranslateElementInit = function () {
    try {
      // @ts-ignore - global google object injected by script
      new window.google.translate.TranslateElement({
        pageLanguage: 'auto',
        autoDisplay: false,
        layout: 0,
      }, 'google_translate_element');
    } catch (_) {
      // ignore
    }
  };
  const s = document.createElement('script');
  s.id = 'google-translate-script';
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.head.appendChild(s);
}

export function translateTo(lang: string) {
  // Set googtrans cookie so the widget translates in-place without new tabs
  const val = `/auto/${lang}`;
  try {
    const host = window.location.hostname;
    document.cookie = `googtrans=${val}; path=/;`;
    document.cookie = `googtrans=${val}; domain=.${host}; path=/;`;
    // Apply translation (widget reads cookie on load)
    setTimeout(() => window.location.reload(), 60);
  } catch (_) {
    // As a last resort, just reload
    window.location.reload();
  }
}
