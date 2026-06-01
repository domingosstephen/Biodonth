'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import type { PrevencaoContent } from '@/content/prevencao-content';

export function PrevencaoSubpageFaq({ content }: { content: PrevencaoContent }) {
  const { faq } = content;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative bg-concrete-warm py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="default">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.12 }} className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">Dúvidas frequentes</motion.p>
          <motion.h2 variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-display font-normal text-[clamp(28px,3.4vw,42px)] leading-[1.2] text-charcoal">
            Perguntas sobre <em className="font-display italic text-bronze">este programa.</em>
          </motion.h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: EASE_PREMIUM }} className="max-w-3xl mx-auto bg-pure border-[1.5px] border-marmorino-light/40 px-6 md:px-10 lg:px-12">
          {faq.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border-b border-marmorino-light/40 last:border-b-0">
                <h3>
                  <button type="button" onClick={() => setOpenIdx(isOpen ? null : i)} aria-expanded={isOpen} className="group w-full flex items-start gap-4 md:gap-6 text-left py-6 md:py-8 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4">
                    <span aria-hidden="true" className={`font-body text-[12px] md:text-[13px] tracking-[0.18em] font-medium pt-1.5 md:pt-2 shrink-0 transition-colors duration-300 ${isOpen ? 'text-bronze' : 'text-marmorino group-hover:text-bronze'}`}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={`flex-1 font-display font-normal text-[clamp(18px,2.2vw,24px)] leading-snug transition-colors duration-300 ${isOpen ? 'text-bronze' : 'text-charcoal group-hover:text-bronze'}`}>{item.question}</span>
                    <span aria-hidden="true" className={`shrink-0 pt-1 transition-all duration-400 ease-[var(--ease-premium)] ${isOpen ? 'rotate-180 text-bronze' : 'text-marmorino group-hover:text-bronze'}`}><ChevronDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} /></span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE_PREMIUM }} className="overflow-hidden">
                      <div className="pl-10 md:pl-14 pr-4 md:pr-12 pb-7 md:pb-9 -mt-2">
                        {item.answer.split('\n\n').map((p, j) => (
                          <p key={j} className={`font-body text-[15px] md:text-[16px] leading-[1.7] text-marmorino ${j > 0 ? 'mt-4' : ''}`}>{p}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
