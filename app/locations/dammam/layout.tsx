import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1-5 Click - الدمام والمنطقة الشرقية | ون تو فايف كليك',
  description: 'حلول تسويقية متكاملة وسيو صناعي مخصص لشركات الدمام، الخبر، والجبيل. نبني حضورك الرقمي لينافس عالمياً.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/dammam/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
