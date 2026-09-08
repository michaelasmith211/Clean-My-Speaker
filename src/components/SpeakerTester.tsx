'use client';

import React, { useState, useEffect } from 'react';
import { getAudioEngine } from '@/lib/audioEngine';
import { TEST_TONES } from '@/lib/constants';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';

interface SpeakerTesterProps {
  locale?: string;
}

export const SpeakerTester: React.FC<SpeakerTesterProps> = ({ locale = DEFAULT_LOCALE }) => {
  const { t } = getTranslations(locale);
  const [activeFrequency, setActiveFrequency] = useState<number | null>(null);
  const [activeChannel, setActiveChannel] = useState<'left' | 'right' | 'both' | null>(null);
  const [customFreq, setCustomFreq] = useState<number>(440);
  const [isPlayingCustom, setIsPlayingCustom] = useState<boolean>(false);
  const [isSweeping, setIsSweeping] = useState<boolean>(false);
  const [sweepProgress, setSweepProgress] = useState<number>(20);

  useEffect(() => {
    return () => {
      const engine = getAudioEngine();
      if (engine) engine.stop();
    };
  }, []);

  const playTone = (freq: number) => {
    const engine = getAudioEngine();
    if (activeFrequency === freq) {
      if (engine) engine.stop();
      setActiveFrequency(null);
      return;
    }
    if (engine) {
      engine.startCleaningTone('tone', freq, 0.8);
      setActiveFrequency(freq);
      setActiveChannel(null);
      setIsPlayingCustom(false);
      setIsSweeping(false);
    }
  };

  const playChannel = (channel: 'left' | 'right' | 'both') => {
    const engine = getAudioEngine();
    if (activeChannel === channel) {
      if (engine) engine.stop();
      setActiveChannel(null);
      return;
    }
    if (engine) {
      engine.playStereoTest(channel, 440, 0.8);
      setActiveChannel(channel);
      setActiveFrequency(null);
      setIsPlayingCustom(false);
      setIsSweeping(false);
    }
  };

  const toggleCustom = () => {
    const engine = getAudioEngine();
    if (isPlayingCustom) {
      if (engine) engine.stop();
      setIsPlayingCustom(false);
    } else {
      if (engine) {
        engine.startCleaningTone('tone', customFreq, 0.8);
        setIsPlayingCustom(true);
        setActiveFrequency(null);
        setActiveChannel(null);
        setIsSweeping(false);
      }
    }
  };

  const startSweep = () => {
    const engine = getAudioEngine();
    if (isSweeping) {
      if (engine) engine.stop();
      setIsSweeping(false);
    } else {
      if (engine) {
        setActiveFrequency(null);
        setActiveChannel(null);
        setIsPlayingCustom(false);
        setIsSweeping(true);
        engine.startCleaningTone('tone', 20, 0.8);

        const startTime = Date.now();
        const duration = 15000;
        const interval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          if (elapsed >= duration) {
            clearInterval(interval);
            setIsSweeping(false);
            if (engine) engine.stop();
          } else {
            const currentF = Math.round(20 * Math.pow(20000 / 20, elapsed / duration));
            setSweepProgress(currentF);
            if (engine) engine.setFrequency(currentF);
          }
        }, 100);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 text-start">
      {/* Stereo Channel Separation */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-sky-500/30 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl" aria-hidden="true">🎧</span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {t('speakerTest.stereoTitle')}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
          {t('speakerTest.stereoDesc')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => playChannel('left')}
            className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
              activeChannel === 'left'
                ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-lg shadow-sky-500/30'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-sky-500/40 hover:bg-slate-900'
            }`}
          >
            <span className="text-2xl" aria-hidden="true">⬅️</span>
            <span className="font-semibold text-sm">{t('speakerTest.leftChannel')}</span>
            <span className="text-[10px] opacity-75">440 Hz Isolated</span>
          </button>

          <button
            type="button"
            onClick={() => playChannel('right')}
            className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
              activeChannel === 'right'
                ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-lg shadow-sky-500/30'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-sky-500/40 hover:bg-slate-900'
            }`}
          >
            <span className="text-2xl" aria-hidden="true">➡️</span>
            <span className="font-semibold text-sm">{t('speakerTest.rightChannel')}</span>
            <span className="text-[10px] opacity-75">440 Hz Isolated</span>
          </button>

          <button
            type="button"
            onClick={() => playChannel('both')}
            className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
              activeChannel === 'both'
                ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-lg shadow-sky-500/30'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-sky-500/40 hover:bg-slate-900'
            }`}
          >
            <span className="text-2xl" aria-hidden="true">🔊</span>
            <span className="font-semibold text-sm">{t('speakerTest.bothChannels')}</span>
            <span className="text-[10px] opacity-75">Balanced Stereo</span>
          </button>
        </div>
      </div>

      {/* Frequency Tones Spectrum */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl" aria-hidden="true">📊</span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {t('speakerTest.frequencyTitle')}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
          {t('speakerTest.frequencyDesc')}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {TEST_TONES.map((tone) => {
            const isActive = activeFrequency === tone.frequency;
            return (
              <button
                key={tone.frequency}
                type="button"
                onClick={() => playTone(tone.frequency)}
                className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-md shadow-sky-500/25'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <span className="font-bold text-sm">{tone.label}</span>
                <span className="text-[10px] text-slate-400 font-normal line-clamp-1">{tone.description}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sweep & Custom Tone Generator */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Sweep */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-white text-base mb-1">Full 20Hz – 20kHz Sweep</h4>
            <p className="text-xs text-slate-400 mb-4">Continuous frequency sweep to check for speaker buzz, distortion, or blown cones.</p>
          </div>
          <button
            type="button"
            onClick={startSweep}
            className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
              isSweeping
                ? 'bg-rose-500 text-white shadow-rose-500/30'
                : 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sky-500/25'
            }`}
          >
            {isSweeping ? `Sweeping at ${sweepProgress} Hz (Stop)` : 'Start Full Sweep (15s)'}
          </button>
        </div>

        {/* Custom Tone Slider */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-white text-base">Custom Frequency</h4>
              <span className="text-sky-400 font-mono font-bold text-sm">{customFreq} Hz</span>
            </div>
            <input
              type="range"
              min="50"
              max="5000"
              step="10"
              value={customFreq}
              onChange={(e) => {
                const val = Number(e.target.value);
                setCustomFreq(val);
                if (isPlayingCustom) {
                  const engine = getAudioEngine();
                  if (engine) engine.startCleaningTone('tone', val, 0.8);
                }
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400 my-3"
              aria-label="Custom frequency slider"
            />
          </div>
          <button
            type="button"
            onClick={toggleCustom}
            className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
              isPlayingCustom
                ? 'bg-rose-500 text-white shadow-rose-500/30'
                : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
            }`}
          >
            {isPlayingCustom ? 'Stop Custom Tone' : `Play ${customFreq} Hz`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerTester;
