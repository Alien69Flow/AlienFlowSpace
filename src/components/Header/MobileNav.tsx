import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';
import ConnectButton from '@/components/Header/ConnectButton';
import SoundToggle from '@/components/SoundToggle';
import { translateTo } from '@/lib/translator';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

/**
 * Mobile navigation sheet: an opaque full-height panel under the bar, with a
 * dimming scrim over the page. The page behind it is scroll-locked by the
 * Header. Interface sound lives here too, so the menu holds every control.
 */
const MobileNav = ({ setIsMenuOpen }: MobileNavProps) => {
  const [spacesExpanded, setSpacesExpanded] = useState(false);
  const [languageExpanded, setLanguageExpanded] = useState(false);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/alien-trip", label: "AlienTrip" },
    { to: "/contact", label: "Contact" }
  ];

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
    <>
      {/* Scrim: dims the page and closes the sheet on tap. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-40 af-sheet-scrim lg:hidden"
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-full left-0 w-full z-50 af-sheet lg:hidden max-h-[calc(100dvh-3.5rem)] overflow-y-auto"
      >
        <nav className="container mx-auto px-4 py-5" aria-label="Mobile">
          <p className="af-menu-label mb-1">Navigate</p>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="af-sheet-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="mt-5">
            <p className="af-menu-label mb-1">Spaces</p>
            <button
              type="button"
              onClick={() => setSpacesExpanded(!spacesExpanded)}
              className="af-sheet-row text-alien-green text-[12px] tracking-[0.14em] uppercase"
              aria-expanded={spacesExpanded}
            >
              <span className="flex items-center gap-2">
                <Sparkles size={15} className="text-alien-gold" aria-hidden="true" />
                Explore spaces
              </span>
              <motion.span animate={{ rotate: spacesExpanded ? 180 : 0 }} className="flex">
                <ChevronDown size={16} aria-hidden="true" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {spacesExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden bg-white/[0.02]"
                >
                  {spaceLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="block px-3 py-3 border-b border-af-border-hairline last:border-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <h4 className="text-alien-gold text-sm">{link.label}</h4>
                      <p className="text-[11px] text-af-text-muted mt-1">{link.desc}</p>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-5">
            <p className="af-menu-label mb-1">Language</p>
            <button
              type="button"
              onClick={() => setLanguageExpanded(!languageExpanded)}
              className="af-sheet-row text-af-text-dim text-[12px] tracking-[0.14em] uppercase"
              aria-expanded={languageExpanded}
            >
              <span className="flex items-center gap-2">
                <Globe size={15} aria-hidden="true" />
                Select language
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform ${languageExpanded ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {languageExpanded && (
              <div className="grid grid-cols-2 gap-2 mt-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      translateTo(lang.lang);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2.5 border border-af-border-hairline p-2 hover:border-alien-green/40 hover:bg-alien-green/10 transition-colors"
                  >
                    <img src={`https://flagcdn.com/w20/${lang.code}.png`} className="w-4 h-auto rounded-sm" alt="" />
                    <span className="text-[11px] text-alien-gold uppercase">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Interface sound — inside the menu, as requested. */}
          <div className="mt-5">
            <p className="af-menu-label mb-1">Interface</p>
            <SoundToggle showLabel className="af-sheet-toggle-row" />
          </div>

          <div className="mt-5 pt-4 border-t border-af-border-hairline flex justify-center">
            <ConnectButton />
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default MobileNav;
