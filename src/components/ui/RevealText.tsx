'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import { EASE_PREMIUM } from '@/lib/motion';

type RevealTextProps = {
  children: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  as?: 'span' | 'div';
  className?: string;
};

export function RevealText({
  children,
  stagger = 0.03,
  duration = 0.7,
  delay = 0,
  as = 'span',
  className,
}: RevealTextProps) {
  const reducedMotion = useReducedMotion();
  const words = children.split(/\s+/).filter(Boolean);

  if (reducedMotion) {
    const Cmp = as;
    return <Cmp className={className}>{children}</Cmp>;
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const word: Variants = {
    hidden: { y: '110%' },
    visible: { y: '0%', transition: { duration, ease: EASE_PREMIUM } },
  };

  const Cmp = motion[as] as any;

  return (
    <Cmp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      aria-label={children}
    >
      {words.map((w: string, i: number) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top"
          aria-hidden="true"
        >
          <motion.span className="inline-block" variants={word}>
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Cmp>
  );
}
