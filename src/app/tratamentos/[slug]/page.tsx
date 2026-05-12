import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TreatmentHero } from '@/components/sections/treatment/TreatmentHero';
import { TreatmentConsider } from '@/components/sections/treatment/TreatmentConsider';
import { TreatmentApproach } from '@/components/sections/treatment/TreatmentApproach';
import { TreatmentResults } from '@/components/sections/treatment/TreatmentResults';
import { TreatmentInvestment } from '@/components/sections/treatment/TreatmentInvestment';
import { TreatmentFaq } from '@/components/sections/treatment/TreatmentFaq';
import { TreatmentEspecialistas } from '@/components/sections/treatment/TreatmentEspecialistas';
import { TreatmentClosing } from '@/components/sections/treatment/TreatmentClosing';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { TREATMENTS } from '@/content/treatments';
import { TREATMENTS_CONTENT } from '@/content/treatments-content';

const SITE_URL = 'https://biodonth.com.br';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = TREATMENTS_CONTENT[slug];
  if (!content) return {};
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: { canonical: `${SITE_URL}/tratamentos/${slug}` },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `${SITE_URL}/tratamentos/${slug}`,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

function MedicalProcedureJsonLd({ slug, name, description }: { slug: string; name: string; description: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: 'Boca',
    url: `${SITE_URL}/tratamentos/${slug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  const content = TREATMENTS_CONTENT[slug];

  if (!treatment || !content) notFound();

  return (
    <>
      <TreatmentHero treatment={treatment} content={content} />
      <TreatmentConsider content={content} />
      <TreatmentApproach content={content} />
      <TreatmentResults content={content} />
      <TreatmentInvestment content={content} />
      <TreatmentFaq content={content} />
      <TreatmentEspecialistas slug={slug} />
      <TreatmentClosing content={content} />
      <BreadcrumbJsonLd
        items={[
          { name: 'In\u00edcio', url: `${SITE_URL}/` },
          { name: 'Tratamentos', url: `${SITE_URL}/tratamentos` },
          { name: treatment.name, url: `${SITE_URL}/tratamentos/${slug}` },
        ]}
      />
      <MedicalProcedureJsonLd slug={slug} name={treatment.name} description={content.metadata.description} />
    </>
  );
}
