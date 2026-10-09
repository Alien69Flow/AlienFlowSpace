import React, { useSyncExternalStore } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, sfx, subscribeSound } from '@/lib/sound';

/**
 * Interface-sound switch. Lives in the header so nobody has to hunt for it, and
 * the choice survives reloads. `data-sfx="off"` tells the global cue listener to
 * stay quiet on this control (otherwise the click cue fires while toggling).
 */
const SoundToggle: React.FC = () => {
  const enabled = useSyncExternalStore(subscribeSound, isSoundEnabled, () => false);

  const label = enabled ? 'Turn interface sound off' : 'Turn interface sound on';

  return (
    <button
      type="button"
      data-sfx="off"
      aria-pressed={enabled}
      aria-label={label}
      title={label}
      onClick={() => {
        const next = !enabled;
        setSoundEnabled(next);
        // This click is the user gesture that unlocks audio, so confirm right away.
        if (next) sfx.open();
      }}
      className={`p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-alien-gold/50 ${
        enabled
          ? 'text-alien-gold hover:text-alien-green hover:bg-af-surface-2/30'
          : 'text-af-text-muted/60 hover:text-af-text-muted hover:bg-af-surface-2/20'
      }`}
    >
      {enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
};

export default SoundToggle;
