import { Metadata } from 'next';
import Link from 'next/link';
import { Code, Smartphone, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development Services - Digital Wave Agency',
  description: 'Create stunning, high-performance websites that convert visitors into customers with Digital Wave Agency.',
};

const features = [
  'Custom Website Design',
  'Responsive Development',
  'E-commerce Solutions',
  'CMS Integration',
  'Web Applications',
  'Performance Optimization',
  'Security & Maintenance',
  'API Development',
];

const benefits = [
  {
    icon: Code,
    title: 'Modern Technology',
    description: 'Built with the latest technologies for optimal performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Fully responsive designs that work perfectly on all devices.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance to keep visitors engaged.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Web Development
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Beautiful Websites That Drive Results
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We create stunning, high-performance websites that engage visitors and convert them into loyal customers.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Web Development"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
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

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Dream Website?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create a website that perfectly represents your brand and drives conversions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
