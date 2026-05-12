'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Reveal } from '@/components/ui/Reveal';
import { FADE_UP, TRANSITION_DEFAULT } from '@/lib/motion';
import type { PrevencaoContent } from '@/content/prevencao-content';

export function PrevencaoSubpageSignals({ content }: { content: PrevencaoContent }) {
  const { signals } = content;
  return (
    <section className="relative bg-concrete-warm py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.12 }} className="lg:col-span-5">
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">{signals.eyebrow}</motion.p>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
              <DisplayHeadline bronze={signals.title} bronzeItalic={signals.titleItalic} align="left" />
            </motion.div>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-8 w-16 h-px bg-bronze" aria-hidden="true" />
          </motion.div>
          <div className="lg:col-span-7 space-y-6">
            <Reveal as="p" className="font-body text-[clamp(16px,1.7vw,19px)] leading-[1.7] text-charcoal">{signals.intro}</Reveal>
            <Reveal as="div" delay={0.1}>
              <ul className="space-y-3 mt-4">
                {signals.list.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-[15px] md:text-[16px] leading-[1.7] text-charcoal">
                    <span aria-hidden="true" className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-bronze" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="p" delay={0.2} className="font-body text-[clamp(16px,1.7vw,19px)] leading-[1.7] text-marmorino italic">{signals.bridge}</Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
