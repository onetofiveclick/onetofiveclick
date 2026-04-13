'use client';

import { motion } from 'framer-motion';
import { Zap, BrainCircuit, TrendingUp, Layers } from 'lucide-react';

export default function VerticalDominance() {
    return (
        <section className="py-24 md:py-32 bg-brand-navy relative overflow-hidden text-right">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[160px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 text-brand-green px-6 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest"
                        >
                            <Zap className="h-4 w-4 fill-current" />
                            <span>رؤى ذكاء اصطناعي جديدة كلياً</span>
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                            شاهد ما <span className="text-brand-green">يفوتك</span> <br /> في السوق السعودي.
                        </h2>
                        
                        <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-bold">
                            تقوم محركات الذكاء الاصطناعي الخاصة بنا بتحليل آلاف نقاط البيانات المحلية في السعودية للعثور على الفرص المخفية التي لا يعرفها منافسوك.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                    <BrainCircuit className="h-5 w-5 text-brand-green" />
                                </div>
                                <h3 className="text-xl font-black text-white tracking-tight">المعايير الدلالية</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-bold">مواءمة ملف عملك مع كيانات البحث الأكثر أهمية.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                    <TrendingUp className="h-5 w-5 text-brand-green" />
                                </div>
                                <h3 className="text-xl font-black text-white tracking-tight">تتبع سرعة النمو</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-bold">التنبؤ بتغيرات التصنيف قبل حدوثها فعلياً.</p>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-10 bg-brand-green/20 rounded-[3rem] blur-[80px] opacity-20" />
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-4 shadow-2xl overflow-hidden ring-1 ring-white/10">
                             <img 
                                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                                 alt="لوحة تحكم سيو بالذكاء الاصطناعي" 
                                 className="w-full h-auto rounded-[2rem] shadow-2xl" 
                             />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
