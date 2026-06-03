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
      className="relative bg-concrete overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-0"
    >
      <Container width="wide" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-0 items-center">
          {/* Text content — first on mobile, left on desktop */}
          <div className="lg:col-span-5 xl:col-span-5 order-1 lg:py-8">
            <p className="font-body uppercase text-[11px] md:text-[12px] lg:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-3 lg:mb-4">
              {HOME_HERO.eyebrow}
            </p>

            <DisplayHeadline
              bronze={HOME_HERO.bronze}
              bronzeItalic={HOME_HERO.bronzeItalic}
              subhead={HOME_HERO.subhead}
              align="left"
              className="[&>h1]:text-[clamp(32px,5.5vw,72px)] [&>p]:text-[clamp(15px,1.8vw,22px)] [&>p]:mt-3"
            />

            <div className="mt-6 lg:mt-8 flex flex-row items-center gap-3 sm:gap-4">
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
                variant="pill"
                as="a"
                href={HOME_HERO.secondaryCta.href}
                className="bg-transparent text-bronze border border-bronze hover:bg-bronze hover:text-pure"
              >
                {HOME_HERO.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Desktop: image in grid column with left-edge gradient fade */}
          <div className="hidden lg:block lg:col-span-7 order-2 relative">
            <div className="relative">
              <Image
                src="/images/hero/hero-biodonth.jpg"
                alt={HOME_HERO.image.alt}
                width={1200}
                height={1500}
                priority
                sizes="(max-width: 1280px) 58vw, 700px"
                className="block w-full h-auto"
              />
              {/* Left edge gradient fade into concrete */}
              <div
                className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-concrete to-transparent"
                aria-hidden="true"
              />
              {/* Bottom fade for clean section transition */}
              <div
                className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-concrete to-transparent"
                aria-hidden="true"
              />
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
