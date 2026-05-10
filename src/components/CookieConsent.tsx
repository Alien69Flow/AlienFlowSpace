import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-alien-space-dark/95 backdrop-blur-md border-2 border-alien-gold/30 rounded-xl p-6 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                {/* Icon and Message */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-2 bg-alien-gold/20 rounded-lg flex-shrink-0">
                    <Cookie className="h-6 w-6 text-alien-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-alien-gold font-bold font-nasalization mb-2">
                      Cookie Notice
                    </h3>
                    <p className="text-gray-200 text-sm font-[Exo] leading-relaxed">
                      We use cookies to enhance your experience, analyze site traffic, and provide 
                      personalized content. By clicking "Accept", you consent to our use of cookies.{' '}
                      <Link 
                        to="/privacy-policy" 
                        className="text-alien-gold hover:text-alien-gold-light underline"
                        onClick={() => setShowBanner(false)}
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 w-full lg:w-auto lg:flex-shrink-0">
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="flex-1 lg:flex-none border-alien-gold/50 text-alien-gold hover:bg-alien-gold/10 hover:border-alien-gold font-[Exo]"
                  >
                    Decline
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="flex-1 lg:flex-none bg-alien-gold text-alien-space-dark hover:bg-alien-gold-light font-[Exo] font-semibold"
                  >
                    Accept
                  </Button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleDecline}
                  className="absolute top-3 right-3 lg:relative lg:top-0 lg:right-0 p-1 text-gray-400 hover:text-alien-gold transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
