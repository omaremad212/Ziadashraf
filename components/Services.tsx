'use client'
import { motion } from 'framer-motion'

const cards = [
  { title: 'Brand Identity', desc: 'Complete brand identity systems including logos, color palettes, typography, and comprehensive brand guidelines.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { title: 'Package Design', desc: 'Eye-catching packaging that stands out on shelves and communicates your brand story effectively.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { title: 'Brand Design', desc: 'Strategic brand design solutions that align with your business goals and resonate with your audience.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { title: 'Mockup Design', desc: 'Realistic product mockups and presentations that bring your designs to life before production.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

const t1 = ['Brand Graphics','Brand Migration','Package Design','Branding','Slide Decks','Copywriting','Brand Integrations','Optimization']
const t2 = ['Brand Landing Pages','Social Media','Icons','Brand Visibility','Visual Identity','Logo Design','Typography','Art Direction']

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* header + images */}
        <div className="mb-14 grid items-start gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[.06] bg-white/[.03] px-3 py-1.5 text-[11px] uppercase tracking-[.16em] text-white/30">
              <span className="text-[10px] text-amber-400/60">&#10022;</span> Design services
            </span>
            <h2 className="text-[2.4rem] font-normal tracking-tight md:text-[3rem]">Services</h2>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/30">
              Making customers successful with expert brand identity, packaging, and creative direction.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .08 }}
            className="grid grid-cols-2 gap-3">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/[.06] bg-[#111]">
              <img src="/31cefa06_png (1).png" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/[.06] bg-[#111]">
              <img src="/e42d66b0_png (1).png" alt="" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* 4 cards */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: .45, delay: i * .06 }}
              className="group rounded-2xl border border-white/[.06] bg-[#0c0c0c] p-6 transition hover:border-white/[.1] hover:bg-[#111]">
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[.06] bg-white/[.03] transition group-hover:bg-white/[.06]">
                <svg className="h-[18px] w-[18px] text-white/30 transition group-hover:text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                </svg>
              </span>
              <h3 className="mb-2 text-[14px] font-semibold text-white/80">{c.title}</h3>
              <p className="text-[12px] leading-[1.7] text-white/30">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* scrolling tags */}
      <div className="fade-x space-y-2 border-y border-white/[.04] py-5">
        <div className="flex whitespace-nowrap marquee-l">
          {[...t1,...t1,...t1].map((t,i) => (
            <span key={`a${i}`} className="mx-1.5 inline-flex shrink-0 rounded-full border border-white/[.06] bg-white/[.02] px-4 py-2 text-[12px] text-white/30">{t}</span>
          ))}
        </div>
        <div className="flex whitespace-nowrap marquee-r">
          {[...t2,...t2,...t2].map((t,i) => (
            <span key={`b${i}`} className="mx-1.5 inline-flex shrink-0 rounded-full border border-white/[.06] bg-white/[.02] px-4 py-2 text-[12px] text-white/30">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
