import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://onetofiveclick.com'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        // SEO Services
        {
            url: `${baseUrl}/services/seo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/services/seo/technical-seo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/seo/on-page-seo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/seo/off-page-seo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/seo/local-seo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Other Services
        {
            url: `${baseUrl}/services/ppc`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/social-media`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/web-development`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/content-writing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/geo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/email-sms-marketing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/creator-strategy`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/wordpress-services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/nextjs-development`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // Locations
        {
            url: `${baseUrl}/locations/riyadh`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/locations/jeddah`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/locations/dammam`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/resources`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/expertise`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Services Hub
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Tools
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools/aeo-generator`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Blog
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/aeo-answer-engine-optimization-guide`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog/entity-seo-helpful-content-ai-ksa`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog/technical-seo-saudi-guide`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog/sundar-pichai-search-future`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog/google-ai-mode-seo-5-rules`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog/ai-shadow-operating`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/geo-agency-ksa`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/marketing-automation-riyadh-b2b`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/umrah-taxi-service`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Legal
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        // AEO/GEO sub-service
        {
            url: `${baseUrl}/services/seo/aeo-geo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Neighbourhood pages
        {
            url: `${baseUrl}/locations/riyadh/olaya`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/locations/riyadh/al-malaz`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/locations/riyadh/al-rawdah`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/locations/jeddah/king-abdullah-rd`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/locations/dammam/ash-shati`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}
