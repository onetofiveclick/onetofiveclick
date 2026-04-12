'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    Zap, 
    ArrowLeft, 
    CheckCircle, 
    MapPin, 
    Users, 
    MessageSquare, 
    Target, 
    ShieldCheck, 
    Clock, 
    Globe, 
    Star 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-right">
      {/* Hero Section - Dark / BrightLocal Style */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-navy overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-green/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-green/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
            >
                <div className="bg-white/10 backdrop-blur-md text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/10">
                    وموثوق منذ عام 2018
                </div>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]"
            >
                تمكين <br />
                <span className="text-brand-green">العلامات المحلية.</span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
            >
                بناء أنظمة بحث محلي عالية السلطة وتكنولوجيا إدارة السمعة للوكالات والشركات الأكثر طموحاً في المنطقة.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row-reverse justify-center gap-6 mb-20"
            >
                <Link
                    href="/contact"
                    className="bg-brand-green text-brand-navy px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all font-black uppercase tracking-widest text-xs shadow-2xl shadow-brand-green/20"
                >
                    احصل على تدقيق مجاني
                </Link>
                <Link
                    href="/expertise"
                    className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-5 rounded-full hover:bg-white/10 transition-all font-black uppercase tracking-widest text-xs"
                >
                    عرض الخبرات
                </Link>
            </motion.div>

            {/* Featured Image/Stat Row */}
            <div className="grid lg:grid-cols-12 gap-6 items-end mt-12 text-right">
                <div className="lg:col-span-5 grid gap-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-brand-navy/50 backdrop-blur-xl p-12 rounded-[3rem] text-right border border-white/10"
                    >
                        <div className="text-6xl font-black text-brand-green mb-2 tracking-tighter">350+</div>
                        <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">شريك وكالة عالمياً</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-12 rounded-[3rem] text-right border border-slate-100 hidden md:block"
                    >
                        <div className="flex -space-x-3 mb-6 flex-row-reverse justify-end">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white ring-2 ring-slate-50" />
                            ))}
                        </div>
                        <p className="text-sm font-black text-brand-navy uppercase tracking-widest leading-relaxed">أعلى منصة بحث محلي تقييماً في عام 2026.</p>
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-7"
                >
                    <div className="aspect-video bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative group">
                         <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            alt="SEO Dashboard"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" />
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-navy rounded-[3.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden text-right">
                <div className="absolute top-0 left-0 w-32 h-32 bg-brand-green/10 blur-3xl rounded-full" />
                <h2 className="text-3xl font-black text-white mb-12 tracking-tighter">رحلتنا</h2>
                <div className="space-y-12">
                    {[
                        { year: "2018", title: "البداية", desc: "تأسست بمهمة لإصلاح الفجوة بين الوكالة والعميل باستخدام تقنيات 'Post-Fix' المتطورة." },
                        { year: "2020", title: "محرك السمعة", desc: "أطلقنا أول تقنية حماية للمراجعات للماركات متعددة المواقع." },
                        { year: "2023", title: "التوسع الإقليمي", desc: "بدء العمليات في الرياض ودبي لدعم احتياجات السيو المحلي في الشرق الأوسط." },
                        { year: "2026", title: "إنجاز الذكاء الاصطناعي", desc: "دمج الذكاء الاصطناعي المعتمد بشرياً عبر جميع أنظمة التحقق من البيانات." }
                    ].map((step, idx) => (
                        <div key={idx} className="flex gap-8 group flex-row-reverse">
                            <div className="text-brand-green font-black text-xl pt-1 shrink-0">{step.year}</div>
                            <div className="pb-12 border-r border-white/10 pr-12 last:pb-0 relative">
                                <div className="absolute -right-1.5 top-2.5 w-3 h-3 bg-brand-green rounded-full shadow-lg shadow-brand-green/50" />
                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-brand-green transition-colors">{step.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Locations Hub */}
      <section className="py-32 bg-brand-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.4em] mb-6">بصمتنا العالمية</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-navy mb-20 tracking-tighter">أين نصنع <span className="text-brand-green">النمو.</span></h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-right">
                {[
                    { city: "الرياض، السعودية", color: "bg-brand-navy", text: "text-white", sub: "text-slate-400", meta: "الاستراتيجية والمقر الإقليمي" },
                    { city: "لندن، المملكة المتحدة", color: "bg-white", text: "text-brand-navy", sub: "text-slate-400", meta: "المقر الرئيسي للإدارة" },
                    { city: "دبي، الإمارات", color: "bg-white", text: "text-brand-navy", sub: "text-slate-400", meta: "توسع سوق الخليج" }
                ].map((loc, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -10 }}
                        className={`${loc.color} p-12 rounded-[3rem] text-right border border-slate-100 shadow-sm transition-all`}
                    >
                        <div className="flex justify-between items-start mb-12 flex-row-reverse">
                            <MapPin className={`h-8 w-8 ${loc.text === 'text-white' ? 'text-brand-green' : 'text-brand-navy'}`} />
                            <span className={`text-[10px] font-black uppercase tracking-widest ${loc.sub}`}>{loc.meta}</span>
                        </div>
                        <h4 className={`text-3xl font-black ${loc.text} mb-4 tracking-tighter`}>{loc.city}</h4>
                        <div className={`mt-10 pt-10 border-t ${loc.text === 'text-white' ? 'border-white/10' : 'border-black/5'} flex items-center group cursor-pointer flex-row-reverse`}>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${loc.text} group-hover:ml-4 transition-all uppercase`}>عرض على الخريطة</span>
                            <ArrowLeft className={`h-4 w-4 mr-2 transition-all ${loc.text === 'text-white' ? 'text-brand-green' : 'text-brand-navy'}`} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Why One to Five Click? */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="text-right">
                    <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.9]">لماذا تنمو مع <br /> 1-5 كليك؟</h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                        نحن لسنا مجرد وكالة. نحن البنية التحتية لصناعة السيو المحلي. نوفر سرعة البرمجيات مع دقة الخبراء البشريين للحصول على نتائج حقيقية.
                    </p>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                        {[
                            { icon: Clock, title: "عمليات سريعة", desc: "مزامنة خلال 4 ساعات" },
                            { icon: ShieldCheck, title: "موثوقية", desc: "ذكاء اصطناعي مدقق بشرياً" },
                            { icon: Target, title: "دقة", desc: "تركيز على الأحياء" },
                            { icon: Globe, title: "إقليمي", desc: "نمو في أسواق متعددة" }
                        ].map((item, idx) => (
                            <div key={idx} className="group">
                                <item.icon className="h-7 w-7 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                                <h5 className="font-black text-brand-navy uppercase tracking-widest text-xs mb-2">{item.title}</h5>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6 pt-12">
                        <div className="bg-brand-navy p-8 rounded-[2.5rem] shadow-xl group hover:-translate-y-2 transition-transform">
                            <Users className="h-8 w-8 text-brand-green mb-6" />
                            <h4 className="text-white font-black uppercase tracking-widest text-xs">فريق خبير</h4>
                        </div>
                        <div className="bg-brand-mint/50 p-8 rounded-[2.5rem] border border-brand-green/10 group hover:-translate-y-2 transition-transform text-right">
                            <Zap className="h-8 w-8 text-brand-green mb-6" />
                            <h4 className="text-brand-navy font-black uppercase tracking-widest text-xs">مزامنة سريعة</h4>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-brand-green p-8 rounded-[2.5rem] shadow-xl group hover:-translate-y-2 transition-transform">
                            <Star className="h-8 w-8 text-brand-navy mb-6" />
                            <h4 className="text-brand-navy font-black uppercase tracking-widest text-xs font-black">سمعة 5 نجوم</h4>
                        </div>
                        <div className="bg-brand-navy p-8 rounded-[2.5rem] border border-white/5 group hover:-translate-y-2 transition-transform">
                            <MessageSquare className="h-8 w-8 text-brand-green mb-6" />
                            <h4 className="text-white font-black uppercase tracking-widest text-xs">دعم 24/7</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="py-24 bg-brand-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">موثوق من قبل أكثر من 10,000 خبير محلي.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                <div className="bg-brand-green p-12 rounded-[3rem] text-center group cursor-default shadow-lg shadow-brand-green/10">
                    <div className="text-5xl font-black text-brand-navy mb-2 tracking-tighter">15k+</div>
                    <p className="text-[10px] font-black text-brand-navy/60 uppercase tracking-widest">شريك عالمي</p>
                </div>
                <div className="bg-white p-12 rounded-[3rem] text-center shadow-lg">
                    <div className="text-5xl font-black text-brand-navy mb-2 tracking-tighter">4.8/5</div>
                    <p className="text-[10px] font-black text-brand-navy/60 uppercase tracking-widest">تقييم المنصة</p>
                </div>
                <div className="bg-brand-mint/10 border border-white/10 p-12 rounded-[3rem] text-center backdrop-blur-sm">
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter">99.9%</div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">سرعة التشغيل</p>
                </div>
                <div className="bg-brand-navy/50 p-12 rounded-[3rem] text-center border border-white/10">
                    <div className="text-5xl font-black text-brand-green mb-2 tracking-tighter">1M+</div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">إشارة بنيت</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-brand-green rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
                <div className="absolute inset-0 bg-white/10 opacity-50 blur-3xl rounded-full translate-y-1/2" />
                <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter relative z-10">ابدأ دورة النمو الخاصة بك.</h2>
                <div className="relative z-10">
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-brand-navy text-white px-14 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-sm shadow-xl"
                    >
                        احصل على تدقيق مجاني
                        <ArrowLeft className="mr-3 h-5 w-5 text-brand-green" />
                    </Link>
                </div>
              </div>
          </div>
      </section>
    </div>
  );
}
