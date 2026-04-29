'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

const NAV_LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact'  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-2xl bg-white/85 dark:bg-[#070711]/85 border-b border-gray-100/80 dark:border-white/[0.05] shadow-sm'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">

        {/* ── Logo ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5 outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-violet-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-500" />
            <span className="relative z-10 flex items-center justify-center w-full h-full text-white font-black text-sm tracking-tight" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              LK
            </span>
          </div>
          <span className="hidden sm:block font-bold text-gray-900 dark:text-white text-sm tracking-tight">
            Lareb<span className="text-violet-500">.</span>
          </span>
        </button>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group outline-none"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-violet-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </button>
          ))}
        </div>

        {/* ── Right actions ── */}
        <div className="flex items-center gap-2.5">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200/70 dark:border-white/[0.06] transition-all duration-300 text-gray-600 dark:text-gray-300"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Hire me CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-px"
          >
            Hire Me
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle mobile menu"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.06]"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`block w-4 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                  menuOpen && i === 0 ? 'rotate-45 translate-y-2'   :
                  menuOpen && i === 1 ? 'opacity-0 scale-x-0'       :
                  menuOpen && i === 2 ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-4 mt-2 rounded-2xl p-3 bg-white dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.06] shadow-2xl">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full mt-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
          >
            Hire Me →
          </button>
        </div>
      </div>
    </nav>
  );
}
