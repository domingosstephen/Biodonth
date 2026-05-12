import type { Metadata } from 'next';
import { EspecialistasPageHero } from '@/components/sections/EspecialistasPageHero';
import { EspecialistasIntro } from '@/components/sections/EspecialistasIntro';
import { EspecialistasGrid } from '@/components/sections/EspecialistasGrid';
import { EspecialistasPhilosophy } from '@/components/sections/EspecialistasPhilosophy';
import { EspecialistasClosing } from '@/components/sections/EspecialistasClosing';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { ESPECIALISTAS_PAGE } from '@/content/especialistas-page';

const SITE_URL = 'https://biodonth.com.br';

export const metadata: Metadata = {
  title: ESPECIALISTAS_PAGE.metadata.title,
  description: ESPECIALISTAS_PAGE.metadata.description,
  alternates: { canonical: `${SITE_URL}/especialistas` },
  openGraph: {
    title: ESPECIALISTAS_PAGE.metadata.title,
    description: ESPECIALISTAS_PAGE.metadata.description,
    url: `${SITE_URL}/especialistas`,
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function EspecialistasPage() {
  return (
    <>
      <EspecialistasPageHero />
      <EspecialistasIntro />
      <EspecialistasGrid />
      <EspecialistasPhilosophy />
      <EspecialistasClosing />
      <BreadcrumbJsonLd
        items={[
          { name: ESPECIALISTAS_PAGE.breadcrumb.home, url: `${SITE_URL}/` },
          { name: ESPECIALISTAS_PAGE.breadcrumb.current, url: `${SITE_URL}/especialistas` },
        ]}
      />
    </>
  );
}
