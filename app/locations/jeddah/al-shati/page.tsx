'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, TrendingUp, Users, ArrowLeft, CheckCircle, Waves, Star } from 'lucide-react';
import Link from 'next/link';

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
            "telephone": "+966XXXXXXXXX",
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mr-0 ml-auto"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-right">
            <h2 className="text-4xl font-black text-brand-navy mb-8 tracking-tighter uppercase">لماذا اختيارنا في حي الشاطئ؟</h2>
            <div className="grid gap-8">
              {[
                {
                  title: 'تحليل سلوك الفخامة',
                  desc: 'نفهم كيف يبحث سكان حي الشاطئ عن الخدمات الراقية ونقوم بتحسين موقعك لتكون الخيار الأول لهم.'
                },
                {
                  title: 'سيو الصور والفيديو',
                  desc: 'في منطقة بصرية مثل الشاطئ، نحسن أصولك المرئية لتتصدر نتائج البحث في جوجل وتيك توك.'
                },
                {
                  title: 'بناء السلطة المحلية',
                  desc: 'نجعل براندك مرتبطاً بالتميز والجودة التي يشتهر بها الحي.'
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
