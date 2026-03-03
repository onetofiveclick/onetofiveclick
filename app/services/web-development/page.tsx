'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Layout,
  Shield,
  Globe,
  Cpu,
  MousePointer2
} from 'lucide-react';

const webPackages = [
  {
    name: 'The Starter Node',
    price: '999',
    retainer: '97',
    desc: 'Perfect for local service leaders ($1M-$5M) needs a high-speed conversion landing page.',
    features: ['Single-Page Landing Proto', 'Mobile-First Architecture', 'Basic SEO Integration', '30-Day Launch Window', 'Secure Hosting Sync'],
    color: 'emerald'
  },
  {
    name: 'Growth Infrastructure',
    price: '2,999',
    retainer: '197',
    desc: 'Complete multi-page site for businesses looking to dominate their local physical cluster.',
    features: ['5-Page Business Core', 'AI-Assisted SEO Content', 'Lead Capture Ecosystem', 'Advanced Analytics Plug', 'Bi-Weekly Maintenance'],
    color: 'brand-blue',
    popular: true
  },
  {
    name: 'Enterprise Asset',
    price: '7,500',
    retainer: '497',
    desc: 'The ultimate digital asset for VC-funded startups and multi-location medical/legal groups.',
    features: ['Unlimited Pages / Custom logic', 'Next.js Edge Performance', 'Deep GEO Search Readiness', 'Custom API Integrations', '24/7 Priority Support'],
    color: 'gray-900'
  }
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* 2026 Tech Stack Status */}
      <div className="bg-gray-50 text-gray-500 py-3 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[10px] font-normal uppercase tracking-widest">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 animate-pulse" /> Agency Tech Stack: Hostinger 2026 Native</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">Next.js 15+ Deployment Engine</span>
          </div>
          <div className="hidden sm:block">One to Five Click Team</div>
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
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
                <Zap className="h-4 w-4" />
                <span>2026 Performance-First Architecture</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                Speed is the <br />
                <span className="text-brand-blue">Conversion.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                We build <span className="text-gray-900 font-normal">Premium Digital Assets</span> that load under 1s and convert 300% better than legacy WordPress builds. No bloat. No friction. Just revenue.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
              >
                Start Your Build
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Packages - The Tiered Logic */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-4 tracking-tight leading-tight">Asset Success <span className="text-blue-600">Packages.</span></h2>
            <p className="text-gray-500 font-normal uppercase tracking-widest text-xs">Scaled for predictable growth. No hourly Billing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webPackages.map((pkg) => (
              <div key={pkg.name} className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${pkg.popular ? 'bg-gray-900 text-white border-blue-600/30 shadow-xl scale-105 z-10' : 'bg-white border-gray-100 hover:border-blue-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-normal mb-4 leading-tight">{pkg.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-2xl font-normal">$</span>
                  <span className="text-6xl font-normal">{pkg.price}</span>
                  <span className="text-gray-500 text-xs ml-2 font-normal uppercase tracking-widest">Setup</span>
                </div>
                <div className="text-[10px] font-normal uppercase tracking-widest text-blue-600 mb-8">+ ${pkg.retainer}/mo Maintenance Retainer</div>

                <p className={`text-sm mb-10 leading-relaxed font-normal ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>{pkg.desc}</p>

                <ul className="space-y-4 mb-12">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start space-x-3 text-sm font-normal">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${pkg.popular ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="font-normal">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-5 rounded-xl font-normal uppercase tracking-widest text-xs transition-all ${pkg.popular ? 'bg-blue-600 text-white hover:brightness-110' : 'bg-gray-900 text-white hover:bg-blue-600'}`}
                >
                  Confirm Slot
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Breakdown Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center items-center">
            <div className="group text-center">
              <Cpu className="h-10 w-10 text-blue-600 mx-auto mb-6 group-hover:rotate-6 transition-transform" />
              <h4 className="text-sm font-normal uppercase tracking-widest mb-2 text-gray-900">AI Infused Builds</h4>
              <p className="text-xs text-gray-500 font-normal">Harnessing the speed of AI + Human polish.</p>
            </div>
            <div className="group text-center">
              <Layout className="h-10 w-10 text-blue-600 mx-auto mb-6 group-hover:rotate-6 transition-transform" />
              <h4 className="text-sm font-normal uppercase tracking-widest mb-2 text-gray-900">EEAT Architecture</h4>
              <p className="text-xs text-gray-500 font-normal">Structured data for AI citation dominance.</p>
            </div>
            <div className="group text-center">
              <Shield className="h-10 w-10 text-blue-600 mx-auto mb-6 group-hover:rotate-6 transition-transform" />
              <h4 className="text-sm font-normal uppercase tracking-widest mb-2 text-gray-900">Asset Longevity</h4>
              <p className="text-xs text-gray-500 font-normal">Monthly security audits and bug-zero infrastructure.</p>
            </div>
            <div className="group text-center">
              <Globe className="h-10 w-10 text-blue-600 mx-auto mb-6 group-hover:rotate-6 transition-transform" />
              <h4 className="text-sm font-normal uppercase tracking-widest mb-2 text-gray-900">Global Edge Ready</h4>
              <p className="text-xs text-gray-500 font-normal">Served through 100+ global nodes for instant load.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-6xl font-normal text-white mb-8 tracking-tight">Join the <span className="text-blue-500">Asset Era.</span></h2>
          <p className="text-xl text-gray-400 mb-12 font-normal">
            We only take 2 build projects per month to ensure elite personalized delivery. Are you the lucky one?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-12 py-6 rounded-xl hover:brightness-110 transition-all font-normal uppercase tracking-widest text-sm shadow-sm"
          >
            Claim Your Build Slot
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
