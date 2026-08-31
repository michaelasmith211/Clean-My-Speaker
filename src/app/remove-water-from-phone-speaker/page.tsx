import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SafetyNotice } from '@/components/SafetyNotice';
import { RelatedGuides } from '@/components/RelatedGuides';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Remove Water From a Phone Speaker – Emergency Guide',
  description:
    'Complete guide on how to safely remove water from your phone speaker. Learn immediate emergency steps, what never to do, drying times, and how to use Clean My Speaker.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/remove-water-from-phone-speaker',
  },
};

export default function RemoveWaterPage() {
  const breadcrumbs = [{ name: 'Remove Water From Phone Speaker', href: '/remove-water-from-phone-speaker' }];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Remove Water From a Phone Speaker',
    description: 'Safe step-by-step procedure to remove water and moisture from a phone speaker using acoustic vibrations and safe physical drying.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Remove from liquid and dry exterior',
        text: 'Immediately remove your phone from water, disconnect all cables, and wipe the exterior with a microfiber cloth.',
      },
      {
        '@type': 'HowToStep',
        name: 'Position the phone with speaker down',
        text: 'Angle the speaker holes downward toward a dry, absorbent surface so gravity assists liquid egress.',
      },
      {
        '@type': 'HowToStep',
        name: 'Run Clean My Speaker audio tone',
        text: 'Open Clean My Speaker in your browser, set volume to 100%, and run the Water Eject or Deep Clean mode for 30 to 60 seconds.',
      },
      {
        '@type': 'HowToStep',
        name: 'Dab away expelled water and air-dry',
        text: 'Wipe off droplets ejected from the grille and allow the phone to rest in a dry, ventilated area for at least a few hours.',
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-12 mt-6 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Emergency Troubleshooting
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How to Remove Water From a Phone Speaker: Safe Emergency Steps
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Dropped your phone in water, sink, pool, or toilet? Follow this verified guide to eject moisture from your speaker grilles and protect your internal components from liquid damage.
          </p>
        </header>

        {/* Immediate CTA to Cleaner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-950 to-slate-900 border border-sky-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-white">Is water currently trapped in your speaker?</h2>
            <p className="text-xs text-slate-300">
              Run the low-frequency acoustic ejection tone immediately to dislodge surface droplets.
            </p>
          </div>
          <Link
            href="/#tool"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all shrink-0 hover:scale-102"
          >
            🔊 Clean My Speaker Now
          </Link>
        </div>

        {/* Section: Immediate Emergency Actions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Immediate Steps to Take (First 5 Minutes)</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex gap-4">
              <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <h3 className="font-bold text-white text-base">Retrieve & Unplug Immediately</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Remove the phone from water instantly. If it is connected to a charging cable, power bank, or wired headphones, disconnect them immediately. Never charge a wet phone.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex gap-4">
              <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <h3 className="font-bold text-white text-base">Remove Case & Screen Protectors</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Phone cases trap moisture along the seams and around the bottom speaker cutouts. Take off any silicone or leather case and wipe the phone exterior completely dry.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex gap-4">
              <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <h3 className="font-bold text-white text-base">Gently Tap with Speaker Down</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Hold the phone firmly with the speaker ports facing downward and gently tap the bottom corner against your open hand. This knocks loose large droplets trapped in the port entrance.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex gap-4">
              <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0">
                4
              </span>
              <div>
                <h3 className="font-bold text-white text-base">Run the Clean My Speaker Sound Tone</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Navigate to <Link href="/#tool" className="text-sky-400 underline">Clean My Speaker</Link>, ensure volume is high, and play the Water Eject frequency. The rapid vibration pushes fine moisture out through the mesh holes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Common Mistakes & Dangers */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">What NEVER to Do When Your Phone Speaker Gets Wet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-rose-100 space-y-2">
              <span className="font-bold text-rose-400 text-sm">❌ The &ldquo;Rice Myth&rdquo;</span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Putting your wet phone into a bag of dry rice is ineffective and harmful. Rice starch, grain dust, and micro-particles enter speaker holes and charging ports, forming a thick paste when mixed with water.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-rose-100 space-y-2">
              <span className="font-bold text-rose-400 text-sm">❌ Blow Dryers & Heat Guns</span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Direct heat melts the delicate waterproof rubber gaskets, display adhesives, and delicate speaker cone membranes. High heat can also cause lithium-ion battery instability.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-rose-100 space-y-2">
              <span className="font-bold text-rose-400 text-sm">❌ Compressed Air Cans</span>
              <p className="text-slate-300 text-xs leading-relaxed">
                High-pressure compressed air blasts water droplets deeper past protective water barriers directly into microphone assemblies and motherboard circuits.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-rose-100 space-y-2">
              <span className="font-bold text-rose-400 text-sm">❌ Cotton Swabs & Toothpicks</span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Poking toothpicks, sewing needles, or paperclips into speaker grilles punctures the water-resistant acoustic mesh, completely destroying your phone&apos;s IP water resistance forever.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Signs of Water Ingress */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Signs Moisture Is Trapped in Your Speaker</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <li className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
              <span className="text-sky-400">🔹</span> Audio sounds quiet or &ldquo;underwater&rdquo;
            </li>
            <li className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
              <span className="text-sky-400">🔹</span> Noticeable distortion or buzzing at medium volume
            </li>
            <li className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
              <span className="text-sky-400">🔹</span> Callers say your microphone sounds distant or garbled
            </li>
            <li className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
              <span className="text-sky-400">🔹</span> Liquid detected alert appearing on charging screen
            </li>
          </ul>
        </section>

        {/* Section: How Long to Wait */}
        <section className="space-y-4 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white">How Long Should You Wait for It to Dry?</h2>
          <p className="leading-relaxed text-sm">
            After running the sound cleaning cycles 2 to 3 times to expel bulk water droplets, place the phone upright in a room with steady airflow (such as near an oscillating fan or an open window with low humidity).
          </p>
          <p className="leading-relaxed text-sm">
            Allow at least <strong>5 to 12 hours</strong> for residual microscopic moisture to evaporate completely before plugging in a wired charging cable. If you have silica gel desiccant packs, you can place your phone in an airtight plastic container with the packets for accelerated, safe drying.
          </p>
        </section>

        {/* Section: When to Seek Professional Repair */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">When to Seek Professional Repair</h2>
          <p className="leading-relaxed text-sm">
            If your speaker remains entirely silent, crackles constantly, or the screen displays abnormal green/white lines after 24 hours of drying, liquid may have reached internal circuitry. Contact Apple Support, Samsung Authorized Care, or a qualified local repair technician immediately. Continuing to use a shorted device risks permanent battery or motherboard failure.
          </p>
        </section>

        <SafetyNotice />

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/remove-water-from-phone-speaker" />

        <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            ← Clean My Speaker Tool
          </Link>
          <Link href="/speaker-test" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            Test Speaker Output After Cleaning →
          </Link>
        </footer>
      </article>
    </main>
  );
}
