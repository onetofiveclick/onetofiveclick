'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, ArrowRight } from 'lucide-react';

export default function ROICalculator() {
    const [revenue, setRevenue] = useState(10000);
    const [conversion, setConversion] = useState(2);

    const projectedGrowth = revenue * (conversion / 100) * 12 * 5; // Simplified multi-year asset growth

    return (
        <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] rounded-full" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-normal mb-6 uppercase tracking-widest">
                            <Target className="h-4 w-4" />
                            <span>AI-Native ROI Simulator 2026</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-8 leading-tight">
                            Predict Your <br />
                            <span className="text-brand-blue">Asset Growth.</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-normal">
                            Static case studies are obsolete. In the 2026 era, we use <span className="text-gray-900 font-normal">Predictive Modeling</span> to simulate your SEO equity before we even begin.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <label className="block text-xs font-normal text-gray-400 mb-4 uppercase tracking-widest">Current Monthly Revenue ($)</label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="100000"
                                    step="1000"
                                    value={revenue}
                                    onChange={(e) => setRevenue(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-2 text-blue-400 font-normal text-xl leading-none">
                                    <span>${revenue.toLocaleString()}</span>
                                    <span className="text-gray-600 text-xs mt-2 font-normal">$100k+</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-normal text-gray-400 mb-4 uppercase tracking-widest">Target Growth Factor (%)</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="0.5"
                                    value={conversion}
                                    onChange={(e) => setConversion(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-2 text-blue-400 font-normal text-xl leading-none">
                                    <span>{conversion}%</span>
                                    <span className="text-gray-600 text-xs mt-2 font-normal">Aggressive</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-blue/20 rounded-[3rem] blur-3xl" />
                        <div className="relative bg-gray-900 border border-white/10 rounded-[3rem] p-12 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <TrendingUp className="h-16 w-16 text-brand-blue opacity-20" />
                            </div>

                            <p className="text-xs font-normal text-gray-500 mb-12 uppercase tracking-widest">Projected Organic Equity (24-Month Forecast)</p>

                            <div className="mb-12">
                                <span className="text-7xl md:text-8xl font-normal text-white leading-none">
                                    ${projectedGrowth.toLocaleString()}
                                </span>
                                <p className="text-blue-400 font-normal text-sm mt-4 uppercase tracking-widest">+450% Estimated Yield</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                                        <DollarSign className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-normal text-white leading-tight">Elite Authority Slot</p>
                                        <p className="text-[10px] text-gray-500 uppercase">Top 10 Global Reach</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                                        <Target className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-normal text-white leading-tight">AI Overview Dominance</p>
                                        <p className="text-[10px] text-gray-500 uppercase">GEO Protocol Synchronized</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-12 bg-white text-gray-900 py-5 rounded-xl font-normal text-sm hover:brightness-110 transition-all flex items-center justify-center group uppercase tracking-widest">
                                Claim Your Forecast
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
