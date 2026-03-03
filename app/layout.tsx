import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'One to Five Click - Expert Digital Marketing & SEO Services',
    template: '%s | One to Five Click'
  },
  description: 'Transform your brand with expert digital marketing services including Technical SEO, Local SEO, PPC, social media marketing, web development, and content writing. Get results in 1-5 clicks.',
  icons: {
    icon: '/icon.svg',
  },
  keywords: ['digital marketing', 'SEO services', 'technical SEO', 'local SEO', 'on-page SEO', 'off-page SEO', 'PPC advertising', 'social media marketing', 'web development', 'content writing', 'digital marketing agency'],
  authors: [{ name: 'One to Five Click' }],
  creator: 'One to Five Click',
  publisher: 'One to Five Click',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onetofiveclick.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'One to Five Click - Expert Digital Marketing & SEO Services',
    description: 'Transform your brand with expert digital marketing services. Specializing in Technical SEO, Local SEO, and comprehensive digital solutions.',
    url: 'https://onetofiveclick.com',
    siteName: 'One to Five Click',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One to Five Click - Expert Digital Marketing & SEO Services',
    description: 'Transform your brand with expert digital marketing services. Get results in 1-5 clicks.',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'One to Five Click',
              url: 'https://onetofiveclick.com',
              logo: 'https://onetofiveclick.com/logo.png',
              description: 'Expert digital marketing agency specializing in Next.js, WordPress, and Global SEO scaling.',
              email: 'team@onetofiveclick.com',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'team@onetofiveclick.com'
              },
              sameAs: [
                'https://facebook.com/onetofiveclick',
                'https://twitter.com/onetofiveclick',
                'https://linkedin.com/company/onetofiveclick',
                'https://instagram.com/onetofiveclick'
              ],
              areaServed: 'Worldwide',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Digital Marketing Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Technical SEO',
                      description: 'Comprehensive technical SEO optimization services'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Local SEO',
                      description: 'Local search optimization to dominate your market'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'On-Page SEO',
                      description: 'Content optimization for better rankings'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Off-Page SEO',
                      description: 'Link building and authority development'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Content Writing',
                      description: 'Professional content writing services'
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
