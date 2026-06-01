'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Especialista } from '@/content/especialistas-page';
import { ESPECIALISTAS_PAGE } from '@/content/especialistas-page';

type EspecialistaCardProps = {
  especialista: Especialista;
};

export function EspecialistaCard({ especialista }: EspecialistaCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const treatmentNames = especialista.treatments
    .map((slug) => ESPECIALISTAS_PAGE.treatmentDisplayNames[slug])
    .filter(Boolean);

  return (
    <article className="group flex flex-col">
      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden border-[1.5px] border-bronze bg-bronze">
        {imageFailed ? (
          <div
            aria-label={`Retrato placeholder de ${especialista.name}`}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bronze to-bronze-dark"
          >
            <span
              className="font-display font-normal text-pure leading-none tracking-[-0.02em] select-none"
              style={{ fontSize: 'clamp(72px, 10vw, 128px)' }}
            >
              {especialista.initials}
            </span>
          </div>
        ) : (
          <Image
            src={especialista.image.src}
            alt={especialista.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[700ms] ease-[var(--ease-premium)] group-hover:scale-[1.04]"
            onError={() => setImageFailed(true)}
          />
        )}
        {!imageFailed && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-shadow/30 via-transparent to-transparent transition-opacity duration-500 ease-[var(--ease-premium)] group-hover:from-shadow/45"
          />
        )}
      </div>

      {/* Text block */}
      <div className="mt-6 md:mt-7">
        <p className="font-body uppercase text-[11px] md:text-[12px] tracking-[0.18em] text-bronze-dark font-medium mb-2">
          {especialista.role}
        </p>

        <h3 className="font-display font-normal text-[clamp(22px,2.2vw,28px)] leading-[1.2] tracking-[-0.005em] text-charcoal transition-colors duration-300 group-hover:text-bronze">
          {especialista.name}
        </h3>

        <p className="mt-4 font-display italic text-[clamp(15px,1.6vw,18px)] leading-[1.55] text-charcoal/90 max-w-md">
          &ldquo;{especialista.philosophy}&rdquo;
        </p>

        <div className="mt-6 pt-5 border-t border-marmorino-light/40 flex items-start justify-between gap-4">
          {treatmentNames.length > 0 && (
            <div className="flex-1">
              <p className="font-body uppercase text-[10px] tracking-[0.18em] text-marmorino font-medium mb-1.5">
                Tratamentos
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 font-body text-[13px] text-charcoal/80">
                {especialista.treatments.map((slug, i) => {
                  const name = ESPECIALISTAS_PAGE.treatmentDisplayNames[slug];
                  if (!name) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/tratamentos/${slug}`}
                        className="hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
                      >
                        {name}
                      </Link>
                      {i < especialista.treatments.length - 1 && (
                        <span aria-hidden="true" className="ml-3 text-marmorino-light">&middot;</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <p className="font-body text-[11px] tracking-wide text-marmorino whitespace-nowrap pt-4">
            {especialista.cro}
          </p>
        </div>
      </div>
    </article>
  );
}
