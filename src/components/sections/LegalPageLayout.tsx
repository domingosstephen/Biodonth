'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_CTA_URL } from '@/content/contact';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';
import type { LegalPage } from '@/content/legal-pages';

function formatLastUpdated(iso: string): string {
  const date = new Date(iso);
  const months = [
    'janeiro', 'fevereiro', 'mar\u00e7o', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
  ];
  return `${date.getUTCDate()} de ${months[date.getUTCMonth()]} de ${date.getUTCFullYear()}`;
}

function ParagraphWithBold({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-medium text-charcoal">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

type LegalPageLayoutProps = {
  page: LegalPage;
};

export function LegalPageLayout({ page }: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    const sections = page.sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, [page.sections]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-concrete pt-32 md:pt-36 lg:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.30] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.557 0 0 0 0 0.561 0 0 0 0 0.569 0 0 0 0.12 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
        <Container width="wide" className="relative">
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="mb-8 md:mb-10"
          >
            <ol className="flex items-center gap-2 font-body text-[12px] md:text-[13px] tracking-[0.05em] text-marmorino">
              <li>
                <Link href="/" className="hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2">
                  {page.breadcrumb.home}
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3" strokeWidth={1.5} /></li>
              <li aria-current="page" className="text-bronze">{page.breadcrumb.current}</li>
            </ol>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            className="max-w-3xl"
          >
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">
              {page.hero.eyebrow}
            </motion.p>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
              <DisplayHeadline bronze={page.hero.bronze} bronzeItalic={page.hero.bronzeItalic} align="left" reveal />
            </motion.div>
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 md:mt-8 font-body text-marmorino leading-relaxed text-[clamp(16px,1.7vw,19px)] max-w-2xl">
              {page.hero.description}
            </motion.p>
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 font-body italic text-[13px] md:text-[14px] text-marmorino-light">
              \u00daltima atualiza\u00e7\u00e3o em {formatLastUpdated(page.hero.lastUpdated)}.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Main: TOC + body */}
      <section className="relative bg-concrete py-12 md:py-16 lg:py-20">
        <Container width="wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* TOC */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-32">
                <p className="font-body uppercase text-[11px] tracking-[0.18em] text-bronze-dark font-medium mb-5">
                  {page.toc.title}
                </p>
                <nav aria-label="\u00cdndice da p\u00e1gina">
                  <ol className="space-y-3 border-l border-marmorino-light/40 pl-5">
                    {page.sections.map((section) => {
                      const isActive = activeSection === section.id;
                      return (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className={`group block font-body text-[13px] md:text-[14px] leading-snug transition-colors duration-300 ${
                              isActive ? 'text-bronze' : 'text-marmorino hover:text-bronze'
                            }`}
                          >
                            <span className="relative">
                              {section.title}
                              {isActive && (
                                <span aria-hidden="true" className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-px h-5 bg-bronze" />
                              )}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Body */}
            <article className="lg:col-span-8 xl:col-span-9 max-w-3xl">
              {page.sections.map((section, idx) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: EASE_PREMIUM }}
                  className={`scroll-mt-24 md:scroll-mt-32 ${idx > 0 ? 'mt-12 md:mt-16' : ''}`}
                >
                  <h2 className="font-display font-normal text-[clamp(22px,2.4vw,30px)] leading-[1.2] tracking-[-0.005em] text-charcoal mb-5 md:mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4 md:space-y-5">
                    {section.body.map((paragraph, i) => (
                      <ParagraphWithBold
                        key={i}
                        text={paragraph}
                        className="font-body text-[15px] md:text-[16px] leading-[1.7] text-charcoal"
                      />
                    ))}
                  </div>
                </motion.section>
              ))}
            </article>
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="relative bg-concrete-warm py-20 md:py-28 lg:py-32 overflow-hidden">
        <Container width="wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.12 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">
              {page.closing.eyebrow}
            </motion.p>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
              <DisplayHeadline bronze={page.closing.bronze} bronzeItalic={page.closing.bronzeItalic} align="center" />
            </motion.div>
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 md:mt-8 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl mx-auto">
              {page.closing.description}
            </motion.p>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="pill" as="a" href={WHATSAPP_CTA_URL} target="_blank" rel="noopener noreferrer">
                {page.closing.primaryCtaLabel}
              </Button>
              <Link href={page.closing.secondaryCtaHref} className="group inline-flex items-center gap-2 font-body text-[15px] font-medium text-bronze hover:text-bronze-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 py-2">
                <span className="relative">
                  {page.closing.secondaryCtaLabel}
                  <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-[var(--ease-premium)] group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
