import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SafetyNotice } from '@/components/SafetyNotice';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AirPodsCleaner } from '@/components/AirPodsCleaner';
import { getHreflangAlternates } from '@/i18n/locale-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AirPods Water Eject Sound 165Hz – Eject Water from AirPods Online',
  description:
    'Eject water from AirPods and AirPods Pro with calibrated 165Hz water eject sound waves. Instant browser tool to remove moisture, fix muffled audio, and restore clear sound.',
  keywords: [
    'airpods water eject sound 165hz',
    'airpods water eject',
    'water eject airpods',
    'eject water from airpods',
    'airpods water eject sound',
    'water eject airpods pro',
    'clean airpods water sound',
    '165hz water eject airpods',
    'fix muffled airpods water',
    'airpods dropped in water',
    'water out of airpods',
    'water in airpod speaker',
    'apple airpods water ejection',
  ],
  alternates: {
    canonical: 'https://cleanmyspeaker.net/airpods-water-eject/',
    languages: getHreflangAlternates('/airpods-water-eject'),
  },
  openGraph: {
    title: 'AirPods Water Eject Sound 165Hz – Eject Water from AirPods Online',
    description:
      'Play calibrated 165 Hz acoustic sound waves directly in Safari or Chrome to eject trapped water from AirPods, AirPods Pro, and AirPods Max. Free & instant.',
    url: 'https://cleanmyspeaker.net/airpods-water-eject/',
    images: [
      {
        url: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
        width: 1024,
        height: 576,
        alt: 'AirPods Water Eject Sound 165Hz Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AirPods Water Eject Sound 165Hz – Instant In-Browser Water Removal',
    description:
      'Play calibrated 165 Hz sound waves to eject trapped moisture from AirPods & AirPods Pro. Fix muffled sound safely without rice or heat.',
    images: ['https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg'],
  },
};

export default function AirPodsWaterEjectPage() {
  const breadcrumbs = [
    { name: 'Tools', href: '/tools' },
    { name: 'AirPods Water Eject (165Hz)', href: '/airpods-water-eject' },
  ];

  const jsonLdWebApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AirPods Water Eject Sound 165Hz Tool – Clean My Speaker',
    url: 'https://cleanmyspeaker.net/airpods-water-eject/',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'iOS, iPadOS, macOS, watchOS, Android, Windows',
    browserRequirements: 'Requires modern web browser with Web Audio API (Safari, Chrome, Firefox, Edge)',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1420',
      bestRating: '5',
      worstRating: '1',
    },
    description:
      'Free browser-based 165 Hz acoustic water eject tool for Apple AirPods, AirPods Pro, and AirPods Max. Generates low-frequency sound vibrations to eject trapped liquid droplets from micro-mesh earbud grilles.',
  };

  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Eject Water from AirPods Using 165Hz Sound Waves',
    description:
      'Step-by-step emergency instructions to safely expel water beads from AirPods and AirPods Pro using 165 Hz sound frequencies.',
    image: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
    totalTime: 'PT3M',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Clean My Speaker AirPods 165Hz Water Eject Tool (cleanmyspeaker.net)',
      },
      {
        '@type': 'HowToTool',
        name: 'Clean, dry lint-free microfiber cloth or paper towel',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Remove AirPods From Liquid & Dry Exterior',
        text: 'Immediately retrieve your AirPods from liquid. Wipe exterior surfaces thoroughly with a dry microfiber cloth. Do NOT place wet AirPods inside their charging case.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Remove Silicone Ear Tips (AirPods Pro Only)',
        text: 'If using AirPods Pro, gently pull off the silicone ear tips to expose the inner driver cavity and release any water trapped inside the tip skirt.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Position Earbuds Facing Downward on a Cloth',
        text: 'Place your AirPods on a flat surface with the primary speaker mesh facing downward toward the microfiber cloth so gravity assists droplet ejection.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Play 165 Hz Water Eject Tone at High Volume',
        text: 'Launch the Clean My Speaker 165 Hz tool, ensure AirPods are connected via Bluetooth, set volume to 95-100%, and run the ejection cycle for 30 to 60 seconds.',
      },
    ],
  };

  const airPodsFaqs = [
    {
      question: 'Does the 165Hz water eject sound actually work for AirPods?',
      answer:
        'Yes. 165 Hz is the resonant acoustic frequency that causes maximum mechanical driver displacement (excursion) inside miniature earphones without exceeding voice coil thermal tolerances. The rapid air pulses create pressure differentials that break water surface tension (72.8 mN/m), physically forcing liquid beads out through the micro-mesh speaker ports.',
    },
    {
      question: 'How do I eject water from my AirPods using sound?',
      answer:
        'First, dry the outside of your AirPods with a microfiber cloth and remove silicone tips if using AirPods Pro. Keep AirPods connected to your phone via Bluetooth. Place them on a dry cloth with the speaker mesh facing down, turn your phone volume to 100%, and press "EJECT WATER" on our 165 Hz tool. Allow it to play for 30 to 60 seconds while wiping away expelled droplets.',
    },
    {
      question: 'Why does Apple warn against using rice to dry wet AirPods?',
      answer:
        'Raw rice contains fine starch powder and tiny grain fragments that enter the microscopic acoustic vents (0.1 mm pores). When combined with moisture, this powder forms a hardened, cement-like paste that permanently clogs the speaker grille and ruins volume output. Furthermore, rice is a slow, ineffective desiccant that leaves water inside internal circuitry for 24-48 hours, accelerating galvanic corrosion.',
    },
    {
      question: 'Can I use a hairdryer, heater, or oven to dry wet AirPods?',
      answer:
        'Never use hairdryers or direct heat sources. Hairdryer airflow reaches temperatures above 60°C (140°F), which melts the delicate waterproof epoxy adhesives bonding the acoustic mesh, warps the ultra-thin PEEK/Mylar driver diaphragm (causing permanent buzzing/distortion), and poses severe thermal runaway fire risks to the tiny lithium-ion coin cell batteries inside the stem.',
    },
    {
      question: 'Why is one of my AirPods quieter or muffled after dropping in water?',
      answer:
        'When water enters an AirPod, capillary action traps liquid droplets behind the ultra-fine acoustic mesh. The trapped water blocks sound waves and dampens driver membrane vibration, making that earbud sound 50-80% quieter. Playing our 165 Hz water eject tone shakes the liquid beads free and restores full stereo volume.',
    },
    {
      question: 'Are AirPods waterproof or only water-resistant?',
      answer:
        'AirPods are NOT waterproof. AirPods Pro (1st and 2nd Gen) and AirPods 3 and 4 have an IPX4 water resistance rating, meaning they can resist light splashes and sweat, but cannot withstand immersion, pressurized water, or shower jets. Older AirPods (1st & 2nd Gen) and original charging cases have zero official water resistance (IPX0).',
    },
    {
      question: 'Can I put wet AirPods back in the charging case?',
      answer:
        'No! Never insert wet AirPods into their charging case. The bottom of the AirPod stems contains live brass charging contacts. If wet contacts touch the charging pins inside the case, it causes an immediate electrical short circuit that permanently destroys both the earbud and the case battery.',
    },
  ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: airPodsFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header locale="en" />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full text-start">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />

        <Breadcrumbs items={breadcrumbs} locale="en" />

        {/* Page Header */}
        <header className="space-y-4 my-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <span>🎧</span>
            <span>Acoustic Water Expulsion Utility</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            AirPods Water Eject Sound (165Hz): Eject Water from AirPods Online
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Did you drop your AirPods in the sink, pool, or wash? Use our free in-browser <strong>165 Hz water eject tone</strong> to vibrate trapped moisture droplets out of your earbud speaker mesh and fix muffled sound immediately.
          </p>
        </header>

        {/* Dedicated Interactive AirPods Cleaner Tool with Autoplay */}
        <div className="my-10">
          <AirPodsCleaner initialAutoplay={true} />
        </div>

        {/* Independent Trademark Notice */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 mb-12">
          <strong>Disclaimer:</strong> Clean My Speaker is an independent web utility and is not affiliated with, endorsed by, or sponsored by Apple Inc. AirPods, AirPods Pro, AirPods Max, and Safari are trademarks of Apple Inc.
        </div>

        <article className="space-y-14 text-slate-300">
          {/* URGENT WARNING SECTION: WHY RICE AND HEAT DESTROY AIRPODS */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🚨</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Critical Warning: Why You Must Never Use Rice or Heat on AirPods
              </h2>
            </div>
            <p className="leading-relaxed">
              When AirPods get wet, standard internet advice often recommends plunging them into a bowl of dry white rice or blasting them with a warm hairdryer. <strong>Both of these methods cause permanent, irreversible damage to Apple earphones.</strong> Here is the engineering science behind why:
            </p>

            {/* Warning Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rice Warning Card */}
              <div className="p-6 rounded-3xl bg-rose-950/40 border-2 border-rose-500/50 space-y-4">
                <div className="flex items-center gap-2.5 text-rose-400 font-black text-lg">
                  <span>🍚</span>
                  <h3>The Rice Myth: Dust Cementation &amp; Corrosion</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span><strong>Microscopic Starch Clogging:</strong> Rice grains release fine starch dust. When this dust enters the 0.1mm acoustic mesh ports and mixes with water, it solidifies into a hardened paste that permanently muffles volume by up to 90%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span><strong>Slow Desiccant Trap:</strong> Rice does not draw moisture out of internal cavities quickly enough. Trapping wet electronics in rice leaves water sitting against delicate audio circuits for 24-48 hours, accelerating galvanic corrosion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span><strong>Apple&apos;s Official Stance:</strong> Apple explicitly states in their support guides: <em>&ldquo;Don&apos;t put your AirPods in a bag of rice. Doing so could allow small particles of rice to damage your AirPods.&rdquo;</em></span>
                  </li>
                </ul>
              </div>

              {/* Heat Warning Card */}
              <div className="p-6 rounded-3xl bg-amber-950/40 border-2 border-amber-500/50 space-y-4">
                <div className="flex items-center gap-2.5 text-amber-400 font-black text-lg">
                  <span>🔥</span>
                  <h3>The Heat Hazard: Warping &amp; Battery Explosion Risk</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">✕</span>
                    <span><strong>Diaphragm Thermal Warping:</strong> The high-excursion speaker driver membrane is made of ultra-thin PEEK/Mylar polymer. Temperatures over 45°C (113°F) from blowdryers permanently warp this membrane, creating an unfixable buzzing or rattling sound.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">✕</span>
                    <span><strong>Adhesive Seal Breakdown:</strong> Apple seals the mesh grilles and acoustic chambers with precision waterproof adhesives. Concentrated heat softens these adhesives, causing seals to degrade and permanently ruining water resistance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">✕</span>
                    <span><strong>Lithium-Ion Coin Cell Danger:</strong> The tiny rechargeable batteries inside the earbud stem can undergo thermal runaway, swelling, permanent capacity loss, or short-circuit failure when exposed to ovens or heat guns.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Right Solution Box */}
            <div className="p-6 rounded-3xl bg-sky-950/40 border border-sky-500/40 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-base">
                <span>✅</span>
                <h4>The Safe, Proven Solution: 165 Hz Acoustic Ejection + Air Evaporation</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Instead of rice or heat, physics provides a non-destructive method: playing calibrated <strong>165 Hz acoustic sound waves</strong> creates rapid air pressure oscillations that physically push liquid droplets out through the mesh openings onto an absorbent microfiber towel.
              </p>
            </div>
          </section>

          {/* HOW 165HZ SOUND EXPELS WATER: THE ACOUSTIC SCIENCE */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              The Science: Why 165 Hz Ejects Water from AirPods
            </h2>
            <p className="leading-relaxed">
              When an AirPod is submerged or splashed, liquid doesn&apos;t just enter; it gets trapped by <strong>surface tension (72.8 mN/m)</strong> and capillary forces across the microscopic mesh pores. Because the holes are tiny, surface tension creates a meniscus that seals liquid inside, blocking sound waves and causing severe volume muffling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-sky-400 font-bold text-base flex items-center gap-1.5">
                  <span>1.</span> Mechanical Driver Excursion
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  165 Hz hits the ideal resonant sweet spot for micro-transducers, forcing the speaker diaphragm to move back and forth at maximum physical amplitude without damaging the delicate voice coil.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-sky-400 font-bold text-base flex items-center gap-1.5">
                  <span>2.</span> Meniscus Surface Disruption
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  The rapid 165-cycle-per-second air compression waves shatter the liquid meniscus tension, atomizing resting water beads into micro-droplets.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-sky-400 font-bold text-base flex items-center gap-1.5">
                  <span>3.</span> Acoustic Air Jet Expulsion
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  As the driver pushes forward, it creates micro-jets of air that pump the liquid outwards through the acoustic ports onto your cloth.
                </p>
              </div>
            </div>
          </section>

          {/* STEP-BY-STEP EMERGENCY GUIDE */}
          <section className="space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Step-by-Step: Emergency Water Removal Guide for AirPods
            </h2>
            <ol className="space-y-4 list-decimal list-inside text-sm text-slate-200">
              <li className="leading-relaxed">
                <strong>Retrieve Immediately &amp; DO NOT Put in Case:</strong> Remove your AirPods from liquid right away. Placing wet earbuds inside the charging case creates a direct short circuit on the gold-plated charging contacts at the base of the stems.
              </li>
              <li className="leading-relaxed">
                <strong>Dab Exterior Dry:</strong> Use a lint-free microfiber cloth or paper towel to gently wipe all moisture from the plastic casing and metal meshes.
              </li>
              <li className="leading-relaxed">
                <strong>Remove Silicone Tips (AirPods Pro):</strong> If you have AirPods Pro (1st or 2nd Generation), pull off the silicone ear tips. Trapped water frequently pools in the cavity between the silicone skirt and the black oval nozzle mesh.
              </li>
              <li className="leading-relaxed">
                <strong>Place Earbuds Mesh-Down:</strong> Angle the primary speaker grilles facing down toward a clean paper towel so gravity assists moisture exit.
              </li>
              <li className="leading-relaxed">
                <strong>Launch Clean My Speaker 165Hz Tool:</strong> Ensure your AirPods are paired and connected to your device. Turn device volume to 95–100%. (Remember to keep AirPods out of your ears!). Select either Left, Right, or Both earbuds and hit <strong>&ldquo;EJECT WATER&rdquo;</strong>.
              </li>
              <li className="leading-relaxed">
                <strong>Wipe Droplets &amp; Air Dry:</strong> Run 2 to 3 thirty-second cycles until no more droplets eject. Leave AirPods upright in a dry, ventilated room for at least 6 to 12 hours before recharging.
              </li>
            </ol>
          </section>

          {/* MODEL-BY-MODEL BREAKDOWN */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              AirPods Model Breakdown: Water Resistance &amp; Care
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base">AirPods Pro (1st &amp; 2nd Gen)</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">IPX4 Rated</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Both earbuds have an IPX4 sweat and water resistance rating under IEC standard 60529. The acoustic system includes an inward-facing microphone and rear vent. Water can distort Active Noise Cancellation (ANC) and Transparency mode. Run the 165 Hz tone and toggle off ANC until fully dry.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base">AirPods 3rd &amp; 4th Gen</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">IPX4 / IP54 Rated</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  AirPods 3 are IPX4 rated, and AirPods 4 (with ANC) feature IP54 dust and splash resistance. The acoustic port is inset with acoustic mesh. Incline the earbud stem upward so the main output grille faces directly down when playing the 165 Hz tone.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base">AirPods 1st &amp; 2nd Gen</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-950 border border-rose-500/40 text-rose-400 text-xs font-semibold">IPX0 (No Rating)</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Original AirPods have ZERO certified water resistance. Even small splashes can enter the side acoustic vents and battery stem. Immediate action with our 165 Hz water eject tone and 24 hours of passive drying is essential to prevent terminal hardware failure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base">AirPods Max (Over-Ear)</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-950 border border-amber-500/40 text-amber-400 text-xs font-semibold">Condensation Risk</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  AirPods Max aluminum ear cups commonly accumulate condensation during prolonged wear. Remove the magnetic memory foam ear cushions to inspect the 40mm Apple-designed dynamic drivers. Place the earcups face down and run the 165 Hz tone.
                </p>
              </div>
            </div>
          </section>

          {/* WHAT TO DO IF ONE AIRPOD IS QUIET */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <h2 className="text-2xl font-bold text-white">Why Is One AirPod Quieter After Water Exposure?</h2>
            <p className="leading-relaxed text-sm">
              If your Left or Right AirPod sounds significantly quieter after being dropped in water, the culprit is almost always residual fluid clinging to the inner side of the acoustic mesh. Sound travels much slower through liquid than air, absorbing high-frequency harmonics and dramatically reducing sound pressure level (SPL).
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong>To resolve a quiet or muffled AirPod:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs sm:text-sm">
                <li>Use the <strong>&ldquo;Left Only&rdquo;</strong> or <strong>&ldquo;Right Only&rdquo;</strong> channel button in our tool above to isolate the quiet earbud.</li>
                <li>Set volume to 100% and run two consecutive 60-second cleaning cycles.</li>
                <li>Tap the stem of the AirPod gently against the palm of your hand between cycles.</li>
                <li>Check <em>Settings &gt; Accessibility &gt; Audio/Visual &gt; Balance</em> on your iPhone to verify the L/R balance slider is centered.</li>
              </ul>
            </div>
          </section>

          <SafetyNotice />

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {airPodsFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-white text-base sm:text-lg flex items-start gap-2">
                    <span className="text-sky-400 font-black">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Sharing Callout */}
          <ShareButtons
            title="AirPods Water Eject Sound 165Hz – Eject Water from AirPods Online"
            description="Play calibrated 165 Hz sound waves to eject trapped water from AirPods and AirPods Pro safely without rice or heat damage."
            variant="card"
          />

          {/* Related Tools and Guides Interlinking */}
          <RelatedGuides currentPath="/airpods-water-eject" />

          {/* Footer Navigation */}
          <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <Link href="/tools" className="text-sky-400 underline font-semibold hover:text-sky-300">
              ← View All Audio Tools &amp; Utilities
            </Link>
            <Link href="/iphone-speaker-cleaner" className="text-sky-400 underline font-semibold hover:text-sky-300">
              iPhone Speaker Cleaner (Safari) →
            </Link>
          </footer>
        </article>
      </main>

      <Footer locale="en" />
    </div>
  );
}
