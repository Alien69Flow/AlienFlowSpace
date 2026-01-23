import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "brightness(3) blur(20px)", scale: 1.5 }}
      transition={{ duration: 0.8, ease: "circIn" }}
      className="fixed inset-0 bg-[#050505] z-[99999] flex items-center justify-center overflow-hidden"
    >
      {/* 1. EFECTO HIPERESPACIO (Estrellas cinéticas) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1.5], 
              x: (Math.random() - 0.5) * 1000, 
              y: (Math.random() - 0.5) * 1000 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.1, 
              ease: "easeIn" 
            }}
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-alien-green rounded-full shadow-[0_0_10px_#39FF14]"
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* 2. RADAR CUÁNTICO (Anillos de energía) */}
        <div className="relative flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 2.5], 
                opacity: [0.5, 0],
                borderWidth: ["2px", "1px"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
              className="absolute w-32 h-32 border-alien-gold/40 rounded-full"
            />
          ))}

          {/* 3. LOGO: MOTOR DE CURVATURA (Efecto Latido) */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              filter: [
                "drop-shadow(0 0 10px #F0D882)",
                "drop-shadow(0 0 30px #39FF14)",
                "drop-shadow(0 0 10px #F0D882)"
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img 
              src="/lovable-uploads/ALogo.png" 
              alt="AlienFlow Logo" 
              className="w-40 h-40 object-contain relative z-20" 
            />
          </motion.div>
        </div>

        {/* 4. DATOS DEL SISTEMA (Año 4700 / Estética Terminal) */}
        <div className="mt-12 space-y-2">
          <motion.div
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
            className="text-alien-green font-nasalization text-[10px] tracking-[0.6em] uppercase"
          >
            Quantum Jump Initiated...
          </motion.div>
          
          <div className="flex flex-col gap-1">
            <span className="text-alien-gold/60 font-exo text-[9px] tracking-widest uppercase">
              Timeline: Era 4700 | Galactic-Standard
            </span>
            <div className="flex justify-center gap-1.5 mt-2">
              <motion.div 
                className="h-[2px] bg-alien-green shadow-[0_0_8px_#39FF14]"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "120px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5. EFECTO SCANLINE (Capa final de textura) */}
      <div className="absolute inset-0 bg-scanlines opacity-[0.03] pointer-events-none" />
    </motion.div>
  );
};

export default LoadingScreen;
