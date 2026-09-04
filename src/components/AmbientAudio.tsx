import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Waves } from 'lucide-react';

export const AmbientAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isSetupRef = useRef<boolean>(false);

  const toggleSound = () => {
    if (!isPlaying) {
      startWaves();
    } else {
      stopWaves();
    }
  };

  const startWaves = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Generate soft pink/brown ocean wave noise using AudioBufferSource
      const bufferSize = ctx.sampleRate * 4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Low pass filter to create brown/pink soft noise mimicking ocean tide
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 2.5; // Gain
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      // Low pass filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      // LFO (Low frequency oscillator) to modulate frequency and simulate wave swell
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // ~8 sec wave cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(220, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      // Main Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 2.5); // smooth fade-in
      gainNodeRef.current = masterGain;

      noiseSource.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      noiseSource.start();
      isSetupRef.current = true;
      setIsPlaying(true);
    } catch (e) {
      console.warn('Audio not allowed without gesture', e);
    }
  };

  const stopWaves = () => {
    if (audioContextRef.current && gainNodeRef.current) {
      const ctx = audioContextRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      setTimeout(() => {
        if (ctx.state !== 'closed') {
          ctx.suspend();
        }
        setIsPlaying(false);
      }, 850);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      id="btn-ambient-sound-toggle"
      onClick={toggleSound}
      title={isPlaying ? "Mute Ocean Ambience" : "Listen to Key West Ocean Waves"}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border border-[#dfc19c]/40 bg-[#1b2826]/70 hover:bg-[#1b2826] text-[#dfc19c] backdrop-blur-md shadow-sm group"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#dfc19c] animate-pulse" />
          <span className="hidden sm:inline">Ocean Waves: On</span>
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-2 bg-[#dfc19c] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-0.5 h-3 bg-[#dfc19c] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-0.5 h-1.5 bg-[#dfc19c] rounded-full animate-bounce"></span>
          </div>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#dfc19c]/70 group-hover:text-[#dfc19c]" />
          <span className="hidden sm:inline">Ocean Waves</span>
          <Waves className="w-3.5 h-3.5 text-[#dfc19c]/60 group-hover:text-[#dfc19c]" />
        </>
      )}
    </button>
  );
};
