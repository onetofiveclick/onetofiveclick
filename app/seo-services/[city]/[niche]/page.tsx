import { Metadata } from 'next';
import Link from 'next/link';
import { seoCities, seoNiches } from '@/lib/seo-data';
import { ArrowLeft, CheckCircle2, MapPin, Building2, TrendingUp, Search } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { city: string; niche: string } }): Promise<Metadata> {
  const city = seoCities.find(c => c.slug === params.city);
  const niche = seoNiches.find(n => n.slug === params.niche);

  if (!city || !niche) return {};

  return {
    title: `أفضل شركة سيو لقطاع ${niche.name} في ${city.name} | ون تو فايف كليك`,
    description: `نساعد شركات ${niche.name} في ${city.name} على السيطرة على نتائج البحث العضوية وزيادة المبيعات من خلال التحويل الرقمي والسيو المتقدم.`,
    alternates: {
      canonical: `https://onetofiveclick.com/seo-services/${params.city}/${params.niche}/`,
    },
  };
}

export async function generateStaticParams() {
  const params: { city: string; niche: string }[] = [];
  
  seoCities.forEach((city) => {
    seoNiches.forEach((niche) => {
      params.push({ city: city.slug, niche: niche.slug });
    });
  });

  return params;
}

export default function SeoServiceLocationPage({ params }: { params: { city: string, niche: string } }) {
  const city = seoCities.find(c => c.slug === params.city);
  const niche = seoNiches.find(n => n.slug === params.niche);

  if (!city || !niche) {
    notFound();
  }

  return (
    <div className="pt-16 bg-[#F8FAFC] min-h-screen text-right">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-white/10">
              <MapPin className="w-4 h-4" />
              <span>وكالة سيو متخصصة في {city.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.2] tracking-tight">
              أفضل شركة سيو لقطاع <span className="text-brand-green">{niche.name}</span> في <span className="text-brand-green">{city.name}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-bold">
              نساعد {niche.name} في {city.name} على السيطرة على النتائج الأولى في جوجل، مما يضاعف عدد العملاء المستعدين للدفع دون الاعتماد على الإعلانات المكلفة.
            </p>

            <button className="bg-brand-green text-brand-navy px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              احجز استشارتك المجانية
            </button>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-8">
                 <Search className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-4">المشكلة التي تواجهونها</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {niche.problem}
              </p>
            </div>

            <div className="bg-brand-navy p-12 rounded-[3rem] border border-brand-navy shadow-2xl">
              <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mb-8">
                 <TrendingUp className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">حلولنا في ون تو فايف كليك</h3>
              <p className="text-slate-300 leading-relaxed font-medium">
                {niche.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-6">لماذا تختارنا في {city.name}؟</h2>
            <p className="text-slate-500 font-medium text-lg">
              خوارزميات البحث تختلف باختلاف الموقع الجغرافي. استراتيجيتنا مخصصة لاختراق السوق المحلي في {city.name} وتصدر منافسيك في قطاع {niche.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'كتابة محتوى متوافق مع عملائك', desc: `نقوم بكتابة محتوى باللغة التي يبحث بها أهل ${city.name}، مما يزيد من معدلات ارتباطهم وثقتهم بموقعคุณ.` },
              { title: 'تحليل دقيق للمنافسين المحليين', desc: `ندرس نقاط ضعف منافسيك في ${city.name} ونستغلها لصالحك لبناء خطة سيو تتجاوزهم بأقل وقت ممكن.` },
              { title: 'سيو محلي (Local SEO)', desc: `تأسيس وتقوية ظهوركم في خرائط جوجل بحزمة (Google Local Pack) لاستقبال زيارات العملاء الفوريين.` }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                <CheckCircle2 className="w-10 h-10 text-brand-green mb-6" />
                <h4 className="text-xl font-bold text-brand-navy mb-4">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-linking to avoid orphan pages & spread link juice */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-brand-navy mb-12 text-center">خدماتنا المخصصة للمدن الأخرى</h3>
          <div className="flex flex-wrap justify-center gap-4 flex-row-reverse">
            {seoCities.map(c => (
              c.slug !== city.slug && (
                <Link 
                  key={c.slug} 
                  href={`/seo-services/${c.slug}/${niche.slug}`}
                  className="px-6 py-3 bg-[#F8FAFC] text-brand-navy rounded-full font-bold text-sm border border-slate-100 hover:border-brand-green hover:bg-brand-green/5 transition-colors"
                >
                  {niche.name} في {c.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
