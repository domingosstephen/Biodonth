import type { Metadata } from 'next';
import { PrevencaoPageHero } from '@/components/sections/PrevencaoPageHero';
import { PrevencaoIntro } from '@/components/sections/PrevencaoIntro';
import { PrevencaoGrid } from '@/components/sections/PrevencaoGrid';
import { PrevencaoPhilosophy } from '@/components/sections/PrevencaoPhilosophy';
import { PrevencaoClosing } from '@/components/sections/PrevencaoClosing';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { PREVENCAO_PAGE } from '@/content/prevencao-page';

const SITE_URL = 'https://biodonth.com.br';

export const metadata: Metadata = {
  title: PREVENCAO_PAGE.metadata.title,
  description: PREVENCAO_PAGE.metadata.description,
  alternates: { canonical: `${SITE_URL}/prevencao` },
  openGraph: {
    title: PREVENCAO_PAGE.metadata.title,
    description: PREVENCAO_PAGE.metadata.description,
    url: `${SITE_URL}/prevencao`,
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function PrevencaoPage() {
  return (
    <>
      <PrevencaoPageHero />
      <PrevencaoIntro />
      <PrevencaoGrid />
      <PrevencaoPhilosophy />
      <PrevencaoClosing />
      <BreadcrumbJsonLd
        items={[
          { name: PREVENCAO_PAGE.breadcrumb.home, url: `${SITE_URL}/` },
          { name: PREVENCAO_PAGE.breadcrumb.current, url: `${SITE_URL}/prevencao` },
        ]}
      />
    </>
  );
}
