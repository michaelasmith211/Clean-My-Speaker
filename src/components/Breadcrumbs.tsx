import React from 'react';
import Link from 'next/link';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';
import { getLocalizedPath, getLocalizedUrl } from '@/i18n/locale-utils';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, locale = DEFAULT_LOCALE }) => {
  const { t } = getTranslations(locale);
  const homePath = getLocalizedPath('/', locale);
  const homeUrl = getLocalizedUrl('/', locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('common.home'),
        item: homeUrl,
      },
      ...items.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: crumb.name,
        item: getLocalizedUrl(crumb.href, locale),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-400">
        <ol className="flex items-center flex-wrap gap-1.5">
          <li>
            <Link href={homePath} className="hover:text-sky-400 transition-colors">
              {t('common.home')}
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            const itemLocalizedHref = getLocalizedPath(item.href, locale);
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                <span className="text-slate-600" aria-hidden="true">/</span>
                {isLast ? (
                  <span className="text-slate-200 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={itemLocalizedHref} className="hover:text-sky-400 transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
