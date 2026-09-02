'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
}

const COOKIE_STORAGE_KEY = 'cms_cookie_consent_v1';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Update Google Consent Mode based on preferences
  const updateGoogleConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      });
    }
  };

  useEffect(() => {
    // Check existing stored consent
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        setAnalyticsConsent(parsed.analytics ?? true);
        setMarketingConsent(parsed.marketing ?? false);
        updateGoogleConsent(parsed.analytics ?? true, parsed.marketing ?? false);
      } else {
        // First-time visit: display banner
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }

    // Listen for external trigger to reopen settings (e.g. from Footer or Cookie Policy)
    const handleOpenSettings = () => {
      setShowModal(true);
    };

    window.addEventListener('open-cookie-preferences', handleOpenSettings);
    return () => {
      window.removeEventListener('open-cookie-preferences', handleOpenSettings);
    };
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const preferences: CookiePreferences = {
      essential: true,
      analytics,
      marketing,
      savedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // Ignore localStorage errors
    }

    updateGoogleConsent(analytics, marketing);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    setAnalyticsConsent(true);
    setMarketingConsent(true);
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    setAnalyticsConsent(false);
    setMarketingConsent(false);
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(analyticsConsent, marketingConsent);
  };

  return (
    <>
      {/* Floating Bottom Banner */}
      {showBanner && !showModal && (
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-950/95 backdrop-blur-xl border-t border-sky-500/30 shadow-2xl animate-fade-in"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍪</span>
                <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  We respect your privacy &amp; global cookie standards
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Clean My Speaker uses strictly essential cookies for core functionality and optional anonymous analytics to measure performance and improve sound cleaning tools. You can customize your preferences or read our{' '}
                <Link
                  href="/cookie-policy"
                  className="text-sky-400 hover:text-sky-300 underline font-semibold transition-colors"
                >
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy-policy"
                  className="text-sky-400 hover:text-sky-300 underline font-semibold transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto pt-2 md:pt-0">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
              >
                ⚙️ Customize
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-600 transition-colors"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-sky-500/25 transition-transform hover:scale-105"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Detailed Cookie Preferences Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
        >
          <div className="bg-slate-900 border border-sky-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚙️</span>
                <h3 id="cookie-modal-title" className="text-lg font-bold text-white">
                  Cookie &amp; Privacy Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Configure which cookies you allow us to use. Essential cookies are required for security and core navigation and cannot be switched off.
            </p>

            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">Strictly Essential Cookies</span>
                    <span className="px-2 py-0.5 rounded-full bg-sky-950 text-sky-400 text-[10px] font-semibold border border-sky-500/30">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Necessary for network security (Cloudflare), CSRF protection, and storing your cookie preferences. No personal information is logged.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  className="w-5 h-5 rounded accent-sky-500 cursor-not-allowed opacity-80 mt-1"
                  aria-label="Essential cookies cannot be disabled"
                />
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">Performance &amp; Analytics (GA4)</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Helps us understand which audio frequencies and device guides are most helpful through aggregated, anonymized usage telemetry.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="analytics-toggle"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="w-5 h-5 rounded accent-sky-500 cursor-pointer mt-1"
                  aria-label="Toggle analytics cookies"
                />
              </div>

              {/* Functional / Advertising */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">Marketing &amp; Personalization</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Used to display relevant content recommendations and support the free maintenance of the audio utility.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="marketing-toggle"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="w-5 h-5 rounded accent-sky-500 cursor-pointer mt-1"
                  aria-label="Toggle marketing cookies"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800">
              <Link
                href="/cookie-policy"
                className="text-xs text-sky-400 hover:underline font-semibold"
              >
                Read full Cookie Policy →
              </Link>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold shadow-md transition-transform hover:scale-105"
                >
                  Save Choices
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
