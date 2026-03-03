import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Users, Award, TrendingUp, ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Digital Wave Agency',
  description: 'Learn about our mission, values, and the expert team behind Digital Wave Agency.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
              <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
              <span>Our Story & Mission</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
              About <br />
              <span className="text-brand-blue">One to Five Click.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
              We are a global digital marketing and Next.js development powerhouse, driven by a team of visionary strategists and engineers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-normal text-gray-900 mb-6 leading-tight">Our Global Vision</h2>
              <div className="space-y-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-lg font-normal">
                  One to Five Click is more than a digital agency—we are a growth engine for global enterprises, built on a foundation of technical excellence and strategic vision.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed font-normal">
                  As an authority-driven digital agency, we don't just provide services; we build high-performance assets. Our team leads the strategic vision and operations, driving operational excellence and client success frameworks.
                </p>
                <p className="text-gray-600 leading-relaxed border-l-4 border-blue-600 pl-4 font-normal">
                  "Our mission is to empower businesses with '1 to 5 Click' solutions—where complex technology becomes remarkably simple for the user."
                </p>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Today, we're proud to be a trusted global partner for businesses looking to dominate search engines and deploy high-performance Next.js and WordPress architectures.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 leading-tight">The Operator <span className="text-blue-600">Manifesto.</span></h2>
            <p className="text-gray-500 font-normal uppercase tracking-widest text-sm">How we build relationships and retain enterprise value.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center group border border-gray-100 hover:border-blue-500 transition-colors duration-500">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <Target className="h-8 w-8 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-tight">Hyper Specialization</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-normal">
                Generalist agencies are fading. We don't do everything. We own a tiny niche and become the definitive G.O.A.T. for our clients, creating an unfair organic advantage.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center group border border-gray-100 hover:border-blue-500 transition-colors duration-500">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <Award className="h-8 w-8 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3 leading-tight">Frictionless Workflow</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-normal">
                We make it incredibly easy to work with us. No chaotic Slack channels. Just clean SOPs, standardized templates, and a centralized portal that feels effortless for your team.
              </p>
            </div>

            <div className="bg-gray-900 p-10 rounded-[2.5rem] shadow-sm text-center group border border-white/5 !text-white hover:border-white/10 transition-colors duration-500">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors">
                <Users className="h-8 w-8 text-white group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3 leading-tight">Zero Introverts</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-normal">
                If we don't tell you what we're doing, we aren't working. We eliminate the "agency black box" with rigorous weekly reporting, bi-weekly strategy syncs, and absolute transparent planning.
              </p>
            </div>

            <div className="bg-blue-600 p-10 rounded-[2.5rem] shadow-sm text-center group border border-blue-600 hover:brightness-110 transition-all duration-500 !text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors relative z-10">
                <TrendingUp className="h-8 w-8 text-white group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3 leading-tight relative z-10">Retention via R&D</h3>
              <p className="text-blue-100 text-sm leading-relaxed font-normal relative z-10">
                We reinvest agency profits into client R&D. We build proprietary calculators, automated predictive dashboards, and custom BI tools that integrate perfectly into your operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Founder-to-Founder Protocol */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 leading-tight">Founder-to-Founder Protocol</h2>
            <p className="text-blue-600 font-normal uppercase tracking-widest text-sm">People Buy People. Not Agencies.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                <ShieldCheck className="h-16 w-16 text-blue-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-normal mb-4 text-gray-900 leading-tight">Direct Senior Access</h3>
                <p className="text-gray-600 font-normal leading-relaxed mb-6">
                  "I don't sell One to Five Click. I sell my operations." — At the end of the day, you aren't trusting a logo; you are trusting the people analyzing your business. We don't bait-and-switch you with a senior team on the discovery call, only to hand your account to a junior account manager the next day.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="font-normal text-gray-900 uppercase tracking-widest text-xs">Founders Close the Deal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="font-normal text-gray-900 uppercase tracking-widest text-xs">Dedicated Pods (No Outsourcing Core)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EEAT 2.0: Technical Verification Log */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-12 shadow-sm relative">
            <div className="absolute top-8 right-8 text-blue-500 opacity-30">
              <Award className="h-12 w-12" />
            </div>

            <h2 className="text-3xl font-normal mb-8 leading-tight">Verification Log: Global Authority Protocol</h2>

            <div className="space-y-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-400 mb-4 font-mono">
                  [STATUS: HUMAN_AUDITED_2.0] <br />
                  [SYSTEM: GLOBAL_SEO_INFRASTRUCTURE] <br />
                  [TIMESTAMP: MARCH_2026]
                </p>
                <p className="text-lg text-gray-200 leading-relaxed mb-6 font-normal">
                  "Every digital asset deployed by One to Five Click is manually audited by our lead strategists to ensure complete alignment with 2026 AI-driven search models. We reject AI-generated genericism in favor of high-signal human authority."
                </p>

                <div className="pt-8 border-t border-white/10">
                  <div className="space-y-4">
                    <p className="text-[10px] font-normal uppercase tracking-widest text-blue-400 mb-2">Leadership Team</p>
                    <div className="font-normal text-xl text-white leading-tight">One to Five Click</div>
                    <p className="text-sm text-gray-400 leading-relaxed font-normal">
                      Our team brings a decade of experience in high-performance digital architecture. From scaling E-commerce giants to consulting on global SEO infrastructure, we transform complex technology into '1 to 5 Click' simplicity with enterprise-level accountability and zero-friction communication.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-center text-[10px] font-normal text-gray-600 uppercase tracking-widest leading-loose">
                This asset is protected by a proprietary E-E-A-T integrity model. <br />
                © 2026 One to Five Click • Global Headquarters • Islamabad / Dubai / London
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
