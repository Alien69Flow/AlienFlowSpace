import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollCTA: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const y = useTransform(scrollYProgress, [0.15, 0.25], [30, 0]);
  const scale = useTransform(scrollYProgress, [0.15, 0.25], [0.9, 1]);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
      style={{ opacity, y, scale }}
    >
      <div className="bg-alien-space-dark/80 backdrop-blur-md border border-alien-gold/20 rounded-xl p-6 shadow-xl pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-alien-gold font-nasalization mb-3">
            Ready to Join the Network?
          </h2>
          <p className="text-base text-gray-300 font-[Exo] mb-4 max-w-sm">
            Connect with the future of decentralized collaboration and become part of the cosmic ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-nasalization px-6 py-2 text-sm"
              onClick={() => window.open("https://alienflowspace.gitbook.io/DAO", "_blank")}
            >
              <Rocket className="mr-2 h-4 w-4" />
              Explore Docs
            </Button>
            
            <Button 
              variant="outline" 
              className="border-alien-green text-alien-green hover:bg-alien-green/20 font-nasalization px-6 py-2 text-sm"
            >
              <span>Join Community</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollCTA; 