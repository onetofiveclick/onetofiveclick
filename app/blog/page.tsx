'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'The Ultimate Guide to Technical SEO in 2024',
        excerpt: 'Learn how to optimize your website\'s technical foundation for better search engine rankings and user experience.',
        author: 'Sarah Johnson',
        date: 'December 1, 2024',
        category: 'Technical SEO',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        slug: 'ultimate-guide-technical-seo-2024'
    },
    {
        id: 2,
        title: 'Local SEO: How to Dominate Your Local Market',
        excerpt: 'Discover proven strategies to rank #1 in Google Maps and the Local Pack. Increase calls and foot traffic to your business.',
        author: 'Michael Chen',
        date: 'November 28, 2024',
        category: 'Local SEO',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
        slug: 'local-seo-dominate-market'
    },
    {
        id: 3,
        title: '10 Content Writing Tips That Boost Conversions',
        excerpt: 'Master the art of persuasive copywriting with these proven techniques that turn readers into customers.',
        author: 'Emily Rodriguez',
        date: 'November 25, 2024',
        category: 'Content Writing',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
        slug: 'content-writing-tips-boost-conversions'
    },
    {
        id: 4,
        title: 'Link Building Strategies That Actually Work',
        excerpt: 'Ethical, white-hat link building techniques to increase your domain authority and search rankings.',
        author: 'David Kim',
        date: 'November 22, 2024',
        category: 'Off-Page SEO',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80',
        slug: 'link-building-strategies-work'
    },
    {
        id: 5,
        title: 'On-Page SEO Checklist: 25 Must-Do Items',
        excerpt: 'A comprehensive checklist to ensure every page on your website is optimized for search engines.',
        author: 'Sarah Johnson',
        date: 'November 19, 2024',
        category: 'On-Page SEO',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
        slug: 'on-page-seo-checklist'
    },
    {
        id: 6,
        title: 'PPC vs SEO: Which is Right for Your Business?',
        excerpt: 'Understanding the differences, benefits, and when to use each digital marketing strategy.',
        author: 'Michael Chen',
        date: 'November 15, 2024',
        category: 'Digital Marketing',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        slug: 'ppc-vs-seo-comparison'
    }
];

const categories = ['All', 'Technical SEO', 'Local SEO', 'On-Page SEO', 'Off-Page SEO', 'Content Writing', 'Digital Marketing'];

export default function BlogPage() {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Insights</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Expert tips, strategies, and insights to grow your online presence and dominate search rankings.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-6 py-2 rounded-full transition-all ${index === 0
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <User className="h-4 w-4" />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                                    >
                                        Read More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex justify-center">
                        <div className="flex items-center space-x-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Get SEO Tips Delivered to Your Inbox
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join 10,000+ marketers receiving weekly insights and strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                        />
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-bold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
