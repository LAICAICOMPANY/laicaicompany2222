import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { TransitionText } from './components/TransitionText';
import { AnimatedChevrons } from './components/AnimatedChevrons';
import { SuccessStories } from './components/SuccessStories';
import { TargetAudience } from './components/TargetAudience';
import { Philosophy } from './components/Philosophy';
import { ImageGallery } from './components/ImageGallery';
import { About } from './components/About';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { MetallicBackground } from './components/MetallicBackground';
import ContactPage from './pages/ContactPage';

const MainPage: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightMode = false;

  return (
    <div className="min-h-screen font-sans relative text-white bg-[#0A0F1D]">
      <MetallicBackground />
      <div className="fixed inset-0 pointer-events-none z-[999] bg-noise opacity-[0.03] mix-blend-overlay"></div>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-brand-orange z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar isLightMode={isLightMode} />

      <main>
        <Hero />
        <Statistics />
        <TransitionText lines={[
          <div className="flex flex-col items-center text-center opacity-80 transition-opacity duration-1000 hover:opacity-100">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-current mb-1">누군가는 바꿀 수 없는</span>
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-current">
              시대의 흐름을 <span className="text-red-500 text-2xl sm:text-3xl font-extrabold mx-[0.1em]">불평</span>만 하고,
            </span>
          </div>,
          <div className="h-24 w-[2px] bg-gradient-to-b from-current to-transparent opacity-20 my-4" />,
          <div className="flex flex-col items-center text-center mt-4">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-current mb-4">누군가는 그것을</span>
            <div className="relative flex items-end justify-center">
              <span className="text-7xl sm:text-[6rem] md:text-[7rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#0c3bea] via-[#3B82F6] to-[#00d4ff] pr-1">
                기회
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-current leading-none pb-1 sm:pb-2">
                로 삼습니다
              </span>
            </div>
          </div>,
          <div className="mt-8 mb-4">
            <AnimatedChevrons />
          </div>
        ]} />
        <SuccessStories />
        <TargetAudience />
        <Philosophy />
        <ImageGallery />
        <About />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;