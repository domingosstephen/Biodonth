'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CTA_URL } from '@/content/contact';
import { FOOTER } from '@/content/home';

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <a
      href={WHATSAPP_CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={FOOTER.fab.ariaLabel}
      className={`group fixed z-[55] bottom-5 right-5 md:bottom-7 md:right-7 transition-all duration-500 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="relative flex items-center">
        {/* Pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-bronze/60 animate-[pulseRing_3s_ease-out_infinite]"
        />
        {/* Tooltip — desktop only */}
        <span
          aria-hidden="true"
          className="hidden md:block absolute right-full mr-3 whitespace-nowrap bg-shadow text-concrete font-body text-[13px] px-3.5 py-2 rounded-[2px] opacity-0 -translate-x-2 transition-all duration-300 ease-[var(--ease-premium)] group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none"
        >
          {FOOTER.fab.tooltip}
        </span>
        {/* Main button */}
        <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-bronze text-pure shadow-[0_8px_28px_-4px_rgba(168,130,77,0.55)] transition-all duration-300 ease-[var(--ease-premium)] group-hover:bg-bronze-light group-hover:scale-105">
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.8} />
        </span>
      </span>
    </a>
  );
}
