import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Technical SEO Services - Website Optimization Experts',
    description: 'Expert Technical SEO services to fix crawl errors, improve site speed, optimize Core Web Vitals, and boost your search rankings. Get a free technical audit.',
    keywords: ['technical SEO', 'site speed optimization', 'Core Web Vitals', 'crawl errors', 'technical audit', 'website performance', 'mobile optimization', 'schema markup'],
    openGraph: {
        title: 'Technical SEO Services - Fix Technical Issues & Rank Higher',
        description: 'Comprehensive technical SEO optimization. Fix crawl errors, improve speed, and dominate search results.',
        url: 'https://onetofiveclick.com/services/seo/technical-seo',
        type: 'website',
    },
    alternates: {
        canonical: '/services/seo/technical-seo/',
    },
};

export default function TechnicalSEOLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                '@id': 'https://onetofiveclick.com/services/seo/technical-seo#service',
                name: 'Technical SEO Services',
                description: 'Comprehensive technical SEO optimization including site speed, Core Web Vitals, crawl errors, mobile optimization, and schema markup implementation.',
                provider: {
                    '@type': 'Organization',
                    name: 'One to Five Click',
                    url: 'https://onetofiveclick.com'
                },
                areaServed: 'Worldwide',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Technical SEO Services',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Site Speed Optimization'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Core Web Vitals Optimization'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Mobile Optimization'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Schema Markup Implementation'
                            }
                        }
                    ]
                }
            },
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://onetofiveclick.com/services/seo/technical-seo#breadcrumb',
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
                        name: 'Technical SEO',
                        item: 'https://onetofiveclick.com/services/seo/technical-seo'
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
