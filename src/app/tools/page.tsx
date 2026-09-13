import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
import { getHreflangAlternates } from '@/i18n/locale-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Audio Tools & Speaker Cleaner Utilities – Clean My Speaker',
  description:
    'Free online audio tools suite: 165 Hz Water Ejection Sound Cleaner, Left/Right Stereo Channel Tester, Diaphragm Frequency Sweeper, and Phone Cleaners.',
  keywords: [
    'audio tools',
    'speaker cleaner online',
    'speaker tools',
    'water eject tool',
    'speaker test online',
    'fix my speaker tools',
    'phone speaker utilities',
    'clean my speaker suite',
  ],
  alternates: {
    canonical: 'https://cleanmyspeaker.net/tools/',
    languages: getHreflangAlternates('/tools'),
  },
  openGraph: {
    title: 'All Audio Tools & Speaker Cleaner Utilities – Clean My Speaker',
    description:
      'Free online browser audio suite: 165 Hz Water Ejection Sound Cleaner, Left/Right Stereo Channel Tester, Diaphragm Frequency Sweeper, and Phone Cleaners.',
    url: 'https://cleanmyspeaker.net/tools/',
    images: [
      {
        url: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
        width: 1024,
        height: 576,
        alt: 'Clean My Speaker - All Audio Tools Suite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Audio Tools & Speaker Cleaner Utilities – Clean My Speaker',
    description:
      'Access our complete suite of free browser-based audio tools: 165 Hz Water Ejector, Stereo Tester, and Phone Cleaners.',
    images: ['https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg'],
  },
};

interface ToolItem {
  id: string;
  name: string;
  description: string;
  category: 'Cleaner' | 'Diagnostic' | 'Optimization' | 'Guide';
  icon: string;
  badge: string;
  url: string;
  actionText: string;
  features: string[];
}

const toolsList: ToolItem[] = [
  {
    id: 'water-ejector',
    name: '165 Hz Acoustic Water Ejector',
    description:
      'Synthesizes calibrated 165 Hz sine and sawtooth waves to maximize speaker diaphragm excursion and eject trapped water droplets instantly.',
    category: 'Cleaner',
    icon: '💧',
    badge: '165 Hz Core',
    url: '/#tool',
    actionText: 'Launch Water Ejector',
    features: ['165 Hz Resonant Tone', 'Air Displacement Excursion', '100% Client-Side Web Audio'],
  },
  {
    id: 'speaker-tester',
    name: 'Stereo Left/Right Speaker Sound Tester',
    description:
      'Test your smartphone, laptop, or earphone balance with isolated left, right, and dual stereo channel audio tones.',
    category: 'Diagnostic',
    icon: '🎛️',
    badge: 'Stereo Test',
    url: '/speaker-test',
    actionText: 'Open Speaker Tester',
    features: ['Left & Right Channel Isolation', 'Frequency Sweep (100Hz - 10kHz)', 'Audio Crackle Check'],
  },
  {
    id: 'iphone-cleaner',
    name: 'iPhone Speaker Cleaner & Water Remover',
    description:
      'Tailored acoustic pulse frequencies specifically calibrated for Apple iPhone hydrophobic acoustic mesh and earpieces.',
    category: 'Cleaner',
    icon: '🍎',
    badge: 'iOS Optimized',
    url: '/iphone-speaker-cleaner',
    actionText: 'Clean iPhone Speaker',
    features: ['Optimized for iPhone 11 - 16', 'Safari Compatible', 'No App Store Download Required'],
  },
  {
    id: 'airpods-ejector',
    name: 'AirPods Water Eject Sound (165Hz)',
    description:
      'Calibrated 165 Hz water eject tone with left/right earbud channel isolation to safely expel trapped liquid from AirPods and AirPods Pro without rice or heat.',
    category: 'Cleaner',
    icon: '🎧',
    badge: 'AirPods 165Hz',
    url: '/airpods-water-eject',
    actionText: 'Eject Water from AirPods',
    features: ['Left/Right Earbud Isolation', 'AirPods Pro & Max Support', 'Autoplay 165 Hz Tone'],
  },
  {
    id: 'android-cleaner',
    name: 'Android Speaker Cleaner & Moisture Expeller',
    description:
      'Engineered sound waves designed for Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, and Motorola loudspeaker chambers.',
    category: 'Cleaner',
    icon: '🤖',
    badge: 'Android Suite',
    url: '/android-speaker-cleaner',
    actionText: 'Clean Android Speaker',
    features: ['Broad Frequency Modulation', 'Dual Speaker Support', 'Chrome & Samsung Internet Ready'],
  },
  {
    id: 'quick-clean',
    name: '30-Second Quick Clean Pulse Mode',
    description:
      'Fast 30-second burst cycle ideal for routine phone speaker maintenance and light water splashes after showers or rain.',
    category: 'Optimization',
    icon: '⚡',
    badge: '30s Quick',
    url: '/#tool',
    actionText: 'Run Quick Clean',
    features: ['Rapid Frequency Bursts', 'Ideal for Light Moisture', 'Instant Browser Execution'],
  },
  {
    id: 'deep-clean',
    name: '60-Second Deep Clean Diaphragm Sweeper',
    description:
      'Extended 60-second sweeping tone spectrum to dislodge stubborn mineral residue, fine dust, and deep moisture beads.',
    category: 'Cleaner',
    icon: '🌊',
    badge: '60s Deep Sweep',
    url: '/#tool',
    actionText: 'Run Deep Clean',
    features: ['50 Hz - 500 Hz Sweep', 'Persistent Pressure Oscillations', 'Heavy Liquid Evacuation'],
  },
  {
    id: 'cleaning-guide',
    name: 'Complete Speaker Cleaning & Dust Guide',
    description:
      'Professional instructions on using dry microfiber brushes, safe airflow techniques, and avoiding harmful pin damage.',
    category: 'Guide',
    icon: '🧹',
    badge: 'Maintenance Guide',
    url: '/speaker-cleaning-guide',
    actionText: 'Read Cleaning Guide',
    features: ['Safe Brush Techniques', 'Physical Mesh Protection', 'Hardware Safety Rules'],
  },
  {
    id: 'how-it-works',
    name: 'Acoustic Physics & How It Works',
    description:
      'In-depth engineering breakdown of mechanical resonance, air displacement vectors, and speaker cone mechanics.',
    category: 'Guide',
    icon: '🔬',
    badge: 'Audio Physics',
    url: '/how-it-works',
    actionText: 'Explore Sound Physics',
    features: ['Diaphragm Excursion Physics', 'Surface Tension Disruption', 'Frequency Response Charts'],
  },
  {
    id: 'faq-hub',
    name: 'Speaker Health FAQ & Diagnostics',
    description:
      'Detailed troubleshooting answers for muffled speakers, earphone cleaning, rice myths, and repair diagnostics.',
    category: 'Diagnostic',
    icon: '❓',
    badge: 'FAQ Knowledgebase',
    url: '/faq',
    actionText: 'Browse FAQ & Solutions',
    features: ['Water Ingress Diagnostics', 'Muffled Audio Fixes', 'Warranty & Safety Guidelines'],
  },
];

export default function ToolsHubPage() {
  const breadcrumbs = [{ name: 'Tools Hub', href: '/tools' }];

  const jsonLdTools = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Clean My Speaker Audio Tools Suite',
    description:
      'Complete suite of free in-browser sound utilities: 165 Hz Water Ejector, Stereo Tester, and Phone Cleaners.',
    url: 'https://cleanmyspeaker.net/tools/',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: toolsList.map((t, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: t.name,
        description: t.description,
        url: `https://cleanmyspeaker.net${t.url}`,
      })),
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full text-start">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTools) }}
        />
        <Breadcrumbs items={breadcrumbs} locale="en" />

        <article className="space-y-12 mt-6">
          {/* Hero Header */}
          <header className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <span>🎛️</span> Audio Tools Suite
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Free Online Audio Tools &amp; Speaker Cleaner Suite
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our complete suite of fast, lightweight, and private browser-based sound utilities. 
              Eject trapped water with 165 Hz resonant waves, test stereo audio channels, and restore crisp volume across all mobile devices.
            </p>
          </header>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-sky-400 font-bold text-lg block">100%</span>
              <span className="font-semibold text-white block">In-Browser</span>
              <span className="text-slate-400 text-[11px] block">No app downloads required</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-sky-400 font-bold text-lg block">0 Cookies</span>
              <span className="font-semibold text-white block">Privacy Guaranteed</span>
              <span className="text-slate-400 text-[11px] block">No mic or personal tracking</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-sky-400 font-bold text-lg block">165 Hz</span>
              <span className="font-semibold text-white block">Calibrated Sound</span>
              <span className="text-slate-400 text-[11px] block">Optimal liquid displacement</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-sky-400 font-bold text-lg block">40 Languages</span>
              <span className="font-semibold text-white block">Global Access</span>
              <span className="text-slate-400 text-[11px] block">Native translations</span>
            </div>
          </div>

          {/* Tools Grid */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  All Audio Tools &amp; Utilities
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Select a tool below to run instant sound cleaning, frequency sweeps, or channel testing.
                </p>
              </div>
              <Link
                href="/#tool"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all self-start sm:self-auto"
              >
                <span>⚡</span> Run Primary 165Hz Cleaner
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolsList.map((tool) => (
                <div
                  key={tool.id}
                  className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition-all hover:-translate-y-1 flex flex-col justify-between shadow-xl group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-3xl" aria-hidden="true">{tool.icon}</span>
                      <span className="px-2.5 py-1 rounded-full bg-sky-950 border border-sky-500/30 text-sky-400 text-[11px] font-bold tracking-wide uppercase">
                        {tool.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>

                    <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-sky-400">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <Link
                      href={tool.url}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-sky-500 text-slate-200 hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-700 hover:border-sky-400 shadow group-hover:shadow-sky-500/20"
                    >
                      <span>{tool.actionText}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contextual Deep-Links Section */}
          <section className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border border-sky-500/30 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              About Clean My Speaker &amp; Engineering Standards
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Clean My Speaker is dedicated to delivering open, lightweight acoustic utilities for smartphone users worldwide. 
              Our tools run 100% locally in your browser using the native Web Audio API, meaning zero sound data is ever uploaded or recorded. 
              To learn more about our privacy guarantees and engineering methodology:
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold">
              <Link
                href="/about"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-sky-400 transition-colors flex items-center gap-1.5"
              >
                <span>ℹ️</span> About Clean My Speaker
              </Link>
              <Link
                href="/privacy-policy"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-sky-400 transition-colors flex items-center gap-1.5"
              >
                <span>🔒</span> Full Privacy Policy
              </Link>
              <Link
                href="/how-it-works"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-sky-400 transition-colors flex items-center gap-1.5"
              >
                <span>🔬</span> How It Works Guide
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-sky-400 transition-colors flex items-center gap-1.5"
              >
                <span>✉️</span> Contact Support Team
              </Link>
            </div>
          </section>

          {/* Social Share & Related Guides */}
          <ShareButtons
            title="Clean My Speaker - Free Audio Tools & Utilities Suite"
            description="Explore free browser-based audio tools to clean phone speakers, eject water, and test audio."
            url="https://cleanmyspeaker.net/tools"
            variant="card"
          />

          <RelatedGuides currentPath="/tools" locale="en" />
        </article>
      </main>
      <Footer locale="en" />
    </div>
  );
}
