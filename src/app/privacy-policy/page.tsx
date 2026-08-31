import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – Clean My Speaker',
  description:
    'Privacy Policy for Clean My Speaker. Read about our commitment to privacy, zero audio recording, local browser processing, and cookie policy.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ name: 'Privacy Policy', href: '/privacy-policy' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-8 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Legal & Data Protection
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: January 1, 2026 • Domain: https://cleanmyspeaker.net
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. Core Privacy Principle: Local Browser Processing</h2>
          <p className="text-sm leading-relaxed">
            At Clean My Speaker, we respect and prioritize your personal privacy. Our audio cleaning tools operate 100% locally within your device&apos;s web browser utilizing the native HTML5 Web Audio API.
          </p>
          <p className="text-sm leading-relaxed">
            We do <strong>not</strong> record audio, request microphone permissions, capture camera inputs, or upload audio files to external servers. Your phone speaker sounds are generated purely via algorithmic math inside your device&apos;s memory.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. Information We Do Not Collect</h2>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-400">
            <li>No user account registration or login credentials</li>
            <li>No personal identification numbers, names, or physical addresses</li>
            <li>No microphone or recording audio data</li>
            <li>No sensitive device telemetry or contact lists</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">3. Log Files & Anonymous Analytics</h2>
          <p className="text-sm leading-relaxed">
            Like most modern web services, standard server access logs (such as IP addresses, browser user agent strings, referring pages, and visit timestamps) may be processed by hosting infrastructure providers (such as Vercel or Cloudflare) solely for security, DDoS prevention, and server performance monitoring.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">4. Cookies & Third-Party Services</h2>
          <p className="text-sm leading-relaxed">
            Clean My Speaker does not set tracking cookies or sell your personal data. If third-party advertising partners (such as Google AdSense) or privacy-conscious analytics are integrated in the future, they may utilize standard cookies or web beacons to display non-intrusive advertisements in compliance with applicable laws, including GDPR and CCPA regulations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">5. Contact Regarding Privacy</h2>
          <p className="text-sm leading-relaxed">
            If you have questions regarding this Privacy Policy, please contact us at:{' '}
            <span className="text-sky-400 font-mono">privacy@cleanmyspeaker.net</span>.
          </p>
        </section>

        <footer className="pt-6 border-t border-slate-800">
          <Link href="/" className="text-sky-400 hover:underline text-sm font-semibold">
            ← Return to Clean My Speaker Tool
          </Link>
        </footer>
      </article>
    </main>
  );
}
