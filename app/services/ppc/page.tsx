import { Metadata } from 'next';
import Link from 'next/link';
import { MousePointerClick, Target, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PPC Advertising Services - Digital Wave Agency',
  description: 'Maximize ROI with targeted PPC campaigns. Expert Google Ads, Facebook Ads, and more from Digital Wave Agency.',
};

const features = [
  'Google Ads Management',
  'Facebook & Instagram Ads',
  'LinkedIn Advertising',
  'Display Advertising',
  'Remarketing Campaigns',
  'A/B Testing & Optimization',
  'Conversion Tracking',
  'Performance Reporting',
];

const benefits = [
  {
    icon: Target,
    title: 'Precise Targeting',
    description: 'Reach your ideal customers with laser-focused targeting options.',
  },
  {
    icon: DollarSign,
    title: 'Maximum ROI',
    description: 'Get the most value from every dollar spent on advertising.',
  },
  {
    icon: MousePointerClick,
    title: 'Instant Results',
    description: 'Start driving qualified traffic and conversions immediately.',
  },
];

export default function PPCPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                PPC Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Drive Instant Results with PPC Advertising
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our data-driven PPC campaigns deliver qualified leads and maximize your return on ad spend across all platforms.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="PPC Dashboard"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our PPC Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our PPC Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's create high-performing PPC campaigns that deliver measurable results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Get Free PPC Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
