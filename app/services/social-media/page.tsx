import { Metadata } from 'next';
import Link from 'next/link';
import { Share2, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Marketing - Digital Wave Agency',
  description: 'Build engaged communities and amplify your brand with expert social media marketing from Digital Wave Agency.',
};

const features = [
  'Social Media Strategy',
  'Content Creation & Curation',
  'Community Management',
  'Influencer Marketing',
  'Social Media Advertising',
  'Analytics & Reporting',
  'Brand Reputation Management',
  'Social Media Audits',
];

const benefits = [
  {
    icon: Users,
    title: 'Build Community',
    description: 'Create engaged communities around your brand on social platforms.',
  },
  {
    icon: Heart,
    title: 'Increase Engagement',
    description: 'Boost likes, shares, comments, and meaningful interactions.',
  },
  {
    icon: Share2,
    title: 'Amplify Reach',
    description: 'Expand your brand awareness and reach new audiences.',
  },
];

export default function SocialMediaPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Social Media Marketing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Build Your Brand on Social Media
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our social media experts help you create authentic connections, build engaged communities, and drive business results across all platforms.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Social Media Marketing"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Social Media Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Social Media Marketing Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-6">
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

      <section className="py-20 bg-gradient-to-br from-pink-600 to-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Social Presence?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's create a social media strategy that resonates with your audience.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Get Social Media Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
