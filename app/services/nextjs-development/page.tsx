'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Cpu,
    Globe,
    Zap,
    ShieldCheck,
    Layout,
    Rocket,
    BarChart3,
    Search,
    CheckCircle2,
    Users
} from 'lucide-react';

const stats = [
    { label: 'Next.js Sites Launched', value: '150+' },
    { label: 'Avg. LCP Improvement', value: '78%' },
    { label: 'Global Edge Coverage', value: '100%' },
    { label: 'Enterprise ROI Focus', value: 'High' }
];

const nextFeatures = [
    {
        title: 'Server-Side Rendering (SSR)',
        description: 'We leverage SSR to ensure your brand is indexed instantly. Real-time rendering for dynamic, high-authority content.',
        icon: Zap
    },
    {
        title: 'Static Site Generation (SSG)',
        description: 'Blistering fast load times using SSG. We build assets that pass every Core Web Vital with a 100/100 score.',
        icon: Rocket
    },
    {
        title: 'Advanced SEO Architecture',
        description: 'Our Next.js sites are native to NLP and Semantic SEO. We structure Metadata and JSON-LD for AI search dominance.',
        icon: Search
    }
];

export default function NextJsServicePage() {
    return (
        <div className="pt-16 bg-white overflow-hidden">
            {/* Premium Hero */}
            <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
                                <Cpu className="h-4 w-4" />
                                <span>Next.js Global Authority</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                                Enterprise <br />
                                <span className="text-brand-blue">Next.js</span> <br />
                                Performance.
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                                Our team leads a specialized division of Next.js architects. We don't just build websites—we deploy high-value digital revenue systems.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
                            >
                                Start Your Project
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Authority Stats Grid */}
            <section className="py-20 border-y border-gray-100 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="text-5xl font-normal text-gray-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-normal text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Semantic/NLP Value Proposition */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6 tracking-tight uppercase">
                            Semantic Architecture. <br />
                            <span className="text-blue-600">Total Dominance.</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-normal">
                            Our development process integrates Natural Language Processing (NLP) models. Your code won't just run; it will communicate authority to every AI search bot on the planet.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {nextFeatures.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:border-blue-200 transition-all border border-gray-100 group">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                                        <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-normal text-gray-900 mb-4 tracking-tight leading-tight">{f.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-normal">
                                        {f.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Unique Fact Section: The Performance Difference */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -inset-10 bg-brand-blue/5 blur-3xl rounded-full" />
                            <div className="relative bg-gray-900 p-10 rounded-3xl text-white shadow-sm overflow-hidden border border-white/10">
                                <h3 className="text-3xl font-normal mb-10 text-blue-400 uppercase tracking-tight">Comparison: Next.js vs Generic</h3>
                                <div className="space-y-8">
                                    {/* Fake Graph/Bars */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-normal uppercase tracking-widest text-gray-400">
                                            <span>Google Indexing Speed</span>
                                            <span className="text-blue-400">1 Click (Instant)</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                transition={{ duration: 1 }}
                                                className="h-full bg-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-gray-500 line-through opacity-50">
                                        <div className="flex justify-between text-xs font-normal uppercase tracking-widest">
                                            <span>Generic Platform Speed</span>
                                            <span>5-10 Days</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-700 w-1/4" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-normal uppercase tracking-widest text-gray-400">
                                            <span>User Conversion (Avg)</span>
                                            <span className="text-blue-400">+320%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '85%' }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="h-full bg-blue-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-[10px] leading-relaxed text-gray-400 uppercase tracking-widest">
                                    <span className="font-normal text-blue-400">Note:</span> These metrics are based on the proprietary Next.js Performance Framework optimized by our expert team for global ranking.
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 tracking-tight uppercase">
                                Designed for the <br />
                                <span className="text-blue-600">Global Expert.</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-normal">
                                We believe that every "Click" should represent value. Our '1 to 5 Click' philosophy means that your customers find what they need, faster than on any other platform.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="mt-1 bg-blue-600 p-1 rounded-full text-white">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-normal text-gray-900 uppercase tracking-widest text-xs">Custom API Middleware</h4>
                                        <p className="text-gray-600 text-sm font-normal">Secure, high-speed integrations for enterprise data.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="mt-1 bg-blue-600 p-1 rounded-full text-white">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-normal text-gray-900 uppercase tracking-widest text-xs">Edge Function Deployment</h4>
                                        <p className="text-gray-600 text-sm font-normal">Your site scales globally across Vercel and AWS nodes instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Table */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-normal text-gray-900 tracking-tight uppercase mb-4">Service Reliability Index</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-[10px]">Compare our Expert Next.js service with generic builders</p>
                    </div>

                    <div className="overflow-x-auto rounded-3xl shadow-sm border border-gray-100 bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="p-8 font-normal text-xs uppercase tracking-widest">Feature Domain</th>
                                    <th className="p-8 font-normal text-xs uppercase tracking-widest text-blue-400">One to Five Click (Expert)</th>
                                    <th className="p-8 font-normal text-xs uppercase tracking-widest text-gray-400">Standard Agency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-700">
                                <tr>
                                    <td className="p-8 font-normal text-xs uppercase tracking-widest">SEO Performance</td>
                                    <td className="p-8 text-blue-600 font-normal text-sm flex items-center space-x-2">
                                        <Globe className="h-5 w-5" />
                                        <span>NLP-Native Metadata Architecture</span>
                                    </td>
                                    <td className="p-8 text-gray-400 text-sm">Basic Meta Tags only</td>
                                </tr>
                                <tr>
                                    <td className="p-8 font-normal text-xs uppercase tracking-widest">Mobile Excellence</td>
                                    <td className="p-8 text-blue-600 font-normal text-sm flex items-center space-x-2">
                                        <Zap className="h-5 w-5" />
                                        <span>100/100 Core Web Vitals Guaranteed</span>
                                    </td>
                                    <td className="p-8 text-gray-400 text-sm">Theme-dependent (Varies)</td>
                                </tr>
                                <tr>
                                    <td className="p-8 font-normal text-xs uppercase tracking-widest">Architecture</td>
                                    <td className="p-8 text-blue-600 font-normal text-sm flex items-center space-x-2">
                                        <Cpu className="h-5 w-5" />
                                        <span>Next.js App Router & Server Components</span>
                                    </td>
                                    <td className="p-8 text-gray-400 text-sm">Legacy PHP or Template Builders</td>
                                </tr>
                                <tr>
                                    <td className="p-8 font-normal text-xs uppercase tracking-widest">Leadership</td>
                                    <td className="p-8 text-blue-600 font-normal text-sm flex items-center space-x-2">
                                        <Users className="h-5 w-5" />
                                        <span>One to Five Click Expert Team</span>
                                    </td>
                                    <td className="p-8 text-gray-400 text-sm">Outsourced Support Only</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                    <h2 className="text-5xl md:text-7xl font-normal mb-8 leading-tight tracking-tight uppercase">
                        Ready to Build a <br />
                        <span className="text-white underline decoration-blue-200">High-Authority</span> Asset?
                    </h2>
                    <p className="text-2xl text-blue-100 mb-12 font-normal max-w-2xl mx-auto">
                        Contact our team directly. We are ready to architect your enterprise Next.js solution.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all font-normal text-lg uppercase tracking-widest shadow-sm"
                    >
                        Start Strategy Session
                        <ArrowRight className="ml-3 h-7 w-7" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
