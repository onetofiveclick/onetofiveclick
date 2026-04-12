import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مركز المعرفة والمواد التعليمية | ون تو فايف كليك',
  description: 'مجموعة حصرية من التقارير والدراسات لتعزيز الفهم التقني ودعم قادة التحول الرقمي في المملكة العربية السعودية. قوالب سيو وأتمتة.',
  alternates: {
    canonical: 'https://onetofiveclick.com/resources/',
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
