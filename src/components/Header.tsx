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
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Brand Logo */}
          <Link
            href={homePath}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1 shrink-0"
            aria-label={`${t('common.siteName')} - ${t('nav.home')}`}
          >
            <Image
              src="/icon.png"
              alt={t('common.siteName')}
              width={34}
              height={34}
              priority
              className="rounded-xl shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-sky-300 transition-colors leading-tight">
                {t('common.siteName')}
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold hidden sm:inline-block leading-tight">
                {t('tool.badge')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.slice(1, 6).map((item) => {
              const isActive = pathname === item.href || pathname === item.href.replace(/\/$/, '');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar: Language Selector + Clean Now CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Selector Modal Trigger */}
            <LanguageSelector currentLocale={locale} />

            <Link
              href={cleanNowPath}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/25 transition-all hover:scale-105 shrink-0"
            >
              {t('nav.cleanNow')}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-fade-in">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || pathname === item.href.replace(/\/$/, '');
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-500/20 text-sky-300 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
