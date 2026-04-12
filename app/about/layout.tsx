import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'من نحن | ون تو فايف كليك',
  description: 'تعرف على الفريق والمنهجية خلف وكالة ون تو فايف كليك. نهجنا في السيو والأتمتة لإعادة تشغيل السوق السعودي.',
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
