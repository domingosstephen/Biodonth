'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Reveal } from '@/components/ui/Reveal';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import type { TreatmentContent } from '@/content/treatments-content';

export function TreatmentResults({ content }: { content: TreatmentContent }) {
  const { results } = content;
  return (
    <section className="relative bg-charcoal text-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="default">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.12 }} className="max-w-3xl mb-12 md:mb-16">
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">{results.eyebrow}</motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline bronze={results.title} bronzeItalic={results.titleItalic} align="left" />
          </motion.div>
        </motion.div>

        <div className="max-w-3xl space-y-6 mb-14 md:mb-18">
          {results.paragraphs.map((p, i) => (
            <Reveal key={i} as="p" delay={0.2 + i * 0.1} className="font-body text-[clamp(17px,1.8vw,21px)] leading-[1.7] text-concrete/90">{p}</Reveal>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ staggerChildren: 0.12 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
          {results.moments.map((m) => (
            <motion.article key={m.title} variants={FADE_UP} transition={{ duration: 0.8, ease: EASE_PREMIUM }} className="bg-shadow border-[1.5px] border-marmorino/30 p-7 md:p-9">
              <h3 className="font-display italic text-bronze text-[clamp(18px,2vw,22px)] leading-[1.3] mb-3">{m.title}</h3>
              <p className="font-body text-[14px] md:text-[15px] leading-[1.6] text-concrete/80">{m.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
