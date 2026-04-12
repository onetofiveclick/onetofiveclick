'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Share2,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Search,
  Zap,
  Shield,
  Network,
  BarChart3,
  DollarSign,
  Cpu,
  ArrowLeft
} from 'lucide-react';

const socialSEOPlatforms = [
  {
    name: 'سيطرة البحث B2C',
    description: 'Instagram و TikTok و YouTube تعالج مليارات عمليات البحث يومياً. نحن نهندس فيديوهاتك لالتقاط النية البصرية قبل أن يفتح المستخدمون جوجل.',
    icon: Search,
    color: 'bg-blue-600'
  },
  {
    name: 'سيو شبكات B2B',
    description: 'تحسين LinkedIn و YouTube لصناع القرار ذوي النية العالية. الإجابة على الأسئلة التشغيلية المعقدة مباشرة في التغذية الإخبارية (Feed).',
    icon: Network,
    color: 'bg-blue-500'
  },
  {
    name: 'مرجعية محركات AI',
    description: 'نحن نهندس بصمتك الاجتماعية على منصات مثل Reddit و YouTube بحيث يتم الاستشهاد بها من قبل ChatGPT و Perplexity.',
    icon: Cpu,
    color: 'bg-gray-900'
  }
];

const discoveryProtocol = [
  {
    title: 'النية القائمة على السؤال',
    desc: 'الناس يبحثون بجمل كاملة ("كيف أصلح..."). نحن نرسم خرائط لمحتواك لتتطابق مع الأسئلة الدقيقة التي يكتبها المستخدمون.'
  },
  {
    title: 'Metadata قابلة للفهرسة',
    desc: 'الخوارزميات تتصفح المحتوى. نحن نهندس العناوين والتعليقات التوضيحية والنصوص التي تظهر على الشاشة حتى يتمكن الذكاء الاصطناعي من استخراج المعنى فورا.'
  },
  {
    title: 'معاملات أصلية',
    desc: 'المنصات تكافئ البقاء. نحن نستخدم نماذج العملاء الأصلية وتدفقات الرسائل المباشرة (ManyChat) لإبقاء المستخدمين داخل التطبيق، مما يعزز وصولك العضوي.'
  },
  {
    title: 'اكتشاف التغذية الإخبارية',
    desc: 'نحن لا ننتظر البحث. نحن نصنع محتوى يقاطع التصفح ويحل المشكلات قبل أن يدرك المستخدمون حاجتهم إليها.'
  }
];

export default function SocialMediaPage() {
  return (
    <div className="pt-24 bg-white overflow-hidden text-right">
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
                <Search className="h-4 w-4" />
                <span>أفضل سيو وسائل تواصل اجتماعي في السعودية 2026</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-brand-navy mb-8 leading-[0.85] tracking-tighter">
                البـحث <br />
                <span className="text-brand-green uppercase">الاجتماعـي في السعودية.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                المنصات الاجتماعية هي محركات البحث الجديدة في المملكة. نحن نهندس محتواك للإجابة على الأسئلة الدقيقة التي يكتبها جمهورك في الرياض وجدة في Instagram و TikTok و YouTube <span className="text-brand-navy underline transition-colors hover:text-brand-green cursor-pointer uppercase">قبل أن يفتحوا جوجل.</span>
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-navy text-white px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-navy/20 group gap-3"
              >
                بدء سيو التواصل الاجتماعي
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform text-brand-green" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Strategy Grid */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 text-right">
            <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 tracking-tighter leading-tight uppercase">أفق البحث الحديث</h2>
            <p className="text-[10px] text-brand-green font-black uppercase tracking-[0.3em]">طابق منصتك مع نية البحث الخاصة بجمهورك.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {socialSEOPlatforms.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:border-brand-green transition-all group text-right">
                  <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:rotate-6 transition-transform mr-auto ml-0`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy mb-6 leading-tight tracking-tighter uppercase">{p.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-bold">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Discovery Protocol */}
      <section className="py-32 bg-white overflow-hidden text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-mint opacity-20 rounded-full blur-3xl" />
              <div className="relative bg-brand-navy rounded-[4.5rem] p-16 text-white shadow-3xl border border-white/5">
                <div className="flex justify-between items-center mb-16 flex-row-reverse">
                  <h3 className="text-4xl font-black tracking-tighter leading-none text-white">اكـتشاف <br /> التغـذية</h3>
                  <TrendingUp className="h-16 w-16 text-brand-green animate-pulse" />
                </div>
                <div className="space-y-8">
                  {discoveryProtocol.map((item, i) => (
                    <div key={i} className="flex items-start gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 group hover:bg-white/10 transition-colors flex-row-reverse">
                      <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shrink-0 font-black text-brand-navy text-xs">0{i + 1}</div>
                      <div className="text-right">
                        <h4 className="font-black text-white uppercase text-[11px] tracking-widest mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed font-bold">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-10 leading-[0.85] tracking-tighter">
                أنـت تفـوز فـي <br />
                <span className="text-brand-green">الخوارزمية.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                المحتوى غير المهيكل غير مرئي. نحن نعامل كل قطعة من المحتوى الاجتماعي كأصل قابل للبحث، ونحسن التعليقات التوضيحية والنصوص على الشاشة والكلمات المنطوقة حتى تجيب على المشكلات <span className="text-brand-navy underline transition-colors hover:text-brand-green cursor-pointer uppercase">على الفور في مكانها</span>.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-16 flex-row-reverse">
                <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center group hover:border-brand-green transition-all">
                  <div className="text-4xl font-black text-brand-navy mb-2 tracking-tighter uppercase group-hover:scale-105 transition-transform">قابلة للفهرسة</div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">استخراج الـ Metadata</p>
                </div>
                <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center group hover:border-brand-green transition-all">
                  <div className="flex items-center justify-center gap-3 mb-2 flex-row-reverse">
                    <div className="text-4xl font-black text-brand-navy tracking-tighter uppercase group-hover:scale-105 transition-transform">عالٍ</div>
                    <Cpu className="h-8 w-8 text-brand-green" />
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">معدل الاستشهاد بـ AI</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 text-brand-navy font-black uppercase tracking-widest text-[11px] group"
                >
                  <span>احتراف اكتشاف التغذية الإخبارية</span>
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform text-brand-green" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social SEO Packages */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-8 tracking-tighter uppercase leading-[0.85]">بـاقـات <span className="text-brand-green">السـيو الاجتماعـي.</span></h2>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] text-center">مصممة للاكتشاف والإيرادات داخل التطبيق.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'أساس البحث الاجتماعي',
                price: '999',
                desc: 'Metadata مهيكلة ومحتوى قائم على الأسئلة للاكتشاف الاجتماعي الأساسي.',
                features: ['8 فيديوهات Reels محسنة للسيو / شهر', 'خريطة استعلام AnswerThePublic', 'تكامل أساسي للرسائل المباشرة', 'تقرير فهرسة شهري'],
                highlight: false
              },
              {
                name: 'محرك الاكتشاف',
                price: '2,499',
                desc: 'سيطرة تامة على الخوارزمية. نحل المشكلات قبل أن يدرك مستخدموك وجودها.',
                features: ['15 فيديو قصير عالي الإشارة', 'نظام رسائل مباشرة متقدم', 'الاستشهاد بالمحتوى في AI', 'تحليل النص على الشاشة', 'مزامنة بحث كل أسبوعين'],
                highlight: true
              },
              {
                name: 'الحلقة اللانهائية',
                price: '4,999',
                desc: 'نظام بيئي مغلق للاستبقاء مصمم لزيادة المعاملات على المنصة.',
                features: ['سيطرة على البحث عبر المنصات', 'تدفقات محادثة مؤتمتة', 'بناء عملية دفع أصلية بالكامل', 'هندسة الاتجاهات التنبؤية', 'دعم ذو أولوية 24/7'],
                highlight: false
              }
            ].map((pkg) => (
              <div key={pkg.name} className={`relative p-12 rounded-[4rem] border transition-all duration-500 text-right ${pkg.highlight ? 'bg-brand-navy text-white border-brand-green shadow-3xl scale-105 z-10' : 'bg-white border-slate-100 hover:border-brand-green'}`}>
                {pkg.highlight && (
                  <div className="absolute -top-5 right-1/2 translate-x-1/2 bg-brand-green text-brand-navy px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    أفضل عائد استثمار
                  </div>
                )}
                <h3 className="text-3xl font-black mb-6 leading-tight tracking-tighter uppercase">{pkg.name}</h3>
                <div className="flex items-baseline mb-10 flex-row-reverse justify-end gap-3">
                  <span className="text-2xl font-black text-brand-green transition-all">$</span>
                  <span className="text-7xl font-black tracking-tighter leading-none">{pkg.price}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest mr-2 ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/شهرياً</span>
                </div>

                <p className={`text-sm mb-12 leading-relaxed font-bold ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>

                <ul className="space-y-6 mb-16">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start gap-4 text-sm font-bold flex-row-reverse justify-end">
                      <CheckCircle className={`h-6 w-6 flex-shrink-0 ${pkg.highlight ? 'text-brand-green' : 'text-brand-green/30'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-6 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-xl ${pkg.highlight ? 'bg-brand-green text-brand-navy hover:scale-105' : 'bg-brand-navy text-white hover:bg-brand-green hover:text-brand-navy'}`}
                >
                  بدء المزامنة
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Native Transactions Section */}
      <section className="py-32 bg-white border-t border-slate-100 text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-[4rem] p-16 lg:p-24 relative overflow-hidden text-white shadow-3xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-white/10 backdrop-blur-md flex-row-reverse">
                  <Zap className="h-4 w-4" />
                  <span>بروتوكول العمل الأصلي</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">
                  معـاملات <br />
                  <span className="text-brand-green">أصـلـية.</span>
                </h2>
                <p className="text-2xl text-slate-400 mb-12 leading-relaxed font-bold">
                  خوارزميات التواصل الاجتماعي تعاقب الروابط الخارجية. نحن نبني <span className="text-white">أنظمة بيئية مغلقة</span> باستخدام أتمتة الرسائل المباشرة والدفع الأصلي حتى تتمكن من تسييل المستخدمين دون محاربة الخوارزمية.
                </p>
                <div className="flex flex-wrap gap-12 text-center sm:text-right mb-16 flex-row-reverse justify-end">
                  <div>
                    <div className="text-4xl font-black text-white tracking-tighter uppercase group-hover:text-brand-green transition-colors">10x</div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">رفع الوصول العضوي</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white tracking-tighter uppercase group-hover:text-brand-green transition-colors">14 يوماً</div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">سرعة الإطلاق</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white tracking-tighter uppercase group-hover:text-brand-green transition-colors">صفر</div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">خروج من المنصة</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-brand-green/20 group"
                >
                  بناء نظام بيئي أصلي
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-green/10 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 border border-white/10 rounded-[4rem] p-12 backdrop-blur-md">
                  <div className="space-y-10">
                    <div className="flex items-center gap-6 flex-row-reverse">
                      <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <DollarSign className="h-8 w-8 text-brand-green" />
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">بروتوكول الإيرادات</p>
                        <p className="text-lg font-black text-white tracking-tighter">تكامل الدفع الأصلي داخل التطبيق</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 flex-row-reverse">
                      <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Users className="h-8 w-8 text-brand-green" />
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">مركز المجتمع</p>
                        <p className="text-lg font-black text-white tracking-tighter">تحويلات ManyChat المباشرة</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 flex-row-reverse">
                      <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Cpu className="h-8 w-8 text-brand-green" />
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">لوجستيات AI</p>
                        <p className="text-lg font-black text-white tracking-tighter">تأهيل العملاء المحتملين تلقائياً</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-32 bg-brand-navy text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { label: 'معدل اكتشاف البحث', value: '+340%', icon: TrendingUp },
              { label: 'تصنيف استشهاد AI', value: 'الأفضل 1%', icon: Search },
              { label: 'إجراءات داخل المنصة', value: '10k+', icon: Users },
              { label: 'استبقاء التغذية', value: 'عالٍ', icon: Shield }
            ].map(stat => (
              <div key={stat.label} className="p-10 border border-white/10 rounded-[3rem] bg-white/5 hover:border-brand-green transition-all group">
                <stat.icon className="h-10 w-10 text-brand-green mx-auto mb-8 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-black mb-3 tracking-tighter uppercase leading-none">{stat.value}</div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-40 bg-brand-green relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-black text-brand-navy mb-12 tracking-tighter uppercase leading-[0.85]">قـم بتوسيع <br /> قـدرة الاكتشـاف.</h2>
          <p className="text-2xl text-brand-navy/70 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
            توقف عن مقاطعة الناس. ابدأ بكونك الحل الذي يبحثون عنه بالفعل على Instagram و TikTok و YouTube.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
          >
            بدء الاستراتيجية الآن
            <ArrowLeft className="h-6 w-6 text-brand-green" />
          </Link>
        </div>
      </section>
    </div>
  );
}
