import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocaleHtmlSync } from '@/components/LocaleHtmlSync';
import { getLocaleStaticParams, isLocaleSupported, isRTL, getLocaleConfig } from '@/i18n/config';
import { getHreflangAlternates, getCanonicalUrl } from '@/i18n/locale-utils';
import { getTranslations } from '@/i18n/getTranslations';

export function generateStaticParams() {
  return getLocaleStaticParams();
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!isLocaleSupported(locale)) {
    return {};
  }

  const { t } = getTranslations(locale);
  const alternates = getHreflangAlternates('/');
  const canonical = getCanonicalUrl('/', locale);
  const locConfig = getLocaleConfig(locale);

  return {
    title: {
      default: t('home.metaTitle'),
      template: `%s | ${t('common.siteName')}`,
    },
    description: t('home.metaDesc'),
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      locale: locConfig.code,
      title: t('home.metaTitle'),
      description: t('home.metaDesc'),
    },
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  if (!isLocaleSupported(locale)) {
    notFound();
  }

  const dir = isRTL(locale) ? 'rtl' : 'ltr';

  return (
    <div lang={locale} dir={dir} className="min-h-screen flex flex-col">
      <LocaleHtmlSync locale={locale} dir={dir} />
      <Header locale={locale} />
      <div className="flex-1">{children}</div>
      <Footer locale={locale} />
    </div>
  );
}
