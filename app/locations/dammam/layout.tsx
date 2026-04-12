import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سيو وأتمتة أعمال في الدمام والشرقية | 1-5 كليك',
  description: 'حلول رقمية متطورة للمناطق الصناعية والتجارية في الدمام والخبر والجبيل. أتمتة العمليات والسيطرة على البحث المحلي بأحدث تقنيات الذكاء الاصطناعي.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/dammam',
  },
};

export default function DammamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
