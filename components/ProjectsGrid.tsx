'use client'

import { motion } from 'framer-motion'

const projects = [
  { src: '/1.png', title: 'Brand Identity Design' },
  { src: '/تيشيرت adidas Loose للأطفال، مريح وخفيف يناسب حركتهم طول اليوم.اختاروه لأطفالكم لأناقة يومية برا.jpg.jpeg', title: 'Adidas Kids Apparel' },
  { src: '/c822c6b9_sprint.jpg.jpeg', title: 'Sprint Campaign' },
  { src: '/31cefa06_png (1).png', title: 'Product Packaging' },
  { src: '/e42d66b0_png (1).png', title: 'Visual Identity' },
  { src: '/مجوراتتت.jpg.jpeg', title: 'Jewelry Branding' },
  { src: '/نسخة من شعار سمح.png', title: 'Logo Design' },
  { src: '/حذاء Lightblaze بتصميم خفيف وراحة تدوم طول اليوم، عملي ويناسب كل مشاويرك.متوفر بكل المقاسات وأرب.jpg.jpeg', title: 'Lightblaze Footwear' },
  { src: '/بعد.png', title: 'Brand Refresh' },
]

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm text-white/50 uppercase tracking-widest">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-light mt-3">Selected Projects</h2>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5"
          >
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white font-medium text-lg">{project.title}</p>
                <p className="text-white/60 text-sm mt-1 flex items-center gap-1 justify-center">
                  View Casestudy <span className="text-base">↗</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
