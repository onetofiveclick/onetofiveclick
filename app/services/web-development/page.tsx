'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Layout,
  Shield,
  Globe,
  Cpu,
  MousePointer2,
  ArrowLeft
} from 'lucide-react';

const webPackages = [
  {
    name: 'عقد البداية',
    price: '999',
    retainer: '97',
    desc: 'مثالي لقادة الخدمات المحليين الذين يحتاجون إلى صفحة هبوط عالية سرعة التحويل.',
    features: ['نموذج صفحة هبوط واحدة', 'هندسة تعتمد على الجوال أولاً', 'تكامل السيو الأساسي', 'نافذة إطلاق لمدة 30 يوماً', 'مزامنة استضافة آمنة'],
    color: 'emerald'
  },
  {
    name: 'بنية النمو التحتية',
    price: '2,999',
    retainer: '197',
    desc: 'موقع كامل متعدد الصفحات للشركات التي تتطلع للسيطرة على مجموعتها الجغرافية المحلية.',
    features: ['جوهر أعمال مكون من 5 صفحات', 'محتوى سيو مدعوم بالذكاء الاصطناعي', 'نظام بيئي لالتقاط العملاء', 'مكون إضافي للتحليلات المتقدمة', 'صيانة كل أسبوعين'],
    color: 'brand-blue',
    popular: true
  },
  {
    name: 'أصول المؤسسات',
    price: '7,500',
    retainer: '497',
    desc: 'الأصل الرقمي النهائي للشركات الناشئة الممولة والمجموعات الطبية/القانونية متعددة المواقع.',
    features: ['صفحات غير محدودة / منطق مخصص', 'أداء Next.js Edge الفائق', 'جاهزية عميقة لبحث GEO', 'تكاملات واجهة برمجة التطبيقات مخصصة', 'دعم أولي على مدار الساعة'],
    color: 'gray-900'
  }
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-24 bg-white overflow-hidden min-h-screen text-right">
      {/* 2026 Tech Stack Status */}
      <div className="bg-brand-navy border-b border-white/5 py-4 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-row-reverse">
          <div className="flex items-center space-x-8 space-x-reverse flex-row-reverse">
            <div className="flex items-center space-x-3 space-x-reverse flex-row-reverse">
              <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">حالة تقنية الوكالة: NATIVE_NEXTJS_ENABLED</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">التقنية الأساسية: محرك نشر Next.js 15+</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">فريق ون تو فايف كليك - الرياض / جدة</div>
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
              <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-white/10 backdrop-blur-md">
                <Zap className="h-4 w-4" />
                <span>هندسة معتمدة على الأداء لعام 2026</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter">
                السرعة هي <br />
                <span className="text-brand-green uppercase">التحويل السريع في السعودية.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                نبني <span className="text-white">أصولاً رقمية متميزة</span> للشركات السعودية يتم تحميلها في أقل من ثانية وتتحول بشكل أفضل بنسبة 300% من المواقع التقليدية في الرياض وجدة. <span className="text-white">لا تعقيد، لا مجهود، فقط أرباح.</span>
              </p>
              <div className="flex flex-col sm:flex-row-reverse gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black tracking-widest text-[10px] uppercase shadow-2xl shadow-brand-green/20 group gap-3"
                >
                  ابدأ بناءك الآن
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                </Link>
                <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center border border-white/10 text-white px-12 py-6 rounded-full hover:bg-white/5 transition-all font-black tracking-widest text-[10px] uppercase backdrop-blur-sm"
                >
                    عرض البنية التحتية
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Packages - The Tiered Logic */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
                باقات <br /> <span className="text-brand-green uppercase">الأصول.</span>
            </h2>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">مصممة لنمو يمكن التنبؤ به. لا توجد فواتير بالساعة.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {webPackages.map((pkg) => (
              <div key={pkg.name} className={`relative p-12 md:p-16 rounded-[4rem] border transition-all duration-700 ${pkg.popular ? 'bg-brand-navy text-white border-brand-green shadow-3xl shadow-brand-navy/30 scale-105 z-10' : 'bg-white border-slate-100 hover:border-brand-green'} text-right`}>
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-green text-brand-navy px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
                    الأكثر طلباً
                  </div>
                )}
                <h3 className={`text-3xl font-black uppercase mb-6 tracking-tighter ${pkg.popular ? 'text-brand-green' : 'text-brand-navy'}`}>{pkg.name}</h3>
                <div className="flex items-baseline mb-2 flex-row-reverse">
                  <span className="text-2xl font-black opacity-40 mr-2">$</span>
                  <span className="text-7xl font-black tracking-tighter">{pkg.price}</span>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mr-3 ${pkg.popular ? 'text-slate-400' : 'text-slate-400'}`}>تأسيس</span>
                </div>
                <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-10 ${pkg.popular ? 'text-brand-green' : 'text-brand-navy'}`}>+ ${pkg.retainer}/شهرياً رصيد صيانة</div>

                <p className={`text-sm mb-12 leading-relaxed font-bold ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>

                <ul className="space-y-6 mb-16">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start gap-4 text-sm font-bold flex-row-reverse">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.popular ? 'bg-brand-green' : 'bg-brand-mint'}`}>
                            <CheckCircle className={`h-3.5 w-3.5 ${pkg.popular ? 'text-brand-navy' : 'text-brand-green'}`} />
                        </div>
                      <span className={pkg.popular ? 'text-slate-200' : 'text-brand-navy'}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-6 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-xl ${pkg.popular ? 'bg-brand-green text-brand-navy hover:scale-105' : 'bg-brand-navy text-white hover:bg-brand-green hover:text-brand-navy'}`}
                >
                  تأكيد الحجز
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Breakdown Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Cpu, title: 'بناء معزز بالذكاء الاصطناعي', desc: 'تسخير سرعة الذكاء الاصطناعي مع اللمسة الإنسانية.' },
              { icon: Layout, title: 'هندسة EEAT', desc: 'بيانات منظمة للسيطرة على استشهادات الذكاء الاصطناعي.' },
              { icon: Shield, title: 'طول عمر الأصول', desc: 'عمليات تدقيق أمنية شهرية وبنية تحتية خالية من الأخطاء.' },
              { icon: Globe, title: 'جاهزية الحافة العالمية', desc: 'يخدم من خلال أكثر من 100 عقدة عالمية لتحميل فوري.' }
            ].map((item, i) => (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:border-brand-green text-center">
                    <div className="w-16 h-16 bg-brand-mint/50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-green transition-all duration-500 shadow-sm mx-auto">
                        <item.icon className="h-8 w-8 text-brand-green group-hover:text-brand-navy transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl font-black text-brand-navy mb-4 tracking-tighter uppercase">{item.title}</h4>
                    <p className="text-slate-500 text-[11px] font-bold leading-relaxed">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="bg-brand-green rounded-[5rem] p-20 md:p-40 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
                <div className="absolute inset-0 bg-white/10 opacity-30 blur-3xl rounded-full translate-y-1/2" />
                <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.85]">
                    انضم إلى <br /> <span className="uppercase">عصر الأصول.</span>
                </h2>
                <p className="text-xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                    نحن نستقبل مشروعين بناء فقط كل شهر لضمان تسليم متميز وشخصي. هل أنت المحظوظ؟
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
                >
                    احجز مساحة البناء الخاصة بك
                    <ArrowLeft className="h-6 w-6 text-brand-green" />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
