import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تحسين المحركات التوليدية (GEO) و AEO | ون تو فايف كليك',
  description: 'استعد لمستقبل البحث مع خدمات GEO و AEO. نضمن ظهور علامتك التجارية كإجابة أولى في ChatGPT و Gemini و Perplexity.',
  alternates: {
    canonical: '/services/seo/aeo-geo/',
  },
};

export default function AEOGEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
