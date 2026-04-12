'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-brand-navy relative overflow-hidden text-right">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -ml-64 -mb-64" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 backdrop-blur-sm relative"
        >
          {/* Subtle gradient behind content */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent rounded-[3rem]" />

          <div className="relative z-10">
            <div className="flex justify-center items-center flex-row-reverse gap-3 mb-8 text-brand-green font-black uppercase tracking-[0.2em] text-xs">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </span>
              <span>مقاعد شاغرة محدودة هذا الشهر</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.2] tracking-tight">
              ابدأ النمو المتسارع <br className="hidden md:block" />
              <span className="text-brand-green underline decoration-brand-green/30 px-2 underline-offset-8">اليوم.</span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              انضم إلى النخبة. لا تدع منافسيك يستحوذون على حصتك السوقية في البحث المحلي.
            </p>

            <div className="flex flex-col sm:flex-row-reverse gap-6 justify-center items-center mb-10">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-5 rounded-full hover:scale-105 transition-all duration-300 font-black text-lg shadow-[0_0_40px_-10px_rgba(0,214,101,0.5)] group gap-3"
              >
                احجز استشارتك المجانية الآن
                <ArrowLeft className="h-6 w-6 group-hover:-translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/expertise"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 text-white px-12 py-5 rounded-full hover:border-white transition-all font-bold text-lg"
              >
                اكتشف خطط الأسعار
              </Link>
            </div>
            
            <p className="text-sm font-bold text-slate-400">
              * لا يلزم بطاقة ائتمانية. استشارة مجانية ومدتها 30 دقيقة.
            </p>

            {/* Social Proof Stats */}
            <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-90 flex-row-reverse">
               <div className="flex flex-col items-center">
                  <span className="text-3xl font-black text-white leading-none">10k+</span>
                  <span className="text-xs font-bold text-slate-400 mt-2">منشأة مستفيدة</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-3xl font-black text-white leading-none">#1</span>
                  <span className="text-xs font-bold text-slate-400 mt-2">أداة تسويق محلي</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-3xl font-black text-white leading-none">24/7</span>
                  <span className="text-xs font-bold text-slate-400 mt-2">دعم فني</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-3xl font-black text-white leading-none">300%</span>
                  <span className="text-xs font-bold text-slate-400 mt-2">متوسط نمو الزيارات</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
