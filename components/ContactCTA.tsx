import React from 'react';
import { Link } from 'react-router-dom';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-32 lg:py-40 relative px-4">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          
          <h4 className="text-blue-400 font-semibold uppercase tracking-widest mb-4 md:mb-6 text-xs md:text-sm">Contact Us</h4>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6 md:mb-8 text-white/95 break-keep">
            저희와 프로젝트를 함께 <br className="block sm:hidden" /><span className="text-blue-500">하시겠습니까?</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mx-4 md:mx-auto max-w-md mb-8 md:mb-12 break-keep">
            중국인 고객 유입이 가능한지 알아보고 싶다면?
          </p>

          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105"
          >
            무료분석받기
            <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
};
