import React, { useState } from 'react';
import { X } from 'lucide-react';

interface NavbarProps {
  isLightMode?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isLightMode = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <>
      {/* Floating Pill Navbar */}
      <nav className={`fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[100] transition-colors duration-500 rounded-full px-6 md:px-8 py-3 w-[90%] md:w-[600px] flex items-center justify-between backdrop-blur-xl border border-white/10
        ${isLightMode ? 'bg-white/40 text-black shadow-lg shadow-black/5' : 'bg-black/40 text-white shadow-lg shadow-white/5'}
      `}>
        <button
          onClick={(e) => handleNavClick(e as any, '#work')}
          className="text-xs font-semibold tracking-widest uppercase hover:opacity-50 transition-opacity"
        >
          WORK
        </button>

        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="text-xl font-bold tracking-tight absolute left-1/2 -translate-x-1/2"
        >
          laicai.
        </a>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-xs font-semibold tracking-widest uppercase hover:opacity-50 transition-opacity"
        >
          ABOUT
        </button>
      </nav>

      {/* Full Screen Overlay Modal */}
      <div
        className={`fixed inset-0 z-[1000] bg-black/95 backdrop-blur-3xl transition-opacity duration-500 flex flex-col items-center justify-center
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-10 right-10 text-white hover:text-white/50 transition-colors p-4"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        <div className="flex flex-col items-center gap-8 md:gap-12 text-white">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-4xl md:text-8xl font-bold tracking-tighter hover:text-white/50 transition-colors">
            HOME
          </a>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-4xl md:text-8xl font-bold tracking-tighter uppercase hover:text-white/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};