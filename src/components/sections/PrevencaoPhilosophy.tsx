'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Reveal } from '@/components/ui/Reveal';
import { TRANSITION_DEFAULT } from '@/lib/motion';
import { PREVENCAO_PAGE } from '@/content/prevencao-page';

export function PrevencaoPhilosophy() {
  const { philosophy } = PREVENCAO_PAGE;

  return (
    <section className="relative bg-charcoal text-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="default">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={TRANSITION_DEFAULT}
          className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6"
        >
          {philosophy.eyebrow}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
          className="mb-10 md:mb-12"
        >
          <DisplayHeadline bronze={philosophy.bronze} bronzeItalic={philosophy.bronzeItalic} align="left" />
        </motion.div>

        <div className="space-y-6 md:space-y-7 max-w-3xl">
          {philosophy.paragraphs.map((p, i) => (
            <Reveal
              key={i}
              as="p"
              delay={0.3 + i * 0.1}
              className="font-body text-[clamp(17px,1.8vw,21px)] leading-[1.7] text-concrete/90"
            >
              {p}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
