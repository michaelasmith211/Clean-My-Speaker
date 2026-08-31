# Clean My Speaker (`cleanmyspeaker.net`)

> Production-ready, ultra-fast, mobile-first speaker cleaning web utility engineered with Next.js App Router, Tailwind CSS, TypeScript, and the HTML5 Web Audio API.

## Overview
**Clean My Speaker** generates real-time, low-frequency acoustic vibrations (centered at 165 Hz) and sweeping sound waves directly in the user's browser. The physical displacement of the phone speaker diaphragm assists in ejecting surface liquid droplets and freeing trapped moisture without needing apps, downloads, or external audio processing servers.

---

## Key Features
- **Browser-Native Audio Engine**: 100% client-side sound generation using Web Audio API oscillators and gain nodes.
- **Water Ejection Algorithms**:
  - `Quick Clean (30s)`: Fast resonant pulse for light splashes.
  - `Deep Clean (60s)`: Frequency sweep (120 Hz – 350 Hz) for stubborn droplets.
  - `Water Eject (45s)`: Pulsed low-frequency sawtooth & sub-harmonic displacement bursts.
- **Interactive Speaker Diagnostics**: Stereo channel (Left / Right) panning test, continuous frequency sweep (20 Hz – 16 kHz), and discrete frequency testing tones (100 Hz, 250 Hz, 500 Hz, 1 kHz, 2 kHz, 5 kHz, 10 kHz).
- **SEO-First Architecture**: 10 comprehensive pages targeting high-intent search queries (`clean my speaker`, `remove water from speaker`, `water eject sound`, etc.).
- **Zero Overhead**: Zero database, zero external APIs, zero tracking cookies, zero heavy icon dependencies.
- **Accessible & Mobile-First**: Touch targets tailored for single-hand mobile use, ARIA live state announcements, high-contrast WCAG 2.1 AA design.

---

## Local Development & Build

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## Google Search Console Readiness & Verification Guide

To index and rank `cleanmyspeaker.net` in Google Search:

### 1. Deploy to Production
Deploy the repository to Vercel, Cloudflare Pages, or any modern hosting platform with custom domain `https://cleanmyspeaker.net`. Ensure HTTPS is enforced with automatic SSL certificate renewal.

### 2. Add Property to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** property and enter `cleanmyspeaker.net`.
3. Verify ownership via DNS TXT record with your domain registrar.
4. Alternatively, use HTML tag verification or file upload.

### 3. Submit XML Sitemap
1. Navigate to **Sitemaps** in the Search Console navigation menu.
2. Enter `sitemap.xml` (the file is automatically served dynamically at `https://cleanmyspeaker.net/sitemap.xml`).
3. Click **Submit**. Verify that Google acknowledges all 11 indexed URLs with status `Success`.

### 4. Test URL Inspection & Request Indexing
1. Use the **URL Inspection** bar at the top of Search Console and test `https://cleanmyspeaker.net/`.
2. Click **Test Live URL** to confirm Googlebot renders the server-rendered HTML and schema correctly.
3. Click **Request Indexing** for priority crawling.

### 5. Monitor Core Web Vitals
Check the **Core Web Vitals** report in Search Console. Because Clean My Speaker contains no heavy client-side libraries or blocking scripts, LCP, INP, and CLS will benchmark in the "Good" range.

---

## Project Structure
```
cleanmyspeaker/
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Global Root Layout & Schema
│   │   ├── page.tsx                       # Homepage & Clean My Speaker Tool
│   │   ├── sitemap.ts                     # Dynamic XML Sitemap
│   │   ├── robots.ts                      # robots.txt Crawl Directive
│   │   ├── how-it-works/page.tsx          # Sound Wave Physics & Diaphragm Guide
│   │   ├── remove-water-from-phone-speaker/page.tsx # Emergency Water Removal Manual
│   │   ├── iphone-speaker-cleaner/page.tsx# iPhone Specific Guide & Tool
│   │   ├── android-speaker-cleaner/page.tsx# Android Specific Guide & Tool
│   │   ├── speaker-test/page.tsx          # Interactive Audio Diagnostic Lab
│   │   ├── speaker-cleaning-guide/page.tsx# Dust & Physical Maintenance Manual
│   │   ├── faq/page.tsx                   # Expanded 14+ Question Knowledge Base
│   │   ├── about/page.tsx                 # Project Mission & Independence Notice
│   │   ├── contact/page.tsx               # Support & Compatibility Inquiries
│   │   └── privacy-policy/page.tsx        # Zero Data Collection Policy
│   ├── components/
│   │   ├── Header.tsx                     # Responsive Navigation & Brand Bar
│   │   ├── Footer.tsx                     # Rich Footer with Internal Link Matrix
│   │   ├── SpeakerCleaner.tsx             # Primary Interactive Web Audio Tool
│   │   ├── SpeakerTester.tsx              # Interactive Diagnostic Lab
│   │   ├── FAQAccordion.tsx               # Accessible Accordion with JSON-LD
│   │   ├── SafetyNotice.tsx               # Clear Advisory Callout
│   │   └── Breadcrumbs.tsx                # Breadcrumb Navigation with Schema
│   └── lib/
│       ├── audioEngine.ts                 # Native Web Audio API Class
│       ├── constants.ts                   # Modes, Frequencies, & Site Metadata
│       └── types.ts                       # TypeScript Definitions
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Editorial & Safety Policy
Clean My Speaker is an independent utility. Sound vibrations can dislodge surface moisture beads from micro-perforated grilles, but cannot reverse internal hardware damage or corroded electronics. Always observe safe device drying recommendations for submerged hardware.
