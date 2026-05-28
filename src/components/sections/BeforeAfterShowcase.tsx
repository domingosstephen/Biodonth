'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { BEFORE_AFTER_CASES } from '@/content/before-after';
import { HOME_BEFORE_AFTER } from '@/content/home';

export function BeforeAfterShowcase() {
  const [activeId, setActiveId] = useState(BEFORE_AFTER_CASES[0].id);
  const active = BEFORE_AFTER_CASES.find((c) => c.id === activeId) ?? BEFORE_AFTER_CASES[0];

  return (
    <section id="resultados" className="relative bg-concrete-warm py-16 md:py-24 lg:py-28 overflow-hidden">
      <Container width="wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">
            {HOME_BEFORE_AFTER.eyebrow}
          </p>
          <DisplayHeadline
            bronze={HOME_BEFORE_AFTER.bronze}
            bronzeItalic={HOME_BEFORE_AFTER.bronzeItalic}
            align="center"
            headingLevel="h2"
          />
          <p className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto">
            {HOME_BEFORE_AFTER.description}
          </p>
        </div>

        {/* Slider area */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-5 md:mb-6 flex items-center justify-center gap-3 text-marmorino font-body text-[13px] tracking-wide">
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            <span className="italic font-display text-[15px] md:text-[16px]">{active.treatmentTag}</span>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-bronze shrink-0" />
          </div>

          <BeforeAfter
            before={active.before}
            after={active.after}
            beforeLabel={HOME_BEFORE_AFTER.beforeLabel}
            afterLabel={HOME_BEFORE_AFTER.afterLabel}
            hint={HOME_BEFORE_AFTER.hint}
            objectPosition={active.objectPosition}
          />

          <div
            role="tablist"
            aria-label="Selecione um caso"
            className="mt-8 md:mt-10 flex items-center justify-center gap-2 flex-wrap"
          >
            {BEFORE_AFTER_CASES.map((c) => {
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  className={`px-4 py-2.5 font-body text-[13px] tracking-tight transition-all duration-300 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 ${
                    isActive
                      ? 'text-bronze bg-concrete border border-bronze'
                      : 'text-marmorino bg-transparent border border-marmorino-light/50 hover:text-bronze hover:border-bronze/60'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
