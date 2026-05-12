'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type ParallaxProps = {
  children: ReactNode;
  distance?: number;
  scale?: number;
  className?: string;
  disableOnTouch?: boolean;
};

export function Parallax({
  children,
  distance = 40,
  scale = 1.08,
  className,
  disableOnTouch = true,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (!disableOnTouch || typeof window === 'undefined') return;
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)');
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [disableOnTouch]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance / 2, -distance / 2]);

  const disabled = reducedMotion || isTouch;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      {disabled ? (
        <div>{children}</div>
      ) : (
        <motion.div style={{ y, scale }} className="will-change-transform">
          {children}
        </motion.div>
      )}
    </div>
  );
}
