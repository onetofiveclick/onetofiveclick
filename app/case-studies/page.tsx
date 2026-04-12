import Link from 'next/link';
import { ArrowLeft, TrendingUp, Search, MapPin, Star, ArrowRight, CheckCircle2, BarChart3, Globe, Zap } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'مجموعة الأطلس للعقارات',
    location: 'الرياض، المملكة العربية السعودية',
    flag: '🇸🇦',
    industry: 'العقارات',
    service: 'السيو المحلي + AEO',
    duration: '4 أشهر',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-navy',
    accent: 'text-brand-green',
    challenge: 'كانت الشركة تعاني من غياب شبه تام في نتائج البحث المحلي رغم وجودها منذ 2015، مع منافسة شرسة من 40+ وكالة عقارية في حي العليا.',
    solution: 'بنينا هيكل صفحات محلية لـ 12 حي في الرياض، ودمجنا Schema Markup للعقارات، وأطلقنا حملة AEO لاستهداف أسئلة المشترين في ChatGPT وPerplexity.',
    results: [
      { metric: 'زيادة الحركة العضوية', value: '+320٪', period: 'خلال 90 يوماً' },
      { metric: 'الكلمات المفتاحية في الصفحة الأولى', value: '147', period: 'من 12 فقط' },
      { metric: 'الاستفسارات الشهرية', value: '+85٪', period: 'عبر واتساب' },
      { metric: 'تكلفة الاستحواذ', value: '-62٪', period: 'مقارنة بالإعلانات' },
    ],
    quote: 'ون تو فايف كليك لم تبنِ لنا موقعاً — بنت لنا حضوراً رقمياً يولّد عملاء على مدار الساعة.',
    quoteName: 'أحمد الزهراني، المدير التنفيذي',
    tags: ['سيو محلي', 'AEO', 'عقارات الرياض', 'Schema Markup'],
    featured: true,
  },
  {
    id: 2,
    client: 'عيادة برايم ميد',
    location: 'جدة، المملكة العربية السعودية',
    flag: '🇸🇦',
    industry: 'الرعاية الصحية',
    service: 'السيو الطبي + Google Business Profile',
    duration: '6 أشهر',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    color: 'bg-white',
    accent: 'text-brand-navy',
    challenge: 'عيادة تجميل في حي الزهراء بجدة — صفر رأي إيجابي على خرائط جوجل، وغياب كامل من نتائج "أفضل عيادة تجميل في جدة".',
    solution: 'بروتوكول كامل لبناء سمعة Google Business Profile، مع محتوى طبي موثوق (EEAT)، وصفحات خدمات بـ FAQ Schema مستهدفة لمحركات الذكاء الاصطناعي.',
    results: [
      { metric: 'تقييم جوجل', value: '4.9/5', period: 'من 3.1/5' },
      { metric: 'مرات الظهور في الخريطة', value: '+450٪', period: 'شهرياً' },
      { metric: 'المواعيد المحجوزة أونلاين', value: '+180٪', period: 'خلال 3 أشهر' },
      { metric: 'استشهادات AI', value: '12 منصة', period: 'Gemini, ChatGPT...' },
    ],
    quote: 'لأول مرة في تاريخ العيادة، يأتينا مرضى قالوا: وجدناكم عبر ChatGPT!',
    quoteName: 'د. سارة المطيري، مديرة العيادة',
    tags: ['سيو طبي', 'EEAT', 'Google Maps', 'AEO'],
    featured: false,
  },
  {
    id: 3,
    client: 'Lahore Digital Hub',
    location: 'لاهور، باكستان',
    flag: '🇵🇰',
    industry: 'التجارة الإلكترونية',
    service: 'السيو البرمجي + بناء الروابط',
    duration: '5 أشهر',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-navy',
    accent: 'text-brand-green',
    challenge: 'متجر إلكتروني لبيع المنسوجات والأقمشة في لاهور، يعمل منذ 2019 لكن بدون أي وجود رقمي. المنافسون الكبار يهيمنون على الصفحة الأولى.',
    solution: 'بنينا 2,400 صفحة منتج بـ Programmatic SEO، مع هيكلة Hreflang للأردو والإنجليزية، وحملة بناء روابط محلية عبر مدونات الموضة الباكستانية.',
    results: [
      { metric: 'الصفحات المفهرسة', value: '2,400+', period: 'من 180 صفحة' },
      { metric: 'المبيعات الأونلاين', value: '+240٪', period: 'خلال 5 أشهر' },
      { metric: 'الحركة العضوية', value: '+580٪', period: 'مقارنة بالعام السابق' },
      { metric: 'تكلفة الاستحواذ', value: '0.3$', period: 'لكل عميل جديد' },
    ],
    quote: 'لم نكن نصدق أن السيو البرمجي يمكن أن يُضاعف مبيعاتنا في 5 أشهر. هذا فعلاً غير قواعد اللعبة.',
    quoteName: 'Tariq Mehmood, Founder',
    tags: ['Programmatic SEO', 'باكستان', 'تجارة إلكترونية', 'Hreflang'],
    featured: true,
  },
  {
    id: 4,
    client: 'بروبرتي فايندر دبي',
    location: 'دبي، الإمارات',
    flag: '🇦🇪',
    industry: 'عقارات',
    service: 'AEO + سيو تقني متقدم',
    duration: '3 أشهر',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    color: 'bg-white',
    accent: 'text-brand-navy',
    challenge: 'منصة عقارية في دبي تفقد حركتها بسبب Core Web Vitals ضعيفة (LCP: 8.2 ثانية) وغياب من AI Overviews جوجل رغم ضخامة المحتوى.',
    solution: 'إعادة بناء كاملة لـ Core Web Vitals (Next.js SSR)، توليد Schema Markup تلقائي لكل 15,000 عقار، وحملة AEO مركزة على أسئلة المشترين الخليجيين.',
    results: [
      { metric: 'LCP', value: '1.1ث', period: 'من 8.2 ثانية' },
      { metric: 'الظهور في AI Overviews', value: '+890٪', period: 'خلال 60 يوماً' },
      { metric: 'معدل الارتداد', value: '-45٪', period: 'تحسن جذري' },
      { metric: 'عائد الاستثمار', value: '18x', period: 'على استثمار السيو' },
    ],
    quote: 'الفرق الوحيد الذي فهم أن AEO ليس ترفاً — إنه البقاء في سوق 2026.',
    quoteName: 'Mohammed Al-Rashid, CTO',
    tags: ['Core Web Vitals', 'Next.js', 'AEO', 'دبي'],
    featured: false,
  },
  {
    id: 5,
    client: 'مطعم البيت السعودي',
    location: 'الرياض + جدة + الدمام',
    flag: '🇸🇦',
    industry: 'المطاعم والضيافة',
    service: 'السيو متعدد المواقع + Google Maps',
    duration: '8 أشهر',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-navy',
    accent: 'text-brand-green',
    challenge: 'سلسلة مطاعم بـ 12 فرع في 3 مدن. كل فرع يعاني من تقييمات Google منخفضة (2.8-3.4)، وغياب من "أفضل مطعم قريب مني".',
    solution: 'استراتيجية Multi-Location SEO: صفحة مخصصة لكل فرع مع Schema LocalBusiness، بروتوكول بناء التقييمات الإيجابية، ومحتوى حصري لكل حي.',
    results: [
      { metric: 'متوسط التقييم', value: '4.7/5', period: 'لجميع الفروع' },
      { metric: 'ظهور في "قريب مني"', value: '+670٪', period: 'عبر الثلاث مدن' },
      { metric: 'الحجوزات عبر جوجل', value: '+310٪', period: 'شهرياً' },
      { metric: 'الإيرادات الإضافية', value: '+120٪', period: 'خلال 8 أشهر' },
    ],
    quote: 'كنا نخسر زبائن لمطاعم أقل جودة لأنهم يظهرون قبلنا في الخريطة. الآن نحن من نظهر أولاً.',
    quoteName: 'عبدالله الغامدي، المالك',
    tags: ['Multi-Location SEO', 'مطاعم', 'Google Maps', 'تقييمات'],
    featured: false,
  },
  {
    id: 6,
    client: 'TechStart Pakistan',
    location: 'كراتشي، باكستان',
    flag: '🇵🇰',
    industry: 'SaaS / تقنية',
    service: 'سيو B2B + بناء السلطة',
    duration: '6 أشهر',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: 'bg-white',
    accent: 'text-brand-navy',
    challenge: 'شركة SaaS ناشئة لإدارة المبيعات. منافستها الرئيسية تُهيمن على جوجل وعلى استشهادات ChatGPT لجميع الكلمات المفتاحية الرئيسية.',
    solution: 'بناء سلطة "الكيان" عبر نشر أبحاث أصلية، RSS Stacking، وتراكم YouTube-RAG. وتحسين موضوعي كامل لاستهداف محركات الإجابة.',
    results: [
      { metric: 'استشهادات ChatGPT', value: '40+', period: 'شهرياً لاسم الشركة' },
      { metric: 'عملاء B2B جدد', value: '+95٪', period: 'خلال 6 أشهر' },
      { metric: 'Organic Leads', value: '3x', period: 'من خطة الاشتراك' },
      { metric: 'Perplexity Citations', value: 'الصفحة الأولى', period: '8 كلمات رئيسية' },
    ],
    quote: 'منافسونا كانوا يُعتبرون من قبل AI كـ "الحل الأول". الآن نحن من نُستشهد به.',
    quoteName: 'Zara Ahmed, CMO',
    tags: ['AEO', 'SaaS', 'باكستان', 'B2B'],
    featured: false,
  },
];

const stats = [
  { value: '320٪+', label: 'متوسط زيادة الحركة العضوية' },
  { value: '50+', label: 'دراسة حالة مُنجزة' },
  { value: '18x', label: 'أعلى عائد على الاستثمار' },
  { value: '6', label: 'دول في 3 قارات' },
];

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter(cs => cs.featured);
  const regularStudies = caseStudies.filter(cs => !cs.featured);

  return (
    <div className="bg-white min-h-screen text-right" dir="rtl">

      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-navy overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-green/5 blur-[140px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-green/10 blur-[100px] rounded-full translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-brand-green/10 backdrop-blur-md text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.35em] mb-8 border border-brand-green/20">
              نتائج مُثبتة بالأرقام
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-white mb-8 tracking-tighter leading-[0.85]">
              دراسات<br />
              <span className="text-brand-green">الحالة.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              لا وعود فارغة. هذه أرقام حقيقية لعملاء حقيقيين في السعودية وباكستان والإمارات —
              تُثبت أن استراتيجيتنا تُحوّل الاستثمار الرقمي إلى نمو قابل للقياس.
            </p>

            <div className="flex flex-col sm:flex-row-reverse justify-center gap-6 mb-24">
              <Link
                href="/contact"
                className="bg-brand-green text-brand-navy px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all font-black uppercase tracking-widest text-xs shadow-2xl shadow-brand-green/20 hover:scale-105"
              >
                ابدأ قصة نجاحك
              </Link>
              <Link
                href="/services"
                className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-5 rounded-full hover:bg-white/10 transition-all font-black uppercase tracking-widest text-xs"
              >
                استكشف خدماتنا
              </Link>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-brand-green/30 transition-all group"
                >
                  <div className="text-4xl md:text-5xl font-black text-brand-green mb-2 tracking-tighter group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Case Studies ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.4em] mb-4">الأبرز</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-navy tracking-tighter">
              قصص النجاح <span className="text-brand-green">الكبرى</span>
            </h3>
          </div>

          <div className="space-y-12">
            {featuredStudies.map((cs, idx) => (
              <div
                key={cs.id}
                className={`grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 ${idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}
              >
                {/* Image Side */}
                <div className="relative h-[350px] lg:h-auto overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.client}
                    width="800"
                    height="600"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                  <div className="absolute bottom-8 right-8 flex flex-wrap gap-2 justify-end" dir="rtl">
                    {cs.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-brand-green/90 text-brand-navy px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white font-black text-[10px] uppercase tracking-widest">
                      {cs.flag} {cs.location}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="bg-brand-navy p-12 md:p-16 text-right" dir="rtl">
                  <div className="flex items-center gap-3 mb-6 flex-row-reverse justify-end">
                    <span className="bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-brand-green/20">
                      {cs.industry}
                    </span>
                    <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">
                      {cs.duration}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter leading-tight">
                    {cs.client}
                  </h2>
                  <p className="text-brand-green font-black text-[10px] uppercase tracking-widest mb-10">
                    {cs.service}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {cs.results.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-brand-green/30 transition-all group"
                      >
                        <div className="text-2xl md:text-3xl font-black text-brand-green mb-1 tracking-tighter group-hover:scale-105 transition-transform">
                          {r.value}
                        </div>
                        <p className="text-[9px] font-black text-white/50 uppercase tracking-widest leading-tight">
                          {r.metric}
                        </p>
                        <p className="text-[9px] text-brand-green/60 font-bold mt-1">{r.period}</p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-r-2 border-brand-green pr-6 mb-8">
                    <p className="text-slate-300 font-medium leading-relaxed text-sm italic mb-3">
                      &ldquo;{cs.quote}&rdquo;
                    </p>
                    <cite className="text-brand-green font-black text-[10px] uppercase tracking-widest not-italic">
                      — {cs.quoteName}
                    </cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── All Case Studies Grid ─── */}
      <section className="py-32 bg-brand-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.4em] mb-4">جميع الحالات</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-navy tracking-tighter">
              نتائج عبر <span className="text-brand-green">القطاعات</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map(cs => (
              <div
                key={cs.id}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.client}
                    width="800"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="text-white font-black text-[9px] uppercase tracking-widest">
                      {cs.flag} {cs.industry}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8" dir="rtl">
                  <div className="flex items-start justify-between mb-4 flex-row-reverse">
                    <span className="bg-brand-mint text-brand-green px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-brand-green/10">
                      {cs.duration}
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-brand-navy tracking-tighter leading-tight mb-1">
                        {cs.client}
                      </h3>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {cs.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-brand-green font-black text-[10px] uppercase tracking-widest mb-6">
                    {cs.service}
                  </p>

                  {/* Top 2 Results */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {cs.results.slice(0, 2).map((r, rIdx) => (
                      <div key={rIdx} className="bg-brand-mint rounded-2xl p-4 border border-brand-green/10">
                        <div className="text-xl font-black text-brand-green mb-1 tracking-tighter">
                          {r.value}
                        </div>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-tight">
                          {r.metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quote snippet */}
                  <blockquote className="border-r-2 border-brand-green/30 pr-4 mb-6">
                    <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2 italic">
                      &ldquo;{cs.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-end">
                    {cs.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process Section ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.4em] mb-4">منهجيتنا</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-navy tracking-tighter">
              كيف نُحقق <span className="text-brand-green">هذه النتائج</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: Search,
                title: 'التدقيق الشامل',
                desc: 'نُحلّل كل نقطة ضعف تقنية ومحتوى وسلطة. 200+ نقطة فحص في 48 ساعة.',
                color: 'bg-brand-navy',
                textColor: 'text-white',
              },
              {
                step: '02',
                icon: Zap,
                title: 'الاستراتيجية المُخصصة',
                desc: 'لا قوالب جاهزة. كل استراتيجية تُبنى حول قطاعك وسوقك المحلي تحديداً.',
                color: 'bg-brand-green',
                textColor: 'text-brand-navy',
              },
              {
                step: '03',
                icon: BarChart3,
                title: 'التنفيذ والقياس',
                desc: 'تنفيذ أسبوعي مع لوحة تحكم مباشرة تُظهر كل تغيير في الترتيب والحركة.',
                color: 'bg-white',
                textColor: 'text-brand-navy',
              },
              {
                step: '04',
                icon: TrendingUp,
                title: 'النمو المُستدام',
                desc: 'تحسين مستمر بناءً على البيانات. نتائجنا تتراكم — لا تتلاشى بمجرد إيقاف الإعلانات.',
                color: 'bg-brand-mint',
                textColor: 'text-brand-navy',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`${step.color} rounded-[2.5rem] p-10 border border-slate-100 hover:-translate-y-2 transition-all shadow-sm group text-right`}
                dir="rtl"
              >
                <div className={`text-6xl font-black opacity-10 mb-4 tracking-tighter ${step.textColor}`}>
                  {step.step}
                </div>
                <step.icon className={`h-8 w-8 mb-6 ${step.color === 'bg-brand-green' ? 'text-brand-navy' : 'text-brand-green'}`} />
                <h4 className={`text-xl font-black ${step.textColor} mb-4 tracking-tighter`}>{step.title}</h4>
                <p className={`text-sm font-medium leading-relaxed ${step.textColor === 'text-white' ? 'text-white/60' : 'text-slate-500'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries We Serve ─── */}
      <section className="py-24 bg-brand-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.4em] mb-4">قطاعاتنا</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              نُهيمن في كل <span className="text-brand-green">قطاع</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🏗️', name: 'العقارات' },
              { icon: '🏥', name: 'الصحة' },
              { icon: '🛒', name: 'التجارة الإلكترونية' },
              { icon: '🍽️', name: 'المطاعم' },
              { icon: '💻', name: 'التقنية / SaaS' },
              { icon: '🏦', name: 'المال والأعمال' },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-brand-green/40 hover:bg-brand-green/5 transition-all group cursor-default"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <p className="text-white font-black text-[10px] uppercase tracking-widest">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-green rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
            <div className="absolute inset-0 bg-white/10 opacity-50 blur-3xl rounded-full translate-y-1/2" />
            <div className="relative z-10">
              <p className="text-brand-navy/60 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
                الخطوة التالية
              </p>
              <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
                قصتك<br />التالية هنا.
              </h2>
              <p className="text-brand-navy/70 font-medium text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                انضم إلى قائمة العملاء الذين حوّلنا استثمارهم الرقمي إلى نمو حقيقي.
                احصل على تدقيق مجاني خلال 48 ساعة.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-brand-navy text-white px-14 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-navy/20"
              >
                <ArrowLeft className="h-5 w-5 text-brand-green" />
                احصل على تدقيق مجاني
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── JSON-LD Schema ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'دراسات حالة ون تو فايف كليك',
            description: 'نتائج حقيقية من مشاريع سيو ناجحة في السعودية وباكستان والإمارات',
            url: 'https://onetofiveclick.com/case-studies/',
            numberOfItems: caseStudies.length,
            itemListElement: caseStudies.map((cs, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: cs.client,
              description: cs.challenge,
            })),
          }),
        }}
      />
    </div>
  );
}
