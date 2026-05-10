import { motion, TargetAndTransition, VariantLabels, Transition } from "framer-motion";
import React from "react";

// Props for the AnimatedText component
interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  transition?: Transition;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  initial = { opacity: 0, y: 20 },
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
