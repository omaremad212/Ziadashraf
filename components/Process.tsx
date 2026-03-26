'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Define Vision',
    desc: 'We start by understanding your brand, goals, and target audience to create a clear creative direction.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    num: '02',
    title: 'Submit Request',
    desc: 'Share your project details and requirements. I\u2019ll prepare a tailored proposal and timeline for delivery.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    num: '03',
    title: 'Project Delivered',
    desc: 'Receive polished, production-ready designs with all source files and brand guidelines included.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

export default function Process() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-medium">How it works</span>
          <h2 className="text-4xl md:text-[3.2rem] font-extralight mt-2 tracking-tight">My Process</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-[#111] hover:bg-[#141414] hover:border-white/[0.1] transition-all duration-500 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[40px] font-extralight text-white/[0.07] group-hover:text-white/[0.12] transition-colors duration-500 leading-none">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.08] transition-all duration-300">
                    <svg className="w-5 h-5 text-white/30 group-hover:text-white/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[17px] font-medium mb-3 text-white/90">{step.title}</h3>
                <p className="text-white/35 text-[14px] leading-[1.7]">{step.desc}</p>
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center">
                  <svg className="w-4 h-4 text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
