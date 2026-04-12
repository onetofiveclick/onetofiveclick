'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Users,
    Zap,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Globe,
    Cpu,
    DollarSign,
    Layout,
    MessageCircle,
    Share2,
    Rocket,
    CheckCircle,
    Search,
    ArrowLeft
} from 'lucide-react';

const shadowStats = [
    { label: 'نطاق المتابعين', value: '20k - 100k', sub: 'المنطقة المثالية للمبدعين الصغار' },
    { label: 'رفع مستوى التسييل', value: '+300%', sub: 'متوسط قفزة الإيرادات' },
    { label: 'تعقيد البنية التحتية', value: 'صفر', sub: 'نحن نتولى النظام بالكامل' },
    { label: 'نموذج الإيرادات', value: 'مشاركة الربح', sub: 'تناغم قائم على الأداء' }
];

const launchPhases = [
    {
        title: 'تدقيق فجوة التسييل',
        desc: 'نقوم برسم خرائط لنقاط الألم لدى جمهورك مقابل فرص التسييل الخفية داخل محتواك.',
        icon: Search
    },
    {
        title: 'نشر البنية التحتية',
        desc: 'إعداد مجتمعك الخاص، ومركز الدورات، والمدفوعات السلسة عبر شريكنا Whop.',
        icon: Layout
    },
    {
        title: 'إطلاق السرعة بـ 14 يوماً',
        desc: 'سلسلة قصص Instagram ومجتمع عالية التأثير تحول "المراقبين" إلى "أعضاء دائمين".',
        icon: Rocket
    }
];

export default function CreatorStrategyPage() {
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
                                <Zap className="h-4 w-4" />
                                <span>أول مشغل ظل للمبدعين في السعودية لعام 2026</span>
                            </div>
                            <h1 className="text-6xl md:text-9xl font-black text-brand-navy mb-8 leading-[0.85] tracking-tighter">
                                مشغـل <br />
                                <span className="text-brand-green uppercase">الظـل في الرياض وجدة.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                                المبدعون الصغار في السعودية (20 ألف - 100 ألف) يجلسون على منجم ذهب بدون خريطة. نحن <span className="text-brand-navy underline transition-colors hover:text-brand-green cursor-pointer uppercase">المهندسون في المملكة</span> الذين يبنون الأنظمة الخلفية وحلقات التسييل ومراكز المجتمع بينما تركز أنت على المحتوى.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-brand-navy text-white px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-navy/20 group gap-3"
                            >
                                احصل على تدقيق المبدع الخاص بك
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform text-brand-green" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The ROI vs Convenience Logic */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="text-right">
                            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-10 uppercase tracking-tighter leading-[0.85]">العائد قبل <br /> السهولة.</h2>
                            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-bold text-right">
                                معظم الوكالات تبيع "السهولة" (التعديل، النشر، الإدارة). نحن نبيع <span className="text-brand-green underline uppercase">العائد على الاستثمار</span>. نحن لا نوفر لك الوقت فحسب؛ بل نبني المحرك الذي يحول متابعيك إلى أصول مدرة للدخل.
                            </p>
                            <ul className="space-y-6 flex flex-col items-end">
                                {[
                                    'هندسة المنتجات الرقمية',
                                    'مراكز مجتمعية مدعومة من Whop',
                                    'حلقات توجيه عالية السعر',
                                    'تقسيم الإيرادات المؤتمت'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-brand-navy font-black uppercase tracking-widest text-[11px] flex-row-reverse">
                                        <CheckCircle className="h-5 w-5 text-brand-green" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 shadow-inner group hover:border-brand-green transition-all">
                            <h3 className="text-3xl font-black text-brand-navy mb-10 uppercase tracking-tighter border-b border-brand-green/20 pb-4 text-right">تسلسل السرعة بـ 14 يوماً</h3>
                            <div className="space-y-10">
                                {[
                                    { day: '01-05', action: 'الإحماء: إثارة الطلب الخفي الموجود بالفعل.' },
                                    { day: '06-10', action: 'ما قبل الإطلاق: بناء ثقة حميمة قائمة على القصص (Stories).' },
                                    { day: '11-14', action: 'فتح العربة: قفزة السرعة عبر مبدأ FOMO والاستعجال.' }
                                ].map((step) => (
                                    <div key={step.day} className="flex items-start gap-8 border-r-4 border-brand-green pr-8 py-2 flex-row-reverse text-right">
                                        <div>
                                            <div className="text-brand-green font-black text-[10px] uppercase mb-2 tracking-[0.2em]">اليوم {step.day}</div>
                                            <p className="text-lg font-bold text-brand-navy leading-tight">{step.action}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zero Upfront Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 uppercase tracking-tighter">صفر مقدماً. توافق كامل.</h2>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">أخوة حقيقية قائمة على الأداء بين المبدع والمهندس</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {shadowStats.map(stat => (
                            <div key={stat.label} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:border-brand-green transition-all text-center group hover:shadow-2xl">
                                <div className="text-4xl font-black text-brand-navy mb-4 group-hover:scale-110 transition-transform tracking-tighter">{stat.value}</div>
                                <div className="text-[10px] font-black text-brand-green uppercase tracking-widest mb-6 border-b border-brand-green/10 pb-2 inline-block">{stat.label}</div>
                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Grid */}
            <section className="py-32 bg-white text-right">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {launchPhases.map((phase, i) => (
                            <div key={phase.title} className="p-12 bg-slate-50 rounded-[4rem] border border-transparent relative group overflow-hidden hover:border-brand-green transition-all hover:shadow-2xl">
                                <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm border border-slate-100 group-hover:rotate-6 transition-transform relative mr-auto ml-0">
                                    <phase.icon className="h-10 w-10 text-brand-navy group-hover:text-brand-green transition-colors" />
                                </div>
                                <div className="text-[10px] font-black uppercase text-brand-green mb-4 tracking-[0.2em] relative">المرحلة 0{i + 1}</div>
                                <h3 className="text-3xl font-black text-brand-navy mb-6 uppercase tracking-tighter leading-none relative">{phase.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-bold relative">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Automated Revenue Split Focus */}
            <section className="py-40 bg-brand-navy text-white overflow-hidden relative text-right">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -inset-20 bg-brand-green/20 rounded-full blur-[100px] opacity-20" />
                            <div className="relative border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[4rem] p-16 text-center group hover:border-brand-green/30 transition-all">
                                <DollarSign className="h-24 w-24 text-brand-green mx-auto mb-10 animate-bounce" />
                                <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 text-white">ثروة بلا احتكاك.</h3>
                                <p className="text-slate-400 mb-12 leading-relaxed font-bold text-lg">"نستخدم بروتوكول Whop الخاص بنا لتقسيم الإيرادات. عندما ينضم عضو، يتم التقسيم فوراً. أنت تحصل على حصتك، ونحن نحصل على حصتنا. لا فواتير، لا ملاحقة، مجرد توزيع نقي."</p>
                                <div className="flex justify-center gap-6 flex-row-reverse">
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center px-12 group-hover:border-brand-green/20 transition-all">
                                        <p className="text-[10px] font-black text-brand-green uppercase mb-2 tracking-widest">حصة المبدع</p>
                                        <p className="text-4xl font-black text-white tracking-tighter">70-80%</p>
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center px-12 group-hover:border-brand-green/20 transition-all">
                                        <p className="text-[10px] font-black text-slate-500 uppercase mb-2 tracking-widest">حصة المشغل</p>
                                        <p className="text-4xl font-black text-white tracking-tighter">20-30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <h2 className="text-6xl md:text-9xl font-black mb-10 uppercase tracking-tighter leading-[0.85]">
                                عدالـتـك، <br />
                                <span className="text-brand-green">مبـرمـجـة.</span>
                            </h2>
                            <p className="text-2xl text-slate-400 mb-12 leading-relaxed font-bold">
                                لقد قضينا على "توتر الوكالة" من خلال أتمتة الصرف. هذا يضمن بقاء <span className="text-white">فريقنا</span> مركزاً على هيكل نموك، وليس على العمليات الإدارية.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 text-brand-green font-black uppercase tracking-widest text-[11px] group"
                            >
                                <span>تعلم بروتوكول الإيرادات</span>
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-brand-green relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-6xl md:text-9xl font-black text-brand-navy mb-12 uppercase tracking-tighter leading-[0.85]">قـم بتوسيع <br /> العمق الفني.</h2>
                    <p className="text-2xl text-brand-navy/70 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                        توقف عن ترك المال على الطاولة من خلال "التعاونات" و "البرامج التابعة". املك المجتمع. املك المنتج. املك الإرث.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
                    >
                        بدء الشراكة الآن
                        <ArrowLeft className="h-6 w-6 text-brand-green" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
