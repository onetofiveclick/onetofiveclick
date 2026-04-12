'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, TrendingUp, ArrowLeft, CheckCircle, Star, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function AlMalazDistrictPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click Al-Malaz Riyadh | ون تو فايف كليك الملز",
            "image": "https://onetofiveclick.com/riyadh_digital_marketing_authority_1775799453369.png",
            "url": "https://onetofiveclick.com/locations/riyadh/al-malaz",
            "telephone": "+966XXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al-Malaz District",
              "addressLocality": "Riyadh",
              "addressRegion": "Riyadh Province",
              "postalCode": "12821",
              "addressCountry": "SA"
            },
            "areaServed": "Al-Malaz District, Riyadh",
            "description": "Premium Local SEO and Marketing Automation for established businesses and government-adjacent contractors in Al-Malaz, Riyadh."
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-l from-brand-navy to-transparent z-10" />
           <img 
            src="/riyadh_digital_marketing_authority_1775799453369.png" 
            alt="حي الملز الرياض - العصب التجاري التاريخي"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl mr-0 ml-auto"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-green/30">
              <Briefcase className="h-4 w-4" />
              <span>خدماتنا في حي الملز، الرياض</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              حي <br />
              <span className="text-brand-green">الملز العريق.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              ندعم الشركات العريقة والمقاولين في حي الملز للتحول الرقمي الكامل والسيطرة على نتائج البحث المحلية في قلب العاصمة.
            </p>
            <div className="flex flex-wrap gap-6 flex-row-reverse">
              <Link
                href="/contact/"
                className="bg-brand-green text-brand-navy px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
              >
                تطوير أعمال الملز رقمياً
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Authority Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <div className="space-y-8">
                   {[
                     { title: 'تحويل الشركات التقليدية', desc: 'نأخذ بمشروعك من الطرق التقليدية إلى قمة النتائج الرقمية في حي الملز.' },
                     { title: 'سيو محلي للأحياء المجاورة', desc: 'استهداف دقيق لوسط الرياض والأحياء المحيطة بالاستاد والوزارات.' },
                     { title: 'إدارة السمعة الاحترافية', desc: 'بناء الثقة لعلامتك التجارية عبر مراجعات جوجل الموثقة في خرائط الرياض.' }
                   ].map((info, i) => (
                     <div key={i} className="flex gap-6 flex-row-reverse group">
                        <div className="w-10 h-10 bg-slate-50 text-brand-green rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-green group-hover:text-brand-navy transition-colors">
                           <CheckCircle className="h-5 w-5" />
                        </div>
                        <div className="text-right">
                           <h3 className="text-xl font-black text-brand-navy mb-2 tracking-tight">{info.title}</h3>
                           <p className="text-slate-500 text-sm font-bold leading-relaxed">{info.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="text-right order-1 lg:order-2">
                <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 leading-[1.1] tracking-tighter">
                   النمو في <br /><span className="text-brand-green">قلب الرياض التجاري.</span>
                </h2>
                <p className="text-slate-500 mb-8 font-bold leading-relaxed">
                   الملز هو عصب التجارة والوزارات في الرياض. الشركات هنا تحتاج إلى حضور رقمي قوي لضمان استمرارية النمو في ظل رؤية المملكة 2030.
                </p>
                <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center gap-8 flex-row-reverse">
                   <Target className="h-12 w-12 text-brand-green shrink-0" />
                   <div className="text-right">
                      <div className="text-4xl font-black mb-2 tracking-tighter text-brand-navy">24/7</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ظهور رقمي مستمر لعملائنا في الملز</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
           <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none uppercase">هل مشروعك في <span className="text-brand-green">الملز؟</span></h2>
           <Link
             href="/contact/"
             className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-brand-green/20 gap-4"
           >
             ابدأ السيطرة الرقمية اليوم
             <ArrowLeft className="h-5 w-5" />
           </Link>
           <div className="mt-12">
              <Link href="/locations/riyadh/" className="text-white/40 hover:text-brand-green text-[10px] font-black uppercase tracking-[0.2em] transition-colors">
                 العودة إلى خدمات الرياض الأساسية
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
