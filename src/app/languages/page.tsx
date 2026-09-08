import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LanguageGrid } from '@/components/LanguageGrid';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getTranslations } from '@/i18n/getTranslations';
import { getHreflangAlternates } from '@/i18n/locale-utils';

export const metadata: Metadata = {
  title: 'Languages – Select Your Language | Clean My Speaker',
  description: 'Choose your language to access Clean My Speaker in 40 supported languages. Fast, browser-based phone speaker cleaner and water eject tool.',
  alternates: {
    canonical: 'https://cleanmyspeaker.net/languages/',
    languages: getHreflangAlternates('/languages'),
  },
  openGraph: {
    title: 'Languages – Select Your Language | Clean My Speaker',
    description: 'Choose your language to access Clean My Speaker in 40 supported languages.',
    url: 'https://cleanmyspeaker.net/languages/',
  },
};

export default function LanguagesRootPage() {
  const { t } = getTranslations('en');
  const breadcrumbs = [{ name: 'Languages', href: '/languages' }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Breadcrumbs items={breadcrumbs} locale="en" />

        <header className="space-y-4 my-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <span>🌐</span> 40 Supported Languages
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
          <LanguageGrid currentLocale="en" />
        </section>
      </main>
      <Footer locale="en" />
    </div>
  );
}
