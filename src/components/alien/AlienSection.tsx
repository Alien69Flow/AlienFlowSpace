import React from 'react';

interface AlienSectionProps {
  children: React.ReactNode;
  label?: string;
  id?: string;
  className?: string;
}

const AlienSection: React.FC<AlienSectionProps> = ({ children, label, id, className = '' }) => {
  return (
    <section
      id={id}
      className={`af-hairline relative py-12 md:py-16 ${className}`}
    >
      {label && (
        <div className="container mx-auto px-4 mb-6">
          <span className="af-tag">{label}</span>
        </div>
      )}
      {children}
    </section>
  );
};

export default AlienSection;
