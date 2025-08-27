import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollText, Globe, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToSpaces = () => {
    const spacesSection = document.querySelector('[data-section="explore-spaces"]');
    if (spacesSection) spacesSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-16 overflow-hidden">
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-40 animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-glow-radial"></div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Título con efecto lightspeed */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl lg:text-6xl mb-6 font-nasalization font-extrabold text-center sw-title-glow leading-tight text-alien-gold"
        >
          <span className="text-alien-green">Δlieπ</span>
          <span className="text-alien-gold">FlΦw</span>
          <span className="text-alien-green"> $pac€</span>
          <span className="text-alien-gold"> DAO</span>
        </motion.h1>

        {/* Subtextos con Star Wars Crawl */}
        <div className="star-wars-crawl relative">
          <motion.div
            className="star-wars-content readable-glow font-exo text-center text-[clamp(1rem,1.8vw,1.25rem)] md:text-[clamp(1.1rem,1.6vw,1.35rem)]"
            initial={{ translateY: '100%' }}
            animate={{ translateY: '-120%' }}
            transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
          >
            <p className="mb-2">
              Access the DAO with Innovative Solutions, Unlocks Energy Efficiency & Environmental Sustainability.
            </p>
            <p>
              Advantages Boosting the BENEFITS, for Connecting you and Raise your QUALITY of LIFE, with Mutual PROFITS…
            </p>
          </motion.div>
        </div>

        {/* Botones animados */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link to="/about">
            <Button className="bg-alien-green-dark text-alien-gold hover:bg-alien-gold hover:text-alien-green-dark font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors shadow-lg shadow-alien-green-dark/40">
              <Orbit className="mr-2 h-4 w-4" /> About Enter Portal
            </Button>
          </Link>

          <Link to="/alien-trip">
            <Button className="bg-alien-green-dark text-alien-gold hover:bg-alien-gold hover:text-alien-green-dark font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors shadow-lg shadow-alien-green-dark/40">
              <ScrollText className="mr-2 h-4 w-4" /> Alientrip Manifesto
            </Button>
          </Link>

          <Button
            onClick={scrollToSpaces}
            className="bg-alien-green-dark text-alien-gold hover:bg-alien-gold hover:text-alien-green-dark font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors shadow-lg shadow-alien-green-dark/40"
          >
            <Globe className="mr-2 h-4 w-4" /> Join the Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
