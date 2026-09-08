'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { LOCALES, DEFAULT_LOCALE } from '@/i18n/config';
import { LanguageGrid } from './LanguageGrid';

interface LanguageSelectorProps {
  currentLocale?: string;
  variant?: 'button' | 'dropdown' | 'inline' | 'compact';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLocale = DEFAULT_LOCALE,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const activeLocaleConfig = LOCALES[currentLocale] || LOCALES[DEFAULT_LOCALE];

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Lock body scroll when modal is open and auto-focus search input
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Quick popular shortcuts inside modal
  const popularCodes = ['en', 'es', 'fr', 'de', 'ar', 'hi', 'zh', 'ja', 'pt', 'ru'];

  const modalContent = isOpen && mounted ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/90 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[88vh] my-auto overflow-hidden text-slate-100"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-xl shrink-0">
                🌐
              </div>
              <div>
                <h2 id="language-modal-title" className="text-base sm:text-lg font-bold text-white leading-tight">
                  Select Language / Escolha o Idioma / Wählen Sie Ihre Sprache
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  27 supported languages with full native scripts • Current: <strong className="text-sky-300 font-semibold">{activeLocaleConfig.nativeName} ({activeLocaleConfig.englishName})</strong>
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close language selector"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition-colors border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search language by English name or native script (e.g. Spanish, हिन्दी, 日本語, Arabic)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 text-white placeholder-slate-400 text-xs sm:text-sm transition-all focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Tags (when not searching) */}
          {!searchQuery && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold mr-1 shrink-0">Popular:</span>
              {popularCodes.map((code) => {
                const loc = LOCALES[code];
                if (!loc) return null;
                const isCurrent = loc.code === currentLocale;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setSearchQuery(loc.englishName)}
                    className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors shrink-0 ${
                      isCurrent
                        ? 'bg-sky-500/20 border-sky-400 text-sky-200'
                        : 'bg-slate-800 border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white'
                    }`}
                  >
                    {loc.nativeName}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Scrollable Language Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900/50">
          <LanguageGrid
            currentLocale={currentLocale}
            searchQuery={searchQuery}
            onSelect={() => setIsOpen(false)}
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400">
          <span>⚡ Instant client-side switching • URL localized</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold transition-colors border border-slate-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className={`relative inline-block text-start ${className}`}>
        {/* Google-Style Language Trigger Pill Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label={`Select language. Currently active: ${activeLocaleConfig.nativeName}`}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-slate-800/90 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 hover:border-sky-400/80 text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 group"
        >
          <span className="text-base leading-none group-hover:rotate-12 transition-transform duration-200" aria-hidden="true">🌐</span>
          <span className="font-semibold text-slate-100">{activeLocaleConfig.nativeName}</span>
          <svg
            className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Render Dialog in Body Portal to eliminate stacking context clipping */}
      {mounted && typeof document !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  );
};

export default LanguageSelector;

