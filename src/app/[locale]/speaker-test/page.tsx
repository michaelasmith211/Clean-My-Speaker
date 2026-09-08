import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
import { DEFAULT_LOCALE, getLocaleStaticParams, isLocaleSupported } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getCanonicalUrl, getHreflangAlternates } from '@/i18n/locale-utils';

const SpeakerTester = dynamic(() => import('@/components/SpeakerTester'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl animate-pulse">
      <div className="h-6 w-48 bg-slate-800 rounded-full mx-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="h-20 bg-slate-800 rounded-2xl" />
        <div className="h-20 bg-slate-800 rounded-2xl" />
        <div className="h-20 bg-slate-800 rounded-2xl" />
      </div>
    </div>
  ),
});

export function generateStaticParams() {
  return getLocaleStaticParams();
}

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const alternates = getHreflangAlternates('/speaker-test');
  const canonical = getCanonicalUrl('/speaker-test', locale);

  return {
    title: t('speakerTest.title'),
    description: t('speakerTest.subtitle'),
    alternates: { canonical, languages: alternates },
    openGraph: { title: t('speakerTest.title'), description: t('speakerTest.subtitle'), url: canonical },
  };
}

export default function SpeakerTestPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.test'), href: '/speaker-test' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <header className="space-y-4 my-8 text-center max-w-2xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          {t('speakerTest.badge')}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          {t('speakerTest.title')}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {t('speakerTest.subtitle')}
        </p>
      </header>

      {/* Interactive Speaker Tester */}
      <div className="my-8">
        <SpeakerTester locale={locale} />
      </div>

      <ShareButtons locale={locale} />
      <RelatedGuides currentPath="/speaker-test" locale={locale} />
    </main>
  );
}
