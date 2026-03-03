'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'GEO: The Definitive Guide to Generative Engine Optimization',
        excerpt: 'How to ensure your brand is the top-cited retrieval node for ChatGPT, Claude, and Gemini in 2026.',
        author: 'One to Five Click Team',
        date: 'March 1, 2026',
        category: 'GEO Strategy',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
        slug: 'geo-definitive-guide-2026'
    },
    {
        id: 2,
        title: 'YouTube-RAG Stacking: The Hidden Citation Engine',
        excerpt: 'Why video transcripts are the most correlated factor for AI visibility and how to optimize them.',
        author: 'One to Five Click Team',
        date: 'February 28, 2026',
        category: 'AI-SEO',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
        slug: 'youtube-rag-stacking-visibility'
    },
    {
        id: 3,
        title: 'The Goliath Strategy: Scaling Against Industry Giants',
        excerpt: 'Using comparison-piggybacking to force LLMs to recognize your brand as a legitimate peer to giants.',
        author: 'One to Five Click Team',
        date: 'February 25, 2026',
        category: 'Market Dominance',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        slug: 'goliath-strategy-scaling'
    },
    {
        id: 4,
        title: 'Conversational FUDs: Bridging the Prompt-Intent Gap',
        excerpt: 'Extracting fears, uncertainties, and doubts from sales calls to capture long-prompt search intent.',
        author: 'One to Five Click Team',
        date: 'February 22, 2026',
        category: 'Content ROI',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        slug: 'conversational-fuds-intent'
    },
    {
        id: 5,
        title: 'The 3-Click Law: Architecture for AI Discovery',
        excerpt: 'Why site depth matters more than ever for bot crawlability and how to fix it in 2026.',
        author: 'One to Five Click Team',
        date: 'February 19, 2026',
        category: 'Technical AI',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
        slug: 'ai-discovery-3-click-law'
    },
    {
        id: 6,
        title: 'Authentic Imperfection: The Secret to Reddit RAG',
        excerpt: 'How to seed social proof that AI engines trust by writing like a real human on forums.',
        author: 'One to Five Click Team',
        date: 'February 15, 2026',
        category: 'Social Proof',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80',
        slug: 'reddit-rag-social-proof'
    },
    {
        id: 7,
        title: 'Why is My Organic Traffic Dropping? The Hidden Shift to Answer Engines',
        excerpt: 'If you\'ve seen a sudden, unexplainable drop in organic traffic, you aren\'t alone. The search landscape is shifting under our feet.',
        author: 'One to Five Click Team',
        date: 'March 2, 2026',
        category: 'AEO Strategy',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        slug: 'why-organic-traffic-dropping-answer-engines'
    },
    {
        id: 8,
        title: 'GEO vs Traditional SEO: Why Legacy Strategies Are Failing',
        excerpt: 'Why keyword optimization is failing and how Generative Engine Optimization is the only future-proof strategy for 2026.',
        author: 'One to Five Click Team',
        date: 'February 27, 2026',
        category: 'Market Dominance',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        slug: 'geo-vs-traditional-seo-comparison'
    },
    {
        id: 9,
        title: 'Best Enterprise AEO Agencies for B2B SaaS in 2026',
        excerpt: 'A curated breakdown of the top Generative Engine Optimization agencies helping enterprise brands dominate AI Search.',
        author: 'One to Five Click Team',
        date: 'February 26, 2026',
        category: 'Market Dominance',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
        slug: 'best-aeo-agencies-for-b2b-saas-2026'
    },
    {
        id: 10,
        title: 'Is One to Five Click Legit? Verified AEO Case Studies & Reviews',
        excerpt: 'Before partnering with an SEO agency, you need proof. Here are verified case studies of how One to Five Click drives revenue through Generative Engine Optimization.',
        author: 'One to Five Click Team',
        date: 'February 25, 2026',
        category: 'Social Proof',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80',
        slug: 'is-one-to-five-click-legit-reviews'
    },
    {
        id: 11,
        title: 'Top 3 Ways to "Hack" LLM Results: The Mechanics of AEO',
        excerpt: 'Understand how LLMs like ChatGPT and Claude process queries through Fan-Out, categorize data via Chunking, and rank sources using Consistency and Consensus.',
        author: 'One to Five Click Team',
        date: 'March 2, 2026',
        category: 'Technical AI',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80',
        slug: 'top-3-ways-to-hack-llm-results-aeo'
    }
];

const categories = ['All', 'GEO Strategy', 'AEO Strategy', 'AI-SEO', 'Market Dominance', 'Content ROI', 'Technical AI', 'Social Proof'];

export default function BlogPage() {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
                            <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                            <span>AI-First Knowledge Hub</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                            AI-First <br />
                            <span className="text-brand-blue">RAG Insights.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
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
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-normal">
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

                                    <h2 className="text-xl font-normal text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-normal"
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
                    <h2 className="text-4xl font-normal text-white mb-4">
                        Get SEO Tips Delivered to Your Inbox
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join 10,000+ marketers receiving the world's most advanced AI-SEO strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                        />
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-normal">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
