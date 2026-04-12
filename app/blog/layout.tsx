import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'المدونة | ون تو فايف كليك',
  description: 'مقالات وأبحاث متخصصة في السيو، GEO، وأتمتة التسويق الرقمي في السعودية والخليج. ابقَ على اطلاع بأحدث تقنيات النمو.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
