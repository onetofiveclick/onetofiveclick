'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Bot,
  Search,
  MessageSquare,
  CheckCircle,
  ArrowLeft,
  Zap,
  Target,
  Globe,
  Code2,
  FileQuestion,
  Lightbulb,
  TrendingUp,
  Shield,
  Users,
  BookOpen,
  ChevronDown,
  BrainCircuit,
  Layers,
} from 'lucide-react';
import { useState } from 'react';

const metadata = {
  title: 'ما هو AEO؟ دليل تحسين محركات الإجابة الشامل | ون تو فايف كليك',
  description: 'تعرّف على AEO (تحسين محركات الإجابة) وكيف تجعل أدوات الذكاء الاصطناعي مثل ChatGPT و Perplexity و Gemini توصي بعملك. دليل شامل مع خطوات عملية وأمثلة.',
};

const tableOfContents = [
  { id: 'what-is-aeo', label: 'ما هو AEO؟' },
  { id: 'seo-vs-aeo', label: 'الفرق بين SEO و AEO' },
  { id: 'why-aeo-matters', label: 'لماذا AEO مهم الآن؟' },
  { id: 'faq-schema', label: 'صفحات الأسئلة الشائعة و Schema Markup' },
  { id: 'question-format', label: 'تنسيق المحتوى كأسئلة وأجوبة' },
  { id: 'three-pillars', label: 'الركائز الثلاث للظهور في AI' },
  { id: 'actionable-steps', label: 'خطوات عملية للتنفيذ' },
  { id: 'faq', label: 'الأسئلة الشائعة' },
];

const seoVsAeoComparison = [
  {
    aspect: 'الهدف',
    seo: 'قائمة مواقع يختار منها المستخدم',
    aeo: 'إجابة واحدة مباشرة على سؤال المستخدم',
  },
  {
    aspect: 'تجربة المستخدم',
    seo: 'تصفح عدة مواقع للعثور على الإجابة',
    aeo: 'الحصول على الإجابة فوراً دون تصفح',
  },
  {
    aspect: 'المنصات',
    seo: 'Google, Bing, Yahoo',
    aeo: 'ChatGPT, Claude, Perplexity, Gemini, Grok, Siri, Alexa',
  },
  {
    aspect: 'نوع المحتوى',
    seo: 'صفحات ويب تقليدية مع كلمات مفتاحية',
    aeo: 'أسئلة وأجوبة مُهيكلة مع Schema Markup',
  },
  {
    aspect: 'المقياس الرئيسي',
    seo: 'ترتيب الكلمات المفتاحية',
    aeo: 'حصة الاستشهاد في أدوات الذكاء الاصطناعي',
  },
  {
    aspect: 'السرعة',
    seo: '3-6 أشهر للنتائج الأولى',
    aeo: '30-90 يوماً لنضج الكيان في AI',
  },
];

const questionCategories = [
  {
    category: 'أسئلة عامة عن الخدمة',
    icon: MessageSquare,
    questions: [
      'ما هي الخدمات التي تقدمونها؟',
      'كيف تختلفون عن الوكالات الأخرى؟',
      'هل تعملون مع شركات في مجالي؟',
      'ما هي خبرتكم في السوق السعودي؟',
    ],
  },
  {
    category: 'أسئلة التسعير والعقود',
    icon: Target,
    questions: [
      'كم تكلف خدماتكم شهرياً؟',
      'هل يوجد عقد طويل الأجل؟',
      'ما هو نموذج التسعير الذي تتبعونه؟',
      'هل هناك رسوم إضافية غير مذكورة؟',
    ],
  },
  {
    category: 'أسئلة عملية العمل',
    icon: Users,
    questions: [
      'كم مرة نلتقي لمراجعة النتائج؟',
      'كيف ستتواصلون معنا؟',
      'ماذا يحدث إذا تغيرت الظروف؟',
      'من سيكون نقطة الاتصال المباشرة؟',
    ],
  },
  {
    category: 'أسئلة النتائج والقياس',
    icon: TrendingUp,
    questions: [
      'كم من الوقت يستغرق رؤية النتائج؟',
      'كيف تقيسون النجاح؟',
      'هل يمكنكم ضمان نتائج محددة؟',
      'ما هو متوسط العائد على الاستثمار؟',
    ],
  },
];

const actionableSteps = [
  {
    step: '01',
    title: 'أنشئ صفحة أسئلة شائعة مُهيكلة',
    description: 'ابدأ بإنشاء صفحة FAQ مخصصة على موقعك. قسّم الأسئلة إلى فئات منطقية (عامة، تسعير، عملية العمل، نتائج). استخدم تنسيق السؤال والجواب مع Schema Markup على الـ Backend.',
    icon: FileQuestion,
  },
  {
    step: '02',
    title: 'حوّل العناوين إلى أسئلة',
    description: 'بدلاً من كتابة "نهج الاستثمار لدينا"، اكتب "كيف نستثمر أموال عملائنا؟". هذا التحويل البسيط يجعل محتواك أكثر توافقاً مع طريقة طرح الأسئلة في أدوات AI.',
    icon: Lightbulb,
  },
  {
    step: '03',
    title: 'أضف Schema Markup (ترميز مُهيكل)',
    description: 'أضف FAQPage Schema إلى صفحاتك. هذا الترميز يُخبر محركات الذكاء الاصطناعي بوضوح: "هذا سؤال وهذه إجابته". بدون Schema، أنت تعتمد على التخمين.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'وزّع الأسئلة عبر موقعك',
    description: 'لا تكتفِ بصفحة FAQ واحدة. أضف أسئلة متخصصة في أسفل كل صفحة خدمة وكل مقال مدونة. هذا يُضاعف فرص ظهورك في نتائج AI.',
    icon: Layers,
  },
  {
    step: '05',
    title: 'استخدم AI لاكتشاف الأسئلة',
    description: 'اذهب إلى ChatGPT أو أي أداة AI وصف جمهورك المستهدف، ثم اطلب قائمة بالأسئلة التي يطرحونها. هذه طريقة ممتازة لاكتشاف أسئلة لم تفكر بها.',
    icon: BrainCircuit,
  },
  {
    step: '06',
    title: 'حوّل الأسئلة المتخصصة لمقالات مستقلة',
    description: 'الأسئلة العامة تنتمي لصفحة FAQ. لكن الأسئلة المتخصصة جداً (مثل: "كيف يساعد التخطيط الضريبي المديرين التنفيذيين في الرياض؟") تستحق مقالاً كاملاً.',
    icon: BookOpen,
  },
];

const blogFaqs = [
  {
    q: 'ما هو AEO بالضبط وكيف يختلف عن SEO؟',
    a: 'AEO (Answer Engine Optimization) أو تحسين محركات الإجابة هو عملية تحسين محتوى موقعك ليظهر كإجابة مباشرة عندما يسأل المستخدمون أسئلة على أدوات الذكاء الاصطناعي مثل ChatGPT و Claude و Perplexity و Gemini و Grok. بينما SEO يركز على ترتيبك في قائمة نتائج Google، AEO يركز على جعلك المصدر الذي تستشهد به هذه الأدوات مباشرة.',
  },
  {
    q: 'ما هو Schema Markup ولماذا هو مهم لـ AEO؟',
    a: 'Schema Markup هو ترميز مُهيكل يُضاف إلى الكود الخلفي لصفحات موقعك. وظيفته ترجمة محتواك إلى لغة يفهمها الذكاء الاصطناعي. عندما تكتب سؤالاً وجواباً، يقوم Schema بإخبار محركات البحث والذكاء الاصطناعي بوضوح: "هذا سؤال وهذه إجابته". بدون Schema، تعتمد هذه الأدوات على التخمين لفهم بنية محتواك.',
  },
  {
    q: 'هل أحتاج لصفحة FAQ واحدة أم أسئلة موزعة على كل صفحة؟',
    a: 'كلاهما! أنشئ صفحة FAQ رئيسية تحتوي على الأسئلة العامة (التسعير، عملية العمل، الخدمات). ثم أضف أسئلة متخصصة في أسفل كل صفحة خدمة أو مقال مدونة. مثلاً: صفحة "التخطيط العقاري" يمكن أن تحتوي على FAQs عن التخطيط العقاري تحديداً.',
  },
  {
    q: 'هل فعلاً يجد العملاء مقدمي خدمات عبر ChatGPT؟',
    a: 'نعم، وهو يتزايد بسرعة. بينما النسبة لا تزال صغيرة مقارنة بـ Google، فإن الاتجاه واضح: المزيد من الناس يتجهون لأدوات AI للعثور على مقدمي خدمات. الشركات التي تتبنى AEO الآن ستحصل على ميزة المبادر الأول (First Mover Advantage) مقارنة بمنافسيها.',
  },
  {
    q: 'أين أبدأ إذا كنت جديداً على AEO؟',
    a: 'ابدأ بثلاث خطوات: أولاً، أنشئ صفحة FAQ على موقعك مع Schema Markup. ثانياً، حوّل عناوين صفحاتك من عبارات إلى أسئلة. ثالثاً، اسأل أداة AI مثل ChatGPT: "ما الأسئلة التي يطرحها [جمهورك المستهدف] عند البحث عن [خدمتك]؟" واستخدم الإجابات كنقطة بداية.',
  },
  {
    q: 'كيف أعرف إذا كانت استراتيجية AEO تعمل؟',
    a: 'راقب عدة مؤشرات: اسأل العملاء الجدد كيف عرفوا عنك. تتبع الزيارات القادمة من مصادر AI في Google Analytics. اختبر بنفسك عبر طرح أسئلة عن مجالك على ChatGPT و Perplexity و Claude وانظر هل يذكرونك. أيضاً راقب حركة المرور العضوية من Featured Snippets.',
  },
  {
    q: 'هل يجب أن أضع أسعاري على الموقع؟',
    a: 'نعم. بيانات البحث تُظهر أن التسعير من أكثر الأسئلة التي يطرحها العملاء المحتملون. الحل الذكي هو وضع الأسعار ضمن قسم FAQ كسؤال واحد من بين عدة أسئلة، بدلاً من إنشاء صفحة أسعار مستقلة. هذا يجعل المعلومة متاحة دون أن تكون هي العنصر البارز.',
  },
  {
    q: 'هل AEO مهم لمنصات التواصل الاجتماعي أيضاً؟',
    a: 'LinkedIn تحديداً له قيمة عالية من حيث SEO وAEO. حسّن ملفك الشخصي على LinkedIn بإضافة أسئلة وأجوبة في الوصف (مثل: "الأسئلة التي نساعد عملاءنا في الإجابة عليها"). لكن لا تحتاج لتنسيق كل منشور كسؤال وجواب.',
  },
];

export default function AEOGuidePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: blogFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  // Article Schema JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ما هو AEO؟ دليل تحسين محركات الإجابة الشامل',
    description: metadata.description,
    author: {
      '@type': 'Organization',
      name: 'ون تو فايف كليك',
      url: 'https://onetofiveclick.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ون تو فايف كليك',
      logo: {
        '@type': 'ImageObject',
        url: 'https://onetofiveclick.com/logo.png',
      },
    },
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://onetofiveclick.com/blog/aeo-answer-engine-optimization-guide/',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-24 bg-white overflow-hidden min-h-screen text-right">
        {/* Status Bar */}
        <div className="bg-brand-navy border-b border-white/5 py-8 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end gap-12">
              <h2 className="text-[11px] text-slate-400 max-w-5xl leading-relaxed font-black uppercase tracking-wider">
                دليل شامل — <span className="text-white">AEO: تحسين محركات الإجابة</span> — كيف تجعل ChatGPT و Perplexity و Claude يوصون بعملك
              </h2>
              <div className="h-4 w-px bg-white/10 flex-shrink-0" />
              <div className="flex items-center gap-3 flex-shrink-0">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">AEO_GUIDE_2026</p>
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
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
                <Bot className="h-4 w-4" />
                <span>دليل AEO الشامل — تحسين محركات الإجابة</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-12 leading-[0.85] tracking-tighter">
                كيف تجعل <br />
                <span className="text-brand-green">الذكاء الاصطناعي</span> <br />
                يوصي بعملك؟
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                دليلك الشامل لـ AEO — تحسين محركات الإجابة. تعلّم كيف تجعل ChatGPT و Claude و Perplexity و Gemini يستشهدون بموقعك كمصدر موثوق.
              </p>
              <div className="flex flex-col sm:flex-row-reverse gap-6 justify-center">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-green/20 group gap-3"
                >
                  احصل على تدقيق AEO مجاني
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/services/seo/"
                  className="inline-flex items-center justify-center border border-white/10 text-white px-12 py-6 rounded-full hover:bg-white/5 transition-all font-black text-[10px] uppercase tracking-widest backdrop-blur-sm"
                >
                  خدماتنا في AEO & SEO
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
              <h2 className="text-lg font-black text-brand-navy mb-6 uppercase tracking-widest text-[10px]">فهرس المحتويات</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tableOfContents.map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 flex-row-reverse text-sm font-bold text-slate-500 hover:text-brand-green transition-colors group"
                  >
                    <span className="text-[10px] font-black text-brand-green bg-brand-mint px-3 py-1 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What is AEO */}
        <section id="what-is-aeo" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-brand-green font-black uppercase tracking-widest text-[10px] mb-8">
                <Bot className="h-4 w-4" />
                <span>المفهوم الأساسي</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.9]">
                ما هو AEO؟ <br />
                <span className="text-brand-green">تحسين محركات الإجابة.</span>
              </h2>

              <div className="prose prose-lg max-w-none text-right">
                <p className="text-xl text-slate-500 leading-relaxed font-bold mb-8">
                  <strong className="text-brand-navy">AEO (Answer Engine Optimization)</strong> أو تحسين محركات الإجابة هو مفهوم جديد يشمل تحسين ظهورك عبر جميع منصات الذكاء الاصطناعي — سواء كان Google، أو ChatGPT، أو Claude، أو Perplexity، أو Gemini، أو حتى Grok (من منصة X)، وأيضاً المساعدين الصوتيين مثل Siri و Alexa.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed font-bold mb-8">
                  ببساطة: عندما يطرح شخص ما سؤالاً على أي من هذه الأدوات، فإن AEO يضمن أن <strong className="text-brand-navy">عملك يظهر كالإجابة</strong> — وليس مجرد رابط في قائمة طويلة من المواقع.
                </p>

                <div className="bg-brand-navy rounded-[2.5rem] p-12 my-12 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green mb-6">المفتاح الجوهري</p>
                    <p className="text-2xl font-black leading-relaxed tracking-tight">
                      "في عالم SEO، تحصل على قائمة مواقع وعليك أن تختار. في عالم AEO، تحصل على <span className="text-brand-green">إجابة واحدة مباشرة</span> — وهذا ما يريده الناس."
                    </p>
                  </div>
                </div>

                <p className="text-lg text-slate-500 leading-relaxed font-bold">
                  الفكرة بسيطة: كبشر، لا نريد أن نتصفح عشرات المواقع للعثور على إجابة. نريد الإجابة مباشرة. وأدوات الذكاء الاصطناعي تقدم هذا بالضبط. لذلك، إذا لم يكن محتواك مُهيئاً ليكون "الإجابة"، فأنت تفقد فرصة هائلة.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO vs AEO Comparison */}
        <section id="seo-vs-aeo" className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter">
                SEO مقابل <span className="text-brand-green">AEO</span>
              </h2>
              <p className="text-lg text-slate-500 font-bold max-w-2xl mx-auto">
                لماذا لا يكفي SEO وحده في 2026؟ إليك المقارنة الكاملة.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[3rem] border border-slate-200 bg-white shadow-2xl">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black">الجانب</th>
                    <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black">
                      <span className="flex items-center gap-2 flex-row-reverse justify-center">
                        <Search className="h-4 w-4" />
                        SEO التقليدي
                      </span>
                    </th>
                    <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black">
                      <span className="flex items-center gap-2 flex-row-reverse justify-center text-brand-green">
                        <Bot className="h-4 w-4" />
                        AEO الجديد
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {seoVsAeoComparison.map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-brand-mint/20 transition-colors">
                      <td className="p-8 font-black text-brand-navy text-sm">{row.aspect}</td>
                      <td className="p-8 text-slate-500 text-sm font-bold">{row.seo}</td>
                      <td className="p-8 text-brand-navy text-sm font-bold bg-brand-mint/10">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why AEO Matters NOW */}
        <section id="why-aeo-matters" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 text-brand-green font-black uppercase tracking-widest text-[10px] mb-8">
                  <Zap className="h-4 w-4" />
                  <span>لماذا الآن؟</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.9]">
                  ميزة المبادر <br />
                  <span className="text-brand-green">الأول.</span>
                </h2>
                <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                  معظم الشركات لم تسمع بعد بمصطلح AEO. هذا يعني أنك إذا تبنيته الآن، <span className="text-brand-navy">ستكون متقدماً على 99% من منافسيك</span>. الناس بدأوا بالفعل يسألون أدوات الذكاء الاصطناعي للتوصية بمقدمي خدمات — والعدد يتزايد كل شهر.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'الناس يتحولون', desc: 'الملايين يستخدمون ChatGPT و Perplexity بدلاً من Google للبحث عن مطاعم وخدمات ومقدمي خدمات.' },
                    { title: 'التبني المبكر = مكاسب أكبر', desc: 'الشركات التي تظهر أولاً في نتائج AI ستبني ثقة طويلة الأمد يصعب على المنافسين كسرها لاحقاً.' },
                    { title: 'مازال Wild West', desc: 'لا يوجد قواعد صارمة بعد. هذه هي اللحظة المثالية لتكون من يضع القواعد في مجالك.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 p-8 border border-slate-100 bg-slate-50 rounded-[2.5rem] hover:border-brand-green transition-colors group flex-row-reverse text-right">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-green transition-colors flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-brand-green group-hover:text-brand-navy" />
                      </div>
                      <div>
                        <h4 className="font-black text-brand-navy uppercase tracking-widest text-[10px] mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="relative">
                <div className="absolute -inset-10 bg-brand-green/5 blur-[100px] rounded-full" />
                <div className="bg-brand-navy rounded-[4rem] p-16 text-white shadow-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
                  <div className="relative z-10 space-y-10">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green mb-4">إحصائية مفاجئة</p>
                      <p className="text-6xl font-black tracking-tighter text-white">99%</p>
                      <p className="text-slate-400 text-sm font-bold mt-3">من المستشارين الماليين لم يسمعوا بـ AEO بعد — وأنت الآن ضمن الـ 1% المتقدم</p>
                    </div>
                    <div className="border-t border-white/10 pt-10">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green mb-4">تحول المستخدمين</p>
                      <p className="text-4xl font-black tracking-tighter text-white">ChatGPT</p>
                      <p className="text-slate-400 text-sm font-bold mt-3">يحل محل Google كأداة بحث أساسية للعثور على المطاعم والخدمات المحلية</p>
                    </div>
                    <div className="border-t border-white/10 pt-10">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green mb-4">الفرصة</p>
                      <p className="text-4xl font-black tracking-tighter text-white">30-90 يوماً</p>
                      <p className="text-slate-400 text-sm font-bold mt-3">المدة المطلوبة لنضج كيانك الرقمي في أنظمة الذكاء الاصطناعي</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Schema Section */}
        <section id="faq-schema" className="py-32 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-white/10">
                <Code2 className="h-4 w-4" />
                <span>العنصر التقني الأهم</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                صفحات FAQ <br />
                <span className="text-brand-green">مع Schema Markup.</span>
              </h2>
              <p className="text-xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed">
                الخطوة الأهم في AEO: إنشاء صفحات أسئلة شائعة مع ترميز مُهيكل يُخبر الذكاء الاصطناعي بالضبط ما هو السؤال وما هي الإجابة.
              </p>
            </div>

            {/* Schema Code Example */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-white/10 mb-16 overflow-x-auto">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green mb-6">مثال على FAQPage Schema Markup</p>
              <pre className="text-sm text-slate-300 leading-relaxed font-mono text-left direction-ltr" dir="ltr">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي خدمات السيو التي تقدمونها؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نقدم خدمات سيو شاملة تشمل..."
      }
    }
  ]
}`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight">بدون Schema</h3>
                <p className="text-slate-400 font-bold text-sm leading-relaxed">
                  أنت تكتب أسئلة وأجوبة عادية. لكن أدوات الذكاء الاصطناعي تحتاج لـ "تخمين" أن هذا سؤال وهذه إجابة. النتيجة: فرص أقل للظهور.
                </p>
              </div>
              <div className="bg-brand-green/10 rounded-[2.5rem] p-10 border border-brand-green/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight">مع Schema</h3>
                <p className="text-slate-300 font-bold text-sm leading-relaxed">
                  أنت تُخبر محركات البحث والذكاء الاصطناعي بوضوح: "هذا سؤال وهذه إجابته." النتيجة: ظهور مضاعف في نتائج AI و Featured Snippets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Question Format Section */}
        <section id="question-format" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter">
                ما الأسئلة <br />
                <span className="text-brand-green">التي يجب أن تطرحها؟</span>
              </h2>
              <p className="text-lg text-slate-500 font-bold max-w-2xl mx-auto">
                فكّر في الأسئلة التي يطرحها عملاؤك المحتملون فعلاً. إليك أربع فئات رئيسية.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {questionCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 hover:border-brand-green transition-all group"
                  >
                    <div className="flex items-center gap-4 flex-row-reverse mb-8">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-green transition-colors">
                        <Icon className="h-7 w-7 text-brand-green group-hover:text-brand-navy transition-colors" />
                      </div>
                      <h3 className="text-xl font-black text-brand-navy tracking-tight">{cat.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {cat.questions.map((q, qi) => (
                        <div key={qi} className="flex items-start gap-3 flex-row-reverse">
                          <div className="w-6 h-6 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[9px] font-black text-brand-green">{qi + 1}</span>
                          </div>
                          <p className="text-sm text-slate-600 font-bold leading-relaxed">{q}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pro Tip */}
            <div className="mt-16 bg-brand-green/10 rounded-[2.5rem] p-10 border border-brand-green/20">
              <div className="flex items-start gap-6 flex-row-reverse">
                <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-brand-navy" />
                </div>
                <div>
                  <h4 className="font-black text-brand-navy text-lg mb-3">نصيحة ذهبية: استخدم AI لاكتشاف الأسئلة</h4>
                  <p className="text-slate-600 font-bold leading-relaxed">
                    اذهب إلى ChatGPT واكتب: "أنا أستعد للتعاقد مع وكالة تسويق رقمي في الرياض. ما هي الأسئلة التي يجب أن أطرحها قبل التعاقد؟" — ستحصل على قائمة ذهبية من الأسئلة التي يطرحها عملاؤك المحتملون فعلاً. استخدم هذه الأسئلة في صفحة FAQ الخاصة بك.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section id="three-pillars" className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter">
                الركائز الثلاث <br />
                <span className="text-brand-green">للظهور في نتائج AI.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  num: '01',
                  title: 'بناء السلطة الموضوعية',
                  desc: 'اجعل موقعك المرجع الأول في مجالك من خلال محتوى عميق ومتكامل يغطي كل زوايا الموضوع.',
                  icon: Globe,
                },
                {
                  num: '02',
                  title: 'الظهور في المصادر الخارجية',
                  desc: 'تأكد أن اسمك يظهر في Wikipedia و LinkedIn و المنتديات المتخصصة — هذه هي المصادر التي تعتمد عليها أدوات AI.',
                  icon: Target,
                },
                {
                  num: '03',
                  title: 'تنسيق المحتوى (FAQ + Schema)',
                  desc: 'هيكل محتواك كأسئلة وأجوبة مع Schema Markup. هذا هو الركيزة التي تحدثنا عنها بالتفصيل في هذا الدليل.',
                  icon: FileQuestion,
                },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative p-14 rounded-[3.5rem] border overflow-hidden text-right transition-all hover:shadow-2xl ${
                    i === 2 ? 'bg-brand-navy text-white border-brand-green' : 'bg-white border-slate-100 hover:border-brand-green'
                  }`}
                >
                  <div className="absolute top-8 left-8">
                    <span className={`text-8xl font-black tracking-tighter ${i === 2 ? 'text-white/5' : 'text-slate-100'}`}>{pillar.num}</span>
                  </div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-sm ${
                      i === 2 ? 'bg-brand-green/20' : 'bg-brand-mint/50'
                    }`}>
                      <pillar.icon className={`h-8 w-8 ${i === 2 ? 'text-brand-green' : 'text-brand-green'}`} />
                    </div>
                    <h3 className={`text-2xl font-black mb-6 tracking-tighter ${i === 2 ? 'text-brand-green' : 'text-brand-navy'}`}>
                      {pillar.title}
                    </h3>
                    <p className={`font-bold text-sm leading-relaxed ${i === 2 ? 'text-slate-400' : 'text-slate-500'}`}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Actionable Steps */}
        <section id="actionable-steps" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter">
                6 خطوات <br />
                <span className="text-brand-green">عملية للتنفيذ.</span>
              </h2>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] max-w-xl mx-auto">
                خطوات واضحة يمكنك البدء بتطبيقها اليوم على موقعك
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {actionableSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-brand-green transition-all group hover:shadow-2xl text-right"
                  >
                    <div className="absolute top-8 left-8">
                      <span className="text-6xl font-black text-slate-100 tracking-tighter group-hover:text-brand-mint transition-colors">{step.step}</span>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-green transition-colors">
                        <Icon className="h-7 w-7 text-brand-green group-hover:text-brand-navy transition-colors" />
                      </div>
                      <h3 className="text-lg font-black text-brand-navy mb-4 tracking-tight group-hover:text-brand-green transition-colors">{step.title}</h3>
                      <p className="text-slate-500 text-sm font-bold leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section id="faq" className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-brand-navy/5 text-brand-navy px-4 py-2 rounded-full text-xs font-bold mb-6">
                <FileQuestion className="h-4 w-4" />
                <span>أسئلة شائعة مع Schema Markup</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-6 tracking-tighter">
                كل ما تريد <br />
                <span className="text-brand-green">معرفته عن AEO.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {blogFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-100 rounded-[2rem] overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full p-8 flex items-center justify-between text-right gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-lg font-black text-brand-navy leading-tight">
                      {faq.q}
                    </span>
                    <ChevronDown className={`h-6 w-6 text-brand-green transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: openFaqIndex === index ? 'auto' : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-slate-500 font-bold leading-relaxed text-base border-t border-slate-100/50">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="bg-brand-green rounded-[5rem] p-20 md:p-40 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
              <div className="absolute inset-0 bg-white/10 opacity-30 blur-3xl rounded-full translate-y-1/2" />
              <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.85]">
                جاهز لتكون <br />
                إجابة الذكاء الاصطناعي؟
              </h2>
              <p className="text-xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                نحن متخصصون في AEO و GEO. دعنا نجعل ChatGPT و Perplexity و Claude يوصون بعملك كمصدر موثوق في السعودية.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact/"
                  className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
                >
                  احصل على تدقيق AEO مجاني
                  <ArrowLeft className="h-6 w-6 text-brand-green" />
                </Link>
                <Link
                  href="/services/seo/"
                  className="inline-flex items-center bg-white text-brand-navy px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-xl gap-4"
                >
                  خدمات SEO & AEO
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
