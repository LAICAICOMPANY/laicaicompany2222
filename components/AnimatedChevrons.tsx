import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedChevrons: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-24 sm:h-32 relative">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.svg
          key={i}
          className="w-20 h-20 sm:w-24 sm:h-24 text-blue-600 drop-shadow-[0_0_5px_rgba(37,99,235,0.6)] absolute"
          style={{ top: `${i * 14}px` }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{
            opacity: [0.1, 1, 0.1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8l7 7 7-7" />
        </motion.svg>
      ))}
    </div>
  );
};
