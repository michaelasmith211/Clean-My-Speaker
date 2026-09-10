'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface YouTubeFacadeProps {
  videoId?: string;
  title?: string;
  posterUrl?: string;
  className?: string;
}

export const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({
  videoId = 'PmxN3frqKJY',
  title = 'Clean My Speaker - Video Introduction & How It Works',
  posterUrl = '/images/how-to-clean-my-speaker-fix-sound.jpg',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 group ${className}`}
    >
      {isPlaying ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          className="relative w-full h-full block text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer overflow-hidden"
          aria-label={`Play video: ${title}`}
        >
          {/* High quality local/remote poster */}
          <Image
            src={posterUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            priority={false}
            loading="lazy"
          />

          {/* Dark gradient overlay for contrast and focus */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/40 group-hover:via-slate-950/20 transition-colors" />

          {/* Top Info Bar */}
          <div className="absolute top-3 inset-x-3 sm:top-4 sm:inset-x-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 shadow-lg max-w-[80%]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-white truncate">
                {title}
              </span>
            </div>
            <span className="bg-slate-950/85 backdrop-blur-md text-slate-300 text-[11px] font-bold px-2 py-1 rounded-lg border border-slate-700/60">
              0:45
            </span>
          </div>

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing glow */}
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 bg-red-600/30 rounded-full blur-xl group-hover:bg-red-500/50 group-hover:scale-125 transition-all duration-300" />

              {/* YouTube-style Play Button Badge */}
              <div className="relative w-16 h-12 sm:w-20 sm:h-14 rounded-2xl bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-2xl shadow-red-600/50 group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current ml-1"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Hint */}
          <div className="absolute bottom-3 sm:bottom-4 inset-x-4 flex items-center justify-center pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-300 text-xs font-medium border border-slate-800 shadow-md group-hover:text-white transition-colors">
              ▶ Click to Watch Tutorial (Fast &amp; Private)
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default YouTubeFacade;
