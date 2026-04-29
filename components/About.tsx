'use client';

import { useInView } from '@/hooks/useInView';

const STATS = [
  { value: '2+',   label: 'Years Learning' },
  { value: '5+',   label: 'Projects Built' },
  { value: '10+',  label: 'Technologies'   },
  { value: '100%', label: 'Passion'        },
];

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
                When I'm not coding, you'll find me exploring new design trends, experimenting with
                emerging technologies, and pushing the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl bg-white dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.06] text-center hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${350 + i * 60}ms` }}
                >
                  <div className="text-xl font-black gradient-text">{s.value}</div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
