'use client';

import { motion } from 'framer-motion';
import { Waves, MapPin, Target, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CornichePage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click - كورنيش جدة | ون تو فايف كليك",
            "image": "https://images.unsplash.com/photo-1578330132822-04fb775a2d1d?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/jeddah/corniche/",
            "telephone": "+966XXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jeddah Corniche District",
              "addressLocality": "Jeddah",
              "addressRegion": "Makkah Province",
              "postalCode": "23414",
              "addressCountry": "SA"
            },
            "areaServed": "Corniche, Jeddah",
            "description": "Strategic marketing and SEO for tourism, entertainment, and hospitality businesses in Jeddah Corniche."
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578330132822-04fb775a2d1d?auto=format&fit=crop&q=80&w=1200" 
            alt="كورنيش جدة - قلب السياحة والترفيه"
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
              <Waves className="h-4 w-4" />
              <span>تسويق قطاع الترفيه والسياحة - الكورنيش</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              كورنيش <br />
              <span className="text-brand-green">جدة الرقمي.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              حوّل زوار الكورنيش إلى عملاء دائمين. حلول تسويقية متكاملة للمطاعم، المقاهي، والوجهات السياحية في الواجهة البحرية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-right">
            <h2 className="text-4xl font-black text-brand-navy mb-12 tracking-tighter">هيمن على الواجهة البحرية.</h2>
            <div className="space-y-12">
                <div className="flex gap-8 flex-row-reverse">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Target className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-brand-navy mb-3 uppercase">استهداف زوار الوجهة</h3>
                        <p className="text-slate-500 font-bold leading-relaxed text-lg">
                            نصل إلى السياح والمقيمين في لحظة بحثهم عن تجربة مميزة في كورنيش جدة، مما يرفع من عدد زيارات موقعك الفعلي.
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 flex-row-reverse">
                    <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-brand-navy mb-3 uppercase">تحسين خرائط جوجل (GMB)</h3>
                        <p className="text-slate-500 font-bold leading-relaxed text-lg">
                            نضمن ظهور نشاطك التجاري في الثلاثة الأوائل (Local Pack) عند البحث عن أهم الوجهات في الكورنيش.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-green text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-10 tracking-tighter uppercase leading-tight">اجعل براندك <span className="text-white">منارة</span> في الكورنيش.</h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-brand-navy text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl"
          >
            ابدأ حملتك الآن
            <ArrowLeft className="ml-4 h-6 w-6 text-brand-green" />
          </Link>
        </div>
      </section>
    </div>
  );
}
