import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'مستقبل البحث المحلي 2027: ما وراء الخرائط والكلمات | ون تو فايف كليك' },
  description: 'كيف ستتغير رحلة العميل السعودي مع دمج الشات بوت، الواقع المعزز (AR)، والبحث البصري في حياته اليومية.',
  alternates: {
    canonical: 'https://www.onetofiveclick.com/blog/future-of-local-search/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
