import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-transparent">
      <div className="relative text-center">
        {/* Pulse rings around logo */}
        <div className="relative flex items-center justify-center">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 2], 
                opacity: [0.4, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-20 h-20 border border-alien-gold/30 rounded-full"
            />
          ))}

          {/* Logo with pulse effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              filter: [
                "drop-shadow(0 0 8px rgba(240,216,130,0.3))",
                "drop-shadow(0 0 16px rgba(57,255,20,0.4))",
                "drop-shadow(0 0 8px rgba(240,216,130,0.3))"
              ]
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img 
              src="/lovable-uploads/ALogo.png" 
              alt="Loading..." 
              className="w-16 h-16 object-contain" 
            />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-6 text-alien-gold/70 text-xs tracking-[0.3em] uppercase font-mono"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
