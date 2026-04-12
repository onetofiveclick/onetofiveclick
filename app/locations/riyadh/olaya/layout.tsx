import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ون تو فايف كليك - حي العليا الرياض | سيو وأتمتة أعمال',
  description: 'خدمات التسويق الرقمي والسيو المخصصة للشركات في حي العليا، الرياض. سيطر على نتائج البحث في مركز المال والأعمال.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/riyadh/olaya/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
