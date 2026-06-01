'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import type { PrevencaoContent } from '@/content/prevencao-content';

export function PrevencaoSubpageIncluded({ content }: { content: PrevencaoContent }) {
  const { included } = content;
  return (
    <section className="relative bg-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="default">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.12 }} className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">{included.eyebrow}</motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline bronze={included.title} bronzeItalic={included.titleItalic} align="center" />
          </motion.div>
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto">{included.intro}</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} transition={{ staggerChildren: 0.08 }} className="max-w-3xl mx-auto">
          {included.items.map((item, i) => (
            <motion.div key={i} variants={FADE_UP} transition={{ duration: 0.7, ease: EASE_PREMIUM }} className={`flex gap-6 md:gap-8 ${i > 0 ? 'mt-10 md:mt-12 pt-10 md:pt-12 border-t border-marmorino-light/30' : ''}`}>
              <span className="shrink-0 font-display italic text-bronze text-[clamp(32px,4vw,48px)] leading-none pt-1">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display font-normal text-[clamp(20px,2.2vw,26px)] leading-[1.25] text-charcoal mb-3">{item.title}</h3>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-marmorino">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
