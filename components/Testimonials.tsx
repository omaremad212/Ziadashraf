'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ahmed Hassan',
    title: 'CEO, TechStart',
    rating: 5,
    text: 'Ziad transformed our brand completely. His attention to detail and creative vision exceeded all expectations. Highly recommend his work!',
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
  {
    name: 'Layla Ibrahim',
    title: 'Owner, Artisan Cafe',
    rating: 5,
    text: 'Ziad brought our caf\u00e9 brand to life with stunning visuals and a cohesive identity. Our customers always compliment our branding.',
    avatar: 'LI',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-medium">Feedback</span>
          <h2 className="text-4xl md:text-[3.2rem] font-extralight mt-2 tracking-tight">What Clients Say</h2>
        </motion.div>
      </div>

      <div className="pause-hover marquee-mask">
        <div className="flex marquee-left">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[340px] mx-3 p-7 rounded-2xl border border-white/[0.06] bg-[#111] hover:bg-[#141414] hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className={`w-4 h-4 ${s < t.rating ? 'text-amber-400' : 'text-white/10'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/40 text-[14px] leading-[1.7] mb-7">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-white/40">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white/80 text-[13px] font-medium">{t.name}</p>
                  <p className="text-white/25 text-[12px]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
