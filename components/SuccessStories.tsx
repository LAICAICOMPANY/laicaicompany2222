import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPlatform } from './AnimatedPlatform';

const UpwardChevrons = ({ color }: { color: string }) => (
  <span className="inline-flex flex-col items-center justify-center align-middle transform translate-y-[0.13em] sm:translate-y-[0.18em] ml-1 sm:ml-2">
    {[2, 1, 0].map((i) => (
      <motion.svg 
        key={i}
        className={`w-[0.7em] h-[0.7em] sm:w-[0.9em] sm:h-[0.9em] ${color} -mt-[0.35em] sm:-mt-[0.4em] first:mt-0`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={4}
        animate={{ opacity: [0.1, 1, 0.1], y: [0, -4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </motion.svg>
    ))}
  </span>
);

export const SuccessStories: React.FC = () => {
  const reviews = [
    { 
      id: 3, 
      src: '/review1.png', 
      alt: '샤오홍슈 마케팅 사례 3',
      titleNew: '강남구 00피부과',
      highlightBadge: '',
      result: (
        <>
          월평균 중국인 상담문의<span className="text-[#FFD700] mx-[0.25em] font-extrabold">5배</span>상승<UpwardChevrons color="text-blue-400" />
        </>
      ),
    },
    { 
      id: 1, 
      src: '/review2.png', 
      alt: '샤오홍슈 마케팅 사례 1',
      title: '자사몰 왕초보',
      titleNew: '강남구 00뷰티업체',
      highlightBadge: '',
      result: (
        <>
          중국인 고객 유입량<span className="text-[#FFD700] mx-[0.25em] font-extrabold">180%</span>증가<UpwardChevrons color="text-gray-300" />
        </>
      ),
    },
    { 
      id: 2, 
      src: '/review3.png', 
      alt: '샤오홍슈 마케팅 사례 2',
      titleNew: '패션브랜드0000',
      highlightBadge: '',
      result: (
        <>
          중국 관련 매출 월<span className="text-[#FFD700] mx-[0.25em] font-extrabold">3000만원</span>증가<UpwardChevrons color="text-[#FF2442]" />
        </>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 relative flex flex-col items-center justify-center w-full px-4 overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10 w-full max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-10%" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="mb-16 md:mb-24 flex flex-col items-center"
        >
          <AnimatedPlatform />
          

          <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-400 mb-2 sm:mb-4">
            지금 대한민국은
          </p>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-current break-keep leading-tight">
            <span className="text-[#FF2442]">샤오홍슈마케팅</span>으로<br className="hidden md:block"/>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300 mt-2 block">이렇게 되고 있습니다.</span>
          </h3>
          <div className="w-16 h-1 bg-[#FF2442]/30 mt-8 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col items-center gap-16 md:gap-24 w-full">
          {reviews.map((review, index) => (
            <React.Fragment key={review.id}>
              <div className="flex flex-col items-center w-full mb-12 md:mb-20">
                {/* Floating Glass Title Badge (No overlap) */}
                <div className="flex justify-center w-full z-20 relative mb-6 md:mb-8">
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative group inline-block"
                  >
                    {/* Floating shadow aura under the badge */}
                    <div className="absolute -inset-4 bg-black/40 blur-2xl rounded-full opacity-50 -z-10 translate-y-4"></div>
                    
                    {/* Glass Pill container */}
                    <div className="relative flex items-center justify-center gap-3 sm:gap-4 px-6 py-3 sm:px-10 sm:py-5 rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_40px_rgba(0,0,0,0.5),_inset_0_1px_1px_rgba(255,255,255,0.2)]">
                      
                      {/* Left accent dot */}
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-b from-[#5C66F0] to-[#FF2442] shadow-[0_0_15px_rgba(255,36,66,0.8)]"></div>
                      
                      {/* Title text */}
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter drop-shadow-md">
                        {review.titleNew}
                      </h3>
                      
                      {/* Spark SVG */}
                      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#FF2442] animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(255,36,66,0.6)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5L12 0z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
  
                {/* Review Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full max-w-4xl relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-500/10 bg-white/5 backdrop-blur-md mb-4"
                >
                  <div className="w-full flex items-center justify-center bg-transparent">
                    <img 
                      src={review.src} 
                      alt={review.alt}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          const div = document.createElement('div');
                          div.className = "text-current opacity-40 text-sm p-8 text-center break-keep flex flex-col gap-2 items-center justify-center w-full min-h-[300px] absolute inset-0";
                          div.innerHTML = `<span>이미지를 <b>public</b> 폴더에</span><code class="bg-gray-500/20 px-2 py-1 rounded text-xs">${review.src.replace('/','')}</code><span>이름으로 저장해주세요.</span>`;
                          target.parentElement.appendChild(div);
                        }
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Description Below Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex flex-col items-center w-full mt-2"
                >
                  {review.highlightBadge && (
                    <div className="flex flex-col items-center justify-center gap-2 mb-4">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-current opacity-90 tracking-tight">
                        {review.highlightBadge}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col items-center w-full text-center text-white px-2 sm:px-4 relative group">
                    {/* Clean, trustworthy premium glass container */}
                    <span className="bg-white/5 px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-8 inline-flex items-center justify-center backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40 max-w-[95vw] rounded-[2rem] relative overflow-hidden group-hover:-translate-y-1 transition duration-500">
                      
                      {/* Very subtle elegant gradient line for a polished look */}
                      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                      
                      <span className="inline-flex items-center justify-center text-[1.1rem] sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white/95 break-keep whitespace-nowrap overflow-visible px-2 sm:px-4 relative z-10 transition-transform duration-300">
                        {review.result}
                      </span>
                    </span>
                  </div>
                </motion.div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Background ambient light transition from blue to red */}
      <motion.div 
        initial={{ backgroundColor: 'rgba(59, 130, 246, 0.08)' }}
        whileInView={{ backgroundColor: 'rgba(255, 36, 66, 0.08)' }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        viewport={{ margin: "-20%" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full blur-[100px] pointer-events-none z-0"
      />
    </section>
  );
};
