'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, MousePointerClick, Star, Target, Cpu, Users, ArrowLeft, BarChart3, MapPin } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'توسّع محلياً',
    description: 'سيطر على حصة مدينتك التسويقية.',
  },
  {
    icon: BarChart3,
    title: 'تضاعف النمو',
    description: 'زيادة مستدامة في الزيارات.',
  },
  {
    icon: MapPin,
    title: 'تحوّل للواقع',
    description: 'ترجمة البحث إلى زيارات فعلية.',
  },
  {
    icon: Star,
    title: 'إدارة السمعة',
    description: 'راقب المراجعات وقم بالرد عليها عبر جميع المنصات.',
  },
  {
    icon: Cpu,
    title: 'رؤى الذكاء الاصطناعي',
    description: 'توصيات ذكية لتصدر النتائج.',
  },
  {
    icon: Users,
    title: 'استعادة العملاء',
    description: 'حول الفرص الضائعة إلى عملاء دائمين.',
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden text-right">
      <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-brand-green/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-black text-brand-navy bg-white px-5 py-2 rounded-full border border-slate-200 shadow-sm mb-6">كيف يمكننا مساعدتك</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy mb-8 tracking-tighter leading-[1.2]">
            هندسة <span className="text-brand-green">النمو</span> في السعودية.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-bold leading-relaxed">
            أدوات قابلة للتوسع لكل بصمة تجارية في المملكة. من المتاجر الفردية في الرياض إلى آلاف المواقع للشركات الكبرى في جدة والدمام.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-brand-green/30 transition-all shadow-sm hover:shadow-2xl hover:shadow-brand-green/10 text-right group flex flex-col items-center cursor-pointer"
              >
                <div className="w-24 h-24 mb-6 relative">
                  <div className="absolute inset-0 bg-brand-green/10 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 scale-105" />
                  <div className="absolute inset-0 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
                    <service.icon className="h-10 w-10 text-brand-green" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-brand-green transition-colors leading-relaxed tracking-tighter text-center">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-base font-bold leading-relaxed text-center">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
