"use client";

import React, { useState, useEffect } from 'react';
import { getAudioEngine } from '@/lib/audioEngine';
import { TEST_TONES } from '@/lib/constants';

export const SpeakerTester: React.FC = () => {
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

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setCustomFreq(val);
    if (isPlayingCustom) {
      const engine = getAudioEngine();
      if (engine) engine.setFrequency(val);
    }
  };

  const startSweep = () => {
    const engine = getAudioEngine();
    if (isSweeping) {
      if (engine) engine.stop();
      setIsSweeping(false);
      return;
    }

    if (engine) {
      setIsSweeping(true);
      setActiveFrequency(null);
      setActiveChannel(null);
      setIsPlayingCustom(false);

      let current = 50;
      engine.startCleaningTone('tone', current, 0.7);

      const interval = setInterval(() => {
        current = Math.round(current * 1.08);
        if (current > 16000) {
          clearInterval(interval);
          const eng = getAudioEngine();
          if (eng) eng.stop();
          setIsSweeping(false);
          setSweepProgress(50);
        } else {
          setSweepProgress(current);
          const eng = getAudioEngine();
          if (eng) eng.setFrequency(current);
        }
      }, 100);
    }
  };

  const stopAll = () => {
    const engine = getAudioEngine();
    if (engine) engine.stop();
    setActiveFrequency(null);
    setActiveChannel(null);
    setIsPlayingCustom(false);
    setIsSweeping(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
      {/* Overview */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Interactive Speaker Test Lab
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-md mx-auto">
          Test frequency response, stereo channel balance, and high/low diaphragm distortion after cleaning your speaker.
        </p>
      </div>

      {/* 1. Stereo Channel Test */}
      <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            1. Stereo Channel Test
          </h3>
          <span className="text-[11px] text-slate-400">Headphones / Dual Speakers</span>
        </div>
        <p className="text-xs text-slate-300">
          Verify whether both speakers (earpiece vs. bottom speaker on smartphones) are producing sound evenly.
        </p>
        <div className="grid grid-cols-3 gap-3 pt-1">
          <button
            type="button"
            onClick={() => playChannel('left')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeChannel === 'left'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200'
            }`}
          >
            {activeChannel === 'left' ? '⏸ Stop Left' : '◀ Left Channel'}
          </button>
          <button
            type="button"
            onClick={() => playChannel('both')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeChannel === 'both'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200'
            }`}
          >
            {activeChannel === 'both' ? '⏸ Stop Both' : '◀ Both (Center) ▶'}
          </button>
          <button
            type="button"
            onClick={() => playChannel('right')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeChannel === 'right'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200'
            }`}
          >
            {activeChannel === 'right' ? '⏸ Stop Right' : 'Right Channel ▶'}
          </button>
        </div>
      </div>

      {/* 2. Frequency Benchmark Tones */}
      <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            2. Discrete Diagnostic Tones
          </h3>
          <span className="text-[11px] text-slate-400">Sub-bass to Treble</span>
        </div>
        <p className="text-xs text-slate-300">
          Listen for buzzing, fuzziness, rattling, or crackles at various audio frequencies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {TEST_TONES.map((tone) => {
            const isPlaying = activeFrequency === tone.frequency;
            return (
              <button
                key={tone.frequency}
                type="button"
                onClick={() => playTone(tone.frequency)}
                className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                  isPlaying
                    ? 'border-sky-500 bg-sky-500/20 text-white shadow-md'
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/70 text-slate-300 hover:text-white'
                }`}
              >
                <div>
                  <div className="font-bold text-xs sm:text-sm flex items-center gap-1.5">
                    <span>{tone.label}</span>
                    {isPlaying && <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-1">{tone.description}</div>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-800 text-slate-300">
                  {isPlaying ? 'Stop' : 'Play'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Dynamic Sweep & Custom Generator */}
      <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            3. Full Frequency Sweep & Custom Pitch
          </h3>
          <span className="text-[11px] text-slate-400">20 Hz – 16 kHz</span>
        </div>

        {/* Sweep Button */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div>
            <div className="text-xs font-bold text-slate-200">Continuous Acoustic Sweep</div>
            <div className="text-[11px] text-slate-400">
              {isSweeping ? `Sweeping: ${sweepProgress} Hz` : 'Glides smoothly across human hearing spectrum'}
            </div>
          </div>
          <button
            type="button"
            onClick={startSweep}
            className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              isSweeping
                ? 'bg-rose-500 hover:bg-rose-600 text-white'
                : 'bg-sky-500 hover:bg-sky-400 text-slate-950'
            }`}
          >
            {isSweeping ? '⏹ Stop Sweep' : '▶ Run Frequency Sweep'}
          </button>
        </div>

        {/* Manual Frequency Slider */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-xs text-slate-300 font-semibold">
            <label htmlFor="custom-slider">Custom Sine Tone: <span className="text-sky-400 font-mono">{customFreq} Hz</span></label>
            <button
              type="button"
              onClick={toggleCustom}
              className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                isPlayingCustom ? 'bg-rose-500 text-white' : 'bg-sky-500 text-slate-950'
              }`}
            >
              {isPlayingCustom ? 'Stop Tone' : 'Play Tone'}
            </button>
          </div>
          <input
            id="custom-slider"
            type="range"
            min={40}
            max={4000}
            step={10}
            value={customFreq}
            onChange={handleCustomChange}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            aria-label="Custom test frequency"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>40 Hz (Deep Bass)</span>
            <span>1000 Hz (Mid)</span>
            <span>4000 Hz (High Pitch)</span>
          </div>
        </div>
      </div>

      {/* Global Stop button if any sound is on */}
      {(activeFrequency !== null || activeChannel !== null || isPlayingCustom || isSweeping) && (
        <button
          type="button"
          onClick={stopAll}
          className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg transition-all"
        >
          ⏹ Stop All Audio Testing
        </button>
      )}
    </div>
  );
};

export default SpeakerTester;
