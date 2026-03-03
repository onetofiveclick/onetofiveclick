'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Users,
    Zap,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Globe,
    Cpu,
    DollarSign,
    Layout,
    MessageCircle,
    Share2,
    Rocket,
    CheckCircle,
    Search
} from 'lucide-react';

const shadowStats = [
    { label: 'Follower Range', value: '20k - 100k', sub: 'The Micro-Creator Sweet Spot' },
    { label: 'Monetization Uplift', value: '300%+', sub: 'Average Revenue Spike' },
    { label: 'Infrastructure Complexity', value: 'Zero', sub: 'We handle the stack entirely' },
    { label: 'Revenue Model', value: 'Rev-Share', sub: 'Performance-Based Harmony' }
];

const launchPhases = [
    {
        title: 'Monetization Gap Audit',
        desc: 'We map your audience\'s pain points against hidden monetization opportunities within your content stream.',
        icon: Search
    },
    {
        title: 'Infrastructure Deployment',
        desc: 'Setting up your private community, course hub, and frictionless payments via our Whop partner stack.',
        icon: Layout
    },
    {
        title: '14-Day Velocity Launch',
        desc: 'A high-impact Instagram Story and community sequence that converts "Lurkers" into "Legacy Members".',
        icon: Rocket
    }
];

export default function CreatorStrategyPage() {
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
                                <span>SMA 2026: Shadow Operating</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                                The Shadow <br />
                                <span className="text-brand-blue">Operator.</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                                Micro-creators (20k-100k) are sitting on a gold mine without a map. We are the <span className="text-gray-900 font-normal">Architects</span> who build the back-end systems, monetization loops, and community hubs while you focus on content.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
                            >
                                Get Your Creator Audit
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The ROI vs Convenience Logic */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-8 uppercase tracking-tight leading-none">ROI Over <br /> Convenience.</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-normal">
                                Most agencies sell "Convenience" (editing, posting, management). We sell <span className="text-blue-600 font-normal">ROI</span>. We don't just save you time; we build the engine that converts your followers into revenue-generating assets.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Digital Product Architecture',
                                    'Whop-Powered Community Hubs',
                                    'High-Ticket Mentorship Loops',
                                    'Automated Revenue Splitting'
                                ].map((item) => (
                                    <li key={item} className="flex items-center space-x-3 text-gray-900 font-normal uppercase tracking-widest text-[10px]">
                                        <CheckCircle className="h-4 w-4 text-blue-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 shadow-inner">
                            <h3 className="text-2xl font-normal text-gray-900 mb-6 uppercase tracking-tight">The 14-Day Velocity Sequence</h3>
                            <div className="space-y-6">
                                {[
                                    { day: '01-05', action: 'The Warm-Up: Agitating the existing hidden demand.' },
                                    { day: '06-10', action: 'The Pre-Launch: Building intimate Story-based trust.' },
                                    { day: '11-14', action: 'Open Cart: The Velocity spike via FOMO & Urgency.' }
                                ].map((step) => (
                                    <div key={step.day} className="flex items-start space-x-4 border-l-4 border-blue-600 pl-6 py-2">
                                        <div>
                                            <div className="text-blue-600 font-normal text-[10px] uppercase mb-1 tracking-widest">Day {step.day}</div>
                                            <p className="text-sm font-normal text-gray-900">{step.action}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Shadow Operating? */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 uppercase tracking-tight">Zero Upfront. Total Alignment.</h2>
                        <p className="text-gray-500 font-normal uppercase tracking-widest text-[10px]">A pure performance-based brotherhood between creator and architect</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {shadowStats.map(stat => (
                            <div key={stat.label} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:border-blue-200 transition-all text-center group">
                                <div className="text-4xl font-normal text-gray-900 mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                                <div className="text-[10px] font-normal text-blue-600 uppercase tracking-widest mb-4">{stat.label}</div>
                                <p className="text-[10px] text-gray-400 font-normal uppercase tracking-widest">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {launchPhases.map((phase, i) => (
                            <div key={phase.title} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:rotate-6 transition-transform relative">
                                    <phase.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <div className="text-[10px] font-normal uppercase text-blue-600 mb-2 tracking-widest relative">Phase 0{i + 1}</div>
                                <h3 className="text-2xl font-normal text-gray-900 mb-4 uppercase tracking-tight leading-none relative">{phase.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-normal relative">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Automated Revenue Split Focus */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -inset-20 bg-orange-500/20 rounded-full blur-[100px] opacity-20" />
                            <div className="relative border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 text-center">
                                <DollarSign className="h-20 w-20 text-blue-400 mx-auto mb-8 animate-bounce" />
                                <h3 className="text-3xl font-normal uppercase tracking-tight mb-6">Frictionless Wealth.</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed font-normal">"We use our proprietary Whop revenue-splitting protocol. When a member joins, the split happens instantly. You get yours, we get ours. No invoices, no chasing, just pure distribution."</p>
                                <div className="flex justify-center space-x-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center px-8">
                                        <p className="text-[10px] font-normal text-blue-400 uppercase mb-1 tracking-widest">Creator Share</p>
                                        <p className="text-2xl font-normal text-white tracking-tight">70-80%</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center px-8">
                                        <p className="text-[10px] font-normal text-gray-500 uppercase mb-1 tracking-widest">Operator Share</p>
                                        <p className="text-2xl font-normal text-white tracking-tight">20-30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-5xl md:text-6xl font-normal mb-8 uppercase tracking-tight leading-none">
                                Your Fairness, <br />
                                <span className="text-blue-400">Hard-Coded.</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-normal">
                                We eliminated the "Agency Tension" by automating the payout. This ensures <span className="text-white font-normal">our team</span> remains focused on your growth structure, not administration.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center space-x-3 text-blue-400 font-normal uppercase tracking-widest text-[10px] group"
                            >
                                <span>Learn the Revenue Protocol</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-4xl md:text-6xl font-normal text-white mb-8 uppercase tracking-tight">Scale the Backend.</h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-normal">
                        Stop leaving money on the table through "Collabs" and "Affiliates". Own the community. Own the product. Own the legacy.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest text-sm shadow-sm"
                    >
                        Initiate Partnership
                        <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
