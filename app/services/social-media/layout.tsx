import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سيو وسائل التواصل الاجتماعي | تصدر نتائج بحث TikTok و Instagram | 1-5 كليك',
  description: 'المنصات الاجتماعية هي محركات البحث الجديدة. نحن نهندس محتواك للإجابة على الأسئلة الدقيقة التي يكتبها جمهورك في Instagram و TikTok و YouTube.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/social-media/',
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
