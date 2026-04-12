import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أعمالنا | ون تو فايف كليك',
  description: 'شاهد نتائج عملنا مع كبرى الشركات في السعودية. قصص نجاح في السيو، الأتمتة، والنمو الرقمي.',
  alternates: {
    canonical: '/portfolio/',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
