import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SafetyNotice } from '@/components/SafetyNotice';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phone Speaker Cleaning Guide – Clean Dust, Lint & Water Safely',
  description:
    'Comprehensive phone speaker cleaning guide. Learn how to safely remove pocket lint, dirt, wax, and moisture without damaging fragile speaker mesh.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/speaker-cleaning-guide',
  },
};

export default function SpeakerCleaningGuidePage() {
  const breadcrumbs = [{ name: 'Speaker Cleaning Guide', href: '/speaker-cleaning-guide' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-12 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Maintenance & Care Manual
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Phone Speaker Cleaning Guide: How to Safely Clean Dust, Lint & Moisture
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Over months of everyday use, smartphone speaker openings accumulate lint from pockets, skin oils, makeup, and microscopic dust particles. Here is how to safely restore clear sound without damaging your device.
          </p>
        </header>

        {/* Action Link to Tool */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">Dealing with liquid or water muffling?</h2>
            <p className="text-xs text-slate-400 mt-1">
              For wet speakers, start by ejecting moisture with sound vibrations before attempting physical brushing.
            </p>
          </div>
          <Link
            href="/#tool"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all shrink-0"
          >
            🔊 Run Sound Cleaner
          </Link>
        </div>

        {/* Section 1: Safe Physical Tools */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Safe Tools to Use at Home</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-2xl">🪥</span>
              <h3 className="font-bold text-white text-base">Soft-Bristled Toothbrush</h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                An unused, dry ultra-soft toothbrush is ideal. The flexible bristles gently reach into speaker grille crevices to lift compacted lint without poking holes in the mesh.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-2xl">🟦</span>
              <h3 className="font-bold text-white text-base">Cleaning Putty / Blu-Tack</h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                Lightly pressing electronic cleaning gel or reusable adhesive putty onto the speaker holes lifts surface dirt and dust particles cleanly without leaving residue.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-2xl">💨</span>
              <h3 className="font-bold text-white text-base">Manual Bulb Air Blower</h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                A rubber bulb blower (the type used for camera lenses) provides gentle, moisture-free airflow that blows away loose dust without excessive force.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step by Step Method */}
        <section className="space-y-4 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white">2. Step-by-Step Speaker Cleaning Procedure</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-sky-400">Step 1: Power Down the Device</h3>
              <p className="text-slate-400 text-xs mt-1">
                Turn off your phone completely before performing physical cleaning. This prevents accidental screen touches and protects against electrical issues.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sky-400">Step 2: Gentle Angled Dry Brushing</h3>
              <p className="text-slate-400 text-xs mt-1">
                Hold your phone so the speaker openings point slightly downward. Angle your soft brush at 45 degrees and use quick, light sweeping strokes across the holes. Never push bristles hard into the holes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sky-400">Step 3: Press Adhesive Putty (Optional)</h3>
              <p className="text-slate-400 text-xs mt-1">
                Take a small pea-sized ball of cleaning putty and gently dab it across the speaker grille. Pull it away slowly to collect fine dirt.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sky-400">Step 4: Run Acoustic Sound Wave Vibrations</h3>
              <p className="text-slate-400 text-xs mt-1">
                Turn your phone back on, open Clean My Speaker, and run the Deep Clean cycle. The strong vibration helps loosen any microscopic debris loosened by your brush.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Dangerous Mistakes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Dangerous Practices that Void Warranties</h2>
          <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-rose-200/90 text-sm space-y-2">
            <p className="font-bold text-rose-300">Avoid these destructive techniques:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-rose-200/80">
              <li><strong>Do not soak with alcohol or cleaners:</strong> Even 99% isopropyl alcohol can dissolve acoustic glue membranes.</li>
              <li><strong>Do not use sewing needles:</strong> Metal needles pierce the waterproof mesh membrane and short internal speakers.</li>
              <li><strong>Do not use high-pressure air compressors:</strong> High PSI tears fragile micro-speaker diaphragms.</li>
            </ul>
          </div>
        </section>

        <SafetyNotice />

        <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-sky-400 hover:underline text-sm font-semibold">
            ← Clean My Speaker Online
          </Link>
          <Link href="/speaker-test" className="text-sky-400 hover:underline text-sm font-semibold">
            Test Speaker Frequencies →
          </Link>
        </footer>
      </article>
    </main>
  );
}
