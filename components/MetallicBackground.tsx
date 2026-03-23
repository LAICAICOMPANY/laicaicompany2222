import React from 'react';
import { motion } from 'framer-motion';

export const MetallicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-[#0A0F1C] bg-gradient-to-br from-[#0A0F1C] to-[#04060B]">
      
      {/* Top Left Deep Blue Glow */}
      <motion.div
        className="absolute w-[150vw] h-[150vh] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(30, 58, 138, 0.12) 0%, transparent 50%)',
          top: '-40%',
          left: '-30%'
        }}
        animate={{
          x: ['0%', '5%', '-5%', '0%'],
          y: ['0%', '-5%', '5%', '0%'],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Bottom Right Deep Indigo Glow */}
      <motion.div
        className="absolute w-[120vw] h-[120vh] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(49, 46, 129, 0.15) 0%, transparent 60%)',
          bottom: '-30%',
          right: '-20%'
        }}
        animate={{
          x: ['0%', '-5%', '5%', '0%'],
          y: ['0%', '5%', '-5%', '0%'],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Center Soft Accent */}
      <motion.div
        className="absolute w-[100vw] h-[50vh] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.03) 0%, transparent 70%)',
          top: '30%',
          left: '0%'
        }}
      />
    </div>
  );
};
