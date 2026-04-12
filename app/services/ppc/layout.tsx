import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'إعلانات ممولة بالذكاء الاصطناعي | متصل Retell AI وحجز حجوزات | 1-5 كليك',
  description: 'نحن نستبدل نموذج SMMA القديم بأتمتة ذكاء اصطناعي كاملة. إعلانات، متصل آلي لحجز المواعيد في 3 دقائق، وتحسين إغلاق المبيعات.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/ppc/',
  },
};

export default function PPCLayout({ children }: { children: React.ReactNode }) {
  return children;
}
