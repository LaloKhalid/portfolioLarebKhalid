'use client';

import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-gray-50 dark:bg-[#0a0a17] relative overflow-hidden"
    >
      {/* Decorative orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative">

        {/* ── Section header ── */}
        <div className={`mb-14 reveal ${inView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-violet-500" />
            <span className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-[0.18em]">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
            The person behind{' '}
            <span className="gradient-text">the code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: visual card ── */}
          <div className={`reveal-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Gradient border card */}
              <div className="rounded-3xl p-px bg-gradient-to-br from-violet-600 via-purple-500 to-cyan-500 shadow-2xl shadow-violet-500/20">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-100 dark:bg-[#0e0e20] px-10 py-14 flex flex-col items-center text-center gap-5">
                  {/* Monogram avatar */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-violet-500/30">
                    <span className="text-white font-black text-3xl tracking-tight" style={{ fontFamily: 'JetBrains Mono, monospace' }}>LK</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Lareb Khalid</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Frontend Developer</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['React', 'Next.js', 'TypeScript'].map(t => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 p-4 rounded-2xl bg-white dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.06] shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-lg">
                  💡
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">Open to Work</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Frontend Roles</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className={`space-y-8 reveal-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '250ms' }}>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-[0.95rem]">
              <p className="text-base">
                Hello, My Name is{' '}
                <strong className="text-gray-900 dark:text-white font-semibold">Lareb Khalid</strong>.
                I'm a Frontend Developer with a passion for creating{' '}
                <span className="gradient-text font-semibold">stunning websites!</span>
              </p>
              <p>
                I specialize in building modern, responsive web applications using React, Next.js,
                and TypeScript. I love turning complex problems into clean, elegant solutions that
                delight users.
              </p>
              <p>
               When I'm not coding, I enjoy reading books, exploring new ideas, and learning about different technologies.
              </p>
            </div>

            {/* Resume CTA */}
            
          </div>
        </div>
      </div>
    </section>
  );
}