import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/sections/LegalPageLayout';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { TERMOS } from '@/content/legal-pages';

const SITE_URL = 'https://biodonth.com.br';

export const metadata: Metadata = {
  title: TERMOS.metadata.title,
  description: TERMOS.metadata.description,
  alternates: { canonical: `${SITE_URL}/termos-de-uso` },
  openGraph: {
    title: TERMOS.metadata.title,
    description: TERMOS.metadata.description,
    url: `${SITE_URL}/termos-de-uso`,
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function TermosPage() {
  return (
    <>
      <LegalPageLayout page={TERMOS} />
      <BreadcrumbJsonLd
        items={[
          { name: TERMOS.breadcrumb.home, url: `${SITE_URL}/` },
          { name: TERMOS.breadcrumb.current, url: `${SITE_URL}/termos-de-uso` },
        ]}
      />
    </>
  );
}
