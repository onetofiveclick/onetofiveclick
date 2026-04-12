'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Lock, FileText, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    title: 'قالب استراتيجية المحتوى السعودي 2026',
    type: 'قالب عملي (Template)',
    desc: 'خارطة طريق كاملة لتخطيط وإنتاج محتوى يتصدر نتائج البحث في المملكة.',
    locked: true
  },
  {
    title: 'قائمة مراجعة سيو التجارة (سلة وزد)',
    type: 'قائمة مراجعة (Checklist)',
    desc: 'أكثر من 50 نقطة فحص تقنية لضمان ظهور متجرك في مقدمة بحث المستهلك السعودي.',
    locked: true
  },
  {
    title: 'قوالب البريد الإلكتروني للتواصل الاحترافي',
    type: 'قالب نصوص (Scripts)',
    desc: 'نصوص جاهزة باللغة العربية لبناء الروابط والتواصل مع المؤثرين والصحفيين.',
    locked: true
  },
  {
    title: 'قالب تقارير السيو للمدراء التنفيذيين',
    type: 'لوحة بيانات (Dashboard)',
    desc: 'قالب Google Looker Studio جاهز لعرض نتائج السيو بلغة الأرباح والاستثمار.',
    locked: true
  },
  {
    title: 'دليل السيطرة على محركات الإجابة (AEO)',
    type: 'دليل استراتيجي',
    desc: 'كيف تجعل علامتك التجارية الخيار الأول لنماذج ChatGPT و Gemini في السوق السعودي.',
    locked: true
  },
  {
    title: 'بنية هندسة البيانات للمؤسسات الكبرى',
    type: 'مخطط هندسي',
    desc: 'خارطة طريق لبناء قاعدة بيانات موحدة تدعم اتخاذ القرار الذكي.',
    locked: false
  }
];

export default function ResourcesPage() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [activeResource, setActiveResource] = React.useState<typeof resources[0] | null>(null);
  const [formStatus, setFormStatus] = React.useState('idle'); // idle, loading, success

  const handleDownload = (item: typeof resources[0]) => {
    if (item.locked) {
      setActiveResource(item);
      setIsFormOpen(true);
    } else {
      alert('بدأ التحميل المباشر للملف...');
    }
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsFormOpen(false);
        setFormStatus('idle');
        alert(`تم إرسال الرابط لملف "${activeResource?.title || ''}" إلى بريدك الإلكتروني.`);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen text-right font-sans pt-32 pb-20 relative">
      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-lg rounded-[3rem] p-12 text-right shadow-2xl relative"
            >
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-8 left-8 p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors"
              >
                <Lock className="h-5 w-5 text-brand-navy" />
              </button>

              <div className="mb-10">
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <Download className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="text-3xl font-black text-brand-navy mb-3 tracking-tighter">
                  تحميل: {activeResource?.title}
                </h3>
                <p className="text-slate-500 font-bold">أدخل بياناتك للحصول على رابط التحميل المباشر.</p>
              </div>

              {formStatus === 'success' ? (
                <div className="py-20 text-center uppercase tracking-widest font-black text-brand-green animate-pulse">
                  تم الإرسال بنجاح .. تفقد بريدك الإلكتروني
                </div>
              ) : (
                <form onSubmit={submitForm} className="space-y-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">الاسم بالكامل</label>
                    <input required type="text" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-brand-green/20 text-right font-bold" placeholder="أدخل اسمك هنا" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">البريد الإلكتروني للعمل</label>
                    <input required type="email" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-brand-green/20 text-right font-bold" placeholder="name@company.com" />
                  </div>
                  <button 
                    disabled={formStatus === 'loading'}
                    className="w-full py-5 bg-brand-navy text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-navy/90 transition-all shadow-xl shadow-brand-navy/20 disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? 'جاري المعالجة...' : 'احصل على الرابط الآن'}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center font-bold">بتحميلك هذا الملف، أنت توافق على سياسة الخصوصية الخاصة بنا.</p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-green transition-colors mb-8 font-bold">
            <ArrowLeft className="h-4 w-4" />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            مركز <span className="text-brand-green">المعرفة الرقمية.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl font-bold leading-relaxed">
            مجموعة حصرية من التقارير والدراسات لتعزيز الفهم التقني ودعم قادة التحول الرقمي في المملكة العربية السعودية.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:border-brand-green hover:bg-white hover:shadow-2xl hover:shadow-brand-green/10 transition-all"
            >
              <div className="mb-8 flex justify-between items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <FileText className="h-7 w-7 text-brand-green" />
                </div>
                {item.locked && (
                  <div className="bg-brand-navy text-white p-2 rounded-xl">
                    <Lock className="h-4 w-4" />
                  </div>
                )}
              </div>
              
              <span className="text-brand-green text-xs font-black uppercase tracking-widest mb-4 block">
                {item.type}
              </span>
              <h3 className="text-2xl font-black text-brand-navy mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 font-bold mb-10 text-sm leading-relaxed">
                {item.desc}
              </p>

              <button 
                onClick={() => handleDownload(item)}
                className={`w-full py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all ${
                item.locked 
                ? 'bg-brand-navy text-white hover:bg-brand-navy/90' 
                : 'bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white'
              }`}>
                <Download className="h-5 w-5" />
                <span>{item.locked ? 'أدخل بياناتك للتحميل' : 'تحميل مباشر'}</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* SEO Descriptive Content */}
        <section className="mt-24 p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm text-right">
          <h2 className="text-3xl font-black text-brand-navy mb-6 tracking-tighter">لماذا نعتبر مركز الموارد الرقمية مرجعك الأول؟</h2>
          <div className="space-y-6 text-slate-500 font-bold leading-relaxed text-lg">
            <p>في عصر الذكاء الاصطناعي ومحسنات محركات البحث المتقدمة، لم يعد المحتوى العشوائي كافياً لتحقيق نتائج ملموسة. قمنا بتأسيس مركز الموارد الرقمية في ون تو فايف كليك ليكون بمثابة بوصلة للشركات والمؤسسات السعودية الطامحة للريادة الرقمية. كل ملف، سواء كان قالب عملي، أو خطة استراتيجية، أو دليل إرشادي، تم تصميمه بعناية فائقة ليلبي احتياجات السوق المحلي بدقة وفعالية عالية.</p>
            <p>نحن ندرك التحديات التي تواجه مدراء التسويق ورواد الأعمال في فهم خوارزميات محركات البحث ومحركات الإجابة (Answer Engines) المعقدة. لذلك، نوفر لك الأدوات والتقارير التي تحول البيانات المعقدة إلى خطوات قابلة للتطبيق. من خلال مواردنا، يمكنك استكشاف كيفية تحسين بنية متجرك الإلكتروني، وكتابة محتوى ذري يتوافق مع معايير AEO، وبناء شبكة روابط قوية تعزز من سلطة نطاقك (Domain Authority).</p>
            <p>تعتبر هذه القوالب نتاج سنوات من التجربة والخطأ، وقد ساعدت العشرات من العلامات التجارية الكبرى في تحقيق نمو مستدام في حركة المرور العضوية (Organic Traffic). عند استخدامك لمواردنا، أنت لا تحصل فقط على مجرد مستندات، بل تقتني استراتيجيات مجربة قادرة على مضاعفة أرباحك وتأمين مكانتك كخبير موثوق في مجالك أمام كل من الزوار ومحركات البحث على حد سواء.</p>
          </div>
        </section>

        {/* Call to Action for Custom Reports */}
        <div className="mt-32 p-12 bg-brand-navy rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight relative z-10">
            تحتاج إلى تقرير مخصص <br /> <span className="text-brand-green">لصناعتك؟</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-bold relative z-10">
            تواصل معنا اليوم وسيقوم خبراؤنا بإعداد تحليل مفصل حول فرص النمو المؤتمت في قطاعك الخاص.
          </p>
          <Link href="/contact" className="inline-block bg-brand-green text-brand-navy px-10 py-5 rounded-3xl font-black hover:scale-105 transition-transform relative z-10">
            تواصل مع المستشار التقني
          </Link>
        </div>
      </div>
    </div>
  );
}
