'use client';

import { motion } from 'motion/react';
import { MessageCircle, Phone as PhoneIcon, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { ContatoForm } from '@/components/ui/ContatoForm';
import { CONTACT, WHATSAPP_CTA_URL, TEL_URL } from '@/content/contact';
import { CONTATO_PAGE } from '@/content/contato-page';
import { FADE_UP, TRANSITION_DEFAULT, EASE_PREMIUM } from '@/lib/motion';

export function ContatoMain() {
  const { channels, form } = CONTATO_PAGE;

  return (
    <section className="relative bg-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">

          {/* LEFT — Direct channels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-5"
          >
            <motion.p variants={FADE_UP} transition={TRANSITION_DEFAULT} className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">
              {channels.eyebrow}
            </motion.p>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
              <DisplayHeadline bronze={channels.title} bronzeItalic={channels.titleItalic} align="left" />
            </motion.div>
            <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT} className="mt-8 w-16 h-px bg-bronze" aria-hidden="true" />

            <div className="mt-10 space-y-5">
              {/* WhatsApp — primary */}
              <motion.a
                variants={FADE_UP}
                transition={TRANSITION_DEFAULT}
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-pure border-[1.5px] border-bronze p-6 md:p-7 transition-all duration-300 ease-[var(--ease-premium)] hover:shadow-[0_8px_28px_-12px_rgba(168,130,77,0.35)] focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
              >
                <div className="flex items-start gap-4">
                  <span aria-hidden="true" className="shrink-0 w-10 h-10 rounded-full bg-bronze text-pure flex items-center justify-center transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-105">
                    <MessageCircle className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <div className="flex-1">
                    <p className="font-body uppercase text-[11px] tracking-[0.18em] text-bronze-dark font-medium mb-1">{channels.whatsapp.label}</p>
                    <p className="font-display text-[clamp(20px,2vw,24px)] text-charcoal leading-tight mb-2 transition-colors duration-300 group-hover:text-bronze">{CONTACT.whatsapp.display}</p>
                    <p className="font-body text-[14px] text-marmorino leading-relaxed">{channels.whatsapp.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-bronze">
                      {channels.whatsapp.cta}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                variants={FADE_UP}
                transition={TRANSITION_DEFAULT}
                href={TEL_URL}
                className="group block bg-pure border-[1.5px] border-marmorino-light/40 p-6 md:p-7 transition-all duration-300 ease-[var(--ease-premium)] hover:border-bronze focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
              >
                <div className="flex items-start gap-4">
                  <span aria-hidden="true" className="shrink-0 w-10 h-10 rounded-full bg-concrete-warm text-bronze flex items-center justify-center border border-marmorino-light/50 transition-all duration-300 group-hover:bg-bronze group-hover:text-pure group-hover:border-bronze">
                    <PhoneIcon className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <div className="flex-1">
                    <p className="font-body uppercase text-[11px] tracking-[0.18em] text-bronze-dark font-medium mb-1">{channels.phone.label}</p>
                    <p className="font-display text-[clamp(20px,2vw,24px)] text-charcoal leading-tight mb-2 transition-colors duration-300 group-hover:text-bronze">{CONTACT.phone.display}</p>
                    <p className="font-body text-[14px] text-marmorino leading-relaxed">{channels.phone.description}</p>
                  </div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                variants={FADE_UP}
                transition={TRANSITION_DEFAULT}
                href={`mailto:${CONTACT.email}`}
                className="group block bg-pure border-[1.5px] border-marmorino-light/40 p-6 md:p-7 transition-all duration-300 ease-[var(--ease-premium)] hover:border-bronze focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
              >
                <div className="flex items-start gap-4">
                  <span aria-hidden="true" className="shrink-0 w-10 h-10 rounded-full bg-concrete-warm text-bronze flex items-center justify-center border border-marmorino-light/50 transition-all duration-300 group-hover:bg-bronze group-hover:text-pure group-hover:border-bronze">
                    <Mail className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <div className="flex-1">
                    <p className="font-body uppercase text-[11px] tracking-[0.18em] text-bronze-dark font-medium mb-1">{channels.email.label}</p>
                    <p className="font-display text-[clamp(18px,1.8vw,22px)] text-charcoal leading-tight mb-2 transition-colors duration-300 group-hover:text-bronze break-all">{CONTACT.email}</p>
                    <p className="font-body text-[14px] text-marmorino leading-relaxed">{channels.email.description}</p>
                  </div>
                </div>
              </motion.a>

              {/* Visit — informational */}
              <motion.div
                variants={FADE_UP}
                transition={TRANSITION_DEFAULT}
                className="bg-concrete-warm border-[1.5px] border-marmorino-light/40 p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span aria-hidden="true" className="shrink-0 w-10 h-10 rounded-full bg-concrete text-bronze flex items-center justify-center border border-marmorino-light/50">
                    <MapPin className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <div className="flex-1">
                    <p className="font-body uppercase text-[11px] tracking-[0.18em] text-bronze-dark font-medium mb-1">{channels.visit.label}</p>
                    <p className="font-display text-[clamp(16px,1.6vw,18px)] text-charcoal leading-snug mb-2">{CONTACT.address.short}</p>
                    <p className="font-body text-[14px] text-marmorino leading-relaxed">{channels.visit.description}</p>
                    <div className="mt-3 space-y-0.5 font-body text-[13px] text-marmorino-light">
                      <p>{CONTACT.hours.weekdays}</p>
                      <p>{CONTACT.hours.saturday}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE_PREMIUM }}
            className="lg:col-span-7"
          >
            <div className="bg-pure border-[1.5px] border-marmorino-light/40 p-8 md:p-10 lg:p-12 lg:sticky lg:top-32">
              <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-4">
                Formul\u00e1rio
              </p>
              <h2 className="font-display font-normal text-[clamp(28px,3vw,38px)] leading-[1.15] tracking-[-0.01em] text-charcoal mb-3">
                {form.title}
              </h2>
              <p className="font-body text-[15px] md:text-[16px] text-marmorino leading-relaxed mb-8 md:mb-10">
                {form.description}
              </p>
              <ContatoForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
