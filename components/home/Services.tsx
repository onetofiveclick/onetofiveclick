'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, MousePointerClick, Share2, Code, PenTool, ArrowRight, Zap, Users, Mail, BrainCircuit, TrendingUp, Cpu } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'AI-Powered SEO & Growth Systems',
    description: 'Autonomous visibility via Semantic Entity Calibration and RAG-driven authority across SearchGPT, Claude, and Gemini.',
    href: '/services/seo',
    color: 'from-brand-blue to-brand-red',
  },
  {
    icon: TrendingUp,
    title: 'Smart Performance Marketing Solutions',
    description: 'Precision-engineered acquisition via AI-optimized bidding and Agentic Lead Recovery protocols.',
    href: '/services/ppc',
    color: 'from-gray-600 to-gray-400',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Data & Conversion Optimization',
    description: 'Generative Engine Optimization to force your brand into ChatGPT and Perplexity citations as the definitive answer.',
    href: '/services/geo',
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    icon: Share2,
    title: 'AI Automation for Lead Generation',
    description: 'Autonomous content structuring and native transaction ecosystems that turn social search into revenue.',
    href: '/services/social-media',
    color: 'from-brand-blue to-gray-600',
  },
  {
    icon: Code,
    title: 'Autonomous Web Systems',
    description: 'High-conversion Next.js ecosystems built via agentic workflows for high-ticket service dominance.',
    href: '/services/web-development',
    color: 'from-gray-800 to-brand-blue',
  },
  {
    icon: Mail,
    title: 'Email & SMS Retention',
    description: 'Own your audience. Direct-to-human high-ROI sequences that monetize your data in perpetuity.',
    href: '/services/email-sms-marketing',
    color: 'from-cyan-700 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Creator Shadow Operating',
    description: 'We build the backend ecosystems for micro-creators, handling monetization while they create.',
    href: '/services/creator-strategy',
    color: 'from-brand-red to-gray-700',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-block bg-brand-blue/5 text-brand-blue px-4 py-2 rounded-full text-[10px] font-normal mb-6 border border-brand-blue/10 uppercase tracking-widest">
            The 2026 Agency Stack
          </div>
          <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6 leading-tight">
            Engineered for <span className="text-brand-blue">Revenue.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
            We don't do "Marketing." We build the <span className="text-gray-900 font-normal underline">Boring Infrastructure</span> that solves the only problem businesses actually pay for: <span className="text-gray-900 font-normal">New Customers.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-white border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full shadow-sm"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-normal text-gray-900 mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 mb-8 leading-relaxed text-sm font-normal">
                    {service.description}
                  </p>

                  <div className="flex items-center text-brand-blue font-normal text-sm group-hover:gap-2 transition-all">
                    Initiate Protocol
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 relative z-10"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
            <Link
              href="/expertise"
              className="inline-flex items-center text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-10 py-5 rounded-2xl hover:bg-brand-blue hover:text-white transition-all font-normal uppercase tracking-widest text-sm"
            >
              Explore Full AI Portfolio
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gray-900 text-white px-10 py-5 rounded-2xl hover:bg-brand-blue transition-all hover:shadow-2xl font-normal uppercase tracking-widest text-sm"
            >
              Start Your Growth Sync
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
