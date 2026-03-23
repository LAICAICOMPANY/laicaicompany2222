import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase gap-6 md:gap-0">
          <p className="mb-0 text-center md:text-left">&copy; 2026 LaiCai Company. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        <div className="mt-16 md:mt-32 text-center flex items-center justify-center">
          <h1 className="text-[4.5rem] md:text-[5.5rem] leading-[0.75] font-black tracking-tighter text-transparent select-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>
            LAICAI
          </h1>
        </div>
      </div>
    </footer>
  );
};