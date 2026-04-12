import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/_next/static/',
                    '/_next/image/',
                    '/public/',
                    '/favicon.ico',
                    '/home%20images/',
                    '/icons/',
                    '/fonts/',
                    '/images/',
                ],
            },
            {
                userAgent: [
                    'GPTBot',
                    'CCBot',
                    'Bingbot',
                    'ClaudeBot',
                    'Claude-User',
                    'Claude-SearchBot'
                ],
                allow: '/',
            }
        ],
        sitemap: 'https://onetofiveclick.com/sitemap.xml',
    }
}
