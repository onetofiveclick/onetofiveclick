import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Content Writing Services - SEO Content That Converts',
    description: 'Professional content writing services for blogs, websites, and marketing. SEO-optimized, engaging content that drives traffic and conversions.',
    keywords: ['content writing', 'SEO content', 'blog writing', 'website copywriting', 'content marketing', 'professional writing services'],
    openGraph: {
        title: 'Content Writing Services - Words That Convert & Inspire',
        description: 'Expert content writing for all your needs. SEO-optimized, engaging, and conversion-focused.',
        url: 'https://onetofiveclick.com/services/content-writing',
        type: 'website',
    },
    alternates: {
        canonical: '/services/content-writing/',
    },
};

export default function ContentWritingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                '@id': 'https://onetofiveclick.com/services/content-writing#service',
                name: 'Content Writing Services',
                description: 'Professional content writing services including blog writing, website copywriting, SEO content, social media content, and email campaigns.',
                provider: {
                    '@type': 'Organization',
                    name: 'One to Five Click',
                    url: 'https://onetofiveclick.com'
                },
                areaServed: 'Worldwide',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Content Writing Services',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Blog Writing'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Website Copywriting'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'SEO Content'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Product Descriptions'
                            }
                        }
                    ]
                }
            },
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://onetofiveclick.com/services/content-writing#breadcrumb',
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
                        name: 'Services',
                        item: 'https://onetofiveclick.com/services'
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'Content Writing',
                        item: 'https://onetofiveclick.com/services/content-writing'
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
