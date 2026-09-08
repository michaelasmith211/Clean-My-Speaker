import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
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
  const alternates = getHreflangAlternates('/how-it-works');
  const canonical = getCanonicalUrl('/how-it-works', locale);

  return {
    title: t('howItWorks.metaTitle'),
    description: t('howItWorks.metaDesc'),
    alternates: { canonical, languages: alternates },
    openGraph: { title: t('howItWorks.metaTitle'), description: t('howItWorks.metaDesc'), url: canonical },
  };
}

export default function HowItWorksPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.howItWorks'), href: '/how-it-works' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <header className="space-y-4 my-8">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          Acoustic Physics &amp; Sound Science
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          {t('howItWorks.h1')}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {t('howItWorks.sub')}
        </p>
      </header>

      <div className="my-8 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
        <Image
          src="/images/how-clean-my-speaker-works-infographic.jpg"
          alt={t('howItWorks.h1')}
          width={1024}
          height={576}
          className="w-full h-auto object-cover"
        />
      </div>

      <ShareButtons locale={locale} />
      <RelatedGuides currentPath="/how-it-works" locale={locale} />
    </main>
  );
}
