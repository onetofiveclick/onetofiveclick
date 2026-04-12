'use client';
// fixed encoding

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, ArrowLeft } from 'lucide-react';

export default function BlogClient({ posts }: { posts: any[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = useMemo(() => {
    return ['الكل', ...Array.from(new Set(posts.map((post) => post.category)))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, posts]);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 font-sans text-right" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-green/20"
          >
            مدونة ون تو فايف كليك الرقمية
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-none"
          >
            رؤى تصنع <br />
            <span className="text-brand-green">النمو الرقمي.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-bold leading-relaxed"
          >
            نشاركك أحدث تقنيات السيو (SEO)، وتحسين محركات الإجابة (AEO)، وأتمتة العمليات لعام 2026 وما بعده.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row-reverse gap-6 items-center justify-between">
           <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="ابحث في المواضيع..."
                className="w-full bg-white border border-slate-200 rounded-full px-12 py-4 text-right font-bold focus:border-brand-green outline-none transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
           </div>
           <div className="flex flex-wrap gap-2 justify-center flex-row-reverse">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all
                    ${selectedCategory === cat
                      ? 'bg-brand-green text-brand-navy shadow-lg shadow-brand-green/20'
                      : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-100'
                    }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 9) * 0.05 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all border border-slate-100 group flex flex-col h-full"
            >
              <Link href={`/blog/${post.slug}/`} className="block relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-brand-navy/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10">
                  {post.category}
                </div>
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[9px] text-slate-400 font-black uppercase tracking-widest mb-4 flex-row-reverse">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-brand-navy mb-4 group-hover:text-brand-green transition-colors tracking-tight leading-tight">
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-slate-500 font-bold leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="inline-flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-widest group/link mt-auto w-max mr-0 ml-auto flex-row-reverse"
                >
                  اقرأ المزيد
                  <ArrowLeft className="h-4 w-4 group-hover/link:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-40">
            <h3 className="text-2xl font-black text-brand-navy mb-4">لم نجد ما تبحث عنه</h3>
            <p className="text-slate-500 font-bold">جرب كلمات مفتاحية أخرى</p>
          </div>
        )}
      </div>
    </div>
  );
}
