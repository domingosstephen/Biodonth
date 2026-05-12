'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { PrevencaoProgram } from '@/content/prevencao-page';

type PrevencaoCardProps = {
  program: PrevencaoProgram;
  href: string;
};

export function PrevencaoCard({ program, href }: PrevencaoCardProps) {
  const [imgSrc, setImgSrc] = useState<string>(program.image.src);

  return (
    <Link
      href={href}
      className="group block focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
    >
      {/* Image — 4:5 portrait, bronze framed */}
      <div className="relative aspect-[4/5] overflow-hidden border-[1.5px] border-bronze bg-concrete-warm">
        <Image
          src={imgSrc}
          alt={program.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-105"
          onError={() => {
            if (imgSrc !== program.image.fallback) {
              setImgSrc(program.image.fallback);
            }
          }}
        />
        {/* Gradient overlay deepens on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-shadow/30 via-transparent to-transparent transition-opacity duration-500 ease-[var(--ease-premium)] group-hover:from-shadow/45"
        />
        {/* Audience badge top-right */}
        <div className="absolute top-4 right-4 md:top-5 md:right-5">
          <span className="inline-block bg-bronze text-pure font-body uppercase text-[10px] md:text-[11px] tracking-[0.18em] font-medium px-3 py-1.5 rounded-full">
            {program.audience}
          </span>
        </div>
        {/* Age range bottom-left (when present) */}
        {program.ageRange && (
          <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
            <span className="inline-block bg-charcoal/80 text-concrete font-body text-[11px] md:text-[12px] tracking-tight px-3 py-1 rounded-sm backdrop-blur-sm">
              {program.ageRange}
            </span>
          </div>
        )}
      </div>

      {/* Text below */}
      <div className="mt-4">
        <h3 className="font-display font-normal text-[clamp(18px,2vw,22px)] leading-[1.2] text-charcoal transition-colors duration-300 ease-[var(--ease-premium)] group-hover:text-bronze">
          {program.title}
        </h3>
        <p className="mt-1.5 font-body text-[14px] leading-relaxed text-marmorino line-clamp-3">
          {program.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-bronze">
          <span className="relative">
            Conhecer o programa
            <span aria-hidden="true" className="absolute -bottom-0.5 left-0 right-0 h-px bg-bronze scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100" />
          </span>
          <ArrowRight
            size={13}
            className="transition-transform duration-400 ease-[var(--ease-premium)] group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
