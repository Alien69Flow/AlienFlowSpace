import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.header
      initial={false}
      animate={{
        width: isScrolled ? (isMobile ? "95%" : "85%") : "100%",
        borderRadius: isScrolled ? "9999px" : "0px",
        y: isScrolled ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      className={`fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "left-1/2 -translate-x-1/2 bg-gradient-to-r from-alien-space-dark/98 via-black/95 to-alien-space-dark/98 backdrop-blur-xl shadow-[0_0_40px_rgba(57,255,20,0.15),0_0_80px_rgba(240,216,130,0.1)] border border-alien-gold/30" 
          : "left-0 bg-black/90"
      }`}
      style={{
        boxShadow: isScrolled 
          ? "0 8px 32px -4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(57,255,20,0.1), inset 0 1px 0 rgba(255,255,255,0.05)" 
          : "none"
      }}
    >
      {/* UFO Glow Effect when scrolled */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
        >
          {/* Top beam glow */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-alien-green/50 to-transparent blur-sm" />
          {/* Bottom beam glow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-alien-gold/40 to-transparent blur-sm" />
          {/* Side accents */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-0.5 w-1 h-1/2 bg-gradient-to-b from-transparent via-alien-green/30 to-transparent blur-sm rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-0.5 w-1 h-1/2 bg-gradient-to-b from-transparent via-alien-green/30 to-transparent blur-sm rounded-full" />
        </motion.div>
      )}

      <div className={`container mx-auto flex justify-between items-center relative ${
        isScrolled ? "px-4 lg:px-8 py-2" : "px-4 lg:px-6 py-2"
      }`}>
        {/* Logo with subtle animation on scroll */}
        <motion.div
          animate={{
            scale: isScrolled ? 0.9 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {!isMobile && (
            <motion.div
              animate={{
                scale: isScrolled ? 0.95 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <ConnectButton />
            </motion.div>
          )}
          {isMobile && (
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className={`p-2 text-alien-gold hover:text-alien-green transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-alien-gold/50 rounded-lg ${
                isMenuOpen ? 'bg-alien-space-light/30' : 'hover:bg-alien-space-light/20'
              }`}
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              data-state={isMenuOpen ? "open" : "closed"}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          )}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </AnimatePresence>
      
      {/* Price Ticker - Only show when not in UFO mode */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full border-t border-alien-gold/20 border-b border-alien-gold/20 bg-transparent"
          >
            <PriceTicker />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
