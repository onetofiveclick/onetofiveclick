'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Share2,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Search,
  Zap,
  Shield,
  Network,
  BarChart3,
  DollarSign,
  Cpu
} from 'lucide-react';

const socialSEOPlatforms = [
  {
    name: 'B2C Search Domination',
    description: 'Instagram, TikTok, and YouTube process billions of searches daily. We engineer your videos to capture visual intent before users ever open Google.',
    icon: Search,
    color: 'bg-blue-600'
  },
  {
    name: 'B2B Network SEO',
    description: 'LinkedIn and YouTube optimization for high-intent decision makers. Answering complex operational questions directly in the feed.',
    icon: Network,
    color: 'bg-blue-500'
  },
  {
    name: 'AI Engine Referencing',
    description: 'We structure your social footprint on platforms like Reddit and YouTube so it gets cited by ChatGPT and Perplexity answers.',
    icon: Cpu,
    color: 'bg-gray-900'
  }
];

const discoveryProtocol = [
  {
    title: 'Question-Based Intent',
    desc: 'People search in full sentences ("How do I fix..."). We map your content to the exact questions users type.'
  },
  {
    title: 'Indexable Metadata',
    desc: 'Algorithms skim content. We structure your titles, captions, and on-screen text so AI can instantly extract meaning.'
  },
  {
    title: 'Native Transactions',
    desc: 'Platforms reward retention. We use native lead forms and DM flows (ManyChat) to keep users in-app, boosting your organic reach.'
  },
  {
    title: 'Feed Discovery',
    desc: 'We don\'t wait for search. We create content that interrupts the scroll and solves problems before users even realize they need them.'
  }
];

export default function SocialMediaPage() {
  return (
    <div className="pt-16 overflow-hidden">
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
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
                <Search className="h-4 w-4" />
                <span>Social Media SEO 2026</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                Social <br />
                <span className="text-brand-blue">Search.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                Social platforms are the new search engines. We engineer your content to answer the exact questions your audience is typing into Instagram, TikTok, and YouTube <span className="text-gray-900 font-normal">before they ever open Google.</span>
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
              >
                Initiate Social SEO
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Strategy Grid */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4 tracking-tight">The Modern Search Horizon</h2>
            <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">Match your platform to your demographic's search intent.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialSEOPlatforms.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:border-blue-200 transition-colors group">
                  <div className={`w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:rotate-6 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 mb-4 leading-tight">{p.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Discovery Protocol */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
              <div className="relative bg-gray-900 rounded-[3rem] p-12 text-white shadow-sm border border-white/5">
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-3xl font-normal tracking-tight leading-tight">Feed <br /> Discovery</h3>
                  <TrendingUp className="h-12 w-12 text-blue-400" />
                </div>
                <div className="space-y-6">
                  {discoveryProtocol.map((item, i) => (
                    <div key={i} className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5 group">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 font-normal">0{i + 1}</div>
                      <div>
                        <h4 className="font-normal text-white uppercase text-[10px] tracking-widest mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed font-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-normal text-gray-900 mb-8 leading-tight tracking-tight">
                You Win In <br />
                <span className="text-blue-600">The Feed.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                Unstructured content is invisible. We treat every piece of social content like a searchable asset, optimizing captions, on-screen text, and spoken words so you answer problems <span className="text-gray-900 font-normal">instantly on the spot</span>.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                  <div className="text-3xl font-normal text-gray-900 mb-1 tracking-tight uppercase">Indexable</div>
                  <p className="text-[10px] font-normal text-gray-400 uppercase tracking-widest">Metadata Extraction</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                  <div className="flex items-center justify-center space-x-3 mb-1">
                    <div className="text-3xl font-normal text-gray-900 tracking-tight uppercase">High</div>
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-[10px] font-normal text-gray-400 uppercase tracking-widest">AI Citation Rate</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 text-blue-600 font-normal uppercase tracking-widest text-xs group"
              >
                <span>Master Feed Discovery</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social SEO Packages */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-4 tracking-tight">Social SEO <span className="text-blue-600">Packages.</span></h2>
            <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">Engineered for discovery and in-app revenue.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Social Search Base',
                price: '999',
                desc: 'Structured metadata and question-based content for foundational social discovery.',
                features: ['8 SEO-Optimized Reels / Mo', 'AnswerThePublic Query Map', 'Basic DM Integration', 'Monthly Indexing Report'],
                highlight: false
              },
              {
                name: 'Discovery Engine',
                price: '2,499',
                desc: 'Total algorithm domination. We solve problems before your users realize they have them.',
                features: ['15 High-Signal Short Videos', 'Advanced DM Funneling', 'AI Content Citations', 'On-Screen Text Analysis', 'Bi-Weekly Search Sync'],
                highlight: true
              },
              {
                name: 'The Infinite Loop',
                price: '4,999',
                desc: 'Closed-loop retention ecosystem designed to maximize on-platform transactions.',
                features: ['Cross-Platform Search Dom.', 'Automated Conversation Flows', 'Full Native Checkout Build', 'Predictive Trend Engineering', '24/7 Priority Support'],
                highlight: false
              }
            ].map((pkg) => (
              <div key={pkg.name} className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${pkg.highlight ? 'bg-gray-900 text-white border-blue-600/30 shadow-xl scale-105 z-10' : 'bg-white border-gray-100 hover:border-blue-200'}`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest">
                    Best ROI
                  </div>
                )}
                <h3 className="text-2xl font-normal mb-4 leading-tight">{pkg.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-2xl font-normal">$</span>
                  <span className="text-6xl font-normal">{pkg.price}</span>
                  <span className="text-gray-500 text-xs ml-2 font-normal uppercase tracking-widest">/mo</span>
                </div>

                <p className={`text-sm mb-10 leading-relaxed font-normal ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{pkg.desc}</p>

                <ul className="space-y-4 mb-12">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start space-x-3 text-sm font-normal">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${pkg.highlight ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-5 rounded-xl font-normal uppercase tracking-widest text-xs transition-all ${pkg.highlight ? 'bg-blue-600 text-white hover:brightness-110' : 'bg-gray-900 text-white hover:bg-blue-600'}`}
                >
                  Initiate Sync
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Native Transactions Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6 border border-blue-500/30">
                  <Zap className="h-4 w-4" />
                  <span>The Native Action Protocol</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-normal mb-8 leading-tight tracking-tight">
                  Native <br />
                  <span className="text-blue-400">Transactions.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-normal">
                  Social algorithms penalize off-platform links. We build <span className="text-white font-normal">Closed Loop Ecosystems</span> using DM automation and native checkouts so you monetize users without fighting the algorithm.
                </p>
                <div className="flex flex-wrap gap-8 text-center sm:text-left mb-10">
                  <div>
                    <div className="text-3xl font-normal text-white tracking-tight uppercase">10x</div>
                    <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest text-center">Organic Reach Lift</p>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-white tracking-tight uppercase">14 Days</div>
                    <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest text-center">Launch Velocity</p>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-white tracking-tight uppercase">Zero</div>
                    <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest text-center">Platform Exits</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-normal uppercase tracking-widest text-xs shadow-sm"
                >
                  Build Native Ecosystem
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest letter-spacing-widest">Revenue Protocol</p>
                        <p className="text-sm font-normal text-white">Native App Checkout Integration</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest">Community Hub</p>
                        <p className="text-sm font-normal text-white">ManyChat DM Conversions</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest">AI Logistics</p>
                        <p className="text-sm font-normal text-white">Automated Lead Qualification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Search Discovery Rate', value: '340%+', icon: TrendingUp },
              { label: 'AI Citation Rank', value: 'Top 1%', icon: Search },
              { label: 'On-Platform Actions', value: '10k+', icon: Users },
              { label: 'Feed Retention', value: 'High', icon: Shield }
            ].map(stat => (
              <div key={stat.label} className="p-8 border border-white/10 rounded-[2.5rem] bg-white/5 hover:border-blue-500 transition-colors group">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-normal mb-2 tracking-tight uppercase leading-none">{stat.value}</div>
                <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest leading-none">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-6xl font-normal text-white mb-8 tracking-tight">Scale Your Discoverability.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-normal">
            Stop interrupting people. Start being the solution they're already searching for on Instagram, TikTok, and YouTube.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest shadow-sm"
          >
            Initiate Strategy
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
