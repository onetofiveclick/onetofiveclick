import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أدوات الذكاء التسويقي | AEO & GEO | ون تو فايف كليك',
  description: 'استخدم أدواتنا المجانية المبنية بمعايير AEO 2026 لتحليل وبناء وتحسين محتواك الرقمي. مولدات AEO ومدققات التنافسية.',
  alternates: {
    canonical: 'https://onetofiveclick.com/tools/',
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
