'use client';

import { motion } from 'framer-motion';
import { ChevronRight, FileText, BarChart3, Clock } from 'lucide-react';

const cases = [
  {
    title: 'أتمتة العمليات لشركة لوجستية كبرى',
    industry: 'النقل واللوجستيات',
    result: 'تقليص وقت المعالجة بنسبة 40%',
    desc: 'قمنا بإعادة هندسة نظام تتبع الشحنات باستخدام الذكاء الاصطناعي، مما أدى إلى تحسين كفاءة التوزيع في المنطقة الوسطى.'
  },
  {
    title: 'تحليل البيانات لقطاع التجزئة السعودي',
    industry: 'التجارة الإلكترونية',
    result: 'زيادة المبيعات بنسبة 25%',
    desc: 'تطبيق نظام "Decision Intelligence" لتحليل سلوك المستهلك المحلي وتخصيص العروض الترويجية بشكل آلي.'
  },
  {
    title: 'التحول الرقمي لجهة تمويلية (FinTech)',
    industry: 'الخدمات المالية',
    result: 'أتمتة كاملة لطلبات القروض',
    desc: 'بناء منصة متكاملة تربط بين أنظمة التحقق من المخاطر والبنك المركزي لتقديم قرارات فورية.'
  }
];

export default function CaseStudies() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter leading-tight">
              نتائج حقيقية من <br /> <span className="text-brand-green">أرض الواقع.</span>
            </h2>
            <p className="text-lg text-slate-600 font-bold leading-relaxed">
              شاهد كيف ساعدنا الشركات الكبرى في المملكة على إعادة هندسة عملياتها وتحقيق نمو رقمي مستدام.
            </p>
          </div>
          <button className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-black hover:bg-brand-navy/90 transition-all flex items-center gap-3 group">
            <ChevronRight className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>عرض كافة الدراسات</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => {
             const isFeatured = index === 0;
             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-[2.5rem] border border-slate-200 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all group overflow-hidden ${isFeatured ? 'md:col-span-3 grid md:grid-cols-2 gap-0' : ''}`}
              >
                {/* Visual Area */}
                <div className={`bg-slate-50 relative overflow-hidden flex items-end justify-center px-8 md:px-12 pt-12 ${isFeatured ? 'border-l border-slate-100 min-h-[350px] md:min-h-[450px]' : 'h-48 border-b border-slate-100'}`}>
                  {/* Instead of pure abstract CSS, use an image to simulate real results / graphs */}
                  <div className="absolute inset-x-0 bottom-0 top-[20%] md:top-[30%] bg-gradient-to-t from-slate-900/5 to-transparent z-10 pointer-events-none" />
                  
                  {isFeatured ? (
                    <div className="relative w-full max-w-xl h-[250px] md:h-[350px] bg-[#0f172a] rounded-t-3xl border-t-4 border-x-4 border-slate-700/50 shadow-2xl overflow-hidden flex flex-col p-6 z-20 translate-y-4">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex gap-4">
                          <div className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-xs font-bold font-mono">BEFORE: 2K/mo</div>
                          <div className="px-4 py-2 bg-brand-green/20 text-brand-green rounded-full text-xs font-bold font-mono">AFTER: 45K/mo</div>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-slate-600"></div><div className="w-2 h-2 rounded-full bg-slate-600"></div><div className="w-2 h-2 rounded-full bg-slate-600"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1 w-full bg-slate-800/50 rounded-xl border border-slate-700/50 relative overflow-hidden flex items-end">
                        <svg className="absolute bottom-0 w-full h-[80%] text-brand-green opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
                           <path d="M0 100 L 0 50 Q 25 60 50 20 T 100 10 L 100 100 Z" fill="currentColor" fillOpacity="0.2" />
                           <path d="M0 50 Q 25 60 50 20 T 100 10" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                        
                        <div className="absolute bottom-1/2 left-1/2 w-[2px] h-1/2 bg-white/20 border-l border-dashed border-white/50" />
                        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-brand-navy rounded text-xs font-black shadow-lg">Inflection Point</div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full opacity-30 flex items-center justify-center p-8 pt-20 z-0 relative">
                      <svg className="w-full h-full text-brand-green" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <polyline points="0,40 20,35 40,45 60,20 80,25 100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className={`p-8 ${isFeatured ? 'flex flex-col justify-center' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-black">
                      {item.industry}
                    </span>
                  </div>
                  <h3 className={`${isFeatured ? 'text-3xl' : 'text-2xl'} font-black text-brand-navy mb-4 leading-tight tracking-tight`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-bold mb-8 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-brand-green font-black text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{item.result}</span>
                    </div>
                    <FileText className="h-5 w-5 text-slate-300 group-hover:text-brand-navy transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
