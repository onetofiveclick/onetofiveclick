import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تطوير مواقع Next.js ووردبريس | أصول رقمية عالية السرعة | 1-5 كليك',
  description: 'نبني مواقع وتطبيقات ويب للشركات السعودية يتم تحميلها في أقل من ثانية وتتحول بشكل مذهل. دمج السيو و GEO في صميم الكود.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/web-development/',
  },
};

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
