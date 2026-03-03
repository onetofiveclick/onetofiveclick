'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'Next.js Development', href: '/services/nextjs-development' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'WordPress Services', href: '/services/wordpress-services' },
  { name: 'AI Growth (PPC)', href: '/services/ppc' },
  { name: 'Social SEO', href: '/services/social-media' },
  { name: 'Email & SMS Retention', href: '/services/email-sms-marketing' },
  { name: 'Creator Strategy', href: '/services/creator-strategy' },
  { name: 'GEO', href: '/services/geo' },
];

const seoServices = [
  { name: 'SEO Overview', href: '/services/seo' },
  { name: 'Brand Positioning', href: '/services/brand-positioning' },
  { name: 'Technical SEO', href: '/services/seo/technical-seo' },
  { name: 'Local SEO', href: '/services/seo/local-seo' },
  { name: 'Content Authority', href: '/services/content-writing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo.svg"
              alt="One to Five Click Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-blue transition-colors">
              About
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-blue transition-colors flex items-center font-normal">
                SEO
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  {seoServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-blue/5 hover:text-brand-blue transition-colors text-sm font-normal"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-blue transition-colors flex items-center font-normal">
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-blue/5 hover:text-brand-blue transition-colors text-sm font-normal"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="text-gray-700 hover:text-brand-blue transition-colors font-normal">
              Portfolio
            </Link>
            <Link href="/expertise" className="text-gray-700 hover:text-brand-blue transition-colors font-normal">
              Expertise
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-brand-blue transition-colors font-normal">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-blue transition-colors font-normal">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:brightness-110 transition-colors font-normal text-sm"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-brand-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-700 hover:text-brand-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <div>
                <button
                  onClick={() => setIsSeoOpen(!isSeoOpen)}
                  className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-brand-blue transition-colors"
                >
                  SEO
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSeoOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSeoOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {seoServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-gray-600 hover:text-brand-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-gray-600 hover:text-brand-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="block py-2 text-gray-700 hover:text-brand-blue transition-colors font-normal"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/expertise"
                className="block py-2 text-gray-700 hover:text-brand-blue transition-colors font-normal"
                onClick={() => setIsOpen(false)}
              >
                Expertise
              </Link>
              <Link
                href="/blog"
                className="block py-2 text-gray-700 hover:text-brand-blue transition-colors font-normal"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-brand-blue transition-colors font-normal"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center bg-brand-blue text-white px-6 py-2 rounded-lg hover:brightness-110 transition-colors mt-4 font-normal"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
