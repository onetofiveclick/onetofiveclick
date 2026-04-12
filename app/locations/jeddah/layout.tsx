import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تسويق رقمي في جدة | خبير سيو وأتمتة | 1-5 كليك',
  description: 'عزز حضورك الرقمي في عروس البحر الأحمر. خدمات سيو، إدارة سمعة، وتسويق ذكي للشركات في جدة. سيطر على محركات البحث المحلي اليوم.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/jeddah',
  },
};

export default function JeddahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
