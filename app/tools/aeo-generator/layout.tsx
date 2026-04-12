import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'أداة AEO Generator | توليد المحتوى الذري | ون تو فايف كليك',
  },
  description: 'أداة AEO Generator من ون تو فايف كليك لتوليد المحتوى الذري وتحسين محركات الإجابة.',
  alternates: {
    canonical: 'https://www.onetofiveclick.com/tools/aeo-generator/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
