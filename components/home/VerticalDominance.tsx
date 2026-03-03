'use client';

import { motion } from 'framer-motion';
import {
    Construction,
    Layers,
    ArrowRight,
    Target,
    BarChart3,
    CheckCircle,
    UserCircle2,
    Briefcase
} from 'lucide-react';
import Link from 'next/link';

const verticals = [
    {
        title: 'Physical Growth Ecosystems',
        subtitle: 'The "Boring" ROI Vertical',
        desc: 'Productized growth for local service leaders ($1M-$10M REV) including HVAC, Plumbing, Law Firms, and Dental. We provide high-ticket results with personalized, human delivery.',
        metric: '$1.5k-2.5k',
        metricLabel: 'Monthly Minimum',
        icon: Construction,
        color: 'from-emerald-500 to-teal-600',
        features: [
            'Target: HVAC & Plumbing',
            'Target: Personal Injury Law',
            'Target: High-Ticket Dental',
            'Target: Masonry & Construction'
        ],
        href: '/services/ppc'
    },
    {
        title: 'Digital Influence Architectures',
        subtitle: 'The "Shadow Operator" Vertical',
        desc: 'Built for micro-creators (20k-100k) sitting on unmonetized attention. We build the backend systems, communities, and revenue protocols.',
        metric: '70/30',
        metricLabel: 'Partnership Split',
        icon: UserCircle2,
        color: 'from-orange-500 to-rose-600',
        features: [
            '14-Day Velocity Launch',
            'Whop-Powered Community Hubs',
            'Digital Product Architecture',
            'Automated Revenue Splitting'
        ],
        href: '/services/creator-strategy'
    }
];

export default function VerticalDominance() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-[10px] font-normal text-blue-600 mb-6 uppercase tracking-widest"
                    >
                        Sector-Specific Mastery
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6 leading-tight">
                        Universal Models. <br />
                        <span className="text-brand-blue">Vertical Precision.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
                        We don't offer generic services. We deploy vertically-optimized "Blueprints" that solve specific, painful problems for two elite classes of owners.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {verticals.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-[3.5rem] p-10 lg:p-14 border border-gray-100 shadow-2xl relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${v.color} opacity-5 blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <v.icon className="h-5 w-5 text-gray-900" />
                                            <span className="text-[10px] font-normal text-gray-400 uppercase tracking-widest">{v.subtitle}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">{v.title}</h3>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-3xl text-center border border-gray-100">
                                        <div className="text-2xl font-normal text-gray-900 leading-none">{v.metric}</div>
                                        <div className="text-[8px] font-normal text-gray-400 uppercase tracking-widest mt-1">{v.metricLabel}</div>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-normal">
                                    {v.desc}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                    {v.features.map(f => (
                                        <div key={f} className="flex items-center space-x-3 text-[10px] font-normal text-gray-900 uppercase tracking-widest">
                                            <CheckCircle className="h-4 w-4 text-brand-blue flex-shrink-0" />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={v.href}
                                    className="inline-flex items-center justify-center w-full bg-brand-blue text-white px-10 py-5 rounded-xl hover:brightness-110 transition-all font-normal text-sm group"
                                >
                                    Access the Blueprint
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The "Why Vertical" Logic */}
                <div className="mt-20 p-12 bg-blue-50/50 rounded-[3rem] text-gray-900 overflow-hidden relative border border-blue-100">
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                    <div className="grid lg:grid-cols-3 gap-12 items-center relative z-10 text-center lg:text-left">
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl md:text-3xl font-normal mb-4 leading-tight text-gray-900">
                                "The Riches are in the <span className="text-brand-blue">Boring</span> Niches."
                            </h3>
                            <p className="text-gray-500 font-normal">
                                Whether we are optimizing a Masonry restoration team in Toronto or a high-ticket creator on Instagram, the protocol is the same: Identify the pain-point, engineer the solution, and automate the revenue.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="p-8 border border-blue-200/50 bg-white/80 backdrop-blur-3xl rounded-3xl text-center px-12 shadow-sm">
                                <Target className="h-10 w-10 text-brand-blue mx-auto mb-4" />
                                <p className="text-[10px] font-normal text-gray-400 mb-1 uppercase tracking-widest">Standardized Success</p>
                                <p className="text-2xl font-normal text-gray-900">100% REPLICABLE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
