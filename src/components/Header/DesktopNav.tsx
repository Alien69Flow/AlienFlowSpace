import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown, ArrowLeftRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { translateTo } from '@/lib/translator';

interface DesktopNavProps {
  isCompact?: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isCompact = false }) => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/alien-trip", label: "AlienTrip" },
    { to: "/contact", label: "Contact" }
  ];

  const spaceLinks = [
    { to: "/academy", label: "Academy", desc: "Unlock cosmic knowledge through educational resources" },
    { to: "/clubs", label: "Clubs", desc: "Join specialized communities focused on interests" },
    { to: "/conetworking", label: "CoNetWorKing", desc: "Connect with like-minded profits across the multiverse" }
  ];

  const languages = [
    { code: 'us', name: 'English', lang: 'en' },
    { code: 'es', name: 'Español', lang: 'es' },
    { code: 'fr', name: 'Français', lang: 'fr' },
    { code: 'cn', name: '汉语 (Hànyǔ)', lang: 'zh' },
    { code: 'in', name: 'हिन्दी (Hindī)', lang: 'hi' },
    { code: 'pt', name: 'Português', lang: 'pt' },
    { code: 'jp', name: '日本語 (Nihongo)', lang: 'ja' }
  ];

  const handleLanguageSelect = (lang: string) => {
    translateTo(lang);
  };

  return (
    <nav className="hidden lg:flex items-center gap-6">
      <div className={`flex items-center ${isCompact ? 'space-x-4' : 'space-x-6'}`}>
        {/* Main Navigation */}
        {navLinks.map((link) => (
          <Link 
            key={link.to}
            to={link.to} 
            className={`text-alien-gold hover:text-alien-green font-nasalization transition-all duration-300 hover:scale-105 relative group ${
              isCompact ? 'text-sm px-2 py-1' : 'px-3 py-2'
            }`}
          >
            {link.label}
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-alien-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
        
        {/* Explore Spaces Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light/20 rounded-lg flex items-center group font-nasalization transition-all duration-300 hover:scale-105 ${
                isCompact ? 'text-sm px-2 py-1' : 'px-3 py-2'
              }`}
            >
              <span>{isCompact ? 'Spaces' : 'Explore Spaces'}</span>
              <ChevronDown className={`ml-1 transform transition-transform duration-300 group-data-[state=open]:rotate-180 ${isCompact ? 'h-3 w-3' : 'h-4 w-4'}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-alien-space-dark/95 backdrop-blur-md border border-alien-gold/30 p-2 rounded-xl w-[380px] shadow-2xl shadow-alien-gold/10 z-[9999]"
            sideOffset={8}
          >
            <div className="flex flex-col space-y-1">
              {spaceLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link 
                    to={link.to} 
                    className="flex flex-col items-start p-4 rounded-lg hover:bg-alien-space-light/30 group cursor-pointer transition-all duration-300"
                  >
                    <h3 className="text-alien-gold group-hover:text-alien-green mb-2 font-nasalization font-semibold transition-colors duration-300">
                      {link.label}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                      {link.desc}
                    </p>
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* DEX Button */}
        <a
          href="https://app.uniswap.org/swap"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 bg-gradient-to-r from-alien-green/20 to-alien-gold/20 hover:from-alien-green/30 hover:to-alien-gold/30 border border-alien-green/40 hover:border-alien-green/60 rounded-full font-nasalization text-alien-green hover:text-alien-gold transition-all duration-300 hover:scale-105 ${
            isCompact ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1.5'
          }`}
        >
          <ArrowLeftRight className={isCompact ? 'w-3 h-3' : 'w-4 h-4'} />
          <span>DEX</span>
        </a>
        
        {/* Language Selector Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`flex items-center text-alien-gold hover:text-alien-green focus:outline-none group hover:bg-alien-space-light/20 rounded-lg transition-all duration-300 hover:scale-105 ${
                isCompact ? 'p-1.5' : 'p-2'
              }`}
            >
              <Globe className={isCompact ? 'h-4 w-4' : 'h-5 w-5'} />
              <ChevronDown className={`ml-1 transform transition-transform duration-300 group-data-[state=open]:rotate-180 ${isCompact ? 'h-3 w-3' : 'h-4 w-4'}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-alien-space-dark/95 backdrop-blur-md border border-alien-gold/30 p-2 rounded-xl w-[240px] shadow-2xl shadow-alien-gold/10 z-[9999] max-h-80 overflow-y-auto"
            align="end"
            sideOffset={8}
          >
            <div className="flex flex-col space-y-1">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code} 
                  className="flex items-center gap-3 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/30 cursor-pointer p-3 rounded-lg transition-all duration-300"
                  onSelect={(e) => { e.preventDefault(); handleLanguageSelect(lang.lang); }}
                >
                  <img 
                    src={`https://flagcdn.com/w20/${lang.code}.png`} 
                    alt={`${lang.name} flag`} 
                    className="w-5 h-4 rounded-sm" 
                  />
                  <span className="font-medium">{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default DesktopNav;