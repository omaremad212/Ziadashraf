'use client'
import { motion } from 'framer-motion'

const reviews = [
  { name: 'Ahmed Hassan', title: 'CEO, TechStart', text: 'Ziad transformed our brand completely. His attention to detail and creative vision exceeded all expectations. Highly recommend his work!', av: 'AH', stars: 5 },
  { name: 'Sara Mohamed', title: 'Founder, Bloom Studio', text: 'Working with Ziad was an absolute pleasure. He understood our vision instantly and delivered designs that perfectly captured our brand essence.', av: 'SM', stars: 5 },
  { name: 'Omar Khaled', title: 'Marketing Director, NovaCo', text: 'The packaging designs Ziad created for us increased our shelf appeal dramatically. Professional, creative, and always delivers on time.', av: 'OK', stars: 5 },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[.06] bg-white/[.03] px-3 py-1.5 text-[11px] uppercase tracking-[.16em] text-white/30">
            <span className="text-[10px] text-amber-400/60">&#10022;</span> The happy clients
          </span>
          <h2 className="text-[2.4rem] font-normal tracking-tight md:text-[3rem]">Client Reviews</h2>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-white/30">
            Real testimonials from brands who trusted me to transform their design needs into successful outcomes.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: .45, delay: i * .08 }}
              className="rounded-2xl border border-white/[.06] bg-[#0c0c0c] p-6 transition hover:border-white/[.1] hover:bg-[#111]">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[.08] bg-gradient-to-br from-white/[.08] to-white/[.02] text-[12px] font-bold text-white/50">{r.av}</span>
                <div>
                  <p className="text-[14px] font-semibold text-white/80">{r.name}</p>
                  <p className="text-[11px] text-white/25">{r.title}</p>
                </div>
              </div>
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className={`h-4 w-4 ${s < r.stars ? 'text-amber-400/80' : 'text-white/10'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[13px] leading-[1.7] text-white/35">&ldquo;{r.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
