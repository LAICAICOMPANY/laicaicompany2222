import React from 'react';
import { motion } from 'framer-motion';

const keywords = [
  { text: '피부과 원장님',     size: 'text-4xl sm:text-5xl md:text-6xl', weight: 'font-black', color: 'text-white/90', rotate: '-rotate-2' },
  { text: '성형외과 실장님',   size: 'text-2xl sm:text-3xl', weight: 'font-extrabold', color: 'text-blue-400', rotate: 'rotate-3' },
  { text: '코스메틱 마케터',   size: 'text-base sm:text-lg', weight: 'font-semibold', color: 'text-white/70', rotate: 'rotate-1' },
  { text: '성수동 팝업스토어', size: 'text-5xl sm:text-6xl md:text-7xl', weight: 'font-black', color: 'text-[#FF2442]', rotate: '-rotate-3' },
  { text: '의료관광 에이전시', size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-extrabold', color: 'text-white/95', rotate: 'rotate-1' },
  { text: '패션브랜드 매니저', size: 'text-xl sm:text-2xl md:text-3xl', weight: 'font-bold', color: 'text-white/80', rotate: '-rotate-1' },
  { text: '글로벌 영업팀',     size: 'text-lg sm:text-xl', weight: 'font-semibold', color: 'text-gray-400', rotate: 'rotate-2' },
  { text: '마케팅 총괄',       size: 'text-4xl sm:text-5xl', weight: 'font-black', color: 'text-indigo-400', rotate: 'rotate-0' },
  { text: '핫플 한옥카페',     size: 'text-2xl sm:text-3xl md:text-4xl', weight: 'font-extrabold', color: 'text-blue-500', rotate: '-rotate-2' },
  { text: '면세점 입점 브랜드', size: 'text-xl sm:text-2xl', weight: 'font-bold', color: 'text-gray-300', rotate: 'rotate-3' },
  { text: '플래그십 스토어',  size: 'text-4xl sm:text-5xl md:text-6xl', weight: 'font-black', color: 'text-white/90', rotate: '-rotate-1' },
  { text: '로컬 맛집 사장님', size: 'text-3xl sm:text-4xl', weight: 'font-extrabold', color: 'text-[#FF2442]/80', rotate: 'rotate-2' },
  { text: '전시/행사 기획',    size: 'text-3xl sm:text-4xl', weight: 'font-black', color: 'text-white/85', rotate: 'rotate-0' },
];

const floatingIcons = [
  { emoji: '💊', x: '8%',  y: '10%', size: '2.2rem', delay: 0,    duration: 7 },
  { emoji: '🏥', x: '88%', y: '8%',  size: '2rem',   delay: 1.2,  duration: 9 },
  { emoji: '💄', x: '5%',  y: '45%', size: '2.4rem', delay: 0.5,  duration: 8 },
  { emoji: '👗', x: '90%', y: '40%', size: '2rem',   delay: 2,    duration: 7.5 },
  { emoji: '🛍️', x: '15%', y: '80%', size: '2.2rem', delay: 0.8,  duration: 10 },
  { emoji: '🍜', x: '82%', y: '75%', size: '2rem',   delay: 1.5,  duration: 8.5 },
  { emoji: '☕', x: '50%', y: '5%',  size: '1.8rem', delay: 0.3,  duration: 9 },
  { emoji: '🎪', x: '72%', y: '18%', size: '1.6rem', delay: 2.5,  duration: 7 },
  { emoji: '💅', x: '28%', y: '90%', size: '1.8rem', delay: 1,    duration: 11 },
  { emoji: '🏪', x: '60%', y: '88%', size: '2rem',   delay: 1.8,  duration: 8 },
  { emoji: '📱', x: '40%', y: '3%',  size: '1.6rem', delay: 3,    duration: 9.5 },
  { emoji: '✈️', x: '93%', y: '60%', size: '1.8rem', delay: 0.7,  duration: 10 },
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 md:py-32 w-full overflow-hidden relative">

      {/* Floating background emojis */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {floatingIcons.map((icon, i) => (
          <motion.span
            key={i}
            className="absolute select-none opacity-20"
            style={{ left: icon.x, top: icon.y, fontSize: icon.size }}
            animate={{ y: [0, -18, 0, 18, 0] }}
            transition={{ duration: icon.duration, delay: icon.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            {icon.emoji}
          </motion.span>
        ))}
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Title */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white/95 tracking-tight">
            이런 분들께 추천합니다
          </h2>
        </motion.div>

        {/* Word Cloud */}
        <div className="relative">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 md:gap-x-8 md:gap-y-6 select-none px-6 py-10 sm:px-10 sm:py-14" style={{ lineHeight: '0.9' }}>
            {keywords.map((kw, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', y: 20 }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block ${kw.size} ${kw.weight} ${kw.color} ${kw.rotate} whitespace-nowrap drop-shadow-sm
                  hover:scale-110 hover:z-10 hover:!text-indigo-400 transition-all duration-300 cursor-default`}
              >
                {kw.text}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
