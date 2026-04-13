export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 97,
        title: 'لماذا تنخفض الحركة العضوية لموقعك؟ التحول الخفي نحو محركات الإجابة',
        excerpt: 'إذا كنت تشهد انخفاضاً مفاجئاً وغير مفسر في الحركة العضوية، فأنت لست وحدك. المشهد البحثي يتغير تحت أقدامنا.',
        author: 'فريق ون تو فايف كليك',
        date: '2 مارس 2026',
        category: 'استراتيجية AEO',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'why-organic-traffic-dropping-answer-engines'
    },
    {
        id: 5,
        title: 'تراكم الـ YouTube-RAG: محرك الاستشهاد الخفي',
        excerpt: 'لماذا تعد نصوص الفيديو العامل الأكثر ارتباطاً بظهور الذكاء الاصطناعي وكيفية تحسينها.',
        author: 'فريق ون تو فايف كليك',
        date: '28 فبراير 2026',
        category: 'سيو الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
        slug: 'youtube-rag-stacking-visibility'
    },
    {
        id: 7,
        title: 'GEO مقابل السيو التقليدي: لماذا تفشل الاستراتيجيات القديمة',
        excerpt: 'لماذا يفشل تحسين الكلمات الرئيسية وكيف يعد تحسين المحركات التوليدية الاستراتيجية الوحيدة المقاومة للمستقبل في 2026.',
        author: 'فريق ون تو فايف كليك',
        date: '27 فبراير 2026',
        category: 'السيطرة على السوق',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'geo-vs-traditional-seo-comparison'
    }
];
