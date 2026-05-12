import type { Metadata } from 'next';
import { ContatoPageHero } from '@/components/sections/ContatoPageHero';
import { ContatoExpect } from '@/components/sections/ContatoExpect';
import { ContatoMain } from '@/components/sections/ContatoMain';
import { ContatoClosing } from '@/components/sections/ContatoClosing';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { CONTATO_PAGE } from '@/content/contato-page';

const SITE_URL = 'https://biodonth.com.br';

export const metadata: Metadata = {
  title: CONTATO_PAGE.metadata.title,
  description: CONTATO_PAGE.metadata.description,
  alternates: { canonical: `${SITE_URL}/contato` },
  openGraph: {
    title: CONTATO_PAGE.metadata.title,
    description: CONTATO_PAGE.metadata.description,
    url: `${SITE_URL}/contato`,
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function ContatoPage() {
  return (
    <>
      <ContatoPageHero />
      <ContatoExpect />
      <ContatoMain />
      <ContatoClosing />
      <BreadcrumbJsonLd
        items={[
          { name: CONTATO_PAGE.breadcrumb.home, url: `${SITE_URL}/` },
          { name: CONTATO_PAGE.breadcrumb.current, url: `${SITE_URL}/contato` },
        ]}
      />
    </>
  );
}
