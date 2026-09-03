import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service and conditions for using Clean My Speaker. Read our terms regarding fair use, intellectual property, user responsibilities, and acoustic utility limitations.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/terms-of-service/',
  },
};

export default function TermsOfServicePage() {
  const breadcrumbs = [{ name: 'Terms of Service', href: '/terms-of-service' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-8 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            User Agreement & Policies
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: August 31, 2026 • Official Website: https://cleanmyspeaker.net
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
          <p className="text-sm leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement made between you and <strong>Clean My Speaker</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), concerning your access to and use of the website located at <a href="https://cleanmyspeaker.net" className="text-sky-300 underline font-semibold hover:text-sky-200">https://cleanmyspeaker.net</a>.
          </p>
          <p className="text-sm leading-relaxed">
            By accessing or using our website and its audio tools, you agree that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using the site and you must discontinue use immediately.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. Nature of Service & Utility Description</h2>
          <p className="text-sm leading-relaxed">
            Clean My Speaker provides a free, browser-based acoustic utility designed to emit specific audio frequencies and sound patterns (ranging typically between 100 Hz and 500 Hz). The primary purpose is to produce physical diaphragm vibrations that help loosen surface moisture and particulate debris trapped against external mobile speaker mesh openings.
          </p>
          <p className="text-sm leading-relaxed">
            The service is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; for informational and utility purposes without warranties of any kind.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">3. Acceptable Use Policy</h2>
          <p className="text-sm leading-relaxed">
            You agree not to use the website or its tools for any unlawful purpose or in any manner that could damage, disable, overburden, or impair our infrastructure. Specifically, you agree not to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-400">
            <li>Attempt to reverse-engineer, decompile, or copy the proprietary audio synthesis algorithms for redistribution without authorization.</li>
            <li>Use automated scripts, bots, spiders, or scrapers to access or mirror the content without express written consent.</li>
            <li>Frame or link to the audio player in a manner that misrepresents ownership or creates a deceptive user interface.</li>
            <li>Use the tool at excessive, continuous volumes directly against human ears or in close proximity to sensitive hearing organs or pets.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">4. Intellectual Property Rights</h2>
          <p className="text-sm leading-relaxed">
            Unless otherwise indicated, the website, design assets, original articles, graphics, code, and brand elements (&ldquo;Content&rdquo;) are our proprietary property and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-sm leading-relaxed">
            Apple, iPhone, Apple Watch, and Water Lock are registered trademarks of Apple Inc. Android and Google are trademarks of Google LLC. Samsung and Galaxy are trademarks of Samsung Electronics Co., Ltd. Clean My Speaker is an independent web utility and is not affiliated with, endorsed by, or sponsored by any of these entities.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">5. Third-Party Links & Advertising</h2>
          <p className="text-sm leading-relaxed">
            Our website may contain advertisements, sponsored links, and references to third-party websites (such as Google AdSense ad partners). We do not control or endorse the content, policies, or practices of any third-party websites or services. You acknowledge and agree that Clean My Speaker shall not be responsible or liable for any damage or loss caused by your interaction with third-party advertisers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">6. Limitation of Liability & Disclaimer</h2>
          <p className="text-sm leading-relaxed">
            In no event shall Clean My Speaker, its creators, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access to or use of the website or the inability to use the audio cleaning tool. Sound vibrations cannot reverse permanent water damage, internal motherboard corrosion, or physical electrical short-circuits.
          </p>
          <p className="text-sm leading-relaxed">
            For complete information regarding the scope of liability, please read our dedicated{' '}
            <Link href="/disclaimer" className="text-sky-300 underline font-semibold hover:text-sky-200">
              Disclaimer
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">7. Governing Law & Modifications</h2>
          <p className="text-sm leading-relaxed">
            We reserve the right to revise or modify these Terms at any time without prior notice. By continuing to use Clean My Speaker after revisions become effective, you agree to be bound by the updated terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">8. Contact Information</h2>
          <p className="text-sm leading-relaxed">
            If you have any questions or concerns regarding our Terms of Service, please contact our legal and support team:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm">
            <p className="text-white font-semibold">Clean My Speaker Legal Department</p>
            <p className="text-sky-300 font-mono mt-1">support@cleanmyspeaker.net</p>
          </div>
        </section>

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/terms-of-service" />

        <footer className="pt-6 border-t border-slate-800 flex justify-between items-center text-sm">
          <Link href="/" className="text-sky-300 underline font-semibold hover:text-sky-200">
            ← Return to Clean My Speaker Tool
          </Link>
          <Link href="/disclaimer" className="text-sky-300 underline font-semibold hover:text-sky-200">
            Disclaimer →
          </Link>
        </footer>
      </article>
    </main>
  );
}
