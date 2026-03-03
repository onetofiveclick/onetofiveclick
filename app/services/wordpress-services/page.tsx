'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Layout,
    Globe,
    Zap,
    ShieldCheck,
    Settings,
    Rocket,
    BarChart3,
    Layers,
    CheckCircle2,
    Users,
    Search
} from 'lucide-react';

const stats = [
    { label: 'WP Instances Optimized', value: '450+' },
    { label: 'Core Web Vitals Pass Rate', value: '100%' },
    { label: 'Security Breaches Blocked', value: '0' },
    { label: 'Agency Growth Engine', value: 'Prime' }
];

const wpFeatures = [
    {
        title: 'Custom Gutenberg Architecture',
        description: 'We move beyond standard themes to build high-performance, custom-coded Gutenberg blocks. Maximum speed, zero bloat.',
        icon: Layout
    },
    {
        title: 'Enterprise Speed Optimization',
        description: 'Our WordPress sites consistently hit sub-1s load times. We optimize the database, server, and asset delivery layers.',
        icon: Zap
    },
    {
        title: 'Strategic Security Hardening',
        description: 'Enterprise brands cannot afford downtime. We implement top-tier encryption and firewall protocols.',
        icon: ShieldCheck
    }
];

export default function WordPressServicePage() {
    return (
        <div className="pt-16 bg-white overflow-hidden">
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
                                <Settings className="h-4 w-4" />
                                <span>WordPress Authority Agency</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                                Enterprise <br />
                                <span className="text-brand-blue">WordPress</span> <br />
                                Ecosystems.
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                                Our team transforms standard CMS setups into high-authority revenue engines. We don't use "themes"—we build custom digital experiences.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
                            >
                                Scale Your WordPress
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 border-y border-gray-100 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="text-5xl font-normal text-gray-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight uppercase">
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

            {/* WordPress Expert Features */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            Total WordPress <br />
                            <span className="text-blue-600">Mastery.</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-normal">
                            We specialize in headless WordPress architectures and performance-first development that outperforms 99% of web agencies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {wpFeatures.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:border-blue-200 transition-all border border-gray-100 group">
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

            {/* Performance Comparison Table */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 tracking-tight">
                                Why High-Authority <br />
                                <span className="text-blue-600">Brands Trust Us</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-blue-600 shadow-sm group hover:bg-gray-100 transition-colors">
                                    <h4 className="text-xl font-normal text-gray-900 mb-1 uppercase tracking-widest text-xs">Semantic SEO Integration</h4>
                                    <p className="text-gray-600 text-sm font-normal">Your site is pre-optimized for NLP and AI-driven search engines from the backend up.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-blue-400 shadow-sm group hover:bg-gray-100 transition-colors">
                                    <h4 className="text-xl font-normal text-gray-900 mb-1 uppercase tracking-widest text-xs">Zero Plugin Bloat</h4>
                                    <p className="text-gray-600 text-sm font-normal">We replace 40+ generic plugins with 5 custom-coded, high-performance features.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-10 bg-blue-600/5 blur-3xl rounded-full" />
                            <div className="relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-gray-900 p-8 text-white flex justify-between items-center">
                                    <span className="font-normal text-lg uppercase tracking-widest">WordPress Audit Index</span>
                                    <ShieldCheck className="h-6 w-6 text-blue-400" />
                                </div>
                                <div className="p-8 space-y-6">
                                    <div className="flex justify-between items-center">
                                        <span className="font-normal text-gray-900 uppercase tracking-widest text-xs">Backend Response Time</span>
                                        <span className="text-blue-600 font-normal">45ms</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '95%' }}
                                            className="h-full bg-blue-600 rounded-full"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-normal text-gray-900 uppercase tracking-widest text-xs">Core Web Vitals Score</span>
                                        <span className="text-blue-400 font-normal">100/100</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            className="h-full bg-blue-400 rounded-full"
                                        />
                                    </div>
                                    <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 text-[10px] text-blue-800 uppercase tracking-widest leading-relaxed">
                                        Architecture optimized by our expert team for peak global visibility.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Comparison Table */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-normal text-gray-900 tracking-tight">WordPress Performance Standard</h2>
                    </div>
                    <div className="overflow-x-auto rounded-3xl shadow-sm bg-white border border-gray-100">
                        <table className="w-full border-collapse">
                            <thead className="bg-gray-900 text-white">
                                <tr>
                                    <th className="p-6 text-left font-normal uppercase tracking-widest text-xs">Feature Context</th>
                                    <th className="p-6 text-left font-normal uppercase tracking-widest text-xs text-blue-400">1 to 5 Click (Our Team)</th>
                                    <th className="p-6 text-left font-normal uppercase tracking-widest text-xs text-gray-400">Regular WP Developer</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 font-normal">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 font-normal text-gray-900 text-xs uppercase tracking-widest">Development DNA</td>
                                    <td className="p-6 text-blue-600 font-normal text-sm">Custom Coding (No Predesigned Themes)</td>
                                    <td className="p-6 text-gray-400 text-sm">Elementor/Divi Page Builders</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 font-normal text-gray-900 text-xs uppercase tracking-widest">Ranking Technology</td>
                                    <td className="p-6 text-blue-600 font-normal text-sm">Semantic NLP & Automated Schema</td>
                                    <td className="p-6 text-gray-400 text-sm">Basic Yoast / RankMath setup</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 font-normal text-gray-900 text-xs uppercase tracking-widest">Security Architecture</td>
                                    <td className="p-6 text-blue-600 font-normal text-sm">Hardened Kernel & Custom Firewall</td>
                                    <td className="p-6 text-gray-400 text-sm">Basic Wordfence Plugin</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                    <h2 className="text-5xl md:text-7xl font-normal mb-8 leading-tight tracking-tight">
                        Deploy Your <br />
                        <span className="text-white underline decoration-blue-200">WordPress</span> Powerhouse.
                    </h2>
                    <p className="text-2xl text-blue-100 mb-12 font-normal max-w-2xl mx-auto">
                        Contact our team to begin your transition into high-performance digital asset ownership.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all font-normal text-lg uppercase tracking-widest shadow-sm"
                    >
                        Claim Your Market Share
                        <ArrowRight className="ml-3 h-7 w-7" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
