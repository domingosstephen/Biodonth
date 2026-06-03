import Image from 'next/image';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HOME_HERO } from '@/content/home';
import { WHATSAPP_CTA_URL } from '@/content/contact';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-concrete overflow-hidden pt-28 md:pt-32 lg:pt-36 pb-10 md:pb-14 lg:pb-16"
    >
      {/* Desktop: image positioned right with gradient fade */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%] xl:w-[55%]">
        <Image
          src="/images/hero/hero-biodonth.jpg"
          alt={HOME_HERO.image.alt}
          fill
          priority
          sizes="58vw"
          className="object-cover object-top"
        />
        {/* Left edge fade into concrete */}
        <div
          className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-concrete to-transparent"
          aria-hidden="true"
        />
        {/* Bottom fade for clean section transition */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-concrete to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text content — first on mobile, left on desktop */}
          <div className="lg:col-span-6 xl:col-span-5 order-1">
            <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-4">
              {HOME_HERO.eyebrow}
            </p>

            <DisplayHeadline
              bronze={HOME_HERO.bronze}
              bronzeItalic={HOME_HERO.bronzeItalic}
              subhead={HOME_HERO.subhead}
              align="left"
            />

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant="pill"
                as="a"
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HOME_HERO.primaryCta.label}
              </Button>
              <Button
                variant="ghost"
                as="a"
                href={HOME_HERO.secondaryCta.href}
              >
                {HOME_HERO.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Mobile: image below text and CTAs */}
          <div className="lg:hidden order-2 -mx-5 sm:-mx-6">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/hero/hero-biodonth.jpg"
                alt={HOME_HERO.image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
