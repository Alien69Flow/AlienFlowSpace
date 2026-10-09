import React from 'react';
import { spotlightMove } from '@/lib/spotlight';

interface AlienModuleProps {
  children: React.ReactNode;
  className?: string;
  hoverColor?: 'gold' | 'green';
  number?: string;
}

const AlienModule: React.FC<AlienModuleProps> = ({
  children,
  className = '',
  hoverColor = 'green',
  number,
}) => {
  const hoverBorder = hoverColor === 'green' ? 'hover:border-alien-green/50' : 'hover:border-alien-gold/50';

  return (
    <div
      onMouseMove={spotlightMove}
      className={`af-module af-spotlight relative p-5 md:p-6 ${hoverBorder} ${className}`}
    >
      {number && (
        <span className="absolute top-3 right-4 font-nasalization text-xs tracking-widest text-af-text-muted/40 select-none">
          {number}
        </span>
      )}
      {children}
    </div>
  );
};

export default AlienModule;
