import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'ما هو AEO؟ دليل تحسين محركات الإجابة الشامل | ون تو فايف كليك' },
  description: 'تعرّف على AEO (تحسين محركات الإجابة) وكيف تجعل أدوات الذكاء الاصطناعي مثل ChatGPT و Perplexity و Gemini توصي بعملك. دليل شامل مع خطوات عملية وأمثلة.',
  alternates: {
    canonical: 'https://onetofiveclick.com/blog/aeo-answer-engine-optimization-guide/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
