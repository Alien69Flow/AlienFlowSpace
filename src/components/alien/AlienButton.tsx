import React from 'react';
import { Link } from 'react-router-dom';

interface AlienButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  title?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const AlienButton: React.FC<AlienButtonProps> = ({
  children,
  variant = 'outline',
  to,
  href,
  onClick,
  className = '',
  title,
  type = 'button',
  disabled = false,
}) => {
  const baseClass = `af-pill ${variant === 'primary' ? 'af-pill-primary' : variant === 'ghost' ? 'border-af-border-hairline text-af-text-muted hover:text-alien-gold hover:border-af-border-strong' : 'af-pill-outline text-alien-gold'} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass} title={title}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={baseClass} title={title}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClass} title={title}>
      {children}
    </button>
  );
};

export default AlienButton;
