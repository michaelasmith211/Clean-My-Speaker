import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { RelatedGuides } from '@/components/RelatedGuides';
import { FAQItem } from '@/lib/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clean My Speaker FAQ – Questions About Speaker Cleaning & Water Ejection',
  description:
    'Frequently asked questions about cleaning phone speakers, ejecting water with sound, restoring muffled audio, and device safety on iPhone and Android.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/faq',
  },
};

const fullFaqList: FAQItem[] = [
  {
    question: 'How do I clean my speaker?',
    answer:
      'Turn your device volume to maximum, place the phone with the speaker facing downward on a dry cloth, and click "CLEAN MY SPEAKER". Allow the 165 Hz acoustic wave to vibrate moisture and fine debris loose for 30 to 60 seconds.',
  },
  {
    question: 'How do I clean my phone speaker?',
    answer:
      'Combine acoustic vibrations with gentle surface brushing. Run the Clean My Speaker water eject cycle first to push out liquids, then lightly sweep the external holes with a clean, dry, soft-bristled toothbrush.',
  },
  {
    question: 'Can sound remove water from my speaker?',
    answer:
      'Yes. Sound waves produce mechanical vibrations in the phone speaker diaphragm. When playing low-frequency tones (around 165 Hz), high air displacement builds up behind the grille, pushing water droplets through the protective mesh.',
  },
  {
    question: 'How does Clean My Speaker work?',
    answer:
      'Clean My Speaker uses the HTML5 Web Audio API to synthesize calibrated audio frequencies directly inside your browser. It does not stream pre-recorded audio files, ensuring mathematically pure waveforms for maximum diaphragm excursion.',
  },
  {
    question: 'Does Clean My Speaker work on iPhone?',
    answer:
      'Yes, it is completely compatible with iOS and Safari on iPhone 7 through iPhone 16 Pro, as well as iPad and Apple Watch devices with web browsers. No app or iOS Shortcut is required.',
  },
  {
    question: 'Does Clean My Speaker work on Android?',
    answer:
      'Yes, it functions on all Android smartphones including Samsung Galaxy, Google Pixel, OnePlus, Xiaomi, and Motorola devices running Chrome, Samsung Internet, or Firefox.',
  },
  {
    question: 'How long should I run the speaker cleaner?',
    answer:
      'A typical cycle lasts 30 to 60 seconds. For severe water exposure, run the cycle 2 to 3 times, pausing between runs to dab away expelled water beads.',
  },
  {
    question: 'Can I use Clean My Speaker without downloading an app?',
    answer:
      'Yes! The utility operates entirely within your browser. There is no software to install, no app store download, and no permissions required.',
  },
  {
    question: 'What should I do if my speaker still sounds muffled?',
    answer:
      'If sound remains muffled after several sound cleaning cycles, turn off the phone and allow it to air-dry in a well-ventilated space for 12 to 24 hours. If it does not improve, persistent debris or liquid damage may require technician inspection.',
  },
  {
    question: 'Can speaker-cleaning sounds damage my phone?',
    answer:
      'Clean My Speaker produces tones within standard hardware design tolerances. However, do not hold the phone against your ears during playback, as high-volume sound at close proximity can harm human hearing.',
  },
  {
    question: 'Does Clean My Speaker fix muffled call audio (earpiece)?',
    answer:
      'Yes. When you play the cleaning tone at 100% volume, stereo-equipped phones output the audio through both the bottom speaker and top earpiece receiver, helping clear both openings.',
  },
  {
    question: 'Why shouldn’t I put my wet phone in rice?',
    answer:
      'Scientific testing has repeatedly shown that rice dries phones slower than open air. Furthermore, rice dust and starch turn into sticky paste inside ports and speaker grilles, causing permanent damage.',
  },
  {
    question: 'Can I use compressed air on my phone speaker?',
    answer:
      'No. Canned compressed air releases gas at extremely high pressure that can rupture the fragile silicone or polymer speaker diaphragm and blast water droplets deeper into internal motherboard cavities.',
  },
  {
    question: 'Is Clean My Speaker free to use?',
    answer:
      'Yes, Clean My Speaker is 100% free with no subscriptions, paywalls, or hidden fees.',
  },
];

export default function FAQPage() {
  const breadcrumbs = [{ name: 'Frequently Asked Questions', href: '/faq' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <article className="space-y-12 mt-6 text-slate-300">
        <header className="space-y-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Help & Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Clean My Speaker FAQ: Common Questions Answered
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Find immediate answers about water ejection, frequency tones, phone safety, and troubleshooting muffled speakers.
          </p>
        </header>

        {/* FAQ Accordion with Schema */}
        <FAQAccordion items={fullFaqList} includeSchema={true} />

        {/* Direct Link to Cleaner */}
        <section className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Ready to Clean Your Speaker?</h2>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Experience the 165 Hz water eject tone right now directly in your mobile browser.
          </p>
          <Link
            href="/#tool"
            className="inline-block px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg transition-transform hover:scale-103"
          >
            🔊 Launch Clean My Speaker Tool
          </Link>
        </section>

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/faq" />

        <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            ← Home
          </Link>
          <Link href="/how-it-works" className="text-sky-300 underline font-semibold text-sm hover:text-sky-200">
            Learn How Sound Waves Work →
          </Link>
        </footer>
      </article>
    </main>
  );
}
