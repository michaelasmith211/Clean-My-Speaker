'use client';

import React, { useState, useEffect, useRef } from 'react';
import { LOCALES, DEFAULT_LOCALE } from '@/i18n/config';
import { LanguageGrid } from './LanguageGrid';

interface LanguageSelectorProps {
  currentLocale?: string;
  variant?: 'button' | 'dropdown' | 'inline';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLocale = DEFAULT_LOCALE,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const activeLocaleConfig = LOCALES[currentLocale] || LOCALES[DEFAULT_LOCALE];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`relative inline-block text-start ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`Change language, current language: ${activeLocaleConfig.nativeName}`}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-sky-400 text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        <span className="text-base" aria-hidden="true">🌐</span>
        <span>{activeLocaleConfig.nativeName}</span>
        <svg
          className="w-3.5 h-3.5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accessible Language Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="language-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            ref={modalRef}
            className="bg-slate-50 border border-slate-200 rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto text-slate-900"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">🌐</span>
                <div>
                  <h2 id="language-modal-title" className="text-lg sm:text-xl font-bold text-slate-900">
                    Select Language / Escolha o Idioma / Wählen Sie Ihre Sprache
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Choose from 27 supported languages. Current: <strong className="text-slate-800">{activeLocaleConfig.nativeName}</strong>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close language selector"
                className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900 flex items-center justify-center text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                ✕
              </button>
            </div>

            {/* 3-Column Language Grid */}
            <LanguageGrid currentLocale={currentLocale} onSelect={() => setIsOpen(false)} />

            {/* Modal Footer */}
            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
