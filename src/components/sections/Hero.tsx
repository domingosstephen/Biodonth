'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { FramedImage } from '@/components/ui/FramedImage';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Parallax } from '@/components/ui/Parallax';
import { HOME_HERO } from '@/content/home';
import { WHATSAPP_CTA_URL } from '@/content/contact';
import { FADE_UP, SCALE_FADE, TRANSITION_DEFAULT, TRANSITION_LONG } from '@/lib/motion';

export function Hero() {
  const [imgSrc, setImgSrc] = useState<string>(HOME_HERO.image.src);

  return (
    <section
      id="hero"
      className="relative bg-concrete pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 overflow-hidden"
    >
      {/* Subtle marmorino plaster texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.557 0 0 0 0 0.561 0 0 0 0 0.569 0 0 0 0.12 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <Container width="wide" className="relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT — content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <motion.p
              variants={FADE_UP}
              transition={TRANSITION_DEFAULT}
              className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6"
            >
              {HOME_HERO.eyebrow}
            </motion.p>

            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
              <DisplayHeadline
                bronze={HOME_HERO.bronze}
                bronzeItalic={HOME_HERO.bronzeItalic}
                subhead={HOME_HERO.subhead}
                align="left"
                reveal
              />
            </motion.div>

            <motion.div
              variants={FADE_UP}
              transition={TRANSITION_DEFAULT}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                variant="pill"
                as="a"
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HOME_HERO.primaryCta.label}
              </Button>
              <Button
                variant="ghost"
                as="a"
                href={HOME_HERO.secondaryCta.href}
              >
                {HOME_HERO.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — image with bronze frame + parallax */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={SCALE_FADE}
            transition={{ ...TRANSITION_LONG, delay: 0.2 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <Parallax distance={40}>
              <FramedImage
                src={imgSrc}
                alt={HOME_HERO.image.alt}
                width={1600}
                height={1200}
                priority
                onError={() => {
                  if (imgSrc !== HOME_HERO.image.fallback) {
                    setImgSrc(HOME_HERO.image.fallback);
                  }
                }}
                className="w-full h-auto"
              />
            </Parallax>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
