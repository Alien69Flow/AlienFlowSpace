import React from 'react';
import { motion } from 'framer-motion';

interface SceneDividerProps {
  label?: string;
  align?: 'left' | 'center' | 'right';
}

const SceneDivider: React.FC<SceneDividerProps> = ({ label, align = 'center' }) => {
  const justifyClass =
    align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center';

  return (
    <div className="relative h-px w-full overflow-hidden">
      {/* Base hairline */}
      <div className="absolute inset-0 bg-af-border-hairline" />

      {/* Light sweep — animated scan across the divider */}
      <motion.div
        className="absolute top-0 h-px"
        initial={{ left: '-20%', width: '20%' }}
        whileInView={{ left: '100%', width: '5%' }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(240, 216, 130, 0.8), transparent)',
        }}
      />

      {/* Optional label centered on the line */}
      {label && (
        <div className={`absolute inset-0 flex items-center ${justifyClass}`}>
          <span className="bg-af-bg px-4 font-nasalization text-[11px] tracking-[0.3em] uppercase text-af-text-muted">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export default SceneDivider;
