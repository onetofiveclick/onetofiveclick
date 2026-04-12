import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'الظهور في Google Discover 2026: استراتيجية الزيارات المليونية | ون تو فايف كليك' },
  description: 'كيف تقتحم واجهة هواتف ملايين السعوديين وتجعل محتواك ينتشر تلقائياً كالـ Viral دون انتظار بحث المستخدم.',
  alternates: {
    canonical: 'https://www.onetofiveclick.com/blog/google-discover-visibility/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
