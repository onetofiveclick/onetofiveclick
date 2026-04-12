'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 text-right">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-green tracking-tighter">
                            404
                        </h1>
                    </div>

                    {/* Message */}
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 tracking-tighter">
                        عذراً! الصفحة غير موجودة
                    </h2>
                    <p className="text-lg text-slate-500 mb-12 max-w-md mx-auto font-bold leading-relaxed">
                        الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نساعدك في العودة إلى المسار الصحيح!
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-10 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-brand-green/20 font-black uppercase tracking-widest text-[10px] gap-3"
                        >
                            <Home className="h-4 w-4" />
                            العودة للرئيسية
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-brand-navy text-white px-10 py-5 rounded-full hover:bg-brand-navy/90 transition-all font-black uppercase tracking-widest text-[10px] gap-3"
                        >
                            اتصل بالدعم
                            <ArrowLeft className="h-4 w-4 text-brand-green" />
                        </Link>
                    </div>

                    {/* Popular Links */}
                    <div className="mt-20 pt-10 border-t border-slate-100">
                        <p className="text-[10px] text-slate-400 mb-6 font-black uppercase tracking-[0.3em]">الصفحات الشائعة:</p>
                        <div className="flex flex-wrap gap-4 justify-center flex-row-reverse">
                            <Link
                                href="/services/seo"
                                className="text-brand-navy hover:text-brand-green text-sm font-black transition-colors"
                            >
                                خدمات السيو
                            </Link>
                            <span className="text-slate-200">•</span>
                            <Link
                                href="/services/geo"
                                className="text-brand-navy hover:text-brand-green text-sm font-black transition-colors"
                            >
                                تحسين GEO
                            </Link>
                            <span className="text-slate-200">•</span>
                            <Link
                                href="/expertise"
                                className="text-brand-navy hover:text-brand-green text-sm font-black transition-colors"
                            >
                                خبراتنا
                            </Link>
                            <span className="text-slate-200">•</span>
                            <Link
                                href="/blog"
                                className="text-brand-navy hover:text-brand-green text-sm font-black transition-colors"
                            >
                                المدونة
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
