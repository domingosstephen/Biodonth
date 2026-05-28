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
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <p className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6">
            {HOME_TREATMENTS.eyebrow}
          </p>
          <DisplayHeadline
            bronze={HOME_TREATMENTS.bronze}
            bronzeItalic={HOME_TREATMENTS.bronzeItalic}
            subhead={HOME_TREATMENTS.description}
            align="center"
            headingLevel="h2"
          />
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
