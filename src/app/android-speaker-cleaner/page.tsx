import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SafetyNotice } from '@/components/SafetyNotice';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Android Speaker Cleaner – Fix Clean My Speaker on Samsung & Android',
  description:
    'Clean and fix your Android phone speaker online. Eject water and fix clean my speaker sound on Samsung Galaxy, Pixel, Xiaomi, and OnePlus with browser sound waves.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/android-speaker-cleaner',
  },
  openGraph: {
    title: 'Android Speaker Cleaner – Fix Clean My Speaker on Samsung & Android',
    description:
      'Eject water droplets, clear pocket dust, and fix muffled speaker sound on Samsung Galaxy, Google Pixel, and all Android phones.',
    url: 'https://cleanmyspeaker.net/android-speaker-cleaner',
    images: [
      {
        url: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
        width: 1024,
        height: 576,
        alt: 'Android Speaker Cleaner - Clean & Fix My Speaker Sound',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Android Speaker Cleaner – Fix Clean My Speaker Online',
    description:
      'Fix muffled audio and eject water from Samsung Galaxy, Pixel, and Android speakers with free browser sound waves.',
    images: ['https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg'],
  },
};

export default function AndroidSpeakerCleanerPage() {
  const breadcrumbs = [{ name: 'Android Speaker Cleaner', href: '/android-speaker-cleaner' }];

  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Clean Android Phone Speaker & Eject Water Online',
    description:
      'Step-by-step guide to eject water and clean Android smartphone speakers using 165 Hz acoustic frequencies in Chrome or Samsung Internet.',
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
        name: 'Open CleanMySpeaker.net in Chrome',
        text: 'Navigate to CleanMySpeaker.net on your Android device and increase media volume to 100%.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Point Speaker Grille Downward',
        text: 'Angle your Android device vertically toward a clean, absorbent cloth or surface.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Run Cleaning Audio Sweep',
        text: 'Tap "CLEAN MY SPEAKER" to activate the 165 Hz multi-frequency cleaner sweep for 30–60 seconds.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Wipe Clean & Test Sound',
        text: 'Dab away any liquid expelled from the speaker openings and test your sound clarity.',
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
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Android Ecosystem
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Android Speaker Cleaner: How to Fix Clean My Speaker on Android
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Quickly remove moisture and fix muffled audio on Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, and Motorola smartphones using calibrated sound frequencies.
          </p>
        </header>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
          <strong>Notice:</strong> Clean My Speaker is an independent web utility and is not affiliated with Google LLC, Samsung Electronics, or any Android manufacturer. Android is a trademark of Google LLC.
        </div>

        {/* CTA Launch Tool */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h2 className="text-xl font-bold text-white">Remove Water from Android Speaker</h2>
            <p className="text-xs text-slate-400 mt-1">
              Runs smoothly in Chrome, Samsung Internet, Firefox, and Opera.
            </p>
          </div>
          <Link
            href="/#tool"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all shrink-0 hover:scale-102"
          >
            🔊 Clean My Speaker Now
          </Link>
        </div>

        {/* Device Variety on Android */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Why Android Devices Require Flexible Frequencies</h2>
          <p className="leading-relaxed">
            Unlike iPhones, Android devices feature a wide variety of speaker chamber geometries, grille pore sizes, and amplifier designs. A Samsung Galaxy S24 Ultra utilizes a single long acoustic slot, whereas Google Pixel 8 uses precision micro-drilled round holes, and Xiaomi phones frequently feature dual top/bottom speaker chambers.
          </p>
          <p className="leading-relaxed">
            Clean My Speaker includes both static resonant tones (165 Hz) and dynamic frequency sweep modes (120 Hz to 350 Hz in Deep Clean mode) to ensure maximum air displacement across all Android hardware architectures.
          </p>
        </section>

        {/* Step-by-Step for Android */}
        <section className="space-y-4 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white">How to Clean Your Android Speaker Step-by-Step</h2>
          <ol className="space-y-3 list-decimal list-inside text-sm text-slate-300">
            <li>
              <strong>Wipe Exterior:</strong> Use a dry microfiber cloth to dry the USB-C port, speaker grille, and SIM tray area.
            </li>
            <li>
              <strong>Turn Up Media Volume:</strong> Press the volume rocker and slide the Media volume slider to maximum (100%).
            </li>
            <li>
              <strong>Position Face-Down:</strong> Hold your phone vertically with the bottom speaker pointing toward a dry cloth.
            </li>
            <li>
              <strong>Run Deep Clean or Water Eject:</strong> Tap &ldquo;CLEAN MY SPEAKER&rdquo; above. If using a Samsung or Xiaomi phone with dual stereo speakers, flip the phone halfway through to clean the top earpiece speaker as well.
            </li>
            <li>
              <strong>Verify with Speaker Test:</strong> Check clarity using our online frequency test tool.
            </li>
          </ol>
        </section>

        {/* Moisture Alert on Samsung */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Dealing with the Samsung &ldquo;Moisture Detected&rdquo; Warning</h2>
          <p className="leading-relaxed text-sm">
            Samsung Galaxy devices display a water drop icon and audible chime if moisture is sensed in the USB-C port. Never attempt to bypass this warning with forced charging. Eject water from the neighboring speaker grilles using Clean My Speaker, then position the device upright in front of a gentle fan for 2 to 4 hours until the moisture warning automatically clears.
          </p>
        </section>

        <SafetyNotice />

        {/* Social Sharing Callout */}
        <ShareButtons
          title="Android Speaker Cleaner: Eject Water & Fix Sound on Samsung & Android"
          description="Eject water droplets, remove dust, and fix muffled audio on Samsung Galaxy, Google Pixel, Xiaomi, and all Android phones with free browser sound waves."
          variant="card"
        />

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/android-speaker-cleaner" />

        <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            ← Home Speaker Cleaner
          </Link>
          <Link href="/speaker-cleaning-guide" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            Physical Dust & Dirt Cleaning Guide →
          </Link>
        </footer>
      </article>
    </main>
  );
}
