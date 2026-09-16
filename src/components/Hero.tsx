import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Orbit, ScrollText, Globe, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import AlienButton from '@/components/alien/AlienButton';
import AlienTag from '@/components/alien/AlienTag';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSpaces = () => {
    const spacesSection = document.querySelector('[data-section="explore-spaces"]');
    if (spacesSection) spacesSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEcosystem = () => {
    const ecoSection = document.querySelector('[data-section="ecosystem"]');
    if (ecoSection) ecoSection.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 sm:py-16 overflow-hidden af-grid-overlay">
      {/* Subtle radial glow — single, restrained */}
      <div className="absolute inset-0 pointer-events-none bg-glow-radial" />

      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.img
            src="/lovable-uploads/ALogo.png"
            alt="AlienFlowSpaceDAO Logo"
            className="h-20 sm:h-24 md:h-28 logo-glow z-20 mx-auto"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            loading="lazy"
          />
        </motion.div>

        {/* Technical label row */}
        <motion.div
          className="flex justify-center gap-3 mb-6 flex-wrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AlienTag color="gold">Decentralized</AlienTag>
          <AlienTag color="green">Autonomous</AlienTag>
          <AlienTag color="gold">Organization</AlienTag>
        </motion.div>

        {/* Large wordmark with border underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="font-nasalization text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight af-heading-underline inline-block">
            <span className="text-alien-green">Δlieπ</span>
            <span className="text-alien-gold">FlΦw</span>
            <span className="text-alien-green"> $pac€</span>
            <span className="text-alien-gold"> DAO</span>
          </h1>
        </motion.div>

        {/* Value proposition — left-aligned instrument readout style */}
        <motion.div
          className="max-w-2xl mx-auto mb-10 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="text-left space-y-3 readable-glow">
            <p className="text-base sm:text-lg font-nasalization text-alien-gold leading-relaxed">
              Access the DAO with Innovative Solutions, Unlocks Energy Efficiency & Environmental Sustainability.
            </p>
            <p className="text-sm sm:text-base text-alien-green font-nasalization leading-relaxed">
              Advantages Boosting the BENEFITS, for Connecting you and Raise your QUALITY of LIFE, with Mutual PROFITS...
            </p>
          </div>
        </motion.div>

        {/* CTA hierarchy: primary, secondary, tertiary text link */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Primary: ENTER ALIENFLOW */}
          <AlienButton variant="primary" to="/about" className="!px-8 !py-3 !text-sm">
            <Orbit className="h-4 w-4" /> ENTER ALIENFLOW
          </AlienButton>

          {/* Secondary: EXPLORE ECOSYSTEM */}
          <AlienButton variant="outline" onClick={scrollToEcosystem} className="!px-8 !py-3 !text-sm">
            <Globe className="h-4 w-4" /> EXPLORE ECOSYSTEM
          </AlienButton>
        </motion.div>

        {/* Tertiary: Alien Manifesto / GitBook — text link */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link
            to="/alien-trip"
            className="inline-flex items-center gap-1.5 text-xs font-nasalization tracking-wider uppercase text-af-text-muted hover:text-alien-gold transition-colors border-b border-transparent hover:border-alien-gold/40 pb-0.5"
          >
            <ScrollText className="h-3.5 w-3.5" /> Alientrip Manifesto
          </Link>
          <span className="hidden sm:inline text-af-text-muted/30">|</span>
          <a
            href="https://alienflowspace.gitbook.io/DAO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-nasalization tracking-wider uppercase text-af-text-muted hover:text-alien-green transition-colors border-b border-transparent hover:border-alien-green/40 pb-0.5"
          >
            <BookOpen className="h-3.5 w-3.5" /> GitBook Docs
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={scrollToSpaces}
      >
        <span className="text-xs font-nasalization text-alien-gold/60 tracking-widest uppercase">Scroll</span>
        <svg width="20" height="12" viewBox="0 0 20 12" className="text-alien-green/50">
          <path d="M2 2L10 10L18 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
