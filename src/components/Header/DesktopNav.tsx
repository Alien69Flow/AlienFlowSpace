import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { translateTo } from '@/lib/translator';

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

  return (
    <nav className="hidden lg:flex items-center gap-3 border border-af-border-hairline px-4 py-1.5 bg-af-surface/40">
      
      <div className="flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-3 py-1.5 font-nasalization text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 border rounded-full ${
              location.pathname === link.to
                ? "text-alien-green border-alien-green/40 bg-alien-green/5"
                : "text-af-text-muted border-transparent hover:text-alien-gold hover:border-af-border"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="w-px h-5 bg-af-border-hairline" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="af-pill af-pill-outline text-alien-green !text-[10px] !tracking-[0.2em] !py-1.5 !px-4"
          >
            <Sparkles className="w-3 h-3 text-alien-gold" />
            EXPLORE SPACES
            <ChevronDown className="ml-1 h-3 w-3 opacity-50 group-data-[state=open]:rotate-180 transition-transform" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-af-surface/98 border border-af-border-strong p-1 rounded-none w-[320px] z-[9999]"
          sideOffset={8}
        >
          {spaceLinks.map((link) => (
            <DropdownMenuItem key={link.to} asChild>
              <Link
                to={link.to}
                className="flex flex-col items-start p-3 border-b border-af-border-hairline last:border-0 hover:bg-alien-green/5 group transition-colors"
              >
                <h3 className="text-alien-gold group-hover:text-alien-green font-nasalization text-sm transition-colors">
                  {link.label}
                </h3>
                <p className="text-[10px] text-af-text-muted leading-relaxed mt-1">
                  {link.desc}
                </p>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 text-alien-gold/70 hover:text-alien-green transition-colors rounded-full">
            <Globe className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-af-surface/98 border border-af-border p-1 rounded-none w-48">
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code} 
              onClick={() => translateTo(lang.lang)}
              className="flex items-center gap-3 p-2 hover:bg-alien-green/10 cursor-pointer"
            >
              <img src={`https://flagcdn.com/w20/${lang.code}.png`} className="w-5 h-auto rounded-sm" alt={lang.name} />
              <span className="text-[11px] font-nasalization text-alien-gold">{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default DesktopNav;
