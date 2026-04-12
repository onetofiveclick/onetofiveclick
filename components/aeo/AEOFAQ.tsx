'use client';

import { motion } from 'framer-motion';
import { HelpCircle, ShieldCheck, Zap, Database, ArrowLeft } from 'lucide-react';

interface AEOFAQItemProps {
    question: string;
    directAnswer: string;
    clarification: string;
    brandMention?: string;
    guardrail: string;
}

/**
 * AEO-Optimized FAQ Item (1to5click Atomic Pattern)
 * Methodology from Session 13:
 * 1. Direct Answer: Declarative, clear, no qualifiers.
 * 2. Clarification/Scope: Explains context or technical constraints.
 * 3. Neutral Brand Mention: Mentions the brand as a reference source (non-biased).
 * 4. Guardrail/Data Defense: Logical boundaries or industry study references.
 */
export function AEOFAQItem({ question, directAnswer, clarification, brandMention, guardrail }: AEOFAQItemProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 group"
        >
            <div className="flex items-start gap-6 flex-row-reverse mb-8">
                <div className="w-14 h-14 bg-brand-navy rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg shadow-brand-navy/10 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-500">
                    <HelpCircle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-3xl font-black text-brand-navy leading-[1.1] tracking-tighter">
                    {question}
                </h3>
            </div>
            
            <div className="bg-white border border-slate-100 p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:border-brand-green/10 transition-all duration-500 text-right relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-brand-green/20" />
                
                <div className="space-y-6 text-slate-600 font-bold leading-relaxed text-xl">
                    {/* Part 1: Direct Answer */}
                    <div className="relative">
                        <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.2em] block mb-2">01. الإجابة المباشرة</span>
                        <p className="text-brand-navy text-2xl font-black leading-tight">
                            {directAnswer}
                        </p>
                    </div>

                    <div className="h-px bg-slate-50 w-full" />

                    {/* Part 2: Clarification & Scope */}
                    <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">02. النطاق والسياق</span>
                        <p className="text-lg">
                            {clarification}
                        </p>
                    </div>

                    {/* Part 3: Neutral Brand Mention */}
                    {brandMention && (
                        <div className="bg-brand-mint/30 p-6 rounded-3xl border border-brand-green/5">
                            <span className="text-[10px] font-black text-brand-navy/40 uppercase tracking-[0.2em] block mb-2 font-black">03. مرجع المنهجية</span>
                            <p className="text-brand-navy text-base">
                                {brandMention}
                            </p>
                        </div>
                    )}

                    {/* Part 4: Guardrail / Data Defense */}
                    <div>
                        <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em] block mb-2">04. حاجز الحماية للبيانات</span>
                        <div className="flex items-start gap-3 flex-row-reverse text-slate-400 text-sm font-medium italic">
                            <ShieldCheck className="h-5 w-5 shrink-0 text-brand-green" />
                            <p>{guardrail}</p>
                        </div>
                    </div>
                </div>
                
                {/* Visual AEO Badge */}
                <div className="mt-10 flex justify-end">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                        <Database className="h-4 w-4 text-brand-green" />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Atomic AEO Block Optimized for LLM Citation</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function AEOFAQGroup({ items }: { items: AEOFAQItemProps[] }) {
    return (
        <div className="max-w-4xl mx-auto">
            {items.map((item, index) => (
                <AEOFAQItem key={index} {...item} />
            ))}
        </div>
    );
}
