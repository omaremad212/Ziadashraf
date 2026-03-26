'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'I specialize in brand identity design, package design, logo design, visual identity systems, social media design, and mockup presentations. Each project is tailored to meet your specific brand needs.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary depending on scope and complexity. A brand identity project typically takes 2-4 weeks, while package design can take 1-3 weeks. I always provide a detailed timeline before starting.',
  },
  {
    q: 'What is your design process?',
    a: 'My process starts with understanding your brand vision, followed by research and strategy, concept development, design execution, and final delivery with all source files and guidelines.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes, all projects include revision rounds to ensure the final design perfectly matches your vision. The number of revisions is discussed and agreed upon before the project begins.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply reach out via email or the contact form. We\u2019ll schedule a free consultation to discuss your project, goals, and timeline. From there, I\u2019ll prepare a tailored proposal for you.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-28 px-6">
      <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-medium">FAQ</span>
          <h2 className="text-4xl md:text-[3.2rem] font-extralight mt-2 tracking-tight">Common Questions</h2>
        </motion.div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-white/[0.1] bg-[#131313]'
                    : 'border-white/[0.06] bg-[#111] hover:bg-[#131313]'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[15px] font-medium text-white/80 pr-6">{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full border shrink-0 flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'border-white/20 bg-white/[0.06] rotate-45'
                      : 'border-white/[0.08] bg-white/[0.03]'
                  }`}>
                    <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
                    >
                      <p className="px-6 pb-6 text-white/35 text-[14px] leading-[1.7]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
