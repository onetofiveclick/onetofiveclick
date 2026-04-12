import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تحسين محركات البحث SEO و AEO لعام 2026',
  description: 'خدمات سيو (SEO) متقدمة في السعودية. متخصصون في الهيمنة على نتائج جوجل و Perplexity و ChatGPT من خلال السلطة الموضوعية وعلم الكيانات.',
  alternates: {
    canonical: '/services/seo/',
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
