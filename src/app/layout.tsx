import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Clean My Speaker – Fix My Speaker & Clean Phone Speaker Online',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Clean my speaker and fix my speaker sound online with our free browser tool. Eject trapped water, clear dust, and fix muffled audio on iPhone, Android, and laptops.',
  keywords: [
    'clean my speaker',
    'fix my speaker',
    'clean my speaker online',
    'fix my speaker sound',
    'clean phone speaker',
    'fix phone speaker',
    'fix muffled speaker',
    'speaker cleaner',
    'speaker cleaner online',
    'phone speaker cleaner',
    'fix phone speaker water',
    'remove water from speaker',
    'remove water from phone speaker',
    'water eject speaker',
    'water eject sound',
    'speaker cleaning sound',
    'sound to remove water from speaker',
    'clean iPhone speaker',
    'fix iPhone speaker',
    'iPhone speaker cleaner',
    'clean Android speaker',
    'fix Android speaker',
    'Android speaker cleaner',
    'phone speaker water removal',
    'fix muffled phone speaker',
    'speaker water remover',
  ],
  authors: [{ name: 'Clean My Speaker Team' }],
  creator: 'Clean My Speaker',
  publisher: 'Clean My Speaker',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Clean My Speaker – Fix My Speaker & Clean Phone Speaker Online',
    description:
      'Clean my speaker and fix my speaker sound online. Eject water and fix muffled phone audio with calibrated 165 Hz sound waves. 100% free, no app needed.',
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'Clean My Speaker & Fix My Speaker - Water Eject & Speaker Cleaner Online',
      },
      {
        url: `${SITE_URL}/images/how-to-clean-my-speaker-fix-sound.jpg`,
        width: 1024,
        height: 576,
        alt: 'How to Clean My Speaker & Fix My Speaker Sound',
      },
      {
        url: `${SITE_URL}/images/clean-my-speaker-fix-my-speaker-benefits.jpg`,
        width: 1024,
        height: 682,
        alt: 'Clean My Speaker & Fix My Speaker Benefits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean My Speaker – Clean & Fix Your Phone Speaker Online',
    description:
      'Play specially calibrated sound waves directly in your browser to eject trapped water, clean dust, and fix muffled phone sound.',
    images: [`${SITE_URL}/images/how-to-clean-my-speaker-fix-sound.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    headline: SITE_TAGLINE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description: 'Clean My Speaker provides free browser-based acoustic utilities for mobile devices.',
    sameAs: [
      'https://www.facebook.com/cleanmyspeaker',
      'https://x.com/cleanmyspeaker',
      'https://www.instagram.com/cleanmyspeaker',
      'https://www.youtube.com/@cleanmyspeaker',
      'https://www.pinterest.com/cleanmyspeaker',
      'https://github.com/michaelasmith211/Clean-My-Speaker',
    ],
  };

  const jsonLdSoftwareApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Clean My Speaker Online Tool',
    url: SITE_URL,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All (iOS, Android, Windows, macOS, Linux)',
    browserRequirements: 'Requires HTML5 Web Audio API support (Safari, Chrome, Firefox, Edge)',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1240',
      bestRating: '5',
      worstRating: '1',
    },
    description:
      'Free browser-based Web Audio utility that generates low-frequency water eject sound vibrations to help expel moisture droplets from mobile speaker openings.',
  };

  return (
    <html lang="en" className="scroll-smooth bg-slate-950 text-slate-100">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-sky-500 selection:text-slate-950 font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HT87NWEHNT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HT87NWEHNT', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
