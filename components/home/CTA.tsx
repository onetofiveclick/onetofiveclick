'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-red/10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 text-blue-400 px-6 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest shadow-2xl"
            >
              <Zap className="h-4 w-4 mr-2" />
              Limited Monthly Capacity
            </motion.div>
            <Link
              href="/services/creator-strategy"
              className="inline-flex items-center bg-orange-600/10 border border-orange-600/20 text-orange-400 px-6 py-2 rounded-full text-[10px] font-normal uppercase tracking-widest shadow-2xl hover:bg-orange-600/20 transition-colors"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              For Creators & Influencers
            </Link>
          </div>

          <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-10 leading-tight">
            Ready to Build Your <br />
            <span className="text-brand-blue">Global Empire?</span>
          </h2>

          <p className="text-xl text-gray-600 mb-14 max-w-3xl mx-auto font-normal leading-relaxed">
            Stop competing for clicks. Start dominating your niche with an <span className="text-gray-900 font-normal underline">Indestructible Digital Ecosystem</span> and Shadow Operating Architecture designed by One to Five Click.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white px-12 py-5 rounded-xl hover:brightness-110 transition-all font-normal uppercase tracking-widest text-sm group"
            >
              Secure Your Free Audit
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border border-gray-200 text-gray-900 px-12 py-5 rounded-xl hover:bg-gray-50 transition-all font-normal uppercase tracking-widest text-sm"
            >
              The Proof of Concept
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 pt-12 border-t border-gray-100">
            <div className="flex items-center space-x-3 text-gray-400">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              <span className="text-[10px] font-normal uppercase tracking-widest">Enterprise Privacy</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              <span className="text-[10px] font-normal uppercase tracking-widest">Guaranteed Deliverables</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              <span className="text-[10px] font-normal uppercase tracking-widest">2026 AI Protocol Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
