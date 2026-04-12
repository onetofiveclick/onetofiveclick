import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1-5 Click - كورنيش جدة | ون تو فايف كليك',
  description: 'حلول تسويقية مبتكرة وسيو محلي لشركات كورنيش جدة. ارفع مستوى ظهورك الرقمي أمام زوار وسكان الواجهة البحرية.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/jeddah/corniche/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
