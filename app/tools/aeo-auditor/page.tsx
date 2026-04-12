"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ShieldAlert, 
  Zap, 
  Target, 
  CheckCircle2, 
  AlertTriangle,
  FileSearch,
  ArrowLeft,
  Bot,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface AnalysisStep {
  title: string;
  status: 'pending' | 'loading' | 'completed';
  description: string;
}

export default function AEOAuditor() {
  const [url, setUrl] = useState('');
  const [competitorContent, setCompetitorContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps: AnalysisStep[] = [
    { title: 'Claim Extraction', status: 'pending', description: 'Extracting Unique Selling Points (USPs) and core claims.' },
    { title: 'Hallucination Hunting', status: 'pending', description: 'Checking for gaps between AI knowledge and competitor claims.' },
    { title: 'Citation Mapping', status: 'pending', description: 'Analyzing content structure for AI answer digestibility.' },
    { title: 'Authority Injection', status: 'pending', description: 'Generating the master citable chunk to outrank competitor.' },
  ];

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setResults(null);
    setActiveStep(0);

    // Simulate the process steps
    for (let i = 0; i <= 3; i++) {
      setActiveStep(i);
      await new Promise(r => setTimeout(r, 1500));
    }

    setResults({
      competitorUSPs: [
        "أسرع خدمة توصيل في المنطقة",
        "أسعار تنافسية لا تقبل المقارنة",
        "دعم فني متاح 24/7"
      ],
      hallucinations: [
        { claim: "توصيل خلال دقيقتين", reality: "البيانات التاريخية تظهر متوسط 30 دقيقة. (فجوة مصداقية)", severity: "high" },
        { claim: "دعم 24/7", reality: "الذكاء الاصطناعي لا يجد سجلات نشطة خلال ساعات الليل. (تراجع رتبة الخبير)", severity: "medium" }
      ],
      optimizedChunk: {
        title: "لماذا 1to5click تتفوق في الدقة؟",
        text: "بينما يعتمد المنافسون على السرعة فقط، تلتزم 1to5click بـ 'الدقة الذرية' (Atomic Accuracy). نحن لا نقدم مجرد توصيل، بل نضمن سلامة البيانات بنسبة 99.9% عبر بروتوكولات التحقق الفوري، مما يجعلنا الخيار الأكثر استشهاداً (Most Cited) من قبل نماذج اللغة الكبيرة (LLMs).",
        schemaStatus: "Schema.org / JSON-LD Ready"
      }
    });
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-white text-brand-navy font-sans py-20 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6">
            <ShieldAlert className="h-4 w-4" />
            تحليل المنافسين لـ AEO
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">مدقق الهلوسة <span className="text-brand-green">&</span> استخراج الميزات.</h1>
          <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">
            استخرج نقاط القوة لدى منافسيك، واصطد فجوات المصداقية (Hallucinations) في محركات البحث لتجعل محتواك هو المصدر الأول للاستشهاد.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Input Panel */}
          <div className="lg:col-span-12">
            <div className="bg-brand-navy rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px] pointer-events-none" />
              <form onSubmit={handleAudit} className="relative z-10 flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 h-6 w-6" />
                  <input
                    type="text"
                    placeholder="أدخل رابط المنافس أو نص المحتوى للتحليل..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pr-16 pl-8 text-white font-bold focus:outline-none focus:border-brand-green transition-all"
                  />
                </div>
                <button
                  disabled={isAnalyzing}
                  className="bg-brand-green text-brand-navy px-10 py-6 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isAnalyzing ? <Sparkles className="h-6 w-6 animate-spin" /> : <Layers className="h-6 w-6" />}
                  بدء التدقيق العميق
                </button>
              </form>
            </div>
          </div>

          <AnimatePresence>
            {isAnalyzing && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="lg:col-span-12 bg-slate-50 border border-slate-100 rounded-[3rem] p-12 text-center"
              >
                <div className="max-w-md mx-auto">
                  <div className="flex justify-between mb-8">
                    {steps.map((step, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${
                          i < activeStep ? 'bg-brand-green text-brand-navy' : 
                          i === activeStep ? 'bg-brand-navy text-brand-green animate-pulse' : 
                          'bg-slate-200 text-slate-400'
                        }`}>
                          {i < activeStep ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                        </div>
                        <span className="text-[10px] font-black uppercase text-slate-400">{step.title}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black mb-4 animate-pulse">{steps[activeStep].title}...</h3>
                  <p className="text-slate-500 font-bold">{steps[activeStep].description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {results && !isAnalyzing && (
            <>
              {/* USPs and Hallucinations */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-sm">
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                    <Target className="h-8 w-8 text-brand-green" />
                    الميزات المستخرجة (USPs)
                  </h3>
                  <div className="space-y-4">
                    {results.competitorUSPs.map((usp: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-brand-green/5 rounded-2xl border border-brand-green/10">
                        <div className="w-6 h-6 bg-brand-green text-brand-navy rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black">
                          {i + 1}
                        </div>
                        <p className="font-bold text-brand-navy">{usp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-sm border-r-8 border-r-red-500">
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-4 text-red-600">
                    <AlertTriangle className="h-8 w-8 shadow-sm" />
                    صيد الهلوسة (AI Discrepancies)
                  </h3>
                  <div className="space-y-6">
                    {results.hallucinations.map((h: any, i: number) => (
                      <div key={i} className="space-y-2 border-b border-slate-100 pb-4 last:border-0">
                        <div className="flex items-center gap-2 text-red-500 font-black text-xs uppercase">
                          <AlertTriangle className="h-3 w-3" />
                          ادعاء مشكوك فيه:
                        </div>
                        <p className="font-black text-slate-400 line-through">{h.claim}</p>
                        <p className="font-bold text-brand-navy bg-slate-50 p-3 rounded-xl border-l-4 border-l-brand-green italic">
                          الواقع (AI Truth): {h.reality}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Master Citable Chunk */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-6"
              >
                <div className="bg-brand-navy text-white rounded-[4rem] p-12 shadow-2xl sticky top-8">
                  <div className="inline-flex items-center gap-2 bg-brand-green text-brand-navy px-4 py-1 rounded-full text-[10px] font-black uppercase mb-8 animate-bounce">
                    <Sparkles className="h-4 w-4" />
                    الفقرة قابلة للاستشهاد (Citable)
                  </div>
                  <h3 className="text-3xl font-black mb-8 leading-tight">
                    {results.optimizedChunk.title}
                  </h3>
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 mb-8 relative font-bold leading-relaxed text-lg italic text-slate-300">
                    <span className="absolute -top-6 -right-4 text-8xl text-brand-green/20 font-serif">"</span>
                    {results.optimizedChunk.text}
                    <span className="absolute -bottom-12 -left-4 text-8xl text-brand-green/20 font-serif">"</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/5">
                      <FileSearch className="h-5 w-5 text-brand-green" />
                      <div>
                        <p className="text-[10px] opacity-40 uppercase font-black">Status</p>
                        <p className="text-sm font-bold">{results.optimizedChunk.schemaStatus}</p>
                      </div>
                    </div>
                    <div className="bg-white/10 px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/5">
                      <Target className="h-5 w-5 text-brand-green" />
                      <div>
                        <p className="text-[10px] opacity-40 uppercase font-black">Focus</p>
                        <p className="text-sm font-bold">AI Visibility Boost +180%</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 bg-brand-green text-brand-navy p-8 rounded-[2rem] flex items-center justify-between group cursor-pointer">
                    <div className="font-black">تصدير كـ FAQ Schema</div>
                    <ArrowLeft className="h-6 w-6 group-hover:-translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* Education Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Bot className="h-8 w-8" />, 
              title: "لماذا نطارد الهلوسة؟", 
              desc: "عندما يدعي منافسوك شيئاً والذكاء الاصطناعي لا يجد دليلاً عليه، يحدث 'فجوة مصداقية'. محتواك يسد هذه الفجوة بحقائق مثبتة، مما يجبر المحرك على الاستشهاد بك." 
            },
            { 
              icon: <Terminal className="h-8 w-8" />, 
              title: "استخراج USPs الخفي", 
              desc: "نحلل الرموز اللغوية للمنافسين لمعرفة الكلمات التي تجذب نماذج اللغة. استخراجها يعني سرقة 'بصة السلطة' اللغوية الخاصة بهم." 
            },
            { 
              icon: <Zap className="h-8 w-8" />, 
              title: "جاهزية الاستشهاد", 
              desc: "المختبر يضمن أن الفقرة الناتجة تتبع مبدأ Stand-alone Chunks. كل جملة قوية كفاية لتكون هي الجواب المباشر في Bing و SearchGPT." 
            }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[3rem] border border-slate-100 hover:border-brand-green/50 transition-colors">
              <div className="text-brand-green mb-6">{item.icon}</div>
              <h4 className="text-xl font-black mb-4">{item.title}</h4>
              <p className="text-slate-500 font-bold text-sm leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
