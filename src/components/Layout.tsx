import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';
import AIChatbot from './AIChatbot';
import { initGoogleTranslate } from '@/lib/translator';

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    initGoogleTranslate();
  }, []);

  const bgMap: Record<string, string> = {
    '/': "/lovable-uploads/EMWBack.png",
    '/about': "/lovable-uploads/AboutBG.png",
    '/alien-trip': "/lovable-uploads/BGRCM.png",
    '/contact': "/lovable-uploads/BGVL.png",
    '/academy': "/lovable-uploads/AcademyBG.png",
    '/clubs': "/lovable-uploads/ClubsBG.png",
    '/conetworking': "/lovable-uploads/CoNetWorKingBG.png",
  };

  const bgImage = bgMap[location.pathname] || "/lovable-uploads/EMWBack.png";

  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollProgress />
      
      <div 
        className="fixed inset-0 -z-30 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="fixed inset-0 -z-20 pointer-events-none bg-alien-space-dark/75" />

      <div id="google_translate_element" className="hidden" aria-hidden="true"></div>
      <Header />

      <main className="flex-1 relative z-10 pt-16 lg:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <CookieConsent />
      <ScrollToTop />
      <AIChatbot />
    </div>
  );
};

export default Layout;
