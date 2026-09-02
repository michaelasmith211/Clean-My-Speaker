'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/lib/constants';

export const Footer: React.FC = () => {
  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt="Clean My Speaker Icon"
                width={32}
                height={32}
                className="rounded-lg shadow shrink-0"
              />
              <span className="font-bold text-white text-lg tracking-tight">Clean My Speaker</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Clean My Speaker is a lightweight, browser-based audio utility providing specially calibrated sound wave vibrations to help loosen trapped water, droplets, and surface moisture from mobile phone speaker grilles.
            </p>
            <p className="text-xs text-slate-400">
              100% Client-Side Processing • No microphone access required • Zero tracking cookies
            </p>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-2" aria-label="Social media profiles">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 text-xs font-medium transition-colors flex items-center gap-1.5"
                    aria-label={`Follow Clean My Speaker on ${item.name}`}
                  >
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Tools */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider">Audio Tools</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-sky-300 transition-colors">
                  Clean My Speaker (Home)
                </Link>
              </li>
              <li>
                <Link href="/speaker-test" className="hover:text-sky-300 transition-colors">
                  Online Speaker Test
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-sky-300 transition-colors">
                  How the Sound Waves Work
                </Link>
              </li>
              <li>
                <Link href="/#tool" className="hover:text-sky-300 transition-colors">
                  Water Eject Frequency (165Hz)
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider">Device Guides</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/remove-water-from-phone-speaker" className="hover:text-sky-300 transition-colors">
                  Remove Water From Speaker
                </Link>
              </li>
              <li>
                <Link href="/iphone-speaker-cleaner" className="hover:text-sky-300 transition-colors">
                  iPhone Speaker Cleaner
                </Link>
              </li>
              <li>
                <Link href="/android-speaker-cleaner" className="hover:text-sky-300 transition-colors">
                  Android Speaker Cleaner
                </Link>
              </li>
              <li>
                <Link href="/speaker-cleaning-guide" className="hover:text-sky-300 transition-colors">
                  Physical Cleaning &amp; Dust Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider">Information</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/faq" className="hover:text-sky-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-300 transition-colors">
                  About Clean My Speaker
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-300 transition-colors">
                  Contact &amp; Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-sky-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-sky-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-sky-300 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-sky-300 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookieSettings}
                  className="hover:text-sky-300 transition-colors text-left flex items-center gap-1 text-sky-400 font-medium"
                  aria-label="Open cookie preferences modal"
                >
                  <span>🍪</span> Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Clean My Speaker (cleanmyspeaker.net). All rights reserved.</p>
          <p className="text-center md:text-right text-xs text-slate-400">
            Disclaimer: Clean My Speaker is an independent web tool and is not affiliated with Apple Inc., Google LLC, or Samsung. Sound vibrations cannot reverse permanent internal liquid damage.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
