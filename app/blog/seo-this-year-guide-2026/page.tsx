import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'دليل السيو لعام 2026: الانتقال من الكلمات الرئيسية إلى الوكلاء والكيانات',
  description: 'اكتشف مستقبلك في البحث مع دليل السيو لعام 2026. تعلم كيف تهيمن على محركات الإجابة وتهيئ علامتك التجارية لعصر الذكاء الاصطناعي الأرجنتي.',
  alternates: {
    canonical: '/blog/seo-this-year-guide-2026/',
  },
};

export default function SeoYearGuidePage() {
  return (
    <article className="pt-24 pb-20 bg-white min-h-screen text-right">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-brand-navy hover:text-brand-green mb-12 font-black uppercase tracking-widest text-[10px] transition-all group gap-2">
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          العودة إلى جميع المقالات
        </Link>

        <header className="mb-16">
          <div className="flex mb-8 justify-end">
            <span className="bg-brand-mint text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-green/10">
              استراتيجية 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 leading-[0.9] tracking-tighter">
            دليل السيو لعام 2026: عصر <br /><span className="text-brand-green uppercase">الكيانات والوكلاء.</span>
          </h1>

          <div className="flex items-center justify-end space-x-8 space-x-reverse text-[10px] font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-brand-green" />
              <span>فريق ون تو فايف كليك</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-brand-green" />
              <span>12 أبريل 2026</span>
            </div>
          </div>
        </header>

        <div className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="SEO Year Guide 2026"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
        </div>

        <div className="prose prose-lg max-w-none text-right
          prose-headings:text-brand-navy prose-headings:font-black prose-headings:tracking-tighter prose-headings:leading-tight
          prose-p:text-slate-500 prose-p:font-medium prose-p:leading-relaxed
          prose-strong:text-brand-navy prose-strong:font-black
          prose-ul:text-slate-500 prose-li:font-medium
          prose-blockquote:border-r-4 prose-blockquote:border-brand-green prose-blockquote:bg-brand-mint/30 prose-blockquote:p-8 prose-blockquote:rounded-l-[2rem]">
          <h2>الميزان المكسور: لماذا لا يكفي تصدر جوجل؟</h2>
          <p>في عام 2026، لم يعد السؤال هو "كيف أتصدر جوجل؟" بل أصبح "كيف أضمن أن يكون الوكيل الذكي (AI Agent) هو من يختار خدماتي للمستخدم؟". نحن نعيش الآن في عصر البحث الأرجنتي، حيث تقوم الأنظمة المستقلة بالبحث والفلترة واختيار الحلول نيابة عن البشر.</p>
          
          <h3>الركائز الثلاث لسيادة السيو في 2026</h3>
          <ul>
            <li><strong>سلطة الكيان (Entity Authority):</strong> بناء حضور رقمي لا لبس فيه يتمثل في بيانات مُهيكلة دقيقة.</li>
            <li><strong>الثقة السلوكية:</strong> الإشارات الحقيقية القادمة من تفاعل المستخدمين الفعليين وليس مجرد النقرات الوهمية.</li>
            <li><strong>تحسين المحركات التوليدية (GEO):</strong> جعل محتواك قابلاً للاستخدام كمرجع أساسي لنماذج اللغة الكبيرة.</li>
          </ul>

          <blockquote>
            "الشركات التي لا تزال تُحسن للكلمات المفتاحية في 2026 هي شركات تبيع حلول الماضي لمشاكل المستقبل."
          </blockquote>

          <h2>نقطة الانعطاف 2027</h2>
          <p>نحن نقترب من عام 2027، العام الذي ستتحول فيه غالبية عمليات البحث العضوية من النوع "الاستكشافي" إلى النوع "التنفيذي" عبر الوكلاء. إذا لم يكن موقعك مُحسناً ليفهمه الوكيل كما يفهمه الإنسان، ستختفي علامتك التجارية من رادار السوق.</p>
        </div>

        <div className="mt-24 p-12 md:p-20 bg-brand-navy rounded-[4rem] relative overflow-hidden shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none relative z-10">جاهز للتفوق في <br /><span className="text-brand-green">عصر الوكلاء؟</span></h3>
          <p className="text-slate-400 font-medium mb-12 max-w-xl relative z-10 leading-relaxed mx-auto md:mx-0">انضم إلى الطليعة التي تقود مستقبل البحث في السعودية. ابدأ اليوم بتأمين مكانك في محركات الإجابة.</p>
          <Link href="/contact" className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] relative z-10 shadow-xl group gap-3">
            احجز استشارتك الاستراتيجية
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
