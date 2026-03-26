'use client'
import { motion } from 'framer-motion'

const imgs = [
  { src: '/1.png', t: 'Brand Identity' },
  { src: '/c822c6b9_sprint.jpg.jpeg', t: 'Sprint' },
  { src: '/31cefa06_png (1).png', t: 'Packaging' },
  { src: '/e42d66b0_png (1).png', t: 'Visual ID' },
  { src: '/نسخة من شعار سمح.png', t: 'Logo' },
  { src: '/مجوراتتت.jpg.jpeg', t: 'Jewelry' },
  { src: '/تيشيرت adidas Loose للأطفال، مريح وخفيف يناسب حركتهم طول اليوم.اختاروه لأطفالكم لأناقة يومية برا.jpg.jpeg', t: 'Adidas' },
  { src: '/حذاء Lightblaze بتصميم خفيف وراحة تدوم طول اليوم، عملي ويناسب كل مشاويرك.متوفر بكل المقاسات وأرب.jpg.jpeg', t: 'Lightblaze' },
  { src: '/بعد.png', t: 'Refresh' },
]

export default function RecentWorks() {
  return (
    <section className="overflow-hidden py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-10 px-6 text-center">
        <span className="text-[11px] uppercase tracking-[.2em] text-white/20">Gallery</span>
        <h2 className="mt-2 text-[2.2rem] font-normal tracking-tight md:text-[2.6rem]">Recent Works</h2>
      </motion.div>
      <div className="pause fade-x">
        <div className="flex marquee-l-slow whitespace-nowrap">
          {[...imgs, ...imgs, ...imgs].map((im, i) => (
            <div key={i} className="group relative mx-2 h-[200px] w-[300px] shrink-0 overflow-hidden rounded-xl border border-white/[.06] bg-[#111]">
              <img src={im.src} alt={im.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                <span className="text-[13px] font-medium text-white/80">{im.t}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
