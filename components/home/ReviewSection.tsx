'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const reviews = [
    {
        quote: "زادت رؤية البحث المحلي لدينا بنسبة 300٪ في غضون 3 أشهر من استخدام محرك السمعة الخاص بهم.",
        author: "سارة جينكينز",
        role: "مؤسسة برايت هورايزون",
        image: "/happy_small_business_owners_miling_1775757153671.png"
    },
    {
        quote: "كنت أعاني من التقييمات السلبية العشوائية، الآن لدي تحكم كامل في سمعتي الرقمية محلياً.",
        author: "عبدالله العتيبي",
        role: "المدير العام - سلسلة مطاعم",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        quote: "الأداة غيرت مسار شركتنا بالكامل. النمو كان عضوياً وسريعاً جداً.",
        author: "نورة السعد",
        role: "مديرة التسويق - عيادات الرؤية",
        image: "https://i.pravatar.cc/150?img=47"
    }
];

export default function ReviewSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextReview = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };
    return (
        <section className="py-32 bg-white relative overflow-hidden text-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="inline-flex items-center space-x-2 space-x-reverse bg-brand-mint border border-brand-green/20 text-brand-green px-6 py-2.5 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest">
                            <Star className="h-4 w-4 fill-current" />
                            <span>إدارة السمعة</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 leading-[0.9] tracking-tighter">
                            ابنِ ثقة <span className="text-brand-green text-stroke-sm">تتحول لمبيعات.</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed font-bold">
                            المراجعات هي شريان الحياة للبحث المحلي. يساعدك محرك السمعة الآلي لدينا في التقاط الملاحظات وإدارتها وعرضها بما يعزز النمو.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4 flex-row-reverse">
                                <div className="mt-1 h-6 w-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                                    <Check className="h-3.5 w-3.5 text-brand-green" strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="text-brand-navy font-black mb-1">توليد المراجعات آلياً</h4>
                                    <p className="text-slate-500 text-sm font-bold">تواصل مع العملاء في اللحظة المثالية للحصول على تقييم 5 نجوم.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 flex-row-reverse">
                                <div className="mt-1 h-6 w-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                                    <Check className="h-3.5 w-3.5 text-brand-green" strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="text-brand-navy font-black mb-1">درع الملاحظات السلبية</h4>
                                    <p className="text-slate-500 text-sm font-bold">اعترض المشكلات قبل وصولها للملفات العامة من خلال التوجيه الذكي.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative lg:mr-10"
                    >
                        <div className="absolute -inset-10 bg-brand-green/10 rounded-[4rem] blur-3xl opacity-50" />
                        <div className="bg-white rounded-[3rem] p-10 md:p-14 text-brand-navy shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden border border-slate-100 flex flex-col justify-between h-full min-h-[500px]">
                            <div className="absolute top-0 right-0 w-full h-2 bg-brand-green" />
                            
                            <div className="flex justify-between items-center mb-10 flex-row-reverse">
                                <div className="flex items-center gap-2 flex-row-reverse">
                                    <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center">
                                        <span className="text-brand-green font-black text-xs">1-5</span>
                                    </div>
                                    <span className="font-black tracking-tighter">Click</span>
                                </div>
                                <div className="flex space-x-1 flex-row-reverse">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-[#FFC107] fill-[#FFC107]" />
                                    ))}
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-1"
                                >
                                    <h3 className="text-2xl md:text-3xl font-black mb-10 text-brand-navy leading-tight">&ldquo;{reviews[activeIndex].quote}&rdquo;</h3>
                                    
                                    <div className="flex items-center gap-4 mb-12 flex-row-reverse">
                                        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden ring-4 ring-slate-50 shadow-md">
                                            <img src={reviews[activeIndex].image} alt={reviews[activeIndex].author} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-base font-black text-brand-navy">{reviews[activeIndex].author}</p>
                                            <p className="text-xs text-slate-400 font-bold tracking-wider text-right uppercase mt-1">{reviews[activeIndex].role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 flex-row-reverse">
                                <div className="flex gap-2">
                                    <button onClick={prevReview} aria-label="المراجعة السابقة" className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-brand-navy transition-all">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                    <button onClick={nextReview} aria-label="المراجعة التالية" className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-brand-navy transition-all">
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                </div>
                                <Link
                                    href="/contact"
                                    className="group flex items-center gap-2 text-brand-green font-black hover:text-brand-navy transition-colors text-sm uppercase tracking-widest"
                                >
                                    <span>عزز سمعتك الآن</span>
                                    <ExternalLink className="h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
