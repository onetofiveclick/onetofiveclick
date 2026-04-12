'use client';

import { motion } from 'framer-motion';
import { Star, Shield, Target, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-green/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-1/4 h-1/2 bg-brand-navy/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 pt-10">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy text-brand-green rounded-full text-xs font-black mb-8 shadow-xl shadow-brand-navy/10"
            >
              <Target className="w-4 h-4" />
              <span>شريك التحول الرقمي 2030</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl xl:text-7xl font-black text-brand-navy mb-6 tracking-tighter leading-tight"
            >
              تصدّر نتائج البحث المحلي في مدينتك وضع منافسيك في الخلف.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500 mb-10 leading-loose font-bold max-w-xl"
            >
              المنصة رقم #1 المعتمدة في المملكة لتحسين محركات البحث المحلية للسلاسل التجارية والشركات المحلية. قم بإدارة تصنيفاتك وسمعتك الرقمية بنقرة واحدة.
            </motion.p>

            {/* Main CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3 mb-16"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-transform duration-300 font-black text-xl shadow-[0_0_40px_rgba(0,214,101,0.4)] group hover:shadow-[0_0_60px_rgba(0,214,101,0.6)]"
                >
                  ابدأ التجربة المجانية اليوم
                  <ArrowLeft className="mr-3 h-6 w-6 group-hover:-translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white border-2 border-slate-200 text-brand-navy px-10 py-6 rounded-full hover:border-brand-navy hover:bg-slate-50 transition-all font-black text-lg"
                >
                  نتائج عملائنا
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm font-bold text-slate-500">
                <div className="flex -space-x-2 space-x-reverse mr-2">
                   <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="عميل سعيد 1" />
                   <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="عميل سعيد 2" />
                   <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="عميل سعيد 3" />
                </div>
                <span>أكثر من <strong>10,000+ شركة</strong> تثق بنا في المملكة</span>
              </div>
            </motion.div>

            {/* Trust Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 border-t border-slate-100 pt-8 mt-10"
            >
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">موثوق من قبل وكالات رائدة وأكثر من 500+ عميل</span>
              <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="font-black text-brand-navy text-xl">Google <span className="text-brand-green">Partner</span></div>
                <div className="font-black text-brand-navy text-xl">Trustpilot <span className="text-yellow-500 font-bold">★ 4.9</span></div>
              </div>
            </motion.div>
          </div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative w-full h-full flex items-center justify-center pt-12 lg:pt-0"
          >
            {/* Background shape */}
            <div className="absolute inset-0 bg-brand-green rounded-[4rem] opacity-[0.04]" />
            <div className="absolute inset-0 bg-brand-navy rounded-[4rem] opacity-[0.02]" />
            <div className="absolute -inset-10 bg-gradient-to-r from-brand-green/30 to-brand-navy/20 rounded-full blur-[120px] opacity-70 animate-pulse" />
            
            {/* Main Mockup */}
            <div className="relative bg-[#001C3D] rounded-[2.5rem] p-3 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-[#0a274a] transition-all duration-700 w-full max-w-[600px] lg:mr-auto">
                {/* CSS Based Dashboard Mockup Inside */}
                <div className="w-full bg-slate-50/95 backdrop-blur rounded-[1.5rem] p-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-brand-green" />
                  
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-3 bg-slate-200 rounded-full opacity-50"></div>
                      <div className="w-8 h-8 bg-brand-navy rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-end">
                      <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                        <Target className="h-5 w-5 text-brand-green" />
                      </div>
                      <div className="text-3xl font-black text-brand-navy">12,450</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">مشاهدات محلية</div>
                    </div>
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-end">
                      <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center mb-4">
                        <Star className="h-5 w-5 text-brand-navy" />
                      </div>
                      <div className="text-3xl font-black text-brand-navy">4.8</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">متوسط التقييم</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-40 flex items-end justify-between gap-3 relative z-10">
                     {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                       <div key={i} className="flex-1 bg-brand-mint rounded-t-lg relative group/bar transition-all" style={{ height: `${h}%` }}>
                          <div className="absolute bottom-full mb-2 w-full text-center opacity-0 group-hover/bar:opacity-100 transition-opacity text-[10px] font-black text-brand-green">+{h}</div>
                          <div className="absolute bottom-0 w-full bg-brand-green rounded-t-lg transition-all" style={{ height: `${h * 0.7}%` }}></div>
                       </div>
                     ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green blur-[60px] opacity-20" />
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-navy blur-[60px] opacity-10" />
                </div>
            </div>
            
            {/* Floor shadow anchor */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black/20 blur-xl rounded-[100%]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
