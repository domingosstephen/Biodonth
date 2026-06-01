'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Stars } from '@/components/ui/Stars';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import type { Testimonial } from '@/content/testimonials';
import { HOME_TESTIMONIALS } from '@/content/home';

const AUTO_ADVANCE_MS = 8000;

type TestimonialsProps = {
  testimonials: Testimonial[];
  summary: { averageRating: number; totalReviews: number; profileUrl: string };
};

export function Testimonials({ testimonials, summary }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;
  const active = testimonials[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, reducedMotion, total]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused && !reducedMotion) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((i) => (i + 1) % total);
      }, AUTO_ADVANCE_MS);
    }
  }, [paused, reducedMotion, total]);

  const onPrev = () => { prev(); resetTimer(); };
  const onNext = () => { next(); resetTimer(); };
  const onDot = (i: number) => { goTo(i); resetTimer(); };

  const onRegionKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); onPrev(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); onNext(); }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStartX.current;
    if (start == null) return;
    const delta = e.clientX - start;
    pointerStartX.current = null;
    if (Math.abs(delta) > 50) {
      if (delta > 0) onPrev();
      else onNext();
    }
  };

  return (
    <section id="depoimentos" className="relative bg-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">
            {HOME_TESTIMONIALS.eyebrow}
          </p>
          <DisplayHeadline
            bronze={HOME_TESTIMONIALS.bronze}
            bronzeItalic={HOME_TESTIMONIALS.bronzeItalic}
            align="center"
            headingLevel="h2"
          />
          <p className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto">
            {HOME_TESTIMONIALS.description}
          </p>
        </div>

        {/* GBP rating banner */}
        <div className="max-w-2xl mx-auto mb-12 md:mb-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Stars rating={summary.averageRating} size={20} label={`${summary.averageRating} de 5 estrelas`} />
            <span className="font-display text-[clamp(24px,3vw,32px)] text-charcoal leading-none">
              {summary.averageRating.toFixed(1)}
            </span>
          </div>
          <span aria-hidden="true" className="hidden sm:inline-block w-px h-6 bg-marmorino-light" />
          <p className="font-body text-[14px] text-marmorino">
            {HOME_TESTIMONIALS.ratingCountLabel(summary.totalReviews)}
          </p>
          <a
            href={summary.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-bronze hover:text-bronze-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
          >
            <span className="relative">
              {HOME_TESTIMONIALS.seeOnGoogleLabel}
              <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100" />
            </span>
            <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Carousel */}
        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de pacientes"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onRegionKeyDown}
          className="relative max-w-3xl mx-auto focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-8"
        >
          <button
            type="button"
            onClick={onPrev}
            aria-label="Depoimento anterior"
            className="hidden md:flex absolute left-[-72px] lg:left-[-96px] top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center text-bronze hover:text-bronze-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
          >
            <ChevronLeft className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Próximo depoimento"
            className="hidden md:flex absolute right-[-72px] lg:right-[-96px] top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center text-bronze hover:text-bronze-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
          >
            <ChevronRight className="w-7 h-7" strokeWidth={1.5} />
          </button>

          <div
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => { pointerStartX.current = null; }}
            className="touch-pan-y select-none"
            aria-live="polite"
          >
            <TestimonialCard testimonial={active} />
          </div>

          <div role="tablist" aria-label="Selecionar depoimento" className="mt-8 md:mt-10 flex items-center justify-center gap-2.5">
            {testimonials.map((t, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ir para depoimento ${i + 1} de ${total}`}
                  onClick={() => onDot(i)}
                  className={`h-2 py-5 box-content rounded-full transition-all duration-400 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 ${
                    isActive ? 'w-8 bg-bronze' : 'w-2 bg-marmorino-light hover:bg-bronze/60'
                  }`}
                  style={{ backgroundClip: 'content-box' }}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
