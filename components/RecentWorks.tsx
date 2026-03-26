'use client'

import { motion } from 'framer-motion'

const images = [
  { src: '/1.png', title: 'Brand Identity' },
  { src: '/c822c6b9_sprint.jpg.jpeg', title: 'Sprint' },
  { src: '/31cefa06_png (1).png', title: 'Packaging' },
  { src: '/e42d66b0_png (1).png', title: 'Visual ID' },
  { src: '/نسخة من شعار سمح.png', title: 'Logo' },
  { src: '/مجوراتتت.jpg.jpeg', title: 'Jewelry' },
  { src: '/تيشيرت adidas Loose للأطفال، مريح وخفيف يناسب حركتهم طول اليوم.اختاروه لأطفالكم لأناقة يومية برا.jpg.jpeg', title: 'Adidas' },
  { src: '/حذاء Lightblaze بتصميم خفيف وراحة تدوم طول اليوم، عملي ويناسب كل مشاويرك.متوفر بكل المقاسات وأرب.jpg.jpeg', title: 'Lightblaze' },
  { src: '/بعد.png', title: 'Refresh' },
]

export default function RecentWorks() {
  return (
    <section className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 px-8"
      >
        <span className="text-[11px] text-white/20 uppercase tracking-[0.2em]">Gallery</span>
        <h2 className="text-[2.2rem] md:text-[2.8rem] font-normal tracking-tight mt-2">Recent Works</h2>
      </motion.div>

      <div className="pause-hover marquee-mask">
        <div className="flex marquee-left-slow">
          {[...images, ...images, ...images].map((img, i) => (
            <div key={i} className="shrink-0 w-[300px] h-[200px] mx-2 rounded-xl overflow-hidden border border-white/[0.06] bg-[#111] group cursor-pointer relative">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[13px] text-white/80 font-medium">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
