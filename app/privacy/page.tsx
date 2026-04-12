import Link from 'next/link';
import type { Metadata } from 'next';
import { Shield, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | ون تو فايف كليك',
  description: 'سياسة الخصوصية لشركة ون تو فايف كليك — كيف نجمع بياناتك ونحميها ونستخدمها في السوق السعودي.',
  alternates: { canonical: 'https://onetofiveclick.com/privacy/' },
  openGraph: {
    title: 'سياسة الخصوصية | ون تو فايف كليك',
    description: 'كيف تحمي ون تو فايف كليك بياناتك الشخصية والتجارية.',
    url: 'https://onetofiveclick.com/privacy',
    locale: 'ar_SA',
    type: 'website',
  },
};

const sections = [
  {
    title: '1. المعلومات التي نجمعها',
    content: [
      'نجمع المعلومات التي تقدمها مباشرةً عند تعبئة النماذج أو التواصل معنا، وتشمل: الاسم، البريد الإلكتروني للعمل، رقم الهاتف، واسم الشركة.',
      'نجمع بيانات الاستخدام تلقائياً عند تصفح موقعنا، مثل عنوان IP، نوع المتصفح، الصفحات المُزارة، ومدة الجلسة.',
      'قد نجمع بيانات تقنية عبر ملفات تعريف الارتباط (Cookies) لتحسين أداء الموقع وتجربة المستخدم.',
    ],
  },
  {
    title: '2. كيف نستخدم معلوماتك',
    content: [
      'تقديم خدماتنا التسويقية والاستشارية وإدارة العلاقة معك كعميل.',
      'إرسال تحديثات تتعلق بالخدمات والتقارير الشهرية وفق الاتفاقية المُبرمة.',
      'تحسين أداء موقعنا وتجربة المستخدم من خلال تحليل بيانات الاستخدام.',
      'الامتثال للمتطلبات القانونية المعمول بها في المملكة العربية السعودية.',
      'إرسال رسائل تسويقية عند الحصول على موافقتك الصريحة فقط.',
    ],
  },
  {
    title: '3. حماية بياناتك',
    content: [
      'نستخدم بروتوكولات تشفير SSL/TLS لحماية جميع البيانات المنقولة بين متصفحك وخوادمنا.',
      'يتمتع فريقنا بصلاحية وصول محدودة للبيانات الشخصية، مقيّدة بمبدأ الحد الأدنى من الامتياز.',
      'نعتمد على بنية تحتية سحابية موثوقة تلتزم بمعايير أمن البيانات الدولية (ISO 27001).',
      'لا نبيع أي بيانات شخصية لأطراف ثالثة خارجية.',
    ],
  },
  {
    title: '4. مشاركة البيانات مع أطراف ثالثة',
    content: [
      'نشارك بياناتك مع مزودي الخدمة المُختارين (مثل Google Analytics، وأدوات إدارة الحملات) فقط بالقدر الضروري لتقديم خدماتنا.',
      'قد نُفصح عن بياناتك استجابةً للمتطلبات القانونية أو أوامر المحاكم وفق القانون السعودي.',
      'في حالة الاندماج أو الاستحواذ، ستنتقل البيانات إلى الكيان الجديد مع إخطارك بذلك.',
    ],
  },
  {
    title: '5. ملفات تعريف الارتباط (Cookies)',
    content: [
      'نستخدم ملفات الارتباط الضرورية لتشغيل الموقع وضمان وظائفه الأساسية.',
      'نستخدم ملفات ارتباط التحليل (Analytics Cookies) لفهم كيفية تفاعل الزوار مع الموقع.',
      'يمكنك التحكم في ملفات الارتباط عبر إعدادات متصفحك، علماً بأن تعطيلها قد يؤثر على بعض وظائف الموقع.',
    ],
  },
  {
    title: '6. حقوقك',
    content: [
      'حق الوصول: يمكنك طلب الاطلاع على بياناتك الشخصية التي نحتفظ بها.',
      'حق التصحيح: يمكنك طلب تصحيح أي بيانات غير دقيقة أو غير مكتملة.',
      'حق الحذف: يمكنك طلب حذف بياناتك الشخصية وفق الشروط المُحددة.',
      'حق الاعتراض: يمكنك الاعتراض على معالجة بياناتك لأغراض التسويق في أي وقت.',
    ],
  },
  {
    title: '7. الاحتفاظ بالبيانات',
    content: [
      'نحتفظ بالبيانات الشخصية للمدة اللازمة لتقديم خدماتنا وتحقيق الأغراض المذكورة في هذه السياسة.',
      'تُحذف بيانات العملاء غير النشطين بعد (3) سنوات من انتهاء العلاقة التعاقدية، مالم يقتضِ القانون خلاف ذلك.',
    ],
  },
  {
    title: '8. التغييرات على هذه السياسة',
    content: [
      'نحتفظ بالحق في تحديث هذه السياسة في أي وقت. سنُخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار واضح على الموقع.',
      'استمرارك في استخدام خدماتنا بعد إشعار التغيير يُعدّ قبولاً للسياسة المُحدّثة.',
    ],
  },
];

export default function PrivacyPage() {
  const lastUpdated = 'أبريل 2026';

  return (
    <div className="pt-24 bg-white min-h-screen text-right">

      {/* Hero */}
      <section className="relative bg-brand-navy py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-white/10">
            <Shield className="h-4 w-4" />
            <span>حماية بياناتك أولويتنا</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
            سياسة <br />
            <span className="text-brand-green uppercase">الخصوصية.</span>
          </h1>
          <p className="text-slate-400 font-bold text-lg max-w-xl mx-auto leading-relaxed">
            نلتزم بحماية بياناتك الشخصية والتجارية بأعلى معايير الأمان والشفافية.
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
              تُطبّق شركة <span className="text-brand-navy font-black">ون تو فايف كليك</span> هذه السياسة على جميع الخدمات الرقمية المُقدَّمة عبر موقع{' '}
              <span className="text-brand-green font-black">onetofiveclick.com</span> وتطبيقاتنا المصاحبة. باستخدامك لخدماتنا، فإنك توافق على الشروط الواردة في هذه السياسة.
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

          {/* Contact for Privacy */}
          <div className="mt-20 bg-brand-navy rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
            <Shield className="h-12 w-12 text-brand-green mx-auto mb-6" />
            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">أسئلة حول خصوصيتك؟</h3>
            <p className="text-slate-400 font-bold mb-8 leading-relaxed">
              لأي استفسارات تتعلق بسياسة الخصوصية أو حقوقك في البيانات، تواصل معنا مباشرةً.
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

          {/* Back nav */}
          <div className="mt-12 text-center">
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
