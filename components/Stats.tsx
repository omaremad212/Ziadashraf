'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '180+', label: 'Projects Completed' },
  { value: '96%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Experience' },
]

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl border border-white/10 bg-[#1a1a1a]"
            >
              <p className="text-5xl md:text-6xl font-light mb-2">{stat.value}</p>
              <p className="text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
