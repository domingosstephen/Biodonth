'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import { ESPECIALISTAS } from '@/content/especialistas-page';

export function TreatmentEspecialistas({ slug }: { slug: string }) {
  const relevant = ESPECIALISTAS.filter((e) => e.treatments.includes(slug));
  if (relevant.length === 0) return null;

  return (
    <section className="relative bg-concrete-warm py-16 md:py-20 lg:py-24 overflow-hidden">
      <Container width="default">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.12 }} className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-4">Quem conduz este tratamento</motion.p>
          <motion.h2 variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-display font-normal text-[clamp(24px,3vw,36px)] leading-[1.2] text-charcoal">
            Especialistas <em className="font-display italic text-bronze">dedicados.</em>
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ staggerChildren: 0.1 }} className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {relevant.map((esp) => (
            <motion.div key={esp.slug} variants={FADE_UP} transition={{ duration: 0.7, ease: EASE_PREMIUM }}>
              <Link href="/especialistas" className="group block bg-pure border-[1.5px] border-marmorino-light/40 p-6 md:p-7 hover:border-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-bronze text-pure flex items-center justify-center font-display text-[16px]">{esp.initials}</div>
                  <div>
                    <p className="font-display font-normal text-[clamp(17px,1.8vw,20px)] leading-tight text-charcoal transition-colors duration-300 group-hover:text-bronze">{esp.name}</p>
                    <p className="font-body text-[13px] text-marmorino mt-0.5">{esp.role}</p>
                    <p className="font-body text-[11px] text-marmorino-light mt-1">{esp.cro}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
