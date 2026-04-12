'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  ArrowLeft,
  Zap,
  Lock,
  TrendingUp,
  ShieldAlert,
} from 'lucide-react';

const tools = [
  {
    id: 'aeo-generator',
    icon: BrainCircuit,
    badge: 'مجاني',
    badgeColor: 'bg-brand-green text-brand-navy',
    title: 'محرك الانتشار AEO',
    arabicTitle: 'مولّد استعلامات AEO',
    description:
      'أدخل كلمة رئيسية واحدة واحصل فوراً على خريطة انتشار الاستعلامات، نصائح هيكلة المحتوى، ومطالبة جاهزة لـ ChatGPT لبناء مقالاتك الأولى مُحسّنة لمحركات الإجابة.',
    href: '/tools/aeo-generator/',
    features: [
      'خريطة استعلامات Fan-Out لـ AEO',
      'مطالبة جاهزة للنسخ إلى ChatGPT',
      'استراتيجية تقطيع المحتوى',
      'فلاتر التحقق من الاسترداد',
    ],
    status: 'live',
  },
  {
    id: 'aeo-auditor',
    icon: ShieldAlert,
    badge: 'نشط الآن',
    badgeColor: 'bg-brand-green text-brand-navy',
    title: 'مدقق الهلوسة AEO',
    arabicTitle: 'AEO Competitor Auditor',
    description:
      'حلل محتوى منافسيك، استخرج نقاط قوتهم (USPs)، واكتشف الفجوات المعرفية (Hallucinations) التي يتركها الذكاء الاصطناعي في إجاباته عنهم لتحسين ظهورك.',
    href: '/tools/aeo-auditor',
    features: [
      'استخراج ميزات المنافسين (USPs)',
      'صيد الهلوسة (Hallucination Hunting)',
      'توليد فقرات الاستشهاد (Citable Chunks)',
      'تحليل فجوات المصداقية AI',
    ],
    status: 'live',
  },
  {
    id: 'roi-calculator',
    icon: TrendingUp,
    badge: 'قريباً',
    badgeColor: 'bg-slate-200 text-slate-500',
    title: 'حاسبة عائد الاستثمار',
    arabicTitle: 'ROI Calculator',
    description:
      'احسب العائد المتوقع من حملاتك الرقمية بناءً على بياناتك الفعلية. أدخل ميزانيتك وقطاعك وحجم السوق لتحصل على توقعات دقيقة.',
    href: '#',
    features: [
      'تحليل العائد حسب القطاع',
      'مقارنة القنوات التسويقية',
      'توقعات 12 شهراً',
      'تقرير PDF قابل للتنزيل',
    ],
    status: 'coming-soon',
  },
  {
    id: 'schema-builder',
    icon: Zap,
    badge: 'قريباً',
    badgeColor: 'bg-slate-200 text-slate-500',
    title: 'مُنشئ Schema',
    arabicTitle: 'Schema Builder',
    description:
      'أنشئ JSON-LD Schema احترافياً لأي نوع من الصفحات (LocalBusiness، FAQ، Service) في ثوانٍ دون كتابة سطر كود واحد.',
    href: '#',
    features: [
      'كل أنواع Schema المطلوبة',
      'كود JSON-LD جاهز للنسخ',
      'تحقق فوري من الصحة',
      'دعم Schema العربي',
    ],
    status: 'coming-soon',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ToolsPage() {
  return (
    <div className="pt-24 bg-white overflow-hidden min-h-screen text-right">

      {/* Status Bar */}
      <div className="bg-brand-navy border-b border-white/5 py-8 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-12">
            <h2 className="text-[11px] text-slate-400 max-w-5xl leading-relaxed font-black uppercase tracking-wider">
              أدوات مجانية من ون تو فايف كليك مصممة لمساعدتك على فهم وتطبيق{' '}
              <span className="text-white">AEO و GEO</span> مباشرةً.
            </h2>
            <div className="h-4 w-px bg-white/10 flex-shrink-0" />
            <div className="flex items-center gap-3 flex-shrink-0">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">أدوات_مجانية</p>
              <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-brand-navy py-32 lg:py-48 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-white/10 backdrop-blur-md">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span>أدوات مجانية — حصرياً من ون تو فايف كليك</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter">
              أدوات <br />
              <span className="text-brand-green uppercase">الذكاء التسويقي.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
              استخدم أدواتنا المبنية بمعايير AEO 2026 لتحليل وبناء وتحسين محتواك الرقمي{' '}
              <span className="text-white">مجاناً وبدون تسجيل.</span>
            </p>
            <Link
              href="/tools/aeo-generator/"
              className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-green/20 gap-3 group"
            >
              جرّب محرك AEO الآن
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-green/3 blur-[200px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
              الأدوات <br />
              <span className="text-brand-green uppercase">المتاحة.</span>
            </h2>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
              مبنية بنا — مجانية لك — جاهزة للاستخدام الفوري
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isLive = tool.status === 'live';

              return (
                <motion.div key={tool.id} variants={itemVariants} className="group">
                  <div className={`h-full relative rounded-[3.5rem] border transition-all duration-500 overflow-hidden text-right
                    ${isLive
                      ? 'bg-brand-navy border-brand-green shadow-2xl shadow-brand-navy/20'
                      : 'bg-white border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    {/* Top glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />

                    <div className="p-12 relative z-10">
                      {/* Badge */}
                      <div className="flex items-start justify-between flex-row-reverse mb-10">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-500
                          ${isLive ? 'bg-brand-green/20 group-hover:bg-brand-green' : 'bg-slate-100'}`}
                        >
                          <Icon className={`h-8 w-8 transition-colors duration-500
                            ${isLive ? 'text-brand-green group-hover:text-brand-navy' : 'text-slate-400'}`}
                          />
                        </div>
                        <span className={`text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full ${tool.badgeColor}`}>
                          {tool.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3
                        ${isLive ? 'text-brand-green' : 'text-slate-400'}`}
                      >
                        {tool.arabicTitle}
                      </p>
                      <h3 className={`text-2xl md:text-3xl font-black mb-6 tracking-tighter
                        ${isLive ? 'text-white' : 'text-brand-navy'}`}
                      >
                        {tool.title}
                      </h3>
                      <p className={`leading-relaxed font-bold text-sm mb-10
                        ${isLive ? 'text-slate-400' : 'text-slate-500'}`}
                      >
                        {tool.description}
                      </p>

                      {/* Feature list */}
                      <ul className="space-y-3 mb-12">
                        {tool.features.map((feat, fi) => (
                          <li key={fi} className={`flex items-center gap-4 text-[10px] font-black uppercase tracking-widest flex-row-reverse
                            ${isLive ? 'text-slate-300' : 'text-slate-400'}`}
                          >
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                              ${isLive ? 'bg-brand-green/20' : 'bg-slate-100'}`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-brand-green' : 'bg-slate-300'}`} />
                            </div>
                            {feat}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      {isLive ? (
                        <Link
                          href={tool.href}
                          className="flex items-center justify-center gap-3 w-full bg-brand-green text-brand-navy py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-brand-green/20 group"
                        >
                          ابدأ التحليل مجاناً
                          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <div className="flex items-center justify-center gap-3 w-full bg-slate-100 text-slate-400 py-5 rounded-full font-black text-[10px] uppercase tracking-widest cursor-not-allowed">
                          <Lock className="h-4 w-4" />
                          قريباً
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Free */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-10 leading-[0.9] tracking-tighter">
                لماذا <br />
                <span className="text-brand-green uppercase">مجانية؟</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                نؤمن بالقيمة أولاً. نمنحك أدوات حقيقية تجرّب بها إمكاناتنا{' '}
                <span className="text-brand-navy">قبل أن تقرر العمل معنا.</span>
              </p>
              <div className="space-y-6">
                {[
                  { title: 'شفافية كاملة', desc: 'نريدك أن ترى كيف نفكر ونعمل قبل أي التزام مالي.' },
                  { title: 'تعليم حقيقي', desc: 'كل أداة تعلّمك مفهوماً جديداً في AEO و GEO يمكنك تطبيقه فوراً.' },
                  { title: 'اختر بوعي', desc: 'الشركات الواثقة من نفسها تقدم قيمة أولاً. نحن واثقون.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 p-8 border border-slate-100 bg-slate-50 rounded-[2.5rem] hover:border-brand-green transition-colors group flex-row-reverse">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-green transition-colors flex-shrink-0">
                      <Zap className="h-6 w-6 text-brand-green group-hover:text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-black text-brand-navy uppercase tracking-widest text-[10px] mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <div className="space-y-8">
              <div className="bg-brand-navy rounded-[4rem] p-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 justify-end mb-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">الأداة النشطة الآن</p>
                    <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">محرك الانتشار AEO</h3>
                  <p className="text-slate-400 font-bold leading-relaxed mb-10">
                    الأداة الأولى من نوعها باللغة العربية المُصممة خصيصاً لتوليد استعلامات AEO وخرائط المحتوى لمحركات الإجابة الذكية.
                  </p>
                  <Link
                    href="/tools/aeo-generator/"
                    className="inline-flex items-center gap-3 bg-brand-green text-brand-navy px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-green/20 group"
                  >
                    جرّبها مجاناً
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <Link href="/contact/" className="block bg-brand-green rounded-[3rem] p-12 text-center hover:scale-[1.02] transition-all shadow-2xl shadow-brand-green/20 group">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/60 mb-4">هل تريد نتائج أسرع؟</p>
                <p className="text-3xl font-black text-brand-navy tracking-tighter mb-6">اعمل مع خبرائنا</p>
                <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-navy">
                  استشارة مجانية <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="bg-brand-green rounded-[5rem] p-20 md:p-40 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
            <div className="absolute inset-0 bg-white/10 opacity-30 blur-3xl rounded-full translate-y-1/2" />
            <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.85]">
              الذكاء في <br /> متناول يدك.
            </h2>
            <p className="text-xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
              ابدأ بأدواتنا المجانية، ثم اكتشف كيف نحوّل هذه الرؤى إلى نتائج حقيقية لعملك.
            </p>
            <Link
              href="/tools/aeo-generator/"
              className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
            >
              ابدأ مع محرك AEO
              <ArrowLeft className="h-6 w-6 text-brand-green" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
