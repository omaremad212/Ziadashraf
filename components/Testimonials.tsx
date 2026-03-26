'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ahmed Hassan',
    title: 'CEO, TechStart',
    rating: 5,
    text: 'Ziad transformed our brand completely. His attention to detail and creative vision exceeded all expectations. Highly recommend his work to anyone!',
    avatar: 'AH',
  },
  {
    name: 'Sara Mohamed',
    title: 'Founder, Bloom Studio',
    rating: 5,
    text: 'Working with Ziad was an absolute pleasure. He understood our vision instantly and delivered designs that perfectly captured our brand essence.',
    avatar: 'SM',
  },
  {
    name: 'Omar Khaled',
    title: 'Marketing Director, NovaCo',
    rating: 5,
    text: 'The packaging designs Ziad created for us increased our shelf appeal dramatically. Professional, creative, and always delivers on time.',
    avatar: 'OK',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-8">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
            <span className="text-[10px] text-white/40">&#10022;</span>
            <span className="text-[11px] text-white/30 uppercase tracking-widest">The happy clients</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-normal tracking-tight">Client Reviews</h2>
          <p className="text-white/30 text-[14px] mt-3 max-w-lg leading-relaxed">
            Real testimonials from brands who trusted me to transform their design needs into successful outcomes.
          </p>
        </motion.div>

        {/* 3 review cards in a row */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/[0.06] bg-[#0f0f0f] hover:bg-[#131313] hover:border-white/[0.1] transition-all duration-400"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/[0.1] to-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                  <span className="text-[12px] font-bold text-white/50">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white/80 text-[14px] font-semibold">{t.name}</p>
                  <p className="text-white/25 text-[11px]">{t.title}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className={`w-4 h-4 ${s < t.rating ? 'text-amber-400/80' : 'text-white/10'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/35 text-[13px] leading-[1.7]">&ldquo;{t.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
