import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Off-Page SEO Services - Link Building & Authority Development',
    description: 'Expert Off-Page SEO services including high-quality link building, digital PR, brand mentions, and authority development. Boost your domain authority.',
    keywords: ['off-page SEO', 'link building', 'backlinks', 'domain authority', 'digital PR', 'brand mentions', 'guest posting', 'influencer outreach'],
    openGraph: {
        title: 'Off-Page SEO Services - Build Authority & Dominate Rankings',
        description: 'Strategic off-page SEO and link building. Earn high-quality backlinks and establish industry authority.',
        url: 'https://onetofiveclick.com/services/seo/off-page-seo',
        type: 'website',
    },
    alternates: {
        canonical: '/services/seo/off-page-seo',
    },
};

export default function OffPageSEOLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                '@id': 'https://onetofiveclick.com/services/seo/off-page-seo#service',
                name: 'Off-Page SEO Services',
                description: 'Comprehensive off-page SEO including strategic link building, digital PR campaigns, brand mention management, guest posting, and influencer outreach.',
                provider: {
                    '@type': 'Organization',
                    name: 'One to Five Click',
                    url: 'https://onetofiveclick.com'
                },
                areaServed: 'Worldwide',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Off-Page SEO Services',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Link Building'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Digital PR Campaigns'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Brand Mention Management'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Guest Posting'
                            }
                        }
                    ]
                }
            },
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://onetofiveclick.com/services/seo/off-page-seo#breadcrumb',
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
                        name: 'Off-Page SEO',
                        item: 'https://onetofiveclick.com/services/seo/off-page-seo'
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
