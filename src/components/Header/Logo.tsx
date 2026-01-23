import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group">
      <Link to="/" className="flex items-center gap-2 transition-transform duration-500 hover:scale-105">
        <img 
          src="/lovable-uploads/ALogo.png" 
          alt="AlienFlow Logo" 
          className="h-9 w-auto" 
        />
        <span className="font-nasalization text-base sm:text-xl tracking-tighter">
          <span className="text-alien-green">Δlieπ</span>
          <span className="text-alien-gold">FlΦw</span>
          <span className="text-alien-green"> $pac€</span>
          <span className="text-alien-gold"> DAO</span>
        </span>
      </Link>
      
      <Link to="/" className="hidden sm:block">
        <img 
          src="/lovable-uploads/ET.png" 
          alt="Earth" 
          className="h-8 w-8 rounded-full hover:rotate-[360deg] transition-all duration-1000 border border-alien-green/20"
        />
      </Link>
    </div>
  );
};

export default Logo;
