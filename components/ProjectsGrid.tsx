'use client'

import { motion } from 'framer-motion'

const projects = [
  { src: '/1.png', title: 'Brand Identity Design', cat: 'Branding' },
  { src: '/نسخة من شعار سمح.png', title: 'Logo Design', cat: 'Logo' },
  { src: '/تيشيرت adidas Loose للأطفال، مريح وخفيف يناسب حركتهم طول اليوم.اختاروه لأطفالكم لأناقة يومية برا.jpg.jpeg', title: 'Adidas Kids Apparel', cat: 'Fashion' },
  { src: '/c822c6b9_sprint.jpg.jpeg', title: 'Sprint Campaign', cat: 'Marketing' },
  { src: '/مجوراتتت.jpg.jpeg', title: 'Jewelry Branding', cat: 'Branding' },
  { src: '/حذاء Lightblaze بتصميم خفيف وراحة تدوم طول اليوم، عملي ويناسب كل مشاويرك.متوفر بكل المقاسات وأرب.jpg.jpeg', title: 'Lightblaze Footwear', cat: 'Product' },
  { src: '/31cefa06_png (1).png', title: 'Product Packaging', cat: 'Package Design' },
  { src: '/بعد.png', title: 'Brand Refresh', cat: 'Rebranding' },
  { src: '/e42d66b0_png (1).png', title: 'Visual Identity', cat: 'Identity' },
]

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-[2.5rem] md:text-[3rem] font-normal tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        {/* 3-column uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] aspect-[4/3]">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                  <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-medium">{project.cat}</span>
                    <div className="flex items-center justify-between mt-1.5">
                      <h3 className="text-white text-[14px] font-medium">{project.title}</h3>
                      <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
