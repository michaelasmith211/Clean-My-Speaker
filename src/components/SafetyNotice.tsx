import React from 'react';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';

interface SafetyNoticeProps {
  locale?: string;
}

export const SafetyNotice: React.FC<SafetyNoticeProps> = ({ locale = DEFAULT_LOCALE }) => {
  const { t } = getTranslations(locale);

  return (
    <aside aria-label="Speaker Cleaning Safety Notice" className="w-full max-w-xl mx-auto my-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm text-start">
      <div className="flex items-start gap-3">
        <span className="text-amber-400 text-lg sm:text-xl shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
        <div className="space-y-1">
          <p className="font-bold text-amber-300">{t('tool.safetyTitle')}</p>
          <ul className="list-disc list-inside space-y-0.5 text-xs text-amber-200/80">
            <li>{t('tool.safetyRule1')}</li>
            <li>{t('tool.safetyRule2')}</li>
            <li>{t('tool.safetyRule3')}</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SafetyNotice;

