import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
import { Stars } from '@/components/ui/Stars';
import type { Testimonial } from '@/content/testimonials';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="relative bg-concrete border-[1.5px] border-marmorino-light/40 px-7 py-9 md:px-12 md:py-12 lg:px-16 lg:py-14 min-h-[420px] md:min-h-[360px]">
      {/* Decorative quote mark */}
      <span
        aria-hidden="true"
        className="absolute top-2 right-6 md:top-4 md:right-10 pointer-events-none select-none font-display font-normal italic text-[clamp(80px,12vw,140px)] leading-none text-bronze opacity-15"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <Stars rating={testimonial.rating} size={18} className="mb-6 md:mb-8 relative" />

      {/* Quote text */}
      <blockquote className="font-display italic text-[clamp(18px,2.2vw,26px)] leading-[1.5] text-charcoal max-w-3xl relative">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-marmorino-light/30">
        {/* Author */}
        <div className="flex items-center gap-4">
          {testimonial.photoSrc ? (
            <Image
              src={testimonial.photoSrc}
              alt={testimonial.authorName}
              width={48}
              height={48}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-bronze text-concrete flex items-center justify-center font-body font-medium text-[14px] md:text-[15px] tracking-tight shrink-0">
              {testimonial.initials}
            </div>
          )}
          <div className="flex flex-col gap-0.5">
            <span className="font-body font-medium text-[15px] text-charcoal">
              {testimonial.authorName}
            </span>
            {testimonial.treatment && (
              <span className="font-body text-[12px] text-marmorino italic">
                {testimonial.treatment}
              </span>
            )}
          </div>
        </div>

        {/* Date + verified */}
        <div className="flex flex-col items-start sm:items-end gap-1">
          <span className="font-body text-[13px] text-marmorino tracking-wide">
            {testimonial.date}
          </span>
          <span className="inline-flex items-center gap-1.5 font-body text-[11px] tracking-[0.05em] text-bronze">
            <BadgeCheck size={14} strokeWidth={1.5} />
            Verificado no Google
          </span>
        </div>
      </div>
    </article>
  );
}
