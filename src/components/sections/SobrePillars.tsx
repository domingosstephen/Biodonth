'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import { SOBRE_PAGE } from '@/content/sobre-page';

export function SobrePillars() {
  const { pillars } = SOBRE_PAGE;

  return (
    <section className="relative bg-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-18 lg:mb-22"
        >
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">
            {pillars.eyebrow}
          </motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline bronze={pillars.title} bronzeItalic={pillars.titleItalic} align="center" />
          </motion.div>
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(15px,1.6vw,18px)] max-w-2xl mx-auto">
            {pillars.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8"
        >
          {pillars.items.map((item, i) => (
            <motion.article
              key={item.label}
              variants={FADE_UP}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
              className="relative bg-pure border-[1.5px] border-marmorino-light/40 p-8 md:p-10 lg:p-12 flex flex-col"
            >
              <span className="absolute top-6 right-6 md:top-8 md:right-8 font-body text-[11px] tracking-[0.18em] text-marmorino font-medium">
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="inline-block self-start bg-bronze text-concrete font-body uppercase text-[11px] tracking-[0.18em] font-medium px-3 py-1 rounded-[2px] mb-6">
                {item.label}
              </span>

              <h3 className="font-display font-normal text-[clamp(22px,2.3vw,28px)] leading-[1.25] tracking-[-0.005em] text-charcoal mb-4">
                {item.title}
              </h3>

              <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-marmorino">
                {item.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
