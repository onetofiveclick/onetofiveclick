'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, TrendingUp, Users, ArrowLeft, CheckCircle, Star, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function DammamLocationPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click Dammam | ون تو فايف كليك الدمام",
            "image": "https://images.unsplash.com/photo-1541888941259-773a9417d741?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/dammam",
            "telephone": "+966 57 580 6733",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dammam Business District",
              "addressLocality": "Dammam",
              "addressRegion": "Eastern Province",
              "postalCode": "33333",
              "addressCountry": "SA"
            },
            "areaServed": "Dammam",
            "description": "Leading digital marketing and industrial-focused SEO services in Dammam and the Eastern Province."
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888941259-773a9417d741?auto=format&fit=crop&q=80&w=1200" 
            alt="الدمام - قلب الصناعة والتسويق الرقمي"
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
              <Building2 className="h-4 w-4" />
              <span>خدمات التسويق الرقمي في الدمام والخبر</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              قـوة <br />
              <span className="text-brand-green">الشرقـيـة.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-bold">
              نحن المحرك الرقمي خلف كبرى شركات المنطقة الشرقية. من الخبر إلى الجبيل، نبني حضورك الرقمي لينافس عالمياً.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact/"
                className="bg-brand-green text-brand-navy px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-brand-green/20"
              >
                استشارة مجانية في المنطقة الشرقية
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industrial/B2B Focus */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1 sm:grid grid-cols-2 gap-8">
                 {[
                   { label: 'سيو صناعي B2B', value: '+200%', icon: TrendingUp },
                   { label: 'إعلانات لينكد إن', value: 'دقيقة', icon: Users },
                   { label: 'أتمتة المبيعات', value: 'ذكية', icon: Target },
                   { label: 'تحليل المنافسين', value: 'عميق', icon: Star }
                 ].map((stat, i) => (
                   <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:border-brand-green transition-all group text-right">
                      <stat.icon className="h-10 w-10 text-brand-green mb-8 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-black text-brand-navy mb-2 tracking-tighter leading-none">{stat.value}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                   </div>
                 ))}
              </div>
              <div className="text-right order-1 lg:order-2">
                 <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 uppercase tracking-tighter leading-tight">
                    السوق <br />
                    <span className="text-brand-green">الأكثر ذكاءً.</span>
                 </h2>
                 <p className="text-xl text-slate-500 mb-10 font-bold leading-relaxed">
                    المنطقة الشرقية هي عصب الاقتصاد. نحن نساعد الشركات الصناعية واللوجستية في الدمام على بناء سمعة رقمية قوية تجذب الشركاء والعملاء الكبار.
                 </p>
                 <div className="flex flex-col items-end space-y-4">
                    <div className="flex items-center gap-4 text-brand-navy font-bold flex-row-reverse">
                       <CheckCircle className="h-6 w-6 text-brand-green" />
                       <span>استهداف دقيق للخبر والدمام والظهران</span>
                    </div>
                    <div className="flex items-center gap-4 text-brand-navy font-bold flex-row-reverse">
                       <CheckCircle className="h-6 w-6 text-brand-green" />
                       <span>سيو مخصص للشركات الصناعية واللوجستية</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Neighborhood Authority Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-right">
              <div className="mr-0 ml-auto">
                 <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-4 tracking-tighter">أحياء نغطيها في <span className="text-brand-green">الشرقية.</span></h2>
                 <p className="text-slate-500 font-bold max-w-xl">المنطقة الشرقية هي قلب الصناعة. نحن نغطي كافة المحاور الاقتصادية لضمان سيطرتك الكاملة.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'حي الشاطئ', link: '/locations/dammam/ash-shati/', desc: 'بوابة الأعمال والخدمات اللوجستية في الدمام.' },
                { name: 'حي الخبر الشمالية', link: '#', desc: 'مركز المال والأعمال في الخبر.' },
                { name: 'حي الظهران', link: '#', desc: 'استهداف شركات الطاقة والتقنية.' },
                { name: 'الجبيل الصناعية', link: '#', desc: 'حلول تسويقية للمصانع الكبرى.' }
              ].map((district, i) => (
                <Link 
                  href={district.link} 
                  key={i}
                  className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-brand-green transition-all flex flex-col justify-between h-full"
                >
                   <div className="text-right">
                      <h3 className="text-2xl font-black text-brand-navy mb-3 group-hover:text-brand-green transition-colors">{district.name}</h3>
                      <p className="text-xs text-slate-400 font-bold leading-relaxed">{district.desc}</p>
                   </div>
                   <div className="mt-8 flex justify-end">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 group-hover:bg-brand-green group-hover:text-brand-navy transition-all">
                         <ArrowLeft className="h-5 w-5" />
                      </div>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* AEO FAQ Section - Dammam/Eastern Edition */}
      <section className="py-32 bg-slate-50 text-brand-navy overflow-hidden relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-right mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">سيو المنطقة <span className="text-brand-green">الشرقية.</span></h2>
              <p className="text-slate-400 font-bold max-w-2xl mr-0 ml-auto leading-relaxed">كيف تتصدر نتائج البحث في الدمام والخبر والجبيل وفقاً لمعايير 2025؟</p>
           </div>

           <div className="space-y-6 max-w-4xl mr-0 ml-auto text-right">
              {[
                { 
                  q: 'كيف يختلف السيو في الدمام عن سيو الرياض؟', 
                  a: 'سيو الدمام والشرقية يركز بشكل أكبر على الكلمات المفتاحية المتعلقة بالقطاعات الصناعية، اللوجستية، والطاقة. نحن نستهدف متخذي القرار في الشركات الكبرى (B2B) من خلال محتوى تقني عالي الدقة.' 
                },
                { 
                  q: 'هل تستهدفون الشركات في مدينة الجبيل الصناعية؟', 
                  a: 'نعم، نحن نقدم حلول تسويقية متكاملة للمصانع والشركات الخدمية في الجبيل، مع التركيز على بناء سلطة العلامة التجارية (Brand Authority) في الأوساط الصناعية.' 
                },
                { 
                  q: 'ما أهمية البحث باللغتين العربية والإنجليزية في الشرقية؟', 
                  a: 'بسبب الطبيعة العالمية لقطاع الطاقة، نحرص على تحسين موقعك للغتين لضمان وصولك إلى الشركاء المحليين والعالميين المتواجدين في الظهران والخبر.' 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-slate-100 p-10 rounded-[2.5rem] group hover:bg-white/10 transition-all shadow-sm hover:shadow-xl hover:border-brand-green">
                   <h3 className="text-xl font-black text-brand-navy mb-4 flex items-center gap-4 flex-row-reverse">
                      <span className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-black text-[10px]">؟</span>
                      {faq.q}
                   </h3>
                   <p className="text-slate-500 font-bold leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-40 bg-brand-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <h2 className="text-5xl md:text-9xl font-black text-white mb-12 tracking-tighter uppercase leading-[0.85]">قـدت التحول <br /> في <span className="text-brand-green">الشرقية.</span></h2>
           <Link
             href="/contact/"
             className="inline-flex items-center bg-brand-green text-brand-navy px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-green/20 gap-4"
           >
             تحدث مع خبير الشرقية لديكم
             <ArrowLeft className="h-6 w-6" />
           </Link>
        </div>
      </section>
    </div>
  );
}
