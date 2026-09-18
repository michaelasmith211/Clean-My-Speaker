'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/lib/constants';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getLocalizedPath } from '@/i18n/locale-utils';

interface FooterProps {
  locale?: string;
}

export const Footer: React.FC<FooterProps> = ({ locale = DEFAULT_LOCALE }) => {
  const { t } = getTranslations(locale);

  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt={t('common.siteName')}
                width={36}
                height={36}
                className="rounded-xl shadow-md shadow-sky-500/20 ring-1 ring-slate-800 shrink-0"
              />
              <span className="font-bold text-white text-lg tracking-tight">
                {t('common.siteName')}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t('common.tagline')}
            </p>
            <p className="text-xs text-slate-400">
              {t('common.clientSideProcessing')}
            </p>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                {t('nav.connectWithUs')}
              </span>
              <div className="flex flex-wrap items-center gap-2" aria-label="Social media profiles">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 text-xs font-medium transition-colors flex items-center gap-1.5"
                    aria-label={`Follow Clean My Speaker on ${item.name}`}
                  >
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Tools */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider">{t('nav.audioTools')}</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={getLocalizedPath('/', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/tools', locale)} className="hover:text-sky-300 transition-colors text-sky-400 font-semibold flex items-center gap-1">
                  <span>🎛️</span> {t('nav.tools') || 'Audio Tools Suite'}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/speaker-test', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.test')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/how-it-works', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.howItWorks')}
                </Link>
              </li>
              <li>
                <Link href={`${getLocalizedPath('/', locale)}#tool`} className="hover:text-sky-300 transition-colors">
                  {t('tool.badge')} (165Hz)
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/languages', locale)} className="hover:text-sky-300 transition-colors text-sky-400 font-medium flex items-center gap-1">
                  <span>🌐</span> {t('common.allLanguages')} (40)
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider">{t('nav.deviceGuides')}</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={getLocalizedPath('/remove-water-from-phone-speaker', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.removeWater')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/iphone-speaker-cleaner', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.iphone')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/airpods-water-eject', locale)} className="hover:text-sky-300 transition-colors text-sky-400 font-medium">
                  AirPods Water Eject (165Hz)
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/android-speaker-cleaner', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.android')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/speaker-cleaning-guide', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.guide')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider">{t('nav.information')}</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={getLocalizedPath('/faq', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/about', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/contact', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/privacy-policy', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.privacy')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/terms-of-service', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.terms')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/disclaimer', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.disclaimer')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/cookie-policy', locale)} className="hover:text-sky-300 transition-colors">
                  {t('nav.cookiePolicy')}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookieSettings}
                  className="hover:text-sky-300 transition-colors text-left flex items-center gap-1 text-sky-400 font-medium"
                  aria-label="Open cookie preferences modal"
                >
                  <span>🍪</span> {t('common.cookieNotice')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 {t('common.siteName')} (cleanmyspeaker.net). {t('common.allRightsReserved')}</p>
          <p className="text-center md:text-right text-xs text-slate-400 max-w-xl">
            {t('common.disclaimerFooter')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
