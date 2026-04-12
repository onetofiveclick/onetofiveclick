'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Target, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AlRawdahJeddahPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click - حي الروضة جدة | ون تو فايف كليك",
            "image": "https://images.unsplash.com/photo-1578330132822-04fb775a2d1d?auto=format&fit=crop&q=80&w=1200",
            "url": "https://onetofiveclick.com/locations/jeddah/al-rawdah/",
            "telephone": "+966XXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al Rawdah District",
              "addressLocality": "Jeddah",
              "addressRegion": "Makkah Province",
              "postalCode": "23431",
              "addressCountry": "SA"
            },
            "areaServed": "Al Rawdah, Jeddah",
            "description": "Expert SEO and digital growth strategies for businesses in Al Rawdah, Jeddah. The hub of businesses and creativity."
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578330132822-04fb775a2d1d?auto=format&fit=crop&q=80&w=1200" 
            alt="حي الروضة جدة - وجهة المبدعين والأعمال"
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
              <Briefcase className="h-4 w-4" />
              <span>مركز الأعمال المبدعة في الروضة</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              حي <br />
              <span className="text-brand-green">الروضة الرقمي.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              ندعم الشركات الناشئة والمكاتب الإبداعية في حي الروضة بجدة للسيطرة على بصمتها الرقمية وتحقيق نمو مستدام.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-right">
            <h2 className="text-4xl font-black text-brand-navy mb-12 tracking-tighter uppercase transition-all">حلول مصممة لحي الروضة.</h2>
            <p className="text-xl text-slate-500 mb-16 font-bold leading-relaxed">
                حي الروضة هو قلب الإبداع في جدة. استراتيجياتنا تركز على التميز البصري، السيو التقني، وبناء العلامات التجارية التي تتحدث لغة الغد.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                {[
                  'سيو للمكاتب الاستشارية والإبداعية',
                  'إعلانات منصات التواصل (Snapchat & TikTok)',
                  'تحويل المواقع إلى أدوات بيع فعالة',
                  'إدارة الهوية الرقمية للشركات'
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-brand-navy font-black text-sm flex-row-reverse border-b border-slate-100 pb-6">
                        <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-tight uppercase">هل مشروعك في <span className="text-brand-green">الروضة</span> جاهز للانطلاق؟</h2>
            <Link
              href="/contact"
              className="bg-brand-navy text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-brand-green hover:text-brand-navy transition-all shadow-xl"
            >
              اطلب تدقيقاً لموقعك الآن
            </Link>
        </div>
      </section>
    </div>
  );
}
