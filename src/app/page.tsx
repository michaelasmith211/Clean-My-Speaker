import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { SafetyNotice } from '@/components/SafetyNotice';
import { FAQAccordion } from '@/components/FAQAccordion';
import { RelatedGuides } from '@/components/RelatedGuides';
import { FAQItem } from '@/lib/types';

const SpeakerCleaner = dynamic(() => import('@/components/SpeakerCleaner'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-pulse">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="h-4 w-28 bg-slate-800 rounded-full" />
        <div className="h-6 w-24 bg-slate-800 rounded-full" />
      </div>
      <div className="grid grid-cols-3 gap-2 my-6">
        <div className="h-10 bg-slate-800 rounded-xl" />
        <div className="h-10 bg-slate-800 rounded-xl" />
        <div className="h-10 bg-slate-800 rounded-xl" />
      </div>
      <div className="flex flex-col items-center justify-center my-6">
        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-slate-800/80 flex items-center justify-center">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-900 flex flex-col items-center justify-center">
            <span className="text-3xl opacity-50 mb-1">🔊</span>
            <span className="text-xs font-bold text-slate-400">CLEAN MY SPEAKER</span>
          </div>
        </div>
      </div>
      <div className="h-3 w-full bg-slate-800 rounded-full my-4" />
      <div className="flex justify-between text-xs text-slate-300 pt-2 border-t border-slate-800/80">
        <span>💡 Position speaker face-down</span>
        <span>💧 Gently tap on soft towel</span>
      </div>
    </div>
  ),
});
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clean My Speaker – Clean Your Phone Speaker Online',
  description:
    'Clean my speaker online with a browser-based sound tool designed to help move water and moisture from your phone speaker. No app required.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/',
  },
};

const homepageFaqs: FAQItem[] = [
  {
    question: 'How do I clean my speaker?',
    answer:
      'To clean your phone speaker, turn your device volume up to 100%, position the speaker grilles facing downward toward a soft dry cloth or microfiber towel, and tap "CLEAN MY SPEAKER". Allow the generated audio pulses to run for 30 to 60 seconds. The acoustic pressure waves help vibrate and dislodge clinging moisture droplets and fine dust.',
  },
  {
    question: 'How do I clean my phone speaker?',
    answer:
      'Start by running an online sound tool like Clean My Speaker to push out surface moisture using low-frequency acoustic vibrations (165 Hz). After running the sound cycle, use a dry, soft-bristled brush (like an unused soft toothbrush) angled gently across the speaker holes to dislodge lint. Never insert metallic pins, needles, or liquids into the speaker opening.',
  },
  {
    question: 'Can sound remove water from my speaker?',
    answer:
      'Yes, acoustic waves cause the physical speaker cone diaphragm to oscillate rapidly back and forth. When playing low-frequency resonant frequencies (around 165 Hz), this creates kinetic air displacement that can eject surface liquid beads trapped behind the protective mesh, similar to the water ejection feature found in smartwatches.',
  },
  {
    question: 'How does Clean My Speaker work?',
    answer:
      'Clean My Speaker uses the browser-native Web Audio API to synthesize low-frequency sine and sawtooth sound waves in real time. These high-amplitude pressure waves generate rapid mechanical excursions of your phone speaker diaphragm, pushing air through the acoustic mesh to expel moisture.',
  },
  {
    question: 'Does Clean My Speaker work on iPhone?',
    answer:
      'Yes! Clean My Speaker works on any modern iPhone running Safari, Chrome, or any other browser. Because audio is generated directly in the browser via standard Web Audio standards, no iOS app or App Store download is required.',
  },
  {
    question: 'Does Clean My Speaker work on Android?',
    answer:
      'Yes, it is fully compatible with Android devices including Samsung Galaxy, Google Pixel, Xiaomi, Motorola, and OnePlus phones. It runs smoothly on Google Chrome, Samsung Internet, and Firefox for Android.',
  },
  {
    question: 'How long should I run the speaker cleaner?',
    answer:
      'For light moisture or faint muffling, a 30-second Quick Clean cycle is usually sufficient. If your phone was recently dropped in water or heavily splashed, run the 45-second Water Eject mode or the 60-second Deep Clean cycle 2 to 3 times, allowing 10 seconds between cycles to wipe away expelled water.',
  },
  {
    question: 'Can I use Clean My Speaker without downloading an app?',
    answer:
      'Yes, Clean My Speaker operates 100% in your mobile web browser. You do not need to install third-party apps, grant camera/microphone permissions, or register an account.',
  },
  {
    question: 'What should I do if my speaker still sounds muffled?',
    answer:
      'If your speaker remains muffled after running several sound cycles, power down the phone and allow it to air-dry in a warm, well-ventilated space for 12 to 24 hours. If sound quality does not recover, dried residue, compact lint, or internal liquid ingress may require professional inspection by an authorized service provider.',
  },
  {
    question: 'Can speaker-cleaning sounds damage my phone?',
    answer:
      'Clean My Speaker uses safe audio frequencies (100 Hz to 500 Hz) within the normal design operating range of modern mobile micro-transducers. However, you should not run extreme high-volume tones continuously for hours, and you should always keep the phone away from your ears while running the cleaning tool.',
  },
];

export default function HomePage() {
  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Clean My Speaker & Fix My Speaker Sound – 5 Step Water & Dust Removal Guide',
    description:
      'Learn how to clean my speaker and fix my speaker sound online using Clean My Speaker (CleanMySpeaker.net). Uses calibrated 165 Hz sound waves to fix muffled audio, displace moisture, and eject water instantly.',
    image: {
      '@type': 'ImageObject',
      url: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
      width: 1024,
      height: 576,
      caption: 'How to Clean My Speaker & Fix My Speaker Sound Guide',
    },
    totalTime: 'PT1M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
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
        name: 'Visit CleanMySpeaker.net',
        text: 'Go to CleanMySpeaker.net in your browser on iPhone, Android, or laptop.',
        url: 'https://cleanmyspeaker.net/#tool',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Click Play to Clean My Speaker',
        text: 'Press the "CLEAN MY SPEAKER" play button to start generating acoustic sound waves.',
        url: 'https://cleanmyspeaker.net/#tool',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Sound Waves Fix My Speaker',
        text: 'Special 165 Hz resonant frequencies physically oscillate the speaker cone to push out water, dust, and debris.',
        url: 'https://cleanmyspeaker.net/#how-to-clean-and-fix-my-speaker',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Let It Play (30–60 Seconds)',
        text: 'For best results, let the sound wave cycle play for 30 to 60 seconds while holding your speaker facing downward.',
        url: 'https://cleanmyspeaker.net/#how-to-clean-and-fix-my-speaker',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Your Speaker is Clean & Fixed!',
        text: 'Dab away any ejected moisture droplets with a dry cloth and enjoy clear, loud, crystal-clear audio again.',
        url: 'https://cleanmyspeaker.net/#how-to-clean-and-fix-my-speaker',
      },
    ],
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Clean My Speaker – How to Clean & Fix Phone Speaker Sound Online',
    description:
      'Watch how Clean My Speaker (CleanMySpeaker.net) uses acoustic sound frequencies to clean phone speakers, eject trapped water, and fix muffled audio.',
    thumbnailUrl: 'https://img.youtube.com/vi/PmxN3frqKJY/maxresdefault.jpg',
    uploadDate: '2026-08-01T08:00:00+00:00',
    embedUrl: 'https://www.youtube.com/embed/PmxN3frqKJY',
    publisher: {
      '@type': 'Organization',
      name: 'Clean My Speaker',
      url: 'https://cleanmyspeaker.net',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cleanmyspeaker.net/icon.png',
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />

      {/* HERO SECTION WITH TOOL ABOVE THE FOLD */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-sky-400"></span>
          Fast Browser Utility • No App Required
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight text-balance max-w-3xl mx-auto leading-tight">
          Clean My Speaker – <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500">Clean Your Phone Speaker Online</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Play a specially generated sound to help move water and moisture from your phone speaker. No app or download required.
        </p>

        {/* Immediate Audio Utility */}
        <div id="tool" className="mt-8 scroll-mt-24">
          <SpeakerCleaner />
        </div>

        {/* Safety / Practical advice under the tool */}
        <SafetyNotice />
      </section>

      {/* QUICK FEATURE TILES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xl mb-4">
              💧
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Acoustic Water Ejection</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Generates calibrated 165 Hz pressure waves that physically oscillate the micro-speaker diaphragm to expel trapped liquid droplets.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xl mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% In-Browser & Private</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Synthesized purely with the native HTML5 Web Audio API. Zero downloads, no account registration, and zero microphone access requested.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xl mb-4">
              📱
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Universal Compatibility</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Works across Apple iPhone, iPad, Samsung Galaxy, Google Pixel, smartwatches, and laptop speakers on Safari, Chrome, and Edge.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO VIDEO: WATCH HOW CLEAN MY SPEAKER WORKS */}
      <section id="intro-video" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-900/90 border border-sky-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <span>🎬</span> Official Intro Video
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Watch: How to Clean & Fix Your Phone Speaker
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              See how <strong>CleanMySpeaker.net</strong> works: learn how calibrated acoustic sound waves dislodge trapped water, eject dust, and restore crystal-clear speaker volume in seconds.
            </p>
          </div>

          {/* 16:9 Responsive Video Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PmxN3frqKJY?si=AeWTwWh4JpMbk_Ki"
              title="Clean My Speaker - Video Introduction & How It Works"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Video Trust & Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-sky-400 text-base">▶️</span>
              <span><strong>Quick Video:</strong> Visual demonstration of sound waves</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-sky-400 text-base">💧</span>
              <span><strong>Water Ejection:</strong> Clears trapped moisture from mesh</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-sky-400 text-base">⚡</span>
              <span><strong>Instant Fix:</strong> 100% free, safe, and online</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO CLEAN MY SPEAKER & FIX MY SPEAKER SOUND */}
      <section id="how-to-clean-and-fix-my-speaker" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-slate-900/90 border-2 border-sky-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <span>🔊</span> Clean My Speaker & Fix My Speaker Guide
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              How to Clean My Speaker & Fix My Speaker Sound
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong>CleanMySpeaker.net</strong> uses powerful sound wave frequencies to remove water, eject dust, and fix muffled speaker sound instantly. Follow this 5-step guide to fix your phone speaker and restore loud, crystal-clear audio.
            </p>
          </div>

          {/* Graphic with SEO Figure Container */}
          <figure className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl bg-slate-950">
            <Image
              src="/images/how-to-clean-my-speaker-fix-sound.jpg"
              alt="How to Clean My Speaker & Fix My Speaker Sound - 5 Step Process to Eject Water and Clean Phone Speaker Online"
              width={1024}
              height={576}
              className="w-full h-auto object-cover rounded-2xl hover:scale-[1.01] transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              priority={false}
            />
            <figcaption className="p-4 bg-slate-950/95 border-t border-slate-800 text-xs text-slate-300 text-center flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>
                💡 <strong>Clean My Speaker & Fix My Speaker Steps:</strong> Visit Website → Click Play → Sound Waves Displace Water → Run 30–60s → Crystal Clear Sound.
              </span>
              <a
                href="/images/how-to-clean-my-speaker-fix-sound.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 underline font-semibold hover:text-sky-200 shrink-0"
              >
                Open Full Cleaning Guide ↗
              </a>
            </figcaption>
          </figure>

          {/* 5-Step Interactive Breakdown Cards Matching Sound Waves Guide */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white text-center sm:text-left">
              Step-by-Step Breakdown: How Sound Waves Clean Your Phone Speaker
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-2 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                  01
                </div>
                <h4 className="font-bold text-white text-sm">Visit the Website</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Go to <strong className="text-white">CleanMySpeaker.net</strong> in your browser. No app download or configuration needed.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-2 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                  02
                </div>
                <h4 className="font-bold text-white text-sm">Click Play</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Press the <strong className="text-white">&ldquo;CLEAN MY SPEAKER&rdquo;</strong> button above to start the cleaning sound waves.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-2 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                  03
                </div>
                <h4 className="font-bold text-white text-sm">Sound Waves Do Magic</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Special 165 Hz frequencies create kinetic air pulses that push out trapped water beads and dust from speaker grilles.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-2 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                  04
                </div>
                <h4 className="font-bold text-white text-sm">Let It Play (30–60s)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For optimal results, allow the sound to play for 30–60 seconds while holding your phone speaker facing downward.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-2 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
                  05
                </div>
                <h4 className="font-bold text-white text-sm">Your Speaker is Clean!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Wipe away dislodged moisture and enjoy clear, loud, and crystal-clear sound again without muffled distortion!
                </p>
              </div>
            </div>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-slate-800 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-lg block">🛡️</span>
              <span className="font-bold text-white block text-xs">100% Safe</span>
              <span className="text-[11px] text-slate-400 block">No downloads or hardware risk</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-lg block">⚡</span>
              <span className="font-bold text-white block text-xs">Instant Result</span>
              <span className="text-[11px] text-slate-400 block">Works in seconds</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-lg block">🚫</span>
              <span className="font-bold text-white block text-xs">No Installation</span>
              <span className="text-[11px] text-slate-400 block">Works directly in browser</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-lg block">📱</span>
              <span className="font-bold text-white block text-xs">All Devices</span>
              <span className="text-[11px] text-slate-400 block">iPhone, Android, Tablets</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-lg block">🔊</span>
              <span className="font-bold text-white block text-xs">Better Sound</span>
              <span className="text-[11px] text-slate-400 block">Removes water & debris</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-sky-500/40 text-center space-y-1 bg-sky-950/30">
              <span className="text-lg block">💙</span>
              <span className="font-bold text-sky-300 block text-xs">One-Click Clean</span>
              <Link href="/#tool" className="text-[11px] text-sky-300 underline font-semibold block hover:text-sky-200">
                Clean Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE PEOPLE-FIRST SEO CONTENT */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-slate-300">
        {/* Section 1: Clean My Speaker Online */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Clean My Speaker Online – How It Works & When to Use It
          </h2>
          <p className="leading-relaxed">
            Accidentally dropping your smartphone into the sink, getting caught in heavy rain, or setting your device near the shower can cause water to enter the small acoustic speaker cavities. Even on IP68 water-resistant smartphones, surface tension holds tiny water droplets inside the speaker mesh. This moisture obstructs sound waves, causing your phone speaker to sound muffled, crackly, or barely audible.
          </p>
          <p className="leading-relaxed">
            The <strong>Clean My Speaker</strong> online utility gives you instant access to low-frequency sound pulses right from your browser. Instead of putting your smartphone in rice or using dangerous pointed tools that can pierce delicate membranes, our tool creates controlled mechanical vibrations designed to encourage surface liquid beads to dislodge and exit the speaker ports.
          </p>
        </section>

        {/* Section 2: How Does Clean My Speaker Work? */}
        <section className="space-y-4 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How Does Clean My Speaker Work? The Physics of Water Ejection
          </h2>
          <p className="leading-relaxed">
            Every smartphone speaker relies on a tiny, flexible diaphragm (or cone) that vibrates back and forth when driven by an electromagnetic coil. When you play normal speech or music, these vibrations are complex, high-frequency, and irregular.
          </p>
          <p className="leading-relaxed">
            In contrast, <strong>Clean My Speaker</strong> synthesizes pure low-frequency sine and sawtooth tones centered around <strong>165 Hz</strong>. At this specific frequency range:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
            <li>
              <strong className="text-white">Maximum Diaphragm Excursion:</strong> The speaker membrane moves forward and backward at its maximum physical amplitude without distortion.
            </li>
            <li>
              <strong className="text-white">Acoustic Air Displacement:</strong> The rapid mechanical motion builds positive air pressure inside the acoustic cavity behind the grille.
            </li>
            <li>
              <strong className="text-white">Surface Tension Disruption:</strong> Trapped liquid beads that cling to the hydrophobic mesh are physically pushed out through the speaker holes, where you can easily dab them away with a soft towel.
            </li>
          </ul>
          <p className="text-xs text-slate-300 mt-2">
            Want to learn more about the audio physics behind this process? Read our detailed{' '}
            <Link href="/how-it-works" className="text-sky-300 underline font-semibold hover:text-sky-200">
              How It Works guide
            </Link>
            .
          </p>
        </section>

        {/* Section 3: Step-by-Step Instructions */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How to Clean My Phone Speaker: Step-by-Step Instructions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-sky-400 font-mono font-bold text-xs uppercase tracking-wider">Step 1</span>
              <h3 className="text-lg font-bold text-white">Wipe External Moisture</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Take your phone out of its protective case. Use a dry, lint-free microfiber cloth to thoroughly dry the exterior of the chassis, charging port, and speaker grilles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-sky-400 font-mono font-bold text-xs uppercase tracking-wider">Step 2</span>
              <h3 className="text-lg font-bold text-white">Set Volume to 100%</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ensure your device media volume is set to maximum. The physical excursion of the speaker diaphragm directly correlates to the volume level.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-sky-400 font-mono font-bold text-xs uppercase tracking-wider">Step 3</span>
              <h3 className="text-lg font-bold text-white">Position Speaker Downward</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Hold your device vertically so the affected speaker (earpiece at top or bottom loudspeaker) faces downward. Lay a paper towel or cloth directly beneath it. Gravity assists the sound waves.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-sky-400 font-mono font-bold text-xs uppercase tracking-wider">Step 4</span>
              <h3 className="text-lg font-bold text-white">Trigger Clean My Speaker</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tap <strong>CLEAN MY SPEAKER</strong> above. Let the 30-second or 45-second cycle run completely. Wipe away droplets as they emerge, then verify audio clarity with our{' '}
                <Link href="/speaker-test" className="text-sky-300 underline font-semibold hover:text-sky-200">
                  Speaker Test
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: What Users Should and Should NOT Do */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How to Remove Water From a Phone Speaker: Crucial Do&apos;s and Don&apos;ts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-100 space-y-2">
              <h3 className="font-bold text-emerald-400 flex items-center gap-2">
                <span>✅</span> What You SHOULD Do
              </h3>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-emerald-200/80">
                <li>Disconnect all charging cables and headphones immediately.</li>
                <li>Gently tap the phone against your palm with the speaker facing downward.</li>
                <li>Run low-frequency sound cleaner tones to expel moisture.</li>
                <li>Allow the phone to air-dry in an area with good cross-ventilation.</li>
                <li>Use silica gel packets in an airtight container for passive dehumidification.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-rose-100 space-y-2">
              <h3 className="font-bold text-rose-400 flex items-center gap-2">
                <span>❌</span> What You Must NEVER Do
              </h3>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-rose-200/80">
                <li>Never insert toothpicks, needles, pins, or cotton swabs into the speaker ports.</li>
                <li>Never put your phone in uncooked rice (rice dust and starch clog openings).</li>
                <li>Never use a hot blow dryer or radiator (melts adhesive seals).</li>
                <li>Never charge the phone while moisture might still be in ports.</li>
                <li>Never shake the phone violently (drives liquid deeper into internal electronics).</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-300">
            For detailed guidance on water immersion, read our complete guide:{' '}
            <Link href="/remove-water-from-phone-speaker" className="text-sky-300 underline font-semibold hover:text-sky-200">
              How to Remove Water From a Phone Speaker
            </Link>
            .
          </p>
        </section>

        {/* Section 5 & 6: Device specific callouts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="text-2xl">🍎</div>
            <h2 className="text-xl font-bold text-white">Clean My Speaker for iPhone</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Modern iPhones (from iPhone 7 through iPhone 15 and 16 Pro) feature stereo audio with an earpiece receiver speaker and bottom speaker grilles. While newer models have IP68 water resistance, water frequently muffles the microphone and speaker cavities after swimming, showering, or rain.
            </p>
            <p className="text-xs text-slate-300">
              Clean My Speaker works instantly in Mobile Safari without downloading shortcuts or third-party apps.{' '}
              <Link href="/iphone-speaker-cleaner" className="text-sky-300 font-semibold underline hover:text-sky-200">
                View iPhone Speaker Cleaner Guide →
              </Link>
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="text-2xl">🤖</div>
            <h2 className="text-xl font-bold text-white">Clean My Speaker for Android</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              From Samsung Galaxy S24 and Pixel 8 to Xiaomi and OnePlus devices, Android hardware designs feature varied speaker grille sizes and acoustic chamber dimensions. Our multi-frequency sweeps ensure compatibility across all speaker geometries.
            </p>
            <p className="text-xs text-slate-300">
              Compatible with Chrome, Samsung Internet, and Firefox for Android.{' '}
              <Link href="/android-speaker-cleaner" className="text-sky-300 font-semibold underline hover:text-sky-200">
                View Android Speaker Cleaner Guide →
              </Link>
            </p>
          </div>
        </section>

        {/* Section 7: Does Clean My Speaker Really Work? Honest facts */}
        <section className="space-y-4 bg-slate-900/30 p-6 sm:p-8 rounded-3xl border border-slate-800/80">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Does Clean My Speaker Really Work? An Honest Assessment
          </h2>
          <p className="leading-relaxed">
            Yes, for <strong>surface moisture trapped within the external speaker mesh</strong>, sound waves are genuinely effective. Apple even utilizes this identical acoustic principle in the Apple Watch &ldquo;Water Lock&rdquo; feature, which plays a distinct low-frequency tone burst to push water out of the speaker cavity after swimming.
          </p>
          <p className="leading-relaxed">
            However, it is critical to be realistic about physical limitations:
          </p>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              • <strong>What it CAN do:</strong> Vibrate surface liquid beads so gravity can clear them; clear mild dust accumulation; loosen trapped debris on external acoustic mesh.
            </p>
            <p>
              • <strong>What it CANNOT do:</strong> It cannot fix corroded motherboards, undo short-circuits, dry deep battery compartments, or repair hardware that suffered long-term liquid immersion.
            </p>
          </div>
        </section>

        {/* Section 8: Why Does My Phone Speaker Sound Muffled? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Why Does My Phone Speaker Sound Muffled? Common Causes
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base">1. Water Surface Tension</h3>
              <p className="text-sm text-slate-300 mt-1">
                Water creates a thin liquid film across micro-holes in the speaker mesh. This barrier blocks acoustic pressure waves from transmitting into the surrounding air, producing a dull, quiet, underwater sound.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base">2. Compact Pocket Lint & Debris</h3>
              <p className="text-sm text-slate-300 mt-1">
                Carrying your phone in pants pockets over months forces fibers, lint, and sweat into the speaker ports, forming an acoustic plug. For physical cleaning instructions, check our{' '}
                <Link href="/speaker-cleaning-guide" className="text-sky-300 underline font-semibold hover:text-sky-200">
                  Speaker Cleaning & Dust Guide
                </Link>
                .
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base">3. Software Volume or Equalizer Bugs</h3>
              <p className="text-sm text-slate-400 mt-1">
                Occasionally, Bluetooth connections (such as hidden wireless earbuds in another room) or accessibility balance settings can reduce volume. Always verify Bluetooth is disconnected before assuming hardware failure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Benefits of Using Clean My Speaker to Fix Phone Audio */}
        <section id="clean-and-fix-my-speaker-benefits" className="space-y-8 bg-slate-900/90 border-2 border-sky-500/30 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <span>🌟</span> Fix My Speaker Benefits
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Benefits of Using Clean My Speaker to Fix Your Phone Speaker
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Fix muffled audio, boost volume, and clean your phone speaker in one click with our browser sound tool.
            </p>
          </div>

          {/* Graphic with SEO Figure Container */}
          <figure className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl bg-slate-950">
            <Image
              src="/images/clean-my-speaker-fix-my-speaker-benefits.jpg"
              alt="Clean My Speaker & Fix My Speaker Benefits: 8 Key Advantages to Fix Muffled Phone Sound and Eject Water"
              width={1024}
              height={682}
              className="w-full h-auto object-cover rounded-2xl hover:scale-[1.01] transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              priority={false}
            />
            <figcaption className="p-4 bg-slate-950/95 border-t border-slate-800 text-xs text-slate-300 text-center flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>
                ✨ <strong>Key Benefits:</strong> Fix My Speaker Instantly • Remove Muffled Sound • 100% Safe • Free Home Fix.
              </span>
              <a
                href="/images/clean-my-speaker-fix-my-speaker-benefits.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 underline font-semibold hover:text-sky-200 shrink-0"
              >
                Open Full Benefits Guide ↗
              </a>
            </figcaption>
          </figure>

          {/* 8 Responsive Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                01
              </div>
              <h3 className="font-bold text-white text-base">Remove Water Instantly</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Eject water from your phone speaker quickly using calibrated, powerful 165 Hz sound waves.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                02
              </div>
              <h3 className="font-bold text-white text-base">Better Sound Quality</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Eliminate muffled, dull, or distorted audio and enjoy clear, loud, and crisp sound reproduction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                03
              </div>
              <h3 className="font-bold text-white text-base">Safe & Risk-Free</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                100% safe for your device. Sound vibrations clean the acoustic mesh without sharp tools or risk of puncturing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                04
              </div>
              <h3 className="font-bold text-white text-base">Works on All Devices</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fully compatible with Apple iPhone, iPad, Android smartphones, tablets, smartwatches, and laptops.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                05
              </div>
              <h3 className="font-bold text-white text-base">Easy to Use</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Just tap play and let the sound do the magic. No app downloads, accounts, or configurations required.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                06
              </div>
              <h3 className="font-bold text-white text-base">Save Time & Money</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No need to pay expensive repair shop service fees. Clean your speaker right at home for free.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                07
              </div>
              <h3 className="font-bold text-white text-base">Improve Device Life</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Regular acoustic maintenance prevents grime buildup and protects your speaker diaphragm long-term.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs flex items-center justify-center border border-sky-500/30">
                08
              </div>
              <h3 className="font-bold text-white text-base">Better Listening</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Enjoy music, videos, phone calls, podcasts, and gaming without annoying crackles or low volume.
              </p>
            </div>
          </div>

          {/* Bottom Trust & Feature Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-base block">🌐</span>
              <span className="font-bold text-white block text-xs">100% Online</span>
              <span className="text-[11px] text-slate-400 block">Runs in your browser</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-base block">🔒</span>
              <span className="font-bold text-white block text-xs">Privacy Friendly</span>
              <span className="text-[11px] text-slate-400 block">Zero personal data collected</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-base block">⚡</span>
              <span className="font-bold text-white block text-xs">Instant Results</span>
              <span className="text-[11px] text-slate-400 block">Feel the audio difference</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center space-y-1">
              <span className="text-base block">⭐</span>
              <span className="font-bold text-white block text-xs">Trusted by Thousands</span>
              <span className="text-[11px] text-slate-400 block">Worldwide daily users</span>
            </div>
          </div>
        </section>

        {/* Section 10: Diagnostic Test Banner */}
        <section className="p-8 rounded-3xl bg-gradient-to-r from-sky-950/60 to-blue-950/60 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Need to Test Your Speaker Health?</h2>
            <p className="text-sm text-slate-300 max-w-lg">
              Check left/right stereo channels, test high and low frequency tones, and diagnose distortion with our online diagnostic tool.
            </p>
          </div>
          <Link
            href="/speaker-test"
            className="shrink-0 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            Open Speaker Test →
          </Link>
        </section>

        {/* Section 10: FAQ Accordion */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions About Speaker Cleaning
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Clear, practical answers about phone water eject sounds, speaker maintenance, and device safety.
            </p>
          </div>
          <FAQAccordion items={homepageFaqs} includeSchema={true} />
        </section>

        {/* Dynamic Contextual Interlinking */}
        <RelatedGuides currentPath="/" />
      </article>
    </main>
  );
}
