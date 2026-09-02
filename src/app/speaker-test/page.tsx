import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';

const SpeakerTester = dynamic(() => import('@/components/SpeakerTester'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl animate-pulse">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="h-5 w-40 bg-slate-800 rounded-full" />
        <div className="h-6 w-24 bg-slate-800 rounded-full" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="h-16 bg-slate-800 rounded-2xl" />
        <div className="h-16 bg-slate-800 rounded-2xl" />
        <div className="h-16 bg-slate-800 rounded-2xl" />
        <div className="h-16 bg-slate-800 rounded-2xl" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="h-12 bg-slate-800 rounded-xl" />
        <div className="h-12 bg-slate-800 rounded-xl" />
        <div className="h-12 bg-slate-800 rounded-xl" />
      </div>
      <div className="h-14 bg-slate-800 rounded-2xl" />
    </div>
  ),
});
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaker Test Online – Test & Fix Clean My Speaker Sound Quality',
  description:
    'Free online speaker test. Test stereo channels, check audio frequencies from 100 Hz to 10 kHz, diagnose muffled sound, and fix clean my speaker audio clarity.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/speaker-test',
  },
  openGraph: {
    title: 'Speaker Test Online – Test & Fix Clean My Speaker Sound Quality',
    description:
      'Diagnose speaker health, test stereo balance, and check frequency response from Sub Bass to High Treble to clean and fix your phone speaker.',
    url: 'https://cleanmyspeaker.net/speaker-test',
    images: [
      {
        url: 'https://cleanmyspeaker.net/images/fix-my-speaker-sound-frequencies-guide.jpg',
        width: 1024,
        height: 682,
        alt: 'How Sound Frequencies Work - Fix My Speaker Audio Testing Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaker Test Online – Test & Fix Clean My Speaker Sound Quality',
    description:
      'Diagnose speaker health, test stereo balance, and check frequencies with our free online tool.',
    images: ['https://cleanmyspeaker.net/images/fix-my-speaker-sound-frequencies-guide.jpg'],
  },
};

export default function SpeakerTestPage() {
  const breadcrumbs = [{ name: 'Speaker Test', href: '/speaker-test' }];

  const jsonLdTestApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Online Speaker Tester & Audio Diagnostic Tool',
    url: 'https://cleanmyspeaker.net/speaker-test',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All (iOS, Android, Windows, macOS)',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    description:
      'Online stereo channel tester and multi-frequency acoustic generator to diagnose mobile phone speaker health.',
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTestApp) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-12 mt-6 text-slate-300">
        <header className="space-y-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Audio Diagnostics & Quality Check
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Speaker Test Online: Test Your Phone Speaker & Stereo Balance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Diagnose speaker health, identify crackles and distortion, test left and right channel balance, and verify speaker clarity after cleaning.
          </p>
        </header>

        {/* Interactive Audio Tester Component */}
        <SpeakerTester />

        {/* Sound Frequency Spectrum Guide */}
        <figure className="relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl bg-slate-950 my-8">
          <Image
            src="/images/fix-my-speaker-sound-frequencies-guide.jpg"
            alt="How Sound Frequencies Work - Fix My Speaker Audio Testing Guide"
            width={1024}
            height={682}
            className="w-full h-auto object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, 896px"
            priority={false}
          />
          <figcaption className="p-4 bg-slate-950/95 border-t border-slate-800 text-xs text-slate-300 text-center flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>
              🔬 <strong>Acoustic Diagnostic Spectrum:</strong> Sub Bass • Bass (Water Eject Zone) • Mid Range • High Frequencies.
            </span>
            <a
              href="/images/fix-my-speaker-sound-frequencies-guide.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 underline font-semibold hover:text-sky-200 shrink-0"
            >
              Open Full Frequency Guide ↗
            </a>
          </figcaption>
        </figure>

        {/* Informational Guidance */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">How to Interpret Your Speaker Test Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">Rattling or Buzzing on Low Frequencies (100 Hz – 250 Hz)</h3>
              <p className="text-slate-400 leading-relaxed">
                If the speaker makes a buzzing or fluttering sound at 100–250 Hz, trapped water droplets are almost certainly vibrating against the cone or mesh. Run the Clean My Speaker water eject tone again.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">Hissing or Dullness on Treble (5 kHz – 10 kHz)</h3>
              <p className="text-slate-400 leading-relaxed">
                If high frequencies sound faint, dead, or muffled, the acoustic pores are likely blocked by fine lint, pocket dust, or dried debris. Use a dry, soft-bristled brush to gently clear the exterior holes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">Uneven Stereo Channel Volume</h3>
              <p className="text-slate-400 leading-relaxed">
                If the Left or Right channel is noticeably quieter, check your operating system accessibility settings (Audio Balance slider) or inspect the quieter speaker opening for physical blockage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sky-400 text-base">Complete Silence</h3>
              <p className="text-slate-400 leading-relaxed">
                Ensure device volume is turned up and silent switches are off. If no sound plays across all frequencies, your browser may be blocking audio or the speaker coil may have failed.
              </p>
            </div>
          </div>
        </section>

        {/* Clean Speaker CTA */}
        <section className="p-8 rounded-3xl bg-slate-900 border border-sky-500/30 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Did You Detect Muffled Sound or Trapped Water?</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Use our free browser-based cleaner to vibrate trapped liquid droplets out of your speaker openings now.
          </p>
          <Link
            href="/#tool"
            className="inline-block px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg transition-transform hover:scale-103"
          >
            🔊 Clean My Speaker Now
          </Link>
        </section>

        {/* Social Sharing Callout */}
        <ShareButtons
          title="Online Speaker Tester & Audio Diagnostic Tool"
          description="Free online tool to test stereo channels, diagnose muffled sound, check frequency response, and detect speaker distortion."
          variant="card"
        />

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/speaker-test" />

        <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            ← Main Cleaner Tool
          </Link>
          <Link href="/speaker-cleaning-guide" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            Dust & Physical Cleaning Guide →
          </Link>
        </footer>
      </article>
    </main>
  );
}
