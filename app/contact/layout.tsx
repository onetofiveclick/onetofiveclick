import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تواصل معنا | ون تو فايف كليك',
  description: 'سواء كنت في الرياض أو جدة أو أي مكان في المملكة، فإن فريقنا من خبراء السيو المحلي هنا لمساعدتك على النمو والتوسع في السوق السعودي.',
  alternates: {
    canonical: 'https://onetofiveclick.com/contact/',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
