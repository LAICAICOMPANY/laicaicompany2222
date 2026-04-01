import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPlatform } from './AnimatedPlatform';

const UpwardChevrons = ({ color }: { color: string }) => (
  <span className="inline-flex flex-col items-center justify-center align-middle transform translate-y-[0.13em] ml-1">
    {[2, 1, 0].map((i) => (
      <motion.svg
        key={i}
        className={`w-[0.65em] h-[0.65em] ${color} -mt-[0.32em] first:mt-0`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={4}
        animate={{ opacity: [0.1, 1, 0.1], y: [0, -4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </motion.svg>
    ))}
  </span>
);

const cases = [
  {
    id: 1,
    src: '/review1.png',
    alt: '샤오홍슈 마케팅 사례 3',
    industry: '피부과',
    duration: '계정 정지 → 재기 성공',
    period: '샤오홍슈 운영 2개월',
    name: '강남구 00피부과',
    metricNumber: '5배',
    metricUnit: '',
    metricLabel: '월평균 중국인 상담문의',
    metricAction: '상승',
    context: '계정 정지 반복, 유입 0에서 시작',
    numberColor: 'text-blue-400',
    chevronColor: 'text-blue-400',
    tagStyle: 'bg-blue-500/15 text-blue-400 border border-blue-500/20',
    borderGlow: 'hover:border-blue-500/30',
  },
  {
    id: 2,
    src: '/review3.png',
    alt: '샤오홍슈 마케팅 사례 1',
    industry: '뷰티',
    duration: '신규 유입 급증 사례',
    period: '샤오홍슈 운영 1개월',
    name: '강남구 00뷰티업체',
    metricNumber: '180%',
    metricUnit: '',
    metricLabel: '중국인 고객 유입량',
    metricAction: '증가',
    context: 'KOC 체험단, 뷰티 카테고리 집중 공략',
    numberColor: 'text-amber-400',
    chevronColor: 'text-amber-400',
    tagStyle: 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
    borderGlow: 'hover:border-amber-500/30',
  },
  {
    id: 3,
    src: '/review2.png',
    alt: '샤오홍슈 마케팅 사례 2',
    industry: '패션',
    duration: '매출 전환 성공 사례',
    period: '샤오홍슈 운영 2개월',
    name: '패션브랜드0000',
    metricNumber: '3,000',
    metricUnit: '만원',
    metricLabel: '중국 관련 매출 월',
    metricAction: '증가',
    context: '중국인 타깃 콘텐츠로 온라인 매출 직결',
    numberColor: 'text-[#FF2442]',
    chevronColor: 'text-[#FF2442]',
    tagStyle: 'bg-red-500/15 text-red-400 border border-red-500/20',
    borderGlow: 'hover:border-red-500/30',
  },
];

export const SuccessStories: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative flex flex-col items-center justify-center w-full px-4 overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10 w-full max-w-5xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex flex-col items-center"
        >
          <AnimatedPlatform />
          <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-400 mb-2 sm:mb-4">
            지금 대한민국은
          </p>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-current break-keep leading-tight">
            <span className="text-[#FF2442]">샤오홍슈마케팅</span>으로<br className="hidden md:block" />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300 mt-2 block">이렇게 되고 있습니다.</span>
          </h3>
          <div className="w-16 h-1 bg-[#FF2442]/30 mt-8 rounded-full" />
        </motion.div>

        {/* Case Study Cards */}
        <div className="flex flex-col gap-10 md:gap-14 w-full text-left">
          {cases.map((c, index) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-10 transition-colors duration-300 ${c.borderGlow}`}
            >
              {/* Top inset highlight line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-3xl" />

              {/* Card Header */}
              <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.tagStyle}`}>
                  {c.industry}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/8 text-white/50 border border-white/10">
                  {c.duration}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/8 text-white/50 border border-white/10">
                  {(c as any).period}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-black text-white/90 mb-6 md:mb-8 tracking-tight">
                {c.name}
              </h4>

              {/* Two Column Layout */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">

                {/* Left — Metric Panel */}
                <div className="flex flex-col justify-center md:w-[40%] bg-white/[0.04] rounded-2xl border border-white/8 p-6 md:p-8">
                  <p className="text-sm text-white/50 font-medium mb-2 tracking-wide uppercase">
                    성과 지표
                  </p>
                  <p className="text-white/60 text-base md:text-lg font-medium mb-1 break-keep">
                    {c.metricLabel}
                  </p>
                  <div className="flex items-end flex-wrap gap-x-1 gap-y-0 mt-1 mb-4">
                    <span className={`text-4xl md:text-6xl font-black leading-none ${c.numberColor}`}>
                      {c.metricNumber}
                    </span>
                    {c.metricUnit && (
                      <span className={`text-lg md:text-2xl font-black leading-none mb-0.5 ${c.numberColor}`}>
                        {c.metricUnit}
                      </span>
                    )}
                    <span className={`text-lg md:text-2xl font-black mb-0.5 ${c.numberColor}`}>
                      {c.metricAction}
                      <UpwardChevrons color={c.chevronColor} />
                    </span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-4" />
                  <p className="text-white/40 text-xs leading-relaxed break-keep">
                    {c.context}
                  </p>
                </div>

                {/* Right — Proof Panel */}
                <div className="flex flex-col md:w-[60%]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-xs text-white/30 font-medium tracking-wide">고객 후기 원본</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 flex-1">
                    {/* Subtle top gradient overlay */}
                    <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />
                    <img
                      src={c.src}
                      alt={c.alt}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          const div = document.createElement('div');
                          div.className = 'text-white/30 text-sm p-8 text-center flex flex-col gap-2 items-center justify-center min-h-[200px]';
                          div.innerHTML = `<span>이미지를 <b>public</b> 폴더에</span><code class="bg-white/10 px-2 py-1 rounded text-xs">${c.src.replace('/', '')}</code><span>이름으로 저장해주세요.</span>`;
                          target.parentElement.appendChild(div);
                        }
                      }}
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background ambient */}
      <motion.div
        initial={{ backgroundColor: 'rgba(59, 130, 246, 0.06)' }}
        whileInView={{ backgroundColor: 'rgba(255, 36, 66, 0.06)' }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
        viewport={{ margin: '-20%' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full blur-[100px] pointer-events-none z-0"
      />
    </section>
  );
};
