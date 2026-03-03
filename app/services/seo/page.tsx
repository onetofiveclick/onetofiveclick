'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  BarChart,
  CheckCircle,
  ArrowRight,
  Globe,
  Target,
  Zap,
  Users,
  Layout,
  Cpu,
  Link as LinkIcon
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: 'BID Command-Query Framework',
    description: 'We vet keywords for commercial intent and utilize GSC regex filters to capture long-form "AI Mode" command queries that legacy tools miss.',
    icon: Target,
    href: '/services/seo'
  },
  {
    title: 'Omni-Channel Visibility',
    description: 'Customers search on YouTube, Tik Tok, and Perplexity. We distribute optimized assets across LLM-friendly platforms like LinkedIn and Reddit.',
    icon: Globe,
    href: '/services/seo'
  },
  {
    title: 'Topic Domination Protocols',
    description: 'We go a mile deep on single topics, exhausting both commercial and informational clusters to force topical authority in AI training data.',
    icon: Zap,
    href: '/services/seo'
  },
  {
    title: 'Schema & Entity Calibration',
    description: 'We deploy advanced Organization and Article schema to make your brand entity unambiguous to ChatGPT and Gemini knowledge graphs.',
    icon: Cpu,
    href: '/services/seo'
  },
  {
    title: 'AI-Proof Tool SEO',
    description: 'Interactive calculators and generators are immune to AI click-loss. We build niche tools that force user engagement and clicks.',
    icon: Layout,
    href: '/services/seo'
  },
  {
    title: 'AI Revenue Attribution',
    description: 'AI may drive less traffic, but it drives up to 11% higher B2B revenue. We track AI-driven conversions and citations, not just rankings.',
    icon: TrendingUp,
    href: '/services/seo'
  },
  {
    title: 'Authoritative Entity Signals',
    description: 'We stack expert bios, credentials, and persistent headshot/bio mapping across platforms to reduce "Trust Risk" for AI recommenders.',
    icon: Users,
    href: '/services/seo'
  },
  {
    title: 'PR Sentiment Engine',
    description: 'We deploy strategic press releases to seed AI training sets with positive brand signals and localized entity associations.',
    icon: Zap,
    href: '/services/seo'
  },
  {
    title: 'Conversational Query Benchmarking',
    description: 'We convert keyword seeds into synthetic, "Dissertation-style" prompts to test and prove your brand visibility in AI search modes.',
    icon: Users,
    href: '/services/seo'
  },
  {
    title: 'Goliath Strategy (Comparison Piggybacking)',
    description: 'We place your brand in direct "3-way comparisons" with industry giants. This forces AI engines to categorize you as a relevant peer and peer-group alternative.',
    icon: Target,
    href: '/services/seo'
  },
  {
    title: 'YouTube-RAG Stacking',
    description: 'YouTube is the #1 cited domain for AI. We optimize your video transcripts to seed verbal "Brand Mentions" directly into the LLM training sets.',
    icon: Cpu,
    href: '/services/seo'
  },
  {
    title: 'Conversational FUD Scraping',
    description: 'We use AI to extract "Fears, Uncertainties, and Doubts" from your real sales calls. This allows us to answer questions traditional keyword tools miss.',
    icon: Target,
    href: '/services/seo'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Omni-Channel Audit',
    description: 'We map query fan-out in Perplexity and extract People Also Ask (PAA) data to identify exactly what users ask AI engines.'
  },
  {
    number: '02',
    title: 'Entity & Review Sync',
    description: 'We build "Review Diversity" across 3-5 high-authority platforms (Yelp, Angie\'s, Reddit) to ensure LLMs verify your brand as the top choice.'
  },
  {
    number: '03',
    title: 'LLM Retrieval Seeding',
    description: 'Deploying optimized video transcripts to YouTube and articles to LinkedIn to be picked up by RAG (Retrieval Augmented Generation).'
  },
  {
    number: '04',
    title: 'Local Entity Calibration',
    description: 'Deep-syncing your GBP category, review diversity, and localized landing pages to capture 90% of local AI search intent.'
  },
  {
    number: '05',
    title: 'AI Citation Outreach',
    description: 'Identifying and securing mentions in the exact third-party sources (listicles/directories) cited by LLMs to force recommendation.'
  }
];

const faqs = [
  {
    question: 'What is SEO and why is it important?',
    answer: 'SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results pages (SERPs). It is crucial because higher rankings lead to increased visibility, more organic traffic, and ultimately, more conversions and revenue for your business.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'AI "Entity Maturity" typically takes 30-90 days as new training data is crawled. We focus on "Rapid-Citation Sprints" to get your brand recommended in ChatGPT and Perplexity as quickly as possible.'
  },
  {
    question: 'What is the difference between On-Page and Off-Page SEO?',
    answer: 'On-Page SEO involves optimizing elements within your website (content, meta tags, site speed), while Off-Page SEO focuses on external factors like building backlinks and social signals to improve your site\'s authority.'
  },
  {
    question: 'Do I need SEO if I have a small business?',
    answer: 'Absolutely. Local SEO is particularly powerful for small businesses, helping you attract customers in your specific geographic area who are actively searching for your products or services.'
  },
  {
    question: 'How much does SEO cost?',
    answer: 'SEO costs vary depending on the scope of work, competition, and your specific goals. We offer customized packages tailored to your budget and needs, ensuring you get the best ROI.'
  },
  {
    question: 'Can you guarantee #1 rankings?',
    answer: 'In 2026, #1 rankings are just one part of the puzzle. We guarantee **"AI Visibility Share"**—ensuring your brand is the top-cited recommendation in ChatGPT, Perplexity, and AI Overviews. We focus on being the "Preferred Entity" for your niche.'
  },
  {
    question: 'What are keywords and how do you choose them?',
    answer: 'Keywords are the terms and phrases people type into search engines. We use advanced tools and research to identify high-value keywords with good search volume and relevance to your business.'
  },
  {
    question: 'What is a backlink and why does it matter?',
    answer: 'A backlink is a "Retrieval Signal." For AI search engines, a link from an authoritative site (like a niche news site or a high-DR LinkedIn article) signals that your brand is a trusted data source for RAG. We prioritize **Brand Mentions** alongside high-quality links.'
  },
  {
    question: 'Is SEO a one-time process?',
    answer: 'No, SEO is an ongoing process. Search algorithms change frequently, and competitors are always working to outrank you. Continuous optimization is necessary to maintain and improve your rankings.'
  },
  {
    question: 'How does mobile-friendliness affect SEO?',
    answer: 'Google uses mobile-first indexing, meaning it primarily looks at the mobile version of your site for ranking. A responsive, mobile-friendly design is essential for SEO success.'
  },
  {
    question: 'What is local SEO?',
    answer: 'Local SEO focuses on optimizing your online presence to attract more business from relevant local searches. This includes optimizing your Google Business Profile and ensuring NAP (Name, Address, Phone) consistency.'
  },
  {
    question: 'How do you measure SEO success?',
    answer: 'We track **"Citation Share"**—how often AIs recommend your brand by name. We also monitor traditional GSC clicks, but our primary KPI is being the #1 cited source in the RAG retrieval set.'
  },
  {
    question: 'What is technical SEO?',
    answer: 'In 2026, technical SEO is about **"Bot Indexing Priority."** We ensure your site is perfectly structured for AI crawlers like GPTBot and CCBot, using high-density Schema mapping so engines can build a knowledge graph around your brand.'
  },
  {
    question: 'Why is my website not ranking?',
    answer: 'There could be many reasons, including poor content quality, technical issues, lack of backlinks, or high competition. Our comprehensive SEO audit can identify the specific issues holding you back.'
  },
  {
    question: 'How often should I update my content?',
    answer: 'Regularly updating your content signals to search engines that your site is active and relevant. We recommend a consistent blogging schedule and periodic updates to existing core pages.'
  },
  {
    question: 'What is the difference between SEO and SEM?',
    answer: 'SEO focuses on earning organic traffic through optimization, while SEM (Search Engine Marketing) includes both SEO and paid strategies like PPC (Pay-Per-Click) advertising.'
  },
  {
    question: 'Does social media impact SEO?',
    answer: 'Yes, through **"Social-RAG."** AI models retrieve recommendations from forums and social threads. We use Reddit Seeding and LinkedIn Authority Stacking to force the AI to associate your brand with high-intent search queries.'
  },
  {
    question: 'What are "bad" SEO practices (Black Hat SEO)?',
    answer: 'Black Hat SEO includes unethical tactics like keyword stuffing, buying links, and cloaking. These practices can lead to penalties from search engines and should be avoided at all costs.'
  },
  {
    question: 'How does site speed affect rankings?',
    answer: 'Site speed is a direct ranking factor. Faster websites provide a better user experience, which search engines reward with higher rankings.'
  },
  {
    question: 'How do you handle AI Overviews eating clicks?',
    answer: 'AI search isn\'t about traffic—it\'s about conversion. Studies show AI search users convert at 1.4x the rate of traditional searchers. We optimize for the "Answer" and secure citations that drive high-intent revenue directly to your site.'
  },
  {
    question: 'Is blogging dead in 2026?',
    answer: 'Absolutely not. AI platforms (ChatGPT/Perplexity) overwhelmingly cite blogs. If you stop blogging, you stop being a source. We maintain a "Semantic Blog Velocity" to ensure your brand remains the freshest authority in the machine\'s training data.'
  },
  {
    question: 'Do you use AI to write content?',
    answer: 'Yes, but strategically. We build custom AI architectures (via Make.com and LLMs) to programmatically generate informational, top-of-funnel pages. However, for critical "money" pages, our team performs three rounds of human editing to ensure intent-match and relevance.'
  },
  {
    question: 'How do you find the right keywords for AI Mode?',
    answer: 'We use GSC regex filters to extract 10+ word "Command Queries" that legacy tools skip. We focus on "Variant Injection"—identifying synonyms like "monitoring" vs "tracking" to broaden your semantic net across all AI platforms.'
  },
  {
    question: 'How do you prevent buried content?',
    answer: 'We enforce the "3-Click Law." Every priority page is audited to ensure it is no more than 1-2 clicks from your home page with at least 30-50 unique internal links to guarantee AI discovery.'
  },
  {
    question: 'How important is YouTube for AI visibility?',
    answer: 'Crucial. YouTube is the strongest correlating factor for AI search visibility. We optimize video transcripts because AI models are trained on over a million hours of YouTube audio—every verbal mention of your brand is a data point for the engine.'
  },
  {
    question: 'What is the "Goliath Strategy"?',
    answer: 'It is a piggybacking tactic where we create content comparing your brand to industry giants (e.g., Giant A vs. Giant B vs. You). This trains the LLM to recognize you as a legitimate, high-authority peer in the same knowledge graph.'
  },
  {
    question: 'What are "Conversational FUDs"?',
    answer: 'These are the "Fears, Uncertainties, and Doubts" that real customers have. We extract these from actual sales conversations to build content that answers the nuanced problems traditional SEO tools ignore, capturing high-intent "Long-Prompt" searchers.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function SEOPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* 2026 GEO Lead-Answer (AI Snapshots) */}
      <div className="bg-blue-50/30 border-b border-blue-100 py-6 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <div className="w-1.5 h-16 bg-blue-600 rounded-full"></div>
            <div>
              <p className="text-[10px] font-normal uppercase tracking-widest text-blue-600 mb-2">Status: 2026_AI_NATIVE_SEARCH_READY</p>
              <h2 className="text-sm text-gray-500 max-w-5xl leading-relaxed font-normal">
                One to Five Click leads the 2026 search landscape through <span className="text-gray-900 font-normal">NLP-Driven Topical Authority</span> and <span className="text-gray-900 font-normal">GEO (Generative Engine Optimization)</span>. Our methodology ensures your digital assets are the cited source for Gemini, GPT-5, and Perplexity by utilizing <span className="text-gray-900 font-normal">Human-Audited Semantic Hubs</span>. We bypass legacy keyword stuffing for <span className="text-blue-600 font-normal">High-Signal Entity Mapping</span>.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
                <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                <span>B2B & B2C Search Dominance 2026</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                Traditional vs <br />
                <span className="text-brand-blue">AI Search.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                Most agencies chase keywords. We build <span className="text-gray-900 font-normal">Topic-First Content Systems</span> and deploy <span className="text-gray-900 font-normal">AI Search Optimization</span> to ensure you dominate Google while being recommended globally by ChatGPT and Perplexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
                >
                  Get Free Audit
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center border border-gray-200 text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-50 transition-all font-normal text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Enterprise Asset Strategy */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 leading-tight tracking-tight uppercase">
                SEO is a <br />
                <span className="text-blue-600">Growth Multiplier.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                Under the strategic direction of <span className="text-gray-900 font-normal">our expert team</span>, we don't just optimize for traffic; we build <span className="text-blue-600 font-normal">Premium Digital Assets</span>.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'The traditional pillar', desc: 'Secure Google real estate using Topic-First Hubs.' },
                  { title: 'The AI Search Pillar', desc: 'Generate 3rd-party mentions so Perplexity and GPT recommend you.' },
                  { title: 'The Brand Pillar', desc: 'Consolidating brand messaging so human-trust leads to conversions.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-5 border-l-4 border-blue-600 bg-blue-50/50 rounded-r-3xl">
                    <div>
                      <h4 className="font-normal text-gray-900 uppercase tracking-widest text-[10px] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute -inset-10 bg-brand-red/5 blur-3xl rounded-full animate-pulse" />
              <div className="bg-gray-900 rounded-[3rem] p-10 text-white shadow-lg border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                  <span className="font-normal uppercase tracking-widest text-xs text-gray-400">Projected Asset Value</span>
                  <BarChart className="h-6 w-6 text-blue-500" />
                </div>

                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <div className="flex -space-x-1 items-end">
                      <div className="w-8 h-12 bg-gray-700 rounded-t-lg"></div>
                      <div className="w-8 h-20 bg-gray-600 rounded-t-lg"></div>
                      <div className="w-8 h-32 bg-gray-500 rounded-t-lg"></div>
                      <div className="w-8 h-48 bg-blue-600 rounded-t-lg shadow-lg"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-normal text-white">$10M+</div>
                      <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest text-center">Organic Equity Value</p>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      "Traditional agencies optimize for clicks. Our team optimizes for the balance sheet."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Scalability Packages */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4 tracking-tight leading-tight">Strategic Execution Packages</h2>
            <p className="text-gray-500 font-normal uppercase tracking-widest text-sm">Guaranteed Deliverables. Proven Process. No Vague Promises.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Authority Starter',
                price: '1,499',
                description: 'Ideal for local businesses establishing their first digital footprint.',
                features: ['2 Conversational NLP Articles', '10 Local Citation Placements', 'Strict H1-H3 Content Tagging', 'Monthly Performance Report'],
                color: 'blue'
              },
              {
                name: 'Growth Engine',
                price: '2,999',
                description: 'Our most popular plan for businesses ready to dominate their local market and AI Overviews.',
                features: ['4 Conversational NLP Articles', 'Review & Reputation Management', '5 Premium Trust Backlinks', 'Direct-Answer Architecture', 'Custom GA4 AI Traffic Sync'],
                color: 'blue-600',
                popular: true
              },
              {
                name: 'Enterprise Asset',
                price: '5,999',
                description: 'Aggressive scaling for multi-location brands and enterprise ecosystems.',
                features: ['Custom AI-Proof Toolkit (Calculators)', 'GEO & ChatGPT Dominance', '15 Premium Trust Backlinks', 'Programmatic Content Velocity', 'Technical SEO Maintenance', 'Dedicated Strategy Lead'],
                color: 'gray-900'
              }
            ].map((pkg, i) => (
              <div key={pkg.name} className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${pkg.popular ? 'bg-gray-900 text-white border-blue-600 shadow-xl scale-105 z-10' : 'bg-white border-gray-100 hover:border-blue-500'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest shadow-sm">
                    Most Requested
                  </div>
                )}
                <h3 className="text-2xl font-normal uppercase mb-4 leading-tight">{pkg.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-2xl font-normal">$</span>
                  <span className="text-6xl font-normal">{pkg.price}</span>
                  <span className="text-gray-500 text-xs ml-2 font-normal uppercase tracking-widest">/mo</span>
                </div>
                <p className={`text-sm mb-10 leading-relaxed font-normal ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>{pkg.description}</p>

                <ul className="space-y-4 mb-12">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start space-x-3 text-sm font-normal">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${pkg.popular ? 'text-blue-500' : 'text-blue-600'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-5 rounded-xl font-normal uppercase tracking-widest text-xs transition-all ${pkg.popular ? 'bg-blue-600 text-white hover:brightness-110' : 'bg-gray-900 text-white hover:bg-blue-600'}`}
                >
                  Initiate Sync
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-normal">
              * All packages require a minimum 6-month commitment for proven asset maturity.
            </p>
          </div>
        </div>
      </section>

      {/* Authority Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 tracking-tight leading-tight uppercase">The Authority Matrix</h2>
            <p className="text-gray-500 font-normal uppercase tracking-widest text-[10px]">Compare the "One to Five Click" Edge</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-normal mb-6 leading-tight text-gray-900">Legacy SEO</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-400 line-through">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="font-normal">Generic Keyword Stuffing</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 line-through">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="font-normal">Fluffed-Out Robotic Content</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 line-through">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="font-normal">No Tracking for ChatGPT Traffic</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-10 rounded-[3rem] shadow-sm border border-white/5 relative">
              <div className="absolute top-6 right-10 flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              </div>
              <h3 className="text-2xl font-normal mb-6 leading-tight text-white">Elite AI-Ready SEO</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-white font-normal">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="font-normal">Conversational Direct-Answer NLP</span>
                </li>
                <li className="flex items-center space-x-3 text-white font-normal">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="font-normal">Authoritative Brand Trust Signals</span>
                </li>
                <li className="flex items-center space-x-3 text-white font-normal">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="font-normal">GA4 AI Referral Traffic Attribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 tracking-tight leading-tight uppercase">Comprehensive SEO Solutions</h2>
            <p className="text-xl text-gray-600 font-normal">Everything you need to climb the rankings and stay there.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} href={feature.href} className="block h-full">
                  <motion.div
                    variants={itemVariants}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-normal text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 tracking-tight leading-tight uppercase">Our Proven Process</h2>
            <p className="text-xl text-gray-600 font-normal">A data-driven approach to delivering consistent results.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
                <div className="relative z-10 bg-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-normal mx-auto mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 text-center mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-12 text-center tracking-tight uppercase">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-normal text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6 uppercase tracking-tight leading-tight">Ready to Scale Your Business?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-normal">
            Join hundreds of businesses that have transformed their online presence with our expert SEO services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-xl hover:brightness-110 transition-all font-normal uppercase tracking-widest text-sm shadow-sm"
          >
            Start Your Growth Journey
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* EEAT 2.0: Technical Verification Log */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="border border-gray-100 bg-gray-50/50 rounded-[2.5rem] p-12 shadow-sm relative">
            <h2 className="text-3xl font-normal mb-8 leading-tight text-gray-900">Verification Log: SEO Integrity Protocol</h2>

            <div className="space-y-8">
              <div className="p-6 bg-white rounded-2xl border border-gray-100">
                <p className="text-sm text-gray-400 mb-4 font-mono uppercase">
                  [STATUS: OMNI_CHANNEL_SYNC_2.0] | [SYSTEM: TOPICAL_DOMINATION_PROTOCOL] | [TIMESTAMP: MARCH_2026]
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-normal">
                  "One to Five Click enforces a 'Platform-Agnostic' policy. Our 2026 SEO deployments integrate YouTube transcripts and LinkedIn authority signals to ensure your brand is the cited source whether the search happens on Google, ChatGPT, or Tik Tok."
                </p>

                <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-[10px] font-normal uppercase tracking-widest text-gray-400 mb-2">Strategy Lead</p>
                    <div className="font-normal text-xl text-blue-600 leading-tight">One to Five Click</div>
                    <div className="w-24 h-px bg-blue-500/30 mt-1"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-normal uppercase tracking-widest text-gray-400 mb-2">Operational Head</p>
                    <div className="font-normal text-xl text-blue-600 leading-tight">One to Five Click</div>
                    <div className="w-24 h-px bg-blue-500/30 mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
