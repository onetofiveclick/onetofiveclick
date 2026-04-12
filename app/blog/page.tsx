import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import BlogClient from './BlogClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'مدونة ون تو فايف كليك | رؤى التسويق الرقمي والسيو و AEO',
  description: 'اكتشف أحدث استراتيجيات السيو وتحسين محركات الإجابة وأتمتة التسويق للشركات في السعودية لعام 2026. مقالات تعليمية ودراسات حالة حقيقية.',
  alternates: {
    canonical: 'https://onetofiveclick.com/blog/',
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogClient posts={blogPosts} />
      </main>
      <Footer />
    </>
  );
}
