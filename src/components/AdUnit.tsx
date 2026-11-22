'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
}

const PUB_ID = 'ca-pub-6889606875840958';
const DEFAULT_SLOT = '2729316017';

/**
 * AdUnit — renders a single Google AdSense display ad.
 * Auto Ads (sitewide) are loaded via layout.tsx script tag.
 * This component handles individual manual placement units.
 */
export function AdUnit({
  slot = DEFAULT_SLOT,
  format = 'auto',
  responsive = true,
  className = '',
}: AdUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      // @ts-expect-error – adsbygoogle injected by the AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Silent fail — ad blockers or dev environment
    }
  }, []);

  return (
    <div
      className={`ad-unit-wrapper w-full overflow-hidden text-center my-4 ${className}`}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={PUB_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
