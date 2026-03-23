import React from 'react';
import { motion } from 'framer-motion';

export const Statistics: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh] bg-transparent">
      <div className="container mx-auto px-6 text-center z-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.8,
                delayChildren: 0.3
              }
            }
          }}
          className="flex flex-col items-center gap-16 md:gap-24 w-full"
        >
          {/* First Stat */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="flex flex-col items-center w-full"
          >
            <p className="text-xl sm:text-2xl md:text-4xl text-current opacity-80 mb-2 md:mb-4 tracking-tight font-medium break-keep">
              2025년 한국을 방문한 중국인
            </p>
            <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-blue-600">
              548만명
            </h3>
          </motion.div>

          {/* Separator / Decoration */}
          <motion.div
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: { opacity: 1, height: "6rem", transition: { duration: 1.5, ease: "easeInOut" } }
            }}
            className="w-[2px] bg-gradient-to-b from-blue-500/80 via-purple-500/50 to-transparent mx-auto"
          />

          {/* Second Stat */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="flex flex-col items-center w-full"
          >
            <p className="text-xl sm:text-2xl md:text-4xl text-current opacity-80 mb-2 md:mb-4 tracking-tight font-medium break-keep">
              이로인해 발생하는 매출
            </p>
            <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-blue-600">
              2000억원
            </h3>
          </motion.div>

          {/* Vertical Line replacing Chevrons under 2000억원 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: { opacity: 1, height: "6rem", transition: { duration: 1.5, delay: 1.2, ease: "easeInOut" } }
            }}
            className="w-[2px] bg-gradient-to-b from-current to-transparent opacity-20 mx-auto mt-12 -mb-12 md:-mb-16"
          />
        </motion.div>
      </div>
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-blue-600/5 rounded-full blur-3xl pointer-events-none z-0"></div>
    </section>
  );
};
