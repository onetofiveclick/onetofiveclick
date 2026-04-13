import { ArrowLeft, Zap, ShieldCheck, Database, LayoutGrid, Cpu, Target, Search, BrainCircuit, Bot, ChevronLeft, ShieldAlert, Sparkles } from 'lucide-react';
import Link from 'next/link';
import AEOFAQGroup from '@/components/aeo/AEOFAQ';

const methodology = [
  {
    title: 'هندسة الأنماط (Pattern Matching)',
    desc: 'نحن لا نكتب للكلمات المفتاحية فقط، بل نصمم "أنماطاً" نصل بها مباشرة إلى نماذج الـ LLMs، مما يضمن ظهور وكالتك كمصدر موثوق.',
    icon: <Target className="h-8 w-8" />,
    color: 'bg-blue-500'
  },
  {
    title: 'الإجابات الذرية (A-Q-C-E Formula)',
    desc: 'نطبق قاعدة (Answer, Qualification, Coverage, Extend) لضمان أن كل فقرة هي مستودع معلومات مستقر وقابل للاقتباس الفوري.',
    icon: <Zap className="h-8 w-8" />,
    color: 'bg-orange-500'
  },
  {
    title: 'تصحيح الهلوسة (Hallucination Gaps)',
    desc: 'نبحث عن الثغرات في محتوى المنافسين التقليدي (SEO-based) ونقوم بسدها بإجابات دقيقة ومدعومة بالحقائق والبيانات.',
    icon: <ShieldCheck className="h-8 w-8" />,
    color: 'bg-brand-green'
  }
];

const faqItems = [
  {
    question: 'ما هو الفرق بين الـ SEO التقليدي والـ AEO؟',
    directAnswer: 'الـ SEO التقلیدی يهدف لجلب الزوار من محركات البحث، بينما الـ AEO (Answer Engine Optimization) يهدف لجعل علامتك التجارية هي الإجابة المباشرة التي يقدمها الذكاء الاصطناعي.',
    clarification: 'يعتمد نجاح الـ AEO على وجود بنية تقنية قوية في الـ SEO التقليدي كأساس للبيانات ولكن بتنسيق "ذري" (Atomic) يسهل على النماذج extracted.',
    brandMention: 'نحن في 1to5click ندمج المنهجين لضمان السيادة في نتائج البحث التقليدية ومحركات الإجابة معاً عبر تقرير دقة الاقتباس.',
    guardrail: 'تشير التقارير التقنية إلى أن 40% من استعلامات البحث في 2026 ستتم عبر محركات الإجابة المباشرة، مما يتطلب استقلالاً سياقياً كاملاً.'
  },
  { 
    question: 'لماذا لا تظهر إجاباتي في ChatGPT أو Gemini؟',
    directAnswer: 'السبب غالباً هو "التبعية السياقية" (Contextual Dependency)، حيث تكون إجاباتك مرتبطة بفقرات سابقة مما يصعب معالجتها بشكل مستقل.',
    clarification: 'يجب أن يحتوي المحتوى على "فقرات ذرية" قابلة للفهم بمفردها لتجاوز قيود نافذة السياق (Context Window) للأجهزة التوليدية.',
    brandMention: 'منهجية 1to5click تضمن أن كل فقرة في موقعك هي مستودع معلومات مستقر وجاهز للاقتباس الفوري.',
    guardrail: 'تظهر دراسات الحالة أن المحتوى المستقل (Stand-alone) يحصل على معدل اقتباس ومحاكاة نمط أعلى بنسبة 70%.'
  }
];

export default function MethodologyPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-green transition-colors mb-8 font-bold">
            <ArrowLeft className="h-4 w-4" />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            منهجية <span className="text-brand-green">الـ AEO.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-4xl font-bold leading-relaxed">
            كيف نعمل في 1to5click لتحويل موقعك من مجرد صفحات إنترنت إلى "قاعدة معرفة" يعتمد عليها الذكاء الاصطناعي في تقديم إجاباته.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {methodology.map((step, index) => (
            <div
              key={index}
              className="animate-in fade-in zoom-in duration-1000 p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-brand-green/10 transition-all"
            >
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white mb-8`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 font-bold leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* New A-Q-C-E Strategy Section */}
        <div className="mb-32">
          <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-12 tracking-tighter">نموذج <span className="text-brand-green">A-Q-C-E</span> المحكم.</h2>
                <p className="text-xl text-slate-500 font-bold mb-12 leading-relaxed">
                  نحن لا نكتب مقالات طويلة للملل، بل نكتب "وحدات مستقلة" (Atomic Chunks). كل قطعة محتوى تمر عبر اختبار الصمود:
                  <br /><br />
                  <span className="text-brand-navy">"لو تم استئصال هذه الفقرة ووضعها في مكان آخر، هل ستظل مفهومة تماماً؟"</span>
                </p>
                <div className="space-y-4">
                  {['Answer (إجابة مباشرة وقاطعة)', 'Qualification (تعزيز المصداقية والبيانات)', 'Coverage (تغطية كافة زوايا البحث)', 'Extend (تمديد السياق والروابط)'].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center font-black text-brand-navy">{i+1}</div>
                      <span className="font-black text-brand-navy text-lg">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-navy/5 rounded-3xl -rotate-2" />
                <div className="relative bg-brand-navy p-12 rounded-[3rem] text-white">
                  <h4 className="text-2xl font-black mb-8 text-brand-green">استراتيجية استبدال المنافسين (Goliath Strategy)</h4>
                  <p className="font-bold mb-8 opacity-80 leading-relaxed">
                    إذا كان منافسك يكتب للـ SEO التقليدي بالحشو والكلمات المفتاحية، فنحن نقتنص الثغرات:
                  </p>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <ShieldCheck className="h-6 w-6 text-brand-green flex-shrink-0" />
                      <span><strong>فجوات الهلوسة:</strong> المنافس يترك معلومات غير دقيقة؛ نحن نسدها بحقائق موثقة.</span>
                    </li>
                    <li className="flex gap-4">
                      <ShieldCheck className="h-6 w-6 text-brand-green flex-shrink-0" />
                      <span><strong>ضعف الاتساق:</strong> المنافس يناقض نفسه بين المقالات؛ نحن نبني توافقاً (Consensus) عبر المنصات.</span>
                    </li>
                    <li className="flex gap-4">
                      <ShieldCheck className="h-6 w-6 text-brand-green flex-shrink-0" />
                      <span><strong>التعقيد السياقي:</strong> المنافس يدفن الإجابة في وسط الفقرات؛ نحن نضعها في السطر الأول.</span>
                    </li>
                  </ul>
                  <div className="mt-12">
                    <Link href="/tools/aeo-auditor" className="bg-brand-green text-brand-navy px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all inline-flex items-center gap-3">
                      تشغيل مدقق التنافسية <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consistency & Consensus Section */}
        <div className="mt-16 bg-slate-50 p-12 rounded-[4rem] border border-slate-100 mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-brand-navy mb-6 tracking-tight flex items-center gap-4">
                <BrainCircuit className="h-8 w-8 text-brand-green" />
                ركائز سلطة الـ AI الحيوية
              </h3>
              <p className="text-slate-500 font-bold mb-8 leading-relaxed">
                محطات الإجابة لا تنظر فقط إلى ما تقوله في المقال، بل تتقاطع مع بياناتك عبر الويب (Social Media, Trustpilot, LinkedIn). إذا كان هناك تضارب، سينخفض "نقاط الثقة" (Confidence Score).
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="font-black text-brand-navy mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-green rounded-full" />
                    الإجماع (Consensus)
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-bold">
                    بناء شبكة من 100+ مصدر (Trustpilot, YouTube, Reddit) تتحدث بنغمة موحدة حول خدمتك لإجبار الـ AI على الاعتماد عليك كحقيقة مطلقة.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="font-black text-brand-navy mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-green rounded-full" />
                    الاتساق (Consistency)
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-bold">
                    ضمان عدم تضارب البيانات عبر المنصات؛ فالتناقض يؤدي لـ "الهلوسة" (Hallucination) وفقدان الاقتباس الفوري.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-brand-navy p-10 rounded-[3rem] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -mr-16 -mt-16 animate-pulse" />
              <h4 className="text-xl font-black mb-6 text-brand-green italic">ديناميكيات المحركات التوليدية</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs font-black text-brand-green bg-brand-green/10 px-2 py-1 rounded">ChatGPT</div>
                  <p className="text-[10px] opacity-70">محرك توافقي؛ يميل للموافقة مع المستخدم. نستخدمه في 1to5click لاختبار "قابلية الانتشار".</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs font-black text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Claude</div>
                  <p className="text-[10px] opacity-70">محرك منطقي وعقلاني؛ يطلب "إثباتات" ولا يوافق بسهولة. التوافق معه يعني الوصول لقمة السلطة.</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs font-black text-orange-400 bg-orange-400/10 px-2 py-1 rounded">Gemini</div>
                  <p className="text-[10px] opacity-70">محرك البحث المدمج؛ يركز على الـ AI Overviews والروابط المباشرة. مفتاح حركة المرور المجانية.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Engineering Pillars Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter">هندسة <span className="text-brand-green">الأوامر</span> (Prompt Engineering).</h2>
            <p className="text-xl text-slate-500 font-bold">نحن لا نسأل الذكاء الاصطناعي، نحن نوجهه عبر ثلاث ركائز أساسية:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { title: 'الظرف المحيط (Context)', desc: 'تزويد النموذج بالخلفية المهنية والبيئة التي يعمل فيها (مثلاً: أنت مدير تنفيذي لشركة مالية).' },
              { title: 'القيود (Constraints)', desc: 'تحديد ما يجب تجنبه (مثلاً: لا تستخدم حشواً، لا تتجاوز 5 جمل) لضمان الدقة الذرية.' },
              { title: 'التنسيق (Format)', desc: 'تحديد شكل المخرج النهائي (JSON-LD, Table, Bullet points) لسهولة المعالجة التقنية.' }
            ].map((p, i) => (
              <div key={i} className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-brand-navy text-brand-green rounded-full flex items-center justify-center font-black mb-8">{i+1}</div>
                <h3 className="text-2xl font-black mb-4">{p.title}</h3>
                <p className="text-slate-500 font-bold leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Analysis & Citability Workflow */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter">تحويل محتوى <span className="text-brand-green">المنافس</span> إلى سلطة لك.</h2>
            <p className="text-xl text-slate-500 font-bold max-w-3xl mx-auto">خطة العمل الخماسية لتحويل نقاط ضعف المنافسين إلى ميزات استشهاد (Citable Features) لموقعك.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[ 
              { title: 'الاستخراج (Extraction)', icon: <Search className="h-6 w-6" />, desc: 'سحب محتوى المنافس لفك شفرة الـ USPs.' },
              { title: 'صيد الهلوسة (Hunting)', icon: <ShieldAlert className="h-6 w-6" />, desc: 'تحديد الفجوات المعلوماتية والادعاءات غير الموثقة.' },
              { title: 'تحليل الاستشهاد (Mapping)', icon: <Target className="h-6 w-6" />, desc: 'تحديد أفضل بنية نصية لاقتناص إجابة AI.' },
              { title: 'حقن السلطة (Authority)', icon: <Zap className="h-6 w-6" />, desc: 'إضافة البيانات والأرقام التي تفرض الاقتباس.' },
              { title: 'النشر (Visibility)', icon: <Sparkles className="h-6 w-6" />, desc: 'تفعيل المحتوى بنظام Schema لرفع الظهور.' }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-brand-navy/5 text-brand-green rounded-2xl flex items-center justify-center mb-6">{step.icon}</div>
                <h4 className="font-black text-brand-navy mb-3">{step.title}</h4>
                <p className="text-[11px] font-bold text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Simulator Link Section */}
        <div className="mb-32">
          <div className="bg-brand-green p-12 md:p-20 rounded-[4rem] text-brand-navy flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-brand-navy/10 px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6">
                <Bot className="h-4 w-4" />
                المحاكاة الحية
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">شاهد وكلاءنا <span className="underline">الذاتيين</span> وهم يعملون.</h2>
              <p className="text-lg font-bold opacity-80 leading-relaxed">
                قمنا بتطوير نموذج يحاكي وكيل تحليل المشاعر (Sentiment Agent) الذي يراقب المراجعات المضللة ويحمي سمعة علامتك التجارية تلقائياً.
              </p>
            </div>
            <Link href="/tools/agent-simulator" className="bg-brand-navy text-white px-10 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4">
              تجربة محاكي الوكيل <ArrowLeft className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Advanced FAQ Section (Demonstration of AEO) */}
        <div className="bg-brand-navy rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/20 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">تطبيق عملي: كيف نصوغ الأسئلة الشائعة؟</h2>
            <div className="grid lg:grid-cols-1 gap-8">
              <AEOFAQGroup items={faqItems} />
            </div>
          </div>
        </div>

        {/* Benchmark Case Study Link */}
        <div className="mt-20 mb-32 text-center">
          <div
            className="animate-in fade-in zoom-in duration-1000 inline-grid"
          >
            <a 
              href="/case-studies/goldfish-summer-care/"
              className="group relative bg-white border-2 border-brand-green/30 p-8 rounded-[3rem] hover:border-brand-green transition-all shadow-xl shadow-slate-200/50"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green group-hover:rotate-12 transition-transform">
                  <Zap className="h-8 w-8" />
                </div>
                <div className="text-right">
                  <h4 className="text-xl font-black text-brand-navy mb-1">شاهد مثالاً حياً: دراسة حالة AEO</h4>
                  <p className="text-slate-500 font-bold ml-8">كيف طبقنا نموذج A-Q-C-E على قضية معقدة (عناية الأسماك في لاهور)</p>
                </div>
                <ChevronLeft className="h-8 w-8 text-brand-green mr-8 hidden md:block" />
              </div>
            </a>
          </div>
        </div>

        {/* Closing Strategy */}
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-brand-navy mb-8">نحن لا نتبع القواعد، نحن نكتبها.</h2>
            <p className="text-slate-500 font-bold mb-12">
                في عالم يتغير فيه محرك البحث يومياً، نلتزم في 1to5click بالبحث العلمي المستمر وتطبيق أحدث استراتيجيات الـ SEO والـ AEO لضمان بقائك في الصدارة.
            </p>
            <Link href="/contact" className="bg-brand-green text-brand-navy px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-transform inline-block">
                ابدأ رحلة السيادة الرقمية
            </Link>
        </div>
      </div>
    </div>
  );
}
