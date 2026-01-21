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
import CompactPriceTicker from "@/components/CompactPriceTicker";

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
    <>
      <motion.header
        initial={false}
        animate={{
          width: isScrolled ? (isMobile ? "92%" : "auto") : "100%",
          borderRadius: isScrolled ? "9999px" : "0px",
          y: isScrolled ? 12 : 0,
          scale: isScrolled ? 1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
          mass: 0.8,
        }}
        className={`fixed top-0 z-50 ${
          isScrolled 
            ? "left-1/2 -translate-x-1/2 bg-gradient-to-r from-alien-space-dark/98 via-black/95 to-alien-space-dark/98 backdrop-blur-xl shadow-[0_0_50px_rgba(57,255,20,0.2),0_0_100px_rgba(240,216,130,0.1)] border border-alien-gold/40" 
            : "left-0 w-full bg-black/90"
        }`}
        style={{
          boxShadow: isScrolled 
            ? "0 10px 40px -5px rgba(0, 0, 0, 0.6), 0 0 30px rgba(57,255,20,0.15), 0 0 60px rgba(240,216,130,0.08), inset 0 1px 0 rgba(255,255,255,0.08)" 
            : "none"
        }}
      >
        {/* UFO Glow Effects when scrolled */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            >
              {/* Animated top beam glow */}
              <motion.div 
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-alien-green/60 to-transparent blur-sm" 
              />
              {/* Bottom beam glow */}
              <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-1.5 bg-gradient-to-r from-transparent via-alien-gold/50 to-transparent blur-sm" 
              />
              {/* Side accent lights */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-0.5 w-1.5 h-1/2 bg-gradient-to-b from-transparent via-alien-green/40 to-transparent blur-sm rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 -right-0.5 w-1.5 h-1/2 bg-gradient-to-b from-transparent via-alien-green/40 to-transparent blur-sm rounded-full" />
              {/* Inner glow ring */}
              <div className="absolute inset-1 rounded-full border border-alien-gold/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`flex items-center relative ${
          isScrolled 
            ? "px-4 lg:px-6 py-2 justify-between gap-4" 
            : "container mx-auto px-4 lg:px-6 py-2 justify-between"
        }`}>
          {/* Logo with subtle animation on scroll */}
          <motion.div
            animate={{
              scale: isScrolled ? 0.85 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation - centered in UFO mode */}
          <div className={isScrolled ? "flex-1 flex justify-center" : ""}>
            <DesktopNav isCompact={isScrolled} />
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Compact Price Ticker in UFO mode (desktop only) */}
            {!isMobile && isScrolled && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="hidden xl:block"
              >
                <CompactPriceTicker />
              </motion.div>
            )}

            {!isMobile && (
              <motion.div
                animate={{
                  scale: isScrolled ? 0.9 : 1,
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
      </motion.header>

      {/* Price Ticker - Full width, only show when not in UFO mode */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 lg:top-16 left-0 right-0 z-40 border-b border-alien-gold/20 bg-black/80 backdrop-blur-sm"
          >
            <PriceTicker />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;