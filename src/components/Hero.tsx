
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

  return <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-16 overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-8">
          <div className="flex flex-col justify-center items-center mb-6 relative">
            <motion.img src="/lovable-uploads/ALogo.png" alt="AlienFlowSpaceDAO Logo" className="h-24 md:h-28 gold-glow z-20" initial={{
            scale: 0.8
          }} animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
            y: [0, -10, 0]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }} />
          </div>
          
          <div className="star-wars-crawl mb-4">
            <div className="star-wars-content py-4">
              <h1 style={{
              fontFamily: "'Nasalization', sans-serif !important",
              letterSpacing: '0.02em'
            }} className="text-3xl sm:text-4xl lg:text-6xl mb-3 sw-title-glow text-center font-nasalization leading-tight md:text-6xl">
                <span className="text-alien-green">Δlieπ</span>
                <span className="text-alien-gold">FlΦw</span>
                <span className="text-alien-green"> $pac€</span>
                <span className="text-alien-gold"> DAO</span>
              </h1>
            </div>
          </div>
          
          <div className="star-wars-crawl mb-4">
            <div className="star-wars-content py-2">
              <motion.div className="readable-panel text-[clamp(1rem,1.8vw,1.25rem)] md:text-[clamp(1.1rem,1.6vw,1.35rem)] text-foreground readable-glow max-w-4xl mx-auto font-[Exo] text-center leading-relaxed" style={{
              letterSpacing: '0.01em'
            }} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.3,
              duration: 0.8
            }}>
                <p className="mb-2">Access the DAO with Innovative Solutions, Unlocks Energy Efficiency & Environmental Sustainability.</p>
                <p>Advantages Boosting the BENEFITS, for Connecting you and Raise your QUALITY of LIFE, with Mutual PROFITS…</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="flex flex-wrap justify-center gap-4 mt-8" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5,
        duration: 0.8
      }}>
          <Link to="/about">
            <Button className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors">
              <Orbit className="mr-2 h-4 w-4" /> About Enter Portal
            </Button>
          </Link>
 
          <Link to="/alien-trip">
            <Button className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors">
              <ScrollText className="mr-2 h-4 w-4" /> Alientrip Manifesto
            </Button>
          </Link>

          <Button 
            onClick={scrollToSpaces}
            className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors"
          >
            <Globe className="mr-2 h-4 w-4" /> Join the Journey
          </Button>
        </motion.div>
      </div>
    </div>;
};

export default Hero;
