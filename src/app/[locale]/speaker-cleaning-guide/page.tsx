import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
import { DEFAULT_LOCALE, getLocaleStaticParams, isLocaleSupported } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getCanonicalUrl, getHreflangAlternates, getLocalizedPath } from '@/i18n/locale-utils';

export function generateStaticParams() {
  return getLocaleStaticParams();
}

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const alternates = getHreflangAlternates('/speaker-cleaning-guide');
  const canonical = getCanonicalUrl('/speaker-cleaning-guide', locale);

  return {
    title: t('cleaningGuide.metaTitle'),
    description: t('cleaningGuide.metaDesc'),
    alternates: { canonical, languages: alternates },
    openGraph: { title: t('cleaningGuide.metaTitle'), description: t('cleaningGuide.metaDesc'), url: canonical },
  };
}

export default function CleaningGuidePage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.guide'), href: '/speaker-cleaning-guide' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <header className="space-y-4 my-8">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          Physical Care &amp; Maintenance Manual
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          {t('cleaningGuide.h1')}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {t('cleaningGuide.sub')}
        </p>
      </header>

      <div className="my-8 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
        <Image
          src="/images/benefits-of-clean-my-speaker-infographic.jpg"
          alt={t('cleaningGuide.h1')}
          width={1024}
          height={682}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Contextual Action Links */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 my-8">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          {t('nav.audioTools')} &amp; {t('nav.deviceGuides')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {t('common.clientSideProcessing')}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold">
          <Link
            href={getLocalizedPath('/', locale)}
            className="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold shadow transition-colors"
          >
            🔊 {t('nav.cleanNow')} (165 Hz)
          </Link>
          <Link
            href={getLocalizedPath('/remove-water-from-phone-speaker', locale)}
            className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-sky-300 border border-slate-800 hover:border-sky-400 transition-colors"
          >
            💧 {t('nav.removeWater')} →
          </Link>
          <Link
            href={getLocalizedPath('/tools', locale)}
            className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-sky-300 border border-slate-800 hover:border-sky-400 transition-colors"
          >
            🎛️ {t('nav.tools') || 'Tools'} →
          </Link>
          <Link
            href={getLocalizedPath('/about', locale)}
            className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-sky-400 transition-colors"
          >
            {t('nav.about')} →
          </Link>
          <Link
            href={getLocalizedPath('/privacy-policy', locale)}
            className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-sky-400 transition-colors"
          >
            {t('nav.privacy')} →
          </Link>
        </div>
      </section>

      <ShareButtons locale={locale} />
      <RelatedGuides currentPath="/speaker-cleaning-guide" locale={locale} />
    </main>
  );
}
