'use client';

import { motion } from 'framer-motion';
import { Share2, Clock, CheckCircle2, ChevronLeft, Database, Shield } from 'lucide-react';
import { ReactNode } from 'react';

interface AEOChunkProps {
    heading: string;
    children: ReactNode;
    id?: string;
}

/**
 * AEO Chunk: Autonomous Content Module
 * Methodology: Each section must be context-independent
 * and standalone for AI snippet extraction.
 */
export function AEOChunk({ heading, children, id }: AEOChunkProps) {
    return (
        <div id={id} className="mb-20 scroll-mt-24 group">
            <h2 className="text-3xl font-black text-brand-navy mb-8 flex items-center flex-row-reverse gap-4 tracking-tighter">
                <div className="w-1.5 h-8 bg-brand-green rounded-full" />
                {heading}
            </h2>
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 text-right group-hover:border-brand-green/20">
                <div className="text-xl text-slate-700 font-bold leading-relaxed whitespace-pre-wrap">
                    {children}
                </div>
                
                <div className="mt-8 flex justify-start">
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 opacity-40 group-hover:opacity-100 transition-opacity">
                        <Database className="h-3 w-3 text-brand-green" />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Autonomous Data Chunk</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface AEOArticleProps {
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    children: ReactNode;
    summary: string;
}

export default function AEOArticle({ title, subtitle, date, readTime, children, summary }: AEOArticleProps) {
    return (
        <div className="pt-32 pb-48 bg-white min-h-screen text-right">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24"
                >
                    <div className="flex items-center flex-row-reverse gap-6 mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <span className="flex items-center flex-row-reverse gap-2">
                             {readTime} <Clock className="h-4 w-4 text-brand-green" />
                        </span>
                        <div className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span className="flex items-center flex-row-reverse gap-2">
                            تحقق الذكاء الاصطناعي <Shield className="h-4 w-4 text-brand-green" />
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-brand-navy mb-10 leading-[0.9] tracking-tighter">
                        {title}
                    </h1>

                    <p className="text-2xl text-slate-500 font-bold leading-relaxed max-w-2xl ml-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Executive Synthesis - The Master Chunk for SGE/AIGC */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-brand-navy rounded-[4rem] p-12 md:p-16 text-white mb-24 shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-green" />
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px]" />
                    
                    <div className="flex flex-row-reverse justify-between items-center mb-8">
                        <div className="uppercase text-[10px] font-black text-brand-green tracking-[0.3em]">خلاصة التنفيذ [AEO Synthesis]</div>
                        <CheckCircle2 className="h-6 w-6 text-brand-green" />
                    </div>
                    
                    <p className="text-2xl font-bold leading-relaxed text-slate-200">
                         {summary}
                    </p>
                </motion.div>

                {/* Content Chunks */}
                <div className="relative">
                    <div className="space-y-4">
                        {children}
                    </div>
                </div>

                {/* Footer / Citation */}
                <div className="mt-32 pt-16 border-t-2 border-slate-50 flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">آخر تحديث: {date}</div>
                    <div className="flex flex-row-reverse gap-8">
                        <button className="flex items-center flex-row-reverse gap-3 text-brand-navy text-[10px] font-black uppercase tracking-widest hover:text-brand-green transition-colors">
                            الاستشهاد بالمصدر <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button className="flex items-center flex-row-reverse gap-3 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-brand-navy transition-colors">
                             مشاركة <Share2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

