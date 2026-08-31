/**
 * Browser-native Web Audio API engine for CleanMySpeaker.net
 * Safely generates acoustic ejection pulses, tone sweeps, and test signals
 * without external dependencies, server-side processing, or memory leaks.
 */

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private primaryOsc: OscillatorNode | null = null;
  private secondaryOsc: OscillatorNode | null = null;
  private modOsc: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private modGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private sweepTimer: NodeJS.Timeout | null = null;

  private initContext(): AudioContext {
    if (!this.ctx || this.ctx.state === 'closed') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) {
        throw new Error('Your browser does not support the Web Audio API. Please use a modern browser such as Chrome, Safari, Firefox, or Edge.');
      }
      this.ctx = new AudioCtxClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch((err) => {
        console.warn('AudioContext resume was suspended or blocked by user gesture requirements:', err);
      });
    }
    return this.ctx;
  }

  public getContextState(): AudioContextState | 'uninitialized' {
    return this.ctx ? this.ctx.state : 'uninitialized';
  }

  public async resumeIfNeeded(): Promise<void> {
    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
  }

  /**
   * Starts a clean tone or sound wave specifically tuned for speaker clearing.
   * mode: 'quick' | 'deep' | 'eject' | 'tone'
   */
  public startCleaningTone(
    mode: 'quick' | 'deep' | 'eject' | 'tone',
    baseFrequency: number = 165,
    volume: number = 0.85
  ): void {
    this.stop(); // Safe guard against overlapping oscillators

    const ctx = this.initContext();
    const now = ctx.currentTime;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    // Smooth ramp to target volume over 0.05 seconds to avoid acoustic pop
    const targetGain = Math.max(0, Math.min(1, volume));
    masterGain.gain.linearRampToValueAtTime(targetGain, now + 0.05);
    masterGain.connect(ctx.destination);
    this.gainNode = masterGain;

    if (mode === 'eject') {
      // Water Eject Mode: Strong 165 Hz sawtooth + sine wave with 2.5 Hz low-frequency amplitude modulation (pulsing)
      // This produces rhythmic physical speaker cone excursion pushes to displace water beads.
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(baseFrequency, now);

      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(baseFrequency / 2, now);

      const pulseGain = ctx.createGain();
      pulseGain.gain.setValueAtTime(0.7, now);

      // Low frequency oscillator (LFO) for rhythmic water thumps
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(3, now); // 3 Hz water eject pulses

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.5, now);
      lfo.connect(lfoGain.gain);

      osc.connect(pulseGain);
      subOsc.connect(pulseGain);
      pulseGain.connect(masterGain);

      osc.start(now);
      subOsc.start(now);
      lfo.start(now);

      this.primaryOsc = osc;
      this.secondaryOsc = subOsc;
      this.modOsc = lfo;
      this.modGain = pulseGain;

    } else if (mode === 'deep') {
      // Deep Clean: sweeping tone from 130 Hz up to 350 Hz to hit multiple mechanical resonances
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFrequency, now);

      const oscSquare = ctx.createOscillator();
      oscSquare.type = 'triangle';
      oscSquare.frequency.setValueAtTime(baseFrequency * 1.5, now);

      const blendGain = ctx.createGain();
      blendGain.gain.setValueAtTime(0.5, now);
      oscSquare.connect(blendGain);
      blendGain.connect(masterGain);
      osc.connect(masterGain);

      osc.start(now);
      oscSquare.start(now);

      this.primaryOsc = osc;
      this.secondaryOsc = oscSquare;

      // Start continuous dynamic frequency sweep
      let sweepUp = true;
      let currFreq = baseFrequency;
      const minFreq = Math.max(120, baseFrequency - 45);
      const maxFreq = baseFrequency + 120;

      this.sweepTimer = setInterval(() => {
        if (!this.isPlaying || !this.primaryOsc || !this.ctx) return;
        if (sweepUp) {
          currFreq += 10;
          if (currFreq >= maxFreq) sweepUp = false;
        } else {
          currFreq -= 10;
          if (currFreq <= minFreq) sweepUp = true;
        }
        try {
          const t = this.ctx.currentTime;
          this.primaryOsc.frequency.setTargetAtTime(currFreq, t, 0.1);
        } catch {
          // ignore potential closed context race
        }
      }, 150);

    } else if (mode === 'quick') {
      // Quick Clean: Fast, steady 165 Hz sine with subtle 4 Hz modulation
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFrequency, now);

      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(4, now);

      const lfoAmp = ctx.createGain();
      lfoAmp.gain.setValueAtTime(0.3, now);

      lfo.connect(lfoAmp.gain);
      osc.connect(masterGain);

      osc.start(now);
      lfo.start(now);

      this.primaryOsc = osc;
      this.modOsc = lfo;
    } else {
      // Pure diagnostic tone
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFrequency, now);
      osc.connect(masterGain);
      osc.start(now);
      this.primaryOsc = osc;
    }

    this.isPlaying = true;
  }

  public setFrequency(freq: number): void {
    if (!this.ctx || !this.primaryOsc || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    try {
      this.primaryOsc.frequency.setTargetAtTime(freq, now, 0.05);
      if (this.secondaryOsc) {
        this.secondaryOsc.frequency.setTargetAtTime(freq * 1.5, now, 0.05);
      }
    } catch {
      // Ignore if node is ending
    }
  }

  public setVolume(vol: number): void {
    if (!this.ctx || !this.gainNode || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const clamped = Math.max(0, Math.min(1, vol));
    try {
      this.gainNode.gain.setTargetAtTime(clamped, now, 0.05);
    } catch {
      // Ignore if node is ending
    }
  }

  /**
   * Plays a stereo test tone panned to Left (-1) or Right (+1)
   */
  public playStereoTest(channel: 'left' | 'right' | 'both', frequency: number = 440, volume: number = 0.75): void {
    this.stop();
    const ctx = this.initContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.05);

    // Stereo Panning support
    if (typeof ctx.createStereoPanner === 'function') {
      const panner = ctx.createStereoPanner();
      const panValue = channel === 'left' ? -1 : channel === 'right' ? 1 : 0;
      panner.pan.setValueAtTime(panValue, now);
      osc.connect(gain);
      gain.connect(panner);
      panner.connect(ctx.destination);
    } else {
      // Fallback for older browsers without createStereoPanner
      osc.connect(gain);
      gain.connect(ctx.destination);
    }

    osc.start(now);
    this.primaryOsc = osc;
    this.gainNode = gain;
    this.isPlaying = true;
  }

  public stop(): void {
    if (this.sweepTimer) {
      clearInterval(this.sweepTimer);
      this.sweepTimer = null;
    }

    if (this.ctx && this.gainNode && this.isPlaying) {
      const now = this.ctx.currentTime;
      try {
        // Quick 0.04s fade out to avoid clicks
        this.gainNode.gain.linearRampToValueAtTime(0.0001, now + 0.04);
      } catch {
        // Continue cleanup even if ramp fails
      }
    }

    setTimeout(() => {
      try {
        if (this.primaryOsc) {
          this.primaryOsc.stop();
          this.primaryOsc.disconnect();
          this.primaryOsc = null;
        }
        if (this.secondaryOsc) {
          this.secondaryOsc.stop();
          this.secondaryOsc.disconnect();
          this.secondaryOsc = null;
        }
        if (this.modOsc) {
          this.modOsc.stop();
          this.modOsc.disconnect();
          this.modOsc = null;
        }
        if (this.gainNode) {
          this.gainNode.disconnect();
          this.gainNode = null;
        }
      } catch {
        // Safe swallow if already disconnected
      }
      this.isPlaying = false;
    }, 45);
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

// Export safe singleton getter for client-side app-wide reuse
let audioEngineInstance: AudioEngine | null = null;

export function getAudioEngine(): AudioEngine | null {
  if (typeof window === 'undefined') return null;
  if (!audioEngineInstance) {
    audioEngineInstance = new AudioEngine();
  }
  return audioEngineInstance;
}

export const audioEngine = typeof window !== 'undefined' ? new AudioEngine() : null;
