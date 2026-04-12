import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'خبراتنا | ون تو فايف كليك',
  description: 'تخصصنا في السيو، GEO، وأتمتة العمليات. نستخدم أحدث التقنيات لضمان تصدرك لنتائج البحث في السعودية.',
  alternates: {
    canonical: '/expertise/',
  },
};

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
