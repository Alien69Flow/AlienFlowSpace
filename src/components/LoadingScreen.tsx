import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-alien-space-dark/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.img
          src="/lovable-uploads/ALogo.png"
          alt="AlienFlowSpaceDAO Logo"
          className="h-20 w-20 mx-auto mb-6 logo-glow"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: 1,
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-alien-gold font-nasalization text-lg mb-4"
        >
          Loading AlienFlowSpace DAO...
        </motion.div>
        
        {/* Loading Bar */}
        <div className="w-48 h-2 bg-alien-space-light rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-alien-gold to-alien-green"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;