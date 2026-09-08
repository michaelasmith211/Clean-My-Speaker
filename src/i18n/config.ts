export type LocaleDirection = 'ltr' | 'rtl';

export interface LocaleConfig {
  code: string;
  nativeName: string;
  englishName: string;
  direction: LocaleDirection;
  enabled: boolean;
}

export const DEFAULT_LOCALE = 'en';

export const LOCALES: Record<string, LocaleConfig> = {
  en: { code: 'en', nativeName: 'English', englishName: 'English', direction: 'ltr', enabled: true },
  es: { code: 'es', nativeName: 'Español', englishName: 'Spanish', direction: 'ltr', enabled: true },
  fr: { code: 'fr', nativeName: 'Français', englishName: 'French', direction: 'ltr', enabled: true },
  de: { code: 'de', nativeName: 'Deutsch', englishName: 'German', direction: 'ltr', enabled: true },
  pt: { code: 'pt', nativeName: 'Português', englishName: 'Portuguese', direction: 'ltr', enabled: true },
  it: { code: 'it', nativeName: 'Italiano', englishName: 'Italian', direction: 'ltr', enabled: true },
  hi: { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', direction: 'ltr', enabled: true },
  mr: { code: 'mr', nativeName: 'मराठी', englishName: 'Marathi', direction: 'ltr', enabled: true },
  bn: { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali', direction: 'ltr', enabled: true },
  ar: { code: 'ar', nativeName: 'العربية', englishName: 'Arabic', direction: 'rtl', enabled: true },
  ru: { code: 'ru', nativeName: 'Русский', englishName: 'Russian', direction: 'ltr', enabled: true },
  ja: { code: 'ja', nativeName: '日本語', englishName: 'Japanese', direction: 'ltr', enabled: true },
  ko: { code: 'ko', nativeName: '한국어', englishName: 'Korean', direction: 'ltr', enabled: true },
  zh: { code: 'zh', nativeName: '中文', englishName: 'Chinese', direction: 'ltr', enabled: true },
  tr: { code: 'tr', nativeName: 'Türkçe', englishName: 'Turkish', direction: 'ltr', enabled: true },
  id: { code: 'id', nativeName: 'Bahasa Indonesia', englishName: 'Indonesian', direction: 'ltr', enabled: true },
  nl: { code: 'nl', nativeName: 'Nederlands', englishName: 'Dutch', direction: 'ltr', enabled: true },
  pl: { code: 'pl', nativeName: 'Polski', englishName: 'Polish', direction: 'ltr', enabled: true },
  sv: { code: 'sv', nativeName: 'Svenska', englishName: 'Swedish', direction: 'ltr', enabled: true },
  da: { code: 'da', nativeName: 'Dansk', englishName: 'Danish', direction: 'ltr', enabled: true },
  fi: { code: 'fi', nativeName: 'Suomi', englishName: 'Finnish', direction: 'ltr', enabled: true },
  no: { code: 'no', nativeName: 'Norsk bokmål', englishName: 'Norwegian', direction: 'ltr', enabled: true },
  cs: { code: 'cs', nativeName: 'Čeština', englishName: 'Czech', direction: 'ltr', enabled: true },
  el: { code: 'el', nativeName: 'Ελληνικά', englishName: 'Greek', direction: 'ltr', enabled: true },
  he: { code: 'he', nativeName: 'עברית', englishName: 'Hebrew', direction: 'rtl', enabled: true },
  fa: { code: 'fa', nativeName: 'فارسی', englishName: 'Persian', direction: 'rtl', enabled: true },
  ur: { code: 'ur', nativeName: 'اردو', englishName: 'Urdu', direction: 'rtl', enabled: true },
};

export const SUPPORTED_LOCALES = Object.keys(LOCALES);

export function isLocaleSupported(locale: string): boolean {
  return Boolean(LOCALES[locale]?.enabled);
}

export function getLocaleDirection(locale: string): LocaleDirection {
  return LOCALES[locale]?.direction || 'ltr';
}

export function isRTL(locale: string): boolean {
  return getLocaleDirection(locale) === 'rtl';
}

export function getLocaleConfig(locale: string): LocaleConfig {
  return LOCALES[locale] || LOCALES[DEFAULT_LOCALE];
}

export function getLocaleStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}
