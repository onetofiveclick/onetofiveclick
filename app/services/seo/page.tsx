'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  BarChart,
  CheckCircle,
  ArrowRight,
  Globe,
  Target,
  Zap,
  Users,
  Layout,
  Link as LinkIcon
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: 'Technical SEO',
    description: 'Optimize your site structure, speed, and mobile performance for better crawling and indexing.',
    icon: Zap,
    href: '/services/seo/technical-seo'
  },
  {
    title: 'On-Page Optimization',
    description: 'Optimize content, meta tags, and internal linking to target the right keywords.',
    icon: Layout,
    href: '/services/seo/on-page-seo'
  },
  {
    title: 'Content Strategy',
    description: 'Create high-quality, relevant content that attracts and engages your target audience.',
    icon: Users,
    href: '/services/content-writing'
  },
  {
    title: 'Link Building',
    description: 'Build high-authority backlinks to increase your domain authority and search rankings.',
    icon: LinkIcon,
    href: '/services/seo/off-page-seo'
  },
  {
    title: 'Local SEO',
    description: 'Dominate local search results and attract customers in your geographic area.',
    icon: Globe,
    href: '/services/seo/local-seo'
  },
  {
    title: 'E-commerce SEO',
    description: 'Optimize product pages and category structure to drive more sales.',
    icon: Target,
    href: '/contact'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Audit & Analysis',
    description: 'We perform a deep dive into your current website performance, identifying technical issues and opportunities.'
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'We create a customized SEO roadmap tailored to your business goals and target audience.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our team executes the strategy, optimizing on-page elements, creating content, and building links.'
  },
  {
    number: '04',
    title: 'Monitoring & Reporting',
    description: 'We track progress, analyze data, and provide transparent reports on your ROI and growth.'
  }
];

const faqs = [
  {
    question: 'What is SEO and why is it important?',
    answer: 'SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results pages (SERPs). It is crucial because higher rankings lead to increased visibility, more organic traffic, and ultimately, more conversions and revenue for your business.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'SEO is a long-term strategy. While some technical fixes can show immediate results, significant organic growth typically takes 3-6 months depending on competition, current site state, and the aggressiveness of your strategy.'
  },
  {
    question: 'What is the difference between On-Page and Off-Page SEO?',
    answer: 'On-Page SEO involves optimizing elements within your website (content, meta tags, site speed), while Off-Page SEO focuses on external factors like building backlinks and social signals to improve your site\'s authority.'
  },
  {
    question: 'Do I need SEO if I have a small business?',
    answer: 'Absolutely. Local SEO is particularly powerful for small businesses, helping you attract customers in your specific geographic area who are actively searching for your products or services.'
  },
  {
    question: 'How much does SEO cost?',
    answer: 'SEO costs vary depending on the scope of work, competition, and your specific goals. We offer customized packages tailored to your budget and needs, ensuring you get the best ROI.'
  },
  {
    question: 'Can you guarantee #1 rankings?',
    answer: 'No reputable agency can guarantee a #1 ranking as search algorithms are constantly changing and are ultimately controlled by search engines like Google. However, we guarantee a proven process and transparent reporting that consistently delivers growth.'
  },
  {
    question: 'What are keywords and how do you choose them?',
    answer: 'Keywords are the terms and phrases people type into search engines. We use advanced tools and research to identify high-value keywords with good search volume and relevance to your business.'
  },
  {
    question: 'What is a backlink and why does it matter?',
    answer: 'A backlink is a link from another website to yours. Search engines view backlinks as votes of confidence; high-quality backlinks from authoritative sites signal that your content is valuable and trustworthy.'
  },
  {
    question: 'Is SEO a one-time process?',
    answer: 'No, SEO is an ongoing process. Search algorithms change frequently, and competitors are always working to outrank you. Continuous optimization is necessary to maintain and improve your rankings.'
  },
  {
    question: 'How does mobile-friendliness affect SEO?',
    answer: 'Google uses mobile-first indexing, meaning it primarily looks at the mobile version of your site for ranking. A responsive, mobile-friendly design is essential for SEO success.'
  },
  {
    question: 'What is local SEO?',
    answer: 'Local SEO focuses on optimizing your online presence to attract more business from relevant local searches. This includes optimizing your Google Business Profile and ensuring NAP (Name, Address, Phone) consistency.'
  },
  {
    question: 'How do you measure SEO success?',
    answer: 'We track key performance indicators (KPIs) such as organic traffic, keyword rankings, conversion rates, and bounce rates. We provide detailed monthly reports to show your progress.'
  },
  {
    question: 'What is technical SEO?',
    answer: 'Technical SEO involves optimizing the infrastructure of your website so search engines can crawl and index it effectively. This includes site speed, XML sitemaps, and fixing broken links.'
  },
  {
    question: 'Why is my website not ranking?',
    answer: 'There could be many reasons, including poor content quality, technical issues, lack of backlinks, or high competition. Our comprehensive SEO audit can identify the specific issues holding you back.'
  },
  {
    question: 'How often should I update my content?',
    answer: 'Regularly updating your content signals to search engines that your site is active and relevant. We recommend a consistent blogging schedule and periodic updates to existing core pages.'
  },
  {
    question: 'What is the difference between SEO and SEM?',
    answer: 'SEO focuses on earning organic traffic through optimization, while SEM (Search Engine Marketing) includes both SEO and paid strategies like PPC (Pay-Per-Click) advertising.'
  },
  {
    question: 'Does social media impact SEO?',
    answer: 'While social media signals are not a direct ranking factor, a strong social presence can drive traffic to your site and increase brand awareness, which indirectly supports your SEO efforts.'
  },
  {
    question: 'What are "bad" SEO practices (Black Hat SEO)?',
    answer: 'Black Hat SEO includes unethical tactics like keyword stuffing, buying links, and cloaking. These practices can lead to penalties from search engines and should be avoided at all costs.'
  },
  {
    question: 'How does site speed affect rankings?',
    answer: 'Site speed is a direct ranking factor. Faster websites provide a better user experience, which search engines reward with higher rankings.'
  },
  {
    question: 'Will AI affect SEO?',
    answer: 'AI is already impacting search with features like Google\'s SGE (Search Generative Experience). However, high-quality, human-centric content that demonstrates expertise and authority (E-E-A-T) remains crucial.'
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

export default function SEOPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Premium SEO Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Search Results</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unlock your website's full potential with data-driven SEO strategies that drive qualified traffic and measurable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                >
                  Get Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all hover:border-blue-200"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SEO Analytics Dashboard"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              {/* Floating Stats Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Organic Traffic</p>
                    <p className="text-2xl font-bold text-gray-900">+145%</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Average client growth in 6 months</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why SEO Matters</h2>
            <p className="text-lg text-gray-600">
              In today's digital landscape, visibility is everything. SEO isn't just about rankings; it's about building a sustainable channel for customer acquisition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '93%', label: 'Online Experiences Begin with Search' },
              { value: '75%', label: 'Users Never Scroll Past Page 1' },
              { value: '14.6%', label: 'Close Rate for SEO Leads (vs 1.7% Outbound)' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <p className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive SEO Solutions</h2>
            <p className="text-lg text-gray-600">Everything you need to climb the rankings and stay there.</p>
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
                <Link key={index} href={feature.href} className="block h-full">
                  <motion.div
                    variants={itemVariants}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-lg text-gray-600">A data-driven approach to delivering consistent results.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
                <div className="relative z-10 bg-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
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
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-gray-900/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their online presence with our expert SEO services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-10 py-5 rounded-lg hover:bg-blue-50 transition-all font-bold text-lg shadow-xl"
          >
            Start Your Growth Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
