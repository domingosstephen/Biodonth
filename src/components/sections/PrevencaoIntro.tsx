'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Reveal } from '@/components/ui/Reveal';
import { FADE_UP, TRANSITION_DEFAULT } from '@/lib/motion';
import { PREVENCAO_PAGE } from '@/content/prevencao-page';

export function PrevencaoIntro() {
  const { intro } = PREVENCAO_PAGE;

  return (
    <section className="relative bg-concrete-warm py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.12 }}
            className="lg:col-span-5"
          >
            <motion.p
              variants={FADE_UP}
              transition={TRANSITION_DEFAULT}
              className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6"
            >
              {intro.eyebrow}
            </motion.p>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
              <DisplayHeadline bronze={intro.title} bronzeItalic={intro.titleItalic} align="left" />
            </motion.div>
            <motion.div
              variants={FADE_UP}
              transition={TRANSITION_DEFAULT}
              className="mt-8 w-16 h-px bg-bronze"
              aria-hidden="true"
            />
          </motion.div>

          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            {intro.paragraphs.map((p, i) => (
              <Reveal
                key={i}
                as="p"
                delay={i * 0.1}
                className="font-body text-[clamp(16px,1.7vw,19px)] leading-[1.7] text-charcoal"
              >
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
