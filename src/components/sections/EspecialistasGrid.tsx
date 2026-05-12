'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { EspecialistaCard } from '@/components/ui/EspecialistaCard';
import { ESPECIALISTAS } from '@/content/especialistas-page';
import { FADE_UP, EASE_PREMIUM } from '@/lib/motion';

export function EspecialistasGrid() {
  return (
    <section className="relative bg-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10 md:gap-y-16 lg:gap-x-12 lg:gap-y-20"
        >
          {ESPECIALISTAS.map((esp) => (
            <motion.div
              key={esp.slug}
              variants={FADE_UP}
              transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            >
              <EspecialistaCard especialista={esp} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
