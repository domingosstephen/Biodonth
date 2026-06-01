import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { FaqJsonLd } from '@/components/seo/FaqJsonLd';
import { BusinessJsonLd } from '@/components/seo/BusinessJsonLd';
import { fetchGBPData } from '@/lib/gbp';
import { TESTIMONIALS, GBP_SUMMARY } from '@/content/testimonials';

const VideoSection = dynamic(() => import('@/components/sections/VideoSection').then(m => m.VideoSection));
const TreatmentsGrid = dynamic(() => import('@/components/sections/TreatmentsGrid').then(m => m.TreatmentsGrid));
const BeforeAfterShowcase = dynamic(() => import('@/components/sections/BeforeAfterShowcase').then(m => m.BeforeAfterShowcase));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => m.Testimonials));
const Faq = dynamic(() => import('@/components/sections/Faq').then(m => m.Faq));
const LocationSection = dynamic(() => import('@/components/sections/LocationSection').then(m => m.LocationSection));

export default async function HomePage() {
  const gbp = await fetchGBPData();

  const testimonials = gbp && gbp.reviews.length > 0 ? gbp.reviews : TESTIMONIALS;
  const summary = gbp
    ? { averageRating: gbp.averageRating, totalReviews: gbp.totalReviews, profileUrl: gbp.profileUrl }
    : GBP_SUMMARY;

  return (
    <>
      <Hero />
      <TrustStrip />
      <VideoSection />
      <TreatmentsGrid />
      <BeforeAfterShowcase />
      <Testimonials testimonials={testimonials} summary={summary} />
      <Faq />
      <LocationSection />
      <FaqJsonLd />
      <BusinessJsonLd />
    </>
  );
}
