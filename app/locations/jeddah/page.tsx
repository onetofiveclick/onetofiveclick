'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, TrendingUp, Users, ArrowLeft, CheckCircle, Star, Waves } from 'lucide-react';
import Link from 'next/link';
import DigitalMaturityQuiz from '@/components/sections/DigitalMaturityQuiz';

export default function JeddahLocationPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click Jeddah | ون تو فايف كليك جدة",
            "image": "https://onetofiveclick.comhttps://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/jeddah",
            "telephone": "+966 57 580 6733",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jeddah Corniche",
              "addressLocality": "Jeddah",
              "addressRegion": "Makkah Province",
              "postalCode": "22222",
              "addressCountry": "SA"
            },
            "areaServed": "Jeddah",
            "description": "Expert SEO, GEO, and growth marketing for businesses in Jeddah, the gateway of the Red Sea."
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img width="1200" height="800" 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
            alt="جدة - رائدة التسويق الرقمي على البحر الأحمر"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mr-0 ml-auto"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-brand-green/30">
              <Waves className="h-4 w-4" />
              <span>خدمات التسويق الرقمي في جدة</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              بوابة <br />
              <span className="text-brand-green">نمو جدة.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-bold">
              نصل بعلامتك التجارية إلى قلب العروس. حلول متكاملة في السيو، والإعلانات الممولة، وإدارة السمعة مصممة خصيصاً لمجتمع الأعمال في جدة.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="bg-brand-green text-brand-navy px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-brand-green/20"
              >
                تحدث مع خبيرنا في جدة
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Strategy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="text-right">
                <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 uppercase tracking-tighter leading-tight">
                    عروس البحر <br />
                    <span className="text-brand-green">تتحدث رقمياً.</span>
                </h2>
                <p className="text-xl text-slate-500 mb-10 font-bold leading-relaxed">
                    جدة هي مركز التجارة والسياحة. نحن نضمن ظهورك لآلاف الزوار والمقيمين الذين يبحثون عن خدماتك عبر "جوجل" و"تيك توك" يومياً.
                </p>
                <div className="space-y-6">
                    {[
                      'تحسين الظهور المحلي في الكورنيش والبلد',
                      'استهداف سياحي وتجاري دقيق',
                      'إدارة المراجعات والسمعة لبراندات جدة'
                    ].map(text => (
                      <div key={text} className="flex items-center gap-4 text-brand-navy font-black uppercase tracking-widest text-[11px] flex-row-reverse">
                         <CheckCircle className="h-5 w-5 text-brand-green" />
                         <span>{text}</span>
                      </div>
                    ))}
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-10 bg-brand-navy/5 rounded-full blur-[100px]" />
                <div className="relative bg-brand-navy p-16 rounded-[4rem] text-white shadow-3xl">
                   <Target className="h-20 w-20 text-brand-green mb-8" />
                   <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase">دقة استهداف جدة</h3>
                   <p className="text-slate-400 font-bold leading-relaxed mb-8">
                     نستخدم بيانات ديموغرافية حقيقية لسكان جدة لضمان أن كل ريال تنفقه في الإعلانات يعود عليك بعميل حقيقي.
                   </p>
                   <div className="text-5xl font-black text-brand-green tracking-tighter">98%</div>
                   <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">معدل دقة الاستهداف الجغرافي</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Digital Maturity Assessment Tool */}
      <section className="bg-slate-50 border-y border-slate-100">
         <DigitalMaturityQuiz />
      </section>

      {/* Neighborhood Authority Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="text-right">
                 <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-4 tracking-tighter">أحياء نغطيها في <span className="text-brand-green">جدة.</span></h2>
                 <p className="text-slate-500 font-bold max-w-xl mr-0 ml-auto">جدة مدينة واسعة ومتنوعة. نحن نوفر حلولاً مخصصة حسب طبيعة النشاط التجاري في كل منطقة.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'طريق الملك عبدالله', link: '/locations/jeddah/king-abdullah-rd/', desc: 'العصب التجاري للمؤسسات والشركات.' },
                { name: 'حي الشاطئ', link: '/locations/jeddah/al-shati/', desc: 'استهداف النخبة والخدمات الفاخرة.' },
                { name: 'حي الروضة', link: '/locations/jeddah/al-rawdah/', desc: 'مركز الأعمال الناشئة والمبدعين.' },
                { name: 'الكورنيش', link: '/locations/jeddah/corniche/', desc: 'التسويق السياحي والترفيهي.' }
              ].map((district, i) => (
                <Link 
                  href={district.link} 
                  key={i}
                  className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-brand-green transition-all flex flex-col justify-between h-full"
                >
                   <div className="text-right">
                      <h3 className="text-2xl font-black text-brand-navy mb-3 group-hover:text-brand-green transition-colors">{district.name}</h3>
                      <p className="text-xs text-slate-400 font-bold leading-relaxed">{district.desc}</p>
                   </div>
                   <div className="mt-8 flex justify-end">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 group-hover:bg-brand-green group-hover:text-brand-navy transition-all">
                         <ArrowLeft className="h-5 w-5" />
                      </div>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* AEO FAQ Section - Jeddah Edition */}
      <section className="py-32 bg-brand-green text-brand-navy overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-right mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">لماذا تتصدر <span className="text-white">جدة</span> نتائج البحث؟</h2>
              <p className="text-brand-navy/60 font-bold max-w-2xl mr-0 ml-auto leading-relaxed">نحن ندمج بين سحر العروس الرقمي وأحدث تقنيات السيو والـ AEO لعام 2025.</p>
           </div>

           <div className="space-y-6 max-w-4xl mr-0 ml-auto">
              {[
                { 
                  q: 'كيف نضمن لعملائنا في جدة السيطرة على الكلمات المفتاحية السياحية؟', 
                  a: 'نركز على الكلمات ذات النية المحلية العالية (Local Intent) المرتبطة بالكورنيش والمناطق التجارية، مع تحسين صور وفيديوهات الموقع لتظهر في نتائج بحث "جوجل إيميج" و"تيك توك".' 
                },
                { 
                  q: 'ما هي أهمية إدارة السمعة والمراجعات في سوق جدة؟', 
                  a: 'في جدة، يعتمد القرار الشرائي بشكل كبير على التوصيات. نحن نساعدك في جمع مراجعات حقيقية وإدارة ظهورك في خرائط جوجل لضمان بناء ثقة فورية مع العميل.' 
                },
                { 
                  q: 'هل تغطون الشركات الناشئة في حي الروضة؟', 
                  a: 'بالتأكيد. لدينا باقات مخصصة للشركات الناشئة في مراكز مثل مدينة الروضة للأعمال، تركز على النمو السريع وبناء الهوية الرقمية بأقل تكلفة استحواذ ممكنة.' 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/20 border border-brand-navy/5 p-10 rounded-[2.5rem] text-right group hover:bg-white/30 transition-all">
                   <h3 className="text-xl font-black text-brand-navy mb-4 flex items-center gap-4 flex-row-reverse">
                      <span className="w-8 h-8 rounded-full bg-brand-navy text-[10px] text-brand-green flex items-center justify-center font-black">؟</span>
                      {faq.q}
                   </h3>
                   <p className="text-brand-navy/80 font-bold leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-brand-green relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-12 tracking-tighter uppercase leading-[0.85]">ارتقِ ببراند <br /> <span className="text-white">جدة</span> الآن.</h2>
           <Link
             href="/contact"
             className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-navy/20 gap-4"
           >
             بدء رحلتك الرقمية
             <ArrowLeft className="h-6 w-6 text-brand-green" />
           </Link>
        </div>
      </section>
    </div>
  );
}
