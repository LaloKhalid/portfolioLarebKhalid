'use client';

import { FormEvent, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'sending' | 'sent';

const CONTACT_INFO = [
  {
    icon: '📧',
    label: 'Email',
    value: 'lareb.usman@yahoo.com',
    href: 'mailto:lareb.usman@yahoo.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/LarebKhalid',
    href: 'https://github.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/lareb-k-572469166',
  },
];

const EMPTY_FORM: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm]         = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors]     = useState<Partial<FormState>>({});
  const [status, setStatus]     = useState<SubmitStatus>('idle');

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim())    next.name    = 'Name is required';
    if (!form.email.trim())   next.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              next.email   = 'Invalid email address';
    if (!form.message.trim()) next.message = 'Message is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1400));
    setStatus('sent');
    setForm(EMPTY_FORM);
  };

  const field =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(p => ({ ...p, [key]: e.target.value }));
      if (errors[key]) setErrors(p => ({ ...p, [key]: undefined }));
    };

  const inputBase =
    'w-full px-4 py-3 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 bg-gray-50 dark:bg-[#0e0e20] border outline-none focus:ring-2 focus:ring-violet-500/25 transition-all duration-200';
  const inputOk  = `${inputBase} border-gray-200 dark:border-white/[0.08] focus:border-violet-500`;
  const inputErr = `${inputBase} border-red-400 focus:border-red-400`;

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-white dark:bg-[#070711] relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-96 h-96 bg-violet-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative">

        {/* ── Header ── */}
        <div className={`mb-14 text-center reveal ${inView ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-7 h-px bg-violet-500" />
            <span className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-[0.18em]">Contact</span>
            <div className="w-7 h-px bg-violet-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-[0.95rem] max-w-md mx-auto">
            Have a project in mind? Send me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 items-start">

          {/* ── Contact info ── */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            {CONTACT_INFO.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-[#0e0e20] border border-gray-100 dark:border-white/[0.05] hover:border-violet-500/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-lg shrink-0 group-hover:bg-violet-500/20 transition-colors duration-200">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200 truncate">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Availability card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-500/[0.07] to-cyan-500/[0.07] border border-violet-500/20 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="animate-ping-slow absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative flex rounded-full w-2.5 h-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Currently Available</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Open to full-time frontend developer roles and freelance projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
