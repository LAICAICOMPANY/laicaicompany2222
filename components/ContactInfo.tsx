import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="py-32 bg-blue-600 relative overflow-hidden group cursor-pointer" onClick={() => window.location.href = 'mailto:wesk103@gmail.com'}>

      {/* Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-500 opacity-50 mix-blend-overlay pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 md:mb-0 group-hover:px-4 transition-all duration-500">
          Let's work<br />
          together.
        </h2>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-blue-200 font-semibold uppercase tracking-widest mb-2 text-sm">Reach Out</span>
            <span className="text-2xl md:text-4xl text-white font-bold tracking-tight">wesk103@gmail.com</span>
          </div>
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white text-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
            <ArrowRight size={32} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};