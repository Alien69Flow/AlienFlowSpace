import type { MouseEvent } from 'react';

/**
 * Sets `--af-mx` / `--af-my` on the hovered element so the `.af-spotlight`
 * pseudo-element can render a glow that follows the cursor. Written as a plain
 * handler (not a component) so it can be dropped onto any card, including
 * framer-motion elements that already carry their own animation props.
 */
export function spotlightMove(event: MouseEvent<HTMLElement>): void {
  const element = event.currentTarget;
  if (!element?.style || typeof element.getBoundingClientRect !== 'function') return;
  const rect = element.getBoundingClientRect();
  element.style.setProperty('--af-mx', `${event.clientX - rect.left}px`);
  element.style.setProperty('--af-my', `${event.clientY - rect.top}px`);
}
