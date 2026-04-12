import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import VerticalDominance from '@/components/home/VerticalDominance';
import RevenuePackages from '@/components/home/RevenuePackages';
import ROICalculator from '@/components/home/ROICalculator';
import ReviewSection from '@/components/home/ReviewSection';
import Industries from '@/components/home/Industries';
import CaseStudies from '@/components/home/CaseStudies';
import VisibilityTool from '@/components/home/VisibilityTool';
import FAQSection from '@/components/home/FAQSection';
import TrustedBy from '@/components/home/TrustedBy';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Industries />
      <CaseStudies />
      <VerticalDominance />
      <VisibilityTool />
      <FAQSection />
      <RevenuePackages />
      <ROICalculator />
      <ReviewSection />
      <CTA />
    </>
  );
}
