import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'إدارة السمعة الرقمية (ORM) | تضخيم الثقة | 1-5 كليك',
  description: 'نحن نحمي ونعزز صورة علامتك التجارية في السوق السعودي. استراتيجيات استباقية للرد على المراجعات وتضخيم رأي العملاء الإيجابي.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/reputation/',
  },
};

export default function ReputationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
