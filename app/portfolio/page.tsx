import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio - Digital Wave Agency',
  description: 'Explore our successful digital marketing projects and case studies.',
};

const projects = [
  {
    title: 'E-commerce Growth',
    client: 'StyleHub Fashion',
    category: 'SEO & PPC',
    image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+320% Revenue Increase',
    description: 'Increased online sales through strategic SEO and targeted PPC campaigns.',
  },
  {
    title: 'Brand Awareness Campaign',
    client: 'TechStart Inc',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '100K+ Followers',
    description: 'Built engaged community across multiple social platforms.',
  },
  {
    title: 'Website Redesign',
    client: 'GrowthCo Solutions',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+250% Conversions',
    description: 'Modern, conversion-optimized website with seamless user experience.',
  },
  {
    title: 'Content Marketing',
    client: 'HealthFirst Wellness',
    category: 'Content Writing',
    image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+400% Organic Traffic',
    description: 'Strategic content that drove organic traffic and established authority.',
  },
  {
    title: 'Lead Generation',
    client: 'ProService B2B',
    category: 'PPC & Landing Pages',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '500+ Qualified Leads',
    description: 'Targeted campaigns that generated high-quality B2B leads.',
  },
  {
    title: 'Local SEO',
    client: 'Downtown Dental',
    category: 'Local SEO',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '#1 Local Rankings',
    description: 'Dominated local search results and increased patient bookings.',
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. Discover how we've helped businesses achieve their digital marketing goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full inline-block mb-2">
                      {project.category}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.client}</p>

                  <div className="flex items-center text-green-600 font-semibold mb-4">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    {project.results}
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">250%</div>
              <div className="text-gray-600">Avg ROI Growth</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create a custom strategy that delivers measurable results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
