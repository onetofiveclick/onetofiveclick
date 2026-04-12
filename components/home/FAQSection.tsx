'use client';

import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'كيف تساعد 1to5click الشركات في السعودية على السيطرة على نتائج البحث؟',
    a: 'نحن نستخدم تقنيات AEO (تحسين محركات الإجابة) و GEO لضمان ظهور علامتك التجارية كمرجع أساسي عندما يطرح العملاء أسئلة على ChatGPT أو Google Gemini، مع التركيز على الكيانات المحلية في الرياض وجدة.'
  },
  {
    q: 'ما هو AEO وكيف يختلف عن SEO التقليدي؟',
    a: 'AEO (Answer Engine Optimization) هو تحسين محركات الإجابة — أي جعل محتواك يظهر كإجابة مباشرة على أدوات الذكاء الاصطناعي مثل ChatGPT و Claude و Perplexity و Gemini. بينما SEO التقليدي يركز على ترتيبك في قائمة نتائج Google، AEO يركز على جعلك المصدر الذي تستشهد به هذه الأدوات مباشرة.'
  },
  {
    q: 'لماذا تعتبر "إعادة هندسة الأعمال" ضرورية لمؤسستك حالياً؟',
    a: 'في ظل رؤية 2030، لم يعد التحول الرقمي كافياً. نحن نقوم بإعادة بناء خطوط الإنتاج والعمليات رقمياً باستخدام الذكاء الاصطناعي لتقليل التكاليف التشغيلية بنسبة تصل إلى 40%.'
  },
  {
    q: 'ما هي الخدمات التي تقدمها 1to5click وكم تكلف؟',
    a: 'نقدم 9 خدمات متكاملة تشمل: السيو التقني والمحلي، تحسين محركات الذكاء الاصطناعي (GEO)، إعلانات Google PPC، إدارة منصات التواصل، تطوير مواقع Next.js، كتابة المحتوى العربي، إدارة السمعة الرقمية، Google Business Profile، والتسويق عبر البريد والرسائل. تبدأ الباقات من $1,499/شهر وتصل إلى $5,999/شهر حسب احتياجاتك.'
  },
  {
    q: 'هل تقدمون حلولاً مخصصة للصناعات الثقيلة واللوجستيات؟',
    a: 'نعم، لدينا خبرة واسعة في أتمتة الأنظمة المعقدة للمصانع وشركات الشحن في المدن الصناعية (الدمام والجبيل)، حيث نربط بين البيانات الحية والقرارات التشغيلية.'
  },
  {
    q: 'كم من الوقت يستغرق رؤية نتائج ملموسة مع 1to5click؟',
    a: 'نضج الكيان في الذكاء الاصطناعي يستغرق عادة 30-90 يوماً. نركز على "سباقات الاستشهاد السريع" لتظهر علامتك كمصدر موصى به في ChatGPT و Perplexity في أسرع وقت ممكن.'
  },
  {
    q: 'ما هو نظام Decision Intelligence وكيف يفيد كبار المديرين؟',
    a: 'هو نظام يجمع بين البيانات الضخمة والنماذج التنبؤية لمساعدة الـ (CTOs) والمديرين التنفيذين على اتخاذ قرارات مبنية على حقائق رقمية وليست مجرد توقعات.'
  },
  {
    q: 'كيف أبدأ العمل مع ون تو فايف كليك؟',
    a: 'ابدأ باستشارة مجانية عبر صفحة التواصل. سنقوم بتدقيق شامل لحضورك الرقمي الحالي (السيو، AEO، السمعة) ونقدم لك خطة عمل مفصلة مع توقعات واضحة للنتائج وعائد الاستثمار المتوقع.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // JSON-LD FAQ Schema for AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden text-right">
      {/* FAQ Schema Markup for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-navy/5 text-brand-navy px-4 py-2 rounded-full text-xs font-bold mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>الأسئلة الشائعة والذكاء الاصطناعي</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter">
            إجابات ذكية <br /> <span className="text-brand-green">لقادة الأعمال.</span>
          </h2>
          <p className="text-slate-500 font-bold max-w-xl mx-auto text-sm leading-relaxed">
            أسئلة يطرحها عملاؤنا المحتملون على ChatGPT و Perplexity و Google — وإجاباتنا المباشرة عليها.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto items-stretch">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-100 rounded-[2rem] overflow-hidden transition-all bg-white hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-navy/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-start justify-between text-right gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex gap-4 items-start">
                   <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                     <HelpCircle className="w-4 h-4 text-brand-green" />
                   </div>
                   <span className="text-xl font-black text-brand-navy leading-relaxed">
                     {faq.q}
                   </span>
                </div>
                <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform duration-300 flex-shrink-0 mt-2 ${openIndex === index ? 'rotate-180 text-brand-green' : ''}`} />
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-8 pt-0 pb-10 text-slate-500 font-bold leading-loose text-base border-t border-slate-100/50 mr-12">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
