import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'منهجيتنا | ون تو فايف كليك' },
  description: 'كيف نعمل؟ اكتشف منهجية الـ 3 مراحل التي نستخدمها لرفع ترتيب المواقع وزيادة المبيعات بشكل مستدام.',
  alternates: {
    canonical: 'https://www.onetofiveclick.com/methodology/',
  },
};

export default function MethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
