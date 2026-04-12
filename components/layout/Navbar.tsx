'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationLinks = [
  { name: 'المنهجية', href: '/methodology/' },
  { name: 'مركز المعرفة', href: '/blog/' },
  { name: 'الأدوات', href: '/tools/' },
  { name: 'الخدمات', href: '/services/' },
  { name: 'خبراتنا', href: '/expertise/' },
  { name: 'أعمالنا', href: '/portfolio/' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/80 backdrop-blur-md py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse justify-between items-center h-12">
          <Link href="/" className="flex items-center group flex-row-reverse">
            <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-brand-navy/10">
                    <span className="text-brand-green font-black text-xl leading-none">1-5</span>
                </div>
                <span className="text-xl font-black tracking-tighter text-brand-navy">كليك</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-row-reverse">
            {navigationLinks.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-slate-600 hover:text-brand-green transition-colors font-bold uppercase tracking-widest text-[11px]"
                >
                    {link.name}
                </Link>
            ))}
            
            <div className="flex items-center gap-6 pl-8 border-l border-slate-100 flex-row-reverse">
                <Link href="/contact/" className="text-slate-600 hover:text-brand-green transition-colors font-bold uppercase tracking-widest text-[11px]">
                    تسجيل الدخول
                </Link>
                <Link
                    href="/contact/"
                    className="bg-brand-green text-brand-navy px-8 py-3.5 rounded-full hover:bg-brand-green/90 transition-all font-extrabold uppercase tracking-widest text-[11px] shadow-lg shadow-brand-green/10"
                >
                    تجربة مجانية
                </Link>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-slate-50 text-brand-navy transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-navy/50 backdrop-blur-sm z-[-1]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-[100] shadow-2xl p-10 flex flex-col text-right"
            >
              <div className="flex justify-between items-center mb-16 flex-row-reverse">
                <span className="text-xl font-black tracking-tighter text-brand-navy">التنقل</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-50 rounded-full text-brand-navy">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-8 flex-grow">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-2xl font-black text-brand-navy hover:text-brand-green transition-colors tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-10 border-t border-slate-100 space-y-4">
                <Link
                  href="/contact/"
                  className="block w-full text-center py-4 text-slate-600 font-bold uppercase tracking-widest text-[11px]"
                  onClick={() => setIsOpen(false)}
                >
                  تسجيل الدخول
                </Link>
                <Link
                  href="/contact/"
                  className="block w-full text-center bg-brand-green text-brand-navy py-5 rounded-full font-extrabold uppercase tracking-widest text-[11px] shadow-lg shadow-brand-green/10"
                  onClick={() => setIsOpen(false)}
                >
                  ابدأ التجربة المجانية
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
