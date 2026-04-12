import Link from 'next/link';
import { seoCities, seoNiches } from '@/lib/seo-data';
import { MapPin, Briefcase } from 'lucide-react';

export default function SeoServicesIndex() {
  return (
    <div className="pt-24 pb-32 bg-[#F8FAFC] min-h-screen text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-navy mb-6">
            حلول السيو المخصصة للشركات السعودية والخليجية
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            اختر القطاع والمدينة التي تستهدفها، وشاهد كيف يمكننا تحويل موقعك إلى أداة مستدامة لتوليد العملاء المؤهلين.
          </p>
        </div>

        {seoNiches.map(niche => (
          <div key={niche.slug} className="mb-16 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8 flex-row-reverse border-b border-slate-100 pb-6">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-brand-green" />
              </div>
              <h2 className="text-2xl font-black text-brand-navy">{niche.name}</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {seoCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/seo-services/${city.slug}/${niche.slug}`}
                  className="group flex flex-col items-center justify-center p-6 bg-[#F8FAFC] rounded-[2rem] hover:bg-brand-navy hover:text-white transition-all duration-300 border border-slate-100 hover:border-brand-navy"
                >
                  <MapPin className="w-6 h-6 mb-3 text-slate-400 group-hover:text-brand-green transition-colors" />
                  <span className="font-bold text-brand-navy group-hover:text-white text-sm">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
