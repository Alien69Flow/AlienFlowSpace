import React from 'react';

interface AlienTagProps {
  children: React.ReactNode;
  color?: 'gold' | 'green' | 'muted';
  className?: string;
}

const AlienTag: React.FC<AlienTagProps> = ({ children, color = 'muted', className = '' }) => {
  const colorMap = {
    gold: 'text-alien-gold border-af-border-strong',
    green: 'text-alien-green border-alien-green/40',
    muted: 'text-af-text-muted border-af-border',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-nasalization text-[10px] tracking-[0.15em] uppercase ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
};

export default AlienTag;
