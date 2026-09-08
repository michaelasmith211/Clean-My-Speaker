'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getAudioEngine } from '@/lib/audioEngine';
import { CLEANING_MODES } from '@/lib/constants';
import { CleaningMode } from '@/lib/types';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getTranslations } from '@/i18n/getTranslations';

interface SpeakerCleanerProps {
  locale?: string;
}

export const SpeakerCleaner: React.FC<SpeakerCleanerProps> = ({ locale = DEFAULT_LOCALE }) => {
  const { t } = getTranslations(locale);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentMode, setCurrentMode] = useState<CleaningMode>('quick');
  const [frequency, setFrequency] = useState<number>(165);
  const [volume, setVolume] = useState<number>(90);
  const [progress, setProgress] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>(t('tool.statusReady'));

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const durationRef = useRef<number>(30);

  useEffect(() => {
    const config = CLEANING_MODES[currentMode];
    if (config) {
      durationRef.current = config.duration;
      if (!isPlaying) {
        setSecondsRemaining(config.duration);
        setProgress(0);
        setFrequency(config.defaultFrequency);
      }
    }
  }, [currentMode, isPlaying]);

  const handleStop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    const engine = getAudioEngine();
    if (engine) {
      engine.stop();
    }
    setIsPlaying(false);
    setStatusMessage(t('tool.statusCompleted'));
  }, [t]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const engine = getAudioEngine();
      if (engine) engine.stop();
    };
  }, []);

  const handleStart = async () => {
    setErrorMessage(null);
    const engine = getAudioEngine();
    if (!engine) {
      setErrorMessage('Web Audio API is not supported in this browser.');
      return;
    }

    try {
      const modeConfig = CLEANING_MODES[currentMode];
      const duration = modeConfig.duration;
      durationRef.current = duration;
      setSecondsRemaining(duration);
      setProgress(0);

      setFrequency(modeConfig.defaultFrequency);
      setStatusMessage(
        t('tool.statusPlaying', { freq: modeConfig.defaultFrequency.toString(), timeRemaining: duration.toString() })
      );

      engine.setVolume(volume / 100);
      engine.startCleaningTone(currentMode, modeConfig.defaultFrequency, volume / 100);

      setIsPlaying(true);
      let elapsed = 0;

      intervalRef.current = setInterval(() => {
        elapsed += 1;
        const remaining = Math.max(0, duration - elapsed);
        setSecondsRemaining(remaining);
        setProgress((elapsed / duration) * 100);

        if (remaining <= 0) {
          handleStop();
        }
      }, 1000);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error('Audio start error:', error);
      setErrorMessage(error.message || 'Failed to start audio. Please interact with the page first.');
      setIsPlaying(false);
    }
  };

  const modeDescriptions: Record<CleaningMode, { name: string; desc: string }> = {
    quick: { name: t('tool.quickClean'), desc: t('tool.quickCleanDesc') },
    deep: { name: t('tool.deepClean'), desc: t('tool.deepCleanDesc') },
    eject: { name: t('tool.waterEject'), desc: t('tool.waterEjectDesc') },
  };

  return (
    <div
      id="tool"
      className="w-full max-w-xl mx-auto bg-slate-900/90 border-2 border-sky-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-sky-950/60 backdrop-blur-xl relative overflow-hidden text-start"
    >
      {/* Decorative ambient glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Screen Reader Live Status */}
      <div aria-live="polite" className="sr-only">
        {statusMessage}
      </div>

      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          {t('tool.badge')}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {t('tool.title')}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          {t('tool.subtitle')}
        </p>
      </div>

      {/* Error Banner */}
      {errorMessage && (
        <div className="mb-5 p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs sm:text-sm flex items-start gap-3">
          <span className="text-red-400 text-lg">⚠️</span>
          <div>
            <p className="font-semibold">Audio notice</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Mode Selector Tabs */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 text-center">
          {t('tool.selectMode')}
        </label>
        <div className="grid grid-cols-3 gap-2 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800">
          {(Object.keys(CLEANING_MODES) as CleaningMode[]).map((modeKey) => {
            const config = CLEANING_MODES[modeKey];
            const isSelected = currentMode === modeKey;
            const localizedInfo = modeDescriptions[modeKey] || { name: config.name, desc: config.description };
            return (
              <button
                key={modeKey}
                type="button"
                disabled={isPlaying}
                onClick={() => setCurrentMode(modeKey)}
                className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-0.5 ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30 scale-100'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60 disabled:opacity-50'
                }`}
              >
                <span>{localizedInfo.name}</span>
                <span className="text-[10px] opacity-75 font-normal">{config.duration}s</span>
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-slate-400 text-center mt-2">
          {modeDescriptions[currentMode]?.desc}
        </p>
      </div>

      {/* Visual Animation & Main Button */}
      <div className="flex flex-col items-center justify-center my-6">
        <div className="relative">
          {/* Animated Ripples when playing */}
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full bg-sky-400/20 animate-ping opacity-75 pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border-2 border-sky-400/40 animate-pulse-slow pointer-events-none" />
            </>
          )}

          {!isPlaying ? (
            <button
              type="button"
              onClick={handleStart}
              className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-sky-500 via-sky-400 to-blue-600 p-1.5 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-103 active:scale-97 transition-all flex flex-col items-center justify-center text-center group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
              aria-label={t('tool.buttonClean')}
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-4 group-hover:bg-slate-900 transition-colors">
                <span className="text-4xl sm:text-5xl mb-2 filter drop-shadow-md group-hover:scale-110 transition-transform">
                  🔊
                </span>
                <span className="font-extrabold text-sm sm:text-base tracking-wide text-white group-hover:text-sky-300 transition-colors">
                  {t('tool.buttonClean')}
                </span>
                <span className="text-[10px] text-sky-400 uppercase tracking-widest mt-1 font-semibold">
                  165 Hz
                </span>
              </div>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleStop}
              className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-red-500 to-rose-600 p-1.5 shadow-xl shadow-rose-500/30 hover:scale-103 active:scale-97 transition-all flex flex-col items-center justify-center text-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
              aria-label={t('tool.buttonStop')}
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-4">
                <span className="text-4xl sm:text-5xl mb-2 animate-bounce">
                  ⏹️
                </span>
                <span className="font-extrabold text-sm sm:text-base tracking-wide text-rose-400">
                  {t('tool.buttonStop')}
                </span>
                <span className="text-xs text-white font-mono font-bold mt-1">
                  {secondsRemaining}s
                </span>
              </div>
            </button>
          )}
        </div>

        {/* Live Frequency & Timer Indicator */}
        <div className="mt-6 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
            <span className="text-sky-400 font-bold">⚡ Freq:</span>
            <span className="font-mono">{frequency} Hz</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
            <span className="text-sky-400 font-bold">⏱ Time:</span>
            <span className="font-mono">{secondsRemaining}s</span>
          </div>
        </div>

        {/* Progress Bar */}
        {isPlaying && (
          <div className="w-full mt-4 bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
            <div
              className="bg-gradient-to-r from-sky-500 to-blue-500 h-full transition-all duration-1000 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        )}
      </div>

      {/* Volume Slider */}
      <div className="mb-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
        <div className="flex justify-between items-center text-xs font-semibold mb-2">
          <label htmlFor="volume-slider" className="text-slate-300 flex items-center gap-1.5">
            <span>🔊</span> Output Intensity
          </label>
          <span className="text-sky-400 font-mono font-bold">{volume}%</span>
        </div>
        <input
          id="volume-slider"
          type="range"
          min="10"
          max="100"
          value={volume}
          onChange={(e) => {
            const val = Number(e.target.value);
            setVolume(val);
            const engine = getAudioEngine();
            if (engine) engine.setVolume(val / 100);
          }}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          aria-label="Output intensity slider"
        />
      </div>

      {/* Quick Action Tips */}
      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
        <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center gap-2">
          <span className="text-base shrink-0">📱</span>
          <span>{t('tool.tipPosition')}</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center gap-2">
          <span className="text-base shrink-0">💧</span>
          <span>{t('tool.tipCloth')}</span>
        </div>
      </div>

      {/* Safety Banner */}
      <div className="mt-4 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 space-y-1.5">
        <p className="font-bold flex items-center gap-1.5 text-amber-300">
          <span>⚠️</span> {t('tool.safetyTitle')}
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px] leading-relaxed">
          <li>{t('tool.safetyRule1')}</li>
          <li>{t('tool.safetyRule2')}</li>
          <li>{t('tool.safetyRule3')}</li>
        </ul>
      </div>
    </div>
  );
};

export default SpeakerCleaner;
