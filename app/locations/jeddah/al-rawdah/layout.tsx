import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1-5 Click - حي الروضة جدة | ون تو فايف كليك',
  description: 'خدمات سيو متخصصة لحي الروضة بجدة. نساعد الشركات التجارية في الروضة على الهيمنة على نتائج البحث المحلية.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/jeddah/al-rawdah/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
