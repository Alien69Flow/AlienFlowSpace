
import React from 'react';
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScroll } from "@/hooks/use-scroll";
import Logo from "@/components/Header/Logo";
import DesktopNav from "@/components/Header/DesktopNav";
import MobileNav from "@/components/Header/MobileNav";
import ConnectButton from "@/components/Header/ConnectButton";
import SoundToggle from "@/components/SoundToggle";

const Header = () => {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-0 bg-af-bg/98" 
          : "py-0 bg-af-bg/95"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center relative py-2 border-b border-af-border-hairline">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <SoundToggle />
          {!isMobile && <ConnectButton />}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 text-alien-gold hover:text-alien-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-alien-gold/50 rounded-lg ${
                isMenuOpen ? 'bg-af-surface-2/40' : 'hover:bg-af-surface-2/20'
              }`}
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              data-state={isMenuOpen ? "open" : "closed"}
            >
              <div className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
