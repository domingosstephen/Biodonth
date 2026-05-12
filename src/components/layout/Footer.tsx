import Link from 'next/link';
import { Phone as PhoneIcon, MessageCircle, Mail, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import { LogoFull } from '@/components/ui/Logo';
import { Container } from '@/components/ui/Container';
import { Frame } from '@/components/ui/Frame';
import { Button } from '@/components/ui/Button';
import { CONTACT, WHATSAPP_CTA_URL, TEL_URL, SOCIAL } from '@/content/contact';
import { FOOTER } from '@/content/home';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-shadow text-concrete">
      <Container width="wide">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 pt-20 md:pt-24 lg:pt-28 pb-14 md:pb-16">

          {/* COL 1 — Brand */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link
              href="/"
              aria-label="Biodonth - Página inicial"
              className="inline-block focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
            >
              <LogoFull className="h-14 md:h-16 text-bronze" />
            </Link>
            <p className="mt-8 font-display italic text-[clamp(17px,1.8vw,21px)] leading-relaxed text-concrete/90 max-w-md">
              {FOOTER.brand.tagline}
            </p>
            <p className="mt-5 font-body text-[14px] md:text-[15px] leading-relaxed text-marmorino-light max-w-md">
              {FOOTER.brand.statement}
            </p>
            <div className="mt-8">
              <Button
                variant="pill"
                as="a"
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {FOOTER.cta.label}
              </Button>
            </div>
          </div>

          {/* COL 2 — Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-body uppercase text-[11px] tracking-[0.22em] font-medium text-bronze mb-6">
              {FOOTER.columns.navigate.label}
            </h3>
            <ul className="space-y-3">
              {FOOTER.columns.navigate.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center font-body text-[14px] md:text-[15px] text-concrete/85 hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
                  >
                    <span className="relative">
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-px w-full bg-bronze scale-x-0 origin-left transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-x-100"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Contact + Social */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-body uppercase text-[11px] tracking-[0.22em] font-medium text-bronze mb-6">
              {FOOTER.columns.contact.label}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-bronze" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-body text-[14px] md:text-[15px] text-concrete/85 leading-relaxed">
                  {CONTACT.address.full}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0 text-bronze" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href={TEL_URL}
                  className="font-body text-[14px] md:text-[15px] text-concrete/85 hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
                >
                  {CONTACT.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-bronze" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href={WHATSAPP_CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14px] md:text-[15px] text-concrete/85 hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
                >
                  {CONTACT.whatsapp.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-bronze" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-body text-[14px] md:text-[15px] text-concrete/85 hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2 break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-7 space-y-1">
              <p className="font-body text-[13px] text-marmorino-light">
                {CONTACT.hours.weekdays}
              </p>
              <p className="font-body text-[13px] text-marmorino-light">
                {CONTACT.hours.saturday}
              </p>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h4 className="font-body uppercase text-[11px] tracking-[0.22em] font-medium text-bronze mb-4">
                {FOOTER.columns.social.label}
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram da Biodonth (${SOCIAL.instagram.handle})`}
                  className="flex items-center justify-center w-10 h-10 border border-marmorino/40 text-concrete/85 hover:text-bronze hover:border-bronze transition-all duration-300 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={SOCIAL.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook da Biodonth (${SOCIAL.facebook.handle})`}
                  className="flex items-center justify-center w-10 h-10 border border-marmorino/40 text-concrete/85 hover:text-bronze hover:border-bronze transition-all duration-300 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4"
                >
                  <FacebookIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal row */}
        <div className="border-t border-marmorino/20 pt-7 pb-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="font-body text-[12px] text-marmorino-light">
              {FOOTER.legal.copyright(year)}
            </p>
            <span aria-hidden="true" className="hidden sm:inline-block w-px h-3 bg-marmorino/40" />
            <p className="font-body text-[12px] text-marmorino-light">
              {FOOTER.legal.cro}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href={FOOTER.legal.privacyLink.href}
              className="font-body text-[12px] text-marmorino-light hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
            >
              {FOOTER.legal.privacyLink.label}
            </Link>
            <Link
              href={FOOTER.legal.termsLink.href}
              className="font-body text-[12px] text-marmorino-light hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
            >
              {FOOTER.legal.termsLink.label}
            </Link>
          </div>
        </div>
      </Container>

      {/* Bottom Frame — closing device */}
      <div className="border-t border-marmorino/20">
        <Frame position="bottom" />
      </div>
    </footer>
  );
}
