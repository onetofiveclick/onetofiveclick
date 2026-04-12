import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'وكالة سيو في الرياض | سيطرة كاملة على نتائج البحث | 1-5 كليك',
  description: 'أفضل وكالة سيو وأتمتة أعمال في الرياض. نحن نساعد الشركات الكبرى في المملكة على السيطرة على نتائج البحث المحلية (GMB) وزيادة التحويلات باستخدام الذكاء الاصطناعي.',
  openGraph: {
    title: 'وكالة سيو في الرياض | سيطرة كاملة على نتائج البحث',
    description: 'تحسين محركات البحث المحلي وأتمتة العمليات للشركات في الرياض. رؤية 2030 تبدأ من هنا.',
    images: ['https://onetofiveclick.com/images/riyadh-seo.jpg'],
  },
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/riyadh/',
  },
};

export default function RiyadhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
