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
import { motion } from 'framer-motion';

const DesktopNav = () => {
  const location = useLocation();

  // Links principales en orden alfabético
  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/alien-trip", label: "AlienTrip" },
    { to: "/contact", label: "Contact" }
  ];

  // Espacios ordenados alfabéticamente
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
    <nav className="hidden lg:flex items-center gap-8 bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-1.5 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.3)]">
      
      {/* Navegación Principal */}
      <div className="flex items-center space-x-2">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 font-nasalization text-[11px] tracking-[0.2em] transition-all duration-300 relative group ${
              location.pathname === link.to ? "text-alien-green" : "text-alien-gold hover:text-white"
            }`}
          >
            {link.label}
            {location.pathname === link.to && (
              <motion.div 
                layoutId="nav-glow"
                className="absolute inset-0 bg-alien-green/10 rounded-full -z-10 blur-sm"
              />
            )}
          </Link>
        ))}
      </div>

      {/* BOTÓN OVNI: EXPLORE SPACES */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="bg-alien-space-light/10 hover:bg-alien-space-light/20 border border-alien-green/30 text-alien-green font-nasalization text-[10px] tracking-[0.3em] px-5 rounded-full h-9 group transition-all shadow-[0_0_15px_rgba(57,255,20,0.1)]"
          >
            <Sparkles className="w-3 h-3 mr-2 animate-pulse text-alien-gold" />
            EXPLORE SPACES
            <ChevronDown className="ml-2 h-3 w-3 opacity-50 group-data-[state=open]:rotate-180 transition-transform" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-alien-space-dark/95 backdrop-blur-2xl border border-alien-gold/30 p-2 rounded-2xl w-[350px] shadow-2xl z-[9999]"
          sideOffset={12}
        >
          {spaceLinks.map((link) => (
            <DropdownMenuItem key={link.to} asChild>
              <Link
                to={link.to}
                className="flex flex-col items-start p-4 rounded-xl hover:bg-alien-green/10 group transition-all"
              >
                <h3 className="text-alien-gold group-hover:text-alien-green font-nasalization text-sm transition-colors">
                  {link.label}
                </h3>
                <p className="text-[10px] text-gray-400 leading-relaxed mt-1">
                  {link.desc}
                </p>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Selector de Idioma con Banderas */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-alien-gold hover:text-alien-green p-2 h-9 w-9 rounded-full transition-transform hover:rotate-12">
            <Globe className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-alien-space-dark/95 backdrop-blur-xl border border-alien-gold/20 p-1 rounded-xl w-48">
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code} 
              onClick={() => translateTo(lang.lang)}
              className="flex items-center gap-3 p-2 hover:bg-white/5 cursor-pointer rounded-lg"
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
