import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MetallicBackground } from '../components/MetallicBackground';

const SuccessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans relative text-white bg-[#0A0F1D] overflow-x-hidden w-full flex flex-col">
      <MetallicBackground />
      <div className="fixed inset-0 pointer-events-none z-[999] bg-noise opacity-[0.03] mix-blend-overlay"></div>
      
      <Navbar isLightMode={false} />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-4 relative z-10 w-full animate-fade-in-up">
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse"></div>
            <CheckCircle2 className="w-12 h-12 text-green-400 relative z-10" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight">
            성공적으로 전송되었습니다
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md break-keep leading-relaxed">
            문의하신 내용이 접수되었습니다.<br/>
            담당자가 확인 후 빠른 시일 내에 기재해주신 연락처로 회신드리겠습니다.
          </p>
          
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            홈으로 돌아가기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessPage;
