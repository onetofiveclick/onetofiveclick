'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            404
                        </h1>
                    </div>

                    {/* Message */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track!
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-bold"
                        >
                            <Home className="mr-2 h-5 w-5" />
                            Go to Homepage
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-bold"
                        >
                            Contact Support
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>

                    {/* Popular Links */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link
                                href="/services/seo"
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                SEO Services
                            </Link>
                            <span className="text-gray-300">•</span>
                            <Link
                                href="/services/seo/local-seo"
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Local SEO
                            </Link>
                            <span className="text-gray-300">•</span>
                            <Link
                                href="/services/content-writing"
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Content Writing
                            </Link>
                            <span className="text-gray-300">•</span>
                            <Link
                                href="/blog"
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
