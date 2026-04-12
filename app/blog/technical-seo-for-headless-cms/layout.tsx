import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'السيو التقني لـ Headless CMS 2026 (Next.js & Contentful) | ون تو فايف كليك' },
  description: 'دليل المطورين والمسوقين لبناء مواقع خارقة السرعة، صديقة للذكاء الاصطناعي، ومثالية للسوق السعودي.',
  alternates: {
    canonical: 'https://onetofiveclick.com/blog/technical-seo-for-headless-cms/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
