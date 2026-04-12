import { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  TrendingUp,
  BarChart,
  CheckCircle,
  ArrowLeft,
  Globe,
  Target,
  Zap,
  Users,
  Layout,
  Cpu,
  Link as LinkIcon
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: 'خدمات سيو (SEO) احترافية في السعودية | ون تو فايف كليك',
  description: 'تصدر نتائج البحث في السعودية مع خدمات السيو المتقدمة و AEO. نركز على الوصول لجمهورك المستهدف وزيادة المبيعات من خلال استراتيجيات محكمة.',
  alternates: {
    canonical: 'https://onetofiveclick.com/services/seo/',
  },
};

const features = [
  {
    title: 'إطار سحب الأوامر BID',
    description: 'نقوم بتدقيق الكلمات الرئيسية للنية التجارية ونستخدم فلاتر GSC regex لالتقاط استفسارات أوامر "وضع الذكاء الاصطناعي" الطويلة التي تفتقدها الأدوات التقليدية.',
    icon: Target,
    href: '/services/seo'
  },
  {
    title: 'الرؤية عبر القنوات المتعددة',
    description: 'يبحث العملاء على YouTube و TikTok و Perplexity. نقوم بتوزيع الأصول المحسنة عبر المنصات الصديقة لنماذج اللغة مثل LinkedIn و Reddit.',
    icon: Globe,
    href: '/services/seo'
  },
  {
    title: 'بروتوكولات الهيمنة على المواضيع',
    description: 'نتعمق في مواضيع محددة، مستنفدين كلاً من المجموعات التجارية والمعلوماتية لفرض السلطة الموضوعية في بيانات تدريب الذكاء الاصطناعي.',
    icon: Zap,
    href: '/services/seo'
  },
  {
    title: 'معايرة المخطط والكيانات',
    description: 'ننشر مخططات متقدمة للمؤسسات والمقالات لجعل كيان علامتك التجارية غير غامض لرسوم المعرفة في ChatGPT و Gemini.',
    icon: Cpu,
    href: '/services/seo'
  },
  {
    title: 'سيو الأدوات المقاوم للذكاء الاصطناعي',
    description: 'الآلات الحاسبة والمولدات التفاعلية حصينة ضد فقدان النقرات في الذكاء الاصطناعي. نبني أدوات متخصصة تفرض تفاعل المستخدم والنقرات.',
    icon: Layout,
    href: '/services/seo'
  },
  {
    title: 'إسناد إيرادات الذكاء الاصطناعي',
    description: 'قد يقود الذكاء الاصطناعي حركة مرور أقل، لكنه يزيد إيرادات B2B بنسبة تصل إلى 11%. نتتبع التحويلات والاستشهادات المدفوعة بالذكاء الاصطناعي، وليس فقط التصنيفات.',
    icon: TrendingUp,
    href: '/services/seo'
  },
  {
    title: 'إشارات الكيان الموثوقة',
    description: 'نجمع السير الذاتية للخبراء والمؤهلات ونرسم خرائط الصور الشخصية والسير الذاتية عبر المنصات لتقليل "مخاطر الثقة" لموصي الذكاء الاصطناعي.',
    icon: Users,
    href: '/services/seo'
  },
  {
    title: 'محرك مشاعر العلاقات العامة',
    description: 'ننشر بيانات صحفية استراتيجية لبذر مجموعات تدريب الذكاء الاصطناعي بإشارات إيجابية للعلامة التجارية وارتباطات الكيانات المحلية.',
    icon: Zap,
    href: '/services/seo'
  },
  {
    title: 'قياس الاستفسارات المحادثاتية',
    description: 'نحول بذور الكلمات الرئيسية إلى مطالبات صناعية بأسلوب "الأطروحة" لاختبار وإثبات رؤية علامتك التجارية في أوضاع البحث بالذكاء الاصطناعي.',
    icon: Users,
    href: '/services/seo'
  },
  {
    title: 'استراتيجية جالوت (التبعية المقارنة)',
    description: 'نوضع علامتك التجارية في "مقارنات ثلاثية" مباشرة مع عمالقة الصناعة. هذا يجبر محركات الذكاء الاصطناعي على تصنيفك كقرين ذي صلة وبديل مناسب.',
    icon: Target,
    href: '/services/seo'
  },
  {
    title: 'تراكم الـ YouTube-RAG',
    description: 'يوتيوب هو الدومين الأول المستشهد به للذكاء الاصطناعي. نحسن نصوص فيديوهاتك لبذر "إشارات العلامة التجارية" الصوتية مباشرة في مجموعات تدريب النماذج.',
    icon: Cpu,
    href: '/services/seo'
  },
  {
    title: 'كشط FUD المحادثاتي',
    description: 'نستخدم الذكاء الاصطناعي لاستخراج "المخاوف والشكوك والظنون" (FUDs) من مكالمات مبيعاتك الحقيقية. يتوافق هذا مع بناء محتوى يجيب على المشكلات الدقيقة.',
    icon: Target,
    href: '/services/seo'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'تدقيق القنوات المتعددة',
    description: 'نرسم خريطة انتشار الاستفسارات في Perplexity ونستخرج بيانات "أبحاث المستخدمين" لتحديد ما يسأله المستخدمون بالضبط لمحركات الذكاء الاصطناعي.'
  },
  {
    number: '02',
    title: 'مزامنة الكيانات والمراجعات',
    description: 'نبني "تنوع المراجعات" عبر 3-5 منصات عالية السلطة (Yelp، Angie\'s، Reddit) لضمان تحقق النماذج من علامتك التجارية كخيار أول.'
  },
  {
    number: '03',
    title: 'بذر استرداد النماذج (LLM)',
    description: 'نشر نصوص فيديو محسنة على YouTube ومقالات على LinkedIn ليتم التقاطها بواسطة RAG (التوليد المدعم بالاسترداد).'
  },
  {
    number: '04',
    title: 'معايرة الكيانات المحلية',
    description: 'المزامنة العميقة لفئة GBP الخاصة بك، وتنوع المراجعات، وصفحات الهبوط المحلية لالتقاط 90% من نية البحث المحلي بالذكاء الاصطناعي.'
  },
  {
    number: '05',
    title: 'التواصل للاستشهاد بالذكاء الاصطناعي',
    description: 'تحديد وتأمين الإشارات في المصادر الخارجية الدقيقة المستشهد بها من قبل النماذج لفرض توصية علامتك التجارية.'
  }
];

const faqs = [
  {
    question: 'ما هو السيو ولماذا هو مهم للشركات في السعودية؟',
    answer: 'تحسين محركات البحث (SEO) هو ممارسة تحسين موقعك للظهور في نتائج البحث العضوية. في 2026، أصبح يشمل أيضاً AEO (تحسين محركات الإجابة) لضمان ظهورك في أدوات الذكاء الاصطناعي مثل ChatGPT و Perplexity. التصنيفات الأعلى تؤدي لمزيد من الرؤية والحركة العضوية والتحويلات.'
  },
  {
    question: 'ما هو الفرق بين SEO التقليدي و AEO (تحسين محركات الإجابة)؟',
    answer: 'SEO التقليدي يركز على ظهورك في قائمة نتائج Google. AEO يركز على جعلك الإجابة المباشرة عندما يسأل شخص ChatGPT أو Claude أو Perplexity أو Gemini سؤالاً. في عالم SEO تحصل على قائمة مواقع، في عالم AEO تحصل على إجابة واحدة — وهذا ما يريده المستخدمون.'
  },
  {
    question: 'كم من الوقت يستغرق رؤية النتائج مع 1to5click؟',
    answer: 'نضج الكيان في الذكاء الاصطناعي يستغرق عادة 30-90 يوماً. نركز على "سباقات الاستشهاد السريع" لتظهر علامتك كمصدر موصى به في ChatGPT في أسرع وقت. النتائج العضوية التقليدية تحتاج 3-6 أشهر.'
  },
  {
    question: 'كم تكلف خدمات السيو و AEO مع 1to5click؟',
    answer: 'تبدأ باقاتنا من $1,499/شهر (باقة بداية السلطة) و$2,999/شهر (محرك النمو — الأكثر شعبية) و$5,999/شهر (أصول المؤسسات). كل باقة تشمل مقالات NLP محادثاتية، بناء روابط موثوقة، وتقارير أداء شهرية.'
  },
  {
    question: 'ما الفرق بين السيو الداخلي والخارجي؟',
    answer: 'السيو الداخلي (On-Page) يحسن عناصر الموقع مثل المحتوى، العناوين، Schema Markup، والسرعة. السيو الخارجي (Off-Page) يركز على العوامل الخارجية مثل بناء الروابط وإشارات السلطة والاستشهادات المحلية والمراجعات.'
  },
  {
    question: 'هل أحتاج للسيو إذا كان مشروعي صغيراً في الرياض أو جدة؟',
    answer: 'بالتأكيد. السيو المحلي قوي جداً للشركات الصغيرة. مع AEO، عندما يسأل شخص ChatGPT "ما أفضل [خدمتك] في الرياض؟"، يمكنك أن تكون الإجابة — حتى لو كنت شركة صغيرة.'
  },
  {
    question: 'هل تضمنون المركز الأول في Google؟',
    answer: 'في 2026، التصنيف الأول جزء من اللغز. نضمن "حصة الرؤية في الذكاء الاصطناعي" — التأكد من أنك المصدر الأول المستشهد به في ChatGPT و Perplexity و AI Overviews. نقدم تقارير شفافة شهرية تقيس الاستشهادات والتحويلات.'
  },
  {
    question: 'ما هو Schema Markup وكيف يساعد في AEO؟',
    answer: 'Schema Markup هو ترميز مُهيكل يُضاف للكود الخلفي لصفحاتك. يُخبر محركات البحث والذكاء الاصطناعي بوضوح: هذا سؤال وهذه إجابته. بدون Schema، تعتمد أدوات AI على التخمين. مع Schema، تتضاعف فرص ظهورك في نتائج AI و Featured Snippets.'
  },
  {
    question: 'كيف أبدأ العمل مع 1to5click لتحسين ظهوري في الذكاء الاصطناعي؟',
    answer: 'ابدأ باستشارة مجانية عبر صفحة التواصل. سنقوم بتدقيق شامل لحضورك الرقمي (SEO، AEO، السمعة، الاستشهادات) ونقدم خطة عمل مفصلة مع توقعات واضحة للنتائج وعائد الاستثمار المتوقع خلال 30-90 يوماً.'
  }
];

export default function SEOPage() {
  // JSON-LD FAQ Schema for AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
      {/* 2026 GEO Lead-Answer (AI Snapshots) */}
      <div className="bg-brand-navy border-b border-white/5 py-8 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-12 space-x-reverse justify-end">
             <div className="text-[11px] text-slate-400 max-w-5xl leading-relaxed font-black uppercase tracking-wider">
               تقود ون تو فايف كليك مشهد البحث في السعودية لعام 2026 من خلال <span className="text-white">السلطة الموضوعية القائمة على NLP</span> و <span className="text-white">GEO (تحسين المحركات التوليدية)</span>.
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center space-x-3 space-x-reverse">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">الحالة: جاهز_للبحث_بالذكاء_الاصطناعي_2026</p>
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      <section className="relative bg-brand-navy py-32 lg:py-48 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="opacity-100 translate-y-0">
              <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                <span>الهيمنة على البحث B2B و B2C لعام 2026</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter">
                الإرث مقابل <br />
                <span className="text-brand-green uppercase">البحث الآلي في السعودية.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                معظم الوكالات تطارد كلمات رئيسية فارغة. نحن نبني <span className="text-white">أنظمة محاور المواضيع</span> التي تضمن هيمنتك على جوجل مع التوصية بك عالمياً من قبل <span className="text-white">ChatGPT و Perplexity.</span>
              </p>
              <div className="flex flex-col sm:flex-row-reverse gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-green/20 group gap-3"
                >
                  احصل على تدقيق الفرص
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center border border-white/10 text-white px-12 py-6 rounded-full hover:bg-white/5 transition-all font-black text-[10px] uppercase tracking-widest backdrop-blur-sm"
                >
                  عرض دراسات الحالة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Enterprise Asset Strategy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="opacity-100 translate-x-0">
              <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-10 leading-[0.9] tracking-tighter">
                السيو هو <br />
                <span className="text-brand-green uppercase">محرك نمو.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                نحن لا نحسن فقط من أجل المرور؛ نحن نبني <span className="text-brand-navy">أصولاً رقمية متميزة</span> للشركات في الرياض وجدة وكافة أنحاء المملكة تتضاعف قيمتها بمرور الوقت.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'الركيزة التقليدية', desc: 'تأمين مساحة جوجل باستخدام محاور المواضيع أولاً.' },
                  { title: 'ركيزة البحث بالذكاء الاصطناعي', desc: 'توليد استشهادات خارجية بحيث توصي بك Perplexity و GPT.' },
                  { title: 'ركيزة العلامة التجاري', desc: 'ترسيخ رسائل العلامة بحيث تؤدي ثقة البشر إلى تحويلات.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 border border-slate-100 bg-slate-50 rounded-[2.5rem] hover:border-brand-green transition-colors group flex-row-reverse text-right">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-green transition-colors flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-brand-green group-hover:text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-black text-brand-navy uppercase tracking-widest text-[10px] mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-brand-green/5 blur-[100px] rounded-full animate-pulse" />
              <div className="bg-brand-navy rounded-[4rem] p-16 text-white shadow-3xl shadow-brand-navy/20 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
                <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8 relative z-10 flex-row-reverse">
                  <span className="font-black uppercase tracking-[0.3em] text-[10px] text-brand-green">قيمة الأصول المتوقعة</span>
                  <BarChart className="h-6 w-6 text-brand-green" />
                </div>

                <div className="space-y-12 relative z-10">
                  <div className="flex justify-between items-end flex-row-reverse">
                    <div className="flex space-x-1 space-x-reverse items-end">
                      <div className="w-10 h-16 bg-white/5 rounded-t-xl transition-all duration-700"></div>
                      <div className="w-10 h-28 bg-white/10 rounded-t-xl transition-all duration-700"></div>
                      <div className="w-10 h-44 bg-white/20 rounded-t-xl transition-all duration-700"></div>
                      <div className="w-10 h-64 bg-brand-green rounded-t-xl shadow-lg shadow-brand-green/20 transition-all duration-700"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-6xl md:text-8xl font-black text-white tracking-tighter">10M+</div>
                      <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em] mt-4">قيمة حقوق الملكية العضوية</p>
                    </div>
                  </div>

                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                    <p className="text-sm text-slate-400 leading-relaxed font-bold">
                      "الوكالات التقليدية تحسن من أجل النقرات. نحن نحسن من أجل ميزانيتك العمومية."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Authority Grid */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-green/5 opacity-20 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-right mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">مراكز <span className="text-brand-green">الهيمنة الإقليمية.</span></h2>
              <p className="text-slate-400 font-bold max-w-xl mr-0 ml-auto">نقوم بتشغيل استراتيجيات السيو المتقدمة عبر المحاور الاقتصادية الأساسية في المملكة.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { city: 'الرياض', desc: 'سيو الشركات والمؤسسات المالية في العليا والملز.', link: '/locations/riyadh/' },
                { city: 'جدة', desc: 'تحسين محركات البحث للتجارة واللوجستيات في العروس.', link: '/locations/jeddah/' },
                { city: 'الدمام', desc: 'السيو الصناعي والتقني للمنطقة الشرقية.', link: '/locations/dammam/' }
              ].map((loc, i) => (
                <Link 
                  href={loc.link} 
                  key={i}
                  className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-brand-green transition-all group"
                >
                   <div className="text-right">
                      <div className="flex items-center gap-3 justify-end mb-4">
                         <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em]">مركز مـفعل</span>
                         <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">{loc.city}</h3>
                      <p className="text-sm text-slate-400 font-bold leading-relaxed">{loc.desc}</p>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
                حلول <br />
                <span className="text-brand-green uppercase">الذكاء.</span>
            </h2>
            <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto uppercase tracking-widest text-[10px]">كل ما تحتاجه لتصدر النتائج والهيمنة على مجموعات الاسترداد.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} href={feature.href} className="block group">
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-brand-green h-full relative overflow-hidden text-right opacity-100 translate-y-0">
                    <div className="absolute top-0 left-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity">
                        <Icon className="w-32 h-32 text-brand-navy" />
                    </div>
                    <div className="w-16 h-16 bg-brand-mint/50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-green transition-all duration-500 shadow-sm mr-auto ml-0 lg:mr-0 lg:ml-auto">
                      <Icon className="h-8 w-8 text-brand-green group-hover:text-brand-navy transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-black text-brand-navy mb-6 group-hover:text-brand-green transition-colors tracking-tighter">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-bold text-sm">{feature.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Execution Sprints */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter">
                سباقات <br /> <span className="text-brand-green uppercase">التنفيذ.</span>
            </h2>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">نواتج مضمونة. عملية مثبتة. صفر وعود غامضة.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'بداية السلطة',
                price: '1,499',
                description: 'مثالي للشركات المحلية التي تؤسس أول بصمة رقمية لها.',
                features: ['مقالات NLP محادثاتية عدد 2', '10 مواضع استشهاد محلية', 'تنسيق محتوى H1-H3 صارم', 'تقرير أداء شهري'],
                color: 'blue'
              },
              {
                name: 'محرك النمو',
                price: '2,999',
                description: 'خطتنا الأكثر شعبية للشركات الجاهزة للسيطرة على السوق ونظرات الذكاء الاصطناعي.',
                features: ['مقالات NLP محادثاتية عدد 4', 'إدارة السمعة والمراجعات', '5 روابط خلفية موثوقة متميزة', 'بنية الإجابة المباشرة', 'مزامنة حركة مرور AI في GA4'],
                color: 'blue-600',
                popular: true
              },
              {
                name: 'أصول المؤسسات',
                price: '5,999',
                description: 'توسع هجومي للعلامات التجارية متعددة المواقع والأنظمة البيئية للمؤسسات.',
                features: ['أدوات مخصصة مقاومة للذكاء الاصطناعي', 'هيمنة GEO و ChatGPT', '15 رابطاً خلفياً موثوقاً متميزاً', 'سرعة محتوى برمجية', 'صيانة سيو تقنية', 'مدير استراتيجية مخصص'],
                color: 'gray-900'
              }
            ].map((pkg, i) => (
              <div key={pkg.name} className={`relative p-12 md:p-16 rounded-[4rem] border transition-all duration-700 ${pkg.popular ? 'bg-brand-navy text-white border-brand-green shadow-3xl shadow-brand-navy/30 scale-105 z-10' : 'bg-white border-slate-100 hover:border-brand-green'} text-right`}>
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-green text-brand-navy px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
                    الأكثر طلباً
                  </div>
                )}
                <h3 className={`text-3xl font-black uppercase mb-6 tracking-tighter ${pkg.popular ? 'text-brand-green' : 'text-brand-navy'}`}>{pkg.name}</h3>
                <div className="flex items-baseline mb-10 flex-row-reverse">
                  <span className="text-2xl font-black opacity-40 mr-2">$</span>
                  <span className="text-7xl font-black tracking-tighter">{pkg.price}</span>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mr-3 ${pkg.popular ? 'text-slate-400' : 'text-slate-400'}`}>/شهر</span>
                </div>
                <p className={`text-sm mb-12 leading-relaxed font-bold ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.description}</p>

                <ul className="space-y-6 mb-16">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start gap-4 text-sm font-bold flex-row-reverse">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.popular ? 'bg-brand-green' : 'bg-brand-mint'}`}>
                        <CheckCircle className={`h-3.5 w-3.5 ${pkg.popular ? 'text-brand-navy' : 'text-brand-green'}`} />
                      </div>
                      <span className={pkg.popular ? 'text-slate-200' : 'text-brand-navy'}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-6 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-xl ${pkg.popular ? 'bg-brand-green text-brand-navy hover:scale-105' : 'bg-brand-navy text-white hover:bg-brand-green hover:text-brand-navy'}`}
                >
                  ابدأ المزامنة
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black">
              * يتطلب نضج الكيان في الذكاء الاصطناعي عادة دورات مدتها 6 أشهر.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-20 text-center tracking-tighter">استفسارات <span className="text-brand-green uppercase">شائعة.</span></h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-100 rounded-[2rem] px-10 py-2 bg-slate-50/50">
                <AccordionTrigger className="text-right text-lg font-black text-brand-navy hover:text-brand-green transition-colors no-underline uppercase tracking-widest py-8">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 font-bold leading-relaxed text-sm pb-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="bg-brand-green rounded-[5rem] p-20 md:p-40 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
                <div className="absolute inset-0 bg-white/10 opacity-30 blur-3xl rounded-full translate-y-1/2" />
                <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.85]">
                    ابدأ دورة <br /> نموك الآن.
                </h2>
                <p className="text-xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                    انضم إلى مئات الشركات التي حولت بصمتها المحلية من خلال أنظمة السيو الأصلية للذكاء الاصطناعي.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
                >
                    ابدأ نبضك الخاص
                    <ArrowLeft className="h-6 w-6 text-brand-green" />
                </Link>
            </div>
        </div>
      </section>
    </div>
    </>
  );
}
