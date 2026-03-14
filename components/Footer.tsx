import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium tracking-widest uppercase">
          <p className="mb-6 md:mb-0">&copy; 2026 LaiCai Company. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        <div className="mt-32 text-center flex items-center justify-center">
          <h1 className="text-[20vw] leading-[0.75] font-black tracking-tighter text-transparent select-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>
            LAICAI
          </h1>
        </div>
      </div>
    </footer>
  );
};