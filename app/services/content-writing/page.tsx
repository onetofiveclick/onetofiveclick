'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  PenTool,
  CheckCircle,
  TrendingUp,
  Target,
  Network,
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  MessageSquare,
  Award,
  BarChart,
  Cpu,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
  Search
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: 'Executive Ghostwriting',
    description: 'We capture your unique voice and turn your industry expertise into high-converting LinkedIn content.',
    icon: PenTool
  },
  {
    title: 'B2B Lead Generation',
    description: 'Transform organic engagement into qualified sales calls through strategic DM outreach and profiling.',
    icon: Target
  },
  {
    title: 'Authority Newsletters',
    description: 'Build a direct-to-human owned audience with deep-dive technical and strategic newsletters.',
    icon: BookOpen
  },
  {
    title: 'Founder Branding',
    description: 'Position leadership as the undeniable voice of the industry, creating an inbound gravity well.',
    icon: Briefcase
  },
  {
    title: 'Community Building',
    description: 'Foster genuine conversations and relationships within your B2B ecosystem.',
    icon: Users
  },
  {
    title: 'Conversion Copywriting',
    description: 'Sales pages, funnels, and VSL scripts that leverage psychological triggers to close high-ticket deals.',
    icon: MessageSquare
  }
];

const faqs = [
  {
    question: 'Why focus on LinkedIn and Executive Branding?',
    answer: 'In 2026, B2B buyers don\'t trust corporate logos—they trust people. Founders and executives who build personal brands command higher prices, attract better talent, and close deals faster. It\'s the ultimate organic leverage.'
  },
  {
    question: 'How do you capture my voice as a founder?',
    answer: 'We don\'t use templates. We conduct deep-dive interviews, analyze your past communications, and use proprietary frameworks to extract your unique perspective, ensuring every post sounds exactly like you—just more refined.'
  },
  {
    question: 'How long does it take to see inbound leads?',
    answer: 'While authority builds over time, our strategic outreach and high-signal content typically generate the first qualified inbound conversations within 45 to 60 days of consistent execution.'
  },
  {
    question: 'Do you guarantee viral posts?',
    answer: 'No. "Going viral" to unqualified audiences is a vanity metric. We guarantee high-signal engagement from decision-makers in your target market. Revenue over reach.'
  },
  {
    question: 'How much time do I need to commit?',
    answer: 'As a founder, your time is your most valuable asset. We require just 60 minutes of your time per month for a strategic brain-dump. We handle the 99% of execution, writing, and community management.'
  }
];

export default function ContentWritingPage() {
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
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
                <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                <span>B2B Organic & Executive Branding</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                People Buy From <br />
                <span className="text-brand-blue">People.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                The silent goldmine of 2026. We turn founders into industry <span className="text-gray-900 font-normal">Monopolies</span> through high-signal LinkedIn authority and written organic ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
                >
                  Become The Authority
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <div className="text-gray-500 font-normal text-sm">
                  *Limited to Founders doing $1M+
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Gold Rush Concept */}
      <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-100 blur-[100px] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal text-gray-900 uppercase tracking-tight leading-tight mb-6">
                The B2B <br />
                <span className="text-blue-600">Trust Deficit.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-normal leading-relaxed">
                In a world drowning in AI-generated fluff and automated sales pitches, trust is at an all-time low. Decision-makers don't read generic blog posts or reply to automated cold emails anymore.
              </p>
              <p className="text-lg text-gray-600 mb-8 font-normal leading-relaxed">
                They buy from <span className="text-gray-900 font-normal">Founders they know, like, and trust.</span> By strategically commanding your personal brand on LinkedIn and across targeted newsletters, you build an inbound engine that rivals costly ad campaigns.
              </p>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm w-max">
                <Award className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-xl font-normal text-gray-900 uppercase tracking-tight">"Sell Shovels"</div>
                  <div className="text-[10px] font-normal text-gray-500 uppercase tracking-widest text-center">Provide absolute authority</div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { metric: "300%", label: "Higher Conversion Rate vs Brand Pages", icon: TrendingUp },
                { metric: "Zero", label: "Ad Spend Required for Inbound Deals", icon: BarChart },
                { metric: "Top 1%", label: "Positioning in Your Industry Niche", icon: Target },
                { metric: "7+", label: "Decision Layers Bypassed via Trust", icon: Network }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:border-blue-200 transition-all">
                  <stat.icon className="h-8 w-8 text-blue-600 mb-6" />
                  <div className="text-4xl font-normal text-gray-900 mb-2 tracking-tight">{stat.metric}</div>
                  <div className="text-[10px] font-normal text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 uppercase tracking-tight mb-4">Authority Infrastructure</h2>
            <p className="text-gray-500 font-normal uppercase tracking-widest text-sm">The Written Engines of 2026</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon || PenTool;
              return (
                <div key={index} className="group bg-gray-50 rounded-[2.5rem] p-10 hover:border-blue-200 border border-gray-100 transition-all">
                  <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full" />
                  <Icon className="h-8 w-8 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-normal uppercase tracking-tight mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Packages */}
      <section className="py-24 bg-gray-900 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-normal mb-4 uppercase tracking-tight leading-tight">Growth <span className="text-blue-400">Packages.</span></h2>
            <p className="text-gray-400 font-normal uppercase tracking-widest text-sm">Engineered for Founders & Executives.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Authority Base',
                price: '999',
                desc: 'Establish your voice and dominate your industry niche with consistent, high-signal posting.',
                features: ['12 High-Value LinkedIn Posts', 'Profile Optimization', 'Basic Comment Engagement', 'Monthly Analytics Review'],
                highlight: false
              },
              {
                name: 'Inbound Engine',
                price: '2,499',
                desc: 'Our most popular protocol. Turn your brand into an automated lead generation machine.',
                features: ['20 High-Signal LinkedIn Posts', 'Strategic DM Protocol (Sales)', 'Custom Newsletter (2x/mo)', 'Executive Positioning Strategy', 'Bi-Weekly Zoom Sync'],
                highlight: true
              },
              {
                name: 'The Monopoly',
                price: '4,999',
                desc: 'Absolute semantic and social dominance. You become the definitive voice of your industry.',
                features: ['Daily Platform Domination', 'C-Suite Networking Protocol', 'Ghostwritten Viral Threads', 'Webinar/VSL Scripting', 'Priority 24/7 Access'],
                highlight: false
              }
            ].map((pkg) => (
              <div key={pkg.name} className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${pkg.highlight ? 'bg-white text-gray-900 border-blue-600 shadow-sm scale-105 z-10' : 'bg-gray-800 border-white/10 hover:border-blue-500'}`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest shadow-sm">
                    Most Selected
                  </div>
                )}
                <h3 className="text-2xl font-normal uppercase mb-4 leading-tight">{pkg.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-2xl font-normal">$</span>
                  <span className="text-6xl font-normal">{pkg.price}</span>
                  <span className={`text-xs ml-2 font-normal uppercase tracking-widest ${pkg.highlight ? 'text-gray-500' : 'text-gray-400'}`}>/mo</span>
                </div>

                <p className={`text-sm mb-10 leading-relaxed font-normal ${pkg.highlight ? 'text-gray-600' : 'text-gray-400'}`}>{pkg.desc}</p>

                <ul className="space-y-4 mb-12">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start space-x-3 text-sm font-normal">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${pkg.highlight ? 'text-blue-600' : 'text-blue-400'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-5 rounded-xl font-normal uppercase tracking-widest text-xs transition-all ${pkg.highlight ? 'bg-blue-600 text-white hover:brightness-110' : 'bg-white/10 text-white hover:bg-blue-600'}`}
                >
                  Initiate Sync
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4 uppercase tracking-tight leading-tight">Foundational Logic</h2>
            <p className="text-blue-600 font-normal uppercase tracking-widest text-[10px] text-center">Briefing Protocol</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
                <AccordionTrigger className="text-left py-6 text-lg font-normal text-gray-900 hover:text-blue-600 uppercase tracking-tight leading-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed font-normal pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-6xl font-normal text-white mb-8 tracking-tight uppercase">Own The Narrative.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-normal">
            Stop competing on pricing and features. Shift the battlefield to trust and authority—the only assets AI can't replicate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest text-sm shadow-sm"
          >
            Start Your Reign
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
