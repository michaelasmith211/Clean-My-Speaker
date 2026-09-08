import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LanguageGrid } from '@/components/LanguageGrid';
import { DEFAULT_LOCALE, getLocaleStaticParams, isLocaleSupported } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getCanonicalUrl, getHreflangAlternates } from '@/i18n/locale-utils';

export function generateStaticParams() {
  return getLocaleStaticParams();
}

interface LanguagesPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: LanguagesPageProps): Promise<Metadata> {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const alternates = getHreflangAlternates('/languages');
  const canonical = getCanonicalUrl('/languages', locale);

  return {
    title: t('languages.metaTitle'),
    description: t('languages.metaDesc'),
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      title: t('languages.metaTitle'),
      description: t('languages.metaDesc'),
      url: canonical,
    },
  };
}

export default function LanguagesPage({ params }: LanguagesPageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);

  const breadcrumbs = [{ name: t('common.languages'), href: '/languages' }];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <header className="space-y-4 my-8 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <span>🌐</span> 27 Supported Languages
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          {t('languages.h1')}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {t('languages.sub')}
        </p>
      </header>

      {/* 3-Column Language Directory Grid */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md space-y-6">
        <LanguageGrid currentLocale={locale} />
      </section>
    </main>
  );
}
