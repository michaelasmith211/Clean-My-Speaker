import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ManageCookiesButton } from '@/components/ManageCookiesButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy – Clean My Speaker',
  description:
    'Cookie Policy for Clean My Speaker. Learn about how cookies, web beacons, and Google AdSense DART cookies are used and how to control your cookie preferences.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  const breadcrumbs = [{ name: 'Cookie Policy', href: '/cookie-policy' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-8 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Cookie Preferences & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: August 31, 2026 • Official Website: https://cleanmyspeaker.net
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. What Are Cookies?</h2>
          <p className="text-sm leading-relaxed">
            Cookies are small text files that are downloaded to your computer or mobile device when you visit a website. Cookies allow websites to remember your device, preferences, and browsing habits across sessions, facilitating efficient navigation and personalized features.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. How Clean My Speaker Uses Cookies</h2>
          <p className="text-sm leading-relaxed">
            Clean My Speaker is committed to minimal data footprint. Our core audio cleaning generator operates purely client-side and does <strong>not</strong> require cookies to play sounds or run frequency sweeps.
          </p>
          <p className="text-sm leading-relaxed">
            However, our website may deploy cookies for the following legitimate purposes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm pt-2">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">Essential & Security Cookies</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Deployed by edge security networks (e.g., Cloudflare) to identify trusted web traffic, mitigate malicious distributed denial-of-service (DDoS) attacks, and enforce secure SSL/TLS connections.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">Analytics Cookies (GA4)</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Deployed via Google Analytics (G-HT87NWEHNT) to collect aggregated, anonymized interaction metrics (pageviews, session durations) to understand and improve user experience.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">Advertising & Targeting Cookies</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Deployed by advertising networks (such as Google AdSense) to serve relevant, non-intrusive ads, limit ad repetition, and measure ad campaign effectiveness.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">3. Third-Party Advertising & Google AdSense</h2>
          <p className="text-sm leading-relaxed">
            Google, as a third-party vendor, uses cookies to serve ads on Clean My Speaker:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-400">
            <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline font-semibold hover:text-sky-200">Google Ads Settings</a>.</li>
            <li>Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline font-semibold hover:text-sky-200">aboutads.info</a>.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">4. How Can You Control or Disable Cookies?</h2>
          <p className="text-sm leading-relaxed">
            Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. Here is how you can manage cookie preferences across common browsers:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-400">
            <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data.</li>
            <li><strong>Apple Safari:</strong> Preferences → Privacy → Block all cookies.</li>
            <li><strong>Mozilla Firefox:</strong> Options → Privacy &amp; Security → Enhanced Tracking Protection.</li>
            <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions.</li>
          </ul>
        </section>

        {/* Interactive Cookie Preference Center */}
        <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-sky-500/30 text-center">
          <h2 className="text-xl font-bold text-white">Manage Your Cookie Preferences</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            You can modify your consent preferences or withdraw consent for optional analytics cookies at any time.
          </p>
          <div className="pt-2">
            <ManageCookiesButton />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">5. Updates to This Cookie Policy</h2>
          <p className="text-sm leading-relaxed">
            We may update this Cookie Policy from time to time to reflect technological changes or regulatory requirements. Any updates will take effect upon posting to this page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">6. Contact Us</h2>
          <p className="text-sm leading-relaxed">
            For further clarification regarding our use of cookies or privacy practices, please contact:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm">
            <p className="text-white font-semibold">Clean My Speaker Data Protection Team</p>
            <p className="text-sky-300 font-mono mt-1">privacy@cleanmyspeaker.net</p>
          </div>
        </section>

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/cookie-policy" />

        <footer className="pt-6 border-t border-slate-800 flex justify-between items-center text-sm">
          <Link href="/" className="text-sky-300 underline font-semibold hover:text-sky-200">
            ← Return to Clean My Speaker Tool
          </Link>
          <Link href="/privacy-policy" className="text-sky-300 underline font-semibold hover:text-sky-200">
            Privacy Policy →
          </Link>
        </footer>
      </article>
    </main>
  );
}
