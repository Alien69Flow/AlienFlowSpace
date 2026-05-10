import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollText, Globe, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSpaces = () => {
    const spacesSection = document.querySelector('[data-section="explore-spaces"]');
    if (spacesSection) spacesSection.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 sm:py-16 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, hsl(142 67% 45% / 0.4), transparent)' }}
          animate={{ x: ['-20%', '20%', '-20%'], y: ['-10%', '15%', '-10%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(circle, hsl(48 83% 72% / 0.4), transparent)' }}
          animate={{ x: ['15%', '-15%', '15%'], y: ['10%', '-20%', '10%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ bottom: '20%', right: '10%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'radial-gradient(circle, hsl(142 67% 45% / 0.3), transparent)' }}
          animate={{ x: ['10%', '-10%', '10%'], y: ['-15%', '10%', '-15%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ top: '50%', right: '30%' }}
        />
      </div>

      {/* Background layers */}
      <div className="absolute inset-0 bg-glow-radial"></div>

      <div className="container relative z-10 px-4 mx-auto text-center max-w-6xl">
        {/* Logo with pulse ring */}
        <div className="relative inline-block mb-6 sm:mb-8">
          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-alien-green/30"
            style={{ margin: '-16px' }}
            animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-alien-gold/20"
            style={{ margin: '-8px' }}
            animate={{ scale: [1, 1.3, 1.3], opacity: [0.4, 0, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
          />
          <motion.img
            src="/lovable-uploads/ALogo.png"
            alt="AlienFlowSpaceDAO Logo"
            className="h-20 sm:h-24 md:h-28 logo-glow z-20 mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: [1, 1.02, 1],
              opacity: 1,
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse",
              opacity: { duration: 0.8 }
            }}
            loading="lazy"
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl font-nasalization font-bold text-center mb-6 sm:mb-8 md:mb-10 tracking-wide"
        >
          <span className="text-alien-green">Decentralized</span>
          <span className="text-alien-gold"> · </span>
          <span className="text-alien-gold">Autonomous</span>
          <span className="text-alien-green"> · </span>
          <span className="text-alien-green">Organization</span>
        </motion.p>

        {/* Star Wars inspired description */}
        <motion.div 
          className="text-center px-2 py-4 readable-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <p className="mb-4 text-lg font-nasalization text-alien-gold">
              Access the DAO with Innovative Solutions, Unlocks Energy Efficiency & Environmental Sustainability.
            </p>
            <p className="text-base opacity-90 text-alien-green font-nasalization">
              Advantages Boosting the BENEFITS, for Connecting you and Raise your QUALITY of LIFE, with Mutual PROFITS…
            </p>
          </div>
        </motion.div>

        {/* Action buttons with improved hierarchy */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link to="/about" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-alien-green to-alien-green-light text-alien-space-dark hover:from-alien-gold hover:to-alien-gold-light hover:text-alien-space-dark font-nasalization px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(240,216,130,0.4)] transition-all duration-300">
              <Orbit className="mr-2 h-4 w-4" /> About Enter Portal
            </Button>
          </Link>

          <Link to="/alien-trip" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto border-2 border-alien-gold/60 bg-alien-space-dark/50 text-alien-gold hover:bg-alien-gold hover:text-alien-space-dark font-nasalization px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full backdrop-blur-sm transition-all duration-300">
              <ScrollText className="mr-2 h-4 w-4" /> Alientrip Manifesto
            </Button>
          </Link>

          <Button
            onClick={scrollToSpaces}
            className="w-full sm:w-auto border-2 border-alien-green/60 bg-alien-space-dark/50 text-alien-green hover:bg-alien-green hover:text-alien-space-dark font-nasalization px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Globe className="mr-2 h-4 w-4" /> Join the Journey
          </Button>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
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
