import { Metadata } from 'next';
import {
    Search,
    Edit3,
    Share2,
    TrendingUp,
    Bot,
    BarChart3,
    Palette,
    Zap,
    ArrowLeft, 
    ArrowRight, 
    Cpu, 
    CheckCircle2,
    Globe,
    Target,
    Map,
    Star,
    Layout
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'خبراتنا في الهيمنة الرقمية والسيو المحلي | ون تو فايف كليك',
    description: 'تعرف على خبرات ون تو فايف كليك في السيو المحلي، إدارة السمعة الرقمية، أتمتة التسويق، وصناعة المحتوى المتقدم لمحركات الإجابة والذكاء الاصطناعي.',
    alternates: {
        canonical: 'https://onetofiveclick.com/expertise/',
    },
};

const expertiseCategories = [
    {
        id: 'seo',
        title: 'الهيمنة على السيو المحلي',
        icon: Map,
        color: 'text-brand-green',
        bgColor: 'bg-brand-mint',
        skills: [
            'تتبع التصنيفات المحلية',
            'تجميع الكلمات حسب الأحياء',
            'تحسين نتائج الخرائط (Map Pack)',
            'أتمتة الملفات التجارية',
            'محركات تدقيق البحث المحلي',
            'تتبع سرعة النمو المحلي',
            'معايرة الكيانات الدلالية',
            'بناء الإشارات المحلية'
        ]
    },
    {
        id: 'reputation',
        title: 'إدارة السمعة الرقمية',
        icon: Star,
        color: 'text-brand-navy',
        bgColor: 'bg-brand-green',
        skills: [
            'توليد المراجعات تلقائياً',
            'توجيه التعليقات الذكي',
            'تحليل المشاعر بالذكاء الاصطناعي',
            'أتمتة الردود على المراجعات',
            'إدارة استفسارات الملف التجاري',
            'إبراز إشارات الثقة',
            'رؤى مراجعات المنافسين',
            'لوحات تحكم رضا العملاء'
        ]
    },
    {
        id: 'content',
        title: 'محتوى محلي متقدم',
        icon: Edit3,
        color: 'text-brand-green',
        bgColor: 'bg-brand-navy',
        skills: [
            'صفحات الهبوط المحلية',
            'صفحات الخدمة حسب المدن',
            'بنية مدونات محلية',
            'صياغة السرد بالذكاء الاصطناعي',
            'مزامنة المحتوى المحلي',
            'رسم خرائط الكيانات المحلية',
            'إعلانات مستهدفة جغرافياً',
            'توليد الأسئلة الشائعة محلياً'
        ]
    },
    {
        id: 'ads',
        title: 'توليد عملاء محليين',
        icon: Target,
        color: 'text-brand-navy',
        bgColor: 'bg-brand-mint',
        skills: [
            'إعلانات الخدمات المحلية (LSA)',
            'إعلانات ميتا المحددة جغرافياً',
            'النتائج التنبؤية للعملاء',
            'تقنيات قمع التحويل',
            'استراتيجيات تحسين التحويل',
            'تتبع المكالمات الديناميكي',
            'تسويق عبر SMS للعملاء الجادين',
            'محاكيات النمو المحلي'
        ]
    }
];

export default function ExpertisePage() {
    return (
        <main className="min-h-screen bg-white pt-16 text-right">
        {/* Header */}
        <section className="relative py-24 lg:py-40 overflow-hidden text-center bg-brand-navy">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-green/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div className="opacity-100 translate-y-0">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-white/10 backdrop-blur-md">
                        <Zap className="h-3 w-3 fill-current" />
                        <span>منظومة القوة الرقمية</span>
                    </div>
                </div>
                <h1 className="text-5xl md:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
                    خبرة محلية <br /> <span className="text-brand-green">عميقة.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                    نحن لا نقوم بـ "التسويق الرقمي" فحسب. نحن نصمم أنظمة بحث محلي عالية الأداء تسيطر على الأحياء والمناطق وتحقق نمواً هائلاً في الإيرادات.
                </p>
            </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Detailed Content Section 1: Methodology */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto text-right">
                    <h2 className="text-4xl font-black text-brand-navy mb-8 tracking-tighter">منهجيتنا في السيطرة المحلية</h2>
                    <p className="text-slate-600 leading-relaxed font-bold mb-6">
                        في "ون تو فايف كليك"، نؤمن بأن السيو ليس مجرد ترقية للكلمات المفتاحية، بل هو هندسة دقيقة للحضور الرقمي على مستوى الحي. منهجيتنا تبدأ بتحليل عميق لسلوك البحث في المناطق المحددة، مما يتيح لنا بناء استراتيجيات "السيو المبرمج" التي تشمل آلاف نقاط البيانات المحلية.
                    </p>
                    <p className="text-slate-600 leading-relaxed font-bold mb-6">
                        بفضل خبرتنا في السوق السعودي، قمنا بتطوير "خرائط الكيانات الدلالية" التي تربط علامتك التجارية جغرافياً وموضوعياً بالخدمات التي يبحث عنها عملاؤك في الرياض وجدة والدمام. نحن لا نكتفي بالظهور، بل نهيمن على "حزمة الخرائط" (Map Pack) لضمان أن تكون الخيار الأول والوحيد.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <div className="grid lg:grid-cols-2 gap-10 py-32">
                {[
                    { title: 'الهيمنة على السيو المحلي', icon: Map, color: 'text-brand-green', bgColor: 'bg-brand-mint', skills: expertiseCategories[0].skills },
                    { title: 'تقنيات السمعة', icon: Star, color: 'text-brand-navy', bgColor: 'bg-brand-green', skills: expertiseCategories[1].skills },
                    { title: 'محتوى محلي متقدم', icon: Edit3, color: 'text-brand-green', bgColor: 'bg-brand-navy', skills: expertiseCategories[2].skills, dark: true },
                    { title: 'أنظمة النمو', icon: Target, color: 'text-brand-navy', bgColor: 'bg-brand-mint', skills: expertiseCategories[3].skills }
                ].map((category, idx) => (
                    <div
                        key={idx}
                        className={`${category.dark ? 'bg-brand-navy text-white border-white/5' : 'bg-white text-brand-navy border-slate-100'} rounded-[4rem] p-12 md:p-16 border shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden text-right opacity-100 translate-y-0`}
                    >
                        <div className="flex items-center gap-8 mb-12 flex-row-reverse">
                            <div className={`w-20 h-20 ${category.bgColor} rounded-3xl flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg shadow-black/5`}>
                                <category.icon className={`h-10 w-10 ${category.color}`} />
                            </div>
                            <h3 className={`text-3xl md:text-4xl font-black tracking-tighter ${category.dark ? 'text-white' : 'text-brand-navy'}`}>
                                {category.title}
                            </h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 relative z-10">
                            {category.skills.map((skill, sIdx) => (
                                <div key={sIdx} className="flex items-center gap-4 group/item flex-row-reverse">
                                    <div className="h-2 w-2 bg-brand-green rounded-full opacity-30 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                                    <span className={`text-sm font-bold transition-colors ${category.dark ? 'text-slate-400 group-hover/item:text-brand-green' : 'text-slate-500 group-hover/item:text-brand-navy'}`}>
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Detailed Content Section: Saudi Market Context */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto text-right">
                    <h2 className="text-4xl font-black text-brand-navy mb-8 tracking-tighter">خبرة وفهم للسوق السعودي</h2>
                    <p className="text-slate-600 leading-relaxed font-bold mb-6">
                        إن التسويق الرقمي في المملكة العربية السعودية يتطلب فهماً عميقاً للنسيج الاجتماعي والاقتصادي المحلي. في "ون تو فايف كليك"، لا نكتفي بتطبيق نظريات عالمية، بل نقوم بتطوير حلول تتناسب مع رؤية المملكة 2030 والتحول الرقمي المتسارع. نحن ندرك كيف يفضل العميل في الرياض الجودة، وكيف يبحث العميل في جدة عن التميز، ونعرف طبيعة القطاع الصناعي في المنطقة الشرقية.
                    </p>
                    <p className="text-slate-600 leading-relaxed font-bold">
                        خبرتنا تمتد لتشمل إدارة "الإشارات والكيانات" (Entities) التي تضمن أن علامتك التجارية ليست مجرد اسم في دليل، بل هي وجهة موثوقة في نظر المنظومات الذكية. من خلال دمج تقنيات "السيو التقني" و "أتمتة العمليات"، نمنح مشروعك القدرة على المنافسة ليس فقط اليوم، بل في المستقبل الرقمي القادم.
                    </p>
                </div>
            </section>

            {/* Detailed Content Section 2: AI & Future */}
            <section className="py-24 bg-slate-50 rounded-[4rem] mb-32 border border-slate-100">
                <div className="max-w-4xl mx-auto px-8 text-right">
                    <h2 className="text-4xl font-black text-brand-navy mb-8 tracking-tighter">مستقبل البحث: AEO و GEO</h2>
                    <p className="text-slate-600 leading-relaxed font-bold mb-6">
                        مع تطور محركات البحث نحو أنظمة الإجابة المباشرة (AI Answer Engines)، أصبحت خبرتنا في "تحسين محركات الإجابة" (AEO) حجر الزاوية لكل مشروع. نحن نجهز علامتك التجارية لتفهمها ليس فقط جوجل، بل أيضاً ChatGPT و Gemini و Perplexity.
                    </p>
                    <p className="text-slate-600 leading-relaxed font-bold">
                        من خلال تحويل محتواك إلى قطع معرفية مستقلة (Knowledge Chunks) وتحسين "إشارات الثقة الجغرافية" (GEO)، نضمن أن يتم التوصية بعملك عندما يسأل المستخدم عن أفضل مزود خدمة في منطقته. هذا ليس مجرد سيو تقني؛ إنه بناء سلطة مطلقة في عقل الذكاء الاصطناعي.
                    </p>
                </div>
            </section>

            {/* Scale Section */}
            <div className="mb-40 opacity-100 translate-y-0">
                <div className="bg-brand-green rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
                    <div className="absolute inset-0 bg-white/10 opacity-50 blur-3xl rounded-full translate-y-1/2" />
                    <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">توسع بما يتجاوز <br /> حدودك.</h2>
                    <p className="text-lg md:text-xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                        هل أنت جاهز لتشغيل محرك نمو محلي ذاتي؟ دعنا نصمم مخطط سيو مخصص لعملك اليوم.
                    </p>
                    <div className="flex flex-col sm:flex-row-reverse justify-center gap-6 relative z-10">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-brand-navy text-white px-16 py-7 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-xs shadow-2xl group"
                        >
                            ابدأ مشروعك اليوم
                            <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-2 transition-transform text-brand-green" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center bg-white text-brand-navy px-16 py-7 rounded-full hover:bg-slate-50 transition-all font-black uppercase tracking-widest text-xs shadow-sm"
                        >
                            عرض الأعمال
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
