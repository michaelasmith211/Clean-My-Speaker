import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Clean My Speaker – Support & Feedback',
  description:
    'Contact Clean My Speaker for questions, technical feedback, or browser compatibility inquiries regarding our audio utility.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/contact',
  },
};

export default function ContactPage() {
  const breadcrumbs = [{ name: 'Contact', href: '/contact' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-10 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            User Support & Inquiries
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact Clean My Speaker
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Have a question, feedback on sound frequency calibration, or a browser compatibility report? We welcome your messages.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-white">General Feedback & Suggestions</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              For suggestions regarding speaker cleaning modes, frequency sweep rates, or documentation updates, please reach out via email:
            </p>
            <p className="text-sky-400 font-mono font-semibold text-sm">
              support@cleanmyspeaker.net
            </p>
            <p className="text-xs text-slate-500">
              We typically review and respond to inquiries within 24 to 48 hours.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-white">Bug & Browser Reports</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              If the Web Audio engine fails to initialize on your specific device or mobile browser version, please include:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
              <li>Device model (e.g., iPhone 15 Pro, Samsung Galaxy S23)</li>
              <li>Operating system & version (e.g., iOS 17.5, Android 14)</li>
              <li>Browser name and version (e.g., Chrome Mobile 125, Safari 17)</li>
            </ul>
          </div>
        </div>

        <section className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2 text-sm">
          <h2 className="font-bold text-white">Hardware Repair Notice</h2>
          <p className="text-xs text-slate-400">
            Please note that Clean My Speaker is an online audio software utility. We do not provide physical device repair services, replacement parts, or manufacturer warranty replacements. For hardware repairs, please contact an authorized service center for your smartphone manufacturer.
          </p>
        </section>

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/contact" />

        <footer className="pt-6 border-t border-slate-800 flex justify-between items-center">
          <Link href="/" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            ← Return to Clean My Speaker Tool
          </Link>
          <Link href="/privacy-policy" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            Privacy Policy →
          </Link>
        </footer>
      </article>
    </main>
  );
}
