import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ون تو فايف كليك - طريق الملك عبدالله جدة | سيو أعمال',
  description: 'خدمات سيو ونمو رقمي للشركات المتواجدة في طريق الملك عبدالله، القلب التجاري لمدينة جدة.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/jeddah/king-abdullah-rd/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
