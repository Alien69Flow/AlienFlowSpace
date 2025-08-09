import React from 'react';
import { Button } from '@/components/ui/button';

const ConnectButton = () => {
  // Aquí va tu lógica personalizada de conexión de wallet
  const handleConnectWallet = () => {
    alert('Conectar Wallet personalizada');
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Botón Connect Wallet con animación */}
      <Button
        className="
          bg-alien-green hover:bg-alien-green-light text-alien-gold font-nasalization rounded-full
          flex items-center gap-2 py-1 px-3 sm:px-4
          transition-all duration-200 ease-in-out
          hover:shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-alien-gold
        "
        onClick={handleConnectWallet}
      >
        <img
          src="/lovable-uploads/AW.png"
          alt="Wallet Logo"
          className="h-5 w-5 sm:h-6 sm:w-6 rounded-full object-cover"
        />
        <span className="font-nasalization whitespace-nowrap">Connect Wallet</span>
      </Button>

      {/* Botón Connect Portal con animación */}
      <a
        href="https://aliendex.lovable.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        <Button
          className="
            bg-alien-green hover:bg-alien-green-light text-alien-gold font-nasalization rounded-full
            flex items-center gap-2 py-1 px-3 sm:px-4
            transition-all duration-200 ease-in-out
            hover:shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-alien-gold
          "
        >
          <span className="font-nasalization whitespace-nowrap">Connect Portal</span>
        </Button>
      </a>
    </div>
  );
};

export default ConnectButton;
