'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Building2, MapPin, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function AlRawdahDistrictPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click Al-Rawdah Riyadh | ون تو فايف كليك الروضة",
            "image": "https://onetofiveclick.com/logo.svg",
            "url": "https://onetofiveclick.com/locations/riyadh/al-rawdah",
            "telephone": "+966 57 580 6733",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al-Rawdah District",
              "addressLocality": "Al-Rawdah",
              "addressRegion": "Riyadh",
              "postalCode": "12813",
              "addressCountry": "SA"
            },
            "areaServed": "Al-Rawdah District, Riyadh",
            "description": "خدمات التسويق الرقمي والسيو المحلي المتخصصة للشركات في حي الروضة بالرياض — من ون تو فايف كليك."
          })
        }}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-brand-navy via-brand-navy/80 to-transparent z-10" />
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mr-0 ml-auto"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-green/30">
              <MapPin className="h-4 w-4" />
              <span>خدماتنا في حي الروضة، الرياض</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              الروضة <br />
              <span className="text-brand-green">حي الرقي.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-bold">
              حي الروضة من أعرق أحياء الرياض السكنية والتجارية. نقدم حلول التسويق الرقمي والسيو المحلي المصممة خصيصاً لشركات ومنشآت هذا الحي المتميز.
            </p>
            <div className="flex flex-wrap gap-6 flex-row-reverse">
              <Link
                href="/contact/"
                className="bg-brand-green text-brand-navy px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
              >
                استشارة لشركات الروضة
              </Link>
              <Link
                href="/locations/riyadh/"
                className="border border-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
              >
                جميع خدمات الرياض
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '+85%', label: 'زيادة في البحث المحلي' },
              { value: '3x', label: 'تضاعف العملاء المحتملين' },
              { value: '30 يوم', label: 'لرؤية النتائج الأولى' },
              { value: '100%', label: 'محتوى عربي متخصص' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-brand-green tracking-tighter mb-1">{stat.value}</div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              {[
                {
                  title: 'السيو المحلي لحي الروضة',
                  desc: 'نضمن ظهور نشاطك التجاري في النتائج الأولى عند بحث سكان وزوار حي الروضة عن خدماتك على جوجل.',
                  link: '/services/seo/local-seo/',
                },
                {
                  title: 'تحسين Google Business Profile',
                  desc: 'إعداد وتحسين ملف جوجل للأعمال (GBP) لزيادة ظهورك في خرائط جوجل داخل نطاق الروضة والأحياء المجاورة.',
                  link: '/services/gbp/',
                },
                {
                  title: 'تحسين محركات الإجابة (AEO)',
                  desc: 'نضع شركتك كإجابة مباشرة في ChatGPT و Perplexity عندما يبحث العملاء عن خدمات أعمال في حي الروضة.',
                  link: '/services/seo/aeo-geo/',
                },
                {
                  title: 'إدارة الاستشهادات المحلية',
                  desc: 'بناء وتوحيد بيانات NAP (الاسم، العنوان، الهاتف) عبر جميع الدلائل المحلية السعودية لتعزيز ثقة محركات البحث.',
                  link: '/services/citations/',
                },
              ].map((item, i) => (
                <Link href={item.link} key={i} className="flex gap-6 flex-row-reverse group cursor-pointer text-right">
                  <div className="w-10 h-10 bg-slate-50 text-brand-green rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-green group-hover:text-brand-navy transition-colors mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brand-navy mb-2 tracking-tight group-hover:text-brand-green transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-right order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 leading-[1.1] tracking-tighter">
                لماذا تختار <span className="text-brand-green">1-5 كليك</span> <br /> لأعمالك في الروضة؟
              </h2>
              <p className="text-slate-500 mb-10 font-bold leading-relaxed text-lg">
                حي الروضة يضم مزيجاً فريداً من المجمعات التجارية والعيادات والمكاتب الاستشارية والمطاعم الراقية. نحن نفهم هذا السوق ونبني استراتيجيات دقيقة لكل نوع نشاط.
              </p>

              <div className="space-y-4">
                <div className="p-8 bg-brand-navy rounded-[3rem] text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-brand-green opacity-5 pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between flex-row-reverse">
                    <div>
                      <div className="text-5xl font-black mb-1 tracking-tighter text-brand-green">+120%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60">زيادة الزيارات المحلية لعملائنا في الرياض</div>
                    </div>
                    <TrendingUp className="h-12 w-12 text-brand-green/20" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                    <Building2 className="h-8 w-8 text-brand-green mx-auto mb-3" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-navy">تجاري وسكني</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                    <Users className="h-8 w-8 text-brand-green mx-auto mb-3" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-navy">جمهور B2B & B2C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby districts */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-brand-navy mb-10 tracking-tighter text-center">أحياء الرياض الأخرى التي نخدمها</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'العليا', href: '/locations/riyadh/olaya/' },
              { name: 'الملز', href: '/locations/riyadh/al-malaz/' },
              { name: 'الرياض (الكل)', href: '/locations/riyadh/' },
              { name: 'جدة', href: '/locations/jeddah/' },
            ].map((loc, i) => (
              <Link key={i} href={loc.href} className="p-6 bg-white border border-slate-100 rounded-[2rem] text-center hover:border-brand-green hover:shadow-xl transition-all group">
                <MapPin className="h-6 w-6 text-brand-green mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-black text-brand-navy group-hover:text-brand-green transition-colors">{loc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-none uppercase">
            هل مشروعك في <span className="text-brand-green">الروضة؟</span>
          </h2>
          <p className="text-slate-500 font-bold mb-12 max-w-xl mx-auto leading-relaxed">
            احصل على تدقيق مجاني لحضورك الرقمي في نطاق حي الروضة ومعرفة الفرص التي تفقدها يومياً.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-brand-green/20 gap-4"
          >
            تحدث مع خبيرنا في الروضة
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
