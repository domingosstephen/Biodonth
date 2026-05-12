'use client';

import { motion, type Variants, type Transition } from 'motion/react';
import { type ReactNode } from 'react';
import { FADE_UP, TRANSITION_DEFAULT, VIEWPORT_DEFAULT } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  variants?: Variants;
  transition?: Transition;
  delay?: number;
  amount?: number;
  as?: 'div' | 'section' | 'p' | 'span' | 'li' | 'article';
  className?: string;
  staggerChild?: boolean;
};

export function Reveal({
  children,
  variants = FADE_UP,
  transition = TRANSITION_DEFAULT,
  delay,
  amount = 0.25,
  as = 'div',
  className,
  staggerChild = false,
}: RevealProps) {
  const Cmp = motion[as] as any;

  if (staggerChild) {
    return (
      <Cmp variants={variants} transition={transition} className={className}>
        {children}
      </Cmp>
    );
  }

  return (
    <Cmp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: VIEWPORT_DEFAULT.once, amount }}
      variants={variants}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </Cmp>
  );
}
