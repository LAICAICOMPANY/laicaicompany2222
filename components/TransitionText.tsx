import React from 'react';
import { motion } from 'framer-motion';

interface TransitionTextProps {
  lines?: (string | React.ReactNode)[];
}

export const TransitionText: React.FC<TransitionTextProps> = ({ 
  lines = []
}) => {
  if (!lines.length) return null;

  return (
    <section className="pt-24 pb-8 md:pt-48 md:pb-16 relative flex flex-col items-center justify-center w-full px-4 overflow-hidden bg-transparent">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.4 }
          }
        }}
        className="w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center gap-3 md:gap-5"
      >
        {lines.map((line, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
              visible: { 
                opacity: 1, 
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="w-full flex justify-center items-center break-keep"
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
