'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, DEFAULT_LOCALE } from '@/i18n/config';
import { getLocalizedPath } from '@/i18n/locale-utils';

interface LanguageGridProps {
  currentLocale?: string;
  onSelect?: () => void;
  className?: string;
  searchQuery?: string;
}

export const LanguageGrid: React.FC<LanguageGridProps> = ({
  currentLocale = DEFAULT_LOCALE,
  onSelect,
  className = '',
  searchQuery = '',
}) => {
  const pathname = usePathname() || '/';
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      setQueryString(window.location.search);
    }
  }, []);

  const query = searchQuery.trim().toLowerCase();
  const localesList = Object.values(LOCALES)
    .filter((loc) => loc.enabled)
    .filter((loc) => {
      if (!query) return true;
      return (
        loc.nativeName.toLowerCase().includes(query) ||
        loc.englishName.toLowerCase().includes(query) ||
        loc.code.toLowerCase().includes(query)
      );
    });

  if (localesList.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p className="text-base font-medium">No languages match &ldquo;{searchQuery}&rdquo;</p>
        <p className="text-xs text-slate-500 mt-1">Try searching by English name, native script, or language code.</p>
      </div>
    );
  }

  return (
    <div
      role="list"
      aria-label="Select Language"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 ${className}`}
    >
      {localesList.map((loc) => {
        const isSelected = loc.code === currentLocale;
        const targetPath = `${getLocalizedPath(pathname, loc.code)}${queryString}`;

        return (
          <Link
            key={loc.code}
            href={targetPath}
            onClick={onSelect}
            role="listitem"
            lang={loc.code}
            dir={loc.direction}
            className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all text-start group min-h-[52px] ${
              isSelected
                ? 'bg-sky-500/15 border-sky-400 text-white font-bold shadow-md shadow-sky-500/10 ring-1 ring-sky-400'
                : 'bg-slate-800/80 border-slate-700/80 hover:border-sky-400/60 hover:bg-slate-750 text-slate-200 hover:text-white shadow-sm'
            }`}
            aria-current={isSelected ? 'true' : undefined}
          >
            <div className="flex flex-col min-w-0 pr-2">
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm sm:text-base leading-snug truncate ${
                    isSelected ? 'font-bold text-sky-300' : 'font-medium text-slate-100 group-hover:text-sky-200'
                  }`}
                >
                  {loc.nativeName}
                </span>
                {loc.direction === 'rtl' && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30 shrink-0">
                    RTL
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-400 font-normal mt-0.5 truncate">
                {loc.englishName} ({loc.code.toUpperCase()})
              </span>
            </div>

            {isSelected ? (
              <span className="w-6 h-6 rounded-full bg-sky-500 text-slate-950 text-xs font-black flex items-center justify-center ms-2 shrink-0" aria-hidden="true">
                ✓
              </span>
            ) : (
              <span className="text-slate-500 group-hover:text-sky-400 transition-colors text-xs font-semibold ms-2 shrink-0">
                →
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageGrid;

