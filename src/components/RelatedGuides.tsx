import React from 'react';
import Link from 'next/link';

interface GuideLink {
  title: string;
  href: string;
  description: string;
  icon: string;
  badge?: string;
}

interface RelatedGuidesProps {
  currentPath: string;
}

const ALL_GUIDES: GuideLink[] = [
  {
    title: 'Clean My Speaker Tool',
    href: '/#tool',
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
    description: 'How to safely dry-brush compacted pocket lint and grime without piercing delicate acoustic mesh.',
    icon: '🪥',
    badge: 'Maintenance',
  },
  {
    title: 'Speaker Cleaning FAQ',
    href: '/faq',
    description: '14+ in-depth answers covering safety, sound levels, rice myths, and persistent muffled audio.',
    icon: '❓',
    badge: 'FAQ',
  },
];

export const RelatedGuides: React.FC<RelatedGuidesProps> = ({ currentPath }) => {
  const filteredGuides = ALL_GUIDES.filter((g) => g.href !== currentPath).slice(0, 4);

  return (
    <section aria-labelledby="related-guides-title" className="mt-14 pt-10 border-t border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest">
            Explore Audio Guides & Utilities
          </span>
          <h2 id="related-guides-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Related Speaker Resources & Tools
          </h2>
        </div>
        <Link href="/faq" className="text-xs font-semibold text-sky-400 hover:text-sky-300 hover:underline">
          View All Resources →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredGuides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group block p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900 transition-all hover:shadow-lg hover:shadow-sky-950/30"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl p-2 rounded-xl bg-slate-800/80 group-hover:scale-110 transition-transform">
                {guide.icon}
              </span>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors truncate">
                    {guide.title}
                  </h3>
                  {guide.badge && (
                    <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {guide.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {guide.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedGuides;
