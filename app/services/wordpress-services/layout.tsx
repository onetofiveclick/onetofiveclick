import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تطوير ووردبريس (WordPress) عالي الأداء | ون تو فايف كليك',
  description: 'نحول إعدادات ووردبريس القياسية إلى محركات إيرادات عالية السلطة في السعودية. برمجة مخصصة، أمان فائق، وسرعة تحميل أقل من ثانية.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/wordpress-services/',
  },
};

export default function WordPressLayout({ children }: { children: React.ReactNode }) {
  return children;
}
