'use client'

import { motion } from 'framer-motion'

const projects = [
  { src: '/1.png', title: 'Brand Identity Design', cat: 'Branding' },
  { src: '/c822c6b9_sprint.jpg.jpeg', title: 'Sprint Campaign', cat: 'Marketing' },
  { src: '/31cefa06_png (1).png', title: 'Product Packaging', cat: 'Package Design' },
  { src: '/e42d66b0_png (1).png', title: 'Visual Identity', cat: 'Branding' },
  { src: '/نسخة من شعار سمح.png', title: 'Logo Design', cat: 'Logo' },
  { src: '/مجوراتتت.jpg.jpeg', title: 'Jewelry Branding', cat: 'Branding' },
  { src: '/تيشيرت adidas Loose للأطفال، مريح وخفيف يناسب حركتهم طول اليوم.اختاروه لأطفالكم لأناقة يومية برا.jpg.jpeg', title: 'Adidas Kids Apparel', cat: 'Fashion' },
  { src: '/حذاء Lightblaze بتصميم خفيف وراحة تدوم طول اليوم، عملي ويناسب كل مشاويرك.متوفر بكل المقاسات وأرب.jpg.jpeg', title: 'Lightblaze Footwear', cat: 'Product' },
  { src: '/بعد.png', title: 'Brand Refresh', cat: 'Rebranding' },
]

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-medium">Portfolio</span>
            <h2 className="text-4xl md:text-[3.2rem] font-extralight mt-2 tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-white/35 text-[14px] max-w-sm leading-relaxed">
            A curated collection of brand identity, packaging, and visual design projects.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="break-inside-avoid mb-5 group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06]">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[11px] text-white/40 uppercase tracking-[0.15em]">{project.cat}</span>
                    <div className="flex items-center justify-between mt-1">
                      <h3 className="text-white font-medium text-[15px]">{project.title}</h3>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
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
