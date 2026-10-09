import React, { useSyncExternalStore } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, sfx, subscribeSound } from '@/lib/sound';

interface SoundToggleProps {
  /**
   * Styling hook. Pass the nav-strip cell class on desktop, or a full-width row
   * class inside the mobile sheet. Defaults to a standalone bordered control.
   */
  className?: string;
  /** Renders the readable label next to the icon (used inside the mobile sheet). */
  showLabel?: boolean;
}

const DEFAULT_CLASS =
  'inline-flex items-center gap-2 px-2 py-1.5 border border-af-border-hairline ' +
  'text-af-text-dim hover:text-alien-gold hover:border-af-border-strong hover:bg-alien-gold/10';

/**
 * Interface-sound switch. It lives inside the navigation (desktop strip and
 * mobile sheet) so nobody has to hunt for it, and the choice survives reloads.
 * `data-sfx="off"` tells the global cue listener to stay quiet on this control,
 * otherwise the click cue would fire in the same tick it toggles audio.
 */
const SoundToggle: React.FC<SoundToggleProps> = ({ className, showLabel = false }) => {
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
      className={className ?? DEFAULT_CLASS}
    >
      {enabled ? <Volume2 size={showLabel ? 16 : 18} /> : <VolumeX size={showLabel ? 16 : 18} />}
      {showLabel && (
        <span className="text-[10px] tracking-[0.2em] uppercase">Interface sound</span>
      )}
    </button>
  );
};

export default SoundToggle;
