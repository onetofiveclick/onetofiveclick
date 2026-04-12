import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1-5 Click - حي الشاطئ الدمام | ون تو فايف كليك',
  description: 'خدمات التسويق الرقمي والأتمتة لقطاعات الخدمات واللوجستيات في حي الشاطئ بالدمام. بوابة النمو الرقمي في المنطقة الشرقية.',
  alternates: {
    canonical: 'https://www.onetofiveclick.com/locations/dammam/ash-shati/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
