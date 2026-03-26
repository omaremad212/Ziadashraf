'use client'
import { motion } from 'framer-motion'

const items = [
  { src: '/1.png', title: 'Brand Identity Design', tag: 'Branding' },
  { src: '/نسخة من شعار سمح.png', title: 'Logo Design', tag: 'Logo' },
  { src: '/تيشيرت adidas Loose للأطفال، مريح وخفيف يناسب حركتهم طول اليوم.اختاروه لأطفالكم لأناقة يومية برا.jpg.jpeg', title: 'Adidas Kids Apparel', tag: 'Fashion' },
  { src: '/c822c6b9_sprint.jpg.jpeg', title: 'Sprint Campaign', tag: 'Marketing' },
  { src: '/مجوراتتت.jpg.jpeg', title: 'Jewelry Branding', tag: 'Branding' },
  { src: '/حذاء Lightblaze بتصميم خفيف وراحة تدوم طول اليوم، عملي ويناسب كل مشاويرك.متوفر بكل المقاسات وأرب.jpg.jpeg', title: 'Lightblaze Footwear', tag: 'Product' },
  { src: '/31cefa06_png (1).png', title: 'Product Packaging', tag: 'Package Design' },
  { src: '/بعد.png', title: 'Brand Refresh', tag: 'Rebranding' },
  { src: '/e42d66b0_png (1).png', title: 'Visual Identity', tag: 'Identity' },
]

export default function ProjectsGrid() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12 text-[2.4rem] font-normal tracking-tight md:text-[3rem]">
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: .5, delay: i * .04 }}
              className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[.06] bg-[#111]">
                <img src={p.src} alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/25 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-[.14em] text-white/40">{p.tag}</span>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[14px] font-medium text-white">{p.title}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
