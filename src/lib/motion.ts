// Centralized motion variants, transitions, and eases.
// Every motion-using component should import from here — no inline variant duplication.

import type { Variants, Transition } from 'motion/react';

export const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const TRANSITION_DEFAULT: Transition = { duration: 0.9, ease: EASE_PREMIUM };
export const TRANSITION_LONG:    Transition = { duration: 1.1, ease: EASE_PREMIUM };
export const TRANSITION_QUICK:   Transition = { duration: 0.45, ease: EASE_PREMIUM };

export const FADE_UP: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const FADE_UP_SHORT: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const FADE_IN: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

export const SCALE_FADE: Variants = {
  hidden:  { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1 },
};

export const STAGGER_DEFAULT: Transition = {
  staggerChildren: 0.12,
  delayChildren: 0.05,
};

export const STAGGER_TIGHT: Transition = {
  staggerChildren: 0.06,
  delayChildren: 0,
};

export const VIEWPORT_DEFAULT = { once: true, amount: 0.25 } as const;
export const VIEWPORT_EARLY   = { once: true, amount: 0.1  } as const;
