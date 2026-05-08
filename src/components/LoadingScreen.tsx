import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-alien-space-dark z-50 flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/lovable-uploads/ALogo.png" 
          alt="AlienFlowSpace Logo" 
          className="w-32 h-32 mx-auto mb-6 animate-pulse"
        />
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-alien-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-alien-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-alien-gold rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;