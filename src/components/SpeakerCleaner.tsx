"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getAudioEngine } from '@/lib/audioEngine';
import { CLEANING_MODES } from '@/lib/constants';
import { CleaningMode } from '@/lib/types';

export const SpeakerCleaner: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentMode, setCurrentMode] = useState<CleaningMode>('quick');
  const [frequency, setFrequency] = useState<number>(165);
  const [volume, setVolume] = useState<number>(90); // 90% volume default
  const [progress, setProgress] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('Ready to clean');

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const durationRef = useRef<number>(30);

  // Set duration when mode changes
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
    const engine = getAudioEngine();
    if (engine) {
      engine.stop();
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
    setStatusMessage('Cleaning stopped. Check speaker sound.');
  }, []);

  // Cleanup on unmount or tab switch
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
      setErrorMessage('Audio engine could not be initialized in this browser environment.');
      return;
    }

    try {
      await engine.resumeIfNeeded();
      const config = CLEANING_MODES[currentMode];
      const totalSeconds = config.duration;
      durationRef.current = totalSeconds;
      setSecondsRemaining(totalSeconds);
      setProgress(0);

      // Start Audio Engine
      engine.startCleaningTone(currentMode, frequency, volume / 100);
      setIsPlaying(true);
      setStatusMessage(`Cleaning in progress: ${config.name} at ${frequency} Hz.`);

      const startTime = Date.now();
      const endTime = startTime + totalSeconds * 1000;

      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const timeLeftMs = Math.max(0, endTime - now);
        const elapsedMs = totalSeconds * 1000 - timeLeftMs;
        const currentProgress = Math.min(100, (elapsedMs / (totalSeconds * 1000)) * 100);

        setProgress(currentProgress);
        setSecondsRemaining(Math.ceil(timeLeftMs / 1000));

        if (timeLeftMs <= 0) {
          handleStop();
          setProgress(100);
          setSecondsRemaining(0);
          setStatusMessage('Cleaning complete! Wipe off any ejected moisture beads.');
        }
      }, 100);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error starting audio playback.';
      setErrorMessage(msg);
      setIsPlaying(false);
    }
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setFrequency(val);
    if (isPlaying) {
      const engine = getAudioEngine();
      if (engine) engine.setFrequency(val);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setVolume(val);
    if (isPlaying) {
      const engine = getAudioEngine();
      if (engine) engine.setVolume(val / 100);
    }
  };

  return (
    <div
      id="tool"
      className="w-full max-w-xl mx-auto bg-slate-900/90 border-2 border-sky-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-sky-950/60 backdrop-blur-xl relative overflow-hidden"
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
          Acoustic Water Eject Utility
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          CLEAN MY SPEAKER
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Turn your device volume to 100%, point your speaker downward, and tap below.
        </p>
      </div>

      {/* Error Banner */}
      {errorMessage && (
        <div className="mb-5 p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs sm:text-sm flex items-start gap-3">
          <span className="text-red-400 text-lg">⚠️</span>
          <div>
            <p className="font-semibold">Audio playback notice</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Mode Selector Tabs */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 text-center">
          Select Cleaning Mode
        </label>
        <div className="grid grid-cols-3 gap-2 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800">
          {(Object.keys(CLEANING_MODES) as CleaningMode[]).map((modeKey) => {
            const config = CLEANING_MODES[modeKey];
            const isSelected = currentMode === modeKey;
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
                <span>{config.name}</span>
                <span className="text-[10px] opacity-75 font-normal">{config.duration}s</span>
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-slate-400 text-center mt-2">
          {CLEANING_MODES[currentMode]?.description}
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
              aria-label="Start cleaning speaker sound"
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-4 group-hover:bg-slate-900 transition-colors">
                <span className="text-4xl sm:text-5xl mb-2 filter drop-shadow-md group-hover:scale-110 transition-transform">
                  🔊
                </span>
                <span className="font-extrabold text-sm sm:text-base tracking-wide text-white group-hover:text-sky-300 transition-colors">
                  CLEAN MY SPEAKER
                </span>
                <span className="text-[10px] text-sky-400 uppercase tracking-widest mt-1 font-semibold">
                  TAP TO START
                </span>
              </div>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleStop}
              className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-red-500 to-rose-600 p-1.5 shadow-xl shadow-rose-500/30 hover:scale-103 active:scale-97 transition-all flex flex-col items-center justify-center text-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
              aria-label="Stop cleaning speaker sound"
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-1.5 h-8 mb-2">
                  <span className="w-1.5 bg-rose-400 rounded-full animate-soundwave" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1.5 bg-rose-400 rounded-full animate-soundwave" style={{ animationDelay: '0.3s' }} />
                  <span className="w-1.5 bg-rose-400 rounded-full animate-soundwave" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1.5 bg-rose-400 rounded-full animate-soundwave" style={{ animationDelay: '0.4s' }} />
                  <span className="w-1.5 bg-rose-400 rounded-full animate-soundwave" style={{ animationDelay: '0.25s' }} />
                </div>
                <span className="font-extrabold text-base sm:text-lg tracking-wide text-rose-400">
                  STOP SOUND
                </span>
                <span className="text-xs text-slate-300 mt-1 font-mono font-bold">
                  {secondsRemaining}s remaining
                </span>
              </div>
            </button>
          )}
        </div>

        {/* Progress Bar & Status Text */}
        <div className="w-full mt-6 space-y-2">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-300">
            <span>Cycle Progress</span>
            <span className="font-mono text-sky-400">{Math.round(progress)}%</span>
          </div>
          <div
            className="w-full h-3 rounded-full bg-slate-950 border border-slate-800 overflow-hidden"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Cleaning progress"
          >
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-300 font-medium">
            <span>{isPlaying ? 'Acoustic wave active' : 'Status: Idle'}</span>
            <span>{secondsRemaining}s / {durationRef.current}s</span>
          </div>
        </div>
      </div>

      {/* Advanced Sound Controls (Collapsible or visible) */}
      <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800 space-y-4">
        {/* Frequency */}
        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
            <label htmlFor="frequency-slider" className="flex items-center gap-1">
              <span>Acoustic Frequency:</span>
              <span className="text-sky-400 font-mono">{frequency} Hz</span>
            </label>
            <button
              type="button"
              onClick={() => {
                setFrequency(165);
                if (isPlaying) {
                  const engine = getAudioEngine();
                  if (engine) engine.setFrequency(165);
                }
              }}
              className="text-[10px] text-slate-400 hover:text-sky-300 underline"
            >
              Reset to 165 Hz (Optimal)
            </button>
          </div>
          <input
            id="frequency-slider"
            type="range"
            min={100}
            max={500}
            step={5}
            value={frequency}
            onChange={handleFrequencyChange}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            aria-label="Speaker cleaning frequency in Hertz"
          />
          <div className="flex justify-between text-xs text-slate-300 font-medium mt-1">
            <span>100 Hz (Low Bass)</span>
            <span className="text-sky-300 font-semibold">165 Hz (Water Eject Peak)</span>
            <span>500 Hz (Mid)</span>
          </div>
        </div>

        {/* Volume */}
        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
            <label htmlFor="volume-slider" className="flex items-center gap-1">
              <span>Oscillator Gain:</span>
              <span className="text-sky-400 font-mono">{volume}%</span>
            </label>
            <span className="text-[10px] text-slate-400">Keep phone volume at 100%</span>
          </div>
          <input
            id="volume-slider"
            type="range"
            min={10}
            max={100}
            step={5}
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            aria-label="Acoustic volume percentage"
          />
        </div>
      </div>

      {/* Safety / Practical advice under the tool */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 font-medium">
        <span className="flex items-center gap-1">
          <span>💡</span> Position speaker face-down
        </span>
        <span className="flex items-center gap-1">
          <span>💧</span> Gently tap phone on a soft towel
        </span>
      </div>
    </div>
  );
};

export default SpeakerCleaner;
