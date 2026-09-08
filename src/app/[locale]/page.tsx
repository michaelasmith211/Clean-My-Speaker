import React from 'react';
import { Metadata } from 'next';
import { SafetyNotice } from '@/components/SafetyNotice';
import { ShareButtons } from '@/components/ShareButtons';
import { RelatedGuides } from '@/components/RelatedGuides';
import { FAQAccordion } from '@/components/FAQAccordion';
import { FAQItem } from '@/lib/types';
import { SpeakerCleaner } from '@/components/SpeakerCleaner';
import { DEFAULT_LOCALE, getLocaleStaticParams, isLocaleSupported } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getCanonicalUrl, getHreflangAlternates } from '@/i18n/locale-utils';

export function generateStaticParams() {
  return getLocaleStaticParams();
}

interface LocalePageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const alternates = getHreflangAlternates('/');
  const canonical = getCanonicalUrl('/', locale);

  return {
    title: t('home.metaTitle'),
    description: t('home.metaDesc'),
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      title: t('home.metaTitle'),
      description: t('home.metaDesc'),
      url: canonical,
      images: [
        {
          url: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
          width: 1024,
          height: 576,
          alt: t('home.metaTitle'),
        },
      ],
    },
  };
}

export default function LocalizedHomePage({ params }: LocalePageProps) {
  const locale = isLocaleSupported(params.locale) ? params.locale : DEFAULT_LOCALE;
  const { t } = getTranslations(locale);
  const canonicalUrl = getCanonicalUrl('/', locale);

  const homepageFaqs: FAQItem[] = [
    {
      question: t('faq.h1'),
      answer: t('faq.sub'),
    },
    {
      question: t('howItWorks.h1'),
      answer: t('howItWorks.sub'),
    },
    {
      question: t('removeWater.h1'),
      answer: t('removeWater.sub'),
    },
    {
      question: t('iphoneCleaner.h1'),
      answer: t('iphoneCleaner.sub'),
    },
    {
      question: t('androidCleaner.h1'),
      answer: t('androidCleaner.sub'),
    },
  ];

  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t('home.heroH1'),
    description: t('home.heroSub'),
    image: 'https://cleanmyspeaker.net/images/how-to-clean-my-speaker-fix-sound.jpg',
    totalTime: 'PT1M',
    tool: [
      {
        '@type': 'HowToTool',
        name: `${t('common.siteName')} (165 Hz Web Audio Tool)`,
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: t('home.step1Title'),
        text: t('home.step1Desc'),
        url: `${canonicalUrl}#tool`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: t('home.step2Title'),
        text: t('home.step2Desc'),
        url: `${canonicalUrl}#tool`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: t('home.step3Title'),
        text: t('home.step3Desc'),
        url: `${canonicalUrl}#tool`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: t('home.step4Title'),
        text: t('home.step4Desc'),
        url: `${canonicalUrl}#tool`,
      },
    ],
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: t('home.videoTitle'),
    description: t('home.videoDesc'),
    thumbnailUrl: 'https://img.youtube.com/vi/PmxN3frqKJY/maxresdefault.jpg',
    uploadDate: '2026-08-01T08:00:00+00:00',
    embedUrl: 'https://www.youtube.com/embed/PmxN3frqKJY',
    publisher: {
      '@type': 'Organization',
      name: t('common.siteName'),
      url: 'https://cleanmyspeaker.net/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cleanmyspeaker.net/icon.png',
      },
    },
  };

  return (
    <main className="min-h-screen text-start">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />

      {/* Hero Section with Tool Above the Fold */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-sky-400"></span>
          {t('tool.badge')}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight text-balance max-w-3xl mx-auto leading-tight">
          {t('home.heroH1')}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          {t('home.heroSub')}
        </p>

        {/* Immediate Audio Utility */}
        <div id="tool" className="mt-8 scroll-mt-24">
          <SpeakerCleaner locale={locale} />
        </div>

        {/* Safety / Practical advice under the tool */}
        <SafetyNotice />

        {/* Social Sharing Callout */}
        <div className="mt-8 max-w-2xl mx-auto">
          <ShareButtons variant="card" locale={locale} />
        </div>
      </section>

      {/* Quick Feature Tiles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t('home.whyChooseTitle')}
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            {t('home.whyChooseDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xl mb-4">
              💧
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t('home.feature1Title')}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('home.feature1Desc')}
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xl mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t('home.feature2Title')}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('home.feature2Desc')}
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xl mb-4">
              📱
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t('home.feature3Title')}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('home.feature3Desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Video: Watch How Clean My Speaker Works */}
      <section id="intro-video" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-900/90 border border-sky-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <span>🎬</span> {t('home.videoTitle')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t('home.videoTitle')}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t('home.videoDesc')}
            </p>
          </div>

          {/* 16:9 Responsive Video Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PmxN3frqKJY?si=AeWTwWh4JpMbk_Ki"
              title={t('home.videoTitle')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How It Works Steps Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How to Clean &amp; Fix Your Phone Speaker in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-sky-400 font-extrabold text-2xl mb-2 block">01</span>
            <h3 className="font-bold text-white text-base sm:text-lg mb-2">{t('home.step1Title')}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{t('home.step1Desc')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-sky-400 font-extrabold text-2xl mb-2 block">02</span>
            <h3 className="font-bold text-white text-base sm:text-lg mb-2">{t('home.step2Title')}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{t('home.step2Desc')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-sky-400 font-extrabold text-2xl mb-2 block">03</span>
            <h3 className="font-bold text-white text-base sm:text-lg mb-2">{t('home.step3Title')}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{t('home.step3Desc')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-sky-400 font-extrabold text-2xl mb-2 block">04</span>
            <h3 className="font-bold text-white text-base sm:text-lg mb-2">{t('home.step4Title')}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{t('home.step4Desc')}</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
          {t('home.faqHeading')}
        </h2>
        <FAQAccordion items={homepageFaqs} locale={locale} />
      </section>

      {/* Related Guides Hub */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RelatedGuides currentPath="/" locale={locale} />
      </section>
    </main>
  );
}
