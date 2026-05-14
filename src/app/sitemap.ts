import type { MetadataRoute } from 'next';
import { TREATMENTS } from '@/content/treatments';
import { PREVENCAO_PROGRAMS } from '@/content/prevencao-page';

const SITE_URL = 'https://biodonth.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/tratamentos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/prevencao`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/especialistas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/termos-de-uso`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const treatmentPages: MetadataRoute.Sitemap = TREATMENTS.map((t) => ({
    url: `${SITE_URL}/tratamentos/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const prevencaoPages: MetadataRoute.Sitemap = PREVENCAO_PROGRAMS.map((p) => ({
    url: `${SITE_URL}/prevencao/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...treatmentPages, ...prevencaoPages];
}
