import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrevencaoSubpageHero } from '@/components/sections/prevencao/PrevencaoSubpageHero';
import { PrevencaoSubpageWhy } from '@/components/sections/prevencao/PrevencaoSubpageWhy';
import { PrevencaoSubpageIncluded } from '@/components/sections/prevencao/PrevencaoSubpageIncluded';
import { PrevencaoSubpageSignals } from '@/components/sections/prevencao/PrevencaoSubpageSignals';
import { PrevencaoSubpageHow } from '@/components/sections/prevencao/PrevencaoSubpageHow';
import { PrevencaoSubpageFaq } from '@/components/sections/prevencao/PrevencaoSubpageFaq';
import { PrevencaoSubpageClosing } from '@/components/sections/prevencao/PrevencaoSubpageClosing';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { PREVENCAO_PROGRAMS } from '@/content/prevencao-page';
import { PREVENCAO_CONTENT } from '@/content/prevencao-content';

const SITE_URL = 'https://biodonth.com.br';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PREVENCAO_PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = PREVENCAO_CONTENT[slug];
  if (!content) return {};
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: { canonical: `${SITE_URL}/prevencao/${slug}` },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `${SITE_URL}/prevencao/${slug}`,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default async function PrevencaoSubpage({ params }: Props) {
  const { slug } = await params;
  const program = PREVENCAO_PROGRAMS.find((p) => p.slug === slug);
  const content = PREVENCAO_CONTENT[slug];

  if (!program || !content) notFound();

  return (
    <>
      <PrevencaoSubpageHero program={program} content={content} />
      <PrevencaoSubpageWhy content={content} />
      <PrevencaoSubpageIncluded content={content} />
      <PrevencaoSubpageSignals content={content} />
      <PrevencaoSubpageHow content={content} />
      <PrevencaoSubpageFaq content={content} />
      <PrevencaoSubpageClosing content={content} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: `${SITE_URL}/` },
          { name: 'Prevenção', url: `${SITE_URL}/prevencao` },
          { name: program.audience, url: `${SITE_URL}/prevencao/${slug}` },
        ]}
      />
    </>
  );
}
