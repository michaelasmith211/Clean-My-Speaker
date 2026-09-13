import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
import { AirPodsCleaner } from '@/components/AirPodsCleaner';
import { DEFAULT_LOCALE, getLocaleStaticParams, isLocaleSupported } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getCanonicalUrl, getHreflangAlternates } from '@/i18n/locale-utils';

export function generateStaticParams() {
  return getLocaleStaticParams();
}

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = getHreflangAlternates('/airpods-water-eject');
  const canonical = getCanonicalUrl('/airpods-water-eject', locale);

  return {
    title: 'AirPods Water Eject Sound 165Hz – Eject Water from AirPods Online',
    description:
      'Play 165 Hz water eject sound waves to expel trapped water from AirPods and AirPods Pro. Instant browser tool to remove moisture and fix muffled sound.',
    alternates: { canonical, languages: alternates },
    openGraph: {
      title: 'AirPods Water Eject Sound 165Hz – Eject Water from AirPods Online',
      description: 'Eject water from AirPods and fix muffled sound with calibrated 165 Hz sound waves.',
      url: canonical,
    },
  };
}

export default function LocalizedAirPodsWaterEjectPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [
    { name: t('nav.tools') || 'Tools', href: '/tools' },
    { name: 'AirPods Water Eject (165Hz)', href: '/airpods-water-eject' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <header className="space-y-4 my-8">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          AirPods 165 Hz Acoustic Ejection
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          AirPods Water Eject Sound (165Hz)
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Eject water and clear muffled sound from Apple AirPods, AirPods Pro, and AirPods Max with 165 Hz sound vibrations directly in your browser.
        </p>
      </header>

      {/* Interactive Tool */}
      <div className="my-8">
        <AirPodsCleaner />
      </div>

      {/* Critical Warnings */}
      <div className="my-8 p-6 rounded-3xl bg-rose-950/40 border-2 border-rose-500/50 space-y-3">
        <h2 className="text-xl font-bold text-rose-400 flex items-center gap-2">
          <span>⚠️</span> Critical Safety: Do NOT Put Wet AirPods in Rice or Heat
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Raw rice releases fine starch dust that enters the microscopic speaker mesh, combines with water into a hardened paste, and permanently destroys sound volume. Hairdryers and heat guns warp the acoustic diaphragm and can cause the internal lithium coin battery to fail. Use 165 Hz acoustic ejection and natural air drying only.
        </p>
      </div>

      <ShareButtons locale={locale} />
      <RelatedGuides currentPath="/airpods-water-eject" locale={locale} />
    </main>
  );
}
