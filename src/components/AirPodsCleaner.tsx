'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getAudioEngine } from '@/lib/audioEngine';

interface AirPodsCleanerProps {
  initialAutoplay?: boolean;
}

type EarbudChannel = 'both' | 'left' | 'right';
type AirPodsModel = 'pro' | 'gen3' | 'gen2' | 'max';

export const AirPodsCleaner: React.FC<AirPodsCleanerProps> = ({ initialAutoplay = true }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [channel, setChannel] = useState<EarbudChannel>('both');
  const [model, setModel] = useState<AirPodsModel>('pro');
  const [duration, setDuration] = useState<number>(30);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(95);
  const [frequency, setFrequency] = useState<number>(165);
  const [needsUserGesture, setNeedsUserGesture] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cycleCompleted, setCycleCompleted] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasAttemptedAutoplayRef = useRef<boolean>(false);

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
  }, []);

  const handleStart = useCallback(async (forcedChannel?: EarbudChannel, forcedFreq?: number) => {
    setErrorMessage(null);
    setCycleCompleted(false);
    const targetChannel = forcedChannel || channel;
    const targetFreq = forcedFreq || frequency;

    const engine = getAudioEngine();
    if (!engine) {
      setErrorMessage('Web Audio API is not supported in this browser. Please use Safari, Chrome, or Firefox.');
      return;
    }

    try {
      await engine.resumeIfNeeded();
      const ctxState = engine.getContextState();
      if (ctxState === 'suspended') {
        setNeedsUserGesture(true);
        return;
      }

      setSecondsRemaining(duration);
      setProgress(0);

      engine.setVolume(volume / 100);
      engine.startCleaningTone('eject', targetFreq, volume / 100, targetChannel);

      setIsPlaying(true);
      setNeedsUserGesture(false);

      if (intervalRef.current) clearInterval(intervalRef.current);

      let elapsed = 0;
      intervalRef.current = setInterval(() => {
        elapsed += 1;
        const remaining = Math.max(0, duration - elapsed);
        setSecondsRemaining(remaining);
        setProgress((elapsed / duration) * 100);

        if (remaining <= 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          const eng = getAudioEngine();
          if (eng) eng.stop();
          setIsPlaying(false);
          setCycleCompleted(true);
        }
      }, 1000);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.warn('Audio autoplay prevented by browser policy:', error.message);
      setNeedsUserGesture(true);
      setIsPlaying(false);
    }
  }, [channel, frequency, duration, volume]);

  // Attempt autoplay on mount, or set up one-touch trigger if browser policies require user interaction
  useEffect(() => {
    if (!initialAutoplay || hasAttemptedAutoplayRef.current) return;
    hasAttemptedAutoplayRef.current = true;

    const attemptAutoplay = async () => {
      try {
        const engine = getAudioEngine();
        if (!engine) return;

        // Try direct playback
        await handleStart();
      } catch {
        setNeedsUserGesture(true);
      }
    };

    attemptAutoplay();

    // Fallback: One-time listener to start instantly on first tap anywhere if suspended
    const handleFirstTap = () => {
      handleStart();
      window.removeEventListener('click', handleFirstTap);
      window.removeEventListener('touchstart', handleFirstTap);
    };

    window.addEventListener('click', handleFirstTap, { once: true });
    window.addEventListener('touchstart', handleFirstTap, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstTap);
      window.removeEventListener('touchstart', handleFirstTap);
      if (intervalRef.current) clearInterval(intervalRef.current);
      const engine = getAudioEngine();
      if (engine) engine.stop();
    };
  }, [handleStart, initialAutoplay]);

  // Update dynamic volume while playing
  useEffect(() => {
    if (isPlaying) {
      const engine = getAudioEngine();
      if (engine) engine.setVolume(volume / 100);
    }
  }, [volume, isPlaying]);

  // Update dynamic channel while playing
  const switchChannel = (newChannel: EarbudChannel) => {
    setChannel(newChannel);
    if (isPlaying) {
      const engine = getAudioEngine();
      if (engine) engine.setChannel(newChannel);
    }
  };

  // Model-specific recommendations
  const modelTips: Record<AirPodsModel, { name: string; notice: string; badge: string }> = {
    pro: {
      name: 'AirPods Pro (1st & 2nd Gen)',
      notice: 'Crucial: Pull off silicone ear tips before playing! Water gets trapped in the inner nozzle cavity behind the tip mesh.',
      badge: 'IPX4 Rated',
    },
    gen3: {
      name: 'AirPods 3rd & 4th Gen',
      notice: 'Incline the speaker openings facing down toward a microfiber cloth so acoustic expulsion pushes liquid outwards.',
      badge: 'IPX4 Water-Resistant',
    },
    gen2: {
      name: 'AirPods 1st & 2nd Gen',
      notice: 'Zero official water rating (IPX0). Run multiple 165 Hz cycles immediately to prevent internal circuit corrosion.',
      badge: 'IPX0 (Non-Rated)',
    },
    max: {
      name: 'AirPods Max (Over-Ear)',
      notice: 'Remove magnetic ear cushions. Hold drivers tilted downward to eject condensation droplets from behind the acoustic fabric.',
      badge: 'Condensation Alert',
    },
  };

  return (
    <div
      id="airpods-tool"
      className="w-full max-w-2xl mx-auto bg-slate-900/95 border-2 border-sky-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-sky-950/70 backdrop-blur-xl relative overflow-hidden text-start"
    >
      {/* Background ambient light effects */}
      <div className="absolute -top-28 -right-28 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Screen reader live notification */}
      <div aria-live="polite" className="sr-only">
        {isPlaying ? `Playing 165Hz AirPods water eject sound on ${channel} channel. ${secondsRemaining} seconds remaining.` : 'AirPods water eject tool is ready.'}
      </div>

      {/* Header Badge & Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/90 border border-sky-500/40 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
          <span>AirPods 165 Hz Resonant Water Ejector</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          AirPods Water Eject Sound (165Hz)
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-lg mx-auto">
          Generates rapid 165 Hz acoustic air pressure waves calibrated to break droplet surface tension inside micro-mesh earbud vents.
        </p>
      </div>

      {/* Safety Warning */}
      <div className="mb-5 p-3.5 rounded-2xl bg-amber-950/50 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-3">
        <span className="text-base sm:text-lg">⚠️</span>
        <div>
          <strong className="text-amber-300 font-semibold block">Remove AirPods From Ears Before Playing!</strong>
          <span>This 165 Hz frequency tone plays at maximum amplitude to physically displace trapped moisture. Do not wear earbuds during playback.</span>
        </div>
      </div>

      {/* Autoplay Standby Prompt */}
      {needsUserGesture && !isPlaying && (
        <div
          onClick={() => handleStart()}
          className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-sky-900/80 to-blue-900/80 border-2 border-sky-400 text-white text-center cursor-pointer hover:brightness-110 active:scale-98 transition-all shadow-lg animate-pulse"
        >
          <div className="flex items-center justify-center gap-2 font-black text-sm sm:text-base">
            <span>🔊</span>
            <span>Tap Anywhere or Click Here to Start 165 Hz Tone</span>
          </div>
          <p className="text-xs text-sky-200 mt-1">
            Browser audio requires 1 user touch to activate the high-power Web Audio engine.
          </p>
        </div>
      )}

      {/* Error Notice */}
      {errorMessage && (
        <div className="mb-5 p-4 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs">
          <strong>Notice:</strong> {errorMessage}
        </div>
      )}

      {/* Model Selector Tabs */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Select Your AirPods Model:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
          {(['pro', 'gen3', 'gen2', 'max'] as AirPodsModel[]).map((key) => {
            const isSelected = model === key;
            const info = modelTips[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setModel(key)}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/40 scale-100'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{key === 'pro' ? 'AirPods Pro' : key === 'gen3' ? 'AirPods 3/4' : key === 'gen2' ? 'AirPods 1/2' : 'AirPods Max'}</span>
                <span className={`text-[10px] ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>{info.badge}</span>
              </button>
            );
          })}
        </div>
        {/* Dynamic Model Advice */}
        <div className="mt-2.5 px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-sky-300 flex items-center gap-2">
          <span>💡</span>
          <span>{modelTips[model].notice}</span>
        </div>
      </div>

      {/* Earbud Channel Selector (Crucial for single earbud drops) */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Which Earbud is Wet?
          </label>
          <span className="text-[11px] text-slate-400">Isolate channel to protect dry earbud</span>
        </div>
        <div className="grid grid-cols-3 gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => switchChannel('left')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              channel === 'left'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span>◀ Left Only</span>
          </button>
          <button
            type="button"
            onClick={() => switchChannel('both')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              channel === 'both'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span>◀ Both (Stereo) ▶</span>
          </button>
          <button
            type="button"
            onClick={() => switchChannel('right')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              channel === 'right'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span>Right Only ▶</span>
          </button>
        </div>
      </div>

      {/* Main Visual Pulsating Animation & Play Button */}
      <div className="flex flex-col items-center justify-center my-6 relative">
        {/* Pulsating Wave Rings (Active when playing) */}
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 rounded-full border-2 border-sky-400/30 animate-ping opacity-60" />
            <div className="w-64 h-64 rounded-full border-2 border-indigo-400/30 animate-pulse opacity-80" />
            <div className="w-72 h-72 rounded-full border border-sky-300/20 animate-ping opacity-40 [animation-delay:400ms]" />
          </div>
        )}

        {/* Center Interactive Button */}
        {!isPlaying ? (
          <button
            type="button"
            onClick={() => handleStart()}
            className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-sky-500 via-sky-400 to-indigo-600 p-1.5 shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-103 active:scale-97 transition-all flex flex-col items-center justify-center text-center cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
            aria-label="Start 165Hz AirPods Water Eject Sound"
          >
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-4 group-hover:bg-slate-900 transition-colors">
              <span className="text-4xl sm:text-5xl mb-2 filter drop-shadow-md group-hover:scale-110 transition-transform">
                🎧
              </span>
              <span className="font-black text-sm sm:text-base tracking-wide text-white group-hover:text-sky-300 transition-colors">
                EJECT WATER
              </span>
              <span className="text-[11px] text-sky-400 uppercase tracking-widest mt-1 font-bold">
                165 HZ TONE
              </span>
              <span className="text-[10px] text-slate-400 mt-1 font-mono">
                {channel === 'both' ? 'Both AirPods' : channel === 'left' ? 'Left AirPod' : 'Right AirPod'}
              </span>
            </div>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleStop}
            className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-rose-500 via-red-500 to-pink-600 p-1.5 shadow-2xl shadow-rose-500/40 hover:scale-103 active:scale-97 transition-all flex flex-col items-center justify-center text-center cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
            aria-label="Stop 165Hz Sound Tone"
          >
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-4">
              <span className="text-4xl sm:text-5xl mb-2 animate-bounce">
                ⏹️
              </span>
              <span className="font-black text-sm sm:text-base tracking-wide text-rose-400">
                STOP EJECTION
              </span>
              <span className="text-sm text-white font-mono font-bold mt-1">
                {secondsRemaining}s remaining
              </span>
              <span className="text-[10px] text-sky-400 uppercase tracking-wider mt-1 font-semibold">
                165Hz Acoustic Excursion
              </span>
            </div>
          </button>
        )}

        {/* Live Audio Visualizer Bars */}
        <div className="mt-6 flex items-center gap-1 h-8" aria-hidden="true">
          {[40, 75, 100, 60, 90, 100, 85, 95, 70, 100, 60, 45].map((heightPct, idx) => (
            <span
              key={idx}
              className={`w-1 sm:w-1.5 rounded-full transition-all duration-150 ${
                isPlaying
                  ? 'bg-gradient-to-t from-sky-500 to-indigo-400'
                  : 'bg-slate-800'
              }`}
              style={{
                height: isPlaying ? `${Math.max(20, (heightPct * (1 + Math.sin(idx + secondsRemaining))) / 2)}%` : '20%',
              }}
            />
          ))}
        </div>

        {/* Real-time Frequency & Timer Pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
            <span className="text-sky-400 font-bold">⚡ Tone:</span>
            <span className="font-mono font-semibold">{frequency} Hz Ejection Pulse</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
            <span className="text-sky-400 font-bold">🎧 Output:</span>
            <span className="font-mono font-semibold capitalize">{channel}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
            <span className="text-sky-400 font-bold">⏱ Duration:</span>
            <span className="font-mono font-semibold">{secondsRemaining}s / {duration}s</span>
          </div>
        </div>

        {/* Progress Bar */}
        {isPlaying && (
          <div className="w-full mt-4 bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
            <div
              className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 h-full transition-all duration-1000 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        )}

        {/* Completion Announcement */}
        {cycleCompleted && !isPlaying && (
          <div className="w-full mt-5 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs text-center flex flex-col items-center gap-1">
            <div className="font-bold text-sm text-emerald-400 flex items-center gap-1.5">
              <span>✅</span> 165 Hz Ejection Cycle Finished!
            </div>
            <p className="text-slate-300">
              Dab expelled moisture beads off the speaker mesh with a clean microfiber cloth. If sound still feels muffled, run a second cycle.
            </p>
          </div>
        )}
      </div>

      {/* Cycle Duration and Frequency Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Cycle Duration:
          </label>
          <div className="grid grid-cols-2 gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
            {[30, 60].map((dur) => (
              <button
                key={dur}
                type="button"
                disabled={isPlaying}
                onClick={() => {
                  setDuration(dur);
                  setSecondsRemaining(dur);
                }}
                className={`py-2 rounded-xl text-xs font-bold transition-all ${
                  duration === dur
                    ? 'bg-slate-800 text-white border border-sky-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white disabled:opacity-50'
                }`}
              >
                {dur} Seconds {dur === 30 ? '(Standard)' : '(Deep Clean)'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Frequency Fine-Tuning:
          </label>
          <div className="grid grid-cols-3 gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
            {[160, 165, 175].map((freq) => (
              <button
                key={freq}
                type="button"
                onClick={() => {
                  setFrequency(freq);
                  if (isPlaying) {
                    const engine = getAudioEngine();
                    if (engine) engine.setFrequency(freq);
                  }
                }}
                className={`py-2 rounded-xl text-xs font-bold transition-all ${
                  frequency === freq
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {freq} Hz {freq === 165 ? '★' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Volume Slider Control */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider shrink-0 flex items-center gap-1.5">
          <span>🔊 Volume:</span>
          <span className="font-mono text-sky-400 font-bold">{volume}%</span>
        </label>
        <input
          type="range"
          min="50"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full accent-sky-500 cursor-pointer"
          aria-label="Ejection volume slider"
        />
      </div>
    </div>
  );
};
