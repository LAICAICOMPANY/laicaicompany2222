import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Recommendations } from './components/Recommendations';
import { Services } from './components/Services';
import { AccountManagement } from './components/AccountManagement';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { Footer } from './components/Footer';

const App: React.FC = () => {
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

  // Determine global background and text color based on scroll position
  // Transition threshold: roughly after the hero section (e.g., 15% scroll)
  const isLightMode = scrollProgress > 0.15;

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-1000 ease-in-out relative
        ${isLightMode ? 'bg-[#f5f5f5] text-brand-gray' : 'bg-black text-white'}
      `}
    >
      <div className="fixed inset-0 pointer-events-none z-[999] bg-noise opacity-[0.04] mix-blend-overlay"></div>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-brand-orange z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar isLightMode={isLightMode} />

      <main>
        <Hero />
        <About />
        <Recommendations />
        <Services />
        <AccountManagement />
        <ContactForm />
        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
};

export default App;