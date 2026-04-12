'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  MousePointer2,
  Share2,
  Code2,
  PenLine,
  Bot,
  MapPin,
  Star,
  Mail,
  Building2,
  Link2,
  Globe,
  ArrowLeft,
  Zap,
  ChevronLeft,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    category: 'تحسين محركات البحث',
    title: 'السيو & AEO',
    description: 'هيمنة كاملة على جوجل و ChatGPT و Perplexity. نبني أنظمة سلطة موضوعية لا تنتهي صلاحيتها.',
    href: '/services/seo/',
    tag: 'الأكثر طلباً',
    isPopular: true,
    subLinks: [
      { name: 'السيو التقني', href: '/services/seo/technical-seo/' },
      { name: 'السيو الداخلي', href: '/services/seo/on-page-seo/' },
      { name: 'السيو الخارجي', href: '/services/seo/off-page-seo/' },
      { name: 'السيو المحلي', href: '/services/seo/local-seo/' },
      { name: 'AEO / GEO', href: '/services/seo/aeo-geo/' },
    ],
  },
  {
    icon: Globe,
    category: 'تحسين محركات الذكاء الاصطناعي',
    title: 'GEO – تحسين البحث التوليدي',
    description: 'اجعل علامتك التجارية تُستشهد بها في كل محادثة AI. نبني بنية المحتوى التي تتغذى عليها نماذج اللغة.',
    href: '/services/geo/',
    tag: '',
    isPopular: false,
    subLinks: [],
  },
  {
    icon: MousePointer2,
    category: 'الإعلانات المدفوعة',
    title: 'إعلانات جوجل (PPC)',
    description: 'حملات إعلانية B2B مُحكمة تستهدف أصحاب القرار في الرياض وجدة والدمام بأعلى عائد ممكن.',
    href: '/services/ppc/',
    tag: '',
    isPopular: false,
    subLinks: [],
  },
  {
    icon: Share2,
    category: 'السوشيال ميديا',
    title: 'إدارة منصات التواصل',
    description: 'بناء جمهور عضوي وهوية بصرية موحدة عبر إنستغرام، لينكدإن، وتويتر للسوق السعودي.',
    href: '/services/social-media/',
    tag: '',
    isPopular: false,
    subLinks: [],
  },
  {
    icon: Code2,
    category: 'تطوير الويب',
    title: 'مواقع Next.js',
    description: 'مواقع فائقة السرعة بتقنية Next.js مُحسّنة لمحركات البحث من اليوم الأول. أداء Core Web Vitals مثالي.',
    href: '/services/nextjs-development/',
    tag: '',
    isPopular: false,
    subLinks: [
      { name: 'تطوير الويب', href: '/services/web-development/' },
      { name: 'WordPress', href: '/services/wordpress-services/' },
    ],
  },
  {
    icon: PenLine,
    category: 'إنتاج المحتوى',
    title: 'كتابة المحتوى العربي',
    description: 'محتوى B2B متخصص مُحسّن لـ NLP بمعايير AEO 2026 يُقنع البشر ويُستشهد به بواسطة الذكاء الاصطناعي.',
    href: '/services/content-writing/',
    tag: '',
    isPopular: false,
    subLinks: [
      { name: 'استراتيجية المبدعين', href: '/services/creator-strategy/' },
    ],
  },
  {
    icon: Star,
    category: 'إدارة السمعة',
    title: 'السمعة الرقمية',
    description: 'نبني سمعة لا تقهر عبر المراجعات وإدارة الكيانات وتنظيف النتائج السلبية في غوغل.',
    href: '/services/reputation/',
    tag: '',
    isPopular: false,
    subLinks: [],
  },
  {
    icon: MapPin,
    category: 'الحضور المحلي',
    title: 'Google Business Profile',
    description: 'إعداد وتحسين ملفات GBP للسيطرة على نتائج الخرائط والبحث المحلي في مدينتك.',
    href: '/services/gbp/',
    tag: '',
    isPopular: false,
    subLinks: [
      { name: 'الاستشهادات المحلية', href: '/services/citations/' },
    ],
  },
  {
    icon: Mail,
    category: 'التسويق المباشر',
    title: 'البريد والرسائل النصية',
    description: 'أتمتة حملات البريد الإلكتروني والرسائل النصية القصيرة لرعاية العملاء المحتملين وتحويلهم.',
    href: '/services/email-sms-marketing/',
    tag: '',
    isPopular: false,
    subLinks: [],
  },
];

const stats = [
  { value: '300+', label: 'مشروع منجز' },
  { value: '94%', label: 'معدل رضا العملاء' },
  { value: '11x', label: 'متوسط تضاعف عائد الاستثمار' },
  { value: '2026', label: 'جاهزون لعصر الذكاء الاصطناعي' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-white overflow-hidden min-h-screen text-right">

      {/* Status Bar */}
      <div className="bg-brand-navy border-b border-white/5 py-8 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-12">
            <h2 className="text-[11px] text-slate-400 max-w-5xl leading-relaxed font-black uppercase tracking-wider">
              ون تو فايف كليك — وكالة متخصصة في <span className="text-white">AEO / GEO</span> و<span className="text-white">التسويق الرقمي B2B</span> في المملكة العربية السعودية.
            </h2>
            <div className="h-4 w-px bg-white/10 flex-shrink-0" />
            <div className="flex items-center gap-3 flex-shrink-0">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">AI_READY_2026</p>
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
              <span>9 خدمات متكاملة — منصة واحدة</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter">
              خدمات <br />
              <span className="text-brand-green uppercase">تصنع الفرق.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
              من السيو التقني إلى تحسين الذكاء الاصطناعي — كل ما تحتاجه لتهيمن على السوق السعودي رقمياً في 2026.
            </p>
            <div className="flex flex-col sm:flex-row-reverse gap-6 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-green/20 group gap-3"
              >
                ابدأ استشارتك المجانية
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/portfolio/"
                className="inline-flex items-center justify-center border border-white/10 text-white px-12 py-6 rounded-full hover:bg-white/5 transition-all font-black text-[10px] uppercase tracking-widest backdrop-blur-sm"
              >
                شاهد أعمالنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter mb-3">{stat.value}</div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/3 blur-[200px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
              خدماتنا <br />
              <span className="text-brand-green uppercase">الكاملة.</span>
            </h2>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] max-w-xl mx-auto">
              كل خدمة مصممة لتحقيق نتائج قابلة للقياس في السوق السعودي
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative group ${service.isPopular ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <Link href={service.href} className="block h-full">
                    <div className={`h-full p-12 rounded-[3.5rem] border transition-all duration-500 relative overflow-hidden text-right
                      ${service.isPopular
                        ? 'bg-brand-navy border-brand-green shadow-2xl shadow-brand-navy/20'
                        : 'bg-white border-slate-100 hover:border-brand-green hover:shadow-2xl'
                      }`}
                    >
                      {/* Background glow */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />

                      {/* Popular tag */}
                      {service.isPopular && service.tag && (
                        <div className="absolute top-8 left-8 bg-brand-green text-brand-navy px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                          {service.tag}
                        </div>
                      )}

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 shadow-sm mr-auto ml-0
                        ${service.isPopular ? 'bg-brand-green/20 group-hover:bg-brand-green' : 'bg-brand-mint/50 group-hover:bg-brand-green'}`}
                      >
                        <Icon className={`h-8 w-8 transition-colors duration-500
                          ${service.isPopular ? 'text-brand-green group-hover:text-brand-navy' : 'text-brand-green group-hover:text-brand-navy'}`}
                        />
                      </div>

                      {/* Category */}
                      <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3
                        ${service.isPopular ? 'text-brand-green' : 'text-brand-green'}`}
                      >
                        {service.category}
                      </p>

                      {/* Title */}
                      <h3 className={`text-2xl md:text-3xl font-black mb-6 tracking-tighter transition-colors
                        ${service.isPopular
                          ? 'text-white group-hover:text-brand-green'
                          : 'text-brand-navy group-hover:text-brand-green'
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className={`leading-relaxed font-bold text-sm mb-8
                        ${service.isPopular ? 'text-slate-400' : 'text-slate-500'}`}
                      >
                        {service.description}
                      </p>

                      {/* Sub links */}
                      {service.subLinks.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-8 justify-end">
                          {service.subLinks.map((sub, si) => (
                            <span key={si} className={`text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border
                              ${service.isPopular
                                ? 'border-white/10 text-slate-400 hover:border-brand-green hover:text-brand-green'
                                : 'border-slate-200 text-slate-400 hover:border-brand-green hover:text-brand-green'
                              } transition-colors`}
                            >
                              {sub.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* CTA Arrow */}
                      <div className={`flex items-center justify-end gap-2 text-[10px] font-black uppercase tracking-widest transition-colors
                        ${service.isPopular ? 'text-brand-green' : 'text-brand-navy group-hover:text-brand-green'}`}
                      >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1.5 transition-transform" />
                        <span>اكتشف الخدمة</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-10 leading-[0.9] tracking-tighter">
                لماذا نحن <br />
                <span className="text-brand-green uppercase">الاختيار الصحيح؟</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                لسنا وكالة تقليدية. نحن شركاء نمو يركزون على{' '}
                <span className="text-brand-navy">الأثر الحقيقي القابل للقياس</span>{' '}
                لأعمالك في السوق السعودي.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'متخصصون في AEO/GEO', desc: 'الوكالة الأولى في السعودية المتخصصة في تحسين محركات البحث التوليدية.' },
                  { title: 'نتائج موثقة', desc: 'عائد استثمار متوسط 11x مع تقارير شفافة ومتتبعة شهرياً.' },
                  { title: 'فريق محلي متخصص', desc: 'خبراء يفهمون السوق السعودي واللغة العربية وخصوصيات القرار الشرائي B2B.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 p-8 border border-slate-100 bg-slate-50 rounded-[2.5rem] hover:border-brand-green transition-colors group flex-row-reverse text-right">
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

            {/* Locations */}
            <div className="space-y-8">
              <div className="bg-brand-navy rounded-[4rem] p-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green mb-8">مراكز خدماتنا</p>
                <h3 className="text-4xl font-black text-white mb-12 tracking-tighter">نغطي المملكة كاملة</h3>
                <div className="space-y-4">
                  {[
                    { city: 'الرياض', href: '/locations/riyadh/' },
                    { city: 'جدة', href: '/locations/jeddah/' },
                    { city: 'الدمام', href: '/locations/dammam/' },
                  ].map((loc, i) => (
                    <Link key={i} href={loc.href} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-green hover:bg-white/10 transition-all group">
                      <ChevronLeft className="h-5 w-5 text-brand-green group-hover:-translate-x-1 transition-transform" />
                      <div className="flex items-center gap-4 flex-row-reverse">
                        <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse" />
                        <span className="font-black text-white text-lg">{loc.city}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/contact/" className="block bg-brand-green rounded-[3rem] p-12 text-center hover:scale-[1.02] transition-all shadow-2xl shadow-brand-green/20 group">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/60 mb-4">الخطوة التالية</p>
                <p className="text-3xl font-black text-brand-navy tracking-tighter mb-6">احصل على استشارتك المجانية</p>
                <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-navy">
                  ابدأ الآن <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
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
              ابدأ دورة <br /> نموك الآن.
            </h2>
            <p className="text-xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
              انضم إلى مئات الشركات التي حولت حضورها الرقمي مع ون تو فايف كليك في السعودية.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
            >
              ابدأ مشروعك معنا
              <ArrowLeft className="h-6 w-6 text-brand-green" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
