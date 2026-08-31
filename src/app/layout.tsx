import type { Metadata } from 'next';
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean My Speaker – Clean Your Phone Speaker Online',
    description:
      'Play specially calibrated sound waves directly in your browser to help push out trapped moisture and restore muffled phone sound.',
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
  alternates: {
    canonical: SITE_URL,
  },
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

  const jsonLdSoftwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Clean My Speaker Online Tool',
    operatingSystem: 'All (iOS, Android, Windows, macOS, Linux)',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    description:
      'Free browser-based Web Audio utility that generates low-frequency water eject sound vibrations to help expel moisture droplets from mobile speaker openings.',
  };

  return (
    <html lang="en" className="scroll-smooth bg-slate-950 text-slate-100">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
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
