import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Clean My Speaker Works – Speaker Cleaning Sound & Physics',
  description:
    'Discover the acoustic physics behind how Clean My Speaker generates low-frequency sound waves and air pressure to safely move water and moisture from phone speakers.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/how-it-works',
  },
};

export default function HowItWorksPage() {
  const breadcrumbs = [{ name: 'How It Works', href: '/how-it-works' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-12 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Acoustic Physics & Engineering
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How Clean My Speaker Works: The Science of Sound-Based Water Ejection
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Learn how browser-generated acoustic waves, diaphragm excursion, and mechanical resonance work together to dislodge trapped liquid from smartphone speaker grilles.
          </p>
        </header>

        {/* Quick CTA back to tool */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-white">Need to clean your speaker right now?</h2>
            <p className="text-xs text-slate-400">Launch the 165 Hz water eject tone with one tap.</p>
          </div>
          <Link
            href="/#tool"
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm shadow transition-all shrink-0"
          >
            🔊 Launch Clean My Speaker
          </Link>
        </div>

        {/* Visual Infographic */}
        <figure className="relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl bg-slate-950">
          <Image
            src="/images/how-clean-my-speaker-works-infographic.jpg"
            alt="Clean My Speaker - How It Works Infographic: Visual 5-Step Process to Clean Speaker Online"
            width={1024}
            height={576}
            className="w-full h-auto object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, 896px"
            priority={false}
          />
          <figcaption className="p-4 bg-slate-950/90 border-t border-slate-800 text-xs text-slate-400 text-center">
            Figure 1: Complete 5-step operational workflow of the Clean My Speaker browser sound utility.
          </figcaption>
        </figure>

        {/* Section 1: Anatomy of a Phone Speaker */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. The Anatomy of a Smartphone Micro-Transducer</h2>
          <p className="leading-relaxed">
            Modern mobile phones pack tiny dynamic speakers called micro-transducers. These speakers consist of:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="font-bold text-sky-400 text-sm">Voice Coil & Magnet</span>
              <p className="text-slate-400">
                An electromagnetic assembly that converts electrical audio signals into rapid physical linear motion.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="font-bold text-sky-400 text-sm">Diaphragm (Cone)</span>
              <p className="text-slate-400">
                A flexible polymer membrane that pumps air as the voice coil pushes and pulls it forward and backward.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="font-bold text-sky-400 text-sm">Acoustic Mesh Grille</span>
              <p className="text-slate-400">
                A micro-perforated hydrophobic mesh designed to let sound waves pass while repelling dust and water.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Why Water Stays Trapped: Surface Tension */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Why Water Gets Trapped: Surface Tension</h2>
          <p className="leading-relaxed">
            Water molecules have high cohesive forces, causing them to cling tightly together and form a dome or film across micro-perforations. When water splashes onto your phone, individual droplets seep into the exterior speaker openings and seal across the acoustic mesh pores.
          </p>
          <p className="leading-relaxed">
            Because this liquid film is airtight, it prevents sound waves from escaping into the environment, causing voices, music, and ringtones to sound severely muffled, distant, or crackly.
          </p>
        </section>

        {/* Section 3: The 165 Hz Resonance Frequency */}
        <section className="space-y-4 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white">3. Why 165 Hz Is the Ideal Water Ejection Frequency</h2>
          <p className="leading-relaxed">
            High-pitched sounds (such as 2,000 Hz or 5,000 Hz) vibrate very quickly, but with microscopic displacement. They barely move the air around them.
          </p>
          <p className="leading-relaxed">
            In contrast, low frequencies (between <strong>130 Hz and 250 Hz</strong>, centered near <strong>165 Hz</strong>) produce maximum cone excursion. This means the speaker cone travels its maximum possible distance forward and backward.
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm space-y-2">
            <h3 className="font-semibold text-sky-300">The Air Displacement Effect</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              When the speaker diaphragm thrusts forward at 165 cycles per second, it pressurizes the small chamber behind the speaker grille. This sudden air pressure overpowers the liquid&apos;s surface tension, bursting the water film and propelling tiny water droplets out through the speaker holes.
            </p>
          </div>
        </section>

        {/* Section 4: Web Audio API vs Audio Files */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Pure Browser-Synthesized Audio vs. Static MP3s</h2>
          <p className="leading-relaxed">
            Many outdated websites use compressed MP3 or M4A audio files. These files often introduce compression artifacts, clipping, and lossy roll-offs that weaken low-frequency amplitude.
          </p>
          <p className="leading-relaxed">
            Clean My Speaker utilizes the modern <strong>HTML5 Web Audio API</strong>. Oscillators and gain nodes generate pristine, uncompressed mathematical waveforms directly inside your device&apos;s audio subsystem. This guarantees maximum acoustic energy is delivered to your smartphone transducer without compression degradation.
          </p>
        </section>

        {/* Section 5: Best Device Positioning */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. How to Position Your Device for Maximum Water Ejection</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-sky-400 font-bold text-lg">1.</span>
              <p className="text-sm">
                <strong>Face Downward:</strong> Position the speaker opening facing directly downward toward a table. Gravity works in tandem with the acoustic air pulses to guide droplets out.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-sky-400 font-bold text-lg">2.</span>
              <p className="text-sm">
                <strong>Use an Absorbent Cloth:</strong> Rest the bottom corner of your phone against a dry microfiber towel. As moisture droplets emerge, the fabric immediately wicks them away.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-sky-400 font-bold text-lg">3.</span>
              <p className="text-sm">
                <strong>Gentle Tap:</strong> During audio playback, gently tap the edge of your phone against the palm of your hand to help break stubborn droplets loose.
              </p>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-3 text-amber-200/90 text-sm">
          <h2 className="text-lg font-bold text-amber-300">Acoustic Limits & Safety Notice</h2>
          <p className="leading-relaxed text-xs">
            Sound vibrations can only move liquid that resides in or near the acoustic speaker chamber. If water has penetrated past internal rubber water-resistant gaskets and contacted the battery, logic board, or display connectors, sound waves cannot remedy the moisture. Read our{' '}
            <Link href="/remove-water-from-phone-speaker" className="text-sky-400 font-semibold underline">
              Emergency Water Removal Guide
            </Link>{' '}
            for full immersion protocols, or test your acoustic clarity with our{' '}
            <Link href="/speaker-test" className="text-sky-400 font-semibold underline">
              Speaker Test tool
            </Link>.
          </p>
        </section>

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/how-it-works" />

        <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            ← Back to Clean My Speaker Tool
          </Link>
          <Link
            href="/remove-water-from-phone-speaker"
            className="text-sky-300 underline font-semibold text-sm hover:text-sky-200"
          >
            Emergency Water Removal Guide →
          </Link>
        </footer>
      </article>
    </main>
  );
}
