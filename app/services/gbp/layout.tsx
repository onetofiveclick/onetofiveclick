import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تحسين ملفات جوجل للأعمال (GBP) | تصدر الخرائط | 1-5 كليك',
  description: 'نحول ملفك على جوجل للأعمال إلى آلة لجلب العملاء المستهدفين في الأحياء المحيطة بك من خلال تحسين الكيانات الجغرافية والسيو المحلي.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/gbp/',
  },
};

export default function GBPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
