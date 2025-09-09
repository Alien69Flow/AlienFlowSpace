import React from 'react';
import { motion } from 'framer-motion';

const LoadingLogo: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-alien-space-dark/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src="/lovable-uploads/ALogo.png"
          alt="AlienFlowSpaceDAO Logo"
          className="h-24 w-24 logo-glow"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="mt-4 flex space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-alien-gold rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
        <motion.p
          className="mt-3 text-alien-green font-[Exo] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Initializing AlienFlowSpace...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingLogo;