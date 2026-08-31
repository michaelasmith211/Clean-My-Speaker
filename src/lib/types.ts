export type CleaningMode = 'quick' | 'deep' | 'eject';

export interface CleaningModeConfig {
  id: CleaningMode;
  name: string;
  duration: number; // in seconds
  description: string;
  defaultFrequency: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpeakerTestTone {
  label: string;
  frequency: number;
  description: string;
}
