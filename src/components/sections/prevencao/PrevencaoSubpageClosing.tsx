'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_CTA_URL } from '@/content/contact';
import { FADE_UP, TRANSITION_DEFAULT } from '@/lib/motion';
import type { PrevencaoContent } from '@/content/prevencao-content';

export function PrevencaoSubpageClosing({ content }: { content: PrevencaoContent }) {
  const { closing } = content;
  return (
    <section className="relative bg-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.12 }} className="max-w-3xl mx-auto text-center">
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">{closing.eyebrow}</motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline bronze={closing.bronze} bronzeItalic={closing.bronzeItalic} align="center" />
          </motion.div>
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 md:mt-8 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto">{closing.description}</motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="pill" as="a" href={WHATSAPP_CTA_URL} target="_blank" rel="noopener noreferrer">Agendar consulta</Button>
            <Link href="/prevencao" className="group inline-flex items-center gap-2 font-body text-[15px] font-medium text-bronze hover:text-bronze-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 py-2">
              <span className="relative">Ver todos os programas<span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100" /></span>
              <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-[var(--ease-premium)] group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
