import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { seoCities, seoDistricts } from '@/lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://onetofiveclick.com';

    // 1. Static Core Pages
    const staticPages: MetadataRoute.Sitemap = [
        '',
        '/about',
        '/contact',
        '/portfolio',
        '/case-studies',
        '/services',
        '/blog',
        '/expertise',
        '/privacy',
        '/terms',
        '/seo-services',
        '/resources',
        '/tools',
        '/tools/aeo-auditor',
        '/tools/aeo-generator',
        '/tools/agent-simulator'
    ].map(route => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. SEO Service Detail Pages (Hardcoded in sitemap previously)
    const seoServicePages: MetadataRoute.Sitemap = [
        '/services/seo',
        '/services/seo/technical-seo',
        '/services/seo/on-page-seo',
        '/services/seo/off-page-seo',
        '/services/seo/local-seo',
        '/services/seo/aeo-geo',
        '/services/content-writing'
    ].map(route => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // 3. Dynamic Blog Post Pages
    const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // 4. Dynamic Location City Pages
    const cityPages: MetadataRoute.Sitemap = seoCities
        .filter(city => ['riyadh', 'jeddah', 'dammam'].includes(city.slug)) // Only these have implementation folders
        .map(city => ({
            url: `${baseUrl}/locations/${city.slug}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        }));

    // 5. Dynamic Location District Pages
    const districtPages: MetadataRoute.Sitemap = [];
    Object.entries(seoDistricts).forEach(([citySlug, districts]) => {
        districts.forEach(district => {
            districtPages.push({
                url: `${baseUrl}/locations/${citySlug}/${district.slug}/`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    });

    // 6. Dynamic SEO Services by City
    const seoCityServicesPages: MetadataRoute.Sitemap = seoCities.map(city => ({
        url: `${baseUrl}/seo-services/${city.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // 7. Case Studies
    const caseStudyPages: MetadataRoute.Sitemap = [
        '/case-studies/goldfish-summer-care'
    ].map(route => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        ...staticPages,
        ...seoServicePages,
        ...blogPages,
        ...cityPages,
        ...districtPages,
        ...seoCityServicesPages,
        ...caseStudyPages
    ];
}
