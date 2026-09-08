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
  const alternates = getHreflangAlternates('/disclaimer');
  const canonical = getCanonicalUrl('/disclaimer', locale);

  return {
    title: t('disclaimer.metaTitle'),
    description: t('disclaimer.metaDesc'),
    alternates: { canonical, languages: alternates },
  };
}

export default function DisclaimerPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.disclaimer'), href: '/disclaimer' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />
      <article className="space-y-6 my-8 text-slate-300">
        <h1 className="text-3xl sm:text-4xl font-black text-white">{t('disclaimer.h1')}</h1>
        <p className="text-sm text-slate-400">{t('disclaimer.metaDesc')}</p>
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-sm leading-relaxed">
          <p>{t('common.disclaimerFooter')}</p>
          <p>Always turn off and unplug devices before handling them if significant liquid penetration has occurred.</p>
        </div>
        <RelatedGuides currentPath="/disclaimer" locale={locale} />
      </article>
    </main>
  );
}
