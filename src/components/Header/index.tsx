
import React from 'react';
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScroll } from "@/hooks/use-scroll";
import Logo from "@/components/Header/Logo";
import DesktopNav from "@/components/Header/DesktopNav";
import MobileNav from "@/components/Header/MobileNav";
import ConnectButton from "@/components/Header/ConnectButton";
import PriceTicker from "@/components/PriceTicker";

const Header = () => {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return (
      <div className="bg-alien-space-dark h-14 w-full flex items-center justify-center font-nasalization">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/ALogo.png" alt="AlienFlowSpace" className="h-8 w-8 animate-pulse" />
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-alien-gold rounded-full animate-bounce" style={{animationDelay:'0s'}}></span>
            <span className="w-1.5 h-1.5 bg-alien-gold rounded-full animate-bounce" style={{animationDelay:'0.15s'}}></span>
            <span className="w-1.5 h-1.5 bg-alien-gold rounded-full animate-bounce" style={{animationDelay:'0.3s'}}></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-0.5 bg-black/95 shadow-lg shadow-alien-gold/10" 
          : "py-1 bg-black/90"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center relative py-2">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2">
          {!isMobile && <ConnectButton />}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 text-alien-gold hover:text-alien-green transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-alien-gold/50 rounded-lg ${
                isMenuOpen ? 'bg-alien-space-light/30' : 'hover:bg-alien-space-light/20'
              }`}
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              data-state={isMenuOpen ? "open" : "closed"}
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
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
      
      <div className="w-full border-t border-alien-gold/20 border-b border-alien-gold/20 bg-transparent">
        <PriceTicker />
      </div>
    </header>
  );
};

export default Header;
