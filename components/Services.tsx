'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Brand Identity',
    desc: 'Complete brand identity systems including logos, color palettes, typography, and brand guidelines.',
    icon: '🎯',
  },
  {
    title: 'Package Design',
    desc: 'Eye-catching packaging that stands out on shelves and communicates your brand story effectively.',
    icon: '📦',
  },
  {
    title: 'Brand Design',
    desc: 'Strategic brand design solutions that align with your business goals and resonate with your audience.',
    icon: '🎨',
  },
  {
    title: 'Mockup Design',
    desc: 'Realistic product mockups and presentations that bring your designs to life before production.',
    icon: '🖥',
  },
]

const tags1 = [
  'Brand Graphics', 'Brand Migration', 'Package Design', 'Branding',
  'Slide Decks', 'Copywriting', 'Brand Integrations', 'Optimization',
]

const tags2 = [
  'Brand Landing Pages', 'Social Media', 'Icons', 'Brand Visibility',
  'Brand Graphics', 'Visual Identity', 'Logo Design', 'Typography',
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-widest">What I do</span>
          <h2 className="text-4xl md:text-5xl font-light mt-3">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-[#1a1a1a] hover:border-white/20 transition-colors group"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling tags */}
      <div className="overflow-hidden space-y-4 py-8 border-y border-white/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tags1, ...tags1, ...tags1].map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 mx-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...tags2, ...tags2, ...tags2].map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 mx-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
