'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ReviewSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02] pointer-events-none">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,1000 C300,800 400,200 1000,0 L1000,1000 Z" fill="#662046" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block bg-brand-blue/5 text-brand-blue px-4 py-2 rounded-full text-[10px] font-normal mb-8 border border-brand-blue/10 uppercase tracking-widest">
                            Consensus Engine
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
                            BUILD THE CONSENSUS
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            In the age of Agentic Search, AI models only cite what they can verify. We help your
                            Digital Marketing agency build a "Shield of Consensus" by systematically gathering
                            high-intent reviews that satisfy the LLM retrieval filters.
                        </p>

                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                                JS
                            </div>
                            <div>
                                <p className="text-sm font-normal text-gray-900 uppercase tracking-wider">Strategic Architecture</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">AEO Verification Protocol</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-10 leading-relaxed font-normal">
                            LLMs (ChatGPT, Perplexity, Gemini) verify your claims via **unmanaged assets**. Every 5-star Google review is a data point that forces the AI to conclude your business is the definitive market leader.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-[3.5rem] p-12 text-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden border border-gray-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-cyan-500 to-brand-blue" />

                            <h3 className="text-2xl font-normal mb-6 uppercase tracking-tight text-gray-900">AEO Verification Request</h3>
                            <p className="text-gray-500 mb-10 font-normal leading-relaxed">
                                "We’re truly grateful for your thoughtful words and are delighted to hear that our digital strategy delivered the impact you needed."
                            </p>

                            <div className="flex space-x-2 mb-12">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} className="h-6 w-6 text-brand-blue fill-brand-blue" />
                                ))}
                            </div>

                            <Link
                                href="https://g.page/r/CZ3UijjyN5sWEAE/review"
                                target="_blank"
                                className="group flex items-center justify-between bg-brand-blue text-white px-8 py-6 rounded-2xl hover:brightness-110 transition-all font-normal uppercase tracking-widest text-sm shadow-lg shadow-brand-blue/20"
                            >
                                <span>Leave a Review on Google</span>
                                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>

                            <div className="mt-12 pt-12 border-t border-gray-100">
                                <h3 className="text-xl font-normal text-brand-blue mb-4">Leverage Unmanaged Assets</h3>
                                <p className="text-sm text-gray-400 font-normal">
                                    AI engines ignore your website's self-praise. They look at Google Reviews
                                    and Reddit. We automate the capture of these "Unmanaged Assets" to secure
                                    your agency's ranking.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
