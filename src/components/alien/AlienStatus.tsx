import React from 'react';

interface AlienStatusProps {
  label: string;
  color?: 'green' | 'gold' | 'red' | 'muted';
}

const AlienStatus: React.FC<AlienStatusProps> = ({ label, color = 'green' }) => {
  const colorMap = {
    green: 'bg-alien-green',
    gold: 'bg-alien-gold',
    red: 'bg-red-500',
    muted: 'bg-gray-500',
  };

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`af-status-dot ${colorMap[color]}`} />
      <span className="font-nasalization text-[10px] tracking-[0.15em] uppercase text-af-text-muted">
        {label}
      </span>
    </span>
  );
};

export default AlienStatus;
