
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Logo principal */}
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/ALogo.png" 
          alt="AlienFlowSpaceDAO Logo" 
          className="h-9" 
        />
        <span className="font-nasalization text-base sm:text-lg md:text-xl overflow-hidden text-ellipsis">
          <span className="text-alien-green">Δlieπ</span>
          <span className="text-alien-gold">FlΦw</span>
          <span className="text-alien-green"> $pac€</span>
          <span className="text-alien-gold"> DAO</span>
        </span>
      </Link>

      {/* Icono del planeta */}
      <Link to="/">
        <img 
          src="/lovable-uploads/ET.png" 
          alt="Earth" 
          className="h-7 w-7 sm:h-8 sm:w-8 rounded-full hover:opacity-80 transition-opacity"
        />
      </Link>
    </div>
  );
};

export default Logo;
