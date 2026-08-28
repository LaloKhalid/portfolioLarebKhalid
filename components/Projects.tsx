'use client';

import { useInView } from '@/hooks/useInView';

const PROJECTS = [
  {
    id: 1,
    title: 'Travel Planner App',
    description:
      'An interactive travel planning application built as part of a course. Lets users explore destinations, plan itineraries, and discover amazing places around the world.',
    tags: ['React', 'Hooks', 'Components', 'API Integration'],
    gradient: 'from-violet-600 via-purple-500 to-indigo-600',
     image: './public/travel-app.png',
    icon: '✈️',
    link: 'https://lnkd.in/emzCnqR8',
    linkLabel: 'View Project',
    featured: true,
  },
  {
    id: 2,
    title: 'Dynamic Movie App',
    description:
      'A modern movie browsing application with an API-driven dynamic UI. Explore a rich catalog with smooth, responsive interactions — styled after the Plex interface.',
    tags: ['React', 'REST API', 'Dynamic UI', 'Responsive'],
    gradient: 'from-cyan-500 via-teal-500 to-blue-600',
    icon: '🎬',
    link: 'https://plex-mgupciugp-lareb-khalids-projects.vercel.app/',
    linkLabel: 'Live Demo',
    featured: true,
  },
    {
    id: 3,
    title: 'Scrum Board',
    description:
      'A dynamic Scrum board for managing tasks, tracking progress, and organizing agile workflows with an intuitive drag-and-drop interface.',
    tags: ['JavaScript', 'Drag & Drop', 'Task Management', 'CSS'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    icon: '📋',
    link: 'https://mygritscrumboard.netlify.app/',
    linkLabel: 'Live Demo',
    featured: true,
  },

  {
  id: 4,
  title: 'Job Tracking App',
  description:
    'A full-stack application currently in development, designed to help users organize, track, and manage their job applications throughout the hiring process.',
  tags: ['Full Stack', 'In Development', 'Job Tracking'],
  gradient: 'from-orange-500 via-amber-500 to-yellow-500',
  icon: '💼',
  link: null,
  linkLabel: 'Coming Soon',
  featured: false,
},


];

function GridPattern() {
  return (
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    />
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-gray-50 dark:bg-[#0a0a17] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative">

        {/* ── Header ── */}
        <div className={`mb-14 reveal ${inView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-violet-500" />
            <span className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-[0.18em]">Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-[0.95rem]">
            A selection of projects I've built with passion.
          </p>
        </div>

        {/* ── Project cards ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`group rounded-3xl overflow-hidden bg-white dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.05] hover:border-violet-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/[0.08] transition-all duration-500 reveal ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${150 + i * 160}ms` }}
            >
              {/* Thumbnail */}
              <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
                <GridPattern />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/15 blur-2xl" />

                <span className="relative text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500 select-none">
                  {project.icon}
                </span>

                {project.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-gray-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors group/link"
                  >
                    {project.linkLabel}
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <div className={`mt-12 text-center reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">More projects in progress — stay tuned!</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 hover:border-violet-500/50 text-gray-700 dark:text-gray-300 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-50 dark:hover:bg-violet-500/[0.06]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
