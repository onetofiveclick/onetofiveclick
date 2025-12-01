'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle,
    Globe,
    Share2,
    Award,
    TrendingUp,
    AlertTriangle,
    Link as LinkIcon,
    Users,
    Megaphone
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
    {
        title: 'Link Building',
        description: 'Acquiring high-quality backlinks from authoritative websites to boost your domain authority and rankings.',
        icon: LinkIcon
    },
    {
        title: 'Brand Mentions',
        description: 'Monitoring and converting unlinked brand mentions into valuable backlinks.',
        icon: Award
    },
    {
        title: 'Social Signals',
        description: 'Amplifying your content through social media to drive traffic and engagement.',
        icon: Share2
    },
    {
        title: 'Guest Posting',
        description: 'Publishing valuable content on industry-relevant sites to reach new audiences.',
        icon: TrendingUp
    },
    {
        title: 'Digital PR',
        description: 'Earning media coverage and high-authority links through strategic PR campaigns.',
        icon: Megaphone
    },
    {
        title: 'Influencer Outreach',
        description: 'Partnering with industry influencers to expand your reach and build authority.',
        icon: Users
    }
];

const testimonials = [
    {
        name: 'Robert Chen',
        company: 'SaaS Platform',
        quote: 'One to Five Click helped us earn 150+ high-quality backlinks in 6 months. Our domain authority jumped from 28 to 45.',
        rating: 5
    },
    {
        name: 'Emily Parker',
        company: 'E-commerce Brand',
        quote: 'Their digital PR campaign got us featured in Forbes and TechCrunch. The traffic spike was incredible.',
        rating: 5
    },
    {
        name: 'Daniel Kim',
        company: 'Marketing Agency',
        quote: 'The guest posting strategy they developed helped us establish thought leadership and generate quality leads.',
        rating: 5
    }
];

const faqs = [
    {
        question: 'What is Off-Page SEO?',
        answer: 'Off-Page SEO refers to actions taken outside of your website to impact your rankings. This primarily involves building backlinks, brand mentions, and social signals that demonstrate your site\'s authority and trustworthiness.'
    },
    {
        question: 'Are all backlinks good?',
        answer: 'No. Quality matters far more than quantity. A few links from high-authority, relevant sites are worth more than hundreds of low-quality links. Spammy backlinks can actually harm your rankings.'
    },
    {
        question: 'How do you build links safely?',
        answer: 'We use white-hat strategies including creating linkable assets, guest posting on relevant sites, broken link building, and digital PR. We never buy links or use black-hat tactics that could get you penalized.'
    },
    {
        question: 'What is domain authority?',
        answer: 'Domain Authority (DA) is a metric developed by Moz that predicts how well a website will rank. It\'s scored from 1-100, with higher scores indicating greater ranking potential. Quality backlinks are the primary way to increase DA.'
    },
    {
        question: 'How long does link building take?',
        answer: 'Link building is a long-term strategy. You might see initial results in 2-3 months, but significant authority building typically takes 6-12 months of consistent effort.'
    },
    {
        question: 'What is broken link building?',
        answer: 'Broken link building involves finding broken links on other websites, creating content to replace the dead page, and asking the site owner to link to your content instead. It\'s a win-win strategy.'
    },
    {
        question: 'Do social media signals affect SEO?',
        answer: 'While social signals aren\'t a direct ranking factor, they indirectly help by increasing content visibility, driving traffic, and creating opportunities for natural backlinks.'
    },
    {
        question: 'What is a toxic backlink?',
        answer: 'Toxic backlinks come from spammy, low-quality, or penalized websites. They can harm your rankings. We regularly audit your backlink profile and disavow toxic links when necessary.'
    },
    {
        question: 'How do you measure off-page SEO success?',
        answer: 'We track metrics like domain authority, number of referring domains, quality of backlinks, brand mentions, referral traffic, and overall ranking improvements.'
    },
    {
        question: 'Can you guarantee specific backlinks?',
        answer: 'We can\'t guarantee specific placements as that would involve paying for links (which violates Google guidelines). However, we have a proven track record of earning high-quality backlinks through legitimate outreach.'
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

export default function OffPageSEOPage() {
    return (
        <div className="pt-16 overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24 lg:py-32 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/90" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block bg-purple-500/20 border border-purple-400/30 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                Off-Page SEO Services
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Build Authority & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Dominate</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Earn high-quality backlinks, build brand authority, and establish your reputation as an industry leader.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/25 font-bold"
                                >
                                    Boost Domain Authority
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="#strategy"
                                    className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                                >
                                    See Our Strategy
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-20 animate-pulse" />
                            <img
                                src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80"
                                alt="Link Building Strategy"
                                className="relative rounded-2xl shadow-2xl w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-purple-600 border-y border-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Backlinks Built', value: '50k+' },
                            { label: 'Avg. DA Increase', value: '+17' },
                            { label: 'Media Placements', value: '2k+' },
                            { label: 'Success Rate', value: '94%' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-purple-100 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond Your Website</h2>
                        <p className="text-lg text-gray-600">Comprehensive strategies to build your reputation across the web</p>
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
                                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                                        <Icon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Authority Transformation</h2>
                        <p className="text-lg text-gray-600">See the impact of strategic link building</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Before</h3>
                                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">Low Authority</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Domain Authority: 15</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Few referring domains (12)</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">No brand mentions</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Limited online visibility</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Struggling to rank</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">After</h3>
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">High Authority</span>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Domain Authority: 42</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">150+ quality referring domains</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Regular brand mentions</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Industry authority status</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Page 1 rankings</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-white/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                Case Study
                            </div>
                            <h2 className="text-4xl font-bold mb-6">How We Helped TechCorp Earn 200+ Backlinks</h2>
                            <p className="text-purple-100 mb-8 leading-relaxed">
                                TechCorp had great products but zero online authority. We implemented a strategic link building campaign that earned them backlinks from Forbes, TechCrunch, and 200+ industry sites.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">200+</div>
                                    <div className="text-purple-100">Quality Backlinks</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">DA 52</div>
                                    <div className="text-purple-100">From DA 18</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">450%</div>
                                    <div className="text-purple-100">Traffic Increase</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">15</div>
                                    <div className="text-purple-100">Media Features</div>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all font-bold"
                            >
                                Get Similar Results
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-3xl" />
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                                alt="Link Building Results"
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
                        <p className="text-lg text-gray-600">Proven results from businesses like yours</p>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Off-Page SEO FAQs</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-600">
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-gray-900/90" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Authority?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Start earning the high-quality backlinks your website deserves.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-purple-900 px-10 py-5 rounded-lg hover:bg-purple-50 transition-all font-bold text-lg shadow-xl"
                    >
                        Start Link Building
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
