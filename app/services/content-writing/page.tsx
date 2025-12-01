'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  PenTool,
  BookOpen,
  FileText,
  AlertTriangle,
  Target,
  Users,
  TrendingUp,
  Edit,
  Sparkles
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: 'Blog Writing',
    description: 'Engaging, SEO-optimized blog posts that drive traffic and establish thought leadership.',
    icon: BookOpen
  },
  {
    title: 'Website Copywriting',
    description: 'Persuasive web copy that converts visitors into customers and clearly communicates your value.',
    icon: FileText
  },
  {
    title: 'SEO Content',
    description: 'Keyword-rich content designed to rank high in search engines while providing real value.',
    icon: Target
  },
  {
    title: 'Social Media Content',
    description: 'Scroll-stopping posts that engage your audience and build brand awareness.',
    icon: Users
  },
  {
    title: 'Email Campaigns',
    description: 'Compelling email copy that drives opens, clicks, and conversions.',
    icon: Edit
  },
  {
    title: 'Product Descriptions',
    description: 'Persuasive descriptions that highlight benefits and drive purchase decisions.',
    icon: Sparkles
  }
];

const testimonials = [
  {
    name: 'Rachel Green',
    company: 'Fashion E-commerce',
    quote: 'One to Five Click transformed our product descriptions. Our conversion rate increased by 67% and returns decreased significantly.',
    rating: 5
  },
  {
    name: 'Tom Anderson',
    company: 'Tech Startup',
    quote: 'Their blog writing service helped us establish authority in our niche. We now get 10k+ monthly visitors from organic search.',
    rating: 5
  },
  {
    name: 'Maria Santos',
    company: 'Consulting Firm',
    quote: 'The website copy they wrote perfectly captures our brand voice and has increased our lead generation by 180%.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'What types of content do you write?',
    answer: 'We write all types of content including blog posts, website copy, product descriptions, email campaigns, social media posts, white papers, case studies, and more.'
  },
  {
    question: 'How do you ensure content is SEO-optimized?',
    answer: 'We conduct thorough keyword research, optimize headers and meta tags, use proper formatting, include internal/external links, and ensure content satisfies search intent while remaining natural and engaging.'
  },
  {
    question: 'What is your content creation process?',
    answer: 'We start with research and strategy, create an outline, write the first draft, optimize for SEO, revise based on feedback, and deliver polished, ready-to-publish content.'
  },
  {
    question: 'Can you match our brand voice?',
    answer: 'Absolutely. We study your existing content, brand guidelines, and target audience to ensure every piece we create aligns perfectly with your brand voice and tone.'
  },
  {
    question: 'How long does it take to create content?',
    answer: 'Timeline varies by project. Blog posts typically take 3-5 days, website pages 5-7 days, and larger projects like white papers 2-3 weeks. Rush delivery is available.'
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes, we include 2 rounds of revisions with every project to ensure you\'re completely satisfied with the final content.'
  },
  {
    question: 'What makes your content different?',
    answer: 'Our content is research-driven, SEO-optimized, and conversion-focused. We don\'t just write—we create strategic content that drives business results.'
  },
  {
    question: 'Can you write for technical industries?',
    answer: 'Yes, our team includes writers with expertise in various industries including technology, healthcare, finance, and more. We research thoroughly to ensure accuracy.'
  },
  {
    question: 'Do you offer content strategy services?',
    answer: 'Yes, we can develop a comprehensive content strategy including topic ideation, keyword targeting, content calendar, and distribution plan.'
  },
  {
    question: 'How do you measure content success?',
    answer: 'We track metrics like organic traffic, rankings, time on page, bounce rate, conversions, and engagement to measure content performance and ROI.'
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

export default function ContentWritingPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Content Writing Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Words That <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Convert & Inspire</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert content that engages your audience, ranks in search engines, and drives real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200 font-bold"
                >
                  Get Content Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all"
                >
                  View Samples
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <img
                src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Content Writing"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-orange-600 border-y border-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Content Pieces', value: '10k+' },
              { label: 'Avg. Engagement', value: '85%' },
              { label: 'Client Satisfaction', value: '99%' },
              { label: 'Industries Served', value: '50+' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-orange-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Content Services</h2>
            <p className="text-lg text-gray-600">From blogs to product descriptions, we've got you covered</p>
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
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content That Makes a Difference</h2>
            <p className="text-lg text-gray-600">See the transformation from generic to compelling</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Before</h3>
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">Generic</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bland, feature-focused copy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No clear value proposition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Poor readability and structure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No SEO optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weak call-to-action</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">After</h3>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">Compelling</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Benefit-driven, persuasive copy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Clear, compelling value proposition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Scannable, engaging format</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Keyword-optimized for search</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Strong, action-oriented CTA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Case Study
              </div>
              <h2 className="text-4xl font-bold mb-6">How We Helped FashionHub Increase Sales by 210%</h2>
              <p className="text-orange-100 mb-8 leading-relaxed">
                FashionHub had great products but boring descriptions. We rewrote 500+ product descriptions with compelling, benefit-focused copy that drove conversions.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">210%</div>
                  <div className="text-orange-100">Sales Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">67%</div>
                  <div className="text-orange-100">Higher Conversion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">40%</div>
                  <div className="text-orange-100">Lower Returns</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">4.8</div>
                  <div className="text-orange-100">Avg. Product Rating</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-all font-bold"
              >
                Get Similar Results
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Content Results"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Trusted by businesses worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Content Writing FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-600">
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

      {/* CTA Section */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Let's create content that connects with your audience and drives results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-orange-600 px-10 py-5 rounded-lg hover:bg-orange-50 transition-all font-bold text-lg shadow-xl"
          >
            Get Content Strategy
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
