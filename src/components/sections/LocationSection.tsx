import { MapPin, Clock, Phone as PhoneIcon, MessageCircle, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Button } from '@/components/ui/Button';
import { Map } from '@/components/ui/Map';
import { CONTACT, WHATSAPP_CTA_URL, TEL_URL, buildDirectionsUrl } from '@/content/contact';
import { HOME_LOCATION } from '@/content/home';

export function LocationSection() {
  const directionsUrl = buildDirectionsUrl(HOME_LOCATION.mapQuery);

  return (
    <section id="localizacao" className="relative bg-concrete py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container width="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
          {/* LEFT — info */}
          <div className="lg:col-span-5">
            <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">
              {HOME_LOCATION.eyebrow}
            </p>
            <DisplayHeadline
              bronze={HOME_LOCATION.bronze}
              bronzeItalic={HOME_LOCATION.bronzeItalic}
              align="left"
            />
            <p className="mt-6 font-body text-marmorino leading-relaxed text-[clamp(16px,1.6vw,19px)] max-w-xl">
              {HOME_LOCATION.description}
            </p>

            {/* Divider */}
            <div className="mt-10 mb-10 w-16 h-px bg-bronze" aria-hidden="true" />

            {/* Info stack */}
            <dl className="space-y-7 md:space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="shrink-0 mt-1 text-bronze">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <dt className="font-body uppercase text-[11px] tracking-[0.18em] text-marmorino font-medium mb-1.5">
                    {HOME_LOCATION.labels.address}
                  </dt>
                  <dd className="font-body text-[16px] md:text-[17px] text-charcoal leading-relaxed">
                    {CONTACT.address.full}
                  </dd>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="shrink-0 mt-1 text-bronze">
                  <Clock className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <dt className="font-body uppercase text-[11px] tracking-[0.18em] text-marmorino font-medium mb-1.5">
                    {HOME_LOCATION.labels.hours}
                  </dt>
                  <dd className="font-body text-[16px] md:text-[17px] text-charcoal leading-relaxed">
                    <div>{CONTACT.hours.weekdays}</div>
                    <div>{CONTACT.hours.saturday}</div>
                  </dd>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="shrink-0 mt-1 text-bronze">
                  <PhoneIcon className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <dt className="font-body uppercase text-[11px] tracking-[0.18em] text-marmorino font-medium mb-1.5">
                    {HOME_LOCATION.labels.contact}
                  </dt>
                  <dd className="font-body text-[16px] md:text-[17px] text-charcoal leading-relaxed space-y-1">
                    <div>
                      <span className="text-marmorino text-[14px] mr-2">
                        {HOME_LOCATION.labels.phonePrefix}
                      </span>
                      <a
                        href={TEL_URL}
                        className="text-charcoal hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
                      >
                        {CONTACT.phone.display}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-bronze" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-marmorino text-[14px]">
                        {HOME_LOCATION.labels.whatsappPrefix}
                      </span>
                      <a
                        href={WHATSAPP_CTA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-charcoal hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
                      >
                        {CONTACT.whatsapp.display}
                      </a>
                    </div>
                  </dd>
                </div>
              </div>
            </dl>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant="pill"
                as="a"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HOME_LOCATION.labels.directions}
              </Button>
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-body text-[15px] font-medium text-bronze hover:text-bronze-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 py-2"
              >
                <span className="relative">
                  {HOME_LOCATION.labels.schedule}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100"
                  />
                </span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-400 ease-[var(--ease-premium)] group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>

          {/* RIGHT — map */}
          <div className="lg:col-span-7">
            <Map
              query={HOME_LOCATION.mapQuery}
              title="Mapa com a localização da Biodonth em Artur Alvim"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
