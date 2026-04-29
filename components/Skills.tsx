'use client';

import { useInView } from '@/hooks/useInView';

const CATEGORIES = [
  {
    name: 'Frontend',
    icon: '⚛️',
    gradient: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-blue-500/25',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    name: 'Backend & DB',
    icon: '⚙️',
    gradient: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-500/25',
    skills: ['Node.js', 'Express', 'Firebase', 'MySQL'],
  },
  {
    name: 'Tools & Design',
    icon: '🛠️',
    gradient: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/25',
    skills: ['GitHub', 'GitHub Actions', 'Figma', 'Postman', 'API Integration', 'Claude Code'],
  },
];

const MARQUEE_ITEMS = [
  { icon: '⚛️', name: 'React'          },
  { icon: '▲',  name: 'Next.js'        },
  { icon: '🟦', name: 'TypeScript'     },
  { icon: '🟨', name: 'JavaScript'     },
  { icon: '🍃', name: 'Tailwind CSS'   },
  { icon: '🟢', name: 'Node.js'        },
  { icon: '🚀', name: 'Express'        },
  { icon: '🗄️', name: 'MySQL'          },
  { icon: '🔥', name: 'Firebase'       },
  { icon: '🐙', name: 'GitHub'         },
  { icon: '🎨', name: 'Figma'          },
  { icon: '🌐', name: 'HTML5'          },
  { icon: '🅱️', name: 'Bootstrap'      },
  { icon: '📮', name: 'Postman'        },
  { icon: '🤖', name: 'Claude Code'    },
  { icon: '⚡', name: 'GitHub Actions' },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-white dark:bg-[#070711] relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative">

        {/* ── Header ── */}
        <div className={`mb-14 reveal ${inView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-violet-500" />
            <span className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-[0.18em]">Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-[0.95rem] max-w-md">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* ── Category cards ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.name}
              className={`group p-6 rounded-2xl bg-gray-50 dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.05] hover:border-violet-500/30 hover:-translate-y-1.5 transition-all duration-500 reveal ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} shadow-lg ${cat.shadow} flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1.5 text-[11px] font-medium rounded-lg bg-white dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.06] hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Scrolling marquee ── */}
        <div className={`relative overflow-hidden reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '480ms' }}>
          <div className="flex gap-3 animate-marquee whitespace-nowrap w-max">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.05] text-sm font-medium text-gray-700 dark:text-gray-300 shrink-0 select-none"
              >
                <span className="text-base leading-none">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0  w-20 bg-gradient-to-r from-white dark:from-[#070711] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-[#070711] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
