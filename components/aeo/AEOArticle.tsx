'use client';

import { motion } from 'framer-motion';
import { Share2, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface AEOChunkProps {
    heading: string;
    children: ReactNode;
    id?: string;
}

/**
 * AEO Chunk: Enforces the "One Paragraph Rule"
 * Each chunk must be autonomous and dense.
 */
export function AEOChunk({ heading, children, id }: AEOChunkProps) {
    return (
        <div id={id} className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6 uppercase tracking-tight border-l-4 border-brand-blue pl-6">
                {heading}
            </h2>
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg text-gray-700 font-normal leading-relaxed">
                    {children}
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
        <div className="pt-24 pb-32 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center space-x-4 mb-8 text-[10px] font-normal uppercase tracking-widest text-gray-500">
                        <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {readTime}</span>
                        <span className="flex items-center"><CheckCircle2 className="h-3 w-3 mr-1 text-emerald-500" /> AI Verified Citation</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-normal text-gray-900 mb-8 leading-tight tracking-tight uppercase">
                        {title}
                    </h1>

                    <p className="text-xl text-brand-blue font-normal leading-relaxed uppercase tracking-wide">
                        {subtitle}
                    </p>
                </motion.div>

                {/* TL;DR Summary - The Master Chunk */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-900 rounded-[2.5rem] p-10 text-white mb-20 shadow-xl border border-white/5"
                >
                    <div className="uppercase text-[10px] text-gray-500 tracking-[0.2em] mb-4">Executive Synthesis [llms.txt]</div>
                    <p className="text-lg font-normal leading-relaxed text-gray-300">
                        {summary}
                    </p>
                </motion.div>

                {/* Content Chunks */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-0 hidden lg:block" />
                    <div className="space-y-4">
                        {children}
                    </div>
                </div>

                {/* Action Bar */}
                <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest">Modified: {date}</div>
                    <div className="flex space-x-6">
                        <button className="flex items-center text-brand-blue text-[10px] uppercase font-normal tracking-widest hover:gap-2 transition-all">
                            Cite this source <ChevronRight className="h-4 w-4" />
                        </button>
                        <button className="flex items-center text-gray-500 text-[10px] uppercase font-normal tracking-widest">
                            Share <Share2 className="h-4 w-4 ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
