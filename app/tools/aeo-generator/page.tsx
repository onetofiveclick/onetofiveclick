'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, ShieldCheck, ArrowRight, BrainCircuit, Loader2, CheckCircle2, Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function AEOGeneratorTool() {
  const [query, setQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<null | any>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsGenerating(true);
    setResult(null);
    setCopied(false);

    // Simulate API call and Algorithmic processing
    setTimeout(() => {
      setResult({
        coreQuery: query,
        fanOuts: [
          `${query} for beginners vs. experienced buyers`,
          `Maintenance and hidden costs of ${query}`,
          `Long-term lifespan/durability of ${query}`,
          `Local availability and sizing requirements for ${query}`,
          `${query} vs top alternatives (Compare features)`,
          `Specific situational context (e.g., if you have kids)`
        ],
        promptTemplate: `I want you to act as an SEO and AEO Expert and help me craft fan-out queries on behalf of our single query.\n\nIf my main query is: "${query}"\n\nPlease construct a comprehensive "Fan-Out Map". Break this down into 6-8 sub-queries covering beginner needs, differences in variants, location-specific data, maintenance, lifespan, and contextual relevance (e.g., kids/small spaces).\n\nOutput only the resulting queries.`,
        chunkingAdvice: "Do not spread the answer across 5 paragraphs. Write ONE autonomous, highly dense paragraph for each of the sub-queries above. The paragraph must be crisp, complete, and survive entirely on its own logically without the rest of the article.",
        filters: [
          { name: "Consistency (Managed Assets)", desc: "Match claims across your Site, Google Business, and Socials. (e.g., Don't say 'Premium Freshwater Fish' on your site but 'General Pet Shop' on your GMB)." },
          { name: "Consensus (Unmanaged Assets)", desc: "Audit Reddit and Trustpilot. If contradictory reviews appear, neutralize the gap by replying strategically to restore consensus." },
          { name: "Contextual Inject", desc: "Inject specific scenarios. E.g., 'If you have a 5-year-old child, Butterfly Koi is best because it survives accidental overfeeding...'" }
        ]
      });
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    if (result?.promptTemplate) {
      navigator.clipboard.writeText(result.promptTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-24 pb-32 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6 border border-blue-100">
            <BrainCircuit className="h-4 w-4" />
            <span>Practical AEO Implementation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6 uppercase tracking-tight">
            AEO <span className="text-blue-600">Fan-Out</span> Engine.
          </h1>
          <p className="text-xl text-gray-500 font-normal max-w-2xl mx-auto">
            Generate actionable Fan-Out Prompts and structuring guidelines so your content team can optimize directly for Answer Engines.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 mb-12 relative z-10">
          <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter a broad query (e.g., 'Which goldfish should I buy?')"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-normal text-lg transition-all"
              required
            />
            <button
              type="submit"
              disabled={isGenerating}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-normal uppercase tracking-widest text-sm hover:brightness-110 transition-all flex items-center justify-center disabled:opacity-50 min-w-[200px]"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Processing
                </>
              ) : (
                <>
                  Run Practical AEO <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Area */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-8"
            >

              {/* Step 1: Query Fan-Out */}
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Network className="w-48 h-48" />
                </div>
                <h2 className="text-2xl font-normal mb-2 uppercase tracking-tight text-gray-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0">1</span>
                  Query Fan-Out Map & Prompt
                </h2>
                <p className="text-gray-500 mb-8 font-normal text-sm">
                  The LLM searches for the semantic overlap of sub-queries. Use this precise prompt in ChatGPT/Claude to brainstorm your article headers.
                </p>

                {/* Prompt Box */}
                <div className="mb-8 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gray-900 rounded-xl p-6 ring-1 ring-gray-900/5 leading-none flex items-start justify-between">
                    <div className="space-y-2 flex-1 mr-4">
                      <div className="text-[10px] text-blue-400 font-normal uppercase tracking-widest mb-3">ChatGPT / Claude Brainstorming Prompt</div>
                      <p className="text-gray-200 font-normal leading-relaxed text-sm whitespace-pre-wrap">{result.promptTemplate}</p>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-colors flex-shrink-0"
                      title="Copy prompt"
                    >
                      {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5 text-gray-300" />}
                    </button>
                  </div>
                </div>

                <h3 className="text-[10px] text-gray-400 font-normal uppercase tracking-widest mb-4">Example Subject Sub-Intents for "{result.coreQuery}":</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {result.fanOuts.map((subQ: string, i: number) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start hover:border-blue-200 transition-colors">
                      <ArrowRight className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-normal text-sm leading-tight">{subQ}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Chunking */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-10 rounded-[2rem] shadow-sm text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Database className="w-48 h-48 text-white" />
                </div>
                <h2 className="text-2xl font-normal mb-2 uppercase tracking-tight flex items-center relative z-10">
                  <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0">2</span>
                  Autonomous Chunking Execution
                </h2>
                <p className="text-blue-200 mb-8 font-normal text-sm relative z-10">
                  How your writing team must format the content to get cited.
                </p>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 relative z-10 flex gap-6 items-start">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-normal text-lg uppercase tracking-tight mb-2">The "Smart Librarian" Rule</h4>
                    <p className="font-normal text-blue-100 leading-relaxed text-sm mb-4">
                      {result.chunkingAdvice}
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs text-blue-200 font-normal leading-relaxed">
                      <strong className="text-white tracking-widest uppercase">The Analogy: </strong>
                      If a user asks "how much to feed a goldfish?", they don't want a 200-page book. An Answer Engine acts like a smart librarian—it remembers the EXACT paragraph (chunk) that has the answer and cites just that.
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Filters */}
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
                <h2 className="text-2xl font-normal mb-2 uppercase tracking-tight text-gray-900 flex items-center">
                  <span className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0">3</span>
                  Retrieval Filters (Final Check)
                </h2>
                <p className="text-gray-500 mb-8 font-normal text-sm">
                  Before citing your paragraph, the AI verifies your brand using these filters.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {result.filters.map((filter: any, i: number) => (
                    <div key={i} className="flex flex-col p-6 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:border-indigo-200 hover:shadow-sm transition-all group">
                      <ShieldCheck className="h-8 w-8 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-normal text-gray-900 uppercase tracking-tight mb-2 leading-tight">{filter.name}</h4>
                      <p className="text-gray-500 font-normal text-xs flex-1 leading-relaxed">{filter.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
