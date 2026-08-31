import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Clean My Speaker – Clean Your Phone Speaker Online',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Clean my speaker online with a browser-based sound tool designed to help move water and moisture from your phone speaker. No app required.',
  keywords: [
    'clean my speaker',
    'clean my speaker online',
    'clean phone speaker',
    'clean my phone speaker',
    'speaker cleaner',
    'speaker cleaner online',
    'phone speaker cleaner',
    'remove water from speaker',
    'remove water from phone speaker',
    'water eject speaker',
    'water eject sound',
    'speaker cleaning sound',
    'sound to remove water from speaker',
    'clean iPhone speaker',
    'iPhone speaker cleaner',
    'clean Android speaker',
    'Android speaker cleaner',
    'phone speaker water removal',
    'remove moisture from speaker',
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
    title: 'Clean My Speaker – Clean Your Phone Speaker Online',
    description:
      'Clean my speaker online with a browser-based sound tool designed to help move water and moisture from your phone speaker. No app required.',
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'Clean My Speaker - Water Eject & Speaker Cleaner Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean My Speaker – Clean Your Phone Speaker Online',
    description:
      'Play specially calibrated sound waves directly in your browser to help push out trapped moisture and restore muffled phone sound.',
    images: [`${SITE_URL}/og-image.svg`],
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
    sameAs: ['https://github.com/michaelasmith211/Clean-My-Speaker'],
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
        <link rel="dns-prefetch" href="https://cleanmyspeaker.net" />
        <link rel="preconnect" href="https://cleanmyspeaker.net" crossOrigin="anonymous" />
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
      </body>
    </html>
  );
}
