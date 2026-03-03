'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Cpu,
    Zap,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Target,
    Search,
    Network,
    Database,
    BrainCircuit,
    Brain,
    Scale,
    Clock,
    DollarSign,
    AlertCircle,
    ZapOff,
    Users
} from 'lucide-react';

const geoProtocol = [
    {
        title: 'Query Fan-Out Mapping',
        desc: 'AI engines do not rank a single keyword. They expand queries into 6-8 sub-questions. We engineer pages that comprehensively cover all sub-intents.',
        icon: Network,
        color: 'bg-blue-600'
    },
    {
        title: "Algorithmic Recipes",
        desc: "Every LLM (Claude, ChatGPT, Gemini) has a unique retrieval recipe. We engineer content to satisfy Claude's multi-angle logic and Perplexity's location-based personalization.",
        icon: Brain,
        color: "from-brand-blue to-purple-600"
    },
    {
        title: "Vector-Sync Topology",
        desc: "Moving beyond indexing. We align your content's mathematical 'shape' (Embeddings) with high-intent agentic queries, ensuring a 99% retrieval match.",
        icon: Target,
        color: "from-brand-blue to-emerald-600"
    },
    {
        title: 'Autonomous Chunking',
        desc: 'LLMs read and retrieve data in isolated paragraphs (chunks). We write dense, factual, standalone blocks that match exactly how AI systems store information.',
        icon: Database,
        color: 'bg-blue-600'
    },
    {
        title: 'Consistency & Consensus',
        desc: 'Passing the LLM Retrieval Filters by locking down narrative consistency on managed assets and generating consensus on user-driven platforms (Reddit, Trustpilot).',
        icon: ShieldCheck,
        color: 'bg-indigo-600'
    },
    {
        title: 'Contextual Inject',
        desc: 'Providing hyper-specific, intent-driven answers rather than generic marketing fluff, maximizing the mathematical probability of high-intent citations.',
        icon: BrainCircuit,
        color: 'bg-blue-600'
    }
];

const decisionMatrix = [
    {
        model: "AI Automation (AAA)",
        valueForm: "Saving Time/Money",
        difficulty: "Hard",
        time: "High",
        scalability: "Moderate",
        income: "High ($10k/mo)",
        stress: "High (Mission Critical)",
        icon: Zap,
        color: "text-amber-500"
    },
    {
        model: "AI Content Agency",
        valueForm: "Mass Reach & Virality",
        difficulty: "Moderate",
        time: "Moderate",
        scalability: "Moderate-High",
        income: "Moderate ($5k/mo)",
        stress: "Moderate",
        icon: TrendingUp,
        color: "text-emerald-500"
    },
    {
        model: "AI Shadow Operating",
        valueForm: "Access to Hungry Crowds",
        difficulty: "Low (Shadow Mode)",
        time: "Low (AI Automated)",
        scalability: "Ultra-High (Portfolio)",
        income: "$13,500+/mo (Avg)",
        stress: "Zero (Partner Model)",
        icon: Scale,
        color: "text-brand-blue"
    }
];

export default function GEOPage() {
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
                                <Cpu className="h-4 w-4" />
                                <span>SMMA 2.0: AI Search Protocol</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                                Agentic <br />
                                <span className="text-brand-blue">Search.</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                                Traditional SEO is a liability. Your brand needs **Generative Engine Optimization** (GEO) to dominate the narrative in ChatGPT, Claude, and Perplexity.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg"
                            >
                                Deploy GEO Protocol
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Calculated Decision Matrix Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-brand-blue mb-4 uppercase tracking-tight">Calculated Decision Matrix</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Don't guess. Choose the AI Revenue Model that fits your risk profile and delivery capacity.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-[2.5rem] border border-gray-200 bg-white shadow-xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="p-8 text-[10px] uppercase tracking-[0.2em] font-bold">Model Path</th>
                                    <th className="p-8 text-[10px] uppercase tracking-[0.2em] font-bold">Primary Value</th>
                                    <th className="p-8 text-[10px] uppercase tracking-[0.2em] font-bold">Skill Level</th>
                                    <th className="p-8 text-[10px] uppercase tracking-[0.2em] font-bold text-center">Scalability</th>
                                    <th className="p-8 text-[10px] uppercase tracking-[0.2em] font-bold text-right">Income Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                                {decisionMatrix.map((item, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors group">
                                        <td className="p-8">
                                            <div className="flex items-center space-x-4">
                                                <div className={`p-3 rounded-2xl bg-white shadow-sm border border-gray-100 ${item.color}`}>
                                                    <item.icon className="h-6 w-6" />
                                                </div>
                                                <span className="font-bold text-gray-900 uppercase tracking-tight">{item.model}</span>
                                            </div>
                                        </td>
                                        <td className="p-8">
                                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                                                {item.valueForm}
                                            </span>
                                        </td>
                                        <td className="p-8">
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <Brain className="h-4 w-4" />
                                                <span className="font-normal">{item.difficulty}</span>
                                            </div>
                                        </td>
                                        <td className="p-8 text-center">
                                            <span className={`text-xs font-bold uppercase tracking-widest ${item.scalability.includes('Ultra') ? 'text-emerald-600' : 'text-gray-400'}`}>
                                                {item.scalability}
                                            </span>
                                        </td>
                                        <td className="p-8 text-right">
                                            <div className="flex flex-col items-end">
                                                <span className="text-lg font-bold text-gray-900 tracking-tight">{item.income}</span>
                                                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Stress: {item.stress}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* The Hungry Audience Section (Session 6) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 text-brand-blue font-bold uppercase tracking-widest text-[10px] mb-6">
                                <Users className="h-4 w-4" />
                                <span>The Competitive Edge</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tight leading-tight">
                                A Hungry Crowd <br />
                                <span className="text-blue-600">Trumps Everything.</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-normal">
                                Why build an audience for 4 years when you can partner with someone who already has one? We identify micro-creators with 20k-50k "starving" followers and deploy AI-driven monetization layers in the shadows.
                                <br /><br />
                                <strong>The "Chef vs DJ" Model:</strong> They create the content (The Food), while we run the operations and monetization (The Sound System).
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-6 bg-gray-50 rounded-3xl">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">30,000</div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Micro-Followers</div>
                                </div>
                                <div className="p-6 bg-blue-600 rounded-3xl">
                                    <div className="text-3xl font-bold text-white mb-2">$13,500</div>
                                    <div className="text-[10px] uppercase tracking-widest text-blue-100 font-bold">Mo. Operator Cut</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-all" />
                                <div className="p-12 h-full flex flex-col justify-center">
                                    <div className="space-y-6">
                                        {[
                                            "Micro-Creator with 'Starving' Crowd",
                                            "Knowledge Extraction via AI",
                                            "Automated 70/30 Rev-Split (Whop)",
                                            "Zero Payroll / Zero Retainers"
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-center space-x-4">
                                                <div className="h-2 w-2 bg-blue-500 rounded-full" />
                                                <span className="text-white font-normal uppercase tracking-widest text-[11px]">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {geoProtocol.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-10 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 transition-all shadow-sm group"
                            >
                                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-8 bg-blue-50 text-blue-600 group-hover:bg-brand-blue group-hover:text-white transition-all`}>
                                    <item.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-normal text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-brand-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-tight leading-tight">
                        STOP OPTIMIZING FOR YESTERDAY. <br />
                        START DOMINATING THE AI NARRATIVE.
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-brand-blue px-12 py-6 rounded-full hover:bg-gray-100 transition-all font-normal uppercase tracking-widest text-sm"
                    >
                        Schedule Strategy Call
                    </Link>
                </div>
            </section>
        </div>
    );
}
