import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الإشارات المحلية (Citations) في السعودية | تعزيز الثقة والموثوقية | 1-5 كليك',
  description: 'نقوم بمزامنة معلومات شركتك عبر أفضل الدلائل الموثوقة كـ "معروف" والصفحات الصفراء لتعزيز موثوقية علامتك لدى محركات البحث والعملاء في السعودية.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/citations/',
  },
};

export default function CitationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
