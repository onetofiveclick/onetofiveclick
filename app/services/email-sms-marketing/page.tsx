'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Mail,
    MessageSquare,
    Zap,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Target,
    Users,
    MousePointerClick,
    ShieldCheck,
    ArrowLeft
} from 'lucide-react';

const protocols = [
    {
        title: 'تنشيط قاعدة البيانات',
        desc: 'استخراج الذهب في قائمة عملائك الحاليين. نحن نحول رسائل البريد الإلكتروني "الخاملة" إلى إيرادات فورية باستخدام تسلسلات عالية التردد ومنخفضة الاحتكاك.',
        icon: TrendingUp,
        color: 'bg-indigo-600'
    },
    {
        title: 'سرعة الرسائل النصية القصيرة',
        desc: 'معدلات فتح تبلغ 98% تتفوق على كل قناة أخرى. نحن نستخدم الرسائل النصية المباشرة للمبيعات الخاطفة والتذكير بالمواعيد ونشر العروض الفورية.',
        icon: MessageSquare,
        color: 'bg-emerald-600'
    },
    {
        title: 'مرجعية النشرات الإخبارية',
        desc: 'تحويل المشتركين إلى معجبين مخلصين. تعمق أسبوعي يبني علامات ثقة حقيقية مع البشر لعلامتك التجارية.',
        icon: Mail,
        color: 'bg-brand-red'
    }
];

export default function EmailSMSPage() {
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
                                <span>أفضل بنية تحتية للتسويق المباشر في السعودية</span>
                            </div>
                            <h1 className="text-6xl md:text-9xl font-black text-brand-navy mb-8 leading-[0.85] tracking-tighter">
                                محـرك <br />
                                <span className="text-brand-green uppercase">الاستبقاء في الرياض.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                                وسائل التواصل الاجتماعي أرض مستعارة في السعودية. <span className="text-brand-navy underline transition-colors hover:text-brand-green cursor-pointer uppercase">قائمتك هي أصلك الحقيقي في المملكة.</span> نحن نبني الأنظمة المؤتمتة التي تلتقط وتغذي وتستفيد من كل عميل محتمل في الرياض وجدة.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-brand-navy text-white px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-navy/20 group gap-3"
                            >
                                ابدأ تدقيق القائمة
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform text-brand-green" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Direct-to-Human Wins */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 text-right">
                        <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 uppercase tracking-tighter leading-tight">صفر حظ مستعار.</h2>
                        <p className="text-[10px] text-brand-green font-black uppercase tracking-[0.3em]">امتلاك العلاقة هو الميزة التنافسية القصوى في 2026.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {protocols.map(p => (
                            <div key={p.title} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm group hover:border-brand-green transition-all text-right">
                                <div className={`w-16 h-16 bg-brand-mint rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:rotate-12 transition-all mr-0 ml-auto group-hover:bg-brand-green`}>
                                    <p.icon className="h-8 w-8 text-brand-green group-hover:text-brand-navy transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-navy mb-6 leading-tight">{p.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-bold">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Packages */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-8 uppercase tracking-tighter leading-[0.85]">بـاقات <span className="text-brand-green">الاستبقاء.</span></h2>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">مصممة للقيمة الدائمة، وليس فقط للنقرات.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                name: 'العقدة الأساسية',
                                price: '999',
                                desc: 'تنشيط استراتيجي للشركات التي لديها 1000 - 5000 مسمي خامل.',
                                features: ['رسالة بريد إلكتروني كل أسبوعين', 'فلاش مبيعات SMS شهري واحد', 'تنظيف القائمة الأساسي', 'تقرير الإيرادات الشهري'],
                                highlight: false
                            },
                            {
                                name: 'بروتوكول النمو',
                                price: '2,499',
                                desc: 'بناء أصل علامة تجارية عالي التردد للشركات النامية.',
                                features: ['رسائل سلطة أسبوعية', '2 فلاش مبيعات SMS / شهر', 'مسار ترحيب مؤتمت', 'استرداد العربات المهجورة', 'مزامنة استراتيجية كل أسبوعين'],
                                highlight: true
                            },
                            {
                                name: 'أصل المؤسسة',
                                price: '4,999',
                                desc: 'بنية تحتية كاملة للاستبقاء للعلامات التجارية ذات الأرقام 8-9.',
                                features: ['تفاعل محتوى يومي', 'مزامنة القنوات المتعددة', 'رسائل خاصة لكبار العملاء', 'هندسة القنوات المخصصة', 'مسؤول مخصص للاستبقاء'],
                                highlight: false
                            }
                        ].map((pkg) => (
                            <div key={pkg.name} className={`relative p-12 rounded-[4rem] border transition-all duration-500 text-right ${pkg.highlight ? 'bg-brand-navy text-white border-brand-green shadow-3xl scale-105 z-10' : 'bg-slate-50 border-slate-100 hover:border-brand-green'}`}>
                                {pkg.highlight && (
                                    <div className="absolute -top-5 right-1/2 translate-x-1/2 bg-brand-green text-brand-navy px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        أعلى قيمة دائمة
                                    </div>
                                )}
                                <h3 className="text-3xl font-black uppercase mb-6 leading-tight tracking-tighter">{pkg.name}</h3>
                                <div className="flex items-baseline mb-10 flex-row-reverse justify-end gap-3">
                                    <span className="text-2xl font-black text-brand-green transition-all">$</span>
                                    <span className="text-7xl font-black tracking-tighter leading-none">{pkg.price}</span>
                                    <span className={`text-[10px] font-black uppercase tracking-widest mr-2 ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/شهرياً</span>
                                </div>

                                <p className={`text-sm mb-12 leading-relaxed font-bold ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>

                                <ul className="space-y-6 mb-16">
                                    {pkg.features.map(feat => (
                                        <li key={feat} className="flex items-start gap-4 text-sm font-bold flex-row-reverse justify-end">
                                            <CheckCircle className={`h-6 w-6 flex-shrink-0 ${pkg.highlight ? 'text-brand-green' : 'text-brand-green/50'}`} />
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

            {/* Metric Section */}
            <section className="py-32 bg-brand-navy text-white border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        {[
                            { label: 'متوسط العائد (البريد)', value: '38x', icon: TrendingUp },
                            { label: 'معدل فتح SMS', value: '98%', icon: MessageSquare },
                            { label: 'زيادة القيمة الدائمة', value: '+140%', icon: Users },
                            { label: 'استقرار الأصول', value: '100%', icon: ShieldCheck }
                        ].map(stat => (
                            <div key={stat.label} className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5 hover:border-brand-green transition-all group">
                                <stat.icon className="h-10 w-10 text-brand-green mx-auto mb-8 group-hover:scale-110 transition-transform" />
                                <div className="text-5xl font-black mb-3 tracking-tighter">{stat.value}</div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-brand-green relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-12 tracking-tighter uppercase leading-[0.85]">املك العلاقات <br /> الخاصـة بك.</h2>
                    <p className="text-2xl text-brand-navy/70 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                        لا تدع تغييراً في الخوارزمية يدمر عملك. ابنِ خندق الاستبقاء الخاص بك اليوم.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
                    >
                        نشر بروتوكول الاستبقاء
                        <ArrowLeft className="h-6 w-6 text-brand-green" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
