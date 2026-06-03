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
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-end overflow-hidden"
    >
      {/* Full-width background image */}
      <Image
        src="/images/hero/hero-biodonth.jpg"
        alt={HOME_HERO.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay — dark from bottom for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-shadow via-shadow/70 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <Container width="wide" className="relative z-10 pb-16 md:pb-20 lg:pb-24 pt-40">
        <div className="max-w-2xl">
          <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-light font-medium mb-6">
            {HOME_HERO.eyebrow}
          </p>

          <DisplayHeadline
            bronze={HOME_HERO.bronze}
            bronzeItalic={HOME_HERO.bronzeItalic}
            subhead={HOME_HERO.subhead}
            align="left"
            className="[&>p]:text-marmorino-light"
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
      </Container>
    </section>
  );
}
