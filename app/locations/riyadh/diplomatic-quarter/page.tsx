'use client';

import { motion } from 'framer-motion';
import { Shield, Globe, Target, ArrowLeft, CheckCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function DiplomaticQuarterPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click - حي السفارات الرياض | ون تو فايف كليك",
            "image": "https://images.unsplash.com/photo-1586724230473-455799a61763?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/riyadh/diplomatic-quarter/",
            "telephone": "+966XXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Diplomatic Quarter",
              "addressLocality": "Riyadh",
              "addressRegion": "Riyadh Province",
              "postalCode": "12512",
              "addressCountry": "SA"
            },
            "areaServed": "Diplomatic Quarter, Riyadh",
            "description": "Exclusive digital marketing and SEO services for diplomatic missions, global organizations, and high-end services in Riyadh's Diplomatic Quarter."
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586724230473-455799a61763?auto=format&fit=crop&q=80&w=1200" 
            alt="حي السفارات الرياض - التسويق العالمي"
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
              <Globe className="h-4 w-4" />
              <span>تسويق النخبة والبعثات - حي السفارات</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              حي <br />
              <span className="text-brand-green">السفارات الرقمي.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              نصل بعلامتك التجارية إلى العالمية من قلب الرياض. استراتيجيات سيو دولية ومحتوى متعدد اللغات مصمم خصيصاً لمجتمع حي السفارات.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Excellence Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-right">
            <h2 className="text-4xl font-black text-brand-navy mb-12 tracking-tighter uppercase">معايير عالمية في الرياض.</h2>
            <div className="space-y-16">
                <div className="flex gap-10 flex-row-reverse border-r-4 border-brand-green pr-10">
                    <div className="flex-1">
                        <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tight uppercase">سيو اللغات المتعددة</h3>
                        <p className="text-lg text-slate-500 font-bold leading-relaxed">
                            نضمن ظهور موقعك باللغات العربية والإنجليزية والفرنسية وغيرها لتلبية احتياجات البعثات الدبلوماسية والمنظمات الدولية.
                        </p>
                    </div>
                </div>

                <div className="flex gap-10 flex-row-reverse border-r-4 border-brand-navy pr-10">
                    <div className="flex-1">
                        <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tight uppercase">إدارة الأزمات والسمعة</h3>
                        <p className="text-lg text-slate-500 font-bold leading-relaxed">
                            في بيئة حساسة كحي السفارات، نحمي حضورك الرقمي ونضمن أن تكون الانطباعات الأولى إيجابية وموثوقة دائماً.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-green/5 blur-3xl rounded-full" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-tight">تغلب على <span className="text-brand-green">الحدود</span> الرقمية.</h2>
            <Link
              href="/contact"
              className="inline-flex items-center bg-brand-green text-brand-navy px-16 py-8 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl"
            >
              تحدث مع مستشارنا الدولي
              <ArrowLeft className="ml-4 h-6 w-6" />
            </Link>
        </div>
      </section>
    </div>
  );
}
