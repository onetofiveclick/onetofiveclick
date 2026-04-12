'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Layout,
    Globe,
    Zap,
    ShieldCheck,
    Settings,
    Rocket,
    BarChart3,
    Layers,
    CheckCircle2,
    Users,
    Search,
    ArrowLeft
} from 'lucide-react';

const stats = [
    { label: 'مثيلات WP المطورة', value: '450+' },
    { label: 'معدل اجتياز الـ Vitals', value: '100%' },
    { label: 'خرق أمني تم صده', value: '0' },
    { label: 'محرك نمو الوكالة', value: 'ممتاز' }
];

const wpFeatures = [
    {
        title: 'بنية Gutenberg المخصصة',
        description: 'نتخطى القوالب القياسية لنبني كتل Gutenberg برمجية مخصصة عالية الأداء. سرعة قصوى، صفر انتفاخ.',
        icon: Layout
    },
    {
        title: 'تحسين سرعة المؤسسات',
        description: 'مواقع WordPress الخاصة بنا تحقق باستمرار وقت تحميل أقل من ثانية. نحسن قاعدة البيانات والخادم وطبقات تسليم الأصول.',
        icon: Zap
    },
    {
        title: 'التحصين الأمني الاستراتيجي',
        description: 'العلامات التجارية الكبرى لا يمكنها تحمل التوقف. نحن ننشر بروتوكولات تشفير وجدران حماية من الدرجة الأولى.',
        icon: ShieldCheck
    }
];

export default function WordPressServicePage() {
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
                                <Settings className="h-4 w-4" />
                                <span>أفضل وكالة مرجعية لـ WordPress في السعودية</span>
                            </div>
                            <h1 className="text-6xl md:text-9xl font-black text-brand-navy mb-8 leading-[0.85] tracking-tighter uppercase text-center">
                                مؤسـسـات <br />
                                <span className="text-brand-green uppercase">WordPress</span> <br />
                                المتـكـاملـة في الرياض وجدة.
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-bold max-w-2xl mx-auto text-center">
                                فريقنا يحول إعدادات CMS القياسية إلى محركات إيرادات عالية السلطة للشركات السعودية. نحن لا نستخدم "قوالب جاهزة" - نحن نبني تجارب رقمية مخصصة في المملكة.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-brand-navy text-white px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-navy/20 group gap-3"
                            >
                                قـم بتوسيع WordPress الخاص بك
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform text-brand-green" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Authority Stats */}
            <section className="py-20 border-y border-slate-100 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center flex-row-reverse">
                        {stats.map((stat, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="text-5xl font-black text-brand-navy mb-2 group-hover:text-brand-green transition-colors tracking-tighter uppercase leading-none">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WordPress Expert Features */}
            <section className="py-32 bg-white text-right">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
                            إتـقـان <br />
                            <span className="text-brand-green uppercase">WordPress الكلي.</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-bold leading-relaxed mb-4">
                            نحن متخصصون في بنية WordPress عديمة الرأس (Headless) والتطوير القائم على الأداء أولاً الذي يتفوق على 99% من الوكالات.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {wpFeatures.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group hover:border-brand-green text-right h-full">
                                    <div className="w-16 h-16 bg-brand-mint rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-green transition-all shadow-sm mr-auto ml-0">
                                        <Icon className="h-8 w-8 text-brand-green group-hover:text-brand-navy transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black text-brand-navy mb-6 tracking-tighter leading-tight uppercase">{f.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-bold text-sm">
                                        {f.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Performance Comparison */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="text-right">
                            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.9]">
                                لـماذا تـثق بنا <br />
                                <span className="text-brand-green uppercase">العلامات الكبرى</span>
                            </h2>
                            <div className="space-y-8 flex flex-col items-end">
                                <div className="p-8 bg-white rounded-3xl border-r-8 border-brand-navy shadow-sm group hover:border-brand-green transition-all w-full">
                                    <h4 className="text-[10px] font-black text-brand-green mb-2 uppercase tracking-widest">تكامل السيو الدلالي</h4>
                                    <p className="text-slate-500 text-sm font-bold leading-relaxed">موقعك مُحسن مسبقاً لمحركات البحث بالذكاء الاصطناعي و NLP من النواة الخلفية.</p>
                                </div>
                                <div className="p-8 bg-white rounded-3xl border-r-8 border-brand-green shadow-sm group hover:border-brand-navy transition-all w-full">
                                    <h4 className="text-[10px] font-black text-brand-navy mb-2 uppercase tracking-widest">صفر انتفاخ في الإضافات</h4>
                                    <p className="text-slate-500 text-sm font-bold leading-relaxed">نستبدل أكثر من 40 إضافة عامة بـ 5 ميزات برمجية مخصصة وعالية الأداء.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-10 bg-brand-green/10 blur-[100px] rounded-full animate-pulse" />
                            <div className="relative bg-white rounded-[4rem] shadow-3xl border border-slate-100 overflow-hidden text-right">
                                <div className="bg-brand-navy p-10 text-white flex justify-between items-center group flex-row-reverse">
                                    <span className="font-black text-lg uppercase tracking-tighter">مؤشر تدقيق WordPress</span>
                                    <ShieldCheck className="h-8 w-8 text-brand-green" />
                                </div>
                                <div className="p-12 space-y-10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center flex-row-reverse">
                                            <span className="font-black text-brand-navy uppercase tracking-widest text-[10px]">وقت استجابة الخادم</span>
                                            <span className="text-brand-green font-black text-lg">45ms</span>
                                        </div>
                                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '95%' }}
                                                className="h-full bg-brand-navy rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center flex-row-reverse">
                                            <span className="font-black text-brand-navy uppercase tracking-widest text-[10px]">نتيجة Core Web Vitals</span>
                                            <span className="text-brand-green font-black text-lg">100/100</span>
                                        </div>
                                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                className="h-full bg-brand-green rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-12 p-8 bg-brand-navy/5 rounded-3xl border border-brand-navy/10 text-[10px] text-brand-navy font-black uppercase tracking-widest leading-relaxed">
                                        تم تحسين البنية من قبل فريقنا الخبير لتحقيق ذروة الرؤية العالمية.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Comparison Table */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter uppercase">معيار أداء WordPress</h2>
                    </div>
                    <div className="overflow-hidden rounded-[3.5rem] shadow-2xl bg-white border border-slate-100">
                        <table className="w-full text-right border-collapse">
                            <thead className="bg-brand-navy text-white">
                                <tr>
                                    <th className="p-10 font-black text-[10px] uppercase tracking-widest">ساق الميزة</th>
                                    <th className="p-10 font-black text-[10px] uppercase tracking-widest text-brand-green">1 to 5 Click (فـريقـنا)</th>
                                    <th className="p-10 font-black text-[10px] uppercase tracking-widest text-slate-400">مطور WP عـادي</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-bold">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-10 font-black text-brand-navy text-[10px] uppercase tracking-widest">DNA الـتطـوير</td>
                                    <td className="p-10 text-brand-green font-black text-sm">برمجة مخصصة (لا قوالب جاهزة)</td>
                                    <td className="p-10 text-slate-400 text-sm">أدوات بناء Elementor/Divi</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-10 font-black text-brand-navy text-[10px] uppercase tracking-widest">تقنـية التصـنيف</td>
                                    <td className="p-10 text-brand-green font-black text-sm">سيو دلالي NLP ومخططات مؤتمتة</td>
                                    <td className="p-10 text-slate-400 text-sm">إعدادات Yoast / RankMath أساسية</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-10 font-black text-brand-navy text-[10px] uppercase tracking-widest">بنيـة الأمـن</td>
                                    <td className="p-10 text-brand-green font-black text-sm">تحصين النواة وجدار حماية مخصص</td>
                                    <td className="p-10 text-slate-400 text-sm">إضافة Wordfence أساسية</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-brand-navy relative overflow-hidden text-center border-t border-white/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                    <h2 className="text-5xl md:text-9xl font-black mb-12 leading-[0.85] tracking-tighter uppercase">
                        انـشر قـوة <br />
                        <span className="text-brand-green underline decoration-brand-green/30">WordPress.</span>
                    </h2>
                    <p className="text-2xl text-slate-400 mb-16 font-bold max-w-2xl mx-auto">
                        اتصل بفريقنا لبدء انتقالك إلى ملكية أصول رقمية عالية الأداء.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-brand-green text-brand-navy px-16 py-8 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-3xl shadow-brand-green/20 gap-4"
                    >
                        احصل على حصتك في السوق
                        <ArrowLeft className="h-7 w-7 text-brand-navy" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
