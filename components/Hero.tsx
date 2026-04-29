'use client';

import { useEffect, useState } from 'react';

const FLOATING_BADGES = [
  { label: '⚛️  React',      delay: '0s',    pos: 'top-[6%]  left-1/2 -translate-x-1/2' },
  { label: '🟦  TypeScript', delay: '-1.5s', pos: 'top-[38%] -right-4' },
  { label: '🍃  Tailwind',   delay: '-3s',   pos: 'bottom-[8%] left-1/2 -translate-x-1/2' },
  { label: '▲   Next.js',   delay: '-4.5s', pos: 'top-[38%] -left-4' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const cls = (delay: string) =>
    `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#070711]">

      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-500/[0.13] blur-3xl animate-orb pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.1]  blur-3xl animate-orb pointer-events-none" style={{ animationDelay: '-2.5s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-500/[0.07]  blur-3xl animate-orb pointer-events-none" style={{ animationDelay: '-5s' }} />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left ── text */}
          <div className="space-y-7">

            {/* Availability badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/25 bg-violet-500/[0.07] text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest ${cls('0ms')}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping-slow absolute inset-0 rounded-full bg-violet-400 opacity-70" />
                <span className="relative flex rounded-full w-2 h-2 bg-violet-500" />
              </span>
              Available for opportunities
            </div>

            {/* Greeting + name */}
            <div className={cls('150ms')} style={{ transitionDelay: '150ms' }}>
              <p className="text-gray-400 dark:text-gray-500 text-sm font-medium uppercase tracking-[0.18em] mb-3">
                Hello, World! 👋
              </p>
              <h1 className="text-[clamp(3rem,7vw,4.75rem)] font-black leading-[1.04] tracking-tight">
                <span className="text-gray-900 dark:text-white">I'm </span>
                <span className="gradient-text">Lareb</span>
                <br />
                <span className="text-gray-900 dark:text-white">Khalid</span>
              </h1>
            </div>

            {/* Role + tagline */}
            <div className={cls('300ms')} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-px bg-violet-500" />
                <span className="text-lg font-semibold text-gray-600 dark:text-gray-300 tracking-tight">
                  Frontend Developer
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-[480px] text-[0.95rem]">
                Passionate about crafting stunning, performant web experiences.
                I transform ideas into pixel-perfect, interactive applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-3 ${cls('500ms')}`} style={{ transitionDelay: '500ms' }}>
              <button
                onClick={() => scrollTo('#projects')}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 hover:border-violet-500/50 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-50 dark:hover:bg-violet-500/[0.06]"
              >
                Contact Me
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Social row */}
            <div className={`flex items-center gap-4 ${cls('700ms')}`} style={{ transitionDelay: '700ms' }}>
              <span className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-widest">Follow</span>
              <div className="h-px w-6 bg-gray-200 dark:bg-white/10" />
              {[
                { label: 'GitHub',   href: 'https://github.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right ── abstract visual */}
          <div className={`relative hidden lg:flex items-center justify-center transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative w-[300px] h-[300px]">

              {/* Spinning rings */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin-slow" />
              <div className="absolute inset-5 rounded-full border border-cyan-500/15 animate-spin-rev" />
              <div className="absolute inset-10 rounded-full border border-violet-400/10 animate-spin-slow" style={{ animationDuration: '30s' }} />

              {/* Avatar */}
              <div className="absolute inset-14 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-violet-500/30">
                <span className="text-white font-black text-3xl tracking-tight" style={{ fontFamily: 'JetBrains Mono, monospace' }}>LK</span>
              </div>

              {/* Floating skill badges */}
              {FLOATING_BADGES.map(b => (
                <div
                  key={b.label}
                  className={`absolute ${b.pos} px-3 py-1.5 rounded-full bg-white dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.08] shadow-lg text-xs font-medium text-gray-700 dark:text-gray-300 animate-float whitespace-nowrap`}
                  style={{ animationDelay: b.delay }}
                >
                  {b.label}
                </div>
              ))}
            </div>

            {/* Stat chips */}
            <div className="absolute bottom-4 -left-6 p-4 rounded-2xl bg-white dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.06] shadow-xl">
              <div className="text-2xl font-black gradient-text leading-none">5+</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-wide">Projects</div>
            </div>
            <div className="absolute top-4 -right-4 p-4 rounded-2xl bg-white dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.06] shadow-xl">
              <div className="text-2xl font-black gradient-text leading-none">∞</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-wide">Passion</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
