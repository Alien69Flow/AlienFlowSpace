import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import type { SupportedLang } from '@/lib/seo';
import { SUPPORTED_LANGS } from '@/lib/seo';

const LANG_LABELS: Record<SupportedLang, string> = {
  en: 'EN',
  es: 'ES',
  pt: 'PT',
  fr: 'FR',
};

const LANG_NAMES: Record<SupportedLang, string> = {
  en: 'English',
  es: 'Espanol',
  pt: 'Portugues',
  fr: 'Francais',
};

const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-[11px] font-nasalization tracking-wider text-alien-gold/70 hover:text-alien-gold border border-af-border-hairline hover:border-alien-gold/30 transition-colors"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{LANG_LABELS[lang]}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 z-50 min-w-[140px] border border-af-border bg-af-bg/95 backdrop-blur-md">
          {SUPPORTED_LANGS.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`flex items-center justify-between w-full px-3 py-2 text-xs font-nasalization tracking-wider transition-colors ${
                l === lang
                  ? 'text-alien-gold bg-af-surface/40'
                  : 'text-gray-400 hover:text-alien-green hover:bg-af-surface/20'
              }`}
            >
              <span>{LANG_NAMES[l]}</span>
              <span className="text-[10px] opacity-60">{LANG_LABELS[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
