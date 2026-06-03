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
      className="relative bg-concrete overflow-hidden pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24"
    >
      {/* Image — positioned right, with a left-to-right gradient fade into bg */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[55%]">
        <Image
          src="/images/hero/hero-biodonth.jpg"
          alt={HOME_HERO.image.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center"
        />
        {/* Narrow gradient that fades only the left edge into the concrete background */}
        <div
          className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-concrete to-transparent"
          aria-hidden="true"
        />
        {/* Subtle bottom fade for clean section transition */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-concrete to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content grid */}
      <Container width="wide" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT — text content */}
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">
              {HOME_HERO.eyebrow}
            </p>

            <DisplayHeadline
              bronze={HOME_HERO.bronze}
              bronzeItalic={HOME_HERO.bronzeItalic}
              subhead={HOME_HERO.subhead}
              align="left"
            />

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
        </div>
      </Container>
    </section>
  );
}
