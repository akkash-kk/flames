import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, ChevronDown, Flame, Shield, Sparkles, Sliders } from 'lucide-react';
import { ActiveSection, GasFireplaceVariant } from '../types';
import { OUTDOOR_GAS_VARIANTS } from '../data';

interface GasFireplaceVariantPageProps {
  variantId: string;
  onNavigate: (section: ActiveSection) => void;
}

export default function GasFireplaceVariantPage({ variantId, onNavigate }: GasFireplaceVariantPageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const variant = OUTDOOR_GAS_VARIANTS.find(v => v.id === variantId) || OUTDOOR_GAS_VARIANTS[0];
  const otherVariants = OUTDOOR_GAS_VARIANTS.filter(v => v.id !== variant.id);

  return (
    <div id={`variant-${variant.id}`} className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-24">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <button
          onClick={() => onNavigate('outdoor-gas-fireplace')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-orange-400 transition-colors uppercase tracking-wider group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Outdoor Gas Fireplace Collection
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-20 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.16),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_35%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <Flame className="w-3.5 h-3.5 fill-current" />
                {variant.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6"
              >
                {variant.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8"
              >
                {variant.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <a
                  id={`wa-cta-variant-${variant.id}`}
                  href={`https://wa.me/971542112891?text=${encodeURIComponent(variant.waMessage)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-semibold flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-600/25 cursor-pointer text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-5 h-5 shrink-0 fill-current">
                    <path d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
                  </svg>
                  Get Instant Quote on WhatsApp
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-4 rounded-2xl bg-[#161616] hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Free Site Survey
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={variant.image}
                  alt={`${variant.title} Dubai outdoor installation — Flames Fireplace`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  Custom sizes from 60cm to 300cm
                </span>
                <span className="bg-orange-500/90 text-white px-3 py-1.5 rounded-lg font-medium">
                  UAE Certified
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications & Overview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-[#121212] rounded-3xl p-8 sm:p-10 border border-neutral-800">
              <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Engineered Architecture</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">System Architecture & Overview</h2>
              <p className="mt-4 text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
                {variant.detailedDescription}
              </p>
            </div>

            {/* Key Features */}
            {variant.features && variant.features.length > 0 && (
              <div className="bg-[#121212] rounded-3xl p-8 sm:p-10 border border-neutral-800">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  Key Engineered Capabilities
                </h3>
                <div className="grid sm:grid-cols-1 gap-4">
                  {variant.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm sm:text-base text-neutral-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How It Works */}
            <div className="bg-[#121212] rounded-3xl p-8 sm:p-10 border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2.5">
                <Sliders className="w-5 h-5 text-orange-500" />
                Operational Workflow
              </h3>
              <div className="space-y-4">
                {variant.howItWorks.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specs & Consultation */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Technical Specs Card */}
            <div className="bg-[#121212] rounded-3xl p-8 border border-neutral-800">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2 text-orange-400">
                <Shield className="w-4 h-4" />
                Technical Specifications
              </h3>
              <div className="divide-y divide-neutral-800">
                {variant.specs.map((sp, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                    <span className="text-neutral-400 font-medium">{sp.label}</span>
                    <span className="text-white font-semibold text-right">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-b from-neutral-900 to-black p-8 text-white shadow-xl shadow-orange-500/5">
              <span className="text-xs uppercase tracking-[0.25em] text-orange-400 font-semibold">Bespoke Fabrication</span>
              <h3 className="mt-3 text-xl font-semibold">Custom Sizing for UAE Projects</h3>
              <p className="mt-3 text-neutral-300 text-sm leading-relaxed font-light">
                We custom-fabricate burner trays, drop-in pans, wind glass guards, and decorative fire glass/lava rock beds for residential villas and luxury commercial venues.
              </p>
              <a
                href={`https://wa.me/971542112891?text=${encodeURIComponent(`Hi Flames Fireplace, I need technical drawings and a custom quote for ${variant.title}.`)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 hover:bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all cursor-pointer shadow-md shadow-orange-600/30"
              >
                Inquire for CAD & Sizing
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-[#0f0f0f] py-20 border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Advantages</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Why Choose {variant.shortTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {variant.benefits.map((benefit, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-800 bg-[#141414] p-6 hover:border-orange-500/40 transition-colors">
                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <p className="text-sm sm:text-base font-medium text-neutral-200 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {variant.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Common Queries</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {variant.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-800 bg-[#121212] overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-800/40 transition-colors cursor-pointer"
                >
                  <span className="font-medium text-sm sm:text-base text-white">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-orange-400 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800/80 bg-neutral-900/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other Gas Fireplace Models */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Explore Alternatives</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Other Gas Fireplace Configurations</h2>
          </div>
          <button
            onClick={() => onNavigate('outdoor-gas-fireplace')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 cursor-pointer"
          >
            View All 5 Models
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherVariants.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onNavigate(item.id as ActiveSection);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-[#121212] rounded-2xl border border-neutral-800 overflow-hidden hover:border-orange-500/50 transition-all cursor-pointer flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-semibold">{item.badge}</span>
                  <h4 className="text-base font-semibold text-white mt-1 group-hover:text-orange-400 transition-colors">{item.title}</h4>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-orange-400">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 to-orange-700 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Bring the Magic of Real Flame to Your Outdoor Oasis
            </h2>
            <p className="text-orange-100 text-sm sm:text-base leading-relaxed mb-8">
              From automated villa masterplans to bespoke resort fire bowls, Flames Fireplace delivers turnkey design, gas supply coordination, and professional installation across Dubai & UAE.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/971542112891?text=${encodeURIComponent(`Hi Flames Fireplace, I'd like to book a consultation for ${variant.title}.`)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="px-8 py-4 rounded-full bg-neutral-900 hover:bg-black text-white font-semibold text-sm shadow-xl flex items-center gap-2 cursor-pointer transition-all"
              >
                Inquire on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-sm backdrop-blur-sm transition-all cursor-pointer"
              >
                Contact Our Engineers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
