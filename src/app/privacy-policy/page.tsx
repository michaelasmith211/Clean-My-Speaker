import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Clean My Speaker. Full disclosure of data handling, Google AdSense compliance, DoubleClick DART cookies, GDPR, CCPA, and client-side processing.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/privacy-policy/',
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
            Last Updated: August 31, 2026 • Official Website: https://cleanmyspeaker.net
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. Introduction & Overview</h2>
          <p className="text-sm leading-relaxed">
            Welcome to <strong>Clean My Speaker</strong> (accessible via <a href="https://cleanmyspeaker.net" className="text-sky-300 underline font-semibold hover:text-sky-200">https://cleanmyspeaker.net</a>). We are dedicated to maintaining the trust and confidence of our visitors. This Privacy Policy informs you about our policies regarding the collection, use, and disclosure of personal data when you use our website, as well as your choices associated with that data.
          </p>
          <p className="text-sm leading-relaxed">
            By accessing or using Clean My Speaker, you signify that you have read, understood, and agreed to the practices outlined in this Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. Local Browser Audio Processing (No Audio Data Collected)</h2>
          <p className="text-sm leading-relaxed">
            Clean My Speaker is an algorithmic acoustic sound utility that functions <strong>100% on the client side</strong>. All sound waves, frequencies, oscillator tones, and vibration sweeps are generated directly inside your web browser using the native HTML5 Web Audio API.
          </p>
          <p className="text-sm leading-relaxed">
            • <strong>No Microphone Access:</strong> We never request, capture, record, or stream your microphone or any audio environment.<br />
            • <strong>No Audio Uploads:</strong> Audio tones are never transmitted to, processed by, or stored on our servers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">3. Third-Party Advertising & Google AdSense Compliance</h2>
          <p className="text-sm leading-relaxed">
            We partner with third-party advertising companies, including <strong>Google AdSense</strong>, to serve advertisements when you visit our website. These companies may use cookies and web beacons to collect information about your visits to this and other websites in order to provide personalized advertisements about goods and services of interest to you.
          </p>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
            <h3 className="font-bold text-white text-base">Google DoubleClick DART Cookie</h3>
            <p className="leading-relaxed">
              • Google is a third-party vendor on our site. It uses cookies, specifically DART cookies, to serve ads to our site visitors based on their visit to cleanmyspeaker.net and other websites on the internet.
            </p>
            <p className="leading-relaxed">
              • Users may opt out of the use of the DART cookie by visiting the Google Ad and Content Network Privacy Policy at:{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 underline font-semibold hover:text-sky-200"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>
            <p className="leading-relaxed">
              • For more information on how Google uses data from partner sites and apps, please visit:{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 underline font-semibold hover:text-sky-200"
              >
                https://policies.google.com/technologies/partner-sites
              </a>
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">4. Cookies & Web Beacons</h2>
          <p className="text-sm leading-relaxed">
            A cookie is a small string of data stored on your device. We use cookies strictly to improve user experience and ensure ad delivery efficiency. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of web services may function differently.
          </p>
          <p className="text-sm leading-relaxed">
            For detailed information regarding the cookies we and our partners utilize, please consult our dedicated{' '}
            <Link href="/cookie-policy" className="text-sky-300 underline font-semibold hover:text-sky-200">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">5. Log Files & Infrastructure Monitoring</h2>
          <p className="text-sm leading-relaxed">
            Clean My Speaker follows standard web hosting server log practices. When you visit our website, edge hosting providers (such as Cloudflare and Vercel) log information that your browser sends. These logs may include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks. These logs are not linked to any personally identifiable information and are strictly used to administer the site, prevent malicious abuse, and ensure uptime reliability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">6. GDPR Privacy Rights (European Union & UK)</h2>
          <p className="text-sm leading-relaxed">
            If you are a resident of the European Economic Area (EEA) or the United Kingdom, you have certain data protection rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-400">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right of rectification if information is inaccurate or incomplete.</li>
            <li>The right to object to our processing of your personal data.</li>
            <li>The right to data portability and restriction of processing.</li>
            <li>The right to withdraw consent at any time where processing is based on consent.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">7. CCPA / CPRA Privacy Rights (California Residents)</h2>
          <p className="text-sm leading-relaxed">
            Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California consumers have specific rights regarding their personal information:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-400">
            <li>The right to request disclosure of categories and specific pieces of personal data collected.</li>
            <li>The right to request the deletion of any personal data collected.</li>
            <li>The right to opt-out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information. Clean My Speaker does not sell personal data.</li>
            <li>The right not to be discriminated against for exercising your privacy rights.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">8. Children&apos;s Online Privacy Protection (COPPA)</h2>
          <p className="text-sm leading-relaxed">
            Protecting children&apos;s privacy online is paramount. Clean My Speaker does not knowingly collect any personally identifiable information from children under the age of 13. If you believe that your child provided personal information on our website, please contact us immediately so we can promptly delete such records.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">9. Changes to This Privacy Policy</h2>
          <p className="text-sm leading-relaxed">
            We may update our Privacy Policy periodically to reflect technological changes, legal requirements, or service improvements. We will notify users of changes by updating the &ldquo;Last Updated&rdquo; date at the top of this document. We advise you to review this page periodically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">10. Contact Us</h2>
          <p className="text-sm leading-relaxed">
            If you have questions or suggestions about our Privacy Policy, please contact our privacy compliance team at:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm">
            <p className="text-white font-semibold">Clean My Speaker Privacy Officer</p>
            <p className="text-sky-300 font-mono mt-1">privacy@cleanmyspeaker.net</p>
            <p className="text-xs text-slate-400 mt-1">Official Website: https://cleanmyspeaker.net</p>
          </div>
        </section>

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/privacy-policy" />

        <footer className="pt-6 border-t border-slate-800 flex justify-between items-center text-sm">
          <Link href="/" className="text-sky-300 underline font-semibold hover:text-sky-200">
            ← Return to Clean My Speaker Tool
          </Link>
          <Link href="/terms-of-service" className="text-sky-300 underline font-semibold hover:text-sky-200">
            Terms of Service →
          </Link>
        </footer>
      </article>
    </main>
  );
}
