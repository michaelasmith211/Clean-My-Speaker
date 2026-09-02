import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SafetyNotice } from '@/components/SafetyNotice';
import { RelatedGuides } from '@/components/RelatedGuides';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iPhone Speaker Cleaner – Fix Clean My Speaker & Eject Water on iPhone',
  description:
    'Clean and fix your iPhone speaker online. Play 165 Hz water eject sound waves directly in Safari to fix clean my speaker, expel trapped liquid, and fix muffled iPhone audio.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/iphone-speaker-cleaner',
  },
  openGraph: {
    title: 'iPhone Speaker Cleaner – Fix Clean My Speaker & Eject Water on iPhone',
    description:
      'Generate calibrated water eject sound waves directly in Safari to clean iPhone speakers and fix muffled sound without downloading apps.',
    url: 'https://cleanmyspeaker.net/iphone-speaker-cleaner',
    images: [
      {
        url: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
        width: 1024,
        height: 576,
        alt: 'iPhone Speaker Cleaner - How to Clean My Speaker and Fix Sound',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone Speaker Cleaner – Fix Clean My Speaker Online',
    description:
      'Eject water and fix muffled sound on iPhone with calibrated browser sound waves. Free & instant in Safari.',
    images: ['https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg'],
  },
};

export default function IPhoneSpeakerCleanerPage() {
  const breadcrumbs = [{ name: 'iPhone Speaker Cleaner', href: '/iphone-speaker-cleaner' }];

  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Clean iPhone Speaker & Eject Water Online',
    description:
      'Step-by-step guide to eject water and clean iPhone speakers using browser-generated 165 Hz acoustic sound waves in Safari.',
    image: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
    totalTime: 'PT2M',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Clean My Speaker Web Audio Tool (cleanmyspeaker.net)',
      },
      {
        '@type': 'HowToTool',
        name: 'Dry microfiber cloth or towel',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Open CleanMySpeaker.net in Safari',
        text: 'Navigate to CleanMySpeaker.net on your iPhone. Turn volume up to 100%.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Position iPhone Speaker Facing Down',
        text: 'Hold your iPhone vertically with the bottom speaker grille angled downward toward a dry cloth.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Play Cleaning Sound Wave',
        text: 'Tap "CLEAN MY SPEAKER" to play the 165 Hz water eject tone for 30 to 60 seconds.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Dab Away Ejected Moisture',
        text: 'Gently wipe off expelled droplets from the speaker mesh and enjoy restored clear sound.',
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-12 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            iOS & Apple Devices
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            iPhone Speaker Cleaner: How to Fix Clean My Speaker on iPhone
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Fix muffled iPhone sound, remove trapped water from speaker grilles, and restore crisp audio after water exposure using browser-based acoustic vibration.
          </p>
        </header>

        {/* Independent Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
          <strong>Notice:</strong> Clean My Speaker is an independent web utility and is not affiliated with, endorsed by, or sponsored by Apple Inc. iPhone and Safari are trademarks of Apple Inc.
        </div>

        {/* CTA Launch Tool */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-sky-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h2 className="text-xl font-bold text-white">Eject Water from Your iPhone Speaker</h2>
            <p className="text-xs text-slate-400 mt-1">
              Works directly in Mobile Safari. No iOS Shortcuts or App Store apps needed.
            </p>
          </div>
          <Link
            href="/#tool"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all shrink-0 hover:scale-102"
          >
            🔊 Launch Clean My Speaker
          </Link>
        </div>

        {/* iPhone Speaker Configuration */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Understanding iPhone Speaker Layout</h2>
          <p className="leading-relaxed">
            Every modern iPhone (from iPhone 7, X, 11, 12, 13, 14, to iPhone 15 and 16 Pro) utilizes a dual-speaker stereo system:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">Top Earpiece Receiver</h3>
              <p className="text-slate-400 leading-relaxed">
                Located at the top bezel or Dynamic Island. It acts as both the ear speaker for phone calls and the upper channel for stereo video playback. Because of its narrow slit design, water easily seals across its mesh.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">Bottom Loudspeaker Grille</h3>
              <p className="text-slate-400 leading-relaxed">
                Located on the bottom right edge beside the Lightning / USB-C port. (The holes on the left side are microphone ports). This large speaker provides bass and volume, and is the most common place for standing water to collect.
              </p>
            </div>
          </div>
        </section>

        {/* How to use the tool on iPhone */}
        <section className="space-y-4 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white">How to Use Clean My Speaker on an iPhone</h2>
          <ol className="space-y-3 list-decimal list-inside text-sm text-slate-300">
            <li>
              <strong>Unplug Lightning / USB-C Cables:</strong> If iOS displays a &ldquo;Liquid Detected in Connector&rdquo; warning, do not plug in any charger.
            </li>
            <li>
              <strong>Max Out Media Volume:</strong> Use the volume buttons on the left side of your iPhone to raise volume to 100%. (Make sure your silent switch / Action Button isn&apos;t muting media volume).
            </li>
            <li>
              <strong>Open Safari:</strong> Visit Clean My Speaker in Safari. iOS requires a physical user touch to start the Web Audio engine.
            </li>
            <li>
              <strong>Angle Speaker Downward:</strong> Position the bottom edge of your iPhone toward a dry paper towel.
            </li>
            <li>
              <strong>Tap &ldquo;CLEAN MY SPEAKER&rdquo;:</strong> Allow the 165 Hz water eject tone to play for 30 to 45 seconds. You will see moisture beads vibrating out onto the cloth.
            </li>
          </ol>
        </section>

        {/* Liquid Detected Alert Advice */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">What Does &ldquo;Liquid Detected in Connector&rdquo; Mean?</h2>
          <p className="leading-relaxed text-sm">
            On iPhone XS, 11, 12, 13, 14, 15, and 16, Apple includes automated liquid detection pins inside the charging port. If you plug in a Lightning or USB-C cable while moisture is present, iOS temporarily disables the charging pins to prevent electrical short-circuit corrosion.
          </p>
          <p className="leading-relaxed text-sm">
            Ejecting moisture with Clean My Speaker helps vibrate droplets away from the surrounding port cavities. After running the tool, leave your iPhone upright in a well-ventilated dry location for at least 5 hours before attempting to recharge.
          </p>
        </section>

        <SafetyNotice />

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/iphone-speaker-cleaner" />

        <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/remove-water-from-phone-speaker" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            ← Complete Water Removal Guide
          </Link>
          <Link href="/speaker-test" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            Check Left/Right Stereo Balance →
          </Link>
        </footer>
      </article>
    </main>
  );
}
