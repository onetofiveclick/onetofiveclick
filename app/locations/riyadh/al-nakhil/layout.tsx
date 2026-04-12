import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1-5 Click - حي النخيل الرياض | ون تو فايف كليك',
  description: 'استراتيجيات سيو وقوة رقمية لشركات حي النخيل بالرياض. استهدف النخبة في قلب العاصمة مع خبراء ون تو فايف كليك.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/riyadh/al-nakhil/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
