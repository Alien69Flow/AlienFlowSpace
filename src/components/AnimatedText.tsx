
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import React from "react";

// Props for the AnimatedText component
interface AnimatedTextProps {
  children: React.ReactNode; // Content of the animated text
  className?: string; // Additional classes to customize styles
  initial?: boolean | TargetAndTransition | VariantLabels; // Initial animation configuration (optional)
  animate?: boolean | TargetAndTransition | VariantLabels; // Final animation configuration (optional)
  transition?: { duration?: number; ease?: string | number[]; delay?: number }; // Transition configuration (optional)
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  initial = { opacity: 0, y: 20 }, // Default values
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8 },
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
