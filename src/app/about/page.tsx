import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Clean My Speaker – Free Audio Cleaner Tool',
  description:
    'Learn about Clean My Speaker (CleanMySpeaker.net): our mission to provide free, private, instant in-browser sound utilities to clean and fix phone speakers worldwide.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/about/',
  },
  openGraph: {
    title: 'About Clean My Speaker – Free Online Tool to Clean & Fix Phone Speakers',
    description:
      'Learn about Clean My Speaker and our mission to provide fast, private, 100% in-browser acoustic utilities to fix muffled phone sound.',
    url: 'https://cleanmyspeaker.net/about/',
    images: [
      {
        url: 'https://cleanmyspeaker.net/images/clean-my-speaker-fix-my-speaker-benefits.jpg',
        width: 1024,
        height: 682,
        alt: 'About Clean My Speaker & Fix My Speaker Online Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Clean My Speaker',
    description:
      'Our mission: free, instant in-browser acoustic utilities to fix muffled smartphone sound.',
    images: ['https://cleanmyspeaker.net/images/clean-my-speaker-fix-my-speaker-benefits.jpg'],
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ name: 'About', href: '/about' }];

  const jsonLdAbout = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Clean My Speaker',
    url: 'https://cleanmyspeaker.net/about/',
    description:
      'Learn about Clean My Speaker: our mission to provide free, private, instant in-browser sound utilities to clean and fix phone speakers worldwide.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Clean My Speaker',
      url: 'https://cleanmyspeaker.net/',
      logo: 'https://cleanmyspeaker.net/icon.png',
      sameAs: SOCIAL_LINKS.map((s) => s.url),
    },
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-10 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            About Our Project
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            About Clean My Speaker
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Clean My Speaker is an open, lightweight web utility designed to solve a ubiquitous smartphone frustration: water and moisture trapped in speaker openings.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Mission & Principles</h2>
          <p className="leading-relaxed">
            When users accidentally drop their phone in water or get caught in a rainstorm, they need an immediate solution that does not require downloading bloated apps, watching deceptive advertisements, or installing untrusted configuration profiles.
          </p>
          <p className="leading-relaxed">
            We built <strong>Clean My Speaker</strong> with three unwavering technical principles:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm pt-2">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">1. Zero Bloat</h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                No slow frameworks, no bloated trackers, and no unnecessary third-party scripts. The tool loads instantly, even on weak mobile connections.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">2. 100% Client-Side</h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                Sound is synthesized mathematically inside your browser via the native Web Audio API. Audio never passes through a remote server.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">3. Honest Engineering</h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                We provide truthful explanations of acoustic displacement capabilities, without false guarantees or medical/repair claims.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Privacy & Device Security</h2>
          <p className="leading-relaxed">
            Clean My Speaker requires no account registration and does not collect personal identity information. Our tool does not request access to your microphone, camera, or file system. Your privacy remains completely intact.
          </p>
        </section>

        {/* Community & Social Channels */}
        <section className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold text-white">Community & Verified Social Channels</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Join our global community across all major networks to stay informed about smartphone water ejection tips, sound frequency research, and new device audio tests:
          </p>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-2"
                aria-label={`Visit Clean My Speaker on ${item.name}`}
              >
                <span>{item.name}</span>
                <span className="text-[11px] text-sky-400 font-mono">{item.handle}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/about" />

        <footer className="pt-6 border-t border-slate-800 flex justify-between items-center">
          <Link href="/" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            ← Back to Clean My Speaker Tool
          </Link>
          <Link href="/contact" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            Get in Touch →
          </Link>
        </footer>
      </article>
    </main>
  );
}
