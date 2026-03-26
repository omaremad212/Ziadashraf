'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Define Your Vision',
    desc: 'We start by understanding your brand, goals, and target audience to create a clear creative direction that aligns with your business objectives.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    num: '02',
    title: 'Submit Your Request',
    desc: 'Share your project details and requirements. I\u2019ll prepare a tailored proposal and timeline for delivery that meets your expectations.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    num: '03',
    title: 'Project Delivered',
    desc: 'Receive polished, production-ready designs with all source files and brand guidelines included for seamless implementation.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

export default function Process() {
  const [openStep, setOpenStep] = useState(0)

  return (
    <section className="py-24 px-8">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
            <span className="text-[10px] text-white/40">&#10022;</span>
            <span className="text-[11px] text-white/30 uppercase tracking-widest">Design process</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-normal tracking-tight">Process</h2>
          <p className="text-white/30 text-[14px] mt-3 max-w-md leading-relaxed">
            Crafting bold visuals that inspire and educate brands with a fresh, modern look.
          </p>
        </motion.div>

        {/* Two-column: Image left, Accordion right */}
        <div className="grid lg:grid-cols-[1fr,1fr] gap-8 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-[4/3]"
          >
            <img
              src="/بعد.png"
              alt="Design process"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Accordion steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3"
          >
            {steps.map((step, i) => {
              const isOpen = openStep === i
              return (
                <div
                  key={step.num}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-white/[0.1] bg-[#131313]' : 'border-white/[0.06] bg-[#0f0f0f] hover:bg-[#121212]'
                  }`}
                >
                  <button
                    onClick={() => setOpenStep(i)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                      <svg className="w-4.5 h-4.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-medium text-white/80">{step.title}</h3>
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen ? 'border-white/20 bg-white/[0.06] rotate-45' : 'border-white/[0.08]'
                    }`}>
                      <svg className="w-3 h-3 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 pl-[76px] text-white/30 text-[13px] leading-[1.7]">{step.desc}</p>
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
