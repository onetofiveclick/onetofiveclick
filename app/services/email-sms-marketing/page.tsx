'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Mail,
    MessageSquare,
    Zap,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Target,
    Users,
    MousePointerClick,
    ShieldCheck
} from 'lucide-react';

const protocols = [
    {
        title: 'Database Reactivation',
        desc: 'Mining the gold in your current lead list. We convert "dormant" emails into instant revenue using high-frequency, low-friction sequences.',
        icon: TrendingUp,
        color: 'bg-indigo-600'
    },
    {
        title: 'SMS Blast Velocity',
        desc: '98% open rates that beat every other channel. We use SMS for flash sales, appointment reminders, and instant offer deployment.',
        icon: MessageSquare,
        color: 'bg-emerald-600'
    },
    {
        title: 'Newsletter Authority',
        desc: 'Turning subscribers into cult-like followers. Weekly deep-dives that build human-first trust markers for your brand.',
        icon: Mail,
        color: 'bg-brand-red'
    }
];

export default function EmailSMSPage() {
    return (
        <div className="pt-16 overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
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
                                <Zap className="h-4 w-4" />
                                <span>Direct-to-Human Infrastructure</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                                Retention <br />
                                <span className="text-brand-blue">Engines.</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                                Social media is borrowed land. <span className="text-gray-900 font-normal">Your list is your asset.</span> We build the automated systems that capture, nurture, and monetize every lead you've ever paid for.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
                            >
                                Initiate List Audit
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Direct-to-Human Wins */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 uppercase tracking-tight leading-tight">Zero Borrowed Luck.</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-[10px]">Owning the relationship is the ultimate 2026 competitive advantage.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {protocols.map(p => (
                            <div key={p.title} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-blue-200 transition-all">
                                <div className={`w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:rotate-12 transition-transform`}>
                                    <p.icon className="h-7 w-7 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-normal uppercase tracking-tight text-gray-900 mb-4 leading-tight">{p.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-normal">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Packages */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-4 uppercase tracking-tight leading-tight">Retention <span className="text-blue-600">Packages.</span></h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-[10px]">Engineered for LTV, not just clicks.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Base Node',
                                price: '999',
                                desc: 'Strategic reactivation for businesses with 1k - 5k dormant leads.',
                                features: ['Bi-Weekly Email Blast', '1 Monthly SMS Flash Sale', 'Basic List Cleaning', 'Monthly Revenue Report'],
                                highlight: false
                            },
                            {
                                name: 'Growth Protocol',
                                price: '2,499',
                                desc: 'Building a high-frequency brand asset for scaling businesses.',
                                features: ['Weekly Authority Emails', '2 SMS Blasts / Month', 'Automated Welcome Flow', 'Abandoned Cart Recovery', 'Bi-Weekly Strategy Sync'],
                                highlight: true
                            },
                            {
                                name: 'Enterprise Asset',
                                price: '4,999',
                                desc: 'Full retention infrastructure for 8-9 figure brands.',
                                features: ['Daily Content Interaction', 'Omni-Channel Syncing', 'VIP-Only Private Blasts', 'Custom Funnel Engineering', 'Dedicated Retention Lead'],
                                highlight: false
                            }
                        ].map((pkg) => (
                            <div key={pkg.name} className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${pkg.highlight ? 'bg-gray-900 text-white border-blue-600 shadow-xl scale-105 z-10' : 'bg-white border-gray-100 hover:border-blue-500'}`}>
                                {pkg.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest shadow-sm">
                                        Highest LTV
                                    </div>
                                )}
                                <h3 className="text-2xl font-normal uppercase mb-4 leading-tight">{pkg.name}</h3>
                                <div className="flex items-baseline mb-8">
                                    <span className="text-2xl font-normal">$</span>
                                    <span className="text-6xl font-normal">{pkg.price}</span>
                                    <span className="text-gray-500 text-xs ml-2 font-normal uppercase tracking-widest">/mo</span>
                                </div>

                                <p className={`text-sm mb-10 leading-relaxed font-normal ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{pkg.desc}</p>

                                <ul className="space-y-4 mb-12">
                                    {pkg.features.map(feat => (
                                        <li key={feat} className="flex items-start space-x-3 text-sm font-normal">
                                            <CheckCircle className={`h-5 w-5 flex-shrink-0 ${pkg.highlight ? 'text-blue-500' : 'text-blue-600'}`} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`block w-full text-center py-5 rounded-xl font-normal uppercase tracking-widest text-xs transition-all ${pkg.highlight ? 'bg-blue-600 text-white hover:brightness-110' : 'bg-gray-900 text-white hover:bg-blue-600'}`}
                                >
                                    Initiate Sync
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metric Section */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Avg ROI (Email)', value: '38x', icon: TrendingUp },
                            { label: 'SMS Open Rate', value: '98%', icon: MessageSquare },
                            { label: 'LTV Increase', value: '140%+', icon: Users },
                            { label: 'Asset Stability', value: '100%', icon: ShieldCheck }
                        ].map(stat => (
                            <div key={stat.label} className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:border-blue-500 transition-all group">
                                <stat.icon className="h-8 w-8 text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                                <div className="text-4xl font-normal mb-2 tracking-tight">{stat.value}</div>
                                <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-4xl md:text-6xl font-normal text-white mb-8 tracking-tight uppercase">Own Your Relationship.</h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-normal">
                        Don't let an algorithm change destroy your business. Build your retention moat today.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest shadow-sm"
                    >
                        Deploy Retention Protocol
                        <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
