'use client';

import { useState } from 'react';
import { Mail, Send, Clock, CheckCircle, ShieldCheck, Zap, Globe, Cpu, Star, ArrowRight, MessageSquare, Phone, Target, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    helpType: 'استفسار عام',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitMessage('تم إرسال الرسالة بنجاح. سيتواصل معك فريقنا خلال 4 ساعات.');
    setFormData({ firstName: '', lastName: '', email: '', helpType: 'استفسار عام', message: '' });
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 8000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white min-h-screen text-right">
      {/* Header Section */}
      <section className="pt-32 pb-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 bg-brand-mint border border-brand-green/20 text-brand-green px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <CheckCircle className="h-3 w-3" />
            <span>دعم عالمي 24/7</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-brand-navy mb-6 tracking-tighter leading-[0.9]">تواصل معنا.</h1>
        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            سواء كنت في الرياض أو جدة أو أي مكان في المملكة، فإن فريقنا من خبراء السيو المحلي هنا لمساعدتك على النمو والتوسع في السوق السعودي.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Support Options Column */}
            <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-brand-mint/50 p-10 rounded-[3rem] border border-brand-green/10"
                >
                    <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tighter">الدعم المباشر</h3>
                    <p className="text-sm font-bold text-slate-500 leading-relaxed">متاح من الأحد إلى السبت 9 صباحاً - 11 مساءً لجميع مستخدمي المنصة.</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200"
                >
                    <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tighter">الخدمة الذاتية</h3>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">
                        تحتوي قاعدة المعرفة لدينا على إجابات لـ 90٪ من الاستفسارات الفنية وطلبات الفوترة.
                    </p>
                    <div className="flex flex-col gap-4">
                        <button className="w-full bg-brand-navy text-white py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-brand-navy/90 transition-all shadow-lg">
                            تقديم تذكرة دعم
                        </button>
                        <button className="w-full bg-white text-brand-navy py-5 rounded-full font-black uppercase tracking-widest text-[10px] border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
                            زيارة مركز المساعدة
                        </button>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-brand-navy p-10 rounded-[3rem] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl -ml-12 -mt-12" />
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">احجز عرضاً توضيحياً</h3>
                    <p className="text-sm font-medium text-slate-400 leading-relaxed mb-8">
                        اكتشف كيف يمكن لـ 1-5 كليك تحول سير عمل وكالتك وتقارير النمو الخاصة بك.
                    </p>
                    <button className="w-full bg-brand-green text-brand-navy py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-brand-green/90 transition-all shadow-lg shadow-brand-green/20">
                        جدولة مكالمة
                    </button>
                </motion.div>
            </div>

            {/* Form Column */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-8 bg-brand-green rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-brand-green/20 order-1 lg:order-2"
            >
                <h2 className="text-4xl font-black text-brand-navy mb-12 tracking-tighter">أرسل لنا رسالة</h2>
                <form onSubmit={handleSubmit} className="space-y-6 text-right">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="الاسم الأول*"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full bg-white border-none rounded-2xl px-6 py-5 font-bold text-brand-navy placeholder:text-slate-300 outline-none focus:ring-4 focus:ring-white/20 transition-all text-right"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="اسم العائلة*"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full bg-white border-none rounded-2xl px-6 py-5 font-bold text-brand-navy placeholder:text-slate-300 outline-none focus:ring-4 focus:ring-white/20 transition-all text-right"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="بريد العمل*"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border-none rounded-2xl px-6 py-5 font-bold text-brand-navy placeholder:text-slate-300 outline-none focus:ring-4 focus:ring-white/20 transition-all text-right"
                    />
                    <div className="relative">
                        <select
                            name="helpType"
                            value={formData.helpType}
                            onChange={handleChange}
                            className="w-full bg-white border-none rounded-2xl px-6 py-5 font-bold text-brand-navy outline-none focus:ring-4 focus:ring-white/20 transition-all appearance-none text-right pr-6"
                        >
                            <option value="">كيف يمكننا مساعدتك؟*</option>
                            <option value="Demo">طلب عرض توضيحي</option>
                            <option value="Billing">استفسار عن الفواتير</option>
                            <option value="Technical">دعم فني</option>
                            <option value="Partnership">شراكة</option>
                        </select>
                        <HelpCircle className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 pointer-events-none" />
                    </div>
                    <textarea
                        name="message"
                        placeholder="رسالتك*"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white border-none rounded-2xl px-6 py-5 font-bold text-brand-navy placeholder:text-slate-300 outline-none focus:ring-4 focus:ring-white/20 transition-all resize-none text-right"
                    />
                    
                    {submitMessage && (
                        <div className="bg-brand-navy rounded-2xl p-6 text-brand-green font-black text-sm uppercase tracking-widest text-center shadow-lg">
                            {submitMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-brand-navy text-white px-14 py-6 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-brand-navy/90 transition-all shadow-xl disabled:opacity-50 tracking-[0.2em]"
                    >
                        {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                    </button>
                </form>
            </motion.div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-24 bg-brand-mint text-right">
        <div className="max-w-7xl mx-auto px-4">
            <div className="relative rounded-[4rem] overflow-hidden group shadow-2xl">
                <img 
                    src="/happy_marketing_professional_smiling_17757379273.png" 
                    alt="فريق دعم ون تو فايف كليك"
                    className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-brand-navy via-brand-navy/40 to-transparent p-12 md:p-24 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter max-w-xl leading-[0.9]">
                        أشخاص حقيقيون، دعم لا مثيل له.
                    </h2>
                    <p className="text-lg text-slate-300 font-medium max-w-lg mb-0 leading-relaxed">
                        لست وحدك أبداً. فريقنا الداخلي متاح دائماً لإرشادك بدعم سريع وموثوق، سواء كنت تستعد لاجتماع كبير أو تحتاج فقط لمساعدة في فهم أحدث تقرير لك.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-6xl font-black text-brand-navy mb-20 tracking-tighter leading-[0.9]">
                موثوق من قبل آلاف <br /> الشركات في السعودية والخليج.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { quote: "في عالم تتراجع فيه خدمة العملاء، تبرز ون تو فايف كليك كنموذج لكيفية تقديم الدعم.", author: "ميراندا" },
                    { quote: "نتائج ممتازة، وخدمة العملاء دائماً متعاونة للغاية!", author: "تيم غوستي" },
                    { quote: "خدمة العملاء كانت أفضل بـ 1000٪ مما اعتدت عليه.", author: "كيرت غالتري" },
                    { quote: "أجد خدمة العملاء في ون تو فايف كليك، من المبيعات إلى الدردشة، من الطراز الأول.", author: "جانيل هاويل" },
                    { quote: "خدمة العملاء المتميزة هي ما يميزها عن منافسيها!", author: "ميليسا رودريغيز" },
                    { quote: "تسعير سهل، وخدمة مذهلة.", author: "سكوت هيرست" },
                    { quote: "أداة رائعة. استجابة سريعة جداً من فريق الدعم.", author: "مارك فاغنر" },
                    { quote: "لا يمكننا أن نكون أكثر سعادة بخدماتهم ودعمهم.", author: "يوسف لهري" }
                ].map((testimonial, idx) => (
                    <div key={idx} className="bg-brand-mint/30 p-10 rounded-[2.5rem] text-right border border-brand-green/5 flex flex-col justify-between group hover:bg-white hover:shadow-2xl hover:border-brand-green/20 transition-all duration-500">
                        <p className="text-sm font-bold text-brand-navy leading-relaxed mb-8 transition-all group-hover:not-italic">"{testimonial.quote}"</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-green">{testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter Trust Footer Section */}
      <section className="py-24 bg-brand-navy text-right">
        <div className="max-w-7xl mx-auto px-4">
            <div className="bg-brand-green rounded-[4rem] p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center shadow-2xl shadow-brand-green/10">
                <div className="order-2 lg:order-1 flex flex-col sm:flex-row gap-4">
                    <button className="bg-brand-navy text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:brightness-110 transition-all tracking-[0.2em] order-2 sm:order-1">
                        اشتراك
                    </button>
                    <input 
                        type="email" 
                        placeholder="البريد الإلكتروني للعمل" 
                        className="bg-white border-none rounded-xl px-6 py-5 font-bold flex-grow outline-none shadow-sm text-right order-1 sm:order-2" 
                    />
                </div>
                <div className="order-1 lg:order-2">
                    <div className="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mb-8 mr-auto lg:mr-0 ml-auto lg:ml-0">
                        <Mail className="h-8 w-8 text-brand-navy" />
                    </div>
                    <h3 className="text-4xl font-black text-brand-navy mb-4 tracking-tighter">انضم للنشرة البريدية.</h3>
                    <p className="text-brand-navy/60 font-bold mb-0 leading-relaxed max-w-sm ml-auto mr-0 lg:ml-0 lg:mr-0">
                        ابقَ في الصدارة مع نصائح السيو المحلي المحسنة، وأحدث أخبار المنتجات، والأبحاث الحصرية.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
