import { Metadata } from 'next';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Digital Wave Agency',
  description: 'Learn about our mission, values, and the expert team behind Digital Wave Agency.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Digital Wave
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate digital marketers, developers, and strategists dedicated to helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2015, Digital Wave Agency started with a simple mission: to help businesses navigate the ever-changing digital landscape with confidence and creativity.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we've grown from a small startup to a full-service digital marketing agency, serving clients across industries and geographies. Our success is built on a foundation of data-driven strategies, creative excellence, and unwavering commitment to our clients' success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be a trusted partner for businesses looking to make their mark in the digital world. From startups to enterprises, we bring the same level of dedication and expertise to every project.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We measure success by the tangible results we deliver for our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Focused</h3>
              <p className="text-gray-600">
                Your success is our success. We're committed to understanding your unique needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, no matter the size or scope.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of trends to bring you cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
