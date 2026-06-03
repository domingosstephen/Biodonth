import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { TREATMENTS } from '@/content/treatments';
import { HOME_TREATMENTS } from '@/content/home';

export function TreatmentsGrid() {
  return (
    <section
      id="tratamentos"
      className="bg-concrete py-20 md:py-28 lg:py-36"
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze-dark font-medium mb-6">
            {HOME_TREATMENTS.eyebrow}
          </p>
          <DisplayHeadline
            bronze={HOME_TREATMENTS.bronze}
            bronzeItalic={HOME_TREATMENTS.bronzeItalic}
            align="center"
            headingLevel="h2"
          />
        </div>

        {/* Team image */}
        <div className="mb-10 md:mb-14 overflow-hidden rounded-sm border-[1.5px] border-bronze">
          <Image
            src="/images/team-biodonth.jpg"
            alt="Equipe completa da Biodonth Odontologia Integrada"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            className="block w-full h-auto"
          />
        </div>

        {/* Description below image */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <p className="font-body font-normal text-[clamp(18px,2.2vw,26px)] text-marmorino leading-[1.4]">
            {HOME_TREATMENTS.description}
          </p>
        </div>

        {/* Grid — all 12 treatments, 3 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-10">
          {TREATMENTS.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      </Container>
    </section>
  );
}
