import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ون تو فايف كليك - حي الروضة الرياض | سيو وأتمتة',
  description: 'خدمات سيو وأتمتة أعمال متقدمة للشركات في حي الروضة، الرياض. نمو رقمي مستدام لعملك.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/riyadh/al-rawdah/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
