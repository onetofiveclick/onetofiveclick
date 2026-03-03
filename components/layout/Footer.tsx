import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.svg"
                alt="One to Five Click Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Transforming brands through innovative digital marketing strategies and cutting-edge solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-normal text-gray-900 mb-6 uppercase tracking-widest text-[10px]">AI-Ready Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/seo" className="hover:text-blue-400 transition-colors">
                  AI-Proof Search Authority
                </Link>
              </li>
              <li>
                <Link href="/services/ppc" className="hover:text-blue-400 transition-colors">
                  AI & Revenue Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-blue-400 transition-colors">
                  Next.js High-Performance Web
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal text-gray-900 mb-6 uppercase tracking-widest text-[10px]">Authority Hub</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  Our Expert Methodology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Direct Strategy Sync
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-blue-400 transition-colors">
                  Master Index (Sitemap)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal text-gray-900 mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@8125click.com</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Contact Us via Form</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} One to Five Click. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
