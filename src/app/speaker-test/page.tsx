import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const SpeakerTester = dynamic(() => import('@/components/SpeakerTester'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-2xl mx-auto h-96 rounded-3xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400">
      <span className="animate-pulse">Loading Speaker Diagnostic Lab...</span>
    </div>
  ),
});
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaker Test Online – Test Your Phone & Stereo Speakers',
  description:
    'Free online speaker test. Test left and right stereo audio channels, diagnose muffled sound, check frequency response from 100 Hz to 10 kHz, and detect speaker distortion.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/speaker-test',
  },
};

export default function SpeakerTestPage() {
  const breadcrumbs = [{ name: 'Speaker Test', href: '/speaker-test' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

        <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-sky-400 hover:underline text-sm font-semibold">
            ← Main Cleaner Tool
          </Link>
          <Link href="/speaker-cleaning-guide" className="text-sky-400 hover:underline text-sm font-semibold">
            Dust & Physical Cleaning Guide →
          </Link>
        </footer>
      </article>
    </main>
  );
}
