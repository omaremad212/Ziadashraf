'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What services do you provide?', a: 'I specialize in brand identity design, package design, logo design, visual identity systems, social media design, and mockup presentations. Each project is tailored to meet your specific brand needs.' },
  { q: 'How long does a typical project take?', a: 'Project timelines vary depending on scope and complexity. A brand identity project typically takes 2-4 weeks, while package design can take 1-3 weeks. I always provide a detailed timeline before starting.' },
  { q: 'What is your design process?', a: 'My process starts with understanding your brand vision, followed by research and strategy, concept development, design execution, and final delivery with all source files and guidelines.' },
  { q: 'Having trouble making a decision?', a: 'No worries! Book a free consultation call and I\u2019ll help you figure out exactly what your brand needs. We can discuss your goals, timeline, and budget to find the perfect solution.' },
  { q: 'Do you offer revisions?', a: 'Yes, all projects include revision rounds to ensure the final design perfectly matches your vision. The number of revisions is discussed and agreed upon before the project begins.' },
  { q: 'Can I see your previous work?', a: 'Absolutely! Check out the projects section above or reach out and I\u2019ll send you a detailed case study portfolio tailored to your industry.' },
  { q: 'How are the services priced?', a: 'Pricing depends on the project scope. I offer competitive packages for brand identity, package design, and full branding solutions. Contact me for a custom quote.' },
  { q: 'Can I request my entire portfolio at once?', a: 'Yes! I offer comprehensive brand packages that include identity, packaging, social media templates, and more \u2014 all delivered as a cohesive system.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-8">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
            <span className="text-[10px] text-white/40">&#10022;</span>
            <span className="text-[11px] text-white/30 uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-normal tracking-tight">Answers</h2>
          <p className="text-white/30 text-[14px] mt-3 max-w-lg leading-relaxed">
            The most commonly asked questions about my design workflow, services, and pricing.
          </p>
        </motion.div>

        {/* Two-column: Images left, FAQ right */}
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 items-start">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-square">
              <img src="/1.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-square">
              <img src="/c822c6b9_sprint.jpg.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-square">
              <img src="/مجوراتتت.jpg.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-square">
              <img src="/نسخة من شعار سمح.png" alt="" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-white/[0.1] bg-[#131313]' : 'border-white/[0.06] bg-[#0f0f0f] hover:bg-[#121212]'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="text-[13px] font-medium text-white/70 pr-4">{faq.q}</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen ? 'border-white/20 bg-white/[0.06] rotate-45' : 'border-white/[0.08]'
                    }`}>
                      <svg className="w-2.5 h-2.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-4 pb-4 text-white/30 text-[12px] leading-[1.7]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
