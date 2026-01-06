import React from 'react';
import { motion } from 'framer-motion';

interface AdBannerProps {
  position: 'horizontal' | 'vertical' | 'square';
  className?: string;
  adSlotId?: string;
}

const AD_SIZES = {
  horizontal: { width: 728, height: 90, label: '728x90' },
  vertical: { width: 160, height: 600, label: '160x600' },
  square: { width: 300, height: 250, label: '300x250' }
};

const AdBanner: React.FC<AdBannerProps> = ({ 
  position = 'horizontal',
  className = '',
  adSlotId
}) => {
  const size = AD_SIZES[position];

  // Placeholder for Google AdSense or other ad network
  // Replace with actual ad code when ad account is set up
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`flex items-center justify-center ${className}`}
    >
      <div 
        className="bg-alien-space-dark/50 border border-alien-gold/20 rounded-lg 
          flex items-center justify-center text-muted-foreground/50 font-exo text-xs
          hover:border-alien-gold/40 transition-colors"
        style={{ 
          width: position === 'horizontal' ? '100%' : size.width,
          maxWidth: size.width,
          height: size.height,
          minHeight: size.height
        }}
      >
        {adSlotId ? (
          // Placeholder for actual ad script
          <div 
            id={adSlotId}
            className="w-full h-full flex items-center justify-center"
          >
            {/* Google AdSense script would go here */}
            <span className="text-center">
              Ad Space<br/>
              <span className="text-alien-gold/50">{size.label}</span>
            </span>
          </div>
        ) : (
          <span className="text-center">
            Ad Space<br/>
            <span className="text-alien-gold/50">{size.label}</span>
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default AdBanner;
