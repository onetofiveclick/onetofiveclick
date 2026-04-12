import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دليل نجاة الأسماك الذهبية في حر لاهور | دراسة حالة AEO | 1-5 كليك',
  description: 'دراسة حالة حول كيفية تحسين محتوى متخصص لمحركات الإجابة (AEO) باستخدام نموذج A-Q-C-E. مثال: نجاة الأسماك الذهبية في الظروف المناخية الصعبة.',
  alternates: {
    canonical: 'https://onetofiveclick.com/case-studies/goldfish-summer-care/',
  },
};

export default function GoldfishCaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
