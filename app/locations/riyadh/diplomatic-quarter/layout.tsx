import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'الحي الدبلوماسي الرياض - وكالة تسويق رقمي | ون تو فايف كليك',
  },
  description: 'تسويق رقمي عالمي المستوى للشركات والمؤسسات في الحي الدبلوماسي بالرياض. خبرة في الوصول للجمهور الدولي والمحلي.',
  alternates: {
    canonical: 'https://www.onetofiveclick.com/locations/riyadh/diplomatic-quarter/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
