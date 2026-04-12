'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Cpu,
    Globe,
    Zap,
    ShieldCheck,
    Layout,
    Rocket,
    BarChart3,
    Search,
    CheckCircle2,
    Users,
    ArrowLeft
} from 'lucide-react';

const stats = [
    { label: 'مواقع Next.js تم إطلاقها', value: '150+' },
    { label: 'متوسط تحسين LCP', value: '78%' },
    { label: 'تغطية الحافة العالمية', value: '100%' },
    { label: 'تركيز عائد المؤسسات', value: 'عالٍ' }
];

const nextFeatures = [
    {
        title: 'الرندر من جانب الخادم (SSR)',
        description: 'نحن نستفيد من SSR لضمان أرشفة علامتك التجارية فوراً. رندر في الوقت الفعلي لمحتوى ديناميكي عالي السلطة.',
        icon: Zap
    },
    {
        title: 'توليد المواقع الثابتة (SSG)',
        description: 'سرعات تحميل مذهلة باستخدام SSG. نحن نبني أصولاً تجتاز كل مقاييس Core Web Vital بنتيجة 100/100.',
        icon: Rocket
    },
    {
        title: 'بنية سيو متطورة',
        description: 'مواقع Next.js الخاصة بنا أصلية لمعالجة اللغات الطبيعية والسيو الدلالي. نحن نهندس Metadata و JSON-LD للسيطرة على بحث AI.',
        icon: Search
    }
];

export default function NextJsServicePage() {
    return (
    <div className="pt-24 bg-white overflow-hidden min-h-screen text-right">
      {/* 2026 Tech Stack Status */}
      <div className="bg-brand-navy border-b border-white/5 py-8 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-12 flex-row-reverse">
            <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">الحالة: NEXTJS_AUTHORITY_READY</p>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <h2 className="text-[11px] text-slate-400 max-w-5xl leading-relaxed font-bold uppercase tracking-wider text-right">
              تقود One to Five Click مشهد البناء في السعودية لعام 2026 من خلال <span className="text-white">بنية تحتية لمؤسسات Next.js 15+</span>. منهجيتنا تضمن بناء أصولك الرقمية في الرياض وجدة لـ <span className="text-white">استرداد AI</span> و <span className="text-white">توسع لا نهائي</span>.
            </h2>
          </div>
        </div>
      </div>

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
              <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-white/10 backdrop-blur-md">
                <Cpu className="h-4 w-4" />
                <span>Next.js السلطة المرجعية العالمية</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter uppercase">
                مؤسسات <br />
                <span className="text-brand-green">Next.js في المملكة.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                نحن لا نبني مواقع إلكترونية فحسب. نحن نهندس <span className="text-white">محركات إيرادات عالية الأداء</span> للشركات السعودية باستخدام أحدث مكونات الخادم وبنية الحافة (Edge).
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center flex-row-reverse">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-green/20 group gap-3"
                >
                  ابدأ مشروعك
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center border border-white/10 text-white px-12 py-6 rounded-full hover:bg-white/5 transition-all font-black text-[10px] uppercase tracking-widest backdrop-blur-sm"
                >
                  عرض دراسات الحالة
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Stats Grid */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center flex-row-reverse">
            {stats.map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-6xl font-black text-brand-navy mb-2 group-hover:text-brand-green transition-colors tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic/NLP Value Proposition */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
                البـنية <br />
                <span className="text-brand-green uppercase">الدلالـية.</span>
            </h2>
            <p className="text-[10px] text-slate-500 font-black max-w-2xl mx-auto uppercase tracking-[0.3em] text-center">سيطرة كاملة على الاسترداد وتكامل بحث AI بشكل افتراضي.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {nextFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:border-brand-green text-right">
                    <div className="w-16 h-16 bg-brand-mint rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-green transition-all duration-500 shadow-sm mr-auto ml-0">
                        <Icon className="h-8 w-8 text-brand-green group-hover:text-brand-navy transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-black text-brand-navy mb-6 group-hover:text-brand-green transition-colors tracking-tighter uppercase">{f.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-bold text-sm">
                        {f.description}
                    </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unique Fact Section: The Performance Difference */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-brand-green/5 blur-[100px] rounded-full animate-pulse" />
              <div className="relative bg-brand-navy p-16 rounded-[4rem] text-white shadow-3xl shadow-brand-navy/20 overflow-hidden border border-white/5 group">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
                <h3 className="text-3xl font-black mb-12 text-brand-green uppercase tracking-tighter text-right">مقارنة: سرعة النقرة الواحدة</h3>
                <div className="space-y-10 relative z-10 text-right">
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex-row-reverse">
                      <span>سرعة الفهرسة</span>
                      <span className="text-brand-green">1 نقرة (فوري)</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-brand-green shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 flex-row-reverse">
                      <span>سرعة المنصات العامة</span>
                      <span>5-10 أيام (يدوي)</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-700 w-1/4" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex-row-reverse">
                      <span>تحويل المستخدم (متوسط)</span>
                      <span className="text-brand-green">+320% إيرادات</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        className="h-full bg-brand-mint"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-16 p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-[10px] leading-relaxed text-slate-400 uppercase tracking-[0.2em] font-black text-right">
                  <span className="text-brand-green">معلومات حصرية:</span> البنية التحتية محسنة خصيصاً لسلوك بحث 2026.
                </div>
              </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right"
            >
              <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.9]">
                بني للـ <br />
                <span className="text-brand-green uppercase">سيد العالمي.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                كل "نقرة" تمثل فرصة تحويل. فلسفتنا تضمن أن يجد العملاء ما يحتاجون إليه في أقل من 5 نقرات.
              </p>
              <div className="space-y-8 flex flex-col items-end">
                {[
                  { title: 'برمجيات وسيطة API مخصصة', desc: 'تكاملات آمنة وعالية السرعة لبيانات المؤسسات.' },
                  { title: 'نشر وظائف الحافة (Edge Functions)', desc: 'موقعك يتوسع عالمياً عبر عقد Vercel فوراً.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 border border-slate-100 bg-slate-50 rounded-[2.5rem] hover:border-brand-green transition-all group flex-row-reverse w-full shadow-sm">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-green transition-colors flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-brand-green group-hover:text-brand-navy" />
                    </div>
                    <div className="text-right w-full">
                      <h4 className="font-black text-brand-navy uppercase tracking-widest text-[10px] mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reliability Index Table */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
                <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
                    مؤشر <br /> <span className="text-brand-green uppercase">الموثوقية.</span>
                </h2>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] text-center">أداء نقي مقابل انتفاخ القوالب.</p>
            </div>

          <div className="overflow-hidden rounded-[3.5rem] shadow-2xl bg-white border border-slate-100">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="p-10 font-black text-[10px] uppercase tracking-[0.3em]">نطاق الميزة</th>
                  <th className="p-10 font-black text-[10px] uppercase tracking-[0.3em] text-brand-green">1-5 Click (خـبـير)</th>
                  <th className="p-10 font-black text-[10px] uppercase tracking-[0.3em] text-slate-500">وكالة عادية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { domain: 'بنية السيو', elite: 'Metadata أصلية لـ NLP', standard: 'علامات Meta أساسية' },
                  { domain: 'سرعة الهاتف', elite: '100/100 Core Web Vitals', standard: 'يعتمد على القالب' },
                  { domain: 'النظام التقني', elite: 'Next.js App Router 15+', standard: 'Legacy PHP / WP' },
                  { domain: 'مزامنة العملاء', elite: 'مزامنة خلال 4 ساعات', standard: '24-48 ساعة يدوي' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-10 font-black text-[10px] uppercase tracking-[0.2em] text-brand-navy">{row.domain}</td>
                    <td className="p-10 font-black text-sm">
                      <div className="flex items-center gap-3 text-brand-navy flex-row-reverse justify-end">
                        <CheckCircle2 className="h-5 w-5 text-brand-green" />
                        <span className="">{row.elite}</span>
                      </div>
                    </td>
                    <td className="p-10 text-slate-400 text-sm font-bold">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="bg-brand-green rounded-[5rem] p-20 md:p-40 text-center relative overflow-hidden shadow-3xl shadow-brand-green/20">
                <div className="absolute inset-0 bg-white/10 opacity-30 blur-3xl rounded-full translate-y-1/2" />
                <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.85]">
                     قـم بتوسيع <br /> <span className="uppercase">أصلك الرئيسي.</span>
                </h2>
                <p className="text-2xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-black leading-relaxed">
                    انضم إلى أفضل 1% من العلامات التجارية التي تستفيد من بنية Next.js الأصلية للسلطة العالمية.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
                >
                    بدء جلسة الاستراتيجية
                    <ArrowLeft className="h-6 w-6 text-brand-green" />
                </Link>
            </div>
        </div>
      </section>
    </div>
    );
}
