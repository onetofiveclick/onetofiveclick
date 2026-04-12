'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, ShieldCheck, BrainCircuit, Loader2, Copy, Check, ArrowLeft, Target, Briefcase, User, Zap, Sparkles, ShieldAlert, RefreshCcw, Bot } from 'lucide-react';

export default function AeoGeneratorClient({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<'fanout' | 'faq'>('fanout');
  const [resultDisplayMode, setResultDisplayMode] = useState<'content' | 'schema'>('content');
  const [query, setQuery] = useState('');
  const [audience, setAudience] = useState('');
  const [industry, setIndustry] = useState('');
  const [useCase, setUseCase] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<null | any>(null);
  const [copied, setCopied] = useState(false);
  const [engineFocus, setEngineFocus] = useState<'answer' | 'generative'>('answer');
  const [cognitiveMode, setCognitiveMode] = useState<'harmony' | 'critical'>('harmony');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'fanout' && !query.trim()) return;
    if (activeTab === 'faq' && (!audience || !industry)) return;

    setIsGenerating(true);
    setResult(null);
    setCopied(false);

    // Simulate API call and structure extraction
    setTimeout(() => {
      if (activeTab === 'fanout') {
        setResult({
          type: 'fanout',
          coreQuery: query,
          fanOuts: [
            `${query} للمبتدئين مقابل المشترين ذوي الخبرة`,
            `الصيانة والتكاليف الخفية لـ ${query}`,
            `العمر الافتراضي والمتانة لـ ${query} على المدى الطويل`,
            `التوفر المحلي ومتطلبات الحجم لـ ${query}`,
            `${query} مقابل أفضل البدائل (مقارنة الميزات)`,
            `سياق الموقف المحدد (مثلاً، للأطفال/المساحات الصغيرة)`
          ],
          promptTemplate: `أريدك أن تعمل كخبير في SEO و AEO ${cognitiveMode === 'critical' ? 'بعقلية تحليلية ناقدة (Skeptic)' : 'بعقلية توافقية إيجابية (Harmonious)'}.
ساعدني في صياغة استعلامات ممتدة (Fan-Out) بناءً على الاستعلام الرئيسي: "${query}".

${cognitiveMode === 'critical' 
  ? 'مهمتك الأولى هي التشكيك في المسلمات؛ ابحث عن التناقضات والزوايا التي يهلوس فيها الذكاء الاصطناعي عادةً وسدها باستعلامات دقيقة تطلب بيانات وأدلة.' 
  : 'مهمتك هي بناء إجماع (Consensus)؛ صغ استعلامات تضمن ظهور العلامة التجارية في سياقات مختلفة عبر الويب.'}

يرجى بناء "خريطة انتشار" شاملة لـ 6-8 استعلامات فرعية.
أخرج فقط الاستعلامات الناتجة.`,
          chunkingAdvice: "الفقرة الذرية هي المفتاح. كرر اختبار 'جدار المكتب': إذا طبعت فقرة واحدة وعلقتها في مكتبك، هل يفهم العميل معناها دون قراءة المقال بالكامل؟ إذا كانت الإجابة لا، فهي ليست AEO. الزم نفسك بـ 5 جمل كحد أقصى للفقرة، و20 كلمة كحد أقصى للجملة الواحدة.",
          auditorPrompt: `كمدقق AEO، ابحث عن:
1. فجوات الهلوسة (Hallucination Gaps): ما الذي يتجاهله المنافسون؟ اكتشفه وسده.
2. التناسق (Consensus): هل تتوافق الإجابة مع سمات العلامة التجارية عبر الويب؟
3. الاتساق (Consistency): هل هذه القيمة منطقية لهذا المجال؟ (مثلاً: لا تروج لسكريات الأطفال إذا كنت متجر صحي متخصص للبالغين).`
        });
      } else {
        setResult({
          prompt: `أنت خبير AEO وكبير مهندسي المحتوى. 
وضع التشغيل: ${engineFocus === 'answer' ? 'Answer Engine (AEO)' : 'Generative Engine (LLM)'}.
نمط التفكير: ${cognitiveMode === 'critical' ? 'نقدي ومنطقي (Claude Style)' : 'توافقي وتجاري (ChatGPT Style)'}.

المهمة هي إنشاء محتوى ذري (Atomic Content) يلتزم بالقواعد الصارمة التالية:
1. (A - Answer): إجابة مباشرة خبرية في أول 10 كلمات.
2. (Q - Qualification): مرجع حقيقي، بيانات (Stats)، أو تعريف يرفع مستوى الثقة (Confidence Score).
3. (C - Coverage): تغطية مراحل (أمان، اعتبار، تقييم، قرار) مع ربطها بـ ${industry}.
4. (E - Extend): سؤال شائع ذري ورابط داخلي منطقي لدعم الاستمرارية.

${cognitiveMode === 'critical' 
  ? 'تحذير: لا توافق مع المستخدم لمجرد الموافقة (Anti-Agree Mode). إذا كان هناك ضعف منطقي، واجهه ببيانات صلبة واطلب في النص أدلة كافية.' 
  : 'ركز على بناء "إجماع ناعم" وسياقي يسهل على النماذج اقتباسه كإجابة ودودة ومباشرة.'}

قيود الكتابة:
- ${engineFocus === 'answer' ? 'ركز على الاقتباس والحقائق الموثقة (Citation-heavy).' : 'ركز على الإبداع وبناء أفكار جديدة من الصفر (Creativity-heavy).'}
- بحد أقصى 5 جمل لكل فقرة.
- بحد أقصى 20 كلمة لكل جملة.
- مبدأ الاستقلال التام (Stand-alone Unit).`,
          checklist: [
            "وحدة مستقلة (Stand-alone Chunk)",
            cognitiveMode === 'critical' ? "تجاوز فخ الموافقة (Anti-Agree)" : "بناء الإجماع (Consensus)",
            "تطبيق نمط A-Q-C-E بالكامل",
            "دقة الاقتباس (Citation Confidence)"
          ],
          example: {
            q: `هل يمكن حجب المواضيع الحساسة من روبوت الدردشة الخاص بي؟`,
            a: [
              `نعم، يمكن حجب المواضيع الحساسة عن طريق تكوين قائمة سوداء (Blacklist) للكلمات والأنماط في طبقة المعالجة المسبقة قبل وصولها إلى نموذج اللغة.`,
              `يتم ذلك هندسياً باستخدام أنظمة "Intent Filtering" أو قواعد مستوى النظام (System-level rules) لضمان الامتثال لسياسات الخصوصية.`,
              `في 1to5click، نوفر بروتوكولات حماية تمنع الكشف العرضي عن البيانات الحساسة عبر طبقات الاسترجاع (Retrieval Layer) بدلاً من الاستجابة فقط.`,
              `ومع ذلك، يجب دمج هذه القيود مع رقابة بشرية (Human Escalation) للحالات المعقدة، حيث تشير التقارير إلى أن الحجب التلقائي وحده قد يحتاج لمراجعة دورية.`
            ],
            labels: ["إجابة مباشرة", "نطاق وسياق", "ذكر العلامة التجارية", "دفاع بالبيانات (Guardrail)"]
          }
        });
      }
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-48 bg-white min-h-screen overflow-hidden text-right">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-green/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-mint/50 text-brand-navy px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-brand-green/10 backdrop-blur-sm shadow-sm">
            <BrainCircuit className="h-4 w-4 text-brand-green" />
            <span>محرك الذكاء الاصطناعي AEO</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.85]">
            <span className="sr-only">توليد المحتوى الذري للسيو ومحركات الإجابة AEO</span>
            <span aria-hidden="true">توليد المحتوى <span className="text-brand-green uppercase block mt-2">الذري للسيو.</span></span>
          </h1>
          <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
            استخدم منهجية الـ 4 جمل لتوليد محتوى مكثف يتم الاستشهاد به بواسطة محركات الإجابة والذكاء الاصطناعي.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-10">
          <button 
            onClick={() => { setActiveTab('fanout'); setResult(null); }}
            className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
              activeTab === 'fanout' 
              ? 'bg-brand-navy text-white shadow-xl shadow-brand-navy/20' 
              : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
            }`}
          >
            انتشار الاستعلامات (Fan-out)
          </button>
          <button 
            onClick={() => { setActiveTab('faq'); setResult(null); }}
            className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
              activeTab === 'faq' 
              ? 'bg-brand-navy text-white shadow-xl shadow-brand-navy/20' 
              : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
            }`}
          >
            الأسئلة الذرية (Atomic FAQs)
          </button>
        </div>

        {/* Input Form */}
        <div className="bg-brand-navy p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative z-10 overflow-hidden group border border-white/5">
          <div className="absolute inset-0 bg-brand-green/5 opacity-20 pointer-events-none" />
          <form onSubmit={handleGenerate} className="flex flex-col gap-6 relative z-10">
            {activeTab === 'fanout' ? (
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="أدخل استعلاماً واسعاً (مثلاً: أفضل نظام ERP في السعودية)"
                  className="w-full bg-white/10 border border-white/5 rounded-2xl px-8 py-6 text-white focus:outline-none focus:ring-4 focus:ring-brand-green/20 font-bold text-xl transition-all placeholder:text-white/20 text-right"
                  required
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-green/40" />
                  <input
                    type="text"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    placeholder="الجمهور المستهدف (مثلاً: رواد الأعمال الشباب)"
                    className="w-full bg-white/10 border border-white/5 rounded-2xl pr-14 pl-8 py-5 text-white focus:outline-none focus:ring-4 focus:ring-brand-green/20 font-bold text-sm text-right placeholder:text-white/20"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Briefcase className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-green/40" />
                    <input
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="الصناعة"
                      className="w-full bg-white/10 border border-white/5 rounded-2xl pr-14 pl-8 py-5 text-white focus:outline-none focus:ring-4 focus:ring-brand-green/20 font-bold text-sm text-right placeholder:text-white/20"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Target className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-green/40" />
                    <input
                      type="text"
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      placeholder="حالة الاستخدام"
                      className="w-full bg-white/10 border border-white/5 rounded-2xl pr-14 pl-8 py-5 text-white focus:outline-none focus:ring-4 focus:ring-brand-green/20 font-bold text-sm text-right placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] text-white/40 font-black uppercase tracking-widest mr-2">محرك التركيز</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div 
                        onClick={() => setEngineFocus('answer')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-center gap-2 font-black text-[10px] ${engineFocus === 'answer' ? 'border-brand-green bg-brand-green/10 text-brand-green shadow-lg shadow-brand-green/5' : 'border-white/5 text-white/40 grayscale'}`}
                      >
                        <Database className="h-4 w-4" />
                        ANSWER
                      </div>
                      <div 
                        onClick={() => setEngineFocus('generative')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-center gap-2 font-black text-[10px] ${engineFocus === 'generative' ? 'border-brand-green bg-brand-green/10 text-brand-green shadow-lg shadow-brand-green/5' : 'border-white/5 text-white/40 grayscale'}`}
                      >
                        <Zap className="h-4 w-4" />
                        GEN-AI
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] text-white/40 font-black uppercase tracking-widest mr-2">نمط التفكير (Cognitive)</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div 
                        onClick={() => setCognitiveMode('harmony')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-center gap-2 font-black text-[10px] ${cognitiveMode === 'harmony' ? 'border-blue-400 bg-blue-400/10 text-blue-400 shadow-lg shadow-blue-400/5' : 'border-white/5 text-white/40 grayscale'}`}
                      >
                        <Sparkles className="h-4 w-4" />
                        HARMONY
                      </div>
                      <div 
                        onClick={() => setCognitiveMode('critical')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-center gap-2 font-black text-[10px] ${cognitiveMode === 'critical' ? 'border-orange-500 bg-orange-500/10 text-orange-500 shadow-lg shadow-orange-500/5' : 'border-white/5 text-white/40 grayscale'}`}
                      >
                        <ShieldAlert className="h-4 w-4" />
                        CRITICAL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isGenerating}
              className="bg-brand-green text-brand-navy px-12 py-6 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center disabled:opacity-50 shadow-xl shadow-brand-green/20 gap-3"
            >
              {isGenerating ? (
                <>
                  <RefreshCcw className="h-5 w-5 animate-spin" />
                  جاري نمذجة الأنماط... 
                </>
              ) : (
                <>
                  بدء التوليد الخوارزمي <ArrowLeft className="h-5 w-5" />
                </>
              )}
            </button>

            <div className="flex justify-center mt-4">
              <button 
                type="button"
                onClick={() => { alert('تم مسح الذاكرة المؤقتة. جارٍ البدء من نقطة الصفر (Wiping Memory...).'); setQuery(''); setResult(null); }}
                className="text-[9px] font-black text-white/30 hover:text-brand-green transition-colors uppercase tracking-[0.2em] flex items-center gap-2"
              >
                <RefreshCcw className="h-3 w-3" />
                إعادة ضبط الذاكرة (Memory Wipe)
              </button>
            </div>
          </form>
        </div>

        {/* Results Area */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-20 space-y-16"
            >
              {result.type === 'fanout' ? (
                <div className="space-y-12">
                  <div className="bg-brand-mint/20 p-12 rounded-[4rem] border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                      <Network className="w-64 h-64 text-brand-navy" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-brand-navy flex items-center flex-row-reverse justify-end gap-4">
                      <span className="bg-brand-green text-brand-navy w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-black shadow-lg">1</span>
                      مطالبة انتشار المحتوى
                    </h2>
                    <p className="text-slate-500 mb-10 font-black uppercase tracking-widest text-[10px]">
                      انسخ هذه المطالبة لتحويل موضوع واحد إلى شبكة مواضيع كاملة.
                    </p>

                    <div className="bg-brand-navy p-10 rounded-[2.5rem] relative group shadow-2xl">
                      <button
                        onClick={() => handleCopy(result.promptTemplate)}
                        className="absolute top-6 left-6 bg-white/10 p-3 rounded-xl hover:bg-brand-green transition-all border border-white/5"
                      >
                        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                      <p className="text-slate-300 font-bold text-sm leading-relaxed whitespace-pre-wrap">{result.promptTemplate}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-12">
                      {result.fanOuts.map((subQ: string, i: number) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-start gap-4 hover:border-brand-green transition-all group flex-row-reverse shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-brand-mint flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                            <ArrowLeft className="h-4 w-4 text-brand-green group-hover:text-brand-navy" />
                          </div>
                          <span className="text-brand-navy font-black text-sm leading-tight flex-grow">{subQ}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-brand-navy p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-white flex items-center flex-row-reverse justify-end gap-4">
                      <span className="bg-brand-green text-brand-navy w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-black shadow-lg">2</span>
                      استراتيجية التقطيع (Chunking)
                    </h2>
                    <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 flex flex-col md:flex-row-reverse gap-10 items-start mt-10">
                      <div className="bg-brand-green/20 p-5 rounded-3xl shrink-0">
                        <Database className="h-10 w-10 text-brand-green" />
                      </div>
                      <div>
                        <p className="font-black text-slate-200 leading-relaxed text-2xl mb-8 italic">
                          "{result.chunkingAdvice}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                  <div className="bg-brand-mint/20 p-12 rounded-[4rem] border border-slate-100 text-right">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-brand-navy flex items-center flex-row-reverse justify-end gap-4">
                      <span className="bg-brand-navy text-white w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-black shadow-xl">1</span>
                      مطالبة توليد المحتوى الذري
                    </h2>
                    <p className="text-slate-500 mb-10 font-black uppercase tracking-widest text-[10px]">استخدم هذه المطالبة لضمان التزام الذكاء الاصطناعي بقاعدة الـ 4 جمل.</p>
                    
                    <div className="bg-brand-navy p-10 rounded-[2.5rem] relative group shadow-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 w-full h-1 bg-brand-green/40" />
                      <button
                        onClick={() => handleCopy(result.prompt)}
                        className="absolute top-6 left-6 bg-white/10 p-3 rounded-xl hover:bg-brand-green transition-all"
                      >
                        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                      <p className="text-slate-300 font-bold text-sm leading-relaxed whitespace-pre-wrap">{result.prompt}</p>
                    </div>
                  </div>

                  <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-full pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row-reverse justify-between items-start mb-1 gap-8">
                        <h3 className="text-3xl font-black text-brand-navy flex items-center flex-row-reverse gap-4">
                            <ShieldCheck className="h-8 w-8 text-brand-green" />
                            هيكلية الإجابة الذرية الموصى بها
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-end">
                            {result.checklist.map((item: string, i: number) => (
                                <span key={i} className="bg-brand-mint text-brand-navy px-3 py-1 rounded-full text-[9px] font-black border border-brand-green/20">✓ {item}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 border-b border-slate-100 mb-8 mt-4">
                      <button 
                        onClick={() => setResultDisplayMode('content')}
                        className={`pb-4 text-sm font-black transition-all ${resultDisplayMode === 'content' ? 'border-b-4 border-brand-green text-brand-navy' : 'text-slate-400 opacity-50'}`}
                      >
                        طريقة العرض البصري
                      </button>
                      <button 
                        onClick={() => setResultDisplayMode('schema')}
                        className={`pb-4 text-sm font-black transition-all ${resultDisplayMode === 'schema' ? 'border-b-4 border-brand-green text-brand-navy' : 'text-slate-400 opacity-50'}`}
                      >
                        JSON-LD Schema (للمحركات)
                      </button>
                    </div>
                    
                    {resultDisplayMode === 'content' ? (
                      <div className="space-y-6">
                        <div className="p-8 border-r-8 border-brand-green bg-slate-50 rounded-2xl">
                          <p className="text-brand-navy font-black text-2xl mb-2">{result.example.q}</p>
                        </div>
                        <div className="grid gap-4">
                          {result.example.a.map((sentence: string, i: number) => (
                            <div key={i} className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6 p-8 bg-slate-50/50 rounded-2xl hover:bg-slate-100 transition-all border border-slate-100 group">
                              <div className="flex-shrink-0 min-w-[120px] px-4 py-2 bg-brand-navy text-white rounded-full text-[10px] font-black uppercase tracking-widest group-hover:bg-brand-green group-hover:text-brand-navy transition-colors text-center">
                                {result.example.labels[i]}
                              </div>
                              <p className="text-slate-700 font-bold text-lg leading-relaxed flex-grow">{sentence}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="p-6 bg-slate-900 rounded-3xl overflow-auto max-h-[400px]">
                          <pre className="text-brand-green/90 text-[10px] font-mono leading-relaxed">
                            {JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "FAQPage",
                              "mainEntity": [{
                                "@type": "Question",
                                "name": result.example.q,
                                "acceptedAnswer": {
                                  "@type": "Answer",
                                  "text": result.example.a.join(' ')
                                }
                              }]
                            }, null, 2)}
                          </pre>
                        </div>
                        <button 
                          className="w-full py-4 bg-brand-green text-brand-navy rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-brand-mint transition-colors"
                          onClick={() => {
                            navigator.clipboard.writeText(JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "FAQPage",
                              "mainEntity": [{
                                "@type": "Question",
                                "name": result.example.q,
                                "acceptedAnswer": {
                                  "@type": "Answer",
                                  "text": result.example.a.join(' ')
                                }
                              }]
                            }, null, 2));
                            alert('Schema copied to clipboard!');
                          }}
                        >
                          <Target className="h-4 w-4" /> نسخة كود Schema الجاهز
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* AI Agent & Prompting Tips */}
        <div className="mt-24 grid md:grid-cols-2 gap-8 mb-24">
          <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem]">
            <h4 className="text-lg font-black text-brand-navy mb-4 flex items-center gap-3">
              <Bot className="h-5 w-5 text-brand-green" />
              نصيحة المهندس: هندسة الأوامر
            </h4>
            <p className="text-sm text-slate-500 font-bold leading-relaxed">
              للحصول على أفضل النتائج، ابدأ بتعريف "الدور" (Role). بدلاً من قول "افعل كذا"، جرب: "أنت خبير سيو تقني في شركة فورتشن 500". هذا يغير اختيار الكلمات (Lexical Choice) جذرياً.
            </p>
          </div>
          <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem]">
            <h4 className="text-lg font-black text-brand-navy mb-4 flex items-center gap-3">
              <Target className="h-5 w-5 text-brand-green" />
              تجنب تلوث الذاكرة (Memory Pollution)
            </h4>
            <p className="text-sm text-slate-500 font-bold leading-relaxed">
              إذا بدأت النتائج تصبح عشوائية، استخدم زر "Memory Wipe". النماذج تميل للموافقة معك (Anti-Agree Mode مطلوب)؛ لا تخشَ من نقد مخرجاتها لإجبارها على تحسين الجودة.
            </p>
          </div>
        </div>

        {/* SEO Server Rendered Block */}
        {children}

      </div>
    </div>
  );
}
