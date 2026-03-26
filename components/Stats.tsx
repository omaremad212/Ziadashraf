'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '180+', label: 'Design projects completed' },
  { value: '96%', label: 'Client satisfaction rate' },
  { value: '15+', label: 'Years of experience' },
]

export default function Stats() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center py-10 rounded-2xl border border-white/[0.06] bg-[#0f0f0f]"
            >
              <p className="text-[2.5rem] md:text-[3.5rem] font-normal tracking-tight leading-none mb-2">{stat.value}</p>
              <p className="text-white/25 text-[12px] md:text-[13px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
