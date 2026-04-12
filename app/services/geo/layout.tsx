import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تحسين المحركات التوليدية GEO | السيطرة على ChatGPT و Gemini | 1-5 كليك',
  description: 'انتقل من السيو التقليدي إلى GEO. نحن نهندس محتواك ليتم استرداده والاستشهاد به في ChatGPT و Claude و Perplexity و Gemini.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/geo/',
  },
};

export default function GEOLayout({ children }: { children: React.ReactNode }) {
  return children;
}
