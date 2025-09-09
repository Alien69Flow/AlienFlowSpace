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
      {/* Background layers */}
      <div className="absolute inset-0 bg-glow-radial"></div>

      <div className="container relative z-10 px-4 mx-auto text-center max-w-6xl">
        {/* Floating logo */}
        <motion.img
          src="/lovable-uploads/ALogo.png"
          alt="AlienFlowSpaceDAO Logo"
          className="h-20 sm:h-24 md:h-28 logo-glow z-20 mb-6 sm:mb-8 mx-auto"
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

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-nasalization font-extrabold leading-tight text-center hero-title mb-8 sm:mb-12 hero-title"
        >
          <span className="text-alien-green">Δlieπ</span>
          <span className="text-alien-gold">FlΦw</span>
          <span className="text-alien-green"> $pac€</span>
          <span className="text-alien-gold"> DAO</span>
        </motion.h1>

        {/* Star Wars inspired description - con resplandor */}
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

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link to="/about" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full">
              <Orbit className="mr-2 h-4 w-4" /> About Enter Portal
            </Button>
          </Link>

          <Link to="/alien-trip" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full">
              <ScrollText className="mr-2 h-4 w-4" /> Alientrip Manifesto
            </Button>
          </Link>

          <Button
            onClick={scrollToSpaces}
            className="w-full sm:w-auto bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full transition"
          >
            <Globe className="mr-2 h-4 w-4" /> Join the Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
