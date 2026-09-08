import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ManageCookiesButton } from '@/components/ManageCookiesButton';
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
  const alternates = getHreflangAlternates('/cookie-policy');
  const canonical = getCanonicalUrl('/cookie-policy', locale);

  return {
    title: t('cookiePolicy.metaTitle'),
    description: t('cookiePolicy.metaDesc'),
    alternates: { canonical, languages: alternates },
  };
}

export default function CookiePolicyPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.cookiePolicy'), href: '/cookie-policy' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />
      <article className="space-y-6 my-8 text-slate-300">
        <h1 className="text-3xl sm:text-4xl font-black text-white">{t('cookiePolicy.h1')}</h1>
        <p className="text-sm text-slate-400">{t('cookiePolicy.metaDesc')}</p>

        {/* Manage Cookies CTA */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-sky-500/30 text-center space-y-4">
          <h2 className="text-xl font-bold text-white">Manage Your Cookie Preferences</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            You can modify your consent preferences or withdraw consent for optional analytics cookies at any time.
          </p>
          <div className="pt-2">
            <ManageCookiesButton />
          </div>
        </section>

        <RelatedGuides currentPath="/cookie-policy" locale={locale} />
      </article>
    </main>
  );
}
