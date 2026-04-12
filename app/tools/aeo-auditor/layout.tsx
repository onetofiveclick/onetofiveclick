import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مدقق الهلوسة AEO | تحليل المنافسين | ون تو فايف كليك',
  description: 'حلل محتوى منافسيك واكتشف الفجوات المعرفية (Hallucinations) التي يتركها الذكاء الاصطناعي في إجاباته عنهم لتحسين ظهورك.',
  alternates: {
    canonical: 'https://onetofiveclick.com/tools/aeo-auditor/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
