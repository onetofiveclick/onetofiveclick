'use client';

import { motion } from 'framer-motion';
import { Check, User, Target, Briefcase, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const packages = [
    {
        name: 'نشاط تجاري واحد',
        badge: 'للفرق الصغيرة',
        price: '499',
        description: 'مجموعة الأدوات الأساسية لأصحاب الأعمال المحليين الذين يتطلعون للسيطرة على البحث المحلي.',
        icon: User,
        features: [
            'تتبع التصنيفات المحلية',
            'تدقيق الملف التجاري',
            'أدوات إدارة المراجعات',
            'مراقبة الإشارات المحلية',
            'تقارير أداء أسبوعية',
        ],
        color: 'border-slate-200 bg-white shadow-sm',
    },
    {
        name: 'متعدد المواقع',
        badge: 'الأكثر أداءً',
        price: '999',
        description: 'إشراف متقدم للعلامات التجارية والامتيازات التي تملك عدة ملفات تجارية لإدارتها.',
        icon: Target,
        features: [
            'إدارة ملفات مجمعة',
            'رؤى عبر المواقع',
            'محرك سمعة متقدم',
            'تقارير العلامة البيضاء',
            'وصول للـ API والتكاملات',
        ],
        color: 'border-brand-green bg-brand-navy shadow-2xl shadow-brand-navy/30',
        popular: true,
    },
    {
        name: 'وكالات السيو',
        badge: 'توسع أسرع',
        price: '2499',
        description: 'كل ما تحتاجه لتقديم خدمات سيو محلي عالمية المستوى لعملائك على نطاق واسع.',
        icon: Briefcase,
        features: [
            'توليد عملاء للوكالة',
            'إخفاء هوية العلامة غير محدود',
            'دعم عملاء ذو أولوية',
            'لوحات تحكم بنطاق مخصص',
            'جناح تعاون الفريق',
            'أدوات تدقيق العملاء المتقدمة',
        ],
        color: 'border-slate-200 bg-white shadow-sm',
    },
];

export default function RevenuePackages() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden text-right">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00D665 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-green bg-brand-green/5 px-6 py-2 rounded-full border border-brand-green/10"
                    >
                        المستوى التالي من الأداء
                    </motion.span>
                    <h2 className="text-5xl md:text-8xl font-black text-brand-navy mt-10 mb-8 tracking-tighter leading-[0.85]">
                        حلول مرنة <br />
                        <span className="text-brand-green">لأي نطاق عمل.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-bold mt-10 leading-relaxed mb-6">
                        سواء كنت تدير فرعاً واحداً في حي مخصص أو سلسلة مطاعم في جميع أنحاء المملكة، لدينا المحرك المناسب لك.
                    </p>
                    
                    <div className="inline-flex items-center gap-4 bg-white p-2 border border-slate-200 rounded-full shadow-sm mb-8 mx-auto mt-6 relative">
                       <span className="absolute -top-4 -left-4 bg-brand-green text-brand-navy text-[10px] font-black px-3 py-1 rounded-full animate-pulse shadow-lg transform -rotate-12">وفّر 20% سنوياً</span>
                       <button className="px-6 py-3 rounded-full text-sm font-bold bg-transparent text-slate-500 hover:text-brand-navy transition-colors">شهرياً</button>
                       <button className="px-6 py-3 rounded-full text-sm font-black bg-brand-navy text-white shadow-md">سنوياً</button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 xl:gap-12 pt-8">
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative flex flex-col p-10 lg:p-12 rounded-[3.5rem] border transition-all duration-500 hover:-translate-y-2 ${pkg.color} ${pkg.popular ? 'border-2 z-10 shadow-2xl' : ''} text-right group`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-green to-emerald-400 text-brand-navy px-10 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_10px_40px_-10px_rgba(0,214,101,0.8)] z-20 whitespace-nowrap border-2 border-white/20">
                                    ★ الخيار الأفضل والأكثر طلباً
                                </div>
                            )}

                            <div className="mb-8 border-b border-slate-200/50 pb-8">
                                <div className="flex items-center justify-between mb-6 flex-row-reverse">
                                    <div className={`p-4 rounded-2xl ${pkg.popular ? 'bg-brand-green text-brand-navy shadow-lg' : 'bg-slate-50 text-brand-navy border border-slate-200'}`}>
                                        <pkg.icon className="h-6 w-6 stroke-[1.5]" />
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${pkg.popular ? 'bg-white/10 text-brand-green' : 'bg-slate-100 text-slate-500'}`}>{pkg.badge}</span>
                                </div>
                                <h3 className={`text-3xl font-black tracking-tight mb-2 ${pkg.popular ? 'text-white' : 'text-brand-navy'}`}>{pkg.name}</h3>
                                <div className="mb-4">
                                    <span className={`text-4xl font-black ${pkg.popular ? 'text-white' : 'text-brand-navy'}`}>{pkg.price}</span>
                                    <span className={`text-lg font-bold ml-2 ${pkg.popular ? 'text-white/60' : 'text-slate-400'}`}>ر.س / شهر</span>
                                </div>
                                <p className={`text-sm font-medium leading-relaxed ${pkg.popular ? 'text-white/80' : 'text-slate-500'}`}>
                                    {pkg.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-12 flex-grow">
                                {pkg.features.map((feature, fIdx) => (
                                    <div key={fIdx} className={`flex items-center gap-4 flex-row-reverse p-2 rounded-xl transition-colors ${pkg.popular ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}>
                                        <div className={`h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.popular ? 'bg-brand-green/20' : 'bg-brand-mint'}`}>
                                            <Check className={`h-3.5 w-3.5 ${pkg.popular ? 'text-brand-green' : 'text-brand-navy'}`} strokeWidth={4} />
                                        </div>
                                        <span className={`font-bold text-sm tracking-tight ${pkg.popular ? 'text-white/90' : 'text-brand-navy/80'}`}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className={`w-full py-6 rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-xs transition-all ${
                                    pkg.popular 
                                    ? 'bg-brand-green text-brand-navy hover:bg-white hover:scale-105 shadow-[0_0_30px_-5px_rgba(0,214,101,0.4)]' 
                                    : 'bg-brand-navy text-white hover:bg-brand-green hover:text-brand-navy shadow-lg'
                                }`}
                            >
                                اشترك الآن
                                <ArrowLeft className="mr-3 h-5 w-5" />
                            </Link>
                            
                            <p className="mt-4 text-center text-xs font-bold text-slate-400">ضمان استرجاع الأموال 14 يوماً</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
