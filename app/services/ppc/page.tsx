'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MousePointerClick,
  Target,
  Search,
  Zap,
  BarChart3,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Database,
  Users,
  Cpu,
  ArrowLeft
} from 'lucide-react';

const coreEngines = [
  {
    title: 'التصنيف الدقيق والإعلانات',
    desc: 'حملات إعلانية مستهدفة على Meta وجوجل مدمجة مع استراتيجيات بحث عالية النية لتوليد تدفق عملاء محتملين. نحن نتجاوز نموذج SMMA القديم من خلال اكتساب عملاء مستعدين فعلياً للتحول.',
    icon: Target,
    color: 'bg-emerald-600'
  },
  {
    title: 'وكلاء صوت Retell AI',
    desc: 'الاتصال بالعميل المحتمل في غضون 5 دقائق يزيد التحويلات بنسبة 500%. نحن ننشر وكلاء صوت AI واقعيين للغاية مدعومين بـ Retell AI للاتصال بالعملاء في غضون 3 دقائق وحجزهم مباشرة في تقويمك.',
    icon: MessageCircle,
    color: 'bg-blue-600'
  },
  {
    title: 'نظام نصوص المبيعات',
    desc: 'معظم الوكالات تتوقف عند العميل المحتمل وتتركك تفشل في الإغلاق. نحن نمتص عنق الزجاجة الأخير: الإغلاق. نعيد بناء نصوص وبروتوكولات المبيعات بالكامل باستخدام أطر عمل ذكاء اصطناعي قائمة على البيانات.',
    icon: Database,
    color: 'bg-orange-600'
  },
  {
    title: 'بروتوكول تنشيط قاعدة البيانات',
    desc: 'نسد ثقوب نظام إدارة العملاء (CRM). تنشيط عملائك التاريخيين الخاملين عبر رسائل GoHighLevel النصية ومكالمات الذكاء الاصطناعي لتحصيل إيرادات فورية غير مستغلة دون إنفاق إعلاني.',
    icon: Zap,
    color: 'bg-emerald-500'
  }
];

const smartOffering = [
  { label: 'قابل للقياس', value: 'مكالمات محجوزة' },
  { label: 'الإطار الزمني', value: 'سرعة 30 يوماً' },
  { label: 'منطق الاستثمار', value: 'هدف 1:10 ROI' }
];

export default function AIAdPage() {
  return (
    <div className="pt-24 overflow-hidden text-right bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-navy/5 via-transparent to-brand-green/5" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-navy/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-brand-navy/5 text-brand-navy px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-brand-navy/10 backdrop-blur-sm">
                <Cpu className="h-4 w-4" />
                <span>أفضل وكالة إعلانات ممولة في السعودية لعام 2026</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-brand-navy mb-8 leading-[0.85] tracking-tighter">
                نموذج وكالة <br />
                <span className="text-brand-green uppercase">الذكاء في الرياض وجدة.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                نحن نستبدل عملية SMMA المعطلة. بدلاً من مجرد جلب عملاء محتملين والأمل في اتصالك بهم، نقوم بتشغيل الإعلانات، ونشر <span className="text-brand-navy underline">متصل Retell AI</span> لحجزهم فوراً، وتحسين عملية مبيعاتك لضمان عملاء جدد.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-green/20 group gap-3"
              >
                احصل على تدقيق نمو مخصص
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Offering Logic */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 tracking-tighter leading-tight">إطار عمل ROI الذكي.</h2>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">لا نعتمد على الغموض. نعتمد على نتائج قابلة للقياس.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {smartOffering.map(stat => (
              <div key={stat.label} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm text-center group hover:border-brand-green transition-colors">
                <div className="text-4xl font-black text-brand-navy mb-4 group-hover:scale-105 transition-transform tracking-tight uppercase leading-tight">{stat.value}</div>
                <div className="text-[10px] font-black text-brand-green uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Win Protocols: Revenue Recovery (Easy Mode) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-brand-green/5 rounded-full blur-[120px]" />
              <div className="relative bg-brand-navy rounded-[4rem] p-16 text-white shadow-3xl overflow-hidden border border-white/5 group">
                <div className="absolute inset-0 bg-brand-green/5 opacity-10 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-12 flex-row-reverse justify-end">
                    <Zap className="h-6 w-6 text-brand-green" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">بروتوكولات الوضع السهل لعام 2026</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-[0.9]">استرداد فوري <br /> <span className="text-brand-green">للإيرادات.</span></h3>

                  <div className="space-y-8">
                    <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors text-right">
                      <div className="flex justify-between items-start mb-6 flex-row-reverse">
                        <h4 className="text-xl font-black uppercase tracking-widest text-[10px]">الرد النصي على المكالمات الفائتة</h4>
                        <div className="px-4 py-1.5 bg-brand-green/20 text-brand-green rounded-full text-[8px] font-black uppercase">مفعل أتوماتيكياً</div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 font-bold">التقاط أكثر من 1000 دولار شهرياً تخسرها عندما لا تستطيع الرد على الهاتف. نظامنا يرسل نصاً في غضون 3 ثوانٍ، ليبقي العميل مهتماً.</p>
                    </div>

                    <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors text-right">
                      <div className="flex justify-between items-start mb-6 flex-row-reverse">
                        <h4 className="text-xl font-black uppercase tracking-widest text-[10px]">سرعة العميل في 5 دقائق</h4>
                        <div className="px-4 py-1.5 bg-brand-green/20 text-brand-green rounded-full text-[8px] font-black uppercase">بروتوكول الساعة الذهبية</div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed font-bold">الاستجابة في أقل من 300 ثانية تزيد التحويل بنسبة 900%. وكلاؤنا الآليون يشتبكون مع العملاء فوراً وهم لا يزالون مهتمين.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pr-10 text-right">
              <div className="inline-block bg-brand-mint text-brand-green px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-brand-green/10">
                استثمار، وليس تكلفة
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-10 leading-[0.85] tracking-tighter uppercase">
                النتائج أهم من البيانات. <br />
                <span className="text-brand-green">العائد هو المقياس.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                عملاؤك لا يهتمون بشهاداتنا، وكذلك أنت. ما يهمك هو <span className="text-brand-navy underline transition-colors hover:text-brand-green cursor-pointer">المال في البنك.</span>
              </p>
              <div className="grid grid-cols-2 gap-8 mb-16 flex-row-reverse">
                <div className="text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-brand-green transition-all">
                  <div className="text-3xl font-black text-brand-navy tracking-tight mb-2 group-hover:scale-110 transition-transform">1:10</div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">أقل عائد مستهدف</div>
                </div>
                <div className="text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-brand-green transition-all">
                  <div className="text-3xl font-black text-brand-green tracking-tight mb-2 group-hover:scale-110 transition-transform">فوري</div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">نشر النظام</div>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-3 text-brand-navy font-black uppercase tracking-widest text-[11px] group">
                <span>تمكين الاسترداد الفوري</span>
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform text-brand-green" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engines Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-10">
            {coreEngines.map((engine, i) => (
              <div key={engine.title} className="p-12 bg-white rounded-[3.5rem] border border-slate-100 group relative overflow-hidden text-right hover:shadow-2xl transition-all duration-500 hover:border-brand-green">
                <div className={`w-16 h-16 ${engine.color} rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:rotate-6 transition-transform mr-auto ml-0`}>
                  <engine.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">بروتوكول 0{i + 1}</div>
                <h3 className="text-2xl font-black text-brand-navy mb-6 leading-tight tracking-tighter">{engine.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-bold">{engine.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Integration */}
      <section className="py-32 bg-white border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-green/10 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-brand-navy rounded-[4rem] p-16 text-white shadow-3xl overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-brand-green/5 opacity-10 pointer-events-none" />
                <div className="relative z-10 text-right">
                  <div className="flex justify-between items-center mb-16 flex-row-reverse">
                    <span className="text-[10px] font-black uppercase text-brand-green tracking-widest border border-brand-green/30 px-6 py-2 rounded-full backdrop-blur-sm">دراسة حالة: نموذج البناء الحديث</span>
                    <Zap className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-4xl font-black leading-tight mb-12 text-white tracking-tighter">ترميم المباني <br /> <span className="text-white/40">محرك المقاولات</span></h3>

                  <div className="space-y-8 mb-16">
                    <div className="flex justify-between items-end border-b border-white/10 pb-6 flex-row-reverse">
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">مقياس الاكتساب</span>
                      <span className="text-3xl font-black text-brand-green">20$/عميل</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-6 flex-row-reverse">
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">الإنفاق الإعلاني</span>
                      <span className="text-3xl font-black text-white">1,000$/شهر</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-6 flex-row-reverse">
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">العائد السنوي المتوقع</span>
                      <span className="text-3xl font-black text-white">10X+</span>
                    </div>
                  </div>

                  <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-slate-400 text-[10px] leading-relaxed font-black uppercase tracking-widest text-right">
                    "حددنا أن شركات المقاولات تطلق على نفسها 'ترميم' وليس 'بناء'. من خلال التحسين للنية المحلية، استولينا على استفسارات إصلاح الجدران عالية التكلفة بشكل فوري."
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right lg:pr-10">
              <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-12 leading-[0.85] tracking-tighter">
                تخطيط <br />
                <span className="text-brand-green uppercase">النية الاستراتيجية.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                محرك نمو الذكاء الاصطناعي لدينا يحسب <span className="text-brand-navy">منطق المصدر</span>. نحن لا "نشغل إعلانات" فحسب؛ بل نهندس فخاخاً سلوكية محددة لصناعات الخدمات عالية التكلفة.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-8 group flex-row-reverse">
                  <div className="p-6 bg-brand-mint rounded-[2rem] group-hover:bg-brand-green transition-all shadow-sm flex-shrink-0">
                    <Search className="h-8 w-8 text-brand-green group-hover:text-brand-navy" />
                  </div>
                  <div>
                    <h4 className="font-black text-brand-navy uppercase tracking-widest text-[10px] mb-4">بروتوكول جوجل الوارد</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold">التقاط أولئك الذين يبحثون بنشاط عن حل لمشكلة مؤلمة وملحة. نية أعلى. تحويل فوري.</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group border-t border-slate-100 pt-10 flex-row-reverse">
                  <div className="p-6 bg-brand-mint rounded-[2rem] group-hover:bg-brand-green transition-all shadow-sm flex-shrink-0">
                    <Zap className="h-8 w-8 text-brand-green group-hover:text-brand-navy" />
                  </div>
                  <div>
                    <h4 className="font-black text-brand-navy uppercase tracking-widest text-[10px] mb-4">سرعة Meta الصادرة</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold">تعطيل الأنماط. وضع عرضك "الممل" أمام شخص لم يكن يعلم أنه يحتاجه حتى رأى منطق العائد الخاص بنا.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Model */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-block bg-brand-mint text-brand-green px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-brand-green/10">
              نموذج المنطقة المثالية
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 leading-[0.85] tracking-tighter uppercase">بروتوكولات الاستثمار.</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-bold leading-relaxed">
              نحن لا نلعب في ساحة "التسويق المعلب" الرخيص. نحن نشارك قادة الخدمات المحليين الذين يحققون مليون إلى 10 ملايين دولار سنوياً ويطالبون بنتائج متميزة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm group hover:border-brand-green transition-all text-right">
              <div className="flex justify-between items-start mb-12 flex-row-reverse">
                <div>
                  <h3 className="text-3xl font-black text-brand-navy mb-3 tracking-tighter uppercase leading-none">سباق PIFF الـ 90 يوماً</h3>
                  <p className="text-[10px] font-black text-slate-400 border-b border-brand-green/20 pb-2 inline-block uppercase tracking-widest">بنية تحتية مدفوعة بالكامل</p>
                </div>
                <div className="text-left">
                  <div className="text-5xl font-black text-brand-navy tracking-tighter">5K$</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">لـ 90 يوماً من النمو</div>
                </div>
              </div>
              <ul className="space-y-6 mb-16">
                {['إعداد إعلانات Meta/Google', 'تكامل وكيل صوت AI مخصص', 'أتمتة حجوزات في 3 دقائق', 'إيقاظ نصوص المبيعات'].map(f => (
                  <li key={f} className="flex items-center gap-4 text-sm font-bold text-slate-600 flex-row-reverse">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center py-6 bg-brand-navy text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-brand-green hover:text-brand-navy transition-all shadow-xl shadow-brand-navy/10">تأمين الجوهر</Link>
            </div>

            <div className="bg-brand-navy p-12 md:p-16 rounded-[4rem] border border-white/5 shadow-3xl relative overflow-hidden group text-right">
              <div className="absolute top-0 left-0 p-8">
                <Zap className="h-10 w-10 text-brand-green animate-pulse" />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12 flex-row-reverse">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase leading-none">الاشتراك + حصة الربح</h3>
                    <p className="text-[10px] font-black text-brand-green/50 uppercase tracking-widest">مشاركة في نجاح النمو</p>
                  </div>
                  <div className="text-left text-white">
                    <div className="text-5xl font-black tracking-tighter">1.5K$</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">/شهرياً + % من الأرباح</div>
                  </div>
                </div>
                <ul className="space-y-6 mb-16">
                  {['جميع ميزات المحرك الأساسية', 'ضبط متواصل للمتصل الآلي', 'تحسين تنشيط قاعدة البيانات', 'مراقبة أداء القمع العميق'].map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm font-bold text-slate-400 flex-row-reverse">
                      <CheckCircle className="h-5 w-5 text-brand-green" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-6 bg-brand-green text-brand-navy rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-brand-green/20">تفعيل السرعة</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-12 tracking-tighter leading-[0.85] uppercase">تجاهل الضجيج. <br /> ضاعف الأرقام.</h2>
            <p className="text-xl text-brand-navy/70 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                احجز تدقيق نمو الذكاء الاصطناعي الخاص بك اليوم. إذا لم نجد على الأقل 5 ثغرات في الإيرادات الخفية، فالتدقيق علينا.
            </p>
            <Link
                href="/contact"
                className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
            >
                بدء الاكتساب المدفوع
                <ArrowLeft className="h-6 w-6 text-brand-green" />
            </Link>
        </div>
      </section>
    </div>
  );
}
