import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { seoCities, seoNiches } from '@/lib/seo-data';
import { Briefcase, ArrowRight, MapPin } from 'lucide-react';

export function generateStaticParams() {
  return seoCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = seoCities.find((c) => c.slug === params.city);
  if (!city) return {};

  return {
    title: `خدمات سيو (SEO) في ${city.name} | ون تو فايف كليك`,
    description: `تعرف على حلول السيو المخصصة للشركات في ${city.name}. نساعدك على تصدر نتائج البحث وجذب العملاء في منطقتك.`,
    alternates: {
      canonical: `https://onetofiveclick.com/seo-services/${params.city}/`,
    },
  };
}

export default function CitySeoServicesPage({ params }: { params: { city: string } }) {
  const city = seoCities.find((c) => c.slug === params.city);

  if (!city) {
    notFound();
  }

  return (
    <div className="pt-24 pb-32 bg-[#F8FAFC] min-h-screen text-right" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link 
            href="/seo-services" 
            className="inline-flex items-center text-brand-navy hover:text-brand-green font-black uppercase tracking-widest text-[10px] transition-all group gap-2"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
            العودة إلى جميع الخدمات والخدمات
          </Link>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-green/20">
            <MapPin className="w-3 h-3" />
            خبراء السيو في {city.name}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter">
            خدمات السيو المتخصصة في <span className="text-brand-green">{city.name}</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            نقدم استراتيجيات سيو مخصصة لكل قطاع في {city.name}. اختر نوع عملك لتعرف كيف يمكننا مساعدتك على النمو.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoNiches.map((niche) => (
            <Link
              key={niche.slug}
              href={`/seo-services/${city.slug}/${niche.slug}/`}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-[4rem] -mr-16 -mt-16 group-hover:bg-brand-green/10 transition-colors" />
              
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-brand-green" />
              </div>
              
              <h2 className="text-2xl font-black text-brand-navy mb-6 group-hover:text-brand-green transition-colors leading-tight relative z-10">
                {niche.name}
              </h2>
              
              <p className="text-slate-500 font-medium mb-10 leading-relaxed relative z-10 flex-grow">
                {niche.problem}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-widest mt-auto border-t border-slate-50 pt-6">
                استكشف الحلول
                <ArrowRight className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
