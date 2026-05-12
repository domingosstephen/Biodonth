'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Button } from '@/components/ui/Button';
import { Map } from '@/components/ui/Map';
import { CONTACT, buildDirectionsUrl } from '@/content/contact';
import { HOME_LOCATION } from '@/content/home';
import { CONTATO_PAGE } from '@/content/contato-page';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';

export function ContatoClosing() {
  const { closing } = CONTATO_PAGE;
  const directionsUrl = buildDirectionsUrl(HOME_LOCATION.mapQuery);

  return (
    <section id="onde-estamos" className="relative bg-concrete-warm py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">
            {closing.eyebrow}
          </motion.p>
          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline bronze={closing.bronze} bronzeItalic={closing.bronzeItalic} align="left" />
          </motion.div>
          <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-2xl">
            {closing.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: EASE_PREMIUM }}
            className="lg:col-span-8"
          >
            <Map
              query={HOME_LOCATION.mapQuery}
              title="Mapa com a localiza\u00e7\u00e3o da Biodonth em Arthur Alvim"
              aspectClassName="aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[480px]"
            />
          </motion.div>

          {/* Address + CTAs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT} className="bg-pure border-[1.5px] border-marmorino-light/40 p-7 md:p-8">
              <p className="font-body uppercase text-[11px] tracking-[0.18em] text-bronze font-medium mb-3">
                Endere\u00e7o completo
              </p>
              <p className="font-display text-[clamp(17px,1.8vw,20px)] text-charcoal leading-snug mb-4">
                {CONTACT.address.street}
              </p>
              <p className="font-body text-[14px] text-marmorino leading-relaxed mb-1">
                {CONTACT.address.neighborhood}, {CONTACT.address.city} — {CONTACT.address.state}
              </p>
              <p className="font-body text-[13px] text-marmorino-light">CEP {CONTACT.address.cep}</p>

              <div className="mt-6 pt-6 border-t border-marmorino-light/40">
                <p className="font-body uppercase text-[11px] tracking-[0.18em] text-bronze font-medium mb-3">
                  Atendimento
                </p>
                <p className="font-body text-[14px] text-charcoal mb-1">{CONTACT.hours.weekdays}</p>
                <p className="font-body text-[14px] text-charcoal">{CONTACT.hours.saturday}</p>
              </div>
            </motion.div>

            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-6 lg:mt-0 lg:pt-6 flex flex-col gap-3">
              <Button variant="pill" as="a" href={directionsUrl} target="_blank" rel="noopener noreferrer">
                {closing.primaryCtaLabel}
              </Button>
              <Link
                href={closing.secondaryCtaHref}
                className="group inline-flex items-center gap-2 font-body text-[14px] font-medium text-bronze hover:text-bronze-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 py-2 self-start"
              >
                <span className="relative">
                  {closing.secondaryCtaLabel}
                  <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-[var(--ease-premium)] group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
