import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';
import ConnectButton from '@/components/Header/ConnectButton';
import { translateTo } from '@/lib/translator';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const [spacesExpanded, setSpacesExpanded] = useState(false);
  const [languageExpanded, setLanguageExpanded] = useState(false);

  if (!isMenuOpen) return null;

  // Navegación principal ordenada alfabéticamente (Home eliminado, se usa el Logo)
  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/alien-trip", label: "AlienTrip" },
    { to: "/contact", label: "Contact" }
  ];

  // Espacios ordenados alfabéticamente
  const spaceLinks = [
    { to: "/academy", label: "Academy", desc: "Cosmic knowledge and Tesla science" },
    { to: "/clubs", label: "Clubs", desc: "Specialized multiverse communities" },
    { to: "/conetworking", label: "CoNetWorKing", desc: "Professional Bio-Networking" }
  ].sort((a, b) => a.label.localeCompare(b.label));

  const languages = [
    { code: 'us', name: 'English', lang: 'en' },
    { code: 'es', name: 'Español', lang: 'es' },
    { code: 'fr', name: 'Français', lang: 'fr' },
    { code: 'cn', name: '汉语 (Hànyǔ)', lang: 'zh' },
    { code: 'in', name: 'हिन्दी (Hindī)', lang: 'hi' },
    { code: 'pt', name: 'Português', lang: 'pt' },
    { code: 'jp', name: '日本語 (Nihongo)', lang: 'ja' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-black/95 backdrop-blur-2xl absolute w-full z-50 top-full shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-b border-alien-green/20"
    >
      <div className="container mx-auto px-6 py-8 max-h-[80vh] overflow-y-auto">
        <nav className="flex flex-col space-y-4">
          
          {/* Main Links */}
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                to={link.to} 
                className="text-alien-gold text-lg font-nasalization tracking-widest hover:text-alien-green transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Explore Spaces (Acordeón UI) */}
          <div className="py-2">
            <button
              onClick={() => setSpacesExpanded(!spacesExpanded)}
              className="w-full flex justify-between items-center bg-alien-green/5 border border-alien-green/20 p-4 rounded-xl text-alien-green font-nasalization text-sm tracking-widest"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-alien-gold" />
                <span>EXPLORE SPACES</span>
              </div>
              <motion.div animate={{ rotate: spacesExpanded ? 180 : 0 }}>
                <ChevronDown size={18} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {spacesExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white/5 rounded-b-xl mt-[-10px] pt-4"
                >
                  {spaceLinks.map((link) => (
                    <Link 
                      key={link.to} 
                      to={link.to} 
                      className="block p-4 border-b border-white/5 last:border-0 hover:bg-alien-green/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <h4 className="text-alien-gold font-nasalization text-sm">{link.label}</h4>
                      <p className="text-[10px] text-gray-500 mt-1">{link.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Language Selector */}
          <div className="py-2">
            <button
              onClick={() => setLanguageExpanded(!languageExpanded)}
              className="w-full flex justify-between items-center text-alien-gold/70 font-nasalization text-xs p-2"
            >
              <div className="flex items-center gap-2 uppercase tracking-tighter">
                <Globe size={14} />
                <span>Select Language</span>
              </div>
              <ChevronDown size={14} className={languageExpanded ? 'rotate-180' : ''} />
            </button>
            
            {languageExpanded && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { translateTo(lang.lang); setIsMenuOpen(false); }}
                    className="flex items-center gap-3 bg-white/5 p-3 rounded-lg hover:bg-alien-green/20 transition-all"
                  >
                    <img src={`https://flagcdn.com/w20/${lang.code}.png`} className="w-4 h-auto rounded-sm" alt={lang.name} />
                    <span className="text-[10px] text-alien-gold uppercase">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Web3 Connect */}
          <div className="pt-6 border-t border-white/10 flex justify-center">
            <ConnectButton />
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileNav;
