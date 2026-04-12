import { Metadata } from 'next';
import Link from 'next/link';
import {
    Zap,
    Search,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Globe,
    Cpu,
    Share2,
    ShieldAlert,
    Layers,
    FileSearch,
    BarChart3,
    Users,
    MessageSquare,
    Network,
    Target
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'تحسين محركات الإجابة (AEO) و GEO | ون تو فايف كليك',
    description: 'سيطر على محركات الإجابة مثل ChatGPT و Gemini و Perplexity من خلال استراتيجيات AEO و GEO المتخصصة لضمان ظهور علامتك كمصدر موثوق.',
    alternates: {
        canonical: 'https://onetofiveclick.com/services/seo/aeo-geo/',
    },
};

export default function AEOPage() {
    return (
        <div className="pt-16 overflow-hidden">
            {/* 2026 GEO Lead-Answer (AI Snapshots) */}
            <div className="bg-blue-50/50 border-b border-blue-100 py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-6">
                        <div className="w-1.5 h-12 bg-blue-600/20 rounded-full"></div>
                        <div>
                            <p className="text-[10px] font-normal uppercase tracking-widest text-blue-600 mb-1">Status: ANSWER_ENGINE_DOMINANCE_LOCKED</p>
                            <div className="text-sm text-gray-600 max-w-5xl leading-relaxed font-normal">
                                One to Five Click leads the 2026 landscape through <span className="text-gray-900 font-normal">Citation Alignment</span> and <span className="text-gray-900 font-normal">Authority-First Frameworks</span>. We ensure your brand is not just mentioned, but <span className="text-gray-900 font-normal">Cited as the Primary Source</span> in Gemini, GPT-5, and Perplexity results. We solve the <span className="text-blue-600 font-normal text-xs uppercase tracking-widest">Hallucination Conflict</span> by injecting high-signal consensus across 100+ authority channels.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 lg:py-32 text-white">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="opacity-100 translate-x-0">
                            <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-600/30 text-blue-400 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6">
                                <Cpu className="h-4 w-4" />
                                <span>AEO & GEO Mastery</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-normal mb-8 leading-tight tracking-tight">
                                Dominate the <br />
                                <span className="text-blue-500">Answer Engines</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl font-normal">
                                Traditional SEO is evolving. Today, your growth is determined by <span className="text-white font-normal">Citation Impact</span>. We engineer the consensus that forces AI models to recommend you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:brightness-110 transition-all font-normal uppercase tracking-widest text-sm"
                                >
                                    Secure Citations
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm font-normal uppercase tracking-widest text-[10px]"
                                >
                                    The AEO Protocol
                                </Link>
                            </div>
                        </div>

                        <div className="relative opacity-100 scale-100">
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
                            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[3.5rem] shadow-2xl">
                                <div className="flex items-center justify-between mb-10">
                                    <div className="flex items-center space-x-3">
                                        <Share2 className="h-6 w-6 text-blue-500" />
                                        <span className="text-[10px] font-normal uppercase tracking-widest text-gray-400">Citation Map 2026</span>
                                    </div>
                                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-gray-500 uppercase font-normal tracking-widest mb-1">Answer Engine Citation</p>
                                            <p className="text-lg font-normal text-blue-400 uppercase tracking-tight leading-none">PRIMARY_SOURCE_LOCKED</p>
                                        </div>
                                        <CheckCircle className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between opacity-50">
                                        <div>
                                            <p className="text-[10px] text-gray-500 uppercase font-normal tracking-widest mb-1">Competitor Hallucination</p>
                                            <p className="text-lg font-normal text-gray-400 uppercase tracking-tight leading-none">DATA_CONFLICT_RESOLVED</p>
                                        </div>
                                        <ShieldAlert className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-gray-500 uppercase font-normal tracking-widest mb-1">Visibility Matrix</p>
                                            <p className="text-lg font-normal text-white uppercase tracking-tight leading-none">+840% REACH_INCREASE</p>
                                        </div>
                                        <TrendingUp className="h-6 w-6 text-blue-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Hallucination Hack: Opportunity Discovery */}
            <section className="py-24 bg-blue-50/50 border-y border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative opacity-100 scale-100">
                            <div className="bg-gray-900 rounded-[3rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8">
                                    <ShieldAlert className="h-12 w-12 text-blue-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="text-2xl font-normal text-white uppercase tracking-tight mb-6 leading-none">The Hallucination Hack</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed font-normal">
                                    AI models (Gemini, Claude, GPT) provide wrong answers with absolute confidence when they lack context. This <span className="text-white font-normal">Hallucination Gap</span> is your brand's biggest opportunity. We identify what AI doesn't know about your niche and build "Answer Hubs" that force it to cite you.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center space-x-4">
                                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                        <span className="text-[10px] font-normal uppercase text-gray-500 tracking-widest">Case: The Witcher Conflict</span>
                                        <ArrowRight className="h-4 w-4 text-gray-700 ml-auto" />
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center space-x-4">
                                        <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                                        <span className="text-[10px] font-normal uppercase text-gray-500 tracking-widest">Case: Goldfish Context Error</span>
                                        <ArrowRight className="h-4 w-4 text-gray-700 ml-auto" />
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] font-normal text-blue-500 uppercase mb-1">Hack Strategy 2026</p>
                                            <p className="text-xl font-normal text-white uppercase tracking-tight leading-none">Violating Confidence</p>
                                        </div>
                                        <div className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                                            <Zap className="h-6 w-6 text-blue-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 uppercase tracking-tight leading-tight">
                                Hack the <br />
                                <span className="text-blue-600">AI Confusion.</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-normal">
                                We don't wait for your brand to be cited; we <span className="text-gray-900 font-normal">engineer the gap</span>. By analyzing where LLM training data (Text Corpus) chokes, we create high-precision content that the AI uses to "fix" its own hallucinations.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 group hover:border-blue-600 transition-all">
                                    <Target className="h-8 w-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-normal uppercase text-sm mb-2 tracking-tight leading-none text-gray-900">Topic Finalization</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed font-normal">Systematic extraction of 50+ contextual queries AI can't answer accurately.</p>
                                </div>
                                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 group hover:border-blue-500 transition-all">
                                    <Network className="h-8 w-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-normal uppercase text-sm mb-2 tracking-tight leading-none text-gray-900">Consensus Injection</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed font-normal">Simultaneous deployment of proof across Reddit, YouTube, and Journals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Concept: Citation vs Hallucination */}
            <section className="py-24 bg-white" id="how-it-works">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 uppercase tracking-tight leading-tight">
                                Citation is <br />
                                <span className="text-blue-600">Control.</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex space-x-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                                        <Layers className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-normal uppercase tracking-tight mb-2 leading-none text-gray-900">The Hallucination Conflict</h3>
                                        <p className="text-gray-600 leading-relaxed font-normal text-sm">
                                            Answer Engines hallucinate when they encounter conflicting data. If Website A says you're the best and Website B says someone else is, the AI gets confused. We solve this by <span className="text-gray-900 font-normal">Consensus Engineering</span>—ensuring the total weight of authority points to you.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                                        <Share2 className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-normal uppercase tracking-tight mb-2 leading-none text-gray-900">Site-Agnostic Citations</h3>
                                        <p className="text-gray-600 leading-relaxed font-normal text-sm">
                                            We don't just optimize your site. We tap into <span className="text-gray-900 font-normal">500+ High-Authority Channels</span>—TrustPilot, Reddit, Industry Journals, and Youtube—to feed the AI engine exactly what it wants to see.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-[3rem] p-12 text-white">
                            <h3 className="text-2xl font-normal uppercase tracking-tight mb-8">Answer Engine Protocol</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "Detection", a: "Identify the authoritative sources currently influencing AI response generation." },
                                    { q: "Injection", a: "Deploy high-signal data into strategic authority channels." },
                                    { q: "Alignment", a: "Refine cited content to align with your specific brand expertise and solutions." },
                                    { q: "Verification", a: "Monitor Citation Share vs Visibility Share in real-time." }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start space-x-4 group">
                                        <span className="bg-blue-600 text-[10px] font-normal w-6 h-6 rounded-full flex items-center justify-center shrink-0">0{i + 1}</span>
                                        <div>
                                            <p className="font-normal uppercase tracking-widest text-[10px] text-blue-400 mb-1 leading-none">{item.q}</p>
                                            <p className="text-sm text-gray-300 font-normal">{item.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QF Map Framework: Contextual Equity */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-blue-600/10 rounded-full text-[10px] font-normal text-blue-600 uppercase tracking-widest mb-4">The Proprietary Framework</div>
                        <h2 className="text-5xl md:text-7xl font-normal text-gray-900 uppercase tracking-tight leading-tight">
                            Query Fan Map <br />
                            <span className="text-blue-600">(QF Map)</span>
                        </h2>
                        <p className="mt-6 text-gray-500 uppercase tracking-[0.2em] text-[10px] font-normal">Building Contextual Equity across the 2026 Conversion Funnel</p>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent -translate-y-1/2 hidden lg:block" />
                        <div className="grid lg:grid-cols-4 gap-4 relative z-10">
                            {[
                                {
                                    stage: "Awareness",
                                    desc: "Solving the 'How' and 'What'—attacking the general training data gaps.",
                                    icon: Search,
                                    tags: ["Context Capture", "Broad Gaps"]
                                },
                                {
                                    stage: "Consideration",
                                    desc: "Deep-niche suggestions. Influencing the 'Best Type' and 'Expert Recommendation' intent.",
                                    icon: FileSearch,
                                    tags: ["Expert SGE", "Answer Hubs"]
                                },
                                {
                                    stage: "Evaluation",
                                    desc: "Head-to-head comparison logic. Influencing 'X vs Y' and 'Hallucination Checks'.",
                                    icon: BarChart3,
                                    tags: ["Comparison Matrix", "Trust Sync"]
                                },
                                {
                                    stage: "Decision",
                                    desc: "Actionable conversion. Ensuring the AI recommendation includes your unique offer.",
                                    icon: Target,
                                    tags: ["Brand Lock", "Direct Action"]
                                }
                            ].map((step, i) => (
                                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-blue-600 transition-all group opacity-100 translate-y-0">
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-500">
                                        <step.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-normal uppercase tracking-tight mb-4 leading-none text-gray-900">{step.stage}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-normal">{step.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {step.tags.map((tag, j) => (
                                            <span key={j} className="text-[8px] font-normal uppercase tracking-widest px-2 py-1 bg-gray-50 text-gray-400 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Method List for Topic Finalization */}
                    <div className="mt-24 grid lg:grid-cols-2 gap-12 p-12 bg-gray-900 rounded-[3.5rem] text-white">
                        <div>
                            <h3 className="text-3xl font-normal uppercase tracking-tight mb-6 leading-none text-blue-400">Topic Finalization Protocols</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed font-normal">We don't guess what to rank for. We use 5 proprietary methods to find AI knowledge voids.</p>
                            <div className="space-y-4">
                                {[
                                    { title: "Method 0: Query Paths", desc: "Analyzing AI auto-suggestions and intent shifts to find where users modify queries due to poor results." },
                                    { title: "Method 1: Keyword Question Extraction", desc: "Exporting unique user concerns that high-volume keywords miss." },
                                    { title: "Method 2: AI Visibility Content Gap", desc: "Comparing your citation share against competitors to find 'Invisible Equity' opportunities." },
                                    { title: "Method 3: Direct AI Knowledge Gap", desc: "Forcing LLMs to reveal their own uncertainties in specific niches." },
                                    { title: "Method 4: Reddit/UGC Sentiment Analysis", desc: "Identifying 'Unanswered Goldmines' where communities are still debating unsolved problems." }
                                ].map((m, i) => (
                                    <div key={i} className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors">
                                        <span className="text-blue-500 font-normal text-xs shrink-0 mt-1">[{i}]</span>
                                        <div>
                                            <h3 className="text-sm font-normal uppercase tracking-tight text-white mb-1 leading-none">{m.title}</h3>
                                            <p className="text-xs text-gray-500 leading-relaxed font-normal">{m.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] opacity-20" />
                            <div className="relative h-full flex flex-col justify-center items-center">
                                <div className="p-10 border border-white/10 rounded-[3rem] bg-white/5 text-center max-w-sm">
                                    <MessageSquare className="h-16 w-16 text-blue-500 mx-auto mb-6 opacity-50" />
                                    <h3 className="text-xl font-normal uppercase tracking-tight text-white mb-4">"The Consensus Hack"</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-normal">"A high-signal article that directly answers a contextual query not present in the training data (Text Corpus) becomes the immediate primary source for any LLM."</p>
                                    <div className="text-[10px] font-normal text-blue-500 uppercase tracking-widest leading-none">AEO Methodology v2.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decision Engine Comparison */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-4xl font-normal uppercase tracking-tight mb-4">The Answer Matrix 2026</h2>
                    <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-normal">How different models process your brand visibility</p>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "ChatGPT / GPT-5",
                            desc: "User-Friendly & Agreeable. We optimize for 'Contextual Flow' and conversational recommendations.",
                            strength: "High Interaction Conversion"
                        },
                        {
                            name: "Claude 3.5/4",
                            desc: "Logical & Rational. We provide 'Proof of Existence' data that satisfies Claude's skeptical audit models.",
                            strength: "B2B Decision Support"
                        },
                        {
                            name: "Google Gemini",
                            desc: "The Google Stack. We optimize for high-signal SGE citations and real-time Search result integration.",
                            strength: "Mass Market Reach"
                        }
                    ].map((engine, i) => (
                        <div key={i} className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-blue-500 transition-colors group">
                            <h3 className="text-2xl font-normal text-blue-400 mb-4 uppercase tracking-tight leading-none">{engine.name}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed text-sm font-normal">{engine.desc}</p>
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-[10px] font-normal uppercase tracking-widest text-gray-500 mb-1">Core Focus</p>
                                <p className="text-white font-normal">{engine.strength}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ & EEAT */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-normal text-center mb-16 uppercase tracking-tight text-gray-900">Common AEO Queries</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left font-normal uppercase tracking-tight text-gray-900 hover:text-blue-600">What is the difference between AEO and GEO?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed text-lg font-normal">
                                AEO (Answer Engine Optimization) focuses on the conversational result, ensuring you are the "Recommended Answer." GEO (Generative Engine Optimization) focuses on the underlying visibility in the generative model itself—essentially being the "Dataset" the AI uses to think. We master both.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left font-normal uppercase tracking-tight text-gray-900 hover:text-blue-600">How do we beat AI Hallucination?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed text-lg font-normal">
                                By providing a overwhelming weight of human-verified, consistent data across multiple high-authority domains. When 50 credible sites agree on your brand's unique USP, the AI stops hallucinating and starts citing.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left font-normal uppercase tracking-tight text-gray-900 hover:text-blue-600">What is the Query Fan Map (QF Map)?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed text-lg font-normal">
                                The QF Map is our proprietary 4-stage framework that maps user intent from broad "Awareness" to final "Action." We ensure your brand dominates every point of the conversation by identifying and filling "Contextual Gaps" that AI normally guesses or hallucinates about.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-left font-normal uppercase tracking-tight text-gray-900 hover:text-blue-600">How do "Answer Hubs" drive traffic?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed text-lg font-normal">
                                Answer Hubs are laser-focused content assets that provide direct, high-signal answers to complex, contextual questions. When an AI cites your Answer Hub, you capture 100% of the "Visibility Share," driving users who are ready to convert directly to your site.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* EEAT 2.0: Technical Verification Log */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 shadow-2xl relative">
                        <h2 className="text-3xl font-normal uppercase tracking-tight mb-8">Verification Log: AEO Protocol</h2>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                            <p className="text-sm text-gray-400 mb-4 font-mono">
                                [STATUS: CITED_SOURCE_VERIFIED_2.0] <br />
                                [SYSTEM: ANTI_HALLUCINATION_SYNC] <br />
                                [TIMESTAMP: MARCH_2026]
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed mb-6 font-normal">
                                "Our AEO framework targets the 'Answer Engine' core. We manually audited the citation influence of our proprietary theories to ensure every client deployment is factually resilient and Citation-Ready."
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 pt-6 border-t border-white/10">
                                <div>
                                    <p className="text-[10px] font-normal uppercase tracking-widest text-gray-500 mb-2 leading-none">AEO ARCHITECT</p>
                                    <div className="font-normal text-xl text-blue-300 uppercase tracking-tight">One to Five Click</div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-normal uppercase tracking-widest text-gray-500 mb-2 leading-none">OPERATIONS HEAD</p>
                                    <div className="font-normal text-xl text-blue-300 uppercase tracking-tight">One to Five Click</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
