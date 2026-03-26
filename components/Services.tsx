'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Brand Identity',
    desc: 'Complete brand identity systems including logos, color palettes, typography, and comprehensive brand guidelines.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  },
  {
    title: 'Package Design',
    desc: 'Eye-catching packaging that stands out on shelves and communicates your brand story effectively to customers.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
  {
    title: 'Brand Design',
    desc: 'Strategic brand design solutions that align with your business goals and resonate with your target audience.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Mockup Design',
    desc: 'Realistic product mockups and presentations that bring your designs to life before going into production.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
]

const tags1 = [
  'Brand Graphics', 'Brand Migration', 'Package Design', 'Branding',
  'Slide Decks', 'Copywriting', 'Brand Integrations', 'Optimization',
  'Brand Graphics', 'Brand Migration', 'Package Design', 'Branding',
]

const tags2 = [
  'Brand Landing Pages', 'Social Media', 'Icons', 'Brand Visibility',
  'Visual Identity', 'Logo Design', 'Typography', 'Art Direction',
  'Brand Landing Pages', 'Social Media', 'Icons', 'Brand Visibility',
]

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-medium">What I do</span>
          <h2 className="text-4xl md:text-[3.2rem] font-extralight mt-2 tracking-tight">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-white/[0.06] bg-[#111] hover:bg-[#141414] hover:border-white/[0.1] transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/[0.08] transition-all duration-300">
                <svg className="w-5 h-5 text-white/30 group-hover:text-white/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="text-[16px] font-medium mb-2.5 text-white/90">{s.title}</h3>
              <p className="text-white/35 text-[13px] leading-[1.7]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling tag strips */}
      <div className="space-y-3 py-8 border-y border-white/[0.04] marquee-mask">
        <div className="flex marquee-left whitespace-nowrap">
          {[...tags1, ...tags1].map((tag, i) => (
            <span
              key={`t1-${i}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 mx-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-[13px] text-white/40 shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex marquee-right whitespace-nowrap">
          {[...tags2, ...tags2].map((tag, i) => (
            <span
              key={`t2-${i}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 mx-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-[13px] text-white/40 shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
