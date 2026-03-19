import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1 based on center of screen
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <style>{`
        .light-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200vw;
          height: 200vh;
          transform: translate(-50%, -50%);
          background: conic-gradient(
            from 0deg,
            transparent 0deg 40deg,
            rgba(255, 255, 255, 0.1) 45deg 55deg,
            transparent 60deg 110deg,
            rgba(100, 150, 255, 0.15) 120deg 130deg,
            transparent 140deg 210deg,
            rgba(255, 255, 255, 0.05) 220deg 240deg,
            transparent 250deg 310deg,
            rgba(150, 200, 255, 0.1) 320deg 340deg,
            transparent 350deg 360deg
          );
          animation: spin 60s linear infinite;
          filter: blur(10px);
          opacity: 0.8;
          mix-blend-mode: screen;
        }

        .light-rays::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 10%, black 70%);
        }

        @keyframes spin {
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      {/* Background Animated Rays */}
      <div className="light-rays pointer-events-none z-0"></div>

      {/* Core Glowing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[30vw] md:h-[30vw] bg-blue-400/20 mix-blend-screen rounded-full filter blur-[100px] pointer-events-none z-0"></div>

      {/* Dynamic Parallax Typography */}
      <div className="relative z-10 w-full px-6 md:px-20 text-center flex flex-col items-center">
        {isClient && (
          <div
            className="flex flex-col items-center transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -20}px)`
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black font-display tracking-tight leading-tight w-full max-w-7xl mx-auto text-white text-center break-keep">
              <span className="bg-[#1D4ED8] px-3 md:px-4 py-1 inline-block mb-2">중국인 고객이 이미 많으신가요?</span><br />
              <span className="inline-block mb-6 md:mb-12">그렇다면 잘못찾아오셨습니다</span>
            </h1>
            <div className="mt-6 md:mt-8">
              <p className="text-lg sm:text-xl md:text-3xl font-bold tracking-tight text-white inline-block border-b-2 border-white/80 pb-1 break-keep">
                불만족시 100% 환불 해드리는 중국 SNS플랫폼 전문 광고대행사
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-32 text-center z-10 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <p className="text-sm uppercase tracking-[0.3em] font-medium text-white/50 mb-4">Laicai Company</p>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto"></div>
      </div>
    </section>
  );
};