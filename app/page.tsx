import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import VerticalDominance from '@/components/home/VerticalDominance';
import RevenuePackages from '@/components/home/RevenuePackages';
import ROICalculator from '@/components/home/ROICalculator';
import ReviewSection from '@/components/home/ReviewSection';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <VerticalDominance />
      <RevenuePackages />
      <ROICalculator />
      <ReviewSection />
      <CTA />
    </>
  );
}
