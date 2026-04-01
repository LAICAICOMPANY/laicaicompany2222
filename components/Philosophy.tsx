import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-16 md:py-40 relative overflow-hidden flex flex-col items-center justify-center min-h-[30vh] md:min-h-[50vh]">
        <div className="flex flex-col items-center text-center px-4">
          {/* Top vertical line */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-400 mb-2 sm:mb-4">
              저희는
            </p>
            <h2 className="font-black tracking-tight leading-tight">
              <span className="whitespace-nowrap text-[clamp(1.5rem,5.5vw,4.5rem)] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">매출로 증명할 수 있는</span><span className="whitespace-nowrap text-[clamp(1.5rem,5.5vw,4.5rem)] text-current"> 회사만</span><br/>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400">함께합니다</span>
            </h2>
          </motion.div>

          {/* Bottom vertical line */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            className="w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent mt-12"
          />
        </div>
    </section>
  );
};
