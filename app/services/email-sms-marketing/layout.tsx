import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'التسويق عبر البريد الإلكتروني والرسائل القصيرة | استبقاء العملاء | 1-5 كليك',
  description: 'قائمتك البريدية هي أصلك الحقيقي. نحن نبني الأنظمة المؤتمتة التي تلتقط وتغذي وتستفيد من كل عميل محتمل في الرياض وجدة.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/email-sms-marketing/',
  },
};

export default function EmailSMSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
