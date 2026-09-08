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
  const alternates = getHreflangAlternates('/privacy-policy');
  const canonical = getCanonicalUrl('/privacy-policy', locale);

  return {
    title: t('privacy.metaTitle'),
    description: t('privacy.metaDesc'),
    alternates: { canonical, languages: alternates },
  };
}

export default function PrivacyPolicyPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.privacy'), href: '/privacy-policy' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />
      <article className="space-y-6 my-8 text-slate-300">
        <h1 className="text-3xl sm:text-4xl font-black text-white">{t('privacy.h1')}</h1>
        <p className="text-sm text-slate-400">{t('privacy.metaDesc')}</p>
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-sm leading-relaxed">
          <p>Clean My Speaker is committed to user privacy. Our audio frequency generator executes 100% in your local web browser using the HTML5 Web Audio API. We never record audio or request microphone access.</p>
          <p>We comply with European GDPR, UK GDPR, and California CCPA/CPRA standards via Google Consent Mode v2.</p>
        </div>
        <RelatedGuides currentPath="/privacy-policy" locale={locale} />
      </article>
    </main>
  );
}
