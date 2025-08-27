import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollText, Globe, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSpaces = () => {
    const spacesSection = document.querySelector('[data-section="explore-spaces"]');
    if (spacesSection) {
      spacesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-16 overflow-hidden">
      {/* Fondo con estrellas + glow */}
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-40 animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-glow-radial"></div>

      {/* Contenido */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Logo animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <motion.img
              src="/lovable-uploads/ALogo.png"
              alt="AlienFlowSpaceDAO Logo"
              className="h-24 md:h-28 gold-glow z-20"
              initial={{ scale: 0.8 }}
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>

          {/* Título estilo Star Wars */}
          <div className="star-wars-crawl mb-4">
            <div className="star-wars-content py-4">
              <h1
                className="text-3xl sm:text-4xl lg:text-6xl mb-3 sw-title-glow font-nasalization leading-tight md:text-6xl text-center"
              >
                <span className="text-alien-green">Δlieπ</span>
                <span className="text-alien-gold">FlΦw</span>
                <span className="text-alien-green"> $pac€</span>
                <span className="text-alien-gold"> DAO</span>
              </h1>
            </div>
          </div>

          {/* Subtexto descriptivo */}
          <div className="star-wars-crawl mb-4">
            <div className="star-wars-content py-2">
              <motion.div
                className="readable-panel readable-glow text-foreground max-w-4xl mx-auto font-exo text-center leading-relaxed text-[clamp(1rem,1.8vw,1.25rem)] md:text-[clamp(1.1rem,1.6vw,1.35rem)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p className="mb-2">
                  Access the DAO with Innovative Solutions, Unlocks Energy Efficiency &
                  Environmental Sustainability.
                </p>
                <p>
                  Advantages Boosting the BENEFITS, for Connecting you and Raise your
                  QUALITY of LIFE, with Mutual PROFITS…
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Botones */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link to="/about">
            <Button className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors shadow-lg shadow-alien-green/30">
              <Orbit className="mr-2 h-4 w-4" /> About Enter Portal
            </Button>
          </Link>

          <Link to="/alien-trip">
            <Button className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors shadow-lg shadow-alien-green/30">
              <ScrollText className="mr-2 h-4 w-4" /> Alientrip Manifesto
            </Button>
          </Link>

          <Button
            onClick={scrollToSpaces}
            className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors shadow-lg shadow-alien-green/30"
          >
            <Globe className="mr-2 h-4 w-4" /> Join the Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

