'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { VideoModal } from '@/components/ui/VideoModal';
import { HOME_VIDEO } from '@/content/home';

export function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="conheca-a-clinica"
      className="relative bg-concrete-warm py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <Container width="wide">
        {/* Header block */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">
            {HOME_VIDEO.eyebrow}
          </p>
          <DisplayHeadline
            bronze={HOME_VIDEO.bronze}
            bronzeItalic={HOME_VIDEO.bronzeItalic}
            align="center"
            headingLevel="h2"
          />
          <p className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto">
            {HOME_VIDEO.description}
          </p>
        </div>

        {/* Video poster with play button */}
        <div className="relative max-w-6xl mx-auto">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Reproduzir ${HOME_VIDEO.ariaLabel}`}
            className="group relative block w-full aspect-video border-[1.5px] border-bronze bg-shadow overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 transition-transform duration-700 ease-[var(--ease-premium)] hover:scale-[1.005]"
          >
            <Image
              src={HOME_VIDEO.posterFallback}
              alt={`Pré-visualização do ${HOME_VIDEO.ariaLabel}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-shadow/50 via-shadow/10 to-transparent"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-bronze text-pure shadow-[0_8px_32px_-4px_rgba(168,130,77,0.4)]">
                <Play
                  className="w-7 h-7 md:w-8 md:h-8 ml-1 fill-current"
                  strokeWidth={0}
                />
              </span>
            </div>
            <span className="absolute bottom-4 right-4 md:bottom-6 md:right-6 font-body text-[12px] tracking-[0.12em] uppercase text-concrete/90 bg-shadow/40 backdrop-blur-sm px-3 py-1.5 border border-concrete/20 z-10">
              {HOME_VIDEO.durationLabel}
            </span>
          </button>
        </div>
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
