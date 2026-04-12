'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'STC', label: 'إس تي سي' },
  { name: 'Aramco', label: 'أرامكو' },
  { name: 'Neom', label: 'نيوم' },
  { name: 'Al Rajhi', label: 'الراجحي' },
  { name: 'Saudia', label: 'السعودية' },
  { name: 'PIF', label: 'صندوق الاستثمارات' },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">
          موثوق من قبل أكبر الكيانات في المملكة
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-200 rounded-lg flex items-center justify-center font-black text-slate-400 text-[10px] md:text-sm">
                {logo.name[0]}
              </div>
              <span className="font-black text-slate-400 text-[10px] md:text-xs tracking-tighter">{logo.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
