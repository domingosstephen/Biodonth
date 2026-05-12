'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { TREATMENTS } from '@/content/treatments';
import { FADE_UP, EASE_PREMIUM } from '@/lib/motion';

export function TratamentosFullGrid() {
  return (
    <section className="relative bg-concrete pb-20 md:pb-28 lg:pb-32 overflow-hidden">
      <Container width="wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-14 lg:gap-x-12 lg:gap-y-16"
        >
          {TREATMENTS.map((treatment) => (
            <motion.div
              key={treatment.slug}
              variants={FADE_UP}
              transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            >
              <TreatmentCard treatment={treatment} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
