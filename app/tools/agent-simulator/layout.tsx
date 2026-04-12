import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'محاكي الوكيل الذكي | ون تو فايف كليك',
  description: 'تجربة محاكاة لوكلاء الذكاء الاصطناعي في تحليل المشاعر وحماية سمعة العلامة التجارية.',
  alternates: {
    canonical: 'https://onetofiveclick.com/tools/agent-simulator/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
