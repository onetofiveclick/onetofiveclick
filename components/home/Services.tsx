'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, MousePointerClick, Share2, Code, PenTool, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your organic rankings and drive qualified traffic with proven SEO strategies.',
    href: '/services/seo',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MousePointerClick,
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted paid advertising campaigns across all platforms.',
    href: '/services/ppc',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and amplify your brand across social channels.',
    href: '/services/social-media',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Create stunning, high-performance websites that convert visitors into customers.',
    href: '/services/web-development',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Engage your audience with compelling, SEO-optimized content that tells your story.',
    href: '/services/content-writing',
    color: 'from-orange-500 to-amber-500',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
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
                  className="group block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Learn More
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
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
