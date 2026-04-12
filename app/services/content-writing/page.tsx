import Link from 'next/link';
import {
  PenTool,
  CheckCircle,
  TrendingUp,
  Target,
  Network,
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  MessageSquare,
  Award,
  BarChart,
  Cpu,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
  Search,
  ArrowLeft
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: 'الكتابة الشبحية التنفيذية',
    description: 'نحن نلتقط صوتك الفريد ونحول خبرتك في الصناعة إلى محتوى LinkedIn عالي التحويل.',
    icon: PenTool
  },
  {
    title: 'توليد عملاء B2B',
    description: 'تحويل المشاركة العضوية إلى مكالمات مبيعات مؤهلة من خلال الرسائل المباشرة الاستراتيجية والتحليل.',
    icon: Target
  },
  {
    title: 'رسائل إخبارية مرجعية',
    description: 'بناء جمهور مملوك ومباشر من خلال رسائل إخبارية فنية واستراتيجية متعمقة.',
    icon: BookOpen
  },
  {
    title: 'العلامة التجارية للمؤسس',
    description: 'وضع القيادة كصوت لا غنى عنه في الصناعة، مما يخلق بئر جاذبية للطلبات الواردة.',
    icon: Briefcase
  },
  {
    title: 'بناء المجتمع',
    description: 'تعزيز المحادثات والعلاقات الحقيقية داخل النظام البيئي الخاص بـ B2B.',
    icon: Users
  },
  {
    title: 'كتابة نصوص التحويل',
    description: 'صفحات المبيعات، والمسارات، ونصوص VSL التي تستفيد من المحفزات النفسية لإغلاق الصفقات الكبيرة.',
    icon: MessageSquare
  }
];

const faqs = [
  {
    question: 'لماذا التركيز على LinkedIn والعلامة التجارية التنفيذية؟',
    answer: 'في عام 2026، لا يثق مشتري B2B بشعارات الشركات، بل يثقون في الأشخاص. المؤسسون والمديرين التنفيذيين الذين يبنون علامات تجارية شخصية يحصلون على أسعار أعلى، ويجذبون مواهب أفضل، ويغلقون الصفقات بشكل أسرع. إنها الرافعة العضوية القصوى.'
  },
  {
    question: 'كيف تلتقط صوتي كمؤسس؟',
    answer: 'نحن لا نستخدم القوالب. نقوم بإجراء مقابلات متعمقة، ونحلل اتصالاتك السابقة، ونستخدم أطر عمل ملكية لاستخراج منظورك الفريد، مما يضمن أن كل منشور يبدو مثلك تماماً—ولكن بشكل أكثر تهذيباً.'
  },
  {
    question: 'كم من الوقت يستغرق رؤية العملاء الواردين؟',
    answer: 'بينما تبنى السلطة بمرور الوقت، فإن تواصلنا الاستراتيجي ومحتوانا عالي الإشارة يولد عادةً أولى محادثات المبيعات المؤهلة في غضون 45 إلى 60 يوماً من التنفيذ المتواصل.'
  },
  {
    question: 'هل تضمنون المنشورات الفيروسية؟',
    answer: 'لا. "الانتشار الفيروسي" لجمهور غير مؤهل هو مقياس للغرور. نحن نضمن مشاركة عالية الإشارة من صناع القرار في سوقك المستهدف. الإيرادات أهم من الوصول.'
  },
  {
    question: 'كم من الوقت أحتاج للالتزام به؟',
    answer: 'كمؤسس، وقتك هو أغلى أصل تملكه. نحن نحتاج فقط إلى 60 دقيقة من وقتك شهرياً لتفريغ المعلومات الاستراتيجي. نحن نتولى 99% من التنفيذ والكتابة وإدارة المجتمع.'
  }
];

export default function ContentWritingPage() {
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
            <div
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000"
            >
              <div className="inline-flex items-center gap-3 bg-brand-navy/5 text-brand-navy px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-brand-navy/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-brand-navy rounded-full animate-pulse" />
                <span>أفضل تسويق عضوي لـ B2B في السعودية والعلامة التجارية للمؤسسين</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-brand-navy mb-8 leading-[0.85] tracking-tighter">
                الناس يشترون <br />
                <span className="text-brand-green uppercase">من الناس في المملكة.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-bold max-w-2xl mx-auto">
                منجم الذهب الصامت لعام 2026 في السعودية. نحن نحول المؤسسين في الرياض وجدة إلى <span className="text-brand-navy underline transition-colors hover:text-brand-green cursor-pointer uppercase">احتكارات</span> في مجالهم من خلال سلطة LinkedIn عالية الإشارة والأنظمة البيئية العضوية المكتوبة.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-brand-navy text-white px-12 py-6 rounded-full hover:scale-105 transition-all font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-brand-navy/20 group gap-3"
                >
                  كن السلطة المرجعية
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform text-brand-green" />
                </Link>
                <div className="text-slate-400 font-bold text-sm">
                  *مقتصر على المؤسسين الذين يحققون +1M$
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Deficit Concept */}
      <section className="py-32 bg-slate-50 overflow-hidden border-y border-slate-100 relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-mint/30 blur-[100px] -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="text-right">
              <h2 className="text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tighter leading-tight mb-8">
                عجز الثقة <br />
                <span className="text-brand-green">في B2B.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-8 font-bold leading-relaxed">
                في عالم يغرق في الحشو الناتج عن الذكاء الاصطناعي وعروض المبيعات المؤتمتة، بلغت الثقة أدنى مستوياتها على الإطلاق. صناع القرار لم يعودوا يقرؤون منشورات المدونات العامة أو يردون على رسائل البريد الباردة المؤتمتة.
              </p>
              <p className="text-xl text-slate-500 mb-12 font-bold leading-relaxed">
                هم يشترون من <span className="text-brand-navy underline">المؤسسين الذين يعرفونهم ويحبونهم ويثقون بهم.</span> من خلال قيادة علامتك التجارية الشخصية استراتيجياً على LinkedIn وعبر النشرات الإخبارية المستهدفة، يمكنك بناء محرك وارد ينافس الحملات الإعلانية المكلفة.
              </p>
              <div className="flex items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-xl w-max mr-0 ml-auto flex-row-reverse">
                <Award className="h-10 w-10 text-brand-green" />
                <div className="text-right">
                  <div className="text-2xl font-black text-brand-navy uppercase tracking-tighter">"بيـع المغاريف"</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">توفير سلطة مطلقة</div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { metric: "300%", label: "معدل تحويل أعلى مقابل صفحات العلامة التجارية", icon: TrendingUp },
                { metric: "صفر", label: "إنفاق إعلاني مطلوب للصفقات الواردة", icon: BarChart },
                { metric: "الأفضل 1%", label: "التموضع في تخصصك الصناعي", icon: Target },
                { metric: "+7", label: "تجاوز طبقات القرار عبر الثقة", icon: Network }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:border-brand-green transition-all group text-right">
                  <stat.icon className="h-10 w-10 text-brand-green mb-8 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-black text-brand-navy mb-3 tracking-tighter">{stat.metric}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tighter mb-4">بنية السلطة التحتية</h2>
            <p className="text-[10px] text-brand-green font-black uppercase tracking-[0.3em]">محركات الكتابة لعام 2026</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon || PenTool;
              return (
                <div key={index} className="group bg-slate-50 rounded-[3.5rem] p-12 hover:border-brand-green border border-transparent transition-all text-right shadow-sm hover:shadow-2xl">
                    <div className="w-20 h-1.5 bg-brand-green mb-10 rounded-full mr-0 ml-auto" />
                    <Icon className="h-10 w-10 text-brand-navy mb-8 group-hover:scale-110 transition-transform group-hover:text-brand-green" />
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 leading-tight text-brand-navy">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Packages */}
      <section className="py-32 bg-brand-navy text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-9xl font-black mb-8 uppercase tracking-tighter leading-[0.85]">بـاقات <span className="text-brand-green">النمـو.</span></h2>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">مصممة للمؤسسين والمديرين التنفيذيين.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                name: 'أساس السلطة',
                price: '999',
                desc: 'ثبت صوتك وسيطر على تخصصك الصناعي من خلال منشورات متسقة وعالية الإشارة.',
                features: ['12 منشور LinkedIn عالي القيمة', 'تحسين الملف الشخصي', 'تفاعل تعليقات أساسي', 'مراجعة تحليلات شهرية'],
                highlight: false
              },
              {
                name: 'المحرك الوارد',
                price: '2,499',
                desc: 'البروتوكول الأكثر شهرة لدينا. حول علامتك التجارية إلى آلة توليد عملاء مؤتمتة.',
                features: ['20 منشور LinkedIn عالي الإشارة', 'بروتوكول رسائل مباشرة استراتيجي', 'نشرة إخبارية مخصصة (مرتين/شهر)', 'استراتيجية تموضع تنفيذية', 'مزامنة Zoom كل أسبوعين'],
                highlight: true
              },
              {
                name: 'الاحتكار',
                price: '4,999',
                desc: 'سيطرة دلالية واجتماعية مطلقة. تصبح الصوت القاطع في مجال عملك.',
                features: ['سيطرة يومية على المنصات', 'بروتوكول شبكات C-Suite', 'سلاسل منشورات فيروسية مكتوبة', 'كتابة نصوص الويبينار/VSL', 'وصول ذو أولوية 24/7'],
                highlight: false
              }
            ].map((pkg) => (
              <div key={pkg.name} className={`relative p-12 rounded-[4rem] border transition-all duration-500 text-right ${pkg.highlight ? 'bg-white text-brand-navy border-brand-green shadow-3xl scale-105 z-10' : 'bg-white/5 border-white/10 hover:border-brand-green'}`}>
                {pkg.highlight && (
                  <div className="absolute -top-5 right-1/2 translate-x-1/2 bg-brand-green text-brand-navy px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    الأكثر طلباً
                  </div>
                )}
                <h3 className="text-3xl font-black uppercase mb-6 leading-tight tracking-tighter">{pkg.name}</h3>
                <div className="flex items-baseline mb-10 flex-row-reverse justify-end gap-3">
                  <span className="text-2xl font-black text-brand-green transition-all">$</span>
                  <span className="text-7xl font-black tracking-tighter leading-none">{pkg.price}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest mr-2 ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/شهرياً</span>
                </div>

                <p className={`text-sm mb-12 leading-relaxed font-bold ${pkg.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{pkg.desc}</p>

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
                  className={`block w-full text-center py-6 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-xl ${pkg.highlight ? 'bg-brand-navy text-white hover:bg-brand-green hover:text-brand-navy' : 'bg-white/10 text-white hover:bg-brand-green hover:text-brand-navy'}`}
                >
                  بدء المزامنة
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 uppercase tracking-tighter leading-tight">المنطق التأسيسي</h2>
            <p className="text-brand-green font-black uppercase tracking-[0.3em] text-[10px] text-center">بروتوكول الإحاطة</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-0 overflow-hidden rounded-3xl mb-4 bg-slate-50">
                <AccordionTrigger className="text-right px-8 py-8 text-xl font-black text-brand-navy hover:text-brand-green uppercase tracking-tighter leading-tight hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed font-bold px-8 pb-8 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-brand-green relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-12 tracking-tighter uppercase leading-[0.85]">املك السرد <br /> الخاص بك.</h2>
          <p className="text-xl text-brand-navy/70 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
            توقف عن المنافسة على الأسعار والميزات. انقل ساحة المعركة إلى الثقة والسلطة—الأصول الوحيدة التي لا يمكن للذكاء الاصطناعي تقليدها.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
          >
            ابدأ عهدك الآن
            <ArrowLeft className="h-6 w-6 text-brand-green" />
          </Link>
        </div>
      </section>
    </div>
  );
}
