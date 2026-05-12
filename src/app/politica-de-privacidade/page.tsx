import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/sections/LegalPageLayout';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { PRIVACIDADE } from '@/content/legal-pages';

const SITE_URL = 'https://biodonth.com.br';

export const metadata: Metadata = {
  title: PRIVACIDADE.metadata.title,
  description: PRIVACIDADE.metadata.description,
  alternates: { canonical: `${SITE_URL}/politica-de-privacidade` },
  openGraph: {
    title: PRIVACIDADE.metadata.title,
    description: PRIVACIDADE.metadata.description,
    url: `${SITE_URL}/politica-de-privacidade`,
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function PrivacidadePage() {
  return (
    <>
      <LegalPageLayout page={PRIVACIDADE} />
      <BreadcrumbJsonLd
        items={[
          { name: PRIVACIDADE.breadcrumb.home, url: `${SITE_URL}/` },
          { name: PRIVACIDADE.breadcrumb.current, url: `${SITE_URL}/politica-de-privacidade` },
        ]}
      />
    </>
  );
}
