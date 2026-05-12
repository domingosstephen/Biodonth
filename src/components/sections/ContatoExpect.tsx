'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import { CONTATO_PAGE } from '@/content/contato-page';

export function ContatoExpect() {
  const { expect } = CONTATO_PAGE;

  return (
    <section className="relative bg-concrete-warm py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container width="wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">
            {expect.eyebrow}
          </motion.p>
          <motion.h2 variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-display font-normal text-[clamp(28px,3.4vw,42px)] leading-[1.2] tracking-[-0.01em] text-charcoal">
            {expect.title}{' '}
            <em className="font-display font-normal italic text-bronze">
              {expect.titleItalic}
            </em>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8"
        >
          {expect.items.map((item) => (
            <motion.article
              key={item.number}
              variants={FADE_UP}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
              className="relative bg-pure border-[1.5px] border-marmorino-light/40 p-8 md:p-10 lg:p-11"
            >
              <span className="block font-display italic text-bronze text-[clamp(40px,5vw,56px)] leading-none mb-4 md:mb-5">
                {item.number}
              </span>
              <h3 className="font-display font-normal text-[clamp(20px,2vw,24px)] leading-[1.25] tracking-[-0.005em] text-charcoal mb-3">
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
