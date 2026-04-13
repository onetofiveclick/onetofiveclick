import { Metadata } from 'next';
import { Target, MapPin, TrendingUp, ArrowLeft, CheckCircle, Star, Factory } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'سيو وأتمتة تسويقية في حي الشاطئ الدمام | ون تو فايف كليك',
  description: 'وكالة تسويق رقمي متخصصة في السيو (SEO) والأتمتة للقطاع اللوجستي والصناعي في حي الشاطئ بالدمام. نساعدك على السيطرة على نتائج البحث في الشرقية.',
  alternates: {
    canonical: 'https://onetofiveclick.com/locations/dammam/ash-shati/',
  },
};

export default function AshShatiDistrictPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click Ash-Shati Dammam | ون تو فايف كليك حي الشاطئ",
            "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/dammam/ash-shati",
            "telephone": "+966 57 580 6733",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ash-Shati District",
              "addressLocality": "Dammam",
              "addressRegion": "Eastern Province",
              "postalCode": "32413",
              "addressCountry": "SA"
            },
            "areaServed": "Ash-Shati District, Dammam",
            "description": "Leading Digital Marketing and Automation agency for the Logistics and Energy sectors in Ash-Shati, Dammam."
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-l from-brand-navy to-transparent z-10" />
           <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200" 
            alt="حي الشاطئ الدمام - بوابة الشرق الرقمية"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl mr-0 ml-auto opacity-100 translate-x-0">
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-green/30">
              <Factory className="h-4 w-4" />
              <span>خدماتنا في حي الشاطئ، الدمام</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              الدمام <br />
              <span className="text-brand-green">بوابة النمو.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              نحن نقود التحول الرقمي للقطاعين اللوجستي والصناعي في حي الشاطئ بالدمام، من خلال استراتيجيات سيو (SEO) وأتمتة تسويقية متطورة.
            </p>
            <div className="flex flex-wrap gap-6 flex-row-reverse">
              <Link
                href="/contact/"
                className="bg-brand-green text-brand-navy px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
              >
                تواصل مع خبيرنا في الشرقية
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Authority Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <div className="space-y-8">
                   {[
                     { title: 'سيو القطاع اللوجستي والصناعي', desc: 'نحن متخصصون في تصدر نتائج البحث للشركات التي تخدم قطاعات الطاقة والصناعة في المنطقة الشرقية.', link: '/services/seo/' },
                     { title: 'أتمتة المبيعات للشركات B2B', desc: 'بناء أنظمة ذكية لتوليد العملاء المحتملين لشركات المقاولات واللوجستيات في الدمام.', link: '/services/seo/' },
                     { title: 'إدارة السمعة للبراندات الإقليمية', desc: 'تعزيز مكانة براندك كقائد في سوق الشرقية عبر استراتيجيات المراجعات والظهور المحلي.', link: '/services/seo/' }
                   ].map((info, i) => (
                     <Link href={info.link} key={i} className="flex gap-6 flex-row-reverse group cursor-pointer text-right">
                        <div className="w-10 h-10 bg-slate-50 text-brand-green rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-green group-hover:text-brand-navy transition-colors">
                           <CheckCircle className="h-5 w-5" />
                        </div>
                        <div className="text-right">
                           <h3 className="text-xl font-black text-brand-navy mb-2 tracking-tight group-hover:text-brand-green transition-colors">{info.title}</h3>
                           <p className="text-slate-500 text-sm font-bold leading-relaxed">{info.desc}</p>
                        </div>
                     </Link>
                   ))}
                </div>
             </div>
             <div className="text-right order-1 lg:order-2">
                <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 leading-[1.1] tracking-tighter">
                   الدمام <br /><span className="text-brand-green">تنمو بذكاء.</span>
                </h2>
                <div className="prose prose-slate max-w-none mb-8">
                    <p className="text-slate-500 font-bold leading-relaxed mb-4">
                       حي الشاطئ هو قلب الأعمال الحديثة في الدمام. مع التوسع الصناعي الكبير في المنطقة الشرقية، أصبح الحضور الرقمي هو الفارق الجوهري بين الشركات التقليدية والشركات التي تقود المستقبل اللوجستي للمملكة.
                    </p>
                    <p className="text-slate-500 font-bold leading-relaxed mb-4">
                        نحن نفهم التعقيدات الفريدة للشركات التي تتخذ من الدمام مقراً لها، خاصة في قطاعات الطاقة وسلاسل الإمداد. استراتيجيات السيو (SEO) التي نطبقها في حي الشاطئ لا تستهدف الكلمات العامة، بل تركز على "الكلمات المفتاحية ذات النية التجارية العالية" التي يستخدمها صناع القرار في كبرى شركات المقاولات والصناعة.
                    </p>
                    <p className="text-slate-500 font-bold leading-relaxed">
                        عبر دمج أدوات "أتمتة التسويق" و "الذكاء الاصطناعي"، نساعد شركتك في الدمام على تقليل تكلفة الاستحواذ على العميل وزيادة كفاءة قمع المبيعات. رؤيتنا هي تحويل حي الشاطئ إلى مركز ثقل رقمي ينافس كبرى المدن العالمية.
                    </p>
                </div>
                <div className="p-8 bg-brand-navy rounded-[3rem] text-white overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-full h-full bg-brand-green opacity-5 pointer-events-none" />
                   <div className="relative z-10">
                      <div className="text-4xl font-black mb-2 tracking-tighter text-brand-green">+150%</div>
                      <div className="text-xs font-black uppercase tracking-widest opacity-60">زيادة في العملاء المحتملين لعملائنا الصناعيين</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-none uppercase">هل تنمو شركتك في <span className="text-brand-green">الشرقية؟</span></h2>
           <Link
             href="/contact/"
             className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-brand-green/20 gap-4"
           >
             ابدأ رحلة الريادة في الدمام
             <ArrowLeft className="h-5 w-5" />
           </Link>
           <div className="mt-12">
              <Link href="/locations/dammam/" className="text-brand-navy/40 hover:text-brand-green text-[10px] font-black uppercase tracking-[0.2em] transition-colors">
                 عودة إلى خدمات الدمام والمنطقة الشرقية
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
