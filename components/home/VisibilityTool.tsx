'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, BarChart3, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const cities = ['الرياض', 'جدة', 'الدمام', 'المدينة المنورة', 'مكة المكرمة'];

export default function VisibilityTool() {
  const [city, setCity] = useState('');
  const [brand, setBrand] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { score: number; status: string; color: string }>(null);

  const handleAnalyze = () => {
    if (!brand || !city) return;
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate complex analysis
    setTimeout(() => {
      const score = Math.floor(Math.random() * (95 - 40 + 1)) + 40;
      let status = 'يحتاج تحسين فوري';
      let color = 'text-red-500';
      
      if (score > 80) { status = 'سيطرة كاملة'; color = 'text-brand-green'; }
      else if (score > 60) { status = 'تواضع في الظهور'; color = 'text-amber-500'; }
      
      setResult({ score, status, color });
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden text-right">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-xs font-black mb-6">
              <Zap className="h-4 w-4" />
              <span>أداة السيطرة المحلية v1.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              هل علامتك التجارية مسيطرة <br /> <span className="text-brand-green">في مدينتك؟</span>
            </h2>
            <p className="text-slate-400 text-lg font-bold mb-10 leading-relaxed max-w-xl">
              استخدم محرك الذكاء الاصطناعي الخاص بنا لتحليل ظهورك في خرائط جوجل ونتائج البحث المحلية عبر مدن المملكة. احصل على تقرير فوري مجاني.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { icon: ShieldCheck, text: 'تحليل دقيق للبيانات' },
                { icon: BarChart3, text: 'مقارنة مع المنافسين' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-bold bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                  <div className="p-2 bg-brand-green/20 rounded-lg">
                    <item.icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Tool Card */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative lg:ml-10">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green rounded-full blur-[40px] opacity-20" />
            
            {!result ? (
              <div className="space-y-6 relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-brand-navy mb-2">تقرير مجاني وفوري</h3>
                  <p className="text-slate-500 font-bold text-sm">أدخل بيانات العينة أدناه واحصل على تحليل لمستوى ظهورك المستهدف.</p>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-brand-navy font-black mb-2 text-sm text-right">اسم النشاط التجاري</label>
                    <div className="relative group/input">
                      <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within/input:text-brand-green transition-colors" />
                      <input 
                        type="text" 
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="مثال: مطعم أو شركة توريدات..."
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl py-5 pr-12 pl-4 focus:border-brand-green focus:ring-4 focus:ring-brand-green/30 focus:bg-white outline-none font-bold transition-all text-brand-navy placeholder:text-slate-400 text-lg shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-navy font-black mb-2 text-sm text-right">المدينة المستهدفة</label>
                    <div className="relative group/input">
                      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 h-6 w-6 group-focus-within/input:text-brand-green transition-colors" />
                      <select 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl py-5 pr-12 pl-4 focus:border-brand-green focus:ring-4 focus:ring-brand-green/30 focus:bg-white outline-none font-bold transition-all appearance-none text-brand-navy cursor-pointer text-lg shadow-inner"
                      >
                        <option value="">اختر المدينة...</option>
                        {cities.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !brand || !city}
                    className="w-full bg-brand-navy text-white py-6 rounded-2xl font-black text-2xl hover:bg-[#002855] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(0,28,61,0.5)] border-2 border-transparent hover:border-brand-green"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        <span>جاري التحليل...</span>
                      </>
                    ) : (
                      <>
                        <span>اظهار النتائج الفورية</span>
                        <ArrowRight className="h-7 w-7 rotate-180" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-slate-500 font-black mt-4 flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-brand-green fill-brand-green" /> استشارة مجانية مدتها 30 دقيقة.
                  </p>
                </div>
              </div>
            ) : (
              <AnimatePresence>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="relative inline-block mb-8">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                      <circle 
                        cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" 
                        strokeDasharray={440}
                        strokeDashoffset={440 - (440 * result.score) / 100}
                        className={result.color}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-brand-navy">{result.score}%</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Authority</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-brand-navy mb-4">
                    حالة الظهور في <span className="text-brand-green">{city}</span>
                  </h3>
                  <p className={`text-xl font-black mb-8 ${result.color}`}>
                    {result.status}
                  </p>
                  
                  <button 
                    onClick={() => setResult(null)}
                    className="text-slate-400 font-bold hover:text-brand-navy transition-colors underline"
                  >
                    إعادة الفحص لمدينة أخرى
                  </button>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
