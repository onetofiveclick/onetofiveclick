import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: '1-5 Click - حي الشاطئ جدة | ون تو فايف كليك' },
  description: 'خدمات سيو وتسويق رقمي متميزة في حي الشاطئ، جدة. استهدف نخبة العملاء في أرقى أحياء العروس.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/jeddah/al-shati/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
