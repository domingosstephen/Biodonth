import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Button } from '@/components/ui/Button';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { HOMEPAGE_TREATMENTS } from '@/content/treatments';
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-7 md:gap-y-14">
          {HOMEPAGE_TREATMENTS.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-20 text-center">
          <Button
            variant="ghost"
            as="a"
            href={HOME_TREATMENTS.ctaHref}
            size="lg"
          >
            {HOME_TREATMENTS.ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
