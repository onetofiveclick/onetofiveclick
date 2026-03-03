'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  TrendingUp,
  Zap,
  BarChart3,
  Target,
  ArrowRight,
  Search,
  Globe,
  Cpu
} from 'lucide-react';

const projects = [
  {
    title: 'AI-Retrieval Dominance',
    client: 'One to Five Click (Self)',
    category: 'GEO & RAG Architecture',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    results: 'Top-Cited Source in Perplexity',
    description: 'We used our "YouTube-RAG Stacking" protocol to become the recommended authority for "2026 AI SEO Strategies" across ChatGPT and Perplexity in under 21 days.',
    color: 'brand-blue'
  },
  {
    title: 'Local Authority Scaling',
    client: 'Downtown Medical Group',
    category: 'Local SEO Mastery',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
    results: '+450% Patient Inquiries',
    description: 'Dominated the "Near Me" map pack across 5 locations through Neighborhood Clustering and GMB Sentiment optimization.',
    color: 'green-500'
  },
  {
    title: 'Enterprise Next.js Hub',
    client: 'TechCorp International',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a109ad?auto=format&fit=crop&q=80',
    results: 'Vercel Speed Score 100/100',
    description: 'A high-performance ecosystem built for billion-dollar exits. SEO-native architecture with 0ms FCP.',
    color: 'purple-600'
  },
  {
    title: 'Reddit Authority Engine',
    client: 'SaaS Innovators',
    category: 'Social Awareness',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80',
    results: '5,000+ Organic Leads/mo',
    description: 'Used the 9:1 value ratio to build a community of 20k+ advocates without a single dollar in ad spend.',
    color: 'orange-600'
  }
];

export default function PortfolioPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
              <TrendingUp className="h-4 w-4" />
              <span>Measurable Digital Growth</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
              The Proof <br />
              <span className="text-brand-blue">of Concept.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              We don't sell hope; we sell <span className="text-gray-900 font-normal">Verification</span>. Every project is an architectural masterpiece of SEO and technical excellence, built by our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-normal uppercase tracking-widest text-white mb-2 bg-${project.color}`}>
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-normal text-white uppercase tracking-tighter leading-none">{project.title}</h3>
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-xs font-normal text-gray-400 uppercase tracking-widest">{project.client}</p>
                    <div className="flex items-center text-blue-600 font-normal text-xs uppercase tracking-widest">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {project.results}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">{project.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-gray-900 font-normal uppercase tracking-widest text-[10px] group-hover:text-blue-600 transition-colors"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Authority Stats */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-6xl font-normal text-gray-900 mb-2 tracking-tighter">$50M+</div>
              <p className="text-[10px] font-normal text-gray-400 uppercase tracking-[0.3em]">Client Revenue Generated</p>
            </div>
            <div>
              <div className="text-6xl font-normal text-blue-600 mb-2 tracking-tighter">98.4%</div>
              <p className="text-[10px] font-normal text-gray-400 uppercase tracking-[0.3em]">Retention Authority</p>
            </div>
            <div>
              <div className="text-6xl font-normal text-blue-600 mb-2 tracking-tighter">0.4s</div>
              <p className="text-[10px] font-normal text-gray-400 uppercase tracking-[0.3em]">Average Edge Response</p>
            </div>
            <div>
              <div className="text-6xl font-normal text-gray-900 mb-2 tracking-tighter">1.2M+</div>
              <p className="text-[10px] font-normal text-gray-400 uppercase tracking-[0.3em]">AI-RAG Citations Secured</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-8 uppercase tracking-tighter">Ready for results?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-normal">
            Your brand deserves to be a success story. Let's build your indestructible digital ecosystem today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-12 py-6 rounded-xl hover:brightness-110 transition-all font-normal uppercase tracking-widest shadow-sm"
          >
            Start Your Project
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
