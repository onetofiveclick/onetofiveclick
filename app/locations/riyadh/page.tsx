'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, TrendingUp, Users, ArrowLeft, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import DigitalMaturityQuiz from '@/components/sections/DigitalMaturityQuiz';

export default function RiyadhLocationPage() {
  return (
    <div className="bg-white min-h-screen text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "1-5 Click Riyadh | ون تو فايف كليك الرياض",
            "image": "https://onetofiveclick.com/riyadh_digital_marketing_authority_1775799453369.png",
            "url": "https://onetofiveclick.com/locations/riyadh",
            "telephone": "+966XXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Olaya View",
              "addressLocality": "Riyadh",
              "addressRegion": "Riyadh Province",
              "postalCode": "11111",
              "addressCountry": "SA"
            },
            "areaServed": "Riyadh",
            "description": "Premium digital marketing, SEO, and AEO services in the heart of Riyadh, Saudi Arabia."
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/riyadh_digital_marketing_authority_1775799453369.png" 
            alt="الرياض - عاصمة التسويق الرقمي"
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
              <MapPin className="h-4 w-4" />
              <span>خدمات التسويق الرقمي في الرياض</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              سيطر على <br />
              <span className="text-brand-green">سوق الرياض.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-bold">
              نحن نساعد الشركات في العاصمة السعودية على السيطرة على نتائج البحث المحلي (سيو)، وتوسيع نطاق المبيعات عبر الإعلانات الممولة الأكثر ذكاءً.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="bg-brand-green text-brand-navy px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-brand-green/20"
              >
                احجز استشارة مجانية في الرياض
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Riyadh Businesses Trust Us */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-10 bg-brand-green/10 rounded-full blur-[100px] opacity-50" />
                <div className="relative bg-slate-50 p-12 rounded-[4rem] border border-slate-200">
                   <div className="space-y-12">
                      {[
                        { title: 'فهم عميق للسوق السعودي', desc: 'نحن لا نقوم فقط بالترجمة، بل نصيغ رسائل تلامس ثقافة العميل في الرياض.' },
                        { title: 'تحسين محركات البحث المحلية للسعودية', desc: 'السيطرة على خرائط جوجل لجميع فروعك في الرياض وجسر الملك فهد.' },
                        { title: 'بناء روابط (Backlinks) محلية', desc: 'الحصول على إشارات من أهم الصحف والمواقع السعودية الموثوقة.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 flex-row-reverse">
                           <div className="w-12 h-12 bg-brand-green text-brand-navy rounded-2xl flex items-center justify-center shrink-0">
                              <CheckCircle className="h-6 w-6" />
                           </div>
                           <div className="text-right">
                              <h3 className="text-2xl font-black text-brand-navy mb-2 tracking-tighter">{item.title}</h3>
                              <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             <div className="text-right order-1 lg:order-2">
                <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 uppercase tracking-tighter leading-tight">
                    الرياض <br />
                    <span className="text-brand-green">تنمو بسرعة.</span>
                </h2>
                <p className="text-xl text-slate-500 mb-10 font-bold leading-relaxed">
                    مع رؤية السعودية 2030، أصبحت المنافسة في الرياض شرسة. إذا لم تكن في الصفحة الأولى لجوجل، فأنت غير موجود لآلاف العملاء الذين يبحثون عن خدماتك يومياً.
                </p>
                <div className="flex items-center gap-6 bg-brand-mint/50 p-6 rounded-3xl border border-brand-green/10 w-max mr-0 ml-auto flex-row-reverse">
                   <Star className="h-8 w-8 text-brand-green" />
                   <div className="text-right">
                      <div className="text-xl font-black text-brand-navy uppercase tracking-tighter">+50 شركة سعودية</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">موثوق بنا في العاصمة</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Local Services Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20">
              <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-6 tracking-tighter uppercase leading-[0.85]">خدماتنا في <span className="text-brand-green">الرياض.</span></h2>
              <p className="text-[10px] text-brand-green font-black uppercase tracking-[0.3em] mb-12">حلول تسويقية متكاملة للسوق السعودي</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: 'سيو السمارة (SEO)', desc: 'تصدر نتائج البحث في الرياض للكلمات المفتاحية عالية القيمة.', icon: Target },
                { title: 'إدارة السمعة', desc: 'راقب المراجعات وحسن ظهور علامتك التجارية في خرائط الرياض.', icon: Star },
                { title: 'إعلانات الدفع للنقرة', desc: 'حملات ممولة ذكية تستهدف الجمهور المناسب في الرياض وجدة.', icon: TrendingUp }
              ].map((service, i) => (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:border-brand-green transition-all group text-right">
                   <service.icon className="h-12 w-12 text-brand-green mb-8 group-hover:scale-110 transition-transform" />
                   <h3 className="text-2xl font-black text-brand-navy mb-6 uppercase tracking-tighter leading-tight">{service.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed font-bold">{service.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Digital Maturity Assessment Tool */}
      <section className="bg-slate-50 border-y border-slate-100">
         <DigitalMaturityQuiz />
      </section>

      {/* Neighborhood Authority Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="text-right">
                 <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-4 tracking-tighter">أحياء نغطيها في <span className="text-brand-green">الرياض.</span></h2>
                 <p className="text-slate-500 font-bold max-w-xl mr-0 ml-auto">نحن نؤمن بالتسويق المحلي الدقيق. لذلك، قمنا بتخصيص استراتيجيات لكل منطقة رئيسية في العاصمة.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'حي العليا', link: '/locations/riyadh/olaya/', desc: 'مركز المال والأعمال الأساسي في الرياض.' },
                { name: 'حي الملز', link: '/locations/riyadh/al-malaz/', desc: 'قلب الرياض التجاري والتاريخي.' },
                { name: 'حي النخيل', link: '/locations/riyadh/al-nakhil/', desc: 'المنطقة السكنية الفاخرة للشركات الناشئة.' },
                { name: 'المنطقة الدبلوماسية', link: '/locations/riyadh/diplomatic-quarter/', desc: 'حلول تسويقية للمؤسسات العالمية.' }
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

      {/* AEO FAQ Section */}
      <section className="py-32 bg-brand-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-right mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">أسئلة شائعة حول <span className="text-brand-green">سيو الرياض.</span></h2>
              <p className="text-slate-400 font-bold max-w-2xl mr-0 ml-auto leading-relaxed">إليك كل ما تحتاج معرفته حول تصدر نتائج البحث والنمو الرقمي في العاصمة السعودية وفقاً لمعايير 2025.</p>
           </div>

           <div className="space-y-6 max-w-4xl mr-0 ml-auto">
              {[
                { 
                  q: 'كيف يمكن لشركتي في الرياض الظهور في الصفحة الأولى من جوجل؟', 
                  a: 'نحن نستخدم استراتيجية "السلطة الموضعية" (Topical Authority) التي تركز على بناء محتوى تقني عميق يستهدف أحياء الرياض مثل العليا والنخيل، مما يجعل جوجل يصنف موقعك كمرجع أساسي في منطقتك.' 
                },
                { 
                  q: 'لماذا أحتاج إلى وكالة تسويق محلية في الرياض بدلاً من وكالة عالمية؟', 
                  a: 'السوق السعودي له طبيعة ثقافية واقتصادية فريدة. نحن نفهم لهجة الرياض، وتفضيلات المستهلك المحلي، وتوقيتات الشراء المرتبطة بالمواسم السعودية، مما يضمن عائد استثمار أعلى.' 
                },
                { 
                  q: 'ما هو الـ AEO وكيف يفيد براندي في السعودية؟', 
                  a: 'تحسين محركات الإجابة (AEO) هو تقنية تجعل الـ AI (مثل ChatGPT وGemini) يرشح خدماتك عندما يسأله العميل اقتراحات. نحن نجهز موقعك ليكون هو "الإجابة النموذجية" لتلك المحركات.' 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-right group hover:bg-white/10 transition-all">
                   <h3 className="text-xl font-black text-brand-green mb-4 flex items-center gap-4 flex-row-reverse">
                      <span className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-[10px] text-brand-green">؟</span>
                      {faq.q}
                   </h3>
                   <p className="text-slate-400 font-bold leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-brand-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <h2 className="text-5xl md:text-9xl font-black text-white mb-12 tracking-tighter uppercase leading-[0.85]">ابدأ نموك <br /> في <span className="text-brand-green">الرياض</span> اليوم.</h2>
           <Link
             href="/contact"
             className="inline-flex items-center bg-brand-green text-brand-navy px-16 py-8 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] shadow-3xl shadow-brand-green/20 gap-4"
           >
             تواصل مع خبيرنا في الرياض
             <ArrowLeft className="h-6 w-6" />
           </Link>
        </div>
      </section>
    </div>
  );
}
