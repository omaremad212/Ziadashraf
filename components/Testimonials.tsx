'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ahmed Hassan',
    title: 'CEO, TechStart',
    rating: 5,
    text: 'Ziad transformed our brand completely. His attention to detail and creative vision exceeded all expectations. Highly recommend his work!',
  },
  {
    name: 'Sara Mohamed',
    title: 'Founder, Bloom Studio',
    rating: 5,
    text: 'Working with Ziad was an absolute pleasure. He understood our vision instantly and delivered designs that perfectly captured our brand essence.',
  },
  {
    name: 'Omar Khaled',
    title: 'Marketing Director, NovaCo',
    rating: 5,
    text: 'The packaging designs Ziad created for us increased our shelf appeal dramatically. Professional, creative, and always delivers on time.',
  },
  {
    name: 'Layla Ibrahim',
    title: 'Owner, Artisan Cafe',
    rating: 4,
    text: 'Ziad brought our café brand to life with stunning visuals and a cohesive identity. Our customers always compliment our branding.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-widest">Feedback</span>
          <h2 className="text-4xl md:text-5xl font-light mt-3">What Clients Say</h2>
        </motion.div>
      </div>

      <div className="pause-on-hover overflow-hidden">
        <div className="flex animate-marquee">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-80 mx-3 p-6 rounded-2xl border border-white/10 bg-[#1a1a1a]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className={s < t.rating ? 'text-yellow-400' : 'text-white/20'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-white/40 text-sm">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
