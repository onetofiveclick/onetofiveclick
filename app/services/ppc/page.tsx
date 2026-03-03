'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MousePointerClick,
  Target,
  Search,
  Zap,
  BarChart3,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Database,
  Users,
  Cpu
} from 'lucide-react';

const coreEngines = [
  {
    title: 'Precision Rank & Ads',
    desc: 'Targeted Meta and Google ad campaigns combined with high-intent search strategies to generate raw lead flow. We bypass the outdated SMMA model by acquiring leads that are actually ready to convert.',
    icon: Target,
    color: 'bg-emerald-600'
  },
  {
    title: 'Retell AI Voice Agents',
    desc: 'Calling a lead within 5 minutes increases conversions by 500%. We deploy ultra-realistic AI voice agents powered by Retell AI to call leads within 3 minutes and book them directly into your calendar.',
    icon: MessageCircle,
    color: 'bg-blue-600'
  },
  {
    title: 'Sales Script Systematization',
    desc: 'Most agencies stop at the lead and let you fail at the close. We absorb your final bottleneck: Closing. We completely rebuild your sales scripts and protocols using data-driven AI frameworks.',
    icon: Database,
    color: 'bg-orange-600'
  },
  {
    title: 'Database Reactivation Protocol',
    desc: 'We plug your CRM leaky buckets. Reactivating your dormant, historical leads via GoHighLevel SMS and AI calling to capture instant, untapped revenue without ad spend.',
    icon: Zap,
    color: 'bg-emerald-500'
  }
];

const smartOffering = [
  { label: 'Measurable', value: 'Booked Calls' },
  { label: 'Timeframe', value: '30-Day Velocity' },
  { label: 'Investment Logic', value: '1:10 ROI TARGET' }
];

export default function AIAdPage() {
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
                <Cpu className="h-4 w-4" />
                <span>Full-Stack AI Agency 2026 Model</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                The AI Agency <br />
                <span className="text-brand-blue">Model.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                We replace the broken SMMA process. Instead of just getting you leads and hoping you call them, we run the ads, deploy a <span className="text-gray-900 font-normal underline">Retell AI Caller</span> to book them instantly, and optimize your sales process to guarantee new customers.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
              >
                Secure Your Growth Audit
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Offering Logic */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 tracking-tight leading-tight">Smart ROI Framework.</h2>
            <p className="text-gray-500 font-normal uppercase tracking-widest text-sm">We don't do vague. We do measurable outcomes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {smartOffering.map(stat => (
              <div key={stat.label} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center group hover:border-blue-200 transition-colors">
                <div className="text-4xl font-normal text-gray-900 mb-2 group-hover:scale-105 transition-transform tracking-tight uppercase leading-tight">{stat.value}</div>
                <div className="text-[10px] font-normal text-blue-600 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Instant Win Protocols: Revenue Recovery (Easy Mode) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-emerald-500/5 rounded-full blur-[120px]" />
              <div className="relative bg-gray-900 rounded-[3rem] p-12 text-white shadow-lg overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-10">
                    <Zap className="h-6 w-6 text-blue-400" />
                    <span className="text-[10px] font-normal uppercase tracking-widest text-gray-400">2026 Easy-Mode Protocols</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-normal tracking-tight mb-8 leading-tight">Instant Revenue <br /> <span className="text-blue-400">Recovery.</span></h3>

                  <div className="space-y-8">
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5 group hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-normal uppercase tracking-widest text-xs">Missed Call Text Back</h4>
                        <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-[8px] font-normal uppercase">Live Automated</div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 font-normal">Capturing the $1,000+ per month you lose when you can't answer the phone. Our system texts back within 3 seconds, keeping the lead on the hook.</p>
                    </div>

                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5 group hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-normal uppercase tracking-widest text-xs">5-Minute Lead Velocity</h4>
                        <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-[8px] font-normal uppercase">Golden Hour Protocol</div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed font-normal">Responding in under 300 seconds increases conversion by 900%. Our AI agents engage leads instantly while they are still hot.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6">
                Investment, not a cost
              </div>
              <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-8 leading-tight tracking-tight uppercase">
                Results Over Credentials. <br />
                <span className="text-blue-600">ROI is the Metric.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                Your customers don't care about our degrees, and neither should you. You care about <span className="text-gray-900 font-normal underline">Money in the Bank.</span>
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="text-3xl font-normal text-gray-900 tracking-tight leading-tight mb-1">1:10</div>
                  <div className="text-[8px] font-normal text-gray-400 uppercase tracking-widest leading-none text-center">Min Target ROI</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="text-3xl font-normal text-blue-600 tracking-tight leading-tight mb-1">INSTANT</div>
                  <div className="text-[8px] font-normal text-gray-400 uppercase tracking-widest leading-none text-center">System Deployment</div>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center space-x-3 text-blue-600 font-normal uppercase tracking-widest text-xs group">
                <span>Enable Instant Recovery</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {coreEngines.map((engine, i) => (
              <div key={engine.title} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 group relative overflow-hidden">
                <div className={`w-16 h-16 ${engine.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:rotate-6 transition-transform`}>
                  <engine.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-[10px] font-normal uppercase text-gray-400 mb-2 tracking-widest">Protocol 0{i + 1}</div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4 leading-tight">{engine.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-normal">{engine.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Integration: The Masonry / Physical Growth Model */}
      <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900 rounded-[3rem] p-12 text-white shadow-lg overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-12">
                    <span className="text-[10px] font-normal uppercase text-blue-400 tracking-widest border border-blue-400/30 px-4 py-1 rounded-full">Case Study: Modern Masonry Model</span>
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-normal leading-tight mb-8 text-white">Toronto Masonry <br /> <span className="text-white/50">Restoration Engine</span></h3>

                  <div className="space-y-6 mb-12">
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <span className="text-xs font-normal uppercase text-gray-500 tracking-widest">Acquisition Metric</span>
                      <span className="text-2xl font-normal text-blue-400 text-3xl">$20/Lead</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <span className="text-xs font-normal uppercase text-gray-500 tracking-widest">System Ad-Spend</span>
                      <span className="text-2xl font-normal text-white text-3xl">$1,000/Mo</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <span className="text-xs font-normal uppercase text-gray-500 tracking-widest">Projected Annual ROI</span>
                      <span className="text-2xl font-normal text-white text-3xl">10X+</span>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-gray-400 text-[10px] leading-relaxed font-normal uppercase tracking-widest">
                    "We identified that Toronto Masonry companies call themselves 'Masonry' not 'Brick Layers.' By optimized for localized intent on Google, we highjacked high-ticket wall repairs leading to $20/lead inquiries instantly."
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-8 leading-tight tracking-tight">
                Strategic <br />
                <span className="text-blue-600">Intent-Mapping.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                Our AI Growth Engine accounts for <span className="text-gray-900 font-normal">Source Logic</span>. We don't just "run ads"; we engineer specific behavioral traps for high-ticket service industries.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 transition-colors">
                    <Search className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-normal text-gray-900 uppercase tracking-widest text-xs mb-2">Google Inbound Protocol</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-normal">Capturing those actively searching for a solution to a painful, urgent problem. Higher intent. Instant conversion.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group border-t border-gray-100 pt-8">
                  <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 transition-colors">
                    <Zap className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-normal text-gray-900 uppercase tracking-widest text-xs mb-2">Meta Outbound Velocity</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-normal">Disrupting patterns. Placing your "Boring" offer in front of someone who didn't know they needed it until they saw our ROI logic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Investment Model: The Sweet Spot */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest mb-6">
              The sweet spot model
            </div>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6 leading-tight tracking-tight uppercase">Investment Protocols.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              We don't play in the $97/mo "Marketing in a box" sandbox. We partner with local service leaders doing $1M-$10M per year who demand high-ticket results and personalized delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm group">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-normal text-gray-900 mb-2 leading-tight">The PIFF 90-Day Sprint</h3>
                  <p className="text-xs font-normal text-gray-400 uppercase tracking-widest">Paid In Full Infrastructure</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-normal text-gray-900 leading-tight">$5K</div>
                  <div className="text-sm font-normal text-gray-500 leading-none mt-2">For 90 Days of Scale</div>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {['Meta/Google Ads Setup', 'Custom AI Voice Agent Integration', '3-Minute Booking Automation', 'Sales Script Reinvention'].map(f => (
                  <li key={f} className="flex items-center space-x-3 text-sm font-normal text-gray-600">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center py-5 bg-gray-900 text-white rounded-xl font-normal uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">Secure the Core</Link>
            </div>

            <div className="bg-gray-900 p-12 rounded-[3rem] border border-white/5 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <Zap className="h-8 w-8 text-blue-400 animate-pulse" />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8 text-left">
                  <div>
                    <h3 className="text-2xl font-normal text-white mb-2 leading-tight">The Retainer + Rev-Share</h3>
                    <p className="text-[10px] font-normal text-blue-400/50 uppercase tracking-widest">Skin In The Game Scale</p>
                  </div>
                  <div className="text-right text-white">
                    <div className="text-4xl font-normal leading-tight">$1.5K</div>
                    <div className="text-sm font-normal text-gray-400 leading-none mt-2">/mo + % Profit Share</div>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 text-left">
                  {['All Core Engine Features', 'Continuous AI Caller Tuning', 'Database Reactivation Optimization', 'Deep Funnel Performance Monitoring'].map(f => (
                    <li key={f} className="flex items-center space-x-3 text-sm font-normal text-gray-400">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-5 bg-blue-600 text-white rounded-xl font-normal uppercase tracking-widest text-xs hover:brightness-110 transition-all">Enable Velocity</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Boring" vs "Flashy" Reality */}
      <section className="py-24 bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-normal mb-8 leading-tight tracking-tight">
                Why Boring <br />
                <span className="text-blue-400">Wins the Game.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-normal">
                Everyone else is preoccupied with complex AI workflows. Our team focuses on the <span className="text-white font-normal">Boring Infrastructure</span> that solves the fundamental problem: consistent inquiries and predictable bookings.
              </p>

              <div className="mb-12 p-8 bg-blue-500/5 border border-blue-500/20 rounded-3xl">
                <h4 className="text-blue-400 font-normal uppercase tracking-widest text-xs mb-4">High-Ticket Differentiator</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                  We don't offer generic $97/mo AI-in-a-box. We provide <span className="text-white font-normal">Hybrid Logic</span>—where we use advanced productized systems to capture leads, but maintain high-touch human communication to ensure those leads actually convert into your bank account.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-[10px] font-normal uppercase text-blue-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>Real Human Support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] font-normal uppercase text-blue-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>Monthly Strategy Calls</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="font-normal uppercase tracking-widest text-[10px] text-center">Clear Outcome over Vague Efficiency</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="font-normal uppercase tracking-widest text-[10px] text-center">ROI Engines over "Cool" Workflows</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-20 bg-emerald-500/10 rounded-full blur-[100px]" />
              <div className="relative border border-white/5 bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 shadow-sm">
                <div className="text-center">
                  <TrendingUp className="h-20 w-20 text-blue-400 mx-auto mb-8 animate-pulse" />
                  <h3 className="text-3xl font-normal mb-4 leading-tight">2026 Ready.</h3>
                  <p className="text-gray-400 font-normal mb-10 text-sm">"We build the systems that remain when the hype dies. Pain-point driven, outcome-bound."</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-3 text-blue-400 font-normal uppercase tracking-widest text-xs group"
                  >
                    <span>Deploy Your Engine</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-6xl font-normal text-white mb-8 tracking-tight leading-tight uppercase">Ignore the Noise. Scale the Numbers.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-normal">
            Secure your "Boring" AI Growth Audit today. If we don't find at least 5 hidden revenue gaps, the audit is on us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest shadow-sm"
          >
            Initiate Paid Acquisition
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
