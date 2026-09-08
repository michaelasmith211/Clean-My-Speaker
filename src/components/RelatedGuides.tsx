import React from 'react';
import Link from 'next/link';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getLocalizedPath } from '@/i18n/locale-utils';

interface GuideLink {
  title: string;
  href: string;
  description: string;
  icon: string;
  badge?: string;
}

interface RelatedGuidesProps {
  currentPath: string;
  locale?: string;
}

const ALL_GUIDES: GuideLink[] = [
  {
    title: 'Clean My Speaker Tool',
    href: '/',
    description: 'Instant 165 Hz water ejection tone to dislodge moisture droplets right from your browser.',
    icon: '🔊',
    badge: 'Popular Tool',
  },
  {
    title: 'Interactive Speaker Test',
    href: '/speaker-test',
    description: 'Test left/right stereo channel balance, diagnostic frequencies (100 Hz to 10 kHz), and distortion.',
    icon: '🎛️',
    badge: 'Diagnostic Lab',
  },
  {
    title: 'How It Works (Audio Physics)',
    href: '/how-it-works',
    description: 'The science of cone excursion, surface tension disruption, and low-frequency acoustic pressure.',
    icon: '🔬',
    badge: 'Science',
  },
  {
    title: 'Emergency Water Removal Guide',
    href: '/remove-water-from-phone-speaker',
    description: 'Crucial first 5-minute action steps, what never to do (no rice, no heat), and drying timelines.',
    icon: '💧',
    badge: 'Emergency',
  },
  {
    title: 'iPhone Speaker Cleaner Guide',
    href: '/iphone-speaker-cleaner',
    description: 'Earpiece vs bottom speaker holes, iOS liquid detected warnings, and Safari audio tips.',
    icon: '🍎',
    badge: 'Apple iOS',
  },
  {
    title: 'Android Speaker Cleaner Guide',
    href: '/android-speaker-cleaner',
    description: 'Samsung, Pixel, and Xiaomi acoustic chamber variations, moisture alerts, and multi-frequency sweep.',
    icon: '🤖',
    badge: 'Android',
  },
  {
    title: 'Dust & Physical Cleaning Guide',
    href: '/speaker-cleaning-guide',
    description: 'Safe tools (soft-bristle brushes, poster putty), lint removal, and avoiding mesh puncture.',
    icon: '🧹',
    badge: 'Maintenance',
  },
  {
    title: 'Troubleshooting & FAQ',
    href: '/faq',
    description: 'Answers to top questions regarding water ejection tones, hardware safety, and blown speakers.',
    icon: '❓',
    badge: 'FAQ Hub',
  },
];

export const RelatedGuides: React.FC<RelatedGuidesProps> = ({ currentPath, locale = DEFAULT_LOCALE }) => {
  const cleanPath = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/').replace(/\/$/, '') || '/';
  const related = ALL_GUIDES.filter((g) => g.href !== cleanPath).slice(0, 4);

  return (
    <section className="my-12 pt-8 border-t border-slate-800 text-start" aria-label="Related Guides & Tools">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Related Guides &amp; Diagnostic Tools
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Explore more audio guides, frequency tests, and speaker care tutorials.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((guide) => (
          <Link
            key={guide.href}
            href={getLocalizedPath(guide.href, locale)}
            className="group p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-sky-500/50 transition-all hover:-translate-y-0.5 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-2xl" aria-hidden="true">{guide.icon}</span>
                {guide.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-sky-950 border border-sky-500/30 text-sky-400 text-[10px] font-semibold tracking-wide uppercase">
                    {guide.badge}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-100 group-hover:text-sky-300 transition-colors text-sm sm:text-base">
                {guide.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {guide.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center text-xs font-semibold text-sky-400 group-hover:text-sky-300">
              <span>Read guide</span>
              <span className="ms-1 group-hover:translate-x-1 transition-transform rtl:rotate-180">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedGuides;
