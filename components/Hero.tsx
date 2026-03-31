import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <section className="relative w-full h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-transparent text-white">
      <style>{`
        .light-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
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
          opacity: 0.5;
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-blue-400/20 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* News Collage Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-70 md:opacity-[0.3]">
        {isClient && (
          <div className="relative w-full max-w-[430px] h-[120vh]">
            {/* News 1 to 4 (Background Far) */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }} animate={{ opacity: 1, scale: 1, rotate: -10 }} transition={{ duration: 1.5, ease: "easeOut" }}
              src="/news1.png" className="absolute w-36 opacity-60 rounded-xl object-cover"
              style={{ top: '20%', left: 'calc(50% - 180px)' }} />
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotate: 15 }} animate={{ opacity: 1, scale: 1, rotate: 12 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
              src="/news2.png" className="absolute w-40 opacity-60 rounded-xl object-cover"
              style={{ top: '26%', right: 'calc(50% - 170px)' }} />
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: -8 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              src="/news3.png" className="absolute w-32 opacity-50 rounded-xl object-cover"
              style={{ bottom: '25%', right: 'calc(50% - 160px)' }} />
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 8 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              src="/news4.png" className="absolute w-36 opacity-50 rounded-xl object-cover"
              style={{ bottom: '33%', left: 'calc(50% - 170px)' }} />

            {/* News 5 to 7 (Mid layer) */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.9, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: -5 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
              src="/news5.png" className="absolute w-36 opacity-70 rounded-xl object-cover"
              style={{ top: '18%', left: 'calc(50% - 40px)' }} />
            <motion.img 
              initial={{ opacity: 0, scale: 0.9, rotate: 12 }} animate={{ opacity: 1, scale: 1, rotate: 18 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              src="/news6.png" className="absolute w-40 opacity-70 rounded-xl object-cover"
              style={{ bottom: '15%', right: 'calc(50% - 10px)' }} />
            <motion.img 
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -3 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
              src="/news7.png" className="absolute w-28 opacity-60 rounded-xl object-cover"
              style={{ top: '45%', left: 'calc(50% - 190px)' }} />

            {/* News 8 to 10 (Foreground overlap) */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.95, rotate: -15 }} animate={{ opacity: 1, scale: 1, rotate: -8 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
              src="/news8.png" className="absolute w-32 opacity-80 rounded-xl object-cover"
              style={{ top: '48%', right: 'calc(50% - 190px)' }} />
            <motion.img 
              initial={{ opacity: 0, scale: 0.95, rotate: 8 }} animate={{ opacity: 1, scale: 1, rotate: 5 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
              src="/news9.png" className="absolute w-40 opacity-80 rounded-xl object-cover"
              style={{ top: '32%', left: 'calc(50% - 120px)' }} />
            <motion.img 
              initial={{ opacity: 0, scale: 0.95, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: -2 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
              src="/news10.png" className="absolute w-36 opacity-80 rounded-xl object-cover"
              style={{ bottom: '35%', right: 'calc(50% - 100px)' }} />
          </div>
        )}
      </div>

      {/* Dynamic Parallax Typography */}
      <div className="relative z-10 w-full px-6 md:px-20 text-center flex flex-col items-center">
        {isClient && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="flex flex-col items-center gap-4 text-center z-10"
          >
            <div className="flex flex-col items-center w-full px-4">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-snug text-white break-keep text-center font-paperlogy"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,0.8), 0 0 35px rgba(0,0,0,0.8), 0 0 50px rgba(0,0,0,0.6)' }}
              >
                <span
                  className="text-[#38bdf8]"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 0 15px rgba(56,189,248,0.8), 0 0 30px rgba(56,189,248,0.6)' }}
                >
                  한번 더
                </span> 생각해보세요.<br/>
                급할 필요 없습니다.
              </h1>
            </div>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-32 text-center z-10 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <p className="text-sm uppercase tracking-[0.3em] font-medium text-white/50 mb-4">Laicai Company</p>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto"></div>
      </div>
    </section>
  );
};