import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useScroll } from '@/hooks/use-scroll';
import Logo from '@/components/Header/Logo';
import DesktopNav from '@/components/Header/DesktopNav';
import MobileNav from '@/components/Header/MobileNav';
import ConnectButton from '@/components/Header/ConnectButton';

/**
 * The hamburger switches at the same breakpoint as the desktop nav (`lg`), and
 * only in CSS. Previously the button was driven by `useIsMobile` (< 768px) while
 * the desktop nav starts at 1024px, so between 768px and 1023px there was no
 * navigation at all.
 */
const DESKTOP_QUERY = '(min-width: 1024px)';

const Header = () => {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // A sheet left open would hide the page after navigating.
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Resizing up to desktop closes the sheet instead of leaving it behind the bar.
  React.useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (mql.matches) setIsMenuOpen(false);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // Lock the page while the sheet is open, and restore whatever was there before.
  React.useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 af-header ${
        isScrolled ? 'af-header--scrolled' : ''
      }`}
    >
      {/* `relative z-[60]` keeps the bar itself above the sheet scrim. */}
      <div className="container relative z-[60] mx-auto px-4 lg:px-6 af-header__bar justify-between gap-3">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center">
            <ConnectButton />
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="af-icon-btn lg:hidden"
            aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className="af-header__ruler" aria-hidden="true" />

      <AnimatePresence>
        {isMenuOpen && <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
