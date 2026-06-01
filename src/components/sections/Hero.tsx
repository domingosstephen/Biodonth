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
      className="relative bg-concrete pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 overflow-hidden"
    >
      <Container width="wide" className="relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT — content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
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

          {/* RIGHT — image with bronze frame */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="border-[1.5px] border-bronze">
              <Image
                src={HOME_HERO.image.fallback}
                alt={HOME_HERO.image.alt}
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 900px"
                priority
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
