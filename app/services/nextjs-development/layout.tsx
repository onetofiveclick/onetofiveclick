import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تطوير مؤسسات Next.js 15+ في السعودية | ون تو فايف كليك',
  description: 'نحن نهندس محركات إيرادات عالية الأداء للشركات السعودية باستخدام أحدث مكونات الخادم وبنية الحافة (Edge) لعام 2026.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/nextjs-development/',
  },
};

export default function NextJsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
