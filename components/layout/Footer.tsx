import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowLeft } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 text-right">
      {/* BrightLocal Style High Contrast Call to Action */}
      <div className="bg-brand-mint py-20 border-t border-brand-green/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center flex-row-reverse -space-x-reverse -space-x-4 mb-10">
              <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-lg">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=200" alt="صاحب شركة صغيرة ناجح" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-lg" />
              <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-lg">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="خبير تسويق رقمي مبتسم" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-lg">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200" alt="لوحة بيانات سيو متقدمة" className="w-full h-full object-cover" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-10 tracking-tighter">انضم إلى أكثر من 10,000 مسوق محلي <br className="hidden md:block" /> يحققون النجاح بالفعل مع 1-5 كليك.</h2>
            <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center">
               <Link
                href="/contact/"
                className="bg-brand-green text-brand-navy px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all font-extrabold text-lg shadow-lg shadow-brand-green/20"
              >
                ابدأ التجربة المجانية
              </Link>
               <Link
                href="/contact/"
                className="bg-white border-2 border-brand-navy/10 text-brand-navy px-12 py-5 rounded-full hover:bg-brand-navy hover:text-white transition-all font-extrabold text-lg shadow-sm"
              >
                احجز عرضاً توضيحياً
              </Link>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-12 gap-y-16">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center">
                    <span className="text-brand-green font-black text-sm">1-5</span>
                </div>
                <span className="text-xl font-black tracking-tighter text-brand-navy">كليك</span>
            </Link>
            <p className="text-slate-500 text-base leading-relaxed font-bold mt-2">
              شريكك الاستراتيجي في النمو. نحن نُمكّن الوكالات والعلامات التجارية متعددة المواقع في السعودية من السيطرة المطلقة على البحث المحلي من خلال تقارير مدعومة بالذكاء الاصطناعي وبناء سمعة أقوى.
            </p>
            <div className="flex gap-5">
              <a href="#" aria-label="تابعنا على فيسبوك" className="text-slate-400 hover:text-brand-green transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="تابعنا على تويتر" className="text-slate-400 hover:text-brand-green transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="تابعنا على لينكد إن" className="text-slate-400 hover:text-brand-green transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="تابعنا على إنستغرام" className="text-slate-400 hover:text-brand-green transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-extrabold text-brand-navy mb-8 text-xs uppercase tracking-[0.2em]">خدمات السيو المتقدمة</h3>
            <ul className="space-y-5 text-sm font-bold text-slate-500">
              <li><Link href="/seo-services/" className="hover:text-brand-green transition-colors">السيو للقطاعات والمدن</Link></li>
              <li><Link href="/services/seo/technical-seo/" className="hover:text-brand-green transition-colors">السيو التقني</Link></li>
              <li><Link href="/services/seo/on-page-seo/" className="hover:text-brand-green transition-colors">تحسين السيو الداخلي</Link></li>
              <li><Link href="/services/seo/off-page-seo/" className="hover:text-brand-green transition-colors">بناء الروابط الخلفية</Link></li>
              <li><Link href="/services/seo/" className="hover:text-brand-green transition-colors">خدمات السيو الشاملة</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-extrabold text-brand-navy mb-8 text-xs uppercase tracking-[0.2em]">الشركة والمصادر</h3>
            <ul className="space-y-5 text-sm font-bold text-slate-500">
              <li><Link href="/about/" className="hover:text-brand-green transition-colors">من نحن</Link></li>
              <li><Link href="/blog/" className="hover:text-brand-green transition-colors">مركز المعرفة</Link></li>
              <li><Link href="/resources/" className="hover:text-brand-green transition-colors">الأدوات والتقارير</Link></li>
              <li><Link href="/expertise/" className="hover:text-brand-green transition-colors">دراسات الحالة</Link></li>
              <li><Link href="/contact/" className="hover:text-brand-green transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

           <div>
            <h3 className="font-extrabold text-brand-navy mb-8 text-xs uppercase tracking-[0.2em]">فروعنا</h3>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link href="/locations/riyadh/" className="hover:text-brand-green transition-colors">الرياض</Link></li>
              <li><Link href="/locations/jeddah/" className="hover:text-brand-green transition-colors">جدة</Link></li>
              <li><Link href="/locations/dammam/" className="hover:text-brand-green transition-colors">الدمام والمنطقة الشرقية</Link></li>
            </ul>
          </div>

           <div className="lg:col-span-3">
            <h3 className="font-extrabold text-brand-navy mb-8 text-xs uppercase tracking-[0.2em]">أحياء متميزة</h3>
            <ul className="space-y-5 text-sm font-bold text-slate-500">
              <li><Link href="/locations/riyadh/olaya/" className="hover:text-brand-green transition-colors">حي العليا (الرياض)</Link></li>
              <li><Link href="/locations/jeddah/king-abdullah-rd/" className="hover:text-brand-green transition-colors">طريق الملك عبدالله (جدة)</Link></li>
              <li><Link href="/locations/riyadh/al-rawdah/" className="hover:text-brand-green transition-colors">حي الروضة</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-28 flex flex-col lg:flex-row-reverse items-center justify-between gap-10 bg-slate-50 p-10 lg:p-12 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent pointer-events-none" />
          <div className="flex-1 max-w-2xl text-center lg:text-right relative z-10">
            <h3 className="font-black text-brand-navy mb-4 text-2xl">ابقَ متقدماً بخطوة.</h3>
            <p className="text-base text-slate-500 font-bold leading-relaxed">انضم إلى أكثر من 20,000 مسوق ومدير تنفيذي يحصلون على أحدث تكتيكات البحث المحلي وتحديثات الذكاء الاصطناعي أسبوعياً.</p>
          </div>
          <div className="w-full lg:w-96 relative">
            <input 
              type="email" 
              placeholder="البريد الإلكتروني للعمل" 
              className="w-full bg-white border border-slate-200 rounded-full pr-6 pl-14 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-all font-bold shadow-sm"
            />
            <button className="absolute left-1.5 top-1.5 bottom-1.5 bg-brand-green px-5 rounded-full text-brand-navy hover:shadow-md transition-all font-black text-[10px] tracking-widest">
              اشتراك
            </button>
          </div>
        </div>

        {/* Trust & Certifications */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">شركاء الثقة:</span>
              <div className="flex items-center gap-4">
                 <div className="font-black text-brand-navy opacity-50 text-xl tracking-tighter">Google <span className="text-sm">Partner</span></div>
                 <div className="font-black text-brand-navy opacity-50 text-xl tracking-tighter">VAT <span className="text-sm">Registered</span></div>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">طرق الدفع:</span>
              <div className="flex gap-2">
                 <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center text-[8px] font-black text-slate-400">MADA</div>
                 <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center text-[8px] font-black text-slate-400">VISA</div>
                 <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center text-[8px] font-black text-slate-400">MASTERCARD</div>
              </div>
           </div>
        </div>

        <div className="border-t border-slate-100 mt-24 pt-8 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} ون تو فايف كليك. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
             <Link href="/privacy/" className="hover:text-brand-green transition-colors">سياسة الخصوصية</Link>
             <Link href="/terms/" className="hover:text-brand-green transition-colors">شروط الاستخدام</Link>
             <Link href="/contact/" className="hover:text-brand-green transition-colors">إمكانية الوصول</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
