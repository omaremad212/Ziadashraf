'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Define Vision',
    desc: 'We start by understanding your brand, goals, and target audience to create a clear creative direction.',
  },
  {
    num: '02',
    title: 'Submit Request',
    desc: 'Share your project details and requirements. I\u2019ll prepare a tailored proposal and timeline for delivery.',
  },
  {
    num: '03',
    title: 'Project Delivered',
    desc: 'Receive polished, production-ready designs with all source files and brand guidelines included.',
  },
]

export default function Process() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm text-white/50 uppercase tracking-widest">How it works</span>
        <h2 className="text-4xl md:text-5xl font-light mt-3">My Process</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative p-8 rounded-2xl border border-white/10 bg-[#1a1a1a] group hover:border-white/20 transition-colors"
          >
            <span className="text-5xl font-light text-white/10 group-hover:text-white/20 transition-colors">
              {step.num}
            </span>
            <h3 className="text-xl font-medium mt-4 mb-3">{step.title}</h3>
            <p className="text-white/50 leading-relaxed">{step.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 text-white/20 text-2xl">→</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
