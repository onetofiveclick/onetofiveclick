import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Local SEO Services - Dominate Your Local Market',
    description: 'Expert Local SEO services to rank #1 in Google Maps and Local Pack. GMB optimization, local citations, review management, and more. Get 300+ calls/month.',
    keywords: ['local SEO', 'Google My Business', 'GMB optimization', 'local pack', 'Google Maps', 'local citations', 'review management', 'local search'],
    openGraph: {
        title: 'Local SEO Services - Dominate Local Search & Google Maps',
        description: 'Rank #1 in your local market. GMB optimization, citations, reviews, and local authority building.',
        url: 'https://onetofiveclick.com/services/seo/local-seo',
        type: 'website',
    },
    alternates: {
        canonical: '/services/seo/local-seo/',
    },
};

export default function LocalSEOLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                '@id': 'https://onetofiveclick.com/services/seo/local-seo#service',
                name: 'Local SEO Services',
                description: 'Comprehensive local SEO services including Google Business Profile optimization, local citations, review management, and multi-location SEO strategies.',
                provider: {
                    '@type': 'Organization',
                    name: 'One to Five Click',
                    url: 'https://onetofiveclick.com'
                },
                areaServed: 'Worldwide',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Local SEO Services',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Google Business Profile Optimization'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Review Management'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Local Citations Building'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Multi-Location SEO'
                            }
                        }
                    ]
                }
            },
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://onetofiveclick.com/services/seo/local-seo#breadcrumb',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://onetofiveclick.com'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'SEO Services',
                        item: 'https://onetofiveclick.com/services/seo'
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'Local SEO',
                        item: 'https://onetofiveclick.com/services/seo/local-seo'
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            {children}
        </>
    );
}
