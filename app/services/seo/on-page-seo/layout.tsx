import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'On-Page SEO Services - Content Optimization Experts',
    description: 'Professional On-Page SEO services to optimize your content, meta tags, headers, and internal linking. Rank higher with keyword-optimized content.',
    keywords: ['on-page SEO', 'content optimization', 'keyword research', 'meta tags', 'header optimization', 'internal linking', 'SEO content writing'],
    openGraph: {
        title: 'On-Page SEO Services - Content That Ranks & Converts',
        description: 'Expert on-page optimization for better rankings. Keyword research, content optimization, and meta tag perfection.',
        url: 'https://onetofiveclick.com/services/seo/on-page-seo',
        type: 'website',
    },
    alternates: {
        canonical: '/services/seo/on-page-seo/',
    },
};

export default function OnPageSEOLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                '@id': 'https://onetofiveclick.com/services/seo/on-page-seo#service',
                name: 'On-Page SEO Services',
                description: 'Comprehensive on-page SEO optimization including keyword research, content optimization, meta tags, header structure, and internal linking strategies.',
                provider: {
                    '@type': 'Organization',
                    name: 'One to Five Click',
                    url: 'https://onetofiveclick.com'
                },
                areaServed: 'Worldwide',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'On-Page SEO Services',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Keyword Optimization'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Content Quality Enhancement'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Meta Tags Optimization'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Internal Linking Strategy'
                            }
                        }
                    ]
                }
            },
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://onetofiveclick.com/services/seo/on-page-seo#breadcrumb',
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
                        name: 'On-Page SEO',
                        item: 'https://onetofiveclick.com/services/seo/on-page-seo'
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
