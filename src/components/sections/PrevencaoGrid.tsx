'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { PrevencaoCard } from '@/components/ui/PrevencaoCard';
import { PREVENCAO_PROGRAMS, PREVENCAO_PAGE } from '@/content/prevencao-page';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';

export function PrevencaoGrid() {
  const { grid } = PREVENCAO_PAGE;

  return (
    <section className="relative bg-concrete py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container width="wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-18 lg:mb-22"
        >
          <motion.p
            variants={FADE_UP}
            transition={TRANSITION_DEFAULT}
            className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6"
          >
            {grid.eyebrow}
          </motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline bronze={grid.title} bronzeItalic={grid.titleItalic} align="center" />
          </motion.div>
          <motion.p
            variants={FADE_UP}
            transition={TRANSITION_DEFAULT}
            className="mt-6 md:mt-8 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto"
          >
            {grid.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-14 lg:gap-x-12 lg:gap-y-16"
        >
          {PREVENCAO_PROGRAMS.map((program) => (
            <motion.div
              key={program.slug}
              variants={FADE_UP}
              transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            >
              <PrevencaoCard program={program} href={`/prevencao/${program.slug}`} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
