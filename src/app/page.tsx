import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { VideoSection } from '@/components/sections/VideoSection';
import { TreatmentsGrid } from '@/components/sections/TreatmentsGrid';
import { BeforeAfterShowcase } from '@/components/sections/BeforeAfterShowcase';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { LocationSection } from '@/components/sections/LocationSection';
import { FaqJsonLd } from '@/components/seo/FaqJsonLd';
import { BusinessJsonLd } from '@/components/seo/BusinessJsonLd';
import { fetchGBPData } from '@/lib/gbp';
import { TESTIMONIALS, GBP_SUMMARY } from '@/content/testimonials';

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
