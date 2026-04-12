import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ون تو فايف كليك - حي الملز الرياض | سيو محلي',
  description: 'دعم الشركات والمقاولين في حي الملز للتحول الرقمي والسيطرة على نتائج البحث المحلية في قلب الرياض.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/riyadh/al-malaz/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
