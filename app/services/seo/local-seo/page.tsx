'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle,
    MapPin,
    Star,
    Navigation,
    Store,
    AlertTriangle,
    Phone,
    Zap,
    Search,
    TrendingUp,
    Map,
    Building,
    FileSearch,
    BarChart3,
    Network,
    Target,
    Activity,
    Cpu,
    ShieldCheck
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
    {
        title: 'Google Business Profile',
        description: 'Complete optimization of your GMB listing to dominate the Local Pack and Google Maps.',
        icon: MapPin
    },
    {
        title: 'Review Management',
        description: 'Strategic review generation and reputation management to build trust and credibility.',
        icon: Star
    },
    {
        title: 'Local Citations',
        description: 'Building consistent NAP citations across 100+ directories to boost local rankings.',
        icon: Navigation
    },
    {
        title: 'Hyper-Local Content',
        description: 'Creating location-specific content that resonates with your local community.',
        icon: Store
    },
    {
        title: 'Local Link Building',
        description: 'Earning backlinks from local businesses, chambers, and community organizations.',
        icon: Building
    },
    {
        title: 'Multi-Location SEO',
        description: 'Managing and optimizing SEO for businesses with multiple locations.',
        icon: Map
    }
];

const localPerformanceMetrics = [
    {
        label: 'GMB Interaction Velocity',
        value: '98.4%',
        desc: 'Real-time user engagement sync.'
    },
    {
        label: 'Sentiment Engine Score',
        value: 'A+',
        desc: 'AI-audited positive reputation.'
    },
    {
        label: 'Local Citation Purity',
        value: '100%',
        desc: 'Zero-conflict NAP architecture.'
    }
];

const faqs = [
    {
        question: 'What is Local SEO?',
        answer: 'Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. It focuses on appearing in the Local Pack, Google Maps, and local organic results.'
    },
    {
        question: 'Why is NAP consistency important?',
        answer: 'NAP (Name, Address, Phone) consistency helps Google verify your business information. Inconsistent data across directories confuses search engines and can hurt your local rankings significantly.'
    },
    {
        question: 'How do reviews affect local rankings?',
        answer: 'Reviews are a major ranking factor for local search. Higher review volume, better ratings, and recent reviews all signal trust and authority to Google, directly impacting your Local Pack visibility.'
    },
    {
        question: 'What is the Google Local Pack?',
        answer: 'The Local Pack is the map-based section that appears at the top of local search results, showing 3 businesses. Ranking here can drive massive traffic and calls to your business.'
    },
    {
        question: 'How long does local SEO take?',
        answer: 'You can see initial improvements in 4-6 weeks, but significant results typically take 3-6 months. Local SEO is faster than traditional SEO because of lower competition.'
    },
    {
        question: 'Do I need a physical location?',
        answer: 'While a physical location helps, service area businesses (SABs) can still rank well with proper optimization. We specialize in both storefront and service area business optimization.'
    },
    {
        question: 'What are local citations?',
        answer: 'Local citations are online mentions of your business name, address, and phone number. They appear in directories like Yelp, Yellow Pages, and industry-specific sites, helping validate your business.'
    },
    {
        question: 'Can you help with multiple locations?',
        answer: 'Absolutely. We specialize in multi-location SEO, creating unique strategies for each location while maintaining brand consistency across all properties.'
    },
    {
        question: 'How do you handle negative reviews?',
        answer: 'We help you respond professionally to negative reviews, implement strategies to generate more positive reviews, and in some cases, work to get fake reviews removed.'
    },
    {
        question: 'What\'s the ROI of local SEO?',
        answer: 'Local SEO typically delivers the highest ROI of any marketing channel. Businesses often see 5-10x return through increased calls, foot traffic, and bookings within 6 months.'
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

export default function LocalSEOPage() {
    return (
        <div className="pt-16 overflow-hidden">
            {/* 2026 GEO Lead-Answer (AI Local Snapshots) */}
            <div className="bg-blue-50/30 border-b border-blue-100 py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-6">
                        <div className="w-1.5 h-16 bg-blue-600 rounded-full"></div>
                        <div>
                            <p className="text-[10px] font-normal uppercase tracking-widest text-blue-600 mb-2">Status: LOCAL_AUTHORITY_GEO_SYNC</p>
                            <h2 className="text-sm text-gray-500 max-w-5xl leading-relaxed font-normal">
                                One to Five Click secures your #1 destination status in 2026 local search through <span className="text-gray-900 font-normal">Hyper-Local Neighborhood Clustering</span> and <span className="text-gray-900 font-normal">Sentiment-Engine AI Training</span>. Our unique architecture ensures Gemini and Perplexity recognize your business as the <span className="text-gray-900 font-normal">Dominant Geographic Entity</span>.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative bg-white py-24 lg:py-32">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6">
                                <MapPin className="h-4 w-4" />
                                <span>Local SEO Services</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-normal text-gray-900 mb-6 leading-tight tracking-tight">
                                Dominate Your <br />
                                <span className="text-blue-600 underline underline-offset-8 decoration-blue-200">Territory</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl font-normal">
                                Traditional business listings are obsolete. We engineer <span className="text-gray-900 font-normal underline">Contextual Geographic Equity</span> that guides AI to recommend you as the local authority.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-xl hover:brightness-110 transition-all font-normal uppercase tracking-widest text-sm shadow-sm group"
                                >
                                    Get Found Locally
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link
                                    href="#results"
                                    className="inline-flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-10 py-5 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest text-sm"
                                >
                                    See Results
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative bg-gray-900 rounded-[3rem] p-12 text-white shadow-sm border border-white/5 overflow-hidden">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="h-6 w-6 text-blue-400" />
                                        <span className="text-white font-normal uppercase tracking-tight">Local Pack Rankings</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/5">
                                        <span className="text-gray-400 font-normal">Position #1</span>
                                        <Star className="h-5 w-5 text-blue-400 fill-current" />
                                    </div>
                                    <div className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/5">
                                        <span className="text-gray-400 font-normal">4.9 Star Rating</span>
                                        <span className="text-blue-400 font-normal uppercase tracking-tight">250+ Reviews</span>
                                    </div>
                                    <div className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/5">
                                        <span className="text-gray-400 font-normal">Monthly Calls</span>
                                        <span className="text-blue-400 font-normal uppercase tracking-tight">+340%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-gray-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { label: 'Local Pack Rankings', value: '1k+' },
                            { label: 'Avg. Call Increase', value: '280%' },
                            { label: 'GMB Optimized', value: '5k+' },
                            { label: 'Client Retention', value: '96%' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl font-normal mb-1 uppercase tracking-tight">{stat.value}</div>
                                <div className="text-gray-500 text-[10px] font-normal uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QF Map: Local Edition */}
            <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-[10px] font-normal text-blue-600 uppercase tracking-widest mb-4 border border-blue-100">The Expansion Framework</div>
                        <h2 className="text-5xl md:text-6xl font-normal text-gray-900 uppercase tracking-tight leading-tight">
                            Local Query Fan Map <br />
                            <span className="text-blue-600">(QF Map)</span>
                        </h2>
                        <p className="mt-4 text-gray-500 font-normal uppercase tracking-widest text-[10px]">Proprietary Geographic Intent Dominance</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-4">
                            {[
                                { stage: "Local Awareness", q: "How to find [Service] in [Neighborhood]?", focus: "Intercepting broad local discovery intents." },
                                { stage: "Contextual Consideration", q: "Best [Service] for [Specific Needs]?", focus: "Building Answer Hubs for niche local problems." },
                                { stage: "Comparison Sync", q: "[Your Brand] vs [Competitor] Reviews?", focus: "Engineering sentiment data across 50+ local platforms." },
                                { stage: "Geographic Decision", q: "Nearest [Your Brand] with [Special Feature]?", focus: "Direct map placement with feature highlight sync." }
                            ].map((step, i) => (
                                <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 flex items-start space-x-6 hover:border-blue-500 transition-all group shadow-sm">
                                    <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center shrink-0 font-normal group-hover:bg-blue-600 transition-colors">0{i + 1}</div>
                                    <div>
                                        <h3 className="text-[10px] font-normal uppercase tracking-widest text-gray-900 mb-1 leading-none">{step.stage}</h3>
                                        <p className="text-sm font-normal text-blue-600 mb-2 underline underline-offset-4 decoration-blue-200">{step.q}</p>
                                        <p className="text-xs text-gray-500 font-normal">{step.focus}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative h-full shadow-sm">
                            <div className="absolute top-10 right-10 opacity-20"><Network className="h-16 w-16 text-blue-500" /></div>
                            <h3 className="text-2xl font-normal uppercase tracking-tight mb-8">The Hallucination Buffer</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-normal">
                                AI models hallucinate local business details (hours, prices, specific services) when they rely on outdated crawlers. We bypass this by injecting a consistent <span className="text-white font-normal underline">Human-Verified Data Stream</span> into the Answer Engine core.
                            </p>
                            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                <p className="text-[10px] font-normal text-blue-400 uppercase mb-2 tracking-widest">Strategy: Local Answer Hubs</p>
                                <p className="text-lg font-normal tracking-tight uppercase text-white">Engineering Geometric Authority</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features list updated for elite feel */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="group">
                                    <div className="w-16 h-px bg-blue-600 mb-8 group-hover:w-full transition-all duration-700" />
                                    <Icon className="h-8 w-8 text-gray-900 mb-6 group-hover:text-blue-600 transition-colors" />
                                    <h3 className="text-2xl font-normal tracking-tight mb-4 leading-none text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-normal">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Local Dominance Comparison */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight uppercase mb-4">The Local Authority Index</h2>
                        <p className="text-blue-400 font-normal uppercase tracking-widest text-[10px]">Our Hyper-Local Expansion Matrix</p>
                    </div>

                    <div className="overflow-x-auto rounded-[2rem] shadow-2xl border border-white/10 bg-gray-800/30 backdrop-blur-3xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 text-white border-b border-white/10 uppercase tracking-tight">
                                    <th className="p-10 font-normal text-xl">Expansion Factor</th>
                                    <th className="p-10 font-normal text-xl text-blue-400">One to Five Click (Market Leader)</th>
                                    <th className="p-10 font-normal text-xl text-gray-500">Traditional Agency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="p-10 font-normal text-white">Local Pack Velocity</td>
                                    <td className="p-10 text-blue-400 font-normal text-lg uppercase tracking-tight">Top 3 Placement in 45-60 Days</td>
                                    <td className="p-10 text-gray-500 font-normal">Unpredictable (6-12 Months)</td>
                                </tr>
                                <tr>
                                    <td className="p-10 font-normal text-white">Review Integrity Model</td>
                                    <td className="p-10 text-blue-400 font-normal text-lg uppercase tracking-tight">AI-Driven Sentiment Optimization</td>
                                    <td className="p-10 text-gray-500 font-normal">Manual/Static Requests</td>
                                </tr>
                                <tr>
                                    <td className="p-10 font-normal text-white">Citation Depth</td>
                                    <td className="p-10 text-blue-400 font-normal text-lg uppercase tracking-tight">350+ Direct-Sync High DA Citations</td>
                                    <td className="p-10 text-gray-500 font-normal">Generic Aggregator Sync</td>
                                </tr>
                                <tr>
                                    <td className="p-10 font-normal text-white">Geographic Reach</td>
                                    <td className="p-10 text-blue-400 font-normal text-lg uppercase tracking-tight">Hyper-Local Neighborhood Targets</td>
                                    <td className="p-10 text-gray-500 font-normal">Broad City-Level Only</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Review Velocity & Ranking Graph */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50" />
                            <div className="relative bg-gray-900 rounded-[3rem] p-12 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                                <div className="flex justify-between items-center mb-12">
                                    <div>
                                        <p className="text-blue-400 font-normal uppercase tracking-widest text-[10px] mb-2">Algorithm Match</p>
                                        <h3 className="text-3xl font-normal uppercase tracking-tight">Review Velocity</h3>
                                    </div>
                                    <TrendingUp className="h-10 w-10 text-blue-400" />
                                </div>
                                <div className="space-y-8">
                                    <div className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <div>
                                                <span className="text-xs font-normal inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                                                    Organic Sentiment
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-normal text-blue-400">
                                                    99.2%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-800">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '99.2%' }}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                            ></motion.div>
                                        </div>
                                    </div>
                                    <div className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <div>
                                                <span className="text-xs font-normal inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                                    GMB Interaction Rate
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-normal inline-block text-blue-400">
                                                    88.5%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-800">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '88.5%' }}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10 text-sm font-normal text-gray-400">
                                    "One to Five Click's local methodology is the only reason we survived the recent Google Maps update."
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 uppercase tracking-tight leading-tight">
                                Own Your <br />
                                <span className="text-blue-600">Neighborhood.</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-normal">
                                We don't just "list" your business. We build <span className="text-gray-900 font-normal underline">Local Authority Clusters</span> that ensure Google recognizes you as the undisputed leader in your geographic zone.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors group">
                                    <div className="text-4xl font-normal text-gray-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">#1</div>
                                    <p className="text-[10px] font-normal text-gray-400 uppercase tracking-widest leading-tight">Average Map Position In 60 Days</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors group">
                                    <div className="text-4xl font-normal text-gray-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">400%</div>
                                    <p className="text-[10px] font-normal text-gray-400 uppercase tracking-widest leading-tight">Increase in 'Near Me' Visibility</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Analytics instead of Case Study */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500 opacity-5 blur-[120px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-normal text-white uppercase tracking-tight">Algorithm Mastery.</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {localPerformanceMetrics.map((metric, i) => (
                            <div key={i} className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl relative group hover:border-blue-500 transition-colors">
                                <div className="absolute top-8 right-8"><Cpu className="h-6 w-6 text-blue-500 opacity-20" /></div>
                                <p className="text-[10px] font-normal uppercase text-gray-500 tracking-widest mb-2 tracking-widest">Global Benchmarks</p>
                                <div className="text-5xl font-normal text-white uppercase tracking-tight mb-4 leading-none">{metric.value}</div>
                                <h3 className="text-lg font-normal text-gray-300 uppercase mb-2 leading-none tracking-tight">{metric.label}</h3>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-normal">{metric.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Logos instead of testimonials */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-[10px] font-normal text-gray-500 uppercase tracking-[0.3em] mb-8">Verified Authority Partners</div>
                    <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all font-normal">
                        <div className="flex items-center space-x-2"><Cpu className="h-8 w-8" /> <span className="uppercase tracking-widest text-[10px]">CLAUDE_VERIFIED</span></div>
                        <div className="flex items-center space-x-2"><Activity className="h-8 w-8" /> <span className="uppercase tracking-widest text-[10px]">GPT_SIGNAL_LOCKED</span></div>
                        <div className="flex items-center space-x-2"><ShieldCheck className="h-8 w-8" /> <span className="uppercase tracking-widest text-[10px]">GEMINI_SYNCED</span></div>
                        <div className="flex items-center space-x-2"><Network className="h-8 w-8" /> <span className="uppercase tracking-widest text-[10px]">PERPLEXITY_CITED</span></div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-12 text-center tracking-tight uppercase">Local SEO FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-normal text-gray-900 hover:text-blue-600 uppercase tracking-tight">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed font-normal">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-4xl md:text-6xl font-normal text-white mb-6 uppercase tracking-tight">Ready to Dominate Local Search?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-normal">
                        Attract more customers from your neighborhood today.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest text-sm shadow-sm"
                    >
                        Start Local Growth
                        <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>
                </div>
            </section>

            {/* EEAT 2.0: Technical Verification Log */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-12 shadow-2xl relative">
                        <div className="absolute top-8 right-8 text-blue-400 opacity-30">
                            <Zap className="h-12 w-12" />
                        </div>

                        <h2 className="text-3xl font-normal uppercase tracking-tight mb-8">Verification Log: Local Authority Protocol</h2>

                        <div className="space-y-8">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-sm text-gray-400 mb-4 font-mono">
                                    [STATUS: HUMAN_AUDITED_2.0] <br />
                                    [SYSTEM: LOCAL_SENTIMENT_ENGINE] <br />
                                    [TIMESTAMP: MARCH_2026]
                                </p>
                                <p className="text-lg text-gray-200 leading-relaxed mb-6 font-normal">
                                    "Our 2026 local strategies bypass generic listing services. We inject direct human oversight to verify every sentiment-signal and geographic entity-match, ensuring your business is the undisputed local champion in the eyes of AI search models."
                                </p>

                                <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 pt-6 border-t border-white/10">
                                    <div>
                                        <p className="text-[10px] font-normal uppercase tracking-widest text-gray-500 mb-2">Local Lead</p>
                                        <div className="font-normal text-xl text-blue-400 uppercase tracking-tight">One to Five Click</div>
                                        <div className="w-24 h-px bg-blue-400/50 mt-1"></div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-normal uppercase tracking-widest text-gray-500 mb-2">Operations Lead</p>
                                        <div className="font-normal text-xl text-blue-300 uppercase tracking-tight">One to Five Click</div>
                                        <div className="w-24 h-px bg-blue-300/50 mt-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
