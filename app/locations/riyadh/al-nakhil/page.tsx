'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, Briefcase, ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AlNakhilPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click - حي النخيل الرياض | ون تو فايف كليك",
            "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/riyadh/al-nakhil/",
            "telephone": "+966 57 580 6733",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al Nakhil District",
              "addressLocality": "Riyadh",
              "addressRegion": "Riyadh Province",
              "postalCode": "12381",
              "addressCountry": "SA"
            },
            "areaServed": "Al Nakhil, Riyadh",
            "description": "Leading digital marketing agency services for businesses and high-net-worth audiences in Al Nakhil district, Riyadh."
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="حي النخيل الرياض - التميز الرقمي"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/85 backdrop-blur-[1px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mr-0 ml-auto"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-brand-green/30">
              <MapPin className="h-4 w-4" />
              <span>خدمات التسويق الرقمي - حي النخيل</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              حي <br />
              <span className="text-brand-green">النخيل المتطور.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              استراتيجيات نمو مخصصة للشركات والمؤسسات الراقية في حي النخيل بالرياض. نجمع بين السيو المتقدم والوصول لجمهور النخبة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-right">
            <h2 className="text-4xl font-black text-brand-navy mb-12 tracking-tighter uppercase transition-colors">السلطة الموضوعية في قلب الرياض.</h2>
            <p className="text-xl text-slate-500 mb-16 font-bold leading-relaxed">
                حي النخيل يمثل واجهة الرياض العصرية. نحن نضمن أن تظهر علامتك التجارية كمرجع موثوق لسكان وشركات هذه المنطقة الحيوية.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: 'استهدف النخبة', desc: 'خوارزميات مخصصة للجمهور الفاخر.' },
                  { icon: TrendingUp, title: 'نمو مستدام', desc: 'سيو بلا انقطاع لنتائج دائمة.' },
                  { icon: Briefcase, title: 'حلول B2B', desc: 'توليد عملاء للشركات باحترافية.' }
                ].map((item, i) => (
                    <div key={i} className="p-8 border border-slate-100 rounded-[3rem] bg-slate-50 hover:border-brand-green transition-all group">
                        <item.icon className="h-10 w-10 text-brand-green mb-6 mr-0 ml-auto" />
                        <h3 className="text-xl font-black text-brand-navy mb-3">{item.title}</h3>
                        <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SEO Descriptive Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-right">
          <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-8 tracking-tighter">النمو الرقمي في حي النخيل بالرياض</h2>
          <div className="space-y-6 text-slate-500 font-bold leading-relaxed text-lg">
            <p>يُمثل حي النخيل في مدينة الرياض مركزاً للتميز والرقي، حيث يضم نخبة من المؤسسات الاستشارية، والشركات الكبرى، والمرافق التعليمية المرموقة. إن استهداف الجمهور الذكي والمتطلب في هذا الحي يستوجب استراتيجية تسويق رقمي تتجاوز الأساليب التقليدية لتصل إلى مستوى من الاحترافية العالية وتقديم محتوى ذي قيمة حقيقية يعكس مكانة علامتك التجارية كمزود خدمات رفيع المستوى.</p>
            <p>نقدم في وكالتنا خطط تحسين محركات بحث (SEO) مبنية على الفهم العميق لمتطلبات قطاع الأعمال (B2B) والعملاء ذوي الملاءة المالية العالية في منطقة النخيل. نعمل على تحليل دقيق للكلمات المفتاحية المتخصصة وتطوير استراتيجيات محتوى متطورة تتطابق مع نية البحث المعقدة. التركيز على تحويل موقعك إلى أصل رقمي يجذب الاستثمارات والشراكات الاستراتيجية من خلال تصدر نتائج البحث العضوية في أهم الكلمات المفتاحية لمجالك العقاري أو الاستشاري.</p>
            <p>ولأن التنافسية تزداد يومياً، نستخدم منهجية Answer Engine Optimization (AEO) لجعل موقعك المرجع الأول الذي تعتمد عليه نماذج الذكاء الاصطناعي في تقديم إجاباتها. من تحسين السرعة الفائقة وتجربة المستخدم الخالية من العيوب، إلى بناء الروابط الخلفية ذات الموثوقية العالية من مؤسسات محلية وعالمية، نضمن لك هيمنة رقمية تترجم مباشرة إلى نمو في المبيعات وترسيخ لسلطة علامتك التجارية في حي النخيل بالرياض.</p>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-32 bg-brand-green text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter uppercase leading-tight">كن الخيار الأول في <span className="text-white">حي النخيل.</span></h2>
            <Link
              href="/contact"
              className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-2xl"
            >
              اطلب عرضاً مخصصاً
              <ArrowLeft className="ml-4 h-6 w-6 text-brand-green" />
            </Link>
        </div>
      </section>
    </div>
  );
}
