'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Star, Users, ArrowLeft, Target, Globe } from 'lucide-react';
import DigitalMaturityQuiz from '@/components/sections/DigitalMaturityQuiz';

export default function CitationsServicePage() {
  return (
    <div className="pt-24 bg-white overflow-hidden min-h-screen text-right">
      {/* Hero Section */}
      <section className="relative bg-brand-navy py-32 lg:py-48 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-white/10 backdrop-blur-md">
                <MapPin className="h-4 w-4" />
                <span>السيطرة المحلية في السعودية (Citations)</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-12 leading-[0.85] tracking-tighter">
                الإشارات المحلية <br />
                <span className="text-brand-green uppercase">لدعم الثقة.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                في السوق السعودي، الثقة تعني كل شيء. نقوم بمزامنة معلومات شركتك (NAP) عبر أفضل الدلائل الموثوقة كـ "معروف" والصفحات الصفراء لتعزيز موثوقية علامتك لدى محركات البحث والعملاء.
              </p>
              <div className="flex flex-col sm:flex-row-reverse gap-6 justify-center">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-green/20 group gap-3"
                >
                  استشر خبير الإشارات المحلية
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Grid */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter uppercase">شبكة الإشارات <span className="text-brand-green">الاستراتيجية.</span></h2>
              <p className="text-slate-500 font-bold max-w-2xl mx-auto">نركز على الدلائل الرقمية ذات السلطة العالية في المملكة لبناء "جدار ثقة" حول علامتك التجارية.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'موثوقية منصة معروف', desc: 'نضمن التوافق الكامل مع معروف لتعزيز ثقة المستهلك السعودي وروبوتات البحث.', icon: ShieldCheck },
                { title: 'خرائط جوجل الموسعة', desc: 'تكامل كامل مع ملفك في GBP لتسليط الضوء على مناطق خدمتك (الرياض، جدة، الدمام).', icon: Star },
                { title: 'دلائل الشركات الموثوقة', desc: 'بناء روابط الاقتباس من أدلة صناعية وتجارية سعودية لرفع سلطة النطاق (Domain Authority).', icon: Target }
              ].map((item, i) => {
                 const Icon = item.icon;
                 return (
                  <div key={i} className="bg-white p-10 border border-slate-100 rounded-[3rem] hover:border-brand-green transition-all group text-right">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-green transition-colors mr-0 ml-auto">
                        <Icon className="h-8 w-8 text-brand-green group-hover:text-brand-navy" />
                    </div>
                    <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tighter">{item.title}</h3>
                    <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                 )
              })}
           </div>
        </div>
      </section>
      
      {/* Quiz Section */}
      <section className="border-t border-slate-100 bg-white">
        <DigitalMaturityQuiz />
      </section>

      {/* Regional Authority Grid */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-green/5 opacity-20 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-right mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">مراكز <span className="text-brand-green">الهيمنة الإقليمية.</span></h2>
              <p className="text-slate-400 font-bold max-w-xl mr-0 ml-auto">نقوم بتشغيل استراتيجيات الإشارات المعقدة عبر المحاور الاقتصادية الأساسية في المملكة.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { city: 'الرياض', desc: 'إشارات مالية وتجارية لشركات العليا والملز.', link: '/locations/riyadh/' },
                { city: 'جدة', desc: 'اقتباسات موثوقة للقطاع التجاري في العروس.', link: '/locations/jeddah/' },
                { city: 'الدمام', desc: 'إشارات القطاع اللوجستي والصناعي في الشرقية.', link: '/locations/dammam/' }
              ].map((loc, i) => (
                <Link 
                  href={loc.link} 
                  key={i}
                  className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-brand-green transition-all group"
                >
                   <div className="text-right">
                      <div className="flex items-center gap-3 justify-end mb-4">
                         <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em]">مركز مـفعل</span>
                         <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">{loc.city}</h3>
                      <p className="text-sm text-slate-400 font-bold leading-relaxed">{loc.desc}</p>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
