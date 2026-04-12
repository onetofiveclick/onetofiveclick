'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Cpu,
    Zap,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Target,
    Search,
    Network,
    Database,
    BrainCircuit,
    Brain,
    Scale,
    Clock,
    DollarSign,
    AlertCircle,
    ZapOff,
    Users,
    ArrowLeft
} from 'lucide-react';

const geoProtocol = [
    {
        title: 'خرائط انتشار الاستعلام',
        desc: 'محركات الذكاء الاصطناعي لا تصنف كلمة رئيسية واحدة. بل توسع الاستفسارات إلى 6-8 أسئلة فرعية. نحن نهندس صفحات تغطي جميع النوايا الفرعية بشكل شامل.',
        icon: Network,
        color: 'bg-blue-600'
    },
    {
        title: "وصفات خوارزمية",
        desc: "كل نموذج لغة (Claude, ChatGPT, Gemini) لديه وصفة استرداد فريدة. نحن نهندس المحتوى لإرضاء منطق كلود متعدد الزوايا وتخصيص Perplexity القائم على الموقع.",
        icon: Brain,
        color: "from-brand-blue to-purple-600"
    },
    {
        title: "توبولوجيا مزامنة المتجهات",
        desc: "تجاوز الفهرسة التقليدية. نحن نوائم 'الشكل' الرياضي لمحتواك (Embeddings) مع الاستفسارات الوكيلية عالية النية، مما يضمن مطابقة استرداد بنسبة 99%.",
        icon: Target,
        color: "from-brand-blue to-emerald-600"
    },
    {
        title: 'التجميع الذاتي (Chunking)',
        desc: 'نماذج اللغة تقرأ وتسترد البيانات في فقرات معزولة (Chunks). نحن نكتب كتلًا واقعية ومستقلة تتطابق تمامًا مع كيفية تخزين أنظمة الذكاء الاصطناعي للمعلومات.',
        icon: Database,
        color: 'bg-blue-600'
    },
    {
        title: 'الاتساق والإجماع',
        desc: 'اجتياز فلاتر استرداد نماذج اللغة من خلال قفل اتساق السرد في الأصول المدارة وتوليد الإجماع في المنصات التي يقودها المستخدمون (Reddit, Trustpilot).',
        icon: ShieldCheck,
        color: 'bg-indigo-600'
    },
    {
        title: 'الحقن السياقي',
        desc: 'تقديم إجابات فائقة التحديد ومدفوعة بالنية بدلاً من الحشو التسويقي العام، مما يزيد من الاحتمالية الرياضية للاستشهادات عالية النية.',
        icon: BrainCircuit,
        color: 'bg-blue-600'
    }
];

const decisionMatrix = [
    {
        model: "أتمتة الذكاء الاصطناعي (AAA)",
        valueForm: "توفير الوقت/المال",
        difficulty: "صعب",
        time: "عالٍ",
        scalability: "متوسط",
        income: "عالي (10k$/شهر)",
        stress: "عالٍ (مهمة حرجة)",
        icon: Zap,
        color: "text-amber-500"
    },
    {
        model: "وكالة محتوى ذكاء اصطناعي",
        valueForm: "انتشار واسع وتأثير",
        difficulty: "متوسط",
        time: "متوسط",
        scalability: "متوسط-عالي",
        income: "متوسط (5k$/شهر)",
        stress: "متوسط",
        icon: TrendingUp,
        color: "text-emerald-500"
    },
    {
        model: "تشغيل الظل بالذكاء الاصطناعي",
        valueForm: "الوصول للجماهير الجائعة",
        difficulty: "منخفض (وضع الظل)",
        time: "منخفض (مؤتمت)",
        scalability: "فائق الارتفاع (محفظة)",
        income: "+13,500$/شهر (متوسط)",
        stress: "صفر (نموذج شريك)",
        icon: Scale,
        color: "text-brand-blue"
    }
];

const geoFaqs = [
  {
    question: 'ما هو GEO (تحسين المحركات التوليدية) وكيف يختلف عن SEO؟',
    answer: 'GEO (Generative Engine Optimization) هو تحسين محتواك ليظهر ويُستشهد به في أدوات الذكاء الاصطناعي التوليدية مثل ChatGPT و Claude و Perplexity و Gemini. بينما SEO التقليدي يركز على ترتيبك في قائمة نتائج Google، GEO يركز على جعلك المصدر الذي تقتبس منه هذه الأدوات مباشرة عند الإجابة على أسئلة المستخدمين.'
  },
  {
    question: 'لماذا تحتاج شركتي في السعودية لخدمات GEO؟',
    answer: 'لأن الملايين في السعودية بدأوا يستخدمون ChatGPT و Perplexity بدلاً من Google للبحث. إذا لم يكن محتواك مُهيئاً لهذه الأدوات، فأنت تفقد عملاء محتملين. GEO يضمن أن علامتك التجارية تُذكر كتوصية مباشرة عندما يسأل شخص عن خدمات في مجالك.'
  },
  {
    question: 'كيف يعمل بروتوكول GEO في 1to5click؟',
    answer: 'نبدأ بخرائط انتشار الاستعلام لفهم كيف تتوسع أسئلة المستخدمين. ثم نُهندس المحتوى بتقنية التجميع الذاتي (Chunking) ليتطابق مع كيفية قراءة أدوات AI للبيانات. نعمل على بناء الاتساق والإجماع عبر منصات متعددة، ونزرع إشارات العلامة التجارية في المصادر التي تستشهد بها النماذج.'
  },
  {
    question: 'ما هو Schema Markup وكيف يساعد في GEO و AEO؟',
    answer: 'Schema Markup هو ترميز مُهيكل يُضاف للكود الخلفي لصفحات موقعك. يُترجم محتواك إلى لغة تفهمها محركات البحث والذكاء الاصطناعي. مثلاً، يُخبرهم بوضوح: هذا سؤال وهذه إجابته، هذه مؤسسة وهذا عنوانها. بدون Schema، تعتمد أدوات AI على التخمين لفهم محتواك.'
  },
  {
    question: 'كم تكلف خدمات GEO مع 1to5click؟',
    answer: 'خدمات GEO متاحة ضمن باقات السيو المتكاملة التي تبدأ من $1,499/شهر. الباقة الأكثر شعبية ($2,999/شهر) تشمل إدارة السمعة والمراجعات وبنية الإجابة المباشرة ومزامنة حركة مرور AI. للمؤسسات الكبرى ($5,999/شهر)، نقدم هيمنة GEO كاملة مع أدوات مخصصة.'
  },
  {
    question: 'كم من الوقت يستغرق ظهور نتائج GEO؟',
    answer: 'نضج الكيان الرقمي في أنظمة الذكاء الاصطناعي يحتاج عادة 30-90 يوماً. نركز على سباقات الاستشهاد السريع لتحقيق نتائج مبكرة. الدورة الكاملة لنضج الكيان تستغرق حوالي 6 أشهر للوصول إلى مرحلة "التوصية التلقائية" من أدوات AI.'
  },
  {
    question: 'هل يمكن قياس نتائج GEO؟',
    answer: 'نعم. نتتبع عدة مقاييس: حصة الاستشهاد في أدوات AI (كم مرة تُذكر علامتك)، حركة المرور من مصادر AI في GA4، التحويلات المباشرة من الزوار القادمين من ChatGPT و Perplexity، وتقييم المشاعر (Sentiment) في نتائج الذكاء الاصطناعي.'
  }
];

export default function GEOPage() {
    // JSON-LD FAQ Schema for AEO
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: geoFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="pt-24 bg-white overflow-hidden min-h-screen text-right">
            {/* Hero Section */}
            <section className="relative bg-brand-navy py-32 lg:py-48 overflow-hidden text-center">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-white/10 backdrop-blur-md">
                                <Cpu className="h-4 w-4" />
                                <span>SMMA 2.0: أول بروتوكول بحث بالذكاء الاصطناعي في السعودية</span>
                            </div>
                            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
                                البحث <br />
                                <span className="text-brand-green uppercase">الوكوكيلي في الرياض وجدة.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                                السيو التقليدي عبارة عن عبء في السوق السعودي. تحتاج علامتك التجارية إلى **تحسين المحركات التوليدية** (GEO) للسيطرة على السرد في ChatGPT و Claude و Perplexity داخل المملكة.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-green/20 group gap-3"
                            >
                                نشر بروتوكول GEO
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Calculated Decision Matrix Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 tracking-tighter uppercase leading-none">مصفوفة القرار المحسوبة</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-bold">
                            لا تخمن. اختر نموذج إيرادات الذكاء الاصطناعي الذي يناسب ملف المخاطر الخاص بك وسعتك في التسليم.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-[3.5rem] border border-slate-200 bg-white shadow-2xl">
                        <table className="w-full text-right border-collapse">
                            <thead>
                                <tr className="bg-brand-navy text-white">
                                    <th className="p-10 text-[10px] uppercase tracking-[0.3em] font-black">مسار النموذج</th>
                                    <th className="p-10 text-[10px] uppercase tracking-[0.3em] font-black">القيمة الأساسية</th>
                                    <th className="p-10 text-[10px] uppercase tracking-[0.3em] font-black">مستوى المهارة</th>
                                    <th className="p-10 text-[10px] uppercase tracking-[0.3em] font-black text-center">قابلية التوسع</th>
                                    <th className="p-10 text-[10px] uppercase tracking-[0.3em] font-black text-left">سقف الدخل</th>
                                </tr>
                            </thead>
                            <tbody>
                                {decisionMatrix.map((item, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-brand-mint/20 transition-colors group">
                                        <td className="p-10">
                                            <div className="flex items-center gap-6 flex-row-reverse">
                                                <div className={`p-4 rounded-2xl bg-white shadow-sm border border-slate-100 ${item.color}`}>
                                                    <item.icon className="h-6 w-6" />
                                                </div>
                                                <span className="font-black text-brand-navy uppercase tracking-tighter text-lg">{item.model}</span>
                                            </div>
                                        </td>
                                        <td className="p-10">
                                            <span className="text-[10px] font-black text-brand-green uppercase tracking-widest bg-brand-mint px-4 py-2 rounded-full">
                                                {item.valueForm}
                                            </span>
                                        </td>
                                        <td className="p-10">
                                            <div className="flex items-center gap-2 text-sm text-slate-500 font-bold flex-row-reverse">
                                                <Brain className="h-4 w-4 text-brand-green" />
                                                <span>{item.difficulty}</span>
                                            </div>
                                        </td>
                                        <td className="p-10 text-center">
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${item.scalability.includes('فائق') ? 'text-brand-green' : 'text-slate-400'}`}>
                                                {item.scalability}
                                            </span>
                                        </td>
                                        <td className="p-10 text-left">
                                            <div className="flex flex-col items-start translate-x-2">
                                                <span className="text-xl font-black text-brand-navy tracking-tighter">{item.income}</span>
                                                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black">الضغط: {item.stress}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* The Hungry Audience Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-mint opacity-30 skew-x-12 -translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-brand-green font-black uppercase tracking-widest text-[10px] mb-10 border-b border-brand-green/20 pb-2">
                                <Users className="h-4 w-4" />
                                <span>الميزة التنافسية</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-10 uppercase tracking-tighter leading-[0.85]">
                                الجمهور الجائع <br />
                                <span className="text-brand-green">يتفوق على كل شيء.</span>
                            </h2>
                            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                                لماذا تبني جمهوراً لمدة 4 سنوات بينما يمكنك الشراكة مع شخص لديه جمهور بالفعل؟ نحن نحدد المبدعين الصغار الذين لديهم من 20 ألف إلى 50 ألف متابع "متعطش" وننشر طبقات تسييل مدفوعة بالذكاء الاصطناعي في الخفاء.
                                <br /><br />
                                <strong>نموذج "الشيف ضد الدي جي":</strong> هم يصنعون المحتوى (الأكل)، بينما نحن ندير العمليات والتسييل (نظام الصوت).
                            </p>
                            <div className="grid grid-cols-2 gap-8 flex-row-reverse">
                                <div className="p-10 bg-slate-50 rounded-[2.5rem] group hover:border-brand-green border border-transparent transition-all">
                                    <div className="text-4xl font-black text-brand-navy mb-2 tracking-tighter">30,000</div>
                                    <div className="text-[9px] uppercase tracking-widest text-slate-400 font-black">متابع صغير</div>
                                </div>
                                <div className="p-10 bg-brand-green rounded-[2.5rem] shadow-xl shadow-brand-green/20 group hover:scale-105 transition-all text-brand-navy">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">$13,500</div>
                                    <div className="text-[9px] uppercase tracking-widest text-brand-navy opacity-60 font-black">نسبة المشغل شهرياً</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-brand-navy rounded-[4rem] shadow-3xl overflow-hidden group border border-white/5 relative">
                                <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-brand-green/0 transition-all" />
                                <div className="p-16 h-full flex flex-col justify-center relative z-10">
                                    <div className="space-y-8">
                                        {[
                                            "مبدع صغير مع جمهور 'متعطش'",
                                            "استخراج المعرفة عبر الذكاء الاصطناعي",
                                            "تقسيم الأرباح التلقائي 70/30 (Whop)",
                                            "لا رواتب / لا اشتراكات ثابتة"
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-center gap-6 flex-row-reverse justify-end">
                                                <div className="h-3 w-3 bg-brand-green rounded-full shadow-lg shadow-brand-green/40" />
                                                <span className="text-white font-black uppercase tracking-widest text-xs leading-none">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protocol Grid */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {geoProtocol.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-12 bg-white rounded-[3.5rem] border border-slate-100 hover:border-brand-green transition-all shadow-sm group hover:shadow-2xl text-right"
                            >
                                <div className="w-16 h-16 bg-brand-mint rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-green transition-all shadow-sm mr-auto ml-0 transition-colors duration-500">
                                    <item.icon className="h-8 w-8 text-brand-green group-hover:text-brand-navy transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black text-brand-navy mb-6 tracking-tighter uppercase leading-tight">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-bold text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section with Schema Markup */}
            <section className="py-32 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter">
                            أسئلة شائعة عن <span className="text-brand-green uppercase">GEO.</span>
                        </h2>
                        <p className="text-slate-500 font-bold max-w-xl mx-auto text-sm leading-relaxed">
                            إجابات مباشرة على الأسئلة التي يطرحها عملاؤنا عن تحسين المحركات التوليدية
                        </p>
                    </div>
                    <div className="space-y-4">
                        {geoFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-slate-100 rounded-[2rem] overflow-hidden bg-slate-50/50"
                            >
                                <details className="group">
                                    <summary className="w-full p-8 flex items-center justify-between text-right gap-4 hover:bg-slate-50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                        <span className="text-lg font-black text-brand-navy leading-tight">
                                            {faq.question}
                                        </span>
                                        <ArrowLeft className="h-5 w-5 text-brand-green transition-transform group-open:-rotate-90 flex-shrink-0" />
                                    </summary>
                                    <div className="p-8 pt-0 text-slate-500 font-bold leading-relaxed text-sm border-t border-slate-100/50">
                                        {faq.answer}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-brand-navy relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(brand-green_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <h2 className="text-5xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                        توقف عن التحسين للأمس. <br />
                        <span className="text-brand-green">سيطر على سرد الذكاء الاصطناعي.</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-brand-green text-brand-navy px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-green/20"
                    >
                        جدولة مكالمة استراتيجية
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
        </>
    );
}
