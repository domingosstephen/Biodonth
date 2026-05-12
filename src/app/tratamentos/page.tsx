import type { Metadata } from 'next';
import { TratamentosPageHero } from '@/components/sections/TratamentosPageHero';
import { TratamentosFullGrid } from '@/components/sections/TratamentosFullGrid';
import { TratamentosMidCta } from '@/components/sections/TratamentosMidCta';
import { TratamentosClosing } from '@/components/sections/TratamentosClosing';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { TRATAMENTOS_PAGE } from '@/content/tratamentos-page';

const SITE_URL = 'https://biodonth.com.br';

export const metadata: Metadata = {
  title: TRATAMENTOS_PAGE.metadata.title,
  description: TRATAMENTOS_PAGE.metadata.description,
  alternates: {
    canonical: `${SITE_URL}/tratamentos`,
  },
  openGraph: {
    title: TRATAMENTOS_PAGE.metadata.title,
    description: TRATAMENTOS_PAGE.metadata.description,
    url: `${SITE_URL}/tratamentos`,
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function TratamentosPage() {
  return (
    <>
      <TratamentosPageHero />
      <TratamentosFullGrid />
      <TratamentosMidCta />
      <TratamentosClosing />
      <BreadcrumbJsonLd
        items={[
          { name: TRATAMENTOS_PAGE.breadcrumb.home, url: `${SITE_URL}/` },
          { name: TRATAMENTOS_PAGE.breadcrumb.current, url: `${SITE_URL}/tratamentos` },
        ]}
      />
    </>
  );
}
