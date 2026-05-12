'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem as FaqItemType } from '@/content/faq';

type FaqItemProps = {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

export function FaqItem({ item, isOpen, onToggle, index }: FaqItemProps) {
  const numberLabel = String(index + 1).padStart(2, '0');

  return (
    <div className="border-b border-marmorino-light/40 last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${item.id}`}
          id={`faq-trigger-${item.id}`}
          className="group w-full flex items-start gap-4 md:gap-6 text-left py-6 md:py-8 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 transition-colors duration-300"
        >
          {/* Index number */}
          <span
            aria-hidden="true"
            className={`font-body text-[12px] md:text-[13px] tracking-[0.18em] font-medium pt-1.5 md:pt-2 transition-colors duration-300 shrink-0 ${
              isOpen ? 'text-bronze' : 'text-marmorino group-hover:text-bronze'
            }`}
          >
            {numberLabel}
          </span>

          {/* Question */}
          <span
            className={`flex-1 font-display font-normal text-[clamp(18px,2.2vw,24px)] leading-snug tracking-[-0.005em] transition-colors duration-300 ${
              isOpen ? 'text-bronze' : 'text-charcoal group-hover:text-bronze'
            }`}
          >
            {item.question}
          </span>

          {/* Chevron */}
          <span
            aria-hidden="true"
            className={`shrink-0 pt-1 transition-all duration-400 ease-[var(--ease-premium)] ${
              isOpen ? 'rotate-180 text-bronze' : 'text-marmorino group-hover:text-bronze'
            }`}
          >
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${item.id}`}
            role="region"
            aria-labelledby={`faq-trigger-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden"
          >
            <div className="pl-10 md:pl-14 pr-4 md:pr-12 pb-7 md:pb-9 -mt-2">
              {item.answer.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className={`font-body text-[15px] md:text-[16px] leading-[1.7] text-marmorino ${i > 0 ? 'mt-4' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
