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
    Users,
    TrendingUp,
    Map,
    Building
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

const testimonials = [
    {
        name: 'Jennifer Martinez',
        company: 'Local Restaurant Chain',
        quote: 'One to Five Click helped us dominate local search across all 8 locations. We now get 300+ calls per month from Google.',
        rating: 5
    },
    {
        name: 'Dr. Kevin Brown',
        company: 'Dental Practice',
        quote: 'We went from invisible to #1 in the Local Pack for "dentist near me". New patient bookings increased by 240%.',
        rating: 5
    },
    {
        name: 'Sarah Johnson',
        company: 'Law Firm',
        quote: 'Their review management strategy helped us go from 3.2 to 4.8 stars. Our consultation requests tripled.',
        rating: 5
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
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 py-24 lg:py-32 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/90" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <MapPin className="h-4 w-4" />
                                <span>Local SEO Services</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Dominate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Local Market</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Be the first choice for customers in your area. We help you rank #1 in Google Maps and local search results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/25 font-bold"
                                >
                                    Get Found Locally
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="#results"
                                    className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
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
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-3xl opacity-20 animate-pulse" />
                            <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-2xl">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="h-6 w-6 text-green-400" />
                                        <span className="text-white font-semibold">Local Pack Rankings</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                                        <span className="text-gray-300">Position #1</span>
                                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-gray-700/30 rounded-lg">
                                        <span className="text-gray-400">4.9 Star Rating</span>
                                        <span className="text-green-400 font-bold">250+ Reviews</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-gray-700/30 rounded-lg">
                                        <span className="text-gray-400">Monthly Calls</span>
                                        <span className="text-green-400 font-bold">+340%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-green-600 border-y border-green-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Local Pack Rankings', value: '1k+' },
                            { label: 'Avg. Call Increase', value: '280%' },
                            { label: 'GMB Optimized', value: '5k+' },
                            { label: 'Client Retention', value: '96%' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-green-100 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Local SEO Solutions</h2>
                        <p className="text-lg text-gray-600">Everything you need to dominate local search</p>
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
                                    className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                                        <Icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Local Visibility Transformation</h2>
                        <p className="text-lg text-gray-600">See the dramatic impact of local SEO</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Before</h3>
                                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">Invisible</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Not in Local Pack</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Only 12 reviews (3.2 stars)</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Inconsistent citations</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">5-10 calls per month</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Losing to competitors</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">After</h3>
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">Dominant</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">#1 in Local Pack</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">180+ reviews (4.8 stars)</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">100% citation accuracy</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">120+ calls per month</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Market leader status</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section id="results" className="py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-white/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                Case Study
                            </div>
                            <h2 className="text-4xl font-bold mb-6">How We Helped Elite Dental Get 300+ Calls/Month</h2>
                            <p className="text-green-100 mb-8 leading-relaxed">
                                Elite Dental was invisible in local search. We optimized their GMB, built citations, and implemented a review strategy that made them the #1 dentist in their city.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">#1</div>
                                    <div className="text-green-100">Local Pack Position</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">340%</div>
                                    <div className="text-green-100">Call Increase</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">4.9★</div>
                                    <div className="text-green-100">Star Rating</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">250+</div>
                                    <div className="text-green-100">Reviews</div>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all font-bold"
                            >
                                Get Similar Results
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-3xl" />
                            <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                                alt="Local Business Growth"
                                className="relative rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600">Real results from local businesses</p>
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
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Local SEO FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-green-600">
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
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-gray-900/90" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Local Search?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Attract more customers from your neighborhood today.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-green-900 px-10 py-5 rounded-lg hover:bg-green-50 transition-all font-bold text-lg shadow-xl"
                    >
                        Start Local Growth
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
