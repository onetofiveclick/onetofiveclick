import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'ون تو فايف كليك - أفضل وكالة تسويق رقمي في السعودية وسيو لعام 2026',
    template: '%s | ون تو فايف كليك'
  },
  description: 'ارتقِ بعلامتك التجارية في السعودية مع خدمات التسويق الرقمي الخبيرة في الرياض وجدة. متخصصون في السيو التقني، والسيو المحلي، وإعلانات الدفع لكل نقرة، وتطوير Next.js. احصل على نتائج ملموسة بنقرات بسيطة.',
  icons: {
    icon: '/icon.svg',
  },
  keywords: ['تسويق رقمي السعودية', 'وكالة سيو الرياض', 'خدمات سيو جدة', 'سيو تقني', 'سيو محلي المملكة', 'إعلانات جوجل السعودية', 'تسويق شبكات اجتماعية', 'تطوير مواقع Next.js', 'كتابة محتوى عربي', '1to5click'],
  authors: [{ name: 'ون تو فايف كليك' }],
  creator: 'ون تو فايف كليك',
  publisher: 'ون تو فايف كليك',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onetofiveclick.com'),
  openGraph: {
    title: 'ون تو فايف كليك - وكالة خبيرة في التسويق الرقمي وسيو',
    description: 'ارتقِ بعلامتك التجارية مع خدمات التسويق الرقمي الخبيرة. متخصصون في السيو التقني والمحلي وحلول التسويق الشاملة.',
    url: 'https://onetofiveclick.com',
    siteName: 'ون تو فايف كليك',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ون تو فايف كليك - وكالة خبيرة في التسويق الرقمي وسيو',
    description: 'ارتقِ بعلامتك التجارية مع خدمات التسويق الرقمي الخبيرة. احصل على نتائج في 1-5 نقرات.',
    creator: '@onetofiveclick',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '1PcvaIkddJ8PSbMZh_xzmA2vpxTgivrMSKpNHbn-Tuo',
    other: {
      'msvalidate.01': '5F4EFC27D86710196AA76DBA983E1832',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ون تو فايف كليك',
              url: 'https://onetofiveclick.com',
              logo: 'https://onetofiveclick.com/logo.svg',
              description: 'أفضل وكالة تسويق رقمي في السعودية متخصصة في Next.js وتحسين محركات البحث المحلية (سيو) في الرياض وجدة.',
              email: 'team@onetofiveclick.com',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'خدمة العملاء',
                email: 'team@onetofiveclick.com'
              },
              areaServed: 'Saudi Arabia',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'خدمات التسويق الرقمي',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'سيو تقني',
                      description: 'خدمات تحسين محركات البحث التقنية الشاملة'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'سيو محلي',
                      description: 'تحسين البحث المحلي للسيطرة على سوقك'
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "pic6m45h2z");
            `
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-831K0CRKL4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-831K0CRKL4');
            `
          }}
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "1-5 Click | ون تو فايف كليك",
              "image": "https://onetofiveclick.com/logo.svg",
              "@id": "https://onetofiveclick.com",
              "url": "https://onetofiveclick.com",
              "telephone": "+966 57 580 6733",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Riyadh District",
                "addressLocality": "Riyadh",
                "addressRegion": "Riyadh Province",
                "postalCode": "11111",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.7136,
                "longitude": 46.6753
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/1to5click",
                "https://twitter.com/1to5click",
                "https://www.instagram.com/1to5click",
                "https://www.linkedin.com/company/1to5click"
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Riyadh"
                },
                {
                  "@type": "City",
                  "name": "Jeddah"
                },
                {
                  "@type": "City",
                  "name": "Dammam"
                }
              ],
              "description": "The premier digital growth agency in Saudi Arabia, specializing in SEO, GEO (Generative Engine Optimization), and marketing automation for large enterprises."
            })
          }}
        />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
