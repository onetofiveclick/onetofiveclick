import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دراسات الحالة | نتائج حقيقية من عملاء حقيقيين | ون تو فايف كليك',
  description:
    'استكشف كيف ساعدنا شركات في الرياض وجدة ولاهور ودبي على تحقيق نمو رقمي متسارع عبر السيو التقني وتحسين محركات الإجابة (AEO). نتائج مُثبتة بالأرقام.',
  openGraph: {
    title: 'دراسات الحالة | ون تو فايف كليك',
    description: 'نتائج حقيقية: +320٪ حركة عضوية في 90 يوماً. شاهد كيف نُحوّل الاستراتيجية إلى أرقام.',
    url: 'https://onetofiveclick.com/case-studies/',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'],
  },
  alternates: {
    canonical: 'https://onetofiveclick.com/case-studies/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
