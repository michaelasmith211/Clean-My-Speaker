'use client';

import React, { useState, useEffect } from 'react';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
  variant?: 'card' | 'inline' | 'compact';
  locale?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  description,
  url,
  variant = 'card',
  locale = DEFAULT_LOCALE,
}) => {
  const { t } = getTranslations(locale);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || 'https://cleanmyspeaker.net');

  const finalTitle = title || t('home.metaTitle');
  const finalDescription = description || t('home.metaDesc');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const shareUrl = url || window.location.href;
      setCurrentUrl(shareUrl);
      if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
        setCanNativeShare(true);
      }
    }
  }, [url]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(finalTitle);

  const handleCopyLink = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: finalTitle,
          text: `${finalTitle} - ${finalDescription}`,
          url: currentUrl,
        });
      } catch {
        // Ignored
      }
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bgColor: 'bg-[#25D366] hover:bg-[#20ba59] text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.112.551 4.098 1.517 5.823l-1.611 5.885 6.046-1.586c1.674.914 3.593 1.439 5.632 1.439 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bgColor: 'bg-black hover:bg-slate-900 text-white',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bgColor: 'bg-[#1877F2] hover:bg-[#166fe5] text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      bgColor: 'bg-sky-600 hover:bg-sky-500 text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.94z" />
        </svg>
      ),
    },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex items-center flex-wrap gap-2 text-xs">
        <span className="text-slate-400 font-medium">{t('common.share')}:</span>
        {canNativeShare && (
          <button
            onClick={handleNativeShare}
            className="px-2.5 py-1 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors flex items-center gap-1 shadow-sm"
            aria-label="Share via native sheet"
          >
            <span>📱</span> {t('common.share')}
          </button>
        )}
        {shareLinks.slice(0, 3).map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-2.5 py-1 rounded-lg ${item.bgColor} transition-colors flex items-center gap-1 shadow-sm font-medium`}
            aria-label={`Share on ${item.name}`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.name}</span>
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1 shadow-sm"
          aria-label="Copy page link"
        >
          <span>{copied ? '✅' : '🔗'}</span>
          <span>{copied ? t('common.copied') : t('common.copyLink')}</span>
        </button>
      </div>
    );
  }

  return (
    <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-sky-950/40 border border-sky-500/30 shadow-2xl space-y-4 text-start">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-400 text-[11px] font-semibold uppercase tracking-wider">
            <span>✨</span> {t('common.share')}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {t('common.shareTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            {t('common.shareDesc')}
          </p>
        </div>

        {/* 1-Click Copy Link / Native Share */}
        <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
          {canNativeShare && (
            <button
              onClick={handleNativeShare}
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>📲</span> {t('common.share')}
            </button>
          )}
          <button
            onClick={handleCopyLink}
            className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow ${
              copied
                ? 'bg-emerald-600 text-white border-emerald-500 scale-105'
                : 'bg-slate-800/90 hover:bg-slate-700 text-white border-slate-700'
            }`}
          >
            <span>{copied ? '✅' : '📋'}</span>
            <span>{copied ? t('common.copied') : t('common.copyLink')}</span>
          </button>
        </div>
      </div>

      {/* Network Icons Grid */}
      <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 mr-1">{t('common.share')}:</span>
        {shareLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1.5 rounded-xl ${item.bgColor} text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
            aria-label={`Share Clean My Speaker on ${item.name}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShareButtons;
