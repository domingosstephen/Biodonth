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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <VideoSection />
      <TreatmentsGrid />
      <BeforeAfterShowcase />
      <Testimonials />
      <Faq />
      <LocationSection />
      <FaqJsonLd />
      <BusinessJsonLd />
    </>
  );
}
