'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle,
    Zap,
    Database,
    Smartphone,
    Lock,
    AlertTriangle,
    Search,
    BarChart,
    Settings,
    RefreshCw,
    Layers
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
    {
        title: 'Core Web Vitals',
        description: 'We optimize LCP, FID, and CLS to ensure your site passes Google\'s strict performance standards.',
        icon: Zap
    },
    {
        title: 'Mobile Usability',
        description: 'Fixing viewport issues, touch elements, and responsive design flaws that hurt mobile rankings.',
        icon: Smartphone
    },
    {
        title: 'Crawlability & Indexing',
        description: 'Optimizing robots.txt, XML sitemaps, and site architecture to help Google find your pages.',
        icon: Database
    },
    {
        title: 'HTTPS & Security',
        description: 'Implementing SSL certificates and fixing mixed content errors to secure user data.',
        icon: Lock
    },
    {
        title: 'Schema Markup',
        description: 'Adding structured data to help search engines understand your content and display rich snippets.',
        icon: Layers
    },
    {
        title: 'JavaScript SEO',
        description: 'Ensuring your dynamic content is properly rendered and indexed by search bots.',
        icon: Settings
    }
];

const issuesWeFix = [
    { title: 'Slow Page Load Times', icon: Zap },
    { title: 'Broken Links (404s)', icon: AlertTriangle },
    { title: 'Duplicate Content', icon: RefreshCw },
    { title: 'Improper Redirects', icon: ArrowRight },
    { title: 'Missing Alt Tags', icon: Search },
    { title: 'Poor Mobile Experience', icon: Smartphone }
];

const techStack = [
    'Google Search Console',
    'Screaming Frog',
    'Ahrefs',
    'SEMrush',
    'PageSpeed Insights',
    'GTmetrix'
];

const auditProcess = [
    {
        step: '01',
        title: 'Crawl & Scan',
        description: 'We use industry-leading tools to crawl every URL on your site, identifying over 100 potential technical issues.'
    },
    {
        step: '02',
        title: 'Analyze & Prioritize',
        description: 'We categorize issues by severity and potential impact, creating a prioritized roadmap for fixes.'
    },
    {
        step: '03',
        title: 'Fix & Optimize',
        description: 'Our developers implement the necessary code changes, server configurations, and content updates.'
    },
    {
        step: '04',
        title: 'Verify & Monitor',
        description: 'We rescan your site to confirm fixes and set up ongoing monitoring to catch new issues early.'
    }
];

const testimonials = [
    {
        name: 'Sarah Johnson',
        company: 'E-commerce Store Owner',
        quote: 'After One to Five Click fixed our technical issues, our organic traffic increased by 145% in just 4 months. The team was professional and thorough.',
        rating: 5
    },
    {
        name: 'Michael Chen',
        company: 'SaaS Startup Founder',
        quote: 'They identified and resolved over 200 technical errors we didn\'t even know existed. Our Core Web Vitals went from failing to passing within weeks.',
        rating: 5
    },
    {
        name: 'Amanda Rodriguez',
        company: 'Digital Marketing Director',
        quote: 'The technical audit was incredibly detailed. They didn\'t just find problems—they fixed them and explained everything in terms we could understand.',
        rating: 5
    }
];

const faqs = [
    {
        question: 'Why is technical SEO important?',
        answer: 'Technical SEO ensures that search engines can crawl, index, and understand your website. Without a solid technical foundation, your content may never be found, no matter how good it is.'
    },
    {
        question: 'How does site speed affect rankings?',
        answer: 'Google uses page speed as a direct ranking factor. Faster sites provide a better user experience, leading to lower bounce rates and higher search visibility.'
    },
    {
        question: 'What is a crawl budget?',
        answer: 'Crawl budget is the number of pages Googlebot crawls on your site within a given timeframe. Optimizing technical SEO ensures this budget is spent on your most important pages rather than low-value or duplicate content.'
    },
    {
        question: 'Do you fix the issues or just find them?',
        answer: 'We do both. Unlike some agencies that just hand you a report, our team of developers and SEO experts will implement the fixes for you, ensuring everything is done correctly.'
    },
    {
        question: 'How long does a technical audit take?',
        answer: 'A comprehensive technical audit typically takes 1-2 weeks depending on the size and complexity of your website. Implementation of fixes varies based on the findings.'
    },
    {
        question: 'What are Core Web Vitals?',
        answer: 'Core Web Vitals are a set of metrics Google uses to measure user experience: LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift). These are critical ranking factors.'
    },
    {
        question: 'How do you handle JavaScript-heavy websites?',
        answer: 'We ensure your JavaScript content is properly rendered for search engines using techniques like server-side rendering (SSR), dynamic rendering, or static site generation (SSG).'
    },
    {
        question: 'What is schema markup and why does it matter?',
        answer: 'Schema markup is structured data that helps search engines understand your content better. It can lead to rich snippets in search results, improving click-through rates.'
    },
    {
        question: 'Can technical SEO help with mobile rankings?',
        answer: 'Absolutely. Google uses mobile-first indexing, so technical optimizations for mobile (speed, usability, responsive design) directly impact your rankings.'
    },
    {
        question: 'What happens if I ignore technical SEO?',
        answer: 'Ignoring technical SEO can lead to poor crawlability, slow load times, and indexing issues—all of which hurt your rankings and user experience, costing you traffic and revenue.'
    },
    {
        question: 'Do you provide ongoing technical monitoring?',
        answer: 'Yes, we offer ongoing monitoring packages to catch new technical issues before they impact your rankings. This includes regular audits and proactive fixes.'
    },
    {
        question: 'How much does technical SEO cost?',
        answer: 'Pricing varies based on site size and complexity. We offer packages starting from basic audits to comprehensive ongoing optimization. Contact us for a custom quote.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function TechnicalSEOPage() {
    return (
        <div className="pt-16 overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6">
                                Technical SEO Services
                            </div>
                            <h1 className="text-5xl md:text-7xl font-normal text-gray-900 mb-6 leading-tight tracking-tight">
                                The Engine Behind <span className="text-blue-600">Top Rankings</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-normal">
                                Don't let invisible errors hold you back. We optimize your site's infrastructure for maximum speed, crawlability, and performance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:brightness-110 transition-all shadow-sm font-normal uppercase tracking-widest text-xs"
                                >
                                    Get Technical Audit
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="#process"
                                    className="inline-flex items-center justify-center bg-gray-50 text-gray-700 border border-gray-100 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-normal uppercase tracking-widest text-xs"
                                >
                                    See Our Process
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute -inset-4 bg-blue-100 rounded-2xl blur-3xl opacity-20 animate-pulse" />
                            <div className="relative bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-2xl">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-blue-400" />
                                    </div>
                                    <div className="text-gray-400 text-[10px] font-normal uppercase tracking-widest">audit_results.json</div>
                                </div>
                                <div className="space-y-4 font-normal text-sm">
                                    <div className="flex justify-between items-center text-gray-900 border-b border-gray-50 pb-2">
                                        <span className="text-gray-500 text-xs uppercase tracking-tight">Core Web Vitals</span>
                                        <span className="text-blue-600 font-normal">Passed</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-900 border-b border-gray-50 pb-2">
                                        <span className="text-gray-500 text-xs uppercase tracking-tight">SSL Certificate</span>
                                        <span className="text-blue-600 font-normal">Valid</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-900 border-b border-gray-50 pb-2">
                                        <span className="text-gray-500 text-xs uppercase tracking-tight">Mobile Usability</span>
                                        <span className="text-blue-600 font-normal">100/100</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-900">
                                        <span className="text-gray-500 text-xs uppercase tracking-tight">Crawl Errors</span>
                                        <span className="text-blue-600 font-normal">0 Found</span>
                                    </div>
                                    <div className="h-px bg-gray-50 my-4" />
                                    <div className="flex justify-between items-center text-gray-900 pt-2">
                                        <span className="text-gray-900 font-normal uppercase tracking-widest text-xs">Health Score</span>
                                        <span className="text-3xl font-normal tracking-tight text-blue-600">98%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Faster Load Times', value: '50%+' },
                            { label: 'Crawl Rate Increase', value: '2x' },
                            { label: 'Issues Fixed', value: '10k+' },
                            { label: 'Client Satisfaction', value: '100%' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl font-normal text-gray-900 mb-1 uppercase tracking-tight">{stat.value}</div>
                                <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Fix Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-normal text-gray-900 mb-4 tracking-tight">Common Issues We Resolve</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">Technical errors can silently kill your rankings. We find and fix them.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {issuesWeFix.map((issue, index) => {
                            const Icon = issue.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="flex items-center space-x-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all shadow-sm"
                                >
                                    <div className="bg-blue-50 p-3 rounded-xl">
                                        <Icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <span className="font-normal text-gray-900 tracking-tight uppercase text-xs">{issue.title}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-normal text-gray-900 mb-4 tracking-tight">Comprehensive Technical Optimization</h2>
                    <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">We handle the complex backend details so you don't have to.</p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 group"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-normal text-gray-900 mb-3 tracking-tight uppercase text-lg">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-normal text-sm">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-normal text-gray-900 mb-4 tracking-tight">Our Audit Process</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">A systematic approach to technical perfection.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {auditProcess.map((step, index) => (
                            <div key={index} className="relative group">
                                {index < auditProcess.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-50 group-hover:bg-blue-50 transition-colors duration-500" />
                                )}
                                <div className="relative z-10 bg-white p-6 rounded-[2rem] border border-gray-50 hover:border-blue-100 hover:shadow-xl transition-all text-center">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-normal mx-auto mb-6 shadow-sm">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-normal text-gray-900 mb-3 tracking-tight uppercase text-sm">{step.title}</h3>
                                    <p className="text-gray-500 text-xs font-normal leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500 mb-8 uppercase tracking-widest text-[10px] font-normal">Powered By Industry-Leading Tools</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        {techStack.map((tool, index) => (
                            <span key={index} className="text-xl md:text-2xl font-normal text-gray-900 tracking-tight uppercase hover:text-blue-600 transition-colors cursor-default">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert Comparison Table */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-normal tracking-tight uppercase mb-4 text-gray-900">The Technical Authority Index</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-[10px]"> Our Proprietary Framework vs. Industry Standard</p>
                    </div>

                    <div className="overflow-x-auto rounded-[2.5rem] shadow-sm border border-gray-100 bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white text-gray-900 border-b border-gray-50">
                                    <th className="p-8 font-normal uppercase tracking-widest text-[10px] text-gray-500">Optimization Vector</th>
                                    <th className="p-8 font-normal uppercase tracking-widest text-[10px] text-blue-600">One to Five Click (Elite)</th>
                                    <th className="p-8 font-normal uppercase tracking-widest text-[10px] text-gray-400">Standard Agency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-gray-600">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-8 font-normal text-gray-900 uppercase tracking-tight text-sm">Semantic Schema Core</td>
                                    <td className="p-8 text-blue-600 font-normal uppercase tracking-tight text-sm">NLP-Native & AI-Search Optimized</td>
                                    <td className="p-8 text-gray-400 font-normal text-sm">Basic Generic JSON-LD</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-8 font-normal text-gray-900 uppercase tracking-tight text-sm">Server Response Time</td>
                                    <td className="p-8 text-blue-600 font-normal uppercase tracking-tight text-sm flex items-center space-x-2">
                                        <Zap className="h-4 w-4" />
                                        <span>40ms - 100ms (Edge Cache)</span>
                                    </td>
                                    <td className="p-8 text-gray-400 font-normal text-sm">300ms - 800ms (Standard Host)</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-8 font-normal text-gray-900 uppercase tracking-tight text-sm">Core Web Vitals Pass</td>
                                    <td className="p-8 text-blue-600 font-normal uppercase tracking-tight text-sm">100/100 Guaranteed (LCP/FID/CLS)</td>
                                    <td className="p-8 text-gray-400 font-normal text-sm">Partial Pass (Varies)</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-8 font-normal text-gray-900 uppercase tracking-tight text-sm">Bot Crawl Efficiency</td>
                                    <td className="p-8 text-blue-600 font-normal uppercase tracking-tight text-sm">Smart-Indexing (0% Crawl Waste)</td>
                                    <td className="p-8 text-gray-400 font-normal text-sm">Unoptimized Pathing</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* NLP & Semantic Factor Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -inset-10 bg-brand-blue/5 blur-3xl rounded-full" />
                            <div className="relative bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-gray-900 p-8 text-white flex justify-between items-center">
                                    <span className="font-normal text-xl uppercase tracking-widest text-xs">Semantic Authority Score</span>
                                    <RefreshCw className="h-5 w-5 text-blue-400" />
                                </div>
                                <div className="p-8 space-y-6">
                                    <div className="flex justify-between items-center text-[10px] font-normal uppercase tracking-widest text-gray-500">
                                        <span>NLP Keyword Density (Optimized)</span>
                                        <span className="text-blue-600">98% Efficient</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '98%' }}
                                            className="h-full bg-blue-600"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-normal uppercase tracking-widest text-gray-500">
                                        <span>Entity Relationship Mapping</span>
                                        <span className="text-blue-600">High Authority</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '92%' }}
                                            className="h-full bg-blue-600"
                                        />
                                    </div>
                                    <div className="mt-8 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50 text-[10px] text-blue-800 leading-relaxed font-normal">
                                        <span className="font-normal underline">Fact:</span> AI Search engines (Gemini, ChatGPT) prioritize sites with structured entity mapping over legacy keyword-optimized sites.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 tracking-tight uppercase leading-none">
                                Beyond Simple <br />
                                <span className="text-blue-600">Optimization.</span>
                            </h2>
                            <p className="text-sm text-gray-600 mb-10 leading-relaxed font-normal">
                                Technical SEO in 2026 is about <span className="text-gray-900 font-normal">Semantic Integrity</span>. Our expert team ensures your site architecture is built to be understood by AI-driven search models instantly.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 p-4 hover:bg-gray-50/50 rounded-2xl transition-colors">
                                    <div className="mt-1 bg-blue-50 p-2 rounded-xl text-blue-600">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-normal text-gray-900 uppercase tracking-widest">Proprietary Audit Engine</h4>
                                        <p className="text-gray-500 text-xs font-normal">We use custom scripts that scan deeper than common market tools.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 hover:bg-gray-50/50 rounded-2xl transition-colors">
                                    <div className="mt-1 bg-blue-50 p-2 rounded-xl text-blue-600">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-normal text-gray-900 uppercase tracking-widest">Global CDN Strategy</h4>
                                        <p className="text-gray-500 text-xs font-normal">Automatic routing to the fastest edge node for every user, globally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Highlight */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6">
                                Case Study
                            </div>
                            <h2 className="text-4xl font-normal mb-6 tracking-tight">How We Helped TechStore Increase Revenue by 230%</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed font-normal">
                                TechStore came to us with a slow, error-riddled website that was losing customers. After a comprehensive technical audit and implementation, we transformed their site into a high-performance machine.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <div className="text-4xl font-normal text-white mb-2 uppercase tracking-tight">230%</div>
                                    <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">Revenue Increase</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-normal text-white mb-2 uppercase tracking-tight">78%</div>
                                    <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">Faster Load Time</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-normal text-white mb-2 uppercase tracking-tight">3x</div>
                                    <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">More Organic Traffic</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-normal text-white mb-2 uppercase tracking-tight">95%</div>
                                    <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">Mobile Score</div>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:brightness-110 transition-all font-normal uppercase tracking-widest text-[10px]"
                            >
                                Get Similar Results
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-3xl" />
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                                alt="Analytics Dashboard"
                                className="relative rounded-[2rem] shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-normal text-gray-900 mb-4 tracking-tight">What Our Clients Say</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">Real results from real businesses</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed font-normal text-sm">"{testimonial.quote}"</p>
                                <div>
                                    <div className="font-normal text-gray-900 uppercase tracking-tight text-lg leading-none">{testimonial.name}</div>
                                    <div className="text-[10px] font-normal text-gray-500 uppercase tracking-widest">{testimonial.company}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-normal text-gray-900 mb-12 text-center tracking-tight">Technical SEO FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-normal text-gray-900 hover:text-blue-600 uppercase tracking-tight">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-4xl md:text-6xl font-normal text-white mb-6 tracking-tight uppercase">Is Your Website Technically Sound?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-normal">
                        Don't let hidden errors cost you rankings. Get a comprehensive technical audit today.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest shadow-sm text-sm"
                    >
                        Start Technical Audit
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
