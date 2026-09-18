'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getLocalizedPath } from '@/i18n/locale-utils';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  locale?: string;
}

export const Header: React.FC<HeaderProps> = ({ locale = DEFAULT_LOCALE }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || '/';
  const { t } = getTranslations(locale);

  const navLinks = [
    { name: t('nav.home'), href: getLocalizedPath('/', locale) },
    { name: t('nav.tools') || 'Tools', href: getLocalizedPath('/tools', locale) },
    { name: t('nav.howItWorks'), href: getLocalizedPath('/how-it-works', locale) },
    { name: t('nav.removeWater'), href: getLocalizedPath('/remove-water-from-phone-speaker', locale) },
    { name: t('nav.iphone'), href: getLocalizedPath('/iphone-speaker-cleaner', locale) },
    { name: t('nav.android'), href: getLocalizedPath('/android-speaker-cleaner', locale) },
    { name: t('nav.test'), href: getLocalizedPath('/speaker-test', locale) },
    { name: t('nav.guide'), href: getLocalizedPath('/speaker-cleaning-guide', locale) },
    { name: t('nav.faq'), href: getLocalizedPath('/faq', locale) },
  ];

  const homePath = getLocalizedPath('/', locale);
  const cleanNowPath = `${homePath}#tool`;

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/90 shadow-sm transition-colors">
      {/* Google-Inspired Top Brand Accent Line */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Brand Logo & Title */}
          <Link
            href={homePath}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-full p-1 shrink-0"
            aria-label={`${t('common.siteName')} - ${t('nav.home')}`}
          >
            <div className="relative">
              <Image
                src="/icon.svg"
                alt={t('common.siteName')}
                width={38}
                height={38}
                priority
                className="rounded-xl shadow-lg shadow-sky-500/25 group-hover:scale-105 group-hover:shadow-sky-400/40 transition-all duration-300 shrink-0"
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-slate-900 animate-pulse" title="Online" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-sky-300 transition-colors leading-tight">
                {t('common.siteName')}
              </span>
              <span className="text-[10px] text-sky-400/90 tracking-wider uppercase font-semibold hidden sm:inline-block leading-tight">
                {t('tool.badge')}
              </span>
            </div>
          </Link>

          {/* Desktop Google Material-Style Navigation Pills */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-800/40 p-1 rounded-full border border-slate-700/50" aria-label="Main Navigation">
            {navLinks.slice(0, 6).map((item) => {
              const isActive = pathname === item.href || pathname === item.href.replace(/\/$/, '');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all ${
                    isActive
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar: Language Selector + Clean Now CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Google Translate Style Language Selector Modal Trigger */}
            <LanguageSelector currentLocale={locale} />

            {/* Google-Style CTA Pill Button */}
            <Link
              href={cleanNowPath}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-md shadow-sky-500/25 transition-all hover:scale-[1.03] active:scale-95 shrink-0"
            >
              <span>🔊</span>
              <span>{t('nav.cleanNow')}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 border border-slate-700/60"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-fade-in">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || pathname === item.href.replace(/\/$/, '');
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{item.name}</span>
                {isActive && <span className="text-sky-400 text-xs">● Active</span>}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;

