'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { LOCALES, DEFAULT_LOCALE } from '@/i18n/config';
import { getLocalizedPath } from '@/i18n/locale-utils';

interface LanguageGridProps {
  currentLocale?: string;
  onSelect?: () => void;
  className?: string;
}

const LanguageGridContent: React.FC<LanguageGridProps> = ({
  currentLocale = DEFAULT_LOCALE,
  onSelect,
  className = '',
}) => {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const queryString = searchParams?.toString() ? `?${searchParams.toString()}` : '';

  const localesList = Object.values(LOCALES).filter((loc) => loc.enabled);

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
            className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all text-start group min-h-[48px] ${
              isSelected
                ? 'bg-sky-50 border-sky-500 text-sky-950 font-bold shadow-sm ring-1 ring-sky-500'
                : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-slate-50 text-slate-700 hover:text-slate-900 shadow-sm'
            }`}
            aria-current={isSelected ? 'true' : undefined}
          >
            <div className="flex flex-col">
              <span
                className={`text-sm sm:text-base leading-snug ${
                  isSelected ? 'font-bold text-slate-950' : 'font-medium text-slate-800 group-hover:text-slate-950'
                }`}
              >
                {loc.nativeName}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-normal mt-0.5">
                {loc.englishName}
              </span>
            </div>

            {isSelected && (
              <span className="text-sky-600 text-sm font-bold flex items-center justify-center ms-2" aria-hidden="true">
                ✓
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export const LanguageGrid: React.FC<LanguageGridProps> = (props) => {
  const localesList = Object.values(LOCALES).filter((loc) => loc.enabled);
  const fallback = (
    <div
      role="list"
      aria-label="Select Language"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 ${props.className || ''}`}
    >
      {localesList.map((loc) => (
        <div
          key={loc.code}
          className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white min-h-[48px]"
        >
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-medium text-slate-800">{loc.nativeName}</span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-normal mt-0.5">{loc.englishName}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Suspense fallback={fallback}>
      <LanguageGridContent {...props} />
    </Suspense>
  );
};

export default LanguageGrid;
