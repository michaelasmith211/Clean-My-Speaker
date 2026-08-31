import React from 'react';

export const SafetyNotice: React.FC = () => {
  return (
    <aside aria-label="Speaker Cleaning Safety Notice" className="w-full max-w-xl mx-auto my-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm">
      <div className="flex items-start gap-3">
        <span className="text-amber-400 text-lg sm:text-xl shrink-0 mt-0.5">⚠️</span>
        <div className="space-y-1">
          <p className="font-bold text-amber-300">Important Safety & Device Advice:</p>
          <ul className="list-disc list-inside space-y-0.5 text-xs text-amber-200/80">
            <li>
              <strong>Never insert objects:</strong> Avoid needles, pins, toothpicks, or cotton buds into speaker grilles.
            </li>
            <li>
              <strong>No hair dryers or heaters:</strong> Excessive heat softens internal waterproof adhesives and destroys speaker diaphragms.
            </li>
            <li>
              <strong>Physical liquid damage limitation:</strong> Sound vibrations help displace surface liquid droplets from speaker mesh, but cannot repair internal circuit corrosion.
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SafetyNotice;
