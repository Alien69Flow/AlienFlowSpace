import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SoundToggle from '@/components/SoundToggle';
import { useLanguage } from '@/i18n/LanguageContext';
import { spacesByAlpha } from '@/data/spaces';
import type { SupportedLang } from '@/lib/seo';

/**
 * Desktop navigation, built as one joined strip of bordered cells: a solid bar,
 * 1px hard edges, sharp corners and caps labels — the instrument-panel language
 * of the reference (https://gt-planar.com/), in AlienFlow's palette. Sound lives
 * inside this strip, so the whole interface is controlled from the menu.
 */
const DesktopNav = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/alien-trip", label: "AlienTrip" },
    { to: "/contact", label: "Contact" }
  ];

  const spaceLinks = spacesByAlpha.map((s) => ({ to: s.link, label: s.title, desc: s.short, icon: s.icon }));

  const { setLang, lang: activeLang } = useLanguage();

  const languages: Array<{ code: string; name: string; lang: SupportedLang }> = [
    { code: 'us', name: 'English', lang: 'en' },
    { code: 'es', name: 'Espanol', lang: 'es' },
    { code: 'fr', name: 'Francais', lang: 'fr' },
    { code: 'pt', name: 'Portugues', lang: 'pt' },
    { code: 'cn', name: '汉语', lang: 'zh' },
    { code: 'in', name: 'हिन्दी', lang: 'hi' },
    { code: 'jp', name: '日本語', lang: 'ja' }
  ];

  const inSpaces = spaceLinks.some((link) => link.to === location.pathname);

  return (
    <nav className="hidden lg:flex items-stretch af-nav" aria-label="Primary">
      {navLinks.map((link) => (
        <NavLink key={link.to} to={link.to} className="af-nav-cell">
          {link.label}
        </NavLink>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="af-nav-cell"
            aria-current={inSpaces ? 'page' : undefined}
          >
            <Sparkles className="w-3 h-3 text-alien-gold" aria-hidden="true" />
            {/* The text label only appears when there is room for it. */}
            <span className="hidden xl:inline">Explore spaces</span>
            <ChevronDown
              className="ml-1 h-3 w-3 opacity-60 transition-transform data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={6}
          className="af-panel rounded-none p-0 w-[400px] z-[9999] border border-af-border-hairline shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
        >
          <p className="px-4 pt-3 pb-2 text-[10px] font-nasalization tracking-[0.24em] uppercase text-af-text-muted border-b border-af-border-hairline">
            Ecosystem spaces
          </p>
          {spaceLinks.map((link) => (
            <DropdownMenuItem key={link.to} asChild>
              <NavLink
                to={link.to}
                className="group relative flex items-center gap-4 px-4 py-4 border-b border-af-border-hairline last:border-0 outline-none transition-colors duration-200 focus:bg-af-surface/40 data-[highlighted]:bg-af-surface/40"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[2px] bg-alien-green scale-y-0 transition-transform duration-200 group-data-[highlighted]:scale-y-100"
                />
                <img
                  src={link.icon}
                  alt=""
                  className="h-10 w-10 object-contain shrink-0 p-1.5 border border-af-border-hairline bg-af-surface/30 transition-colors duration-200 group-data-[highlighted]:border-alien-green/50"
                />
                <span className="flex-1 min-w-0">
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-alien-gold text-sm font-nasalization tracking-wide transition-colors duration-200 group-data-[highlighted]:text-alien-green">
                      {link.label}
                    </span>
                    <ArrowRight
                      className="h-3.5 w-3.5 text-alien-green opacity-0 -translate-x-1 transition-all duration-200 group-data-[highlighted]:opacity-100 group-data-[highlighted]:translate-x-0"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="block text-[11px] text-af-text-muted leading-relaxed mt-1">
                    {link.desc}
                  </span>
                </span>
              </NavLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className="af-nav-cell af-nav-cell--icon" aria-label="Select language" title="Select language">
            <img src="/lovable-uploads/ET.png" alt="" className="h-5 w-5 rounded-full object-cover" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={6} className="af-panel rounded-none p-0 w-52">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLang(lang.lang)}
              className={`af-panel__row flex items-center gap-3 p-2.5 ${lang.lang === activeLang ? 'bg-af-surface/40' : ''}`}
            >
              <img src={`https://flagcdn.com/w20/${lang.code}.png`} className="w-5 h-auto rounded-sm" alt="" />
              <span className="text-[11px] text-alien-gold">{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Interface sound — inside the menu, as requested. */}
      <SoundToggle className="af-nav-cell af-nav-cell--icon" />
    </nav>
  );
};

export default DesktopNav;
