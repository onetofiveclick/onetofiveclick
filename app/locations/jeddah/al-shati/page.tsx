import { Metadata } from 'next';
import { Target, MapPin, TrendingUp, Users, ArrowLeft, CheckCircle, Waves, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'سيو وتسويق رقمي في حي الشاطئ جدة | ون تو فايف كليك',
  description: 'استهدف النخبة والجمهور الراقي في حي الشاطئ بجدة من خلال استراتيجيات سيو ومحتوى فاخرة. نحن شريكك للريادة الرقمية في عروس البحر الأحمر.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/jeddah/al-shati/',
  },
};

export default function AlShatiPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click - حي الشاطئ جدة | ون تو فايف كليك",
            "image": "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/jeddah/al-shati/",
            "telephone": "+966 57 580 6733",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al Shati District",
              "addressLocality": "Jeddah",
              "addressRegion": "Makkah Province",
              "postalCode": "23412",
              "addressCountry": "SA"
            },
            "areaServed": "Al Shati, Jeddah",
            "description": "Premium Digital Marketing & SEO services in Al Shati, Jeddah. Target luxury segments and high-end consumers."
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=1200" 
            alt="حي الشاطئ جدة - التسويق للفخامة"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/85 backdrop-blur-[1px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mr-0 ml-auto opacity-100 translate-y-0">
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-brand-green/30">
              <Star className="h-4 w-4" />
              <span>استهداف النخبة في حي الشاطئ</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              حي <br />
              <span className="text-brand-green">الشاطئ الرقمي.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              نحن نساعد العلامات التجارية الفاخرة في حي الشاطئ بجدة على الوصول إلى جمهورها المستهدف بدقة متناهية من خلال استراتيجيات سيو ومحتوى استثنائية.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section: Deep Dive into Luxury Market */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-right">
            <h2 className="text-4xl font-black text-brand-navy mb-8 tracking-tighter uppercase">الريادة الرقمية في عروس البحر</h2>
            <div className="prose prose-lg max-w-none text-slate-600 font-bold leading-relaxed mb-16">
                <p className="mb-6">
                    يعتبر حي الشاطئ في جدة أحد أرقى الأحياء السكنية والتجارية في المملكة، حيث يجمع بين الهدوء الساحلي وحيوية الأعمال الراقية. نحن في "ون تو فايف كليك" ندرك أن التسويق لهذا القطاع يتطلب لغة بصرية وتقنية مختلفة تماماً عن التسويق التقليدي.
                </p>
                <p className="mb-6">
                    استراتيجيتنا لسيو (SEO) في حي الشاطئ تعتمد على "التسويق الفاخر المبني على البيانات". نحن لا نكتفي بتحسين الكلمات المفتاحية، بل نهتم بتجربة المستخدم (UX) التي تعكس فخامة براندك. من خلال تحسين سرعة الأداء وتقنيات "الرندر" المتقدمة لصور المنتجات والعقارات، نضمن أن يكتمل الانطباع الأول لعميلك في أقل من ثانية.
                </p>
                <p>
                    سواء كنت تدير فندقاً فاخراً، أو مطعماً عالمياً، أو علامة تجارية للأزياء الراقية في حي الشاطئ، فإن خدماتنا في "هندسة المحتوى" تساعدك على بناء سلطة موضوعية تجبر محركات البحث (والذكاء الاصطناعي) على تقديمك كأفضل خيار متاح. نحن لسنا مجرد وكالة، نحن شريكك الاستراتيجي في قلب جدة.
                </p>
            </div>

            <h2 className="text-4xl font-black text-brand-navy mb-8 tracking-tighter uppercase">لماذا اختيارنا في حي الشاطئ؟</h2>
            <div className="grid gap-8">
              {[
                {
                  title: 'تحليل سلوك الفخامة',
                  desc: 'نفهم كيف يبحث سكان حي الشاطئ والمترددون عليه عن الخدمات الراقية ونقوم بتحسين موقعك لتكون الخيار الأول والوحيد لهم.'
                },
                {
                  title: 'سيو الصور والفيديو المتقدم',
                  desc: 'في منطقة تعتمد على الجماليات البصرية مثل الشاطئ، نحسن أصولك المرئية وتقنيات "الشيما" الخاصة بها لتتصدر نتائج بحث الصور والفيديو في جوجل ومنصات التواصل.'
                },
                {
                  title: 'بناء سلطة البراند المحلية',
                  desc: 'نجعل علامتك التجارية مرتبطة عضوياً بمفاهيم التميز والجودة العالمية التي يشتهر بها حي الشاطئ في جدة.'
                }
              ].map((item, i) => (
                <div key={i} className="p-10 border border-slate-100 rounded-[3rem] bg-slate-50 hover:border-brand-green transition-colors flex flex-row-reverse items-start gap-6">
                  <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brand-navy mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-tight">ابدأ رحلة تفوقك في <span className="text-brand-green">الشاطئ.</span></h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all"
          >
            تواصل معنا اليوم
            <ArrowLeft className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
