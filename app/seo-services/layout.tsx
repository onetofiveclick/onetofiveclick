import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'خدمات سيو (SEO) متخصصة لكل القطاعات والمدن | ون تو فايف كليك',
  description: 'حلول سيو مخصصة للشركات السعودية. اختر قطاعك ومدينتك لتصل إلى عملائك المستهدفين من خلال خبرات سيو محلية وتقنية متقدمة.',
  alternates: {
    canonical: '/seo-services/',
  },
};

export default function SeoServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
