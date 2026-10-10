import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group">
      {/* Boxed wordmark with a hard hairline edge — the reference boxes its
          wordmark the same way, and it reads as a fixed instrument, not text
          floating over the page. */}
      <Link
        to="/"
        className="flex items-center gap-2 transition-colors duration-300 hover:opacity-80"
      >
        <img 
          src="/lovable-uploads/ALogo.png" 
          alt="AlienFlow Logo" 
          className="h-8 lg:h-9 w-auto" 
        />
        <span className="font-nasalization text-base sm:text-xl tracking-tighter">
          <span className="text-alien-green">Δlieπ</span>
          <span className="text-alien-gold">FlΦw</span>
          <span className="text-alien-green"> $pac€</span>
          <span className="text-alien-gold"> DAO</span>
        </span>
      </Link>
      
      {/* Decorative twin: only once there is room for it on a wide bar. */}
      <Link to="/" className="hidden xl:block" aria-hidden="true" tabIndex={-1}>
        <img 
          src="/lovable-uploads/ET.png" 
          alt="" 
          className="h-8 w-8 rounded-full hover:rotate-[360deg] transition-all duration-1000"
        />
      </Link>
    </div>
  );
};

export default Logo;
