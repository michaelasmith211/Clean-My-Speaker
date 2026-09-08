'use client';

import React, { useEffect } from 'react';

interface LocaleHtmlSyncProps {
  locale: string;
  dir: 'ltr' | 'rtl';
}

export const LocaleHtmlSync: React.FC<LocaleHtmlSyncProps> = ({ locale, dir }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = dir;
    }
  }, [locale, dir]);

  return null;
};

export default LocaleHtmlSync;
