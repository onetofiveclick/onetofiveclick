'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Target, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const packages = [
    {
        name: 'AI Growth Starter',
        badge: 'Foundation',
        description: 'Perfect for local businesses looking to automate their first human touchpoints.',
        icon: Zap,
        features: [
            'AI Chatbot for 24/7 Support',
            'Social Content Automation',
            'Basic AI Search Optimization',
            'Lead Capture Workflows',
        ],
        color: 'border-blue-100 bg-blue-50/10',
        iconColor: 'text-blue-600',
        btnClass: 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50',
    },
    {
        name: 'AI Sales Booster',
        badge: 'Most Popular',
        description: 'Scale your acquisition with autonomous lead handling and ad optimization.',
        icon: Target,
        features: [
            'Agentic Lead Scoring & Recovery',
            'Autonomous Follow-up Sequences',
            'AI Performance Ad Optimization',
            'Real-time Conversion Intelligence',
            'Smart CRM Data Sync',
        ],
        color: 'border-brand-blue/30 bg-brand-blue/5 shadow-xl shadow-brand-blue/5',
        iconColor: 'text-brand-blue',
        btnClass: 'bg-brand-blue text-white hover:brightness-110 shadow-lg shadow-brand-blue/20',
        popular: true,
    },
    {
        name: 'AI Domination System',
        badge: 'Enterprise',
        description: 'A complete autonomous workforce replacing manual marketing operations.',
        icon: Rocket,
        features: [
            'Full-Funnel Autonomous Architecture',
            'Custom RAG & CRM Integration',
            'Predictive Revenue Analytics',
            'Executive Performance Dashboard',
            'Priority Architect Support',
            'Custom Voice AI Deployment',
        ],
        color: 'border-purple-100 bg-purple-50/10',
        iconColor: 'text-purple-600',
        btnClass: 'bg-gray-900 text-white hover:bg-black shadow-lg',
    },
];

export default function RevenuePackages() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-brand-blue/5 text-brand-blue px-4 py-2 rounded-full text-[10px] font-normal mb-6 border border-brand-blue/10 uppercase tracking-widest"
                    >
                        Strategic Revenue Bundles
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6">
                        Revenue-Focused <span className="text-brand-blue">Packages.</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-normal">
                        Move beyond random tools. Deploy a strategic growth system designed to solve specific revenue bottlenecks.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500 hover:-translate-y-2 ${pkg.color} ${pkg.popular ? 'lg:scale-105 z-20' : 'z-10'}`}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className={`p-4 rounded-2xl bg-white shadow-sm border border-gray-100`}>
                                    <pkg.icon className={`h-8 w-8 ${pkg.iconColor}`} />
                                </div>
                                {pkg.popular && (
                                    <span className="bg-brand-blue text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-normal">
                                        High Demand
                                    </span>
                                )}
                                {!pkg.popular && (
                                    <span className="text-gray-400 text-[10px] uppercase tracking-widest font-normal">
                                        {pkg.badge}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-3xl font-normal text-gray-900 mb-4">{pkg.name}</h3>
                            <p className="text-gray-500 mb-10 font-normal leading-relaxed text-sm">
                                {pkg.description}
                            </p>

                            <div className="space-y-4 mb-12 flex-grow">
                                {pkg.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center space-x-3 group/item">
                                        <div className="h-5 w-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-blue/20 transition-colors">
                                            <Check className="h-3 w-3 text-brand-blue" />
                                        </div>
                                        <span className="text-gray-600 font-normal text-sm group-hover/item:text-gray-900 transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className={`w-full py-5 rounded-2xl flex items-center justify-center font-normal uppercase tracking-widest text-xs transition-all ${pkg.btnClass}`}
                            >
                                Acquire System
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
