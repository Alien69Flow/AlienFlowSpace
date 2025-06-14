
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const [spacesExpanded, setSpacesExpanded] = useState(false);
  const [languageExpanded, setLanguageExpanded] = useState(false);
  
  if (!isMenuOpen) return null;

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

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-alien-space-dark/95 backdrop-blur-md absolute w-full z-50 top-full shadow-2xl border-b border-alien-gold/20"
    >
      <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
        <nav className="flex flex-col space-y-2">
          {/* Main Navigation */}
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={link.to} 
                className="block text-alien-gold py-3 px-4 hover:text-alien-green hover:bg-alien-space-light/30 rounded-lg font-nasalization transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          
          {/* Explore Spaces Dropdown */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setSpacesExpanded(!spacesExpanded)}
              className="text-alien-gold py-3 px-4 hover:text-alien-green hover:bg-alien-space-light/30 rounded-lg flex justify-between items-center font-nasalization transition-all duration-300"
            >
              <span>Explore Spaces</span>
              <motion.div
                animate={{ rotate: spacesExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {spacesExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-2 mt-2 bg-alien-space-light/20 rounded-lg overflow-hidden"
                >
                  {spaceLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        to={link.to} 
                        className="block p-4 hover:bg-alien-space-light/30 text-alien-gold hover:text-alien-green transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <h3 className="font-nasalization font-semibold mb-1">{link.label}</h3>
                        <p className="text-xs text-gray-400 leading-tight">{link.desc}</p>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Language Selector */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setLanguageExpanded(!languageExpanded)}
              className="text-alien-gold py-3 px-4 hover:text-alien-green hover:bg-alien-space-light/30 rounded-lg flex items-center justify-between font-nasalization transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>Language</span>
              </div>
              <motion.div
                animate={{ rotate: languageExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {languageExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-2 mt-2 bg-alien-space-light/20 rounded-lg overflow-hidden max-h-48 overflow-y-auto"
                >
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.code}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-3 hover:bg-alien-space-light/30 cursor-pointer text-alien-gold hover:text-alien-green flex items-center gap-3 transition-all duration-300"
                    >
                      <img 
                        src={`https://flagcdn.com/w20/${lang.code}.png`} 
                        alt={`${lang.name} flag`} 
                        className="w-5 h-4 rounded-sm" 
                      />
                      <span className="text-sm">{lang.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Connect Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="w-full bg-alien-green hover:bg-alien-green-light text-alien-space-dark rounded-lg mt-4 py-3 flex items-center justify-center gap-3 font-nasalization transition-all duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/AW.png" 
                alt="Wallet" 
                className="h-6 w-6 rounded-full" 
              />
              <span>Connect Portal</span>
            </Button>
          </motion.div>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileNav;
