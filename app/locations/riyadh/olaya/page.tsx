'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, TrendingUp, ArrowLeft, CheckCircle, Star, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function OlayaDistrictPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click Olaya Riyadh | ون تو فايف كليك العليا",
            "image": "https://onetofiveclick.comhttps://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/riyadh/olaya",
            "telephone": "+966 57 580 6733",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Olaya View Tower",
              "addressLocality": "Olaya",
              "addressRegion": "Riyadh",
              "postalCode": "12211",
              "addressCountry": "SA"
            },
            "areaServed": "Olaya District, Riyadh",
            "description": "Premium Digital Marketing and Local SEO services specifically for businesses in the Olaya Financial District, Riyadh."
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-l from-brand-navy to-transparent z-10" />
           <img width="1200" height="800" 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="حي العليا الرياض - مركز المال والأعمال"
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
              <Building2 className="h-4 w-4" />
              <span>خدماتنا في حي العليا، الرياض</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              العليا <br />
              <span className="text-brand-green">مركز الأعمال.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              نحن نقدم حلول التسويق الرقمي والسيو (SEO) المخصصة للشركات والمؤسسات في حي العليا، قلب الرياض النابض بالمال والأعمال.
            </p>
            <div className="flex flex-wrap gap-6 flex-row-reverse">
              <Link
                href="/contact"
                className="bg-brand-green text-brand-navy px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
              >
                استشارة لشركات العليا
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
                     { title: 'أتمتة الأعمال في مركز المال', desc: 'نقوم بتحويل العمليات اليدوية في شركات العليا إلى أنظمة مؤتمتة ذكية تزيد من كفاءة الإنتاج.', link: '/services/seo/' },
                     { title: 'سيو المؤسسات والشركات الكبرى', desc: 'استراتيجيات SEO متقدمة مصممة خصيصاً للمؤسسات التي تتخذ من أبراج العليا مقراً لها.', link: '/services/seo/' },
                     { title: 'تحسين محركات الإجابة (AEO)', desc: 'ظهور شركتك كإجابة نموذجية في محركات الذكاء الاصطناعي للباحثين عن خدمات الأعمال في قلب العاصمة.', link: '/services/seo/' }
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
                   لماذا تختار <span className="text-brand-green">1-5 كليك</span> <br /> لخدماتك في العليا؟
                </h2>
                <p className="text-slate-500 mb-8 font-bold leading-relaxed">
                   حي العليا ليس مجرد منطقة، بل هو رمز للقوة الاقتصادية في المملكة. الشركات هنا تحتاج إلى استراتيجيات تسويقية بمستوى عالمي وهو ما نقدمه في ون تو فايف كليك.
                </p>
                <div className="p-8 bg-brand-navy rounded-[3rem] text-white overflow-hidden relative">
                   <div className="absolute top-0 left-0 w-full h-full bg-brand-green opacity-5 pointer-events-none" />
                   <div className="relative z-10">
                      <div className="text-4xl font-black mb-2 tracking-tighter text-brand-green">+100%</div>
                      <div className="text-xs font-black uppercase tracking-widest opacity-60">زيادة في الزهور المحلي لعملائنا</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-none uppercase">هل مشروعك في <span className="text-brand-green">العليا؟</span></h2>
           <Link
             href="/contact"
             className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-brand-green/20 gap-4"
           >
             تحدث مع خبيرنا في العليا
             <ArrowLeft className="h-5 w-5" />
           </Link>
           <div className="mt-12">
              <Link href="/locations/riyadh" className="text-brand-navy/40 hover:text-brand-green text-[10px] font-black uppercase tracking-[0.2em] transition-colors">
                 العودة إلى خدمات الرياض الأساسية
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
