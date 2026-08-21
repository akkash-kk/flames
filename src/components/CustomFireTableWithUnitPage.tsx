import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ChevronDown, Flame, Shield, Sparkles, Sliders, MessageCircle, Sparkle } from 'lucide-react';
import { ActiveSection } from '../types';

interface CustomFireTableProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function CustomFireTableWithUnitPage({ onNavigate }: CustomFireTableProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const benefits = [
    "Bespoke Dimensions - Built to exact patio measurements for coffee, lounge, or 8-12 seat dining height",
    "Luxury Surfaces - Dekton, Neolith, natural marble (Calacatta, Nero Marquina), granite, or cast GRC stone",
    "Thermal Isolation Technology - Table perimeter stays cool to the touch even during maximum flame operation",
    "Concealed LPG Gas Cylinder - Built-in magnetic hatch holds standard 5kg / 11kg LPG tanks discreetly",
    "Dual Fuel Readiness - Compatible with bottled LPG or centralized natural gas infrastructure across the UAE",
    "Turnkey 3D CAD & Installation - 3D visual preview before fabrication with on-site commissioning in Dubai"
  ];

  const howItWorks = [
    "Spatial Planning & 3D CAD: We measure your patio and generate accurate 3D renders with surface finish options.",
    "Material & Burner Selection: Choose from Dekton / Marble tops and smart remote, push-to-turn, or key-valve burners.",
    "Precision Fabrication: Marine-grade aluminum or 316 stainless structural frame fabrication with thermal shields.",
    "On-Site Installation: Full connection, gas safety pressure testing, wind glass shield mounting, and client handover."
  ];

  const specs = [
    { label: "Top Material Options", value: "Sintered Dekton, Calacatta Marble, Nero Marquina, GRC Stone" },
    { label: "Internal Frame", value: "Marine-Grade 316 Stainless Steel & Heavy Aluminum" },
    { label: "Burner System", value: "Linear Trough, Circular Ring, or Star Burner (40,000 - 120,000 BTU)" },
    { label: "Gas Compatibility", value: "LPG (Propane) or Municipal Natural Gas (NG)" },
    { label: "Ignition Options", value: "Home Automation, RF Remote, Push & Turn, Brass Key Valve" },
    { label: "Turnaround Time", value: "10 to 14 business days across Dubai & UAE" }
  ];

  const faqs = [
    {
      question: "Can I use the custom fire table for full dining with plates and drinks?",
      answer: "Yes! We design custom tables with generous perimeter dining ledges (minimum 25-35cm clearance) and internal thermal isolation barriers that keep table edges completely cool while the burner is running."
    },
    {
      question: "Is there an optional matching cover lid to turn the fire pit into a solid tabletop?",
      answer: "Yes. We fabricate flush-fitting tabletop lids from matching Dekton, marble, or 316 stainless steel, transforming your fire table into a seamless flat dining surface during daytime."
    },
    {
      question: "Can the table conceal an LPG gas cylinder inside its base?",
      answer: "Absolutely. For properties without underground gas pipe infrastructure, we engineer concealed magnetic access doors inside the table pedestal to house standard 5kg or 11kg composite LPG bottles."
    },
    {
      question: "What is the lead time for a bespoke custom fire table in Dubai?",
      answer: "Standard turnaround from 3D CAD drawing approval to on-site delivery and installation is typically 10 to 14 business days across Dubai and the UAE."
    }
  ];

  return (
    <div id="custom-fire-table-unit" className="bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white">
      {/* ──── SECTION 1: HERO SECTION ──── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.14),_transparent_35%)] pointer-events-none" />
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 sm:pt-36 pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white mb-6"
                >
                  Customized Fire Table with Fire Unit
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mb-10"
                >
                  Bespoke luxury outdoor dining, coffee, and lounge tables with integrated certified gas burner troughs, Dekton sintered stone tops, and concealed cylinder compartments.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                >
                  <a
                    id="wa-cta-custom-fire-table"
                    href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20a%20Customized%20Fire%20Table%20with%20Integrated%20Fire%20Unit."
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full sm:min-w-[220px] justify-center px-6 py-4 rounded-3xl bg-[#151515] hover:bg-emerald-950/60 border border-neutral-700 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-3 cursor-pointer text-base font-semibold text-neutral-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-5 h-5 shrink-0">
                      <defs>
                        <linearGradient id="wa-sh-custom-fire-table" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#57d163" />
                          <stop offset="1" stopColor="#23b33a" />
                        </linearGradient>
                      </defs>
                      <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
                      <path fill="url(#wa-sh-custom-fire-table)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" />
                      <path fill="#fff" fillRule="evenodd" d="M68.016 54.843c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013c.918 1.228 12.718 20.381 31.405 27.75 15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74c1.531-4.293 1.531-7.971 1.072-8.74-.459-.769-1.685-1.226-3.525-2.146s-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
                    </svg>
                    Book 3D Design on WhatsApp
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-neutral-950"
              >
                <img
                  src="/assets/CustomizedFireTabl.jpeg"
                  alt="Customized Fire Table with Integrated Burner Unit Dubai Showroom"
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full min-h-[420px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── SECTION 2: OVERVIEW & STICKY SIDEBAR ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-16 items-start">
          <div className="space-y-10">
            {/* Overview Card */}
            <div className="bg-[#121212] rounded-[2rem] p-10 shadow-sm border border-neutral-800">
              <span className="text-xs uppercase tracking-[0.3em] text-orange-600 font-semibold">Overview</span>
              <h2 className="mt-4 text-3xl font-semibold text-white">Bespoke fire tables tailored to your villa terrace & garden</h2>
              <p className="mt-6 text-neutral-300 leading-relaxed text-base md:text-lg">
                Our custom fire tables are hand-engineered in Dubai to unite culinary dining comfort with living fire luxury. From oversized 10-seater Dekton dining tables to low-slung lounge coffee tables, every piece is customized with marine-grade internal framing, integrated gas burners, thermal barrier shields, and custom flush covers.
              </p>
            </div>

            {/* 2 Sub-Cards: What makes it different & How it works */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-neutral-800 bg-[#121212] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">What makes it different</h3>
                <ul className="space-y-4 text-neutral-300">
                  {benefits.slice(0, 4).map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 text-orange-600 shrink-0"><Check className="w-5 h-5" /></span>
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-800 bg-[#121212] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">How it works</h3>
                <ol className="space-y-4 text-neutral-300 list-decimal list-inside text-sm leading-relaxed">
                  {howItWorks.map((step, idx) => (
                    <li key={idx} className="pl-1">{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950/95 p-8 text-white shadow-2xl shadow-orange-500/10">
              <span className="text-xs uppercase tracking-[0.3em] text-orange-300 font-semibold">Need help choosing?</span>
              <h3 className="mt-4 text-2xl font-semibold">Talk to Flames Fireplace</h3>
              <p className="mt-4 text-neutral-300 leading-relaxed text-sm">
                Speak directly with our senior fire engineers to review architectural CAD plans, table dimensions, LPG bottle concealment, and surface finishes.
              </p>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-white hover:bg-orange-400 transition-all cursor-pointer w-full justify-center"
              >
                Get a Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-[#121212] p-8 shadow-sm">
              <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-[0.16em] text-orange-400">Quick links</h4>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li>
                  <a
                    href="https://www.flamesfireplace.com/services/fire-pot-tables"
                    onClick={(e) => { e.preventDefault(); onNavigate('fire-pot-tables'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                    Fire Pots & Tables Collection
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flamesfireplace.com/services/outdoor-gas-fireplace"
                    onClick={(e) => { e.preventDefault(); onNavigate('outdoor-gas-fireplace'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                    Outdoor Gas Fireplaces
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flamesfireplace.com/best-fireplace-dubai"
                    onClick={(e) => { e.preventDefault(); onNavigate('best-fireplace-dubai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                    Best Fireplace in Dubai
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flamesfireplace.com/contact"
                    onClick={(e) => { e.preventDefault(); onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                    Book a site visit
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ──── SECTION 3: KEY BENEFITS GRID ──── */}
      <section className="bg-[#0f0f0f] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-600 font-semibold">Key Benefits</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">What owners love most</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="rounded-[1.75rem] border border-neutral-800 bg-[#121212] p-8 shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                    <Check className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white text-base leading-snug">{benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SECTION 4: TECHNICAL SPECIFICATIONS TABLE ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="bg-[#121212] rounded-[2rem] border border-neutral-800 p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800/80">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-orange-600 font-semibold">Technical Data</span>
              <h3 className="text-3xl font-bold text-white mt-2">Custom Fabrication Specifications</h3>
            </div>
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20please%20share%20CAD%20drawings%20and%20finish%20catalog%20for%20Customized%20Fire%20Tables."
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-colors cursor-pointer w-fit"
            >
              <Sliders className="w-4 h-4" />
              Request CAD Drawings & Finishes
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specs.map((spec, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#161616] border border-neutral-800/80 hover:border-neutral-700 transition-colors">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1.5">
                  {spec.label}
                </span>
                <span className="text-base font-semibold text-white">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SECTION 5: FREQUENTLY ASKED QUESTIONS (Accordion) ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-orange-600 font-semibold">Questions answered</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div key={idx} className="rounded-[1.5rem] border border-neutral-800 bg-[#121212] shadow-sm overflow-hidden transition-colors">
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left gap-6 hover:bg-[#161616] transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-white text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-8 py-6 bg-[#0f0f0f] border-t border-neutral-800">
                    <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ──── SECTION 6: BOTTOM CALL TO ACTION BANNER ──── */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Make your next fireplace the best one yet.</h2>
          <p className="mx-auto max-w-2xl text-orange-100 leading-relaxed mb-8">
            Talk to our Dubai team for a tailored recommendation, fast installation, and a solution that matches your design, safety, and lifestyle goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20Customized%20Fire%20Tables."
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-neutral-950 transition-all border border-white/10 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Schedule a Consultation
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-8 py-4 text-sm font-semibold text-white transition-all border border-white/20 cursor-pointer"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
