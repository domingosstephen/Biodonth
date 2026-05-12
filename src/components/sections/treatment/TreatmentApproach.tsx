'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import type { TreatmentContent } from '@/content/treatments-content';

export function TreatmentApproach({ content }: { content: TreatmentContent }) {
  const { approach } = content;
  return (
    <section className="relative bg-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="default">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.12 }} className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">{approach.eyebrow}</motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline bronze={approach.title} bronzeItalic={approach.titleItalic} align="center" />
          </motion.div>
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto">{approach.intro}</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} transition={{ staggerChildren: 0.08 }} className="max-w-3xl mx-auto">
          {approach.steps.map((step, i) => (
            <motion.div key={step.number} variants={FADE_UP} transition={{ duration: 0.7, ease: EASE_PREMIUM }} className={`flex gap-6 md:gap-8 ${i > 0 ? 'mt-10 md:mt-12 pt-10 md:pt-12 border-t border-marmorino-light/30' : ''}`}>
              <span className="shrink-0 font-display italic text-bronze text-[clamp(32px,4vw,48px)] leading-none pt-1">{step.number}</span>
              <div>
                <h3 className="font-display font-normal text-[clamp(20px,2.2vw,26px)] leading-[1.25] text-charcoal mb-3">{step.title}</h3>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-marmorino">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
