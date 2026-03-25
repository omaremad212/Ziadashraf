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
    a: 'Simply reach out via email or the contact form. We\'ll schedule a free consultation to discuss your project, goals, and timeline. From there, I\'ll prepare a tailored proposal for you.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm text-white/50 uppercase tracking-widest">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-light mt-3">Common Questions</h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border border-white/10 rounded-xl overflow-hidden bg-[#1a1a1a]"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-medium pr-4">{faq.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl text-white/50 shrink-0"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="px-5 pb-5 text-white/50 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
