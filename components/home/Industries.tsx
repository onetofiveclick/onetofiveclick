'use client';

import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Truck, Factory, ShieldCheck, Globe } from 'lucide-react';

const industries = [
  {
    name: 'الخدمات المالية (FinTech)',
    icon: ShieldCheck,
    desc: 'حلول تسويقية ذكية للبنوك وشركات التقنية المالية السعودية.',
    featured: true,
  },
  {
    name: 'العقارات والمقاولات',
    icon: Building2,
    desc: 'السيطرة على محركات البحث للمشاريع العقارية الكبرى.',
    featured: true,
  },
  {
    name: 'التجارة الإلكترونية',
    icon: ShoppingCart,
    desc: 'رفع مبيعاتك عبر استهداف دقيق للمستهلك السعودي.',
    featured: false,
  },
  {
    name: 'النقل واللوجستيات',
    icon: Truck,
    desc: 'تحسين الحضور الرقمي لشركات الشحن التي تربط مدن المملكة.',
    featured: false,
  }
];

export default function Industries() {
  return (
    <section className="py-32 bg-white relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter uppercase leading-[0.85]">
            خبرات ممتدة عبر <br /> <span className="text-brand-green">كافة القطاعات.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-bold leading-relaxed">
            نحن لا نقتصر على مجال واحد؛ حلولنا الرقمية مصممة لتناسب احتياجات كل صناعة في السوق السعودي، من الشركات الناشئة إلى الكيانات الكبرى.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-[3rem] transition-all group shadow-sm flex flex-col p-8 md:p-10 ${
                industry.featured 
                ? 'bg-brand-navy border-none hover:shadow-2xl hover:shadow-brand-navy/20 md:col-span-2 justify-center py-12 md:py-16 relative' 
                : 'bg-slate-50 border border-slate-100 hover:border-brand-green hover:shadow-xl hover:shadow-brand-green/5'
              }`}
            >
              {industry.featured && (
                <div className="absolute top-0 right-0 p-8 w-full h-full opacity-[0.03] pointer-events-none flex justify-end items-start overflow-hidden">
                   <industry.icon className="w-96 h-96 -mt-20 -mr-20 text-white" />
                </div>
              )}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform relative z-10 ${industry.featured ? 'bg-brand-green text-brand-navy' : 'bg-white border text-brand-green border-slate-100'}`}>
                <industry.icon className="h-10 w-10" />
              </div>
              <h3 className={`text-3xl font-black mb-6 tracking-tighter uppercase leading-tight relative z-10 ${industry.featured ? 'text-white' : 'text-brand-navy'}`}>
                {industry.name}
              </h3>
              <p className={`font-bold leading-relaxed text-lg relative z-10 ${industry.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
