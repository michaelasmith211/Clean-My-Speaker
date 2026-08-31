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
  private modGain: GainNode | null = null;
  private pulseGain: GainNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;
  private sweepTimer: NodeJS.Timeout | null = null;
  private stopTimeout: NodeJS.Timeout | null = null;

  public getOrCreateContext(): AudioContext {
    if (!this.ctx || this.ctx.state === 'closed') {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) {
        throw new Error(
          'Your browser does not support the Web Audio API. Please use a modern browser such as Chrome, Safari, Firefox, or Edge.'
        );
      }
      this.ctx = new AudioCtxClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch((err) => {
        console.warn('AudioContext resume was suspended or blocked:', err);
      });
    }
    return this.ctx;
  }

  public getContextState(): AudioContextState | 'uninitialized' {
    return this.ctx ? this.ctx.state : 'uninitialized';
  }

  public async resumeIfNeeded(): Promise<void> {
    const ctx = this.getOrCreateContext();
    if (ctx && ctx.state === 'suspended') {
      await ctx.resume();
    }
  }

  /**
   * Immediately stops and disconnects all active audio nodes and cancels any pending timeouts.
   */
  private cleanupNodes(): void {
    if (this.stopTimeout) {
      clearTimeout(this.stopTimeout);
      this.stopTimeout = null;
    }
    if (this.sweepTimer) {
      clearInterval(this.sweepTimer);
      this.sweepTimer = null;
    }

    if (this.primaryOsc) {
      try {
        this.primaryOsc.stop();
        this.primaryOsc.disconnect();
      } catch {
        // Safe swallow if already stopped
      }
      this.primaryOsc = null;
    }

    if (this.secondaryOsc) {
      try {
        this.secondaryOsc.stop();
        this.secondaryOsc.disconnect();
      } catch {
        // Safe swallow if already stopped
      }
      this.secondaryOsc = null;
    }

    if (this.modOsc) {
      try {
        this.modOsc.stop();
        this.modOsc.disconnect();
      } catch {
        // Safe swallow if already stopped
      }
      this.modOsc = null;
    }

    if (this.modGain) {
      try {
        this.modGain.disconnect();
      } catch {
        // Safe swallow
      }
      this.modGain = null;
    }

    if (this.pulseGain) {
      try {
        this.pulseGain.disconnect();
      } catch {
        // Safe swallow
      }
      this.pulseGain = null;
    }

    if (this.gainNode) {
      try {
        this.gainNode.disconnect();
      } catch {
        // Safe swallow
      }
      this.gainNode = null;
    }

    this.isPlaying = false;
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
    // 1. Immediately cancel any pending stop and cleanup existing nodes synchronously
    this.cleanupNodes();

    const ctx = this.getOrCreateContext();
    const now = ctx.currentTime;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    const targetGain = Math.max(0.1, Math.min(1, volume));
    masterGain.gain.linearRampToValueAtTime(targetGain, now + 0.05);
    masterGain.connect(ctx.destination);
    this.gainNode = masterGain;

    if (mode === 'eject') {
      // Water Eject Mode: Strong 165 Hz sawtooth + sine wave with 2.5 Hz amplitude modulation
      // This produces rhythmic physical speaker cone excursion pushes to displace water beads.
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(baseFrequency, now);

      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(baseFrequency, now);

      // pulseGain acts as the carrier volume
      const pulseGain = ctx.createGain();
      pulseGain.gain.setValueAtTime(0.55, now);

      // Low frequency oscillator (LFO) for rhythmic 2.5Hz water eject pulses
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(2.5, now);

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.4, now); // Modulates pulseGain.gain between 0.15 and 0.95

      lfo.connect(lfoGain);
      lfoGain.connect(pulseGain.gain);

      osc.connect(pulseGain);
      subOsc.connect(pulseGain);
      pulseGain.connect(masterGain);

      osc.start(now);
      subOsc.start(now);
      lfo.start(now);

      this.primaryOsc = osc;
      this.secondaryOsc = subOsc;
      this.modOsc = lfo;
      this.modGain = lfoGain;
      this.pulseGain = pulseGain;

    } else if (mode === 'deep') {
      // Deep Clean: sweeping tone across mechanical resonances (125 Hz to 285 Hz)
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFrequency, now);

      const oscTriangle = ctx.createOscillator();
      oscTriangle.type = 'triangle';
      oscTriangle.frequency.setValueAtTime(baseFrequency * 1.5, now);

      const blendGain = ctx.createGain();
      blendGain.gain.setValueAtTime(0.4, now);
      oscTriangle.connect(blendGain);
      blendGain.connect(masterGain);
      osc.connect(masterGain);

      osc.start(now);
      oscTriangle.start(now);

      this.primaryOsc = osc;
      this.secondaryOsc = oscTriangle;

      // Dynamic frequency sweep
      let sweepUp = true;
      let currFreq = baseFrequency;
      const minFreq = Math.max(120, baseFrequency - 45);
      const maxFreq = baseFrequency + 120;

      this.sweepTimer = setInterval(() => {
        if (!this.isPlaying || !this.primaryOsc || !this.ctx) return;
        if (sweepUp) {
          currFreq += 8;
          if (currFreq >= maxFreq) sweepUp = false;
        } else {
          currFreq -= 8;
          if (currFreq <= minFreq) sweepUp = true;
        }
        try {
          const t = this.ctx.currentTime;
          this.primaryOsc.frequency.setTargetAtTime(currFreq, t, 0.08);
          if (this.secondaryOsc) {
            this.secondaryOsc.frequency.setTargetAtTime(currFreq * 1.5, t, 0.08);
          }
        } catch {
          // ignore potential closed context race
        }
      }, 120);

    } else if (mode === 'quick') {
      // Quick Clean: Fast, steady 165 Hz tone with 3.5 Hz acoustic pulsation
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFrequency, now);

      const subOsc = ctx.createOscillator();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(baseFrequency, now);

      const pulseGain = ctx.createGain();
      pulseGain.gain.setValueAtTime(0.6, now);

      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(3.5, now);

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.35, now);

      lfo.connect(lfoGain);
      lfoGain.connect(pulseGain.gain);

      osc.connect(pulseGain);
      subOsc.connect(pulseGain);
      pulseGain.connect(masterGain);

      osc.start(now);
      subOsc.start(now);
      lfo.start(now);

      this.primaryOsc = osc;
      this.secondaryOsc = subOsc;
      this.modOsc = lfo;
      this.modGain = lfoGain;
      this.pulseGain = pulseGain;

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
    this.cleanupNodes();
    const ctx = this.getOrCreateContext();
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
      osc.connect(gain);
      gain.connect(ctx.destination);
    }

    osc.start(now);
    this.primaryOsc = osc;
    this.gainNode = gain;
    this.isPlaying = true;
  }

  /**
   * Smoothly fades out and stops playback over 40ms to prevent acoustic pops.
   */
  public stop(): void {
    if (this.stopTimeout) {
      clearTimeout(this.stopTimeout);
      this.stopTimeout = null;
    }
    if (this.sweepTimer) {
      clearInterval(this.sweepTimer);
      this.sweepTimer = null;
    }

    if (this.ctx && this.gainNode && this.isPlaying) {
      try {
        const now = this.ctx.currentTime;
        this.gainNode.gain.cancelScheduledValues(now);
        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
        this.gainNode.gain.linearRampToValueAtTime(0.0001, now + 0.04);
      } catch {
        // Continue cleanup even if ramp fails
      }
    }

    this.stopTimeout = setTimeout(() => {
      this.cleanupNodes();
    }, 50);
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
