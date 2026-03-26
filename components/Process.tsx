'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    title: 'Define Your Vision',
    desc: 'We start by understanding your brand, goals, and target audience to create a clear creative direction that aligns with your business objectives.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    title: 'Submit Your Request',
    desc: 'Share your project details and requirements. I\u2019ll prepare a tailored proposal and timeline for delivery that meets your expectations.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Project Delivered',
    desc: 'Receive polished, production-ready designs with all source files and brand guidelines included for seamless implementation.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

export default function Process() {
  const [active, setActive] = useState(0)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[.06] bg-white/[.03] px-3 py-1.5 text-[11px] uppercase tracking-[.16em] text-white/30">
            <span className="text-[10px] text-amber-400/60">&#10022;</span> Design process
          </span>
          <h2 className="text-[2.4rem] font-normal tracking-tight md:text-[3rem]">Process</h2>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/30">
            Crafting bold visuals that inspire and elevate brands with a fresh, modern look.
          </p>
        </motion.div>

        {/* two‑col: image | accordion */}
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* image */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/[.06] bg-[#111]">
            <img src="/بعد.png" alt="Process" className="h-full w-full object-cover" />
          </motion.div>

          {/* accordion */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: .08 }} className="space-y-3">
            {steps.map((s, i) => {
              const open = active === i
              return (
                <div key={i} className={`overflow-hidden rounded-2xl border transition-all duration-300 ${open ? 'border-white/[.1] bg-[#111]' : 'border-white/[.06] bg-[#0c0c0c] hover:bg-[#0f0f0f]'}`}>
                  <button onClick={() => setActive(i)} className="flex w-full items-center gap-4 p-5 text-left">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[.06] bg-white/[.03]">
                      <svg className="h-[18px] w-[18px] text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                      </svg>
                    </span>
                    <span className="flex-1 text-[15px] font-medium text-white/80">{s.title}</span>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? 'rotate-45 border-white/20 bg-white/[.06]' : 'border-white/[.08]'}`}>
                      <svg className="h-3 w-3 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}>
                        <p className="px-5 pb-5 pl-[76px] text-[13px] leading-[1.7] text-white/30">{s.desc}</p>
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
