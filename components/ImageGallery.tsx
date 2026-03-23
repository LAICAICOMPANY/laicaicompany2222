import React from 'react';

const images = [
  "/gallery/media__1773721727493.jpg",
  "/gallery/media__1773721727538.jpg",
  "/gallery/media__1773721727882.jpg",
  "/gallery/media__1773721728029.jpg",
  "/gallery/media__1773722922380.jpg",
  "/gallery/media__1773722922394.jpg",
  "/gallery/media__1773722922404.jpg",
  "/gallery/media__1773722922507.png",
  "/gallery/media__1773722922524.jpg",
];

// 부드러운 무한 스크롤을 위해 이미지를 연결 (2배수)
const marqueeImages = [...images, ...images];

export const ImageGallery: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      {/* Marquee Animation CSS Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: fit-content;
          animation: marqueeScroll 40s linear infinite;
        }
        .marquee-wrapper:hover .marquee-container {
          animation-play-state: paused;
        }
      `}} />

      <div className="w-full relative">
        <div className="flex flex-col items-center mb-12 px-4">
          <p className="text-sm md:text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4">Our Expertise</p>
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-current text-center leading-[1.6] md:leading-tight mt-6 break-keep">
            저희는 전 직원 <span className="bg-[#2454ff] text-white px-2 md:px-3 py-1 mx-1 inline-block transform -skew-x-6"><span className="transform skew-x-6 inline-block">10년 이상</span></span>의 <span className="bg-[#2454ff] text-white px-2 md:px-3 py-1 mx-1 inline-block transform -skew-x-6"><span className="transform skew-x-6 inline-block">중국 현지 생활</span></span>을 경험한<br className="hidden md:block mt-4"/>
            <span className="bg-[#2454ff] text-white px-2 md:px-3 py-1 mx-1 inline-block transform -skew-x-6 mt-2 md:mt-4"><span className="transform skew-x-6 inline-block">중국 최상위 대학출신 인재</span></span>들이 함께합니다.
          </h3>
        </div>

        {/* 좌우 양끝 자연스러운 끊김 방지 (CSS Mask 기반으로 배경에 구애받지 않는 투명 페이드 효과) */}
        <div 
          className="overflow-hidden marquee-wrapper py-6"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="marquee-container gap-4 md:gap-8 px-4 md:px-8 items-center">
            {marqueeImages.map((src, idx) => (
              <div 
                key={idx} 
                className="relative flex-none h-48 md:h-64 lg:h-80 w-[70%] md:w-80 lg:w-[28rem] rounded-xl md:rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer grayscale-[20%] hover:grayscale-0 group"
              >
                <img 
                  src={src} 
                  alt={`Gallery reference ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* 호버 시 나타나는 미세한 오버레이 처리 (더 고급스러운 느낌 부여) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
