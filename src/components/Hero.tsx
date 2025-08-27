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
      {/* Fondo de estrellas eficiente */}
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-40 animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-glow-radial"></div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Logo flotante */}
        <motion.img
          src="/lovable-uploads/ALogo.png"
          alt="AlienFlowSpaceDAO Logo"
          className="h-24 md:h-28 gold-glow z-20 mb-8"
          initial={{ scale: 0.8 }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Título tipo Star Wars */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl lg:text-6xl font-nasalization font-extrabold leading-tight text-center sw-title-glow mb-6"
        >
          <span className="text-alien-green">Δlieπ</span>
          <span className="text-alien-gold">FlΦw</span>
          <span className="text-alien-green"> $pac€</span>
          <span className="text-alien-gold"> DAO</span>
        </motion.h1>

        {/* Subtextos estilo Star Wars Crawl en verde */}
        <div className="star-wars-crawl perspective-400 relative">
          <motion.div
            className="star-wars-content readable-glow font-exo text-center text-[clamp(1rem,1.8vw,1.25rem)] md:text-[clamp(1.1rem,1.6vw,1.35rem)] text-alien-green font-semibold"
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

        {/* Botones dorado oscuro / texto verde claro */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link to="/about">
            <Button className="bg-alien-gold-dark text-alien-green-light hover:bg-alien-green hover:text-alien-gold-dark font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full shadow-lg shadow-alien-gold-dark/40 transition-all transform hover:-translate-y-1 hover:scale-105">
              <Orbit className="mr-2 h-4 w-4" /> About Enter Portal
            </Button>
          </Link>

          <Link to="/alien-trip">
            <Button className="bg-alien-gold-dark text-alien-green-light hover:bg-alien-green hover:text-alien-gold-dark font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full shadow-lg shadow-alien-gold-dark/40 transition-all transform hover:-translate-y-1 hover:scale-105">
              <ScrollText className="mr-2 h-4 w-4" /> Alientrip Manifesto
            </Button>
          </Link>

          <Button
            onClick={scrollToSpaces}
            className="bg-alien-gold-dark text-alien-green-light hover:bg-alien-green hover:text-alien-gold-dark font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full shadow-lg shadow-alien-gold-dark/40 transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            <Globe className="mr-2 h-4 w-4" /> Join the Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
