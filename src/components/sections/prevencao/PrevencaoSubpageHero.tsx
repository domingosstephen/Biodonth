'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { FramedImage } from '@/components/ui/FramedImage';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import type { PrevencaoProgram } from '@/content/prevencao-page';
import type { PrevencaoContent } from '@/content/prevencao-content';

type Props = { program: PrevencaoProgram; content: PrevencaoContent };

export function PrevencaoSubpageHero({ program, content }: Props) {
  const [imgSrc, setImgSrc] = useState<string>(program.image.src);
  const { hero } = content;

  return (
    <section className="relative bg-concrete pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.25] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.557 0 0 0 0 0.561 0 0 0 0 0.569 0 0 0 0.12 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
      <Container width="wide" className="relative">
        <motion.nav aria-label="Breadcrumb" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_PREMIUM }} className="mb-8 md:mb-10">
          <ol className="flex items-center gap-2 font-body text-[12px] md:text-[13px] tracking-[0.05em] text-marmorino">
            <li><Link href="/" className="hover:text-bronze transition-colors duration-300">Início</Link></li>
            <li aria-hidden="true"><ChevronRight className="w-3 h-3" strokeWidth={1.5} /></li>
            <li><Link href="/prevencao" className="hover:text-bronze transition-colors duration-300">Prevenção</Link></li>
            <li aria-hidden="true"><ChevronRight className="w-3 h-3" strokeWidth={1.5} /></li>
            <li aria-current="page" className="text-bronze">{program.audience}</li>
          </ol>
        </motion.nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.15, delayChildren: 0.1 }} className="lg:col-span-5 order-2 lg:order-1">
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">{hero.eyebrow}</motion.p>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
              <DisplayHeadline bronze={hero.bronze} bronzeItalic={hero.bronzeItalic} align="left" reveal />
            </motion.div>
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 md:mt-8 font-display italic text-[clamp(18px,2.2vw,26px)] leading-snug text-marmorino max-w-xl">{hero.description}</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: EASE_PREMIUM, delay: 0.2 }} className="lg:col-span-7 order-1 lg:order-2">
            <FramedImage src={imgSrc} alt={program.image.alt} width={1200} height={900} priority onError={() => { if (imgSrc !== program.image.fallback) setImgSrc(program.image.fallback); }} className="w-full h-auto" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
