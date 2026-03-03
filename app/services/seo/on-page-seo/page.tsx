'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle,
    FileText,
    Search,
    Layout,
    Target,
    AlertTriangle,
    TrendingUp,
    Users,
    Edit
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
    {
        title: 'Keyword Optimization',
        description: 'Strategic keyword placement in titles, headers, and content to maximize relevance and rankings.',
        icon: Search
    },
    {
        title: 'Content Quality',
        description: 'Creating comprehensive, engaging content that satisfies user intent and builds authority.',
        icon: FileText
    },
    {
        title: 'Meta Tags & Descriptions',
        description: 'Crafting compelling meta titles and descriptions that improve click-through rates.',
        icon: Target
    },
    {
        title: 'Internal Linking',
        description: 'Building a strategic internal link structure to distribute authority and improve navigation.',
        icon: Layout
    },
    {
        title: 'Header Tag Optimization',
        description: 'Properly structuring H1-H6 tags to create clear content hierarchy for users and search engines.',
        icon: Edit
    },
    {
        title: 'User Experience Signals',
        description: 'Optimizing for engagement metrics like time on page, bounce rate, and click-through rate.',
        icon: Users
    }
];

const testimonials = [
    {
        name: 'David Martinez',
        company: 'B2B SaaS Company',
        quote: 'Our blog traffic increased by 320% after One to Five Click optimized our content. The keyword research and content strategy were game-changing.',
        rating: 5
    },
    {
        name: 'Lisa Thompson',
        company: 'E-learning Platform',
        quote: 'They transformed our thin content into comprehensive resources. Our average time on page doubled and rankings skyrocketed.',
        rating: 5
    },
    {
        name: 'James Wilson',
        company: 'Healthcare Provider',
        quote: 'The meta description optimization alone increased our CTR by 45%. Their attention to detail is unmatched.',
        rating: 5
    }
];

const faqs = [
    {
        question: 'What is On-Page SEO?',
        answer: 'On-Page SEO refers to optimizing individual web pages to rank higher and earn more relevant traffic. This includes content, HTML source code, and user experience elements.'
    },
    {
        question: 'How often should I update my content?',
        answer: 'Regular updates signal freshness to Google. We recommend auditing and updating your core content at least once every 6-12 months, and publishing new content consistently.'
    },
    {
        question: 'Does word count matter?',
        answer: 'While there\'s no magic number, comprehensive content (typically 1,500+ words for competitive topics) tends to rank better because it covers topics more thoroughly and satisfies user intent.'
    },
    {
        question: 'What are LSI keywords?',
        answer: 'LSI (Latent Semantic Indexing) keywords are terms related to your main keyword. They help search engines understand context and improve content relevance without keyword stuffing.'
    },
    {
        question: 'How important are meta descriptions?',
        answer: 'While meta descriptions aren\'t a direct ranking factor, they significantly impact click-through rates. A compelling meta description can increase traffic by 20-40%.'
    },
    {
        question: 'Should I optimize for voice search?',
        answer: 'Yes. Voice search queries are typically longer and more conversational. Optimizing for natural language and question-based queries helps capture this growing traffic source.'
    },
    {
        question: 'What is keyword cannibalization?',
        answer: 'Keyword cannibalization occurs when multiple pages target the same keyword, causing them to compete against each other. We identify and fix these issues through content consolidation or differentiation.'
    },
    {
        question: 'How do you optimize images for SEO?',
        answer: 'We compress images for speed, add descriptive alt text, use descriptive filenames, and implement lazy loading to improve both SEO and user experience.'
    },
    {
        question: 'What is E-E-A-T?',
        answer: 'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses these quality signals to evaluate content, especially for YMYL (Your Money Your Life) topics.'
    },
    {
        question: 'Can you help with content creation?',
        answer: 'Absolutely. We offer full content creation services, from keyword research and topic ideation to writing, editing, and optimization.'
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

export default function OnPageSEOPage() {
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
                                On-Page SEO Services
                            </div>
                            <h1 className="text-5xl md:text-7xl font-normal text-gray-900 mb-6 leading-tight tracking-tight">
                                Content That <span className="text-blue-600">Ranks & Converts</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-normal">
                                Transform your pages into ranking powerhouses. We optimize every element—from keywords to user experience—to dominate search results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:brightness-110 transition-all shadow-sm font-normal uppercase tracking-widest text-xs"
                                >
                                    Optimize My Content
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
                            <img
                                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80"
                                alt="Content Optimization"
                                className="relative rounded-[2.5rem] shadow-2xl w-full border border-gray-100"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Higher CTR', value: '45%+' },
                            { label: 'Content Optimized', value: '5k+' },
                            { label: 'Avg. Ranking Boost', value: '12 Pos' },
                            { label: 'Client Retention', value: '98%' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl font-normal text-gray-900 mb-1 uppercase tracking-tight">{stat.value}</div>
                                <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-normal text-gray-900 mb-4 tracking-tight">Comprehensive On-Page Optimization</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">We optimize over 20 on-page factors for maximum visibility</p>
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
                                    className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-normal text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm font-normal">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Before/After Comparison */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-normal text-gray-900 mb-4 tracking-tight">Content Transformation</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">See how we turn underperforming pages into ranking machines</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50/50 border border-red-100 rounded-[2rem] p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-normal text-gray-900 tracking-tight">Before</h3>
                                <span className="text-red-600 px-4 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest">Underoptimized</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">Thin content (300 words)</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">No keyword targeting</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">Generic meta descriptions</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">No internal links</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">Poor header structure</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-blue-50/50 border border-blue-100 rounded-[2rem] p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-normal text-gray-900 tracking-tight">After</h3>
                                <span className="text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest">Optimized</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">Comprehensive content (2,000+ words)</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">Strategic keyword placement</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">Compelling, click-worthy meta tags</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">Strategic internal linking</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600 text-sm font-normal">Proper H1-H6 hierarchy</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6">
                                Case Study
                            </div>
                            <h2 className="text-4xl font-normal mb-6 tracking-tight">How We Helped HealthCo Dominate Their Niche</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed font-normal">
                                HealthCo had great services but invisible content. We rewrote their top 20 pages with comprehensive, keyword-optimized content that now ranks on page 1.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <div className="text-4xl font-normal text-white mb-2 uppercase tracking-tight">320%</div>
                                    <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">Organic Traffic</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-normal text-white mb-2 uppercase tracking-tight">18</div>
                                    <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">Page 1 Rankings</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-normal text-white mb-2 uppercase tracking-tight">45%</div>
                                    <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">Higher CTR</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-normal text-white mb-2 uppercase tracking-tight">6 Min</div>
                                    <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">Avg. Time on Page</div>
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
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                                alt="Content Performance"
                                className="relative rounded-[2rem] shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
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
                                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
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
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-normal text-gray-900 mb-12 text-center tracking-tight">On-Page SEO FAQs</h2>
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
                    <h2 className="text-4xl md:text-6xl font-normal text-white mb-6 tracking-tight uppercase">Ready to Rank Higher?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-normal">
                        Get a free content audit and discover your untapped potential.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest shadow-sm text-sm"
                    >
                        Start Free Audit
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
