'use client';

import { useState } from 'react';
import { Mail, Send, Clock, CheckCircle, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'ai-growth-engine',
    revenue: '10k-50k',
    tier: 'growth',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitMessage('Sync Initialized. Our Strategy Lead will audit your assets and respond within 4 hours.');
    setFormData({ name: '', email: '', phone: '', service: 'ai-growth-engine', revenue: '10k-50k', tier: 'growth', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 8000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 overflow-hidden">
      {/* 2026 Vetting Status */}
      <div className="bg-brand-blue text-white py-4 border-b border-brand-blue/90 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[10px] font-normal uppercase tracking-widest relative">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" /> Client Vetting: ACTIVE</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">Project Capacity: 2 / 5 Slots Remaining</span>
          </div>
          <div className="hidden sm:block">EST. RESPONSE VELOCITY: 240 MIN</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue px-5 py-2 rounded-full text-xs font-normal mb-10 border border-brand-blue/10">
                <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                <span>Revenue Partnership</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight">
                Initiate <br />
                <span className="text-brand-blue">Synergy.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
                // stop looking for an agency. start looking for a partner in revenue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-12">
                <div className="p-8 bg-white text-gray-900 rounded-[3rem] shadow-sm border border-gray-200 relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors" />
                  <h3 className="text-2xl font-normal mb-4 leading-tight">The 2026 Commitment</h3>
                  <p className="text-gray-600 font-normal leading-relaxed mb-8">
                    We don't do "discovery calls." We do <span className="text-brand-blue font-normal">Revenue Audits</span>. We don't just sell services; we sell scalable business models. If we don't believe your operations can handle a massive surge in sales, we won't take your money.
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                    <div>
                      <div className="text-3xl font-normal text-brand-blue">1:10</div>
                      <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest mt-1">Minimum Target ROI</p>
                    </div>
                    <div>
                      <div className="text-3xl font-normal text-brand-blue">Zero</div>
                      <p className="text-[10px] font-normal text-gray-500 uppercase tracking-widest mt-1">Wasted Clicks Promise</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 pl-4">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-400 group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-colors duration-500">
                      <Mail className="h-6 w-6 text-gray-400 group-hover:text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-normal text-gray-900 mb-1 leading-tight">Direct Strategy Access</h4>
                      <p className="text-gray-600 font-normal">team@onetofiveclick.com</p>
                      <p className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mt-1">Priority Response Queue</p>
                    </div>
                  </div>
                </div>

                <div className="p-10 bg-white rounded-[2.5rem] border border-gray-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl" />
                  <h3 className="text-xl font-normal mb-6 text-gray-900 leading-tight">Vetting Credentials</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3 text-xs font-normal text-gray-600">
                      <CheckCircle className="h-4 w-4 text-brand-blue" />
                      <span>LLC Registered 2026</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs font-normal text-gray-600">
                      <CheckCircle className="h-4 w-4 text-brand-blue" />
                      <span>Stripe Verified Partner</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs font-normal text-gray-600">
                      <CheckCircle className="h-4 w-4 text-brand-blue" />
                      <span>Clutch Top Agency 2025</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs font-normal text-gray-600">
                      <CheckCircle className="h-4 w-4 text-brand-blue" />
                      <span>Hostinger Agency Auth</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-10 md:p-12 text-gray-900 shadow-lg border border-gray-200 group"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] font-normal uppercase tracking-widest text-gray-600 mb-3 block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-400 rounded-md px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-normal placeholder:text-gray-400 text-gray-900"
                      placeholder="ALEX MERCER"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-normal uppercase tracking-widest text-gray-600 mb-3 block">Email Domain</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-400 rounded-md px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-normal placeholder:text-gray-400 text-gray-900"
                      placeholder="ALEX@COMPANY.COM"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] font-normal uppercase tracking-widest text-gray-600 mb-3 block">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-400 rounded-md px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-normal placeholder:text-gray-400 text-gray-900"
                      placeholder="GLOBAL LOGISTICS INC"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-normal uppercase tracking-widest text-gray-600 mb-3 block">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-400 rounded-md px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-normal placeholder:text-gray-400 text-gray-900"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] font-normal uppercase tracking-widest text-gray-600 mb-3 block">Current Monthly Revenue</label>
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-400 rounded-md px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-normal text-gray-900"
                    >
                      <option value="0-10k">&lt;$10,000 / mo</option>
                      <option value="10k-50k">$10k - $50k / mo</option>
                      <option value="50k-250k">$50k - $250k / mo</option>
                      <option value="250k+">$250,000+ / mo</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-normal uppercase tracking-widest text-gray-600 mb-3 block">Operational Capacity</label>
                    <select
                      name="tier"
                      value={formData.tier}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-400 rounded-md px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-normal text-gray-900"
                    >
                      <option value="ready">Ready: We can handle a massive surge</option>
                      <option value="scaling">Scaling: We will need to hire/expand</option>
                      <option value="bottleneck">Bottleneck: Currently struggling with fulfillment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-normal uppercase tracking-widest text-gray-600 mb-3 block">Primary Growth Focus</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { id: 'ai-growth-engine', label: 'AI Growth' },
                      { id: 'local-seo', label: 'Local SEO' },
                      { id: 'organic-narrative', label: 'Organic Narrative' },
                      { id: 'web-asset', label: 'Web Asset' },
                      { id: 'shadow-operating', label: 'Creator Shadow' },
                      { id: 'revenue-recovery', label: 'Revenue Recovery' }
                    ].map((opt) => (
                      <label key={opt.id} className="cursor-pointer group">
                        <input
                          type="radio"
                          name="service"
                          value={opt.id}
                          checked={formData.service === opt.id}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`px-4 py-3 border rounded-md text-[10px] font-normal uppercase tracking-widest text-center transition-all ${formData.service === opt.id ? 'bg-brand-blue border-brand-blue text-white shadow-md' : 'bg-white border-gray-400 text-gray-600 hover:border-brand-blue hover:text-brand-blue'}`}>
                          {opt.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-normal uppercase tracking-widest text-gray-600 mb-3 block">Revenue Roadmap & Challenges</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white border border-gray-400 rounded-md px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-normal placeholder:text-gray-400 resize-none text-gray-900"
                    placeholder="TELL US ABOUT YOUR CURRENT BIGGEST GROWTH BOTTLENECK..."
                  />
                </div>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-blue/5 border border-brand-blue/20 text-brand-blue px-6 py-4 rounded-2xl flex items-center space-x-3 font-normal text-sm"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{submitMessage}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue text-white px-8 py-5 rounded-xl hover:brightness-110 transition-all font-normal uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex items-center justify-center space-x-3 group"
                >
                  {isSubmitting ? 'PROCESSING...' : (
                    <>
                      <span>INITIATE REVENUE AUDIT</span>
                      <Zap className="h-5 w-5 group-hover:scale-125 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Verification Log (EEAT 2.0) */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 text-center md:text-left">
            <div className="max-w-md">
              <ShieldCheck className="h-12 w-12 text-brand-blue mb-6 mx-auto md:mx-0" />
              <h2 className="text-3xl font-normal text-gray-900 mb-4 leading-tight">Absolute Data <span className="text-brand-blue">Security.</span></h2>
              <p className="text-gray-600 font-normal">All financial audits and project discussions are covered by our standard NDA and encrypted via 256-bit AES protocols. Your roadmap is your asset.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 sm:gap-20">
              <div className="group">
                <Globe className="h-8 w-8 text-gray-400 group-hover:text-brand-blue transition-colors mx-auto mb-4" />
                <div className="text-[10px] font-normal text-gray-400 uppercase tracking-widest text-center">Global Ops</div>
              </div>
              <div className="group">
                <Cpu className="h-8 w-8 text-gray-400 group-hover:text-brand-blue transition-colors mx-auto mb-4" />
                <div className="text-[10px] font-normal text-gray-400 uppercase tracking-widest text-center">AI Audit Core</div>
              </div>
              <div className="group">
                <CheckCircle className="h-8 w-8 text-gray-400 group-hover:text-brand-blue transition-colors mx-auto mb-4" />
                <div className="text-[10px] font-normal text-gray-400 uppercase tracking-widest text-center">100% Verified</div>
              </div>
              <div className="group">
                <Zap className="h-8 w-8 text-gray-400 group-hover:text-brand-blue transition-colors mx-auto mb-4" />
                <div className="text-[10px] font-normal text-gray-400 uppercase tracking-widest text-center">Rapid Sync</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
