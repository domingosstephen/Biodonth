'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { VideoModal } from '@/components/ui/VideoModal';
import { Parallax } from '@/components/ui/Parallax';
import { HOME_VIDEO } from '@/content/home';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';

export function VideoSection() {
  const [open, setOpen] = useState(false);
  const [posterErrored, setPosterErrored] = useState(false);
  const posterSrc = posterErrored ? HOME_VIDEO.posterFallback : HOME_VIDEO.posterSrc;

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    fetch(HOME_VIDEO.videoSrc, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          console.warn(
            `[Biodonth] Video file not found at ${HOME_VIDEO.videoSrc}. ` +
            `Place the .mp4 in /public/videos/. See /public/videos/README.md for specs.`
          );
        }
      })
      .catch(() => {
        console.warn(
          `[Biodonth] Video file not found at ${HOME_VIDEO.videoSrc}. ` +
          `Place the .mp4 in /public/videos/. See /public/videos/README.md for specs.`
        );
      });
  }, []);

  return (
    <section
      id="conheca-a-clinica"
      className="relative bg-concrete-warm py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <Container width="wide">
        {/* Header block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.p
            variants={FADE_UP}
            transition={TRANSITION_DEFAULT}
            className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6"
          >
            {HOME_VIDEO.eyebrow}
          </motion.p>

          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline
              bronze={HOME_VIDEO.bronze}
              bronzeItalic={HOME_VIDEO.bronzeItalic}
              align="center"
            />
          </motion.div>

          <motion.p
            variants={FADE_UP}
            transition={TRANSITION_DEFAULT}
            className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto"
          >
            {HOME_VIDEO.description}
          </motion.p>
        </motion.div>

        {/* Video poster with play button + parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: EASE_PREMIUM }}
          className="relative max-w-6xl mx-auto"
        >
          <Parallax distance={30}>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Reproduzir ${HOME_VIDEO.ariaLabel}`}
              className="group relative block w-full aspect-video border-[1.5px] border-bronze bg-shadow overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 transition-transform duration-700 ease-[var(--ease-premium)] hover:scale-[1.005]"
            >
              <Image
                src={posterSrc}
                alt={`Pré-visualização do ${HOME_VIDEO.ariaLabel}`}
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-105"
                onError={() => setPosterErrored(true)}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-shadow/50 via-shadow/10 to-transparent transition-opacity duration-500 group-hover:from-shadow/60"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative flex items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -m-4 rounded-full border border-bronze/40 transition-all duration-700 ease-[var(--ease-premium)] group-hover:-m-6 group-hover:border-bronze/70"
                  />
                  <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-bronze text-pure transition-all duration-500 ease-[var(--ease-premium)] group-hover:bg-bronze-light group-hover:scale-105 shadow-[0_8px_32px_-4px_rgba(168,130,77,0.4)]">
                    <Play
                      className="w-7 h-7 md:w-8 md:h-8 ml-1 fill-current"
                      strokeWidth={0}
                    />
                  </span>
                </div>
              </div>
              <span className="absolute bottom-4 right-4 md:bottom-6 md:right-6 font-body text-[12px] tracking-[0.12em] uppercase text-concrete/90 bg-shadow/40 backdrop-blur-sm px-3 py-1.5 border border-concrete/20 z-10">
                {HOME_VIDEO.durationLabel}
              </span>
            </button>
          </Parallax>
        </motion.div>
      </Container>

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoSrc={HOME_VIDEO.videoSrc}
        ariaLabel={HOME_VIDEO.ariaLabel}
      />
    </section>
  );
}
