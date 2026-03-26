'use client'
import { motion } from 'framer-motion'

const data = [
  { val: '180+', label: 'Design projects completed' },
  { val: '96%', label: 'Client satisfaction rate' },
  { val: '15+', label: 'Years of experience' },
]

export default function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-3 gap-4">
          {data.map((d, i) => (
            <motion.div key={d.label}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: .45, delay: i * .08 }}
              className="rounded-2xl border border-white/[.06] bg-[#0c0c0c] py-10 text-center">
              <p className="text-[2.5rem] font-normal tracking-tight md:text-[3.2rem]">{d.val}</p>
              <p className="mt-1 text-[12px] text-white/25 md:text-[13px]">{d.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
