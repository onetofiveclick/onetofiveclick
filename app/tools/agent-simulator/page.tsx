'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ShieldCheck, Mail, MessageSquare, AlertTriangle, CheckCircle2, Search, BrainCircuit, RefreshCcw, ArrowRight } from 'lucide-react';

export default function AgentSimulator() {
  const [review, setReview] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<null | any>(null);

  const simulateAgent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!review.trim()) return;

    setIsAnalyzing(true);
    setReport(null);

    // Simulate Autonomous Agent Workflow
    setTimeout(() => {
      const isDeceptive = review.toLowerCase().includes('bad') || review.toLowerCase().includes('slow') || review.toLowerCase().includes('issue') || review.includes('سيء') || review.includes('بطيء');
      
      setReport({
        sentiment: isDeceptive ? 'Negative (Deceptive)' : 'Positive',
        confidence: 98,
        starsFound: 5,
        contextAnalysis: isDeceptive 
          ? 'المستخدم وضع 5 نجوم ولكن النص يحتوي على شكوى صريحة من البطء أو المشاكل. هذا يخلق "فجوة ثقة" (Trust Gap) في محركات الإجابة.'
          : 'النص متسق مع التقييم المرتفع. يعزز سلطة العلامة التجارية.',
        agentAction: isDeceptive 
          ? 'إرسال تنبيه فوري للمدير + مسودة رد دفاعي فوري لسد ثغرة الهلوسة.'
          : 'أرشفة المراجعة وتعزيزها في بيانات الـ Consensus.',
        threatLevel: isDeceptive ? 'High' : 'Low'
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="pt-32 pb-48 bg-white min-h-screen text-right">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Agent Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-green/20">
            <Bot className="h-4 w-4" />
            <span>محاكي وكلاء الذكاء الاصطناعي (AI Agents)</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter">
            اختبار الوكيل <span className="text-brand-green">الذاتي.</span>
          </h1>
          <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
            شاهد كيف يعمل وكيلنا المخصص لتحليل المشاعر (Sentiment Analysis) على حماية سمعتك من المراجعات المضللة.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="bg-brand-navy p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group border border-white/5">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-50" />
          <div className="absolute inset-0 bg-brand-green/5 opacity-20 pointer-events-none" />
          
          <form onSubmit={simulateAgent} className="relative z-10 space-y-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-md">
              <label className="block text-white/60 font-black text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-4">محاكاة مراجعة (مثلاً: Trustpilot)</label>
              <textarea 
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="ألصق المراجعة هنا... (مثال: 'خمس نجوم ولكن الخدمة كانت بطيئة جداً')"
                className="w-full bg-transparent text-white text-xl font-bold outline-none h-32 text-right resize-none placeholder:text-white/10"
              />
              <div className="flex justify-between items-center mt-6 border-t border-white/5 pt-6">
                 <div className="flex gap-2">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-brand-green text-2xl">★</span>)}
                 </div>
                 <span className="text-white/40 text-xs font-black uppercase tracking-widest">User Rating: 5 Stars</span>
              </div>
            </div>

            <button 
              disabled={isAnalyzing}
              className="w-full bg-brand-green text-brand-navy py-6 rounded-[2rem] font-black text-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-xl shadow-brand-green/20"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCcw className="h-6 w-6 animate-spin" />
                  جاري تشغيل الوكيل الذاتي...
                </>
              ) : (
                <>
                  تنشيط الوكيل (Activate Agent) <ArrowRight className="h-6 w-6" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results */}
        <AnimatePresence>
          {report && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all">
                  <h3 className="text-brand-navy font-black text-xl mb-6 flex items-center gap-3">
                    <BrainCircuit className="h-6 w-6 text-brand-green" />
                    تحليل الوكيل (Agent Logic)
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-bold">المشاعر الحقيقية:</span>
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black ${report.threatLevel === 'High' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                        {report.sentiment}
                      </span>
                    </div>
                    <p className="text-slate-600 font-bold text-sm leading-loose">
                      {report.contextAnalysis}
                    </p>
                  </div>
                </div>

                <div className="p-10 bg-brand-navy text-white rounded-[3rem] shadow-xl">
                  <h3 className="text-brand-green font-black text-xl mb-6 flex items-center gap-3">
                    <Mail className="h-6 w-6" />
                    قرار الوكيل (Automated Action)
                  </h3>
                  <div className="space-y-6">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-sm font-bold opacity-80 leading-relaxed italic">
                        "{report.agentAction}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest opacity-40">
                      <CheckCircle2 className="h-4 w-4" />
                      تم إرسال التنبيه - لم يتم تدخل بشري
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Education Section */}
        <div className="mt-32 border-t border-slate-100 pt-32">
          <h2 className="text-4xl font-black text-brand-navy mb-12 text-center">لماذا نحتاج وكلاء الذكاء الاصطناعي؟</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'تجاوز النجوم',
                desc: 'الذكاء الاصطناعي التقليدي يرى النجوم (5★). الوكيل يقرأ "بين السطور" لفهم المشاعر الحقيقية.',
                icon: <Search className="h-6 w-6 text-brand-green" />
              },
              {
                title: 'التشغيل الذاتي',
                desc: 'لا حاجة لكتابة برومبت كل ساعة. الوكيل يقوم بالبحث (Scraping) والتحليل وإرسال الإيميلات تلقائياً.',
                icon: <RefreshCcw className="h-6 w-6 text-brand-green" />
              },
              {
                title: 'حماية الـ Consensus',
                desc: 'إهمال المراجعات السلبية المبطنة يقلل من ثقة محركات الإجابة (Answer Engines) في علامتك.',
                icon: <ShieldCheck className="h-6 w-6 text-brand-green" />
              }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-brand-navy">{item.title}</h3>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
