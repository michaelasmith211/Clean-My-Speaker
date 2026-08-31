import { CleaningModeConfig, SpeakerTestTone } from './types';

export const SITE_URL = 'https://cleanmyspeaker.net';
export const SITE_NAME = 'Clean My Speaker';
export const SITE_TAGLINE = 'Clean My Speaker Online — Help Remove Water & Moisture From Your Phone Speaker';

export const SOCIAL_LINKS = [
  { name: 'X (Twitter)', url: 'https://x.com/cleanmyspeaker', handle: '@cleanmyspeaker' },
  { name: 'Facebook', url: 'https://www.facebook.com/cleanmyspeaker', handle: 'cleanmyspeaker' },
  { name: 'Instagram', url: 'https://www.instagram.com/cleanmyspeaker', handle: '@cleanmyspeaker' },
  { name: 'YouTube', url: 'https://www.youtube.com/@cleanmyspeaker', handle: '@cleanmyspeaker' },
  { name: 'Pinterest', url: 'https://www.pinterest.com/cleanmyspeaker', handle: 'cleanmyspeaker' },
];

export const CLEANING_MODES: Record<string, CleaningModeConfig> = {
  quick: {
    id: 'quick',
    name: 'Quick Clean',
    duration: 30,
    description: 'Fast acoustic pulse cycle for light moisture or routine clearing.',
    defaultFrequency: 165,
  },
  deep: {
    id: 'deep',
    name: 'Deep Clean',
    duration: 60,
    description: 'Multi-frequency sweeping tone sequence to dislodge stubborn droplets and debris.',
    defaultFrequency: 165,
  },
  eject: {
    id: 'eject',
    name: 'Water Eject',
    duration: 45,
    description: 'Maximum speaker diaphragm displacement pulses specifically engineered for liquid expulsion.',
    defaultFrequency: 165,
  },
};

export const TEST_TONES: SpeakerTestTone[] = [
  { label: '100 Hz', frequency: 100, description: 'Sub-bass — tests low diaphragm excursion and sub-bass clarity.' },
  { label: '250 Hz', frequency: 250, description: 'Low-mid — standard resonance region for water movement.' },
  { label: '500 Hz', frequency: 500, description: 'Midrange — fundamental speech resonance and body.' },
  { label: '1 kHz', frequency: 1000, description: 'Reference tone — standard audio benchmark tone.' },
  { label: '2 kHz', frequency: 2000, description: 'Upper midrange — ear sensitivity peak and clarity zone.' },
  { label: '5 kHz', frequency: 5000, description: 'Presence / Treble — tests speaker coil cleanliness and crispness.' },
  { label: '10 kHz', frequency: 10000, description: 'High treble — checks micro-mesh openness and acoustic transparency.' },
];
