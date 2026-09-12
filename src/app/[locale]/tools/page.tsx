import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { ShareButtons } from '@/components/ShareButtons';
import { DEFAULT_LOCALE, getLocaleStaticParams, isLocaleSupported } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getCanonicalUrl, getHreflangAlternates, getLocalizedPath } from '@/i18n/locale-utils';

export function generateStaticParams() {
  return getLocaleStaticParams();
}

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const alternates = getHreflangAlternates('/tools');
  const canonical = getCanonicalUrl('/tools', locale);

  return {
    title: t('tools.metaTitle'),
    description: t('tools.metaDesc'),
    alternates: { canonical, languages: alternates },
    openGraph: {
      title: t('tools.metaTitle'),
      description: t('tools.metaDesc'),
      url: canonical,
      images: [
        {
          url: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
          width: 1024,
          height: 576,
          alt: t('tools.metaTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('tools.metaTitle'),
      description: t('tools.metaDesc'),
      images: ['https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg'],
    },
  };
}

export default function LocalizedToolsPage({ params }: PageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const breadcrumbs = [{ name: t('nav.tools') || 'Tools Hub', href: '/tools' }];

  const tools = [
    {
      id: 'water-ejector',
      name: `${t('tool.badge')} (165 Hz)`,
      description: t('home.heroSub'),
      icon: '💧',
      badge: '165 Hz',
      path: '',
      hash: '#tool',
    },
    {
      id: 'speaker-test',
      name: t('nav.test'),
      description: t('speakerTest.subtitle'),
      icon: '🎛️',
      badge: t('speakerTest.badge'),
      path: 'speaker-test',
    },
    {
      id: 'iphone-cleaner',
      name: t('nav.iphone'),
      description: t('iphoneCleaner.sub'),
      icon: '🍎',
      badge: 'iOS',
      path: 'iphone-speaker-cleaner',
    },
    {
      id: 'android-cleaner',
      name: t('nav.android'),
      description: t('androidCleaner.sub'),
      icon: '🤖',
      badge: 'Android',
      path: 'android-speaker-cleaner',
    },
    {
      id: 'remove-water',
      name: t('nav.removeWater'),
      description: t('removeWater.sub'),
      icon: '🌊',
      badge: 'Water Removal',
      path: 'remove-water-from-phone-speaker',
    },
    {
      id: 'cleaning-guide',
      name: t('nav.guide'),
      description: t('cleaningGuide.sub'),
      icon: '🧹',
      badge: 'Guide',
      path: 'speaker-cleaning-guide',
    },
    {
      id: 'how-it-works',
      name: t('nav.howItWorks'),
      description: t('howItWorks.sub'),
      icon: '🔬',
      badge: 'Physics',
      path: 'how-it-works',
    },
    {
      id: 'faq',
      name: t('nav.faq'),
      description: t('faq.sub'),
      icon: '❓',
      badge: 'FAQ',
      path: 'faq',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-start w-full">
      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <article className="space-y-12 my-8">
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <span>🎛️</span> {t('tools.badge') || 'Audio Tools Suite'}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('tools.h1')}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t('tools.sub')}
          </p>
        </header>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((item) => {
            const targetUrl = item.path
              ? getLocalizedPath(`/${item.path}`, locale)
              : `${getLocalizedPath('/', locale)}${item.hash || ''}`;

            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition-all hover:-translate-y-1 flex flex-col justify-between shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                    <span className="px-2.5 py-1 rounded-full bg-sky-950 border border-sky-500/30 text-sky-400 text-[11px] font-bold tracking-wide uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <Link
                    href={targetUrl}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-sky-500 text-slate-200 hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-700 hover:border-sky-400 shadow group-hover:shadow-sky-500/20"
                  >
                    <span>{t('tools.openTool') || 'Open Tool'}</span>
                    <span className="group-hover:translate-x-1 transition-transform rtl:rotate-180">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Linking Trust Section */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold text-white">
            {t('nav.about')} &amp; {t('nav.privacy')}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t('common.clientSideProcessing')}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold">
            <Link
              href={getLocalizedPath('/about', locale)}
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 hover:border-sky-400 transition-colors"
            >
              {t('nav.about')} →
            </Link>
            <Link
              href={getLocalizedPath('/privacy-policy', locale)}
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 hover:border-sky-400 transition-colors"
            >
              {t('nav.privacy')} →
            </Link>
            <Link
              href={getLocalizedPath('/how-it-works', locale)}
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 hover:border-sky-400 transition-colors"
            >
              {t('nav.howItWorks')} →
            </Link>
          </div>
        </section>

        <ShareButtons
          title={t('tools.metaTitle')}
          description={t('tools.metaDesc')}
          url={getCanonicalUrl('/tools', locale)}
          locale={locale}
        />

        <RelatedGuides currentPath="/tools" locale={locale} />
      </article>
    </main>
  );
}
