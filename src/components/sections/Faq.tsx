'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { FaqItem } from '@/components/ui/FaqItem';
import { FAQ_ITEMS } from '@/content/faq';
import { HOME_FAQ } from '@/content/home';
import { WHATSAPP_CTA_URL } from '@/content/contact';

import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="duvidas" className="relative bg-concrete-warm py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="default">
        {/* Header */}
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
            className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6"
          >
            {HOME_FAQ.eyebrow}
          </motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline bronze={HOME_FAQ.bronze} bronzeItalic={HOME_FAQ.bronzeItalic} align="center" />
          </motion.div>
          <motion.p
            variants={FADE_UP}
            transition={TRANSITION_DEFAULT}
            className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto"
          >
            {HOME_FAQ.description}
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          className="max-w-3xl mx-auto bg-concrete border-[1.5px] border-marmorino-light/40 px-6 md:px-10 lg:px-12"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.15 }}
          className="mt-12 md:mt-16 lg:mt-20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center"
        >
          <p className="font-body italic text-marmorino text-[15px] md:text-[16px]">
            {HOME_FAQ.ctaText}
          </p>
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-body text-[15px] font-medium text-bronze hover:text-bronze-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 py-1"
          >
            <span className="relative">
              {HOME_FAQ.ctaLabel}
              <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-full bg-current scale-x-100 transition-transform duration-400 ease-[var(--ease-premium)] origin-left" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-[var(--ease-premium)] group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
