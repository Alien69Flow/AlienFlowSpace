import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

interface PromoBannerProps {
  message: string;
  link?: string;
  linkText?: string;
  storageKey?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ 
  message = "🚀 Join the AlienFlowSpace DAO and get exclusive benefits!",
  link = "/conetworking",
  linkText = "Learn More",
  storageKey = "promo-banner-dismissed"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(storageKey);
    if (!dismissed) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(storageKey, 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-alien-gold via-alien-gold-light to-alien-gold 
            text-alien-space-dark py-2 px-4 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1 justify-center">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-exo text-sm font-medium">{message}</span>
              {link && (
                <a 
                  href={link}
                  className="font-nasalization text-xs underline underline-offset-2 hover:no-underline ml-2"
                >
                  {linkText}
                </a>
              )}
            </div>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-alien-space-dark/20 rounded transition-colors flex-shrink-0"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoBanner;
