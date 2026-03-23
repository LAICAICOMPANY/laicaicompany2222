import React from 'react';
import { motion } from 'framer-motion';

export const HighlightCase1: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center z-10 w-full py-12 md:py-16">
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-10%" }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="flex flex-col items-center gap-2 md:gap-4 mb-8 md:mb-12"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          자사몰 왕초보,
        </h3>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight flex items-center justify-center gap-2 flex-wrap">
          솔루션 적용 후 <span className="bg-indigo-300/30 text-white px-2 py-1 rounded-sm">2개월만에</span>
        </h3>
        <div className="mt-4 inline-block bg-[#5C66F0] text-white px-6 py-4 md:px-8 md:py-6 shadow-xl shadow-indigo-900/40 w-full sm:w-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter break-keep">
            하루 매출 3,000만 원 달성
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export const HighlightCase2: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center z-10 w-full py-12 md:py-16">
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-10%" }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="flex flex-col items-center gap-2 md:gap-4 mb-8 md:mb-12"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          평범한 30대 직장인,
        </h3>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight flex items-center justify-center gap-2 flex-wrap">
          솔루션 적용 후 <span className="bg-indigo-300/30 text-white px-2 py-1 rounded-sm">3개월만에</span>
        </h3>
        <div className="mt-4 inline-block bg-[#5C66F0] text-white px-6 py-4 md:px-8 md:py-6 shadow-xl shadow-indigo-900/40 w-full sm:w-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter break-keep">
            일 정산 2,000만 원 달성
          </h2>
        </div>
      </motion.div>
    </div>
  );
};
