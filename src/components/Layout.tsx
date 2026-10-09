import React, { useEffect, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';
import AIChatbot from './AIChatbot';
import ErrorBoundary from './ErrorBoundary';
import { initGoogleTranslate } from '@/lib/translator';
import { attachGlobalSfx, sfx } from '@/lib/sound';

const Layout: React.FC = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  // Capture the outlet element itself. AnimatePresence keeps the previous child
  // element during the exit animation; if that child were a live <Outlet /> it
  // would re-read the router and show the *incoming* page twice.
  const outlet = useOutlet();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // One pair of delegated listeners gives every link, pill, button and card its
  // hover/click cue — components stay untouched.
  useEffect(() => attachGlobalSfx(), []);

  // Cue for entering a new scene. Skipped on first paint: there is no gesture yet,
  // so the browser would refuse to start audio anyway.
  useEffect(() => {
    if (previousPath.current === null) {
      previousPath.current = location.pathname;
      return;
    }
    if (previousPath.current === location.pathname) return;
    previousPath.current = location.pathname;
    sfx.navigate();
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
      <div className="fixed inset-0 -z-10 pointer-events-none depth-gradient" />

      <div id="google_translate_element" className="hidden" aria-hidden="true"></div>
      <Header />

      <main className="flex-1 relative z-10 pt-20 lg:pt-24">
        {/* Page transition. mode="wait" lets the outgoing scene finish before the
            next one arrives, so navigating reads as travelling rather than a cut.
            Motion is dropped (not merely shortened) when the visitor asked for
            reduced motion. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.12 }
                : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <ErrorBoundary>{outlet}</ErrorBoundary>
          </motion.div>
        </AnimatePresence>

        {/* Scene-change cues: a dark wash that lifts off the new page plus a HUD
            scan line sweeping down behind the fixed header. */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              key={`wash-${location.pathname}`}
              className="pointer-events-none fixed inset-0 z-30 bg-alien-space-dark"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              aria-hidden="true"
            />
            <motion.div
              key={`scan-${location.pathname}`}
              className="pointer-events-none fixed inset-x-0 z-40 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(240,216,130,0.55), rgba(34,197,94,0.35), transparent)',
              }}
              initial={{ top: '10vh', opacity: 0.9 }}
              animate={{ top: '100vh', opacity: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              aria-hidden="true"
            />
          </>
        )}
      </main>

      <Footer />
      <CookieConsent />
      <ScrollToTop />
      <AIChatbot />
    </div>
  );
};

export default Layout;
