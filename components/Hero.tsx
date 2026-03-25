'use client'

import { motion } from 'framer-motion'

const services = [
  { icon: '🖼', label: 'Brand Graphics' },
  { icon: '🔄', label: 'Brand Migration' },
  { icon: '📦', label: 'Package Design' },
  { icon: '🌐', label: 'Branding' },
  { icon: '📊', label: 'Slide Decks' },
  { icon: '✍️', label: 'Copywriting' },
  { icon: '🛒', label: 'Brand Integrations' },
  { icon: '⚡', label: 'Optimization' },
  { icon: '🏠', label: 'Brand Landing Pages' },
  { icon: '📱', label: 'Social Media' },
  { icon: '🎨', label: 'Icons' },
  { icon: '🔍', label: 'Brand Visibility' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="text-sm text-white/80">Crafting Unique Brand Identities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-6"
        >
          Branding that you
          <br />
          need Indeed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Elevate your brand with custom identity and package design. Showcase your
          story through bold visuals and strategic design solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Get Started Now
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
          >
            See Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 left-0 right-0 flex items-center justify-center gap-4 px-6"
      >
        <span className="text-sm text-white/40">Scroll down</span>
        <div className="flex-1 max-w-md h-px bg-white/10" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
        <div className="flex-1 max-w-md h-px bg-white/10" />
        <span className="text-sm text-white/40">to see projects</span>
      </motion.div>

      {/* Service tags marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-6 border-t border-white/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...services, ...services].map((s, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 mx-2 rounded-full border border-white/10 bg-white/5 shrink-0"
            >
              <span className="text-sm">{s.icon}</span>
              <span className="text-sm text-white/70">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
