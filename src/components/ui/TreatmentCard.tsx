'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Treatment } from '@/content/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
}

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  const [imgSrc, setImgSrc] = useState<string>(treatment.image.src);

  return (
    <Link
      href={`/tratamentos/${treatment.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden border-[1.5px] border-bronze bg-concrete-warm">
        <Image
          src={imgSrc}
          alt={treatment.image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-105"
          onError={() => {
            if (imgSrc !== treatment.image.fallback) {
              setImgSrc(treatment.image.fallback);
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="font-display font-normal text-[clamp(18px,2vw,22px)] leading-[1.2] text-charcoal transition-colors duration-300 ease-[var(--ease-premium)] group-hover:text-bronze">
          {treatment.name}
        </h3>
        <p className="mt-1.5 font-body text-[14px] leading-relaxed text-marmorino line-clamp-2">
          {treatment.shortDescription}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-bronze">
          <span className="relative">
            Saber mais
            <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-bronze scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100" />
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
