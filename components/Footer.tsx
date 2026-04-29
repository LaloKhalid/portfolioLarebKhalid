'use client';

const NAV_LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact'  },
];

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com',                    short: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com',                  short: 'in' },
  { label: 'Email',    href: 'mailto:lareb.usman.lu@gmail.com',       short: '@'  },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="py-14 bg-gray-50 dark:bg-[#0a0a17] border-t border-gray-100 dark:border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5">

        {/* ── Three-column grid ── */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-md shadow-violet-500/20">
                <span className="text-white font-black text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>LK</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-sm">Lareb Khalid</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">
              Frontend Developer passionate about crafting stunning, high-performance web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 capitalize"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-5">Connect</h4>
            <div className="flex gap-2.5">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/[0.05] hover:bg-violet-100 dark:hover:bg-violet-500/20 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 border border-transparent hover:border-violet-500/30 transition-all duration-200"
                >
                  {s.short}
                </a>
              ))}
            </div>

            <p className="mt-5 text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
              lareb.usman.lu@gmail.com
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-gray-100 dark:border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © 2026 Lareb Khalid. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
