'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import { TRATAMENTOS_PAGE } from '@/content/tratamentos-page';

export function TratamentosPageHero() {
  const { hero, breadcrumb } = TRATAMENTOS_PAGE;

  return (
    <section className="relative bg-concrete pt-32 md:pt-36 lg:pt-40 pb-14 md:pb-18 lg:pb-22 overflow-hidden">
      {/* Subtle marmorino plaster texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.30] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.557 0 0 0 0 0.561 0 0 0 0 0.569 0 0 0 0.12 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <Container width="wide" className="relative">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          className="mb-8 md:mb-10"
        >
          <ol className="flex items-center gap-2 font-body text-[12px] md:text-[13px] tracking-[0.05em] text-marmorino">
            <li>
              <Link
                href="/"
                className="hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
              >
                {breadcrumb.home}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            </li>
            <li aria-current="page" className="text-bronze">
              {breadcrumb.current}
            </li>
          </ol>
        </motion.nav>

        {/* Headline block */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
          className="max-w-4xl"
        >
          <motion.p
            variants={FADE_UP}
            transition={TRANSITION_DEFAULT}
            className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline
              bronze={hero.bronze}
              bronzeItalic={hero.bronzeItalic}
              align="left"
              reveal
            />
          </motion.div>

          <motion.p
            variants={FADE_UP}
            transition={TRANSITION_DEFAULT}
            className="mt-6 md:mt-8 font-body text-marmorino leading-relaxed text-[clamp(16px,1.7vw,20px)] max-w-2xl"
          >
            {hero.description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
