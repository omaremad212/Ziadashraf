'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const qs = [
  { q: 'What services do you provide?', a: 'I specialize in brand identity design, package design, logo design, visual identity systems, social media design, and mockup presentations. Each project is tailored to meet your specific brand needs.' },
  { q: 'How long does a typical project take?', a: 'Project timelines vary depending on scope and complexity. A brand identity project typically takes 2-4 weeks, while package design can take 1-3 weeks. I always provide a detailed timeline before starting.' },
  { q: 'What is your design process?', a: 'My process starts with understanding your brand vision, followed by research and strategy, concept development, design execution, and final delivery with all source files and guidelines.' },
  { q: 'Having trouble making a decision?', a: 'No worries! Book a free consultation call and I\u2019ll help you figure out exactly what your brand needs. We can discuss your goals, timeline, and budget to find the perfect solution.' },
  { q: 'Do you offer revisions?', a: 'Yes, all projects include revision rounds to ensure the final design perfectly matches your vision. The number of revisions is discussed and agreed upon before the project begins.' },
  { q: 'How are the services priced?', a: 'Pricing depends on the project scope. I offer competitive packages for brand identity, package design, and full branding solutions. Contact me for a custom quote.' },
  { q: 'Can I request my entire portfolio at once?', a: 'Yes! I offer comprehensive brand packages that include identity, packaging, social media templates, and more \u2014 all delivered as a cohesive system.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[.06] bg-white/[.03] px-3 py-1.5 text-[11px] uppercase tracking-[.16em] text-white/30">
            <span className="text-[10px] text-amber-400/60">&#10022;</span> FAQ
          </span>
          <h2 className="text-[2.4rem] font-normal tracking-tight md:text-[3rem]">Answers</h2>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-white/30">
            The most commonly asked questions about my design workflow, services, and pricing.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* images */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid grid-cols-2 gap-3">
            <div className="aspect-square overflow-hidden rounded-2xl border border-white/[.06] bg-[#111]">
              <img src="/1.png" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl border border-white/[.06] bg-[#111]">
              <img src="/c822c6b9_sprint.jpg.jpeg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl border border-white/[.06] bg-[#111]">
              <img src="/مجوراتتت.jpg.jpeg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl border border-white/[.06] bg-[#111]">
              <img src="/نسخة من شعار سمح.png" alt="" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          {/* accordion */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: .08 }} className="space-y-2">
            {qs.map((q, i) => {
              const isOpen = open === i
              return (
                <div key={i} className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? 'border-white/[.1] bg-[#111]' : 'border-white/[.06] bg-[#0c0c0c] hover:bg-[#0f0f0f]'}`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between p-4 text-left">
                    <span className="pr-4 text-[13px] font-medium text-white/70">{q.q}</span>
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-white/20 bg-white/[.06]' : 'border-white/[.08]'}`}>
                      <svg className="h-2.5 w-2.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}>
                        <p className="px-4 pb-4 text-[12px] leading-[1.7] text-white/30">{q.a}</p>
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
