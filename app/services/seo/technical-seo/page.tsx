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
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-24 lg:py-32 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <Settings className="h-4 w-4" />
                                <span>Technical SEO Services</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                The Engine Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Top Rankings</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Don't let invisible errors hold you back. We optimize your site's infrastructure for maximum speed, crawlability, and performance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 font-bold"
                                >
                                    Get Technical Audit
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="#process"
                                    className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
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
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-20 animate-pulse" />
                            <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-2xl">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="text-gray-400 text-sm font-mono">audit_results.json</div>
                                </div>
                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex justify-between items-center text-green-400">
                                        <span>✓ Core Web Vitals</span>
                                        <span>Passed</span>
                                    </div>
                                    <div className="flex justify-between items-center text-green-400">
                                        <span>✓ SSL Certificate</span>
                                        <span>Valid</span>
                                    </div>
                                    <div className="flex justify-between items-center text-green-400">
                                        <span>✓ Mobile Usability</span>
                                        <span>100/100</span>
                                    </div>
                                    <div className="flex justify-between items-center text-green-400">
                                        <span>✓ Crawl Errors</span>
                                        <span>0 Found</span>
                                    </div>
                                    <div className="h-px bg-gray-700 my-4" />
                                    <div className="flex justify-between items-center text-blue-400 font-bold">
                                        <span>Health Score</span>
                                        <span>98/100</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-blue-900 border-y border-blue-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Faster Load Times', value: '50%+' },
                            { label: 'Crawl Rate Increase', value: '2x' },
                            { label: 'Issues Fixed', value: '10k+' },
                            { label: 'Client Satisfaction', value: '100%' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-blue-200 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Fix Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Issues We Resolve</h2>
                        <p className="text-lg text-gray-600">Technical errors can silently kill your rankings. We find and fix them.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {issuesWeFix.map((issue, index) => {
                            const Icon = issue.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
                                >
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <Icon className="h-6 w-6 text-red-500" />
                                    </div>
                                    <span className="font-semibold text-gray-900">{issue.title}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Technical Optimization</h2>
                        <p className="text-lg text-gray-600">We handle the complex backend details so you don't have to.</p>
                    </div>

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
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Audit Process</h2>
                        <p className="text-lg text-gray-600">A systematic approach to technical perfection.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {auditProcess.map((step, index) => (
                            <div key={index} className="relative group">
                                {index < auditProcess.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 group-hover:bg-blue-100 transition-colors" />
                                )}
                                <div className="relative z-10 bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-lg">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400 mb-8 uppercase tracking-widest text-sm font-semibold">Powered By Industry-Leading Tools</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {techStack.map((tool, index) => (
                            <span key={index} className="text-xl md:text-2xl font-bold hover:text-blue-400 transition-colors cursor-default">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results, Real Impact</h2>
                        <p className="text-lg text-gray-600">See the difference technical optimization makes</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Before</h3>
                                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">Poor Performance</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Page load time: 8.5 seconds</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Mobile usability: 45/100</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">187 broken links</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">No SSL certificate</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Duplicate content issues</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">After</h3>
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">Optimized</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Page load time: 1.8 seconds</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Mobile usability: 98/100</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">All links fixed and redirected</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">SSL implemented site-wide</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Canonical tags properly configured</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Highlight */}
            <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                Case Study
                            </div>
                            <h2 className="text-4xl font-bold mb-6">How We Helped TechStore Increase Revenue by 230%</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                TechStore came to us with a slow, error-riddled website that was losing customers. After a comprehensive technical audit and implementation, we transformed their site into a high-performance machine.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <div className="text-4xl font-bold text-blue-400 mb-2">230%</div>
                                    <div className="text-gray-400">Revenue Increase</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-400 mb-2">78%</div>
                                    <div className="text-gray-400">Faster Load Time</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-400 mb-2">3x</div>
                                    <div className="text-gray-400">More Organic Traffic</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                                    <div className="text-gray-400">Mobile Score</div>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-bold"
                            >
                                Get Similar Results
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-20" />
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                                alt="Analytics Dashboard"
                                className="relative rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600">Don't just take our word for it</p>
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
                                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical SEO FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
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

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Is Your Website Technically Sound?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Don't let hidden errors cost you rankings. Get a comprehensive technical audit today.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-lg hover:bg-blue-50 transition-all font-bold text-lg shadow-xl"
                    >
                        Start Technical Audit
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
