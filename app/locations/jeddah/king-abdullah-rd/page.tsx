'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, TrendingUp, ArrowLeft, CheckCircle, Star, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function KingAbdullahRdPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click King Abdullah Rd Jeddah | ون تو فايف كليك طريق الملك عبدالله",
            "image": "https://onetofiveclick.comhttps://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/jeddah/king-abdullah-rd",
            "telephone": "+966 57 580 6733",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "King Abdullah Road",
              "addressLocality": "Jeddah",
              "addressRegion": "Makkah Province",
              "postalCode": "22233",
              "addressCountry": "SA"
            },
            "areaServed": "King Abdullah Road, Jeddah",
            "description": "Expert Digital Marketing, SEO, and Growth solutions for businesses along King Abdullah Road, Jeddah's commercial spine."
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-l from-brand-navy to-transparent z-10" />
           <img width="1200" height="800" 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
            alt="طريق الملك عبدالله جدة - القلب التجاري"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl mr-0 ml-auto"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-green/30">
              <MapPin className="h-4 w-4" />
              <span>خدماتنا في طريق الملك عبدالله، جدة</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              طريق <br />
              <span className="text-brand-green">الملك عبدالله.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              نعمل مع تجار التجزئة، المكاتب الإدارية، والشركات الكبرى المتواجدة في "عصب جدة التجاري" لتحقيق نمو رقمي حقيقي ومستدام.
            </p>
            <div className="flex flex-wrap gap-6 flex-row-reverse">
              <Link
                href="/contact"
                className="bg-brand-green text-brand-navy px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
              >
                تحدث مع مستشارنا في جدة
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
                     { title: 'تحسين السيو للتجارة والبيع بالتجزئة', desc: 'نساعد المحلات التجارية والشركات في طريق الملك عبدالله على جذب المزيد من الزوار عبر خرائط جوجل.', link: '/services/seo/' },
                     { title: 'أتمتة سلاسل الإمداد والخدمات اللوجستية', desc: 'حلول تقنية ذكية تسرع من وتيرة العمل في العصب التجاري لمدينة جدة.', link: '/services/seo/' },
                     { title: 'التسويق المحلي الموجه (GEO)', desc: 'نصل بعلامتك التجارية إلى الجمهور المتواجد الآن في أهم مراكز التسوق والأعمال بجدة.', link: '/services/seo/' }
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
                   النمو الرقمي في <br /><span className="text-brand-green">عصب جدة التجاري.</span>
                </h2>
                <p className="text-slate-500 mb-8 font-bold leading-relaxed">
                   طريق الملك عبدالله هو موطن لأهم المراكز التجارية في جدة. نحن هنا لضمان أن تكون علامتك التجارية هي الخيار الأول لكل زائر وباحث رقمي في هذه المنطقة.
                </p>
                <div className="p-8 bg-brand-navy rounded-[3rem] text-white flex items-center gap-8 flex-row-reverse">
                   <Star className="h-12 w-12 text-brand-green shrink-0" />
                   <div className="text-right">
                      <div className="text-4xl font-black mb-2 tracking-tighter text-brand-green">Top 3</div>
                      <div className="text-xs font-black uppercase tracking-widest opacity-60">في نتائج البحث المحلي داخل جدة</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-none uppercase">هل تبحث عن <span className="text-brand-green">الريادة</span> في جدة؟</h2>
           <Link
             href="/contact"
             className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-brand-green/20 gap-4"
           >
             بدء رحلة النجاح الآن
             <ArrowLeft className="h-5 w-5" />
           </Link>
           <div className="mt-12">
              <Link href="/locations/jeddah" className="text-brand-navy/40 hover:text-brand-green text-[10px] font-black uppercase tracking-[0.2em] transition-colors">
                 عودة إلى خريطة خدمات جدة
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
