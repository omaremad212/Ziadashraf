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
    <section id="services" className="py-24">
      <div className="max-w-[1300px] mx-auto px-8">
        {/* Header with images */}
        <div className="grid lg:grid-cols-[1fr,1fr] gap-10 mb-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
              <span className="text-[10px] text-white/40">&#10022;</span>
              <span className="text-[11px] text-white/30 uppercase tracking-widest">Design services</span>
            </div>
            <h2 className="text-[2.5rem] md:text-[3rem] font-normal tracking-tight">Services</h2>
            <p className="text-white/30 text-[14px] mt-3 max-w-md leading-relaxed">
              Making customers successful with expert brand identity, packaging, and creative direction.
            </p>
          </motion.div>

          {/* Two small images stacked */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-[4/3]">
              <img src="/31cefa06_png (1).png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-[4/3]">
              <img src="/e42d66b0_png (1).png" alt="" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* 4 Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-[#0f0f0f] hover:bg-[#131313] hover:border-white/[0.1] transition-all duration-400"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/[0.07] transition-all">
                <svg className="w-4.5 h-4.5 text-white/30 group-hover:text-white/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="text-[14px] font-semibold mb-2 text-white/80">{s.title}</h3>
              <p className="text-white/30 text-[12px] leading-[1.7]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling tags */}
      <div className="space-y-2.5 py-6 border-y border-white/[0.04] marquee-mask">
        <div className="flex marquee-left whitespace-nowrap">
          {[...tags1, ...tags1].map((tag, i) => (
            <span key={`t1-${i}`} className="inline-flex items-center gap-2 px-4 py-2 mx-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[12px] text-white/30 shrink-0">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex marquee-right whitespace-nowrap">
          {[...tags2, ...tags2].map((tag, i) => (
            <span key={`t2-${i}`} className="inline-flex items-center gap-2 px-4 py-2 mx-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[12px] text-white/30 shrink-0">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
