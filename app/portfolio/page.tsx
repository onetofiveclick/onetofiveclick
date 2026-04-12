'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  TrendingUp,
  Zap,
  BarChart3,
  Target,
  ArrowLeft, 
  ArrowRight, 
  Search, 
  Globe,
  Cpu,
  Star,
  CheckCircle,
  Map
} from 'lucide-react';

const projects = [
  {
    title: 'الهيمنة المتعددة المواقع',
    client: 'مجموعة طب الأسنان الوطنية',
    category: 'السمعة وصدارة الخرائط',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80',
    results: '+300% حجم المراجعات',
    description: 'تحسين إدارة السمعة عبر 45 عيادة، مما أدى إلى تقييم متوسط 4.8 وتصدر نتائج البحث في جميع مناطق الخدمة.',
    color: 'brand-navy shadow-brand-navy/10'
  },
  {
    title: 'محرك السلطة المحلية',
    client: 'مكتب المحاماة النخبة',
    category: 'تجميع الكلمات حسب الأحياء',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    results: '4.5x عملاء محتملين/شهر',
    description: 'بناء محرك محتوى محلي مخصص يسيطر على عمليات البحث القانونية الإقليمية ويستهدف المستخدمين في أكثر من 15 حياً تجارياً.',
    color: 'brand-green shadow-brand-green/10'
  },
  {
    title: 'مركز نمو الامتياز',
    client: 'امتياز فيتنس فيرست',
    category: 'الإشارات والدقة',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    results: 'مزامنة 100% للإشارات',
    description: 'تصحيح أكثر من 12,000 إشارة غير متسقة مما أدى إلى فتح آفاق كبيرة لظهور البحث وبناء ثقة العملاء.',
    color: 'brand-navy shadow-brand-navy/10'
  },
  {
    title: 'مسرع التصنيف المحلي',
    client: 'أبيكس لخدمات التكييف',
    category: 'استراتيجية سيو محلي',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    results: 'المركز الأول في الخرائط',
    description: 'أتمتة تحسين الملفات المحلية لتأمين المركز الأول لعبارات عالية القيمة مثل "إصلاح مكيفات طارئ" خلال 60 يوماً.',
    color: 'brand-green shadow-brand-green/10'
  }
];

export default function PortfolioPage() {
  return (
    <div className="pt-16 bg-white overflow-hidden min-h-screen text-right">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden text-center bg-brand-navy">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-green/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-white/10 backdrop-blur-md">
              <Star className="h-4 w-4 fill-current" />
              <span>نتائج محلية مثبتة</span>
            </div>
            <h1 className="text-5xl md:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
              النجاح في البحث <br />
              <span className="text-brand-green">على نطاق واسع.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              نحن نحقق نمواً ملموساً في الإيرادات من خلال أطر السيو المحلي القوية ومحركات إدارة السمعة الاحترافية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-20 gap-8">
                <div className="max-w-xl text-right">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-4 tracking-tighter">سجل الأداء لدينا</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">تصفح أحدث قصص نجاحنا في المملكة.</p>
                </div>
                <div className="flex gap-2 flex-row-reverse">
                    {['الكل', 'السمعة', 'سيو', 'إعلانات'].map((cat) => (
                        <button key={cat} className="px-8 py-3 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-brand-green hover:text-brand-green transition-all">
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-brand-mint/20 rounded-[4rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 text-right"
              >
                <div className="relative h-[450px] overflow-hidden m-4 rounded-[3rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 right-10">
                    <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-4 border border-white/20 inline-block">
                      {project.category}
                    </div>
                    <h3 className="text-4xl font-black text-white leading-none tracking-tighter">{project.title}</h3>
                  </div>
                </div>

                <div className="p-12 pt-8">
                  <div className="flex items-center justify-between mb-8 flex-row-reverse">
                    <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{project.client}</p>
                        <div className="flex items-center gap-2 flex-row-reverse text-brand-green font-black text-sm uppercase tracking-widest">
                            <TrendingUp className="h-4 w-4" />
                            {project.results}
                        </div>
                    </div>
                    <Link
                        href="/contact"
                        className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:text-brand-navy transition-all group/btn shadow-sm"
                    >
                        <ArrowLeft className="h-6 w-6 group-hover/btn:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-4 border-t border-slate-100 pt-8 flex-row-reverse">
                    {['تتبع التصنيف', 'تنظيف الإشارات', 'تدقيق GMB'].map((tag) => (
                        <span key={tag} className="flex items-center gap-1 flex-row-reverse text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            <CheckCircle className="h-3 w-3 text-brand-green" />
                            <span>{tag}</span>
                        </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Authority Stats */}
      <section className="py-24 bg-brand-navy overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="p-8">
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">10k+</div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">حملة ناجحة</p>
            </div>
            <div className="p-8">
              <div className="text-6xl font-black text-brand-green mb-2 tracking-tighter">98%</div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">معدل الاحتفاظ بالعملاء</p>
            </div>
            <div className="p-8">
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">#1</div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">المركز الأول في الخرائط</p>
            </div>
            <div className="p-8">
              <div className="text-6xl font-black text-brand-green mb-2 tracking-tighter">24س</div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">سرعة مزامنة العملاء</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 pb-40 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-green rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
                <div className="absolute inset-0 bg-white/10 opacity-50 blur-3xl rounded-full translate-y-1/2" />
                <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">علامتك التجارية <br /> يمكن أن تكون التالية.</h2>
                <p className="text-lg md:text-xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                    أنظمة الأداء لدينا جاهزة. حان الوقت لبناء إرث السيو المحلي الخاص بك في السوق السعودي.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center bg-brand-navy text-white px-16 py-7 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-xs shadow-2xl group"
                >
                    ابدأ مشروعك اليوم
                    <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-2 transition-transform text-brand-green" />
                </Link>
              </div>
        </div>
      </section>
    </div>
  );
}
