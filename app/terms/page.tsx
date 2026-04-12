import Link from 'next/link';
import type { Metadata } from 'next';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'شروط الاستخدام | ون تو فايف كليك',
  description: 'شروط وأحكام استخدام خدمات ون تو فايف كليك — الوكالة الرقمية المتخصصة في السوق السعودي.',
  alternates: { canonical: 'https://onetofiveclick.com/terms/' },
  openGraph: {
    title: 'شروط الاستخدام | ون تو فايف كليك',
    description: 'الشروط والأحكام القانونية لاستخدام خدمات ون تو فايف كليك.',
    url: 'https://onetofiveclick.com/terms',
    locale: 'ar_SA',
    type: 'website',
  },
};

const sections = [
  {
    title: '1. قبول الشروط',
    content: [
      'باستخدامك لموقع onetofiveclick.com أو أي من خدماتنا، فإنك تقرّ بقراءة هذه الشروط وفهمها والموافقة على الالتزام بها.',
      'إذا كنت تستخدم خدماتنا نيابةً عن شركة أو كيان تجاري، فإنك تُقرّ بأن لديك الصلاحية القانونية لإلزام هذا الكيان بهذه الشروط.',
      'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيُبلَّغ المستخدمون الحاليون بأي تغييرات جوهرية عبر البريد الإلكتروني.',
    ],
  },
  {
    title: '2. وصف الخدمات',
    content: [
      'تُقدّم ون تو فايف كليك طيفاً من خدمات التسويق الرقمي تشمل: تحسين محركات البحث (SEO/AEO/GEO)، إدارة الإعلانات المدفوعة، تطوير المحتوى، تطوير المواقع بتقنية Next.js، وإدارة السمعة الرقمية.',
      'تُقدَّم الخدمات وفق نطاق العمل (Scope of Work) المُتفق عليه في اتفاقية الخدمة المُبرمة مع كل عميل.',
      'نحتفظ بالحق في تعديل أو إيقاف أي خدمة مع إشعار مسبق مناسب.',
    ],
  },
  {
    title: '3. التزامات العميل',
    content: [
      'تزويدنا بمعلومات دقيقة وكاملة وحديثة بشأن نشاطك التجاري وأهدافك التسويقية.',
      'الحصول على جميع التراخيص والحقوق اللازمة لأي محتوى أو علامة تجارية تُقدّمها لنا لاستخدامها في حملاتك.',
      'الامتثال لسياسات المنصات الإعلانية (جوجل، ميتا، وغيرها) وعدم طلب أي إجراءات تنتهك هذه السياسات.',
      'سداد المدفوعات المُستحقة في مواعيدها المُحددة وفق شروط الاتفاقية.',
    ],
  },
  {
    title: '4. الملكية الفكرية',
    content: [
      'جميع المحتوى الذي ينتجه فريقنا لصالحك يصبح ملكيتك الكاملة بعد اكتمال السداد.',
      'تظل جميع الأدوات والأطر والمنهجيات الخاصة بون تو فايف كليك ملكية حصرية لنا.',
      'تمنحنا حق استخدام اسم شركتك وشعارها كمرجع في مادتنا التسويقية، ما لم تطلب خلاف ذلك صراحةً.',
      'يُحظر عليك إعادة بيع خدماتنا أو تقديمها كخدماتك الخاصة دون إذن كتابي مسبق منا.',
    ],
  },
  {
    title: '5. الدفع والفوترة',
    content: [
      'تُدفع الرسوم الشهرية مُقدَّماً في مطلع كل دورة فوترة وفق الاتفاقية المُبرمة.',
      'يُؤدي التأخر في السداد (أكثر من 14 يوماً) إلى تعليق الخدمة مؤقتاً مع الإبقاء على بيانات العميل.',
      'تُسترد الرسوم في حال الإلغاء خلال الـ 7 أيام الأولى من العقد فقط ("فترة التبريد").',
      'جميع الأسعار بالريال السعودي ما لم يُنصّ على خلاف ذلك مصرّحاً في الاتفاقية.',
    ],
  },
  {
    title: '6. إنهاء الخدمة',
    content: [
      'يحق لأي طرف إنهاء الاتفاقية بإشعار كتابي مسبق مدته 30 يوماً.',
      'في حال الإنهاء، نُسلّمك جميع الأصول والبيانات والتقارير المُنتجة وفق الاتفاقية خلال 14 يوم عمل.',
      'يحق لنا إنهاء الخدمة فوراً في حال الإخلال الجسيم بهذه الشروط أو التعامل بأساليب غير أخلاقية.',
    ],
  },
  {
    title: '7. حدود المسؤولية',
    content: [
      'نبذل أقصى جهودنا لتحقيق النتائج المتفق عليها، إلا أن الأداء يعتمد على عوامل خارجية (خوارزميات محركات البحث، ظروف السوق) لا نتحكم فيها.',
      'لا تتجاوز مسؤوليتنا القصوى في أي حالة مجموع الرسوم المدفوعة خلال الثلاثة أشهر السابقة للحادثة.',
      'لا نتحمل المسؤولية عن أي خسائر غير مباشرة أو تبعية أو اقتصادية ناجمة عن استخدام خدماتنا.',
    ],
  },
  {
    title: '8. القانون الواجب التطبيق',
    content: [
      'تُفسَّر هذه الشروط وتُطبَّق وفقاً للقوانين والأنظمة المعمول بها في المملكة العربية السعودية.',
      'تُحال النزاعات أولاً إلى التفاوض الودي، وفي حال تعذّر ذلك، إلى التحكيم في مدينة الرياض وفق اللوائح السعودية.',
    ],
  },
];

export default function TermsPage() {
  const lastUpdated = 'أبريل 2026';

  return (
    <div className="pt-24 bg-white min-h-screen text-right">

      {/* Hero */}
      <section className="relative bg-brand-navy py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-white/10">
            <FileText className="h-4 w-4" />
            <span>اتفاقية قانونية واضحة وشفافة</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
            شروط <br />
            <span className="text-brand-green uppercase">الاستخدام.</span>
          </h1>
          <p className="text-slate-400 font-bold text-lg max-w-xl mx-auto leading-relaxed">
            شروط واضحة وعادلة تحدد حقوقك وحقوقنا في إطار علاقة مهنية شفافة.
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-8">
            آخر تحديث: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro box */}
          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 mb-16">
            <p className="text-slate-600 leading-relaxed font-bold text-lg">
              تُحكم هذه الشروط العلاقة بين <span className="text-brand-navy font-black">ون تو فايف كليك</span> ("الشركة") وعملائها ("العميل"). نؤمن بالشفافية الكاملة — هذه الشروط مكتوبة بلغة واضحة لا غموض فيها.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, i) => (
              <div key={i} className="border-b border-slate-100 pb-12 last:border-0">
                <h2 className="text-2xl font-black text-brand-navy mb-6 tracking-tighter">{section.title}</h2>
                <ul className="space-y-4">
                  {section.content.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-4 flex-row-reverse">
                      <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                      <p className="text-slate-600 leading-relaxed font-bold text-sm">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact card */}
          <div className="mt-20 bg-brand-navy rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
            <FileText className="h-12 w-12 text-brand-green mx-auto mb-6" />
            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">أسئلة حول هذه الشروط؟</h3>
            <p className="text-slate-400 font-bold mb-8 leading-relaxed">
              فريقنا القانوني والتشغيلي جاهز للإجابة على أي استفسار.
            </p>
            <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center">
              <a
                href="mailto:team@onetofiveclick.com"
                className="inline-flex items-center gap-3 bg-brand-green text-brand-navy px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all"
              >
                team@onetofiveclick.com
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 border border-white/10 text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                نموذج التواصل
              </Link>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 flex flex-col sm:flex-row-reverse gap-6 justify-center items-center">
            <Link href="/privacy/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-green transition-colors">
              <ArrowLeft className="h-4 w-4" />
              سياسة الخصوصية
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-green transition-colors">
              <ArrowLeft className="h-4 w-4" />
              العودة إلى الرئيسية
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
