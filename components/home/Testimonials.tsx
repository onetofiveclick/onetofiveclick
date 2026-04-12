'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'ديفيد ميلر',
    position: 'مدير تسويق، شركة HVAC المحلية',
    image: '/happy_small_business_owners_miling_1775757153671.png',
    content: 'لقد كانت ون تو فايف كليك نقطة تحول حقيقية لتواجدنا في نتائج البحث المحلي. انتقلنا من الاختفاء التام إلى المركز الأول لأهم كلماتنا الرئيسية في أقل من 90 يوماً.',
    rating: 5,
  },
  {
    name: 'سارة تشن',
    position: 'مديرة نمو، Dentally',
    image: '/happy_marketing_professional_smiling_1775757379273.png',
    content: 'مستوى الرؤى والأتمتة الذي يقدمونه يسبق الوكالات الأخرى بسنوات ضوئية. تضاعف حجم المراجعات لدينا ثلاث مرات وانخفضت تكلفة العميل المحتمل بنسبة 45٪.',
    rating: 5,
  },
  {
    name: 'ماركوس ثورن',
    position: 'مؤسس، شركة إليت للخدمات القانونية',
    image: '/seo_dashboard_mockup_clean_1775757287871.png',
    content: 'معظم الوكالات تعدك بالكثير وتقدم تقارير لا يمكنك فهمها. ون تو فايف كليك تقدم نمواً حقيقياً في الإيرادات وشفافية تامة في كل خطوة.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-slate-50 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-[#FFC107] fill-[#FFC107]" />
            ))}
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-6 tracking-tighter">
            موثوق من قبل أفضل <span className="text-brand-green">المسوقين في العالم.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto">
            انضم إلى آلاف الشركات التي تحقق الفوز بالفعل باستخدام منصتنا للسيو المحلي.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-brand-green/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-24 h-24 bg-brand-mint/30 rounded-full -ml-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
              
              <Quote className="h-10 w-10 text-brand-green mb-8 opacity-20 group-hover:opacity-100 transition-opacity relative z-10" />

              <p className="text-brand-navy mb-12 leading-relaxed font-bold text-lg tracking-tight relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden ring-4 ring-slate-50 group-hover:ring-brand-green/10 transition-all shadow-md">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                  <div className="font-black text-brand-navy text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-400 font-black uppercase tracking-widest mt-0.5">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
