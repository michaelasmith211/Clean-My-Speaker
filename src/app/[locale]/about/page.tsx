import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
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
  const { t } = getTranslations(locale);
  const alternates = getHreflangAlternates('/about');
  const canonical = getCanonicalUrl('/about', locale);

  return {
    title: t('about.metaTitle'),
    description: t('about.metaDesc'),
    alternates: { canonical, languages: alternates },
    openGraph: { title: t('about.metaTitle'), description: t('about.metaDesc'), url: canonical },
  };
}

export default function AboutPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.about'), href: '/about' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <article className="space-y-8 my-8 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            About Project &amp; Mission
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('about.h1')}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t('about.sub')}
          </p>
        </header>

        <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Our Core Principles</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li><strong>100% Free &amp; Open Access:</strong> Zero paywalls, no subscriptions, no forced app store installs.</li>
            <li><strong>Complete Privacy:</strong> All audio synthesis operates purely client-side via the HTML5 Web Audio API. Zero microphone access requested.</li>
            <li><strong>Acoustic Safety:</strong> Calibrated resonant frequencies designed to displace water without damaging speaker cones.</li>
            <li><strong>Global Accessibility:</strong> Available across 27 native languages and responsive across all smartphones, tablets, and laptops.</li>
          </ul>
        </section>

        <RelatedGuides currentPath="/about" locale={locale} />
      </article>
    </main>
  );
}
