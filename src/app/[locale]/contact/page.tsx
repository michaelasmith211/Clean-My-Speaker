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
  const alternates = getHreflangAlternates('/contact');
  const canonical = getCanonicalUrl('/contact', locale);

  return {
    title: t('contact.metaTitle'),
    description: t('contact.metaDesc'),
    alternates: { canonical, languages: alternates },
    openGraph: { title: t('contact.metaTitle'), description: t('contact.metaDesc'), url: canonical },
  };
}

export default function ContactPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.contact'), href: '/contact' }];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <article className="space-y-8 my-8 text-slate-300">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            User Support &amp; Feedback
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('contact.h1')}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t('contact.sub')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-white">General Support &amp; Audio Feedback</h2>
            <p className="text-sm text-slate-400">
              For calibration inquiries, browser bug reports, or partnership requests:
            </p>
            <p className="text-sky-400 font-mono text-sm font-semibold">
              support@cleanmyspeaker.net
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-white">Data Protection &amp; Privacy</h2>
            <p className="text-sm text-slate-400">
              For GDPR, CCPA, and cookie preference inquiries:
            </p>
            <p className="text-sky-400 font-mono text-sm font-semibold">
              privacy@cleanmyspeaker.net
            </p>
          </div>
        </div>

        <RelatedGuides currentPath="/contact" locale={locale} />
      </article>
    </main>
  );
}
