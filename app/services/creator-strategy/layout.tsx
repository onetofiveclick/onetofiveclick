import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'استراتيجية المبدعين ومشغلي الظل | تسييل المتابعين | 1-5 كليك',
  description: 'نحن المهندسون الذين يبنون الأنظمة الخلفية وحلقات التسييل ومراكز المجتمع للمبدعين في السعودية. حول متابعيك إلى أصول مدرة للدخل.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/creator-strategy/',
  },
};

export default function CreatorStrategyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
