import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
import { FAQAccordion } from '@/components/FAQAccordion';
import { FAQItem } from '@/lib/types';
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
  const alternates = getHreflangAlternates('/faq');
  const canonical = getCanonicalUrl('/faq', locale);

  return {
    title: t('faq.metaTitle'),
    description: t('faq.metaDesc'),
    alternates: { canonical, languages: alternates },
    openGraph: { title: t('faq.metaTitle'), description: t('faq.metaDesc'), url: canonical },
  };
}

export default function FaqPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.faq'), href: '/faq' }];

  const faqs: FAQItem[] = [
    { question: t('faq.h1'), answer: t('faq.sub') },
    { question: t('howItWorks.h1'), answer: t('howItWorks.sub') },
    { question: t('removeWater.h1'), answer: t('removeWater.sub') },
    { question: t('iphoneCleaner.h1'), answer: t('iphoneCleaner.sub') },
    { question: t('androidCleaner.h1'), answer: t('androidCleaner.sub') },
    { question: t('cleaningGuide.h1'), answer: t('cleaningGuide.sub') },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <header className="space-y-4 my-8 text-center max-w-2xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          Knowledge Base &amp; FAQ
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          {t('faq.h1')}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {t('faq.sub')}
        </p>
      </header>

      <section className="my-8">
        <FAQAccordion items={faqs} locale={locale} />
      </section>

      <ShareButtons locale={locale} />
      <RelatedGuides currentPath="/faq" locale={locale} />
    </main>
  );
}
