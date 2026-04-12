'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, BarChart3, Rocket, Target, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "كيف تقيم ظهور مشروعك حالياً في نتائج بحث جوجل المحلية (خرائط جوجل)؟",
    options: [
      { text: "غير متواجد تماماً", score: 0 },
      { text: "متواجد ولكن في مراكز متأخرة", score: 10 },
      { text: "أظهر أحياناً في النتائج الأولى", score: 20 },
      { text: "مسيطر تماماً على منطقتي", score: 30 }
    ]
  },
  {
    id: 2,
    question: "هل تستخدم أنظمة أتمتة لمتابعة العملاء المحتملين (CRM)؟",
    options: [
      { text: "لا، نعتمد على الطرق اليدوية", score: 0 },
      { text: "نستخدم إكسل أو جداول بيانات", score: 10 },
      { text: "لدينا نظام ولكن لا نستخدمه بكفاءة", score: 20 },
      { text: "نعم، كل شيء مؤتمت بدقة", score: 30 }
    ]
  },
  {
    id: 3,
    question: "ما هو معدل تحول الزوار إلى عملاء فعليين حالياً؟",
    options: [
      { text: "أقل من 1%", score: 5 },
      { text: "بين 1% و 5%", score: 15 },
      { text: "أكثر من 5%", score: 30 },
      { text: "لا تتوفر لدينا أرقام دقيقة", score: 0 }
    ]
  }
];

export default function DigitalMaturityQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (score: number) => {
    setTotalScore(totalScore + score);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setTotalScore(0);
    setIsFinished(false);
  };

  const getResultLabel = () => {
    if (totalScore <= 30) return { label: "بـداية الـتحول", color: "text-red-500", desc: "أعمالك تحتاج إلى أساس رقمي صحيح للبدء في المنافسة." };
    if (totalScore <= 60) return { label: "مـنمـو رقمـياً", color: "text-amber-500", desc: "لديك حضور جيد، ولكنك تفقد الكثير من الفرص بسبب غياب الأتمتة." };
    return { label: "قـائد رقبمـي", color: "text-brand-green", desc: "أنت في المقدمة! يمكننا مساعدتك في توسيع نطاق السيطرة بشكل أكبر." };
  };

  const result = getResultLabel();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-20 text-right">
      <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-2 bg-slate-50">
           <motion.div 
             className="h-full bg-brand-green"
             initial={{ width: 0 }}
             animate={{ width: isFinished ? '100%' : `${((currentStep + 1) / questions.length) * 100}%` }}
           />
        </div>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="relative z-10"
            >
              <div className="flex justify-between items-center mb-12 flex-row-reverse">
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    السؤال {currentStep + 1} من {questions.length}
                 </div>
                 <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-green">
                    <BarChart3 className="h-6 w-6" />
                 </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-12 leading-tight tracking-tighter">
                {questions[currentStep].question}
              </h2>

              <div className="grid gap-4">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option.score)}
                    className="p-6 text-right border-2 border-slate-50 bg-slate-50/50 rounded-2xl hover:border-brand-green hover:bg-white transition-all group flex items-center justify-between flex-row-reverse"
                  >
                    <span className="text-lg font-bold text-brand-navy group-hover:text-brand-navy">{option.text}</span>
                    <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                       <CheckCircle className="h-4 w-4 text-white opacity-0 group-hover:opacity-100" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 mb-8 border border-slate-100">
                 <Rocket className="h-10 w-10 text-brand-green" />
              </div>
              <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-2">تقييم النضج الرقمي</h3>
              <div className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter ${result.color}`}>
                {totalScore}%
              </div>
              <h4 className="text-3xl font-black text-brand-navy mb-4 tracking-tight">{result.label}</h4>
              <p className="text-slate-500 font-bold mb-12 max-w-lg mx-auto leading-relaxed">
                {result.desc} لقد قمنا بتحليل بياناتك الأولية. هل أنت مستعد لاستلام تقرير كامل مجاني لتحسين أدائك؟
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <Link
                   href={`https://wa.me/966XXXXXXXXX?text=مرحباً، لقد حصلت على درجة ${totalScore}% في تقييم النضج الرقمي وأريد استلام التقرير الكامل.`}
                   className="bg-brand-green text-brand-navy px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-green/20 hover:scale-105 transition-all"
                 >
                   استلم تقريرك عبر واتساب
                 </Link>
                 <button 
                  onClick={resetQuiz}
                  className="text-slate-400 font-black text-[10px] uppercase tracking-widest border-b-2 border-transparent hover:border-slate-200 transition-all py-2"
                >
                  إعادة الاختبار
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
