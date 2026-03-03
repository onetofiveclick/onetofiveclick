'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, BarChart3, Zap, Globe, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />

      {/* Corporate Design Element: The Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 opacity-10 pointer-events-none">
        <svg className="relative block w-full h-[200px] md:h-[350px]" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#662046" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,224C672,235,768,245,864,229.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        {/* Top: Centered Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10"
          >
            <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
            <span>Full-Stack AI & RAG Authority</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight"
          >
            AI-Powered <br />
            <span className="text-brand-blue">Growth Systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            We build <span className="text-gray-900 font-normal">AI-powered growth systems</span> that turn traffic into <span className="text-brand-blue font-normal underline">predictable revenue.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all font-normal text-lg group"
            >
              Start Your Empire
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border border-gray-200 text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-50 transition-all font-normal text-lg"
            >
              The Results
            </Link>
          </motion.div>

          {/* Founders Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-6 mb-20"
          >
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-4 ring-white bg-brand-blue flex items-center justify-center">
                <span className="text-white text-sm font-normal">1→5</span>
              </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-normal text-gray-900">One to Five Click Team</p>
              <p className="text-xs font-normal text-gray-400">Lead AI Systems Architects</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Stats & Proof Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-brand-blue/20 transition-colors group">
            <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue/20 transition-colors">
              <Zap className="h-5 w-5 text-brand-blue" />
            </div>
            <div className="text-2xl sm:text-3xl font-normal text-gray-900 mb-1">60%</div>
            <div className="text-xs font-normal text-gray-400">Work Reduction</div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-brand-blue/20 transition-colors group">
            <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue/20 transition-colors">
              <TrendingUp className="h-5 w-5 text-brand-blue" />
            </div>
            <div className="text-2xl sm:text-3xl font-normal text-brand-blue mb-1">5X</div>
            <div className="text-xs font-normal text-gray-400">Response Speed</div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-brand-blue/20 transition-colors group">
            <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue/20 transition-colors">
              <Shield className="h-5 w-5 text-brand-blue" />
            </div>
            <div className="text-2xl sm:text-3xl font-normal text-brand-blue mb-1">99.9%</div>
            <div className="text-xs font-normal text-gray-400">Precision Upscaling</div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-brand-blue/20 transition-colors group">
            <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue/20 transition-colors">
              <BarChart3 className="h-5 w-5 text-brand-blue" />
            </div>
            <div className="text-2xl sm:text-3xl font-normal text-gray-900 mb-1">98.4%</div>
            <div className="text-xs font-normal text-gray-400">Retention Authority</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
