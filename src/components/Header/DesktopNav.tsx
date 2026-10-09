import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SoundToggle from '@/components/SoundToggle';
import { translateTo } from '@/lib/translator';

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

  const spaceLinks = [
    { to: "/academy", label: "Academy", desc: "Unlock cosmic knowledge through educational resources" },
    { to: "/clubs", label: "Clubs", desc: "Join specialized communities focused on interests" },
    { to: "/conetworking", label: "CoNetWorKing", desc: "Connect with like-minded profits across the multiverse" }
  ].sort((a, b) => a.label.localeCompare(b.label));

  const languages = [
    { code: 'us', name: 'English', lang: 'en' },
    { code: 'es', name: 'Español', lang: 'es' },
    { code: 'fr', name: 'Français', lang: 'fr' },
    { code: 'cn', name: '汉语', lang: 'zh' },
    { code: 'in', name: 'हिन्दी', lang: 'hi' },
    { code: 'pt', name: 'Português', lang: 'pt' },
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
          className="af-panel rounded-none p-0 w-[330px] z-[9999]"
        >
          {spaceLinks.map((link) => (
            <DropdownMenuItem key={link.to} asChild>
              <NavLink to={link.to} className="af-panel__row p-3">
                <h3 className="text-alien-gold text-sm">{link.label}</h3>
                <p className="text-[11px] text-af-text-muted leading-relaxed mt-1">{link.desc}</p>
              </NavLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className="af-nav-cell af-nav-cell--icon" aria-label="Select language" title="Select language">
            <Globe className="h-4 w-4" aria-hidden="true" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={6} className="af-panel rounded-none p-0 w-52">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => translateTo(lang.lang)}
              className="af-panel__row flex items-center gap-3 p-2.5"
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
