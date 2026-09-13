import React from 'react';
import Link from 'next/link';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getLocalizedPath, getCleanPath } from '@/i18n/locale-utils';

interface RelatedGuidesProps {
  currentPath: string;
  locale?: string;
}

export const RelatedGuides: React.FC<RelatedGuidesProps> = ({ currentPath, locale = DEFAULT_LOCALE }) => {
  const { t } = getTranslations(locale);
  const cleanPath = getCleanPath(currentPath);

  const guides = [
    {
      title: t('common.siteName'),
      path: '',
      description: t('home.heroSub'),
      icon: '🔊',
      badge: '165 Hz',
    },
    {
      title: t('nav.test'),
      path: 'speaker-test',
      description: t('speakerTest.subtitle'),
      icon: '🎛️',
      badge: t('speakerTest.badge'),
    },
    {
      title: t('nav.howItWorks'),
      path: 'how-it-works',
      description: t('howItWorks.sub'),
      icon: '🔬',
      badge: t('nav.howItWorks'),
    },
    {
      title: t('nav.removeWater'),
      path: 'remove-water-from-phone-speaker',
      description: t('removeWater.sub'),
      icon: '💧',
      badge: t('nav.removeWater'),
    },
    {
      title: t('nav.iphone'),
      path: 'iphone-speaker-cleaner',
      description: t('iphoneCleaner.sub'),
      icon: '🍎',
      badge: 'iOS',
    },
    {
      title: 'AirPods Water Eject (165Hz)',
      path: 'airpods-water-eject',
      description: 'Eject trapped moisture from AirPods and AirPods Pro using calibrated 165 Hz sound waves. Fix muffled earbud audio instantly.',
      icon: '🎧',
      badge: 'AirPods 165Hz',
    },
    {
      title: t('nav.android'),
      path: 'android-speaker-cleaner',
      description: t('androidCleaner.sub'),
      icon: '🤖',
      badge: 'Android',
    },
    {
      title: t('tools.badge') || 'Audio Tools Suite',
      path: 'tools',
      description: t('tools.sub') || 'Complete suite of free browser-based audio tools: 165 Hz Water Ejector, Stereo Tester, and Phone Cleaners.',
      icon: '🎛️',
      badge: 'All Tools',
    },
    {
      title: t('nav.about') || 'About Clean My Speaker',
      path: 'about',
      description: t('about.sub') || 'Learn about Clean My Speaker: our mission to provide free, private, instant in-browser sound utilities.',
      icon: 'ℹ️',
      badge: 'About Us',
    },
    {
      title: t('nav.guide'),
      path: 'speaker-cleaning-guide',
      description: t('cleaningGuide.sub'),
      icon: '🧹',
      badge: t('nav.guide'),
    },
    {
      title: t('nav.faq'),
      path: 'faq',
      description: t('faq.sub'),
      icon: '❓',
      badge: 'FAQ',
    },
  ];

  const related = guides.filter((g) => g.path !== cleanPath).slice(0, 4);

  return (
    <section className="my-12 pt-8 border-t border-slate-800 text-start" aria-label="Related Guides & Tools">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t('nav.deviceGuides')} &amp; {t('nav.audioTools')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t('home.whyChooseDesc')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((guide) => {
          const targetUrl = guide.path ? getLocalizedPath(`/${guide.path}`, locale) : getLocalizedPath('/', locale);
          return (
            <Link
              key={guide.path}
              href={targetUrl}
              className="group p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-sky-500/50 transition-all hover:-translate-y-0.5 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-2xl" aria-hidden="true">{guide.icon}</span>
                  {guide.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-sky-950 border border-sky-500/30 text-sky-400 text-[10px] font-semibold tracking-wide uppercase">
                      {guide.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-100 group-hover:text-sky-300 transition-colors text-sm sm:text-base">
                  {guide.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                  {guide.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center text-xs font-semibold text-sky-400 group-hover:text-sky-300">
                <span>{t('nav.howItWorks')}</span>
                <span className="ms-1 group-hover:translate-x-1 transition-transform rtl:rotate-180">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedGuides;

