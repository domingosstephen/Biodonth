import type { Metadata } from 'next';
import { SobrePageHero } from '@/components/sections/SobrePageHero';
import { SobreOrigin } from '@/components/sections/SobreOrigin';
import { SobrePillars } from '@/components/sections/SobrePillars';
import { SobrePositioning } from '@/components/sections/SobrePositioning';
import { SobreIntegrated } from '@/components/sections/SobreIntegrated';
import { SobreClosing } from '@/components/sections/SobreClosing';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { SOBRE_PAGE } from '@/content/sobre-page';

const SITE_URL = 'https://biodonth.com.br';

export const metadata: Metadata = {
  title: SOBRE_PAGE.metadata.title,
  description: SOBRE_PAGE.metadata.description,
  alternates: { canonical: `${SITE_URL}/sobre` },
  openGraph: {
    title: SOBRE_PAGE.metadata.title,
    description: SOBRE_PAGE.metadata.description,
    url: `${SITE_URL}/sobre`,
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function SobrePage() {
  return (
    <>
      <SobrePageHero />
      <SobreOrigin />
      <SobrePillars />
      <SobrePositioning />
      <SobreIntegrated />
      <SobreClosing />
      <BreadcrumbJsonLd
        items={[
          { name: SOBRE_PAGE.breadcrumb.home, url: `${SITE_URL}/` },
          { name: SOBRE_PAGE.breadcrumb.current, url: `${SITE_URL}/sobre` },
        ]}
      />
    </>
  );
}
