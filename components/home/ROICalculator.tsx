'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, ArrowLeft } from 'lucide-react';

export default function ROICalculator() {
    const [revenue, setRevenue] = useState(10000);
    const [conversion, setConversion] = useState(2);

    const projectedGrowth = revenue * (conversion / 100) * 12 * 5; 

    return (
        <section className="py-32 bg-white relative overflow-hidden text-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-brand-mint border border-brand-green/20 text-brand-green px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
                            <Target className="h-4 w-4" />
                            <span>محاكي نمو عائد الاستثمار</span>
                        </div>
                        <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-8 leading-[0.9] tracking-tighter">
                            توقع نمو <br />
                            <span className="text-brand-green">السيو الخاص بك.</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl font-medium">
                            لا تخمن نموك. استخدم نموذجنا القائم على البيانات لرؤية عائد الاستثمار المحتمل لاستراتيجية بحث محلي طويلة الأمد.
                        </p>

                        <div className="space-y-10 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm mt-8">
                            <div>
                                <label className="block text-sm font-bold text-brand-navy mb-6 uppercase tracking-wider">الإيرادات الشهرية الحالية (ر.س)</label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="100000"
                                    step="1000"
                                    value={revenue}
                                    onChange={(e) => setRevenue(parseInt(e.target.value))}
                                    className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green outline-none"
                                />
                                <div className="flex justify-between mt-4 text-brand-navy font-black text-3xl tracking-tighter">
                                    <span>{revenue.toLocaleString()} ر.س</span>
                                    <span className="text-slate-400 text-sm mt-2 font-bold tracking-widest">+100 ألف</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-brand-navy mb-6 uppercase tracking-wider">النمو المستهدف (%)</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="0.5"
                                    value={conversion}
                                    onChange={(e) => setConversion(parseFloat(e.target.value))}
                                    className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green outline-none"
                                />
                                <div className="flex justify-between mt-4 text-brand-green font-black text-3xl tracking-tighter">
                                    <span>{conversion}%</span>
                                    <span className="text-slate-400 text-sm mt-2 font-bold tracking-widest">طموح أعلى</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:mr-8 xl:mr-16">
                        <div className="absolute -inset-6 bg-brand-green/20 rounded-[4rem] blur-[80px] opacity-70 animate-pulse" />
                        <div className="relative bg-brand-navy rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden text-right border-4 border-[#0a274a]">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-green rounded-br-full opacity-10 flex items-start justify-start p-6">
                                <TrendingUp className="h-10 w-10 text-brand-green" />
                            </div>

                            <p className="text-sm font-black text-slate-400 mb-6 uppercase tracking-[0.2em] relative z-10 block">الإيرادات العضوية المتوقعة (24 شهر)</p>

                            <div className="mb-14 relative z-10 border-b border-white/10 pb-10">
                                <span className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300 tracking-tighter leading-none block drop-shadow-[0_0_30px_rgba(0,214,101,0.3)] min-h-[100px] py-2">
                                    {(projectedGrowth / 1000).toLocaleString()}K <span className="text-3xl text-slate-400">ر.س</span>
                                </span>
                                <div className="flex items-center gap-3 mt-8">
                                    <div className="px-5 py-3 bg-brand-green/20 text-brand-green rounded-xl text-sm font-black tracking-widest flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5" />
                                        نمو متوقع بنسبة +450%
                                    </div>
                                    <div className="h-12 w-full max-w-[150px] flex items-end gap-1 opacity-50 px-2 pt-2">
                                        <div className="w-2 bg-brand-green/30 h-[20%] rounded-t-sm"></div>
                                        <div className="w-2 bg-brand-green/40 h-[40%] rounded-t-sm"></div>
                                        <div className="w-2 bg-brand-green/60 h-[60%] rounded-t-sm"></div>
                                        <div className="w-2 bg-brand-green/80 h-[80%] rounded-t-sm"></div>
                                        <div className="w-2 bg-brand-green h-[100%] rounded-t-sm shadow-[0_0_10px_rgba(0,214,101,0.5)]"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-12">
                                <div className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/5 backdrop-blur-sm">
                                    <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,214,101,0.3)]">
                                        <DollarSign className="h-7 w-7 text-brand-navy stroke-[2.5]" />
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-white tracking-tight">مكانة السلطة في السوق</p>
                                        <p className="text-xs text-slate-400 uppercase font-black tracking-widest mt-1">أصول القيمة العضوية</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/5 backdrop-blur-sm">
                                    <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-600">
                                        <Target className="h-7 w-7 text-white stroke-[2.5]" />
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-white tracking-tight">السيطرة على محركات البحث</p>
                                        <p className="text-xs text-slate-400 uppercase font-black tracking-widest mt-1">نمو متعدد القنوات</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-brand-green text-brand-navy py-6 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_40px_rgba(0,214,101,0.4)] transition-all flex items-center justify-center gap-3">
                                احصل على الخطة الكاملة
                                <ArrowLeft className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
