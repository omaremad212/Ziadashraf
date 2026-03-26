'use client'

import { motion } from 'framer-motion'

const row1Tags = [
  { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Brand Graphics' },
  { icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', label: 'Brand Migration' },
  { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', label: 'Package Design' },
  { icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', label: 'Branding' },
  { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Slide Decks' },
  { icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', label: 'Copywriting' },
]

const row2Tags = [
  { icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z', label: 'Brand Integrations' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Optimization' },
  { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'Brand Landing Pages' },
  { icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Social Media' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Icons' },
  { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'Brand Visibility' },
  { icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z', label: 'Brand Integrations' },
]

function TagPill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mx-2 rounded-full border border-white/[0.08] bg-white/[0.03] shrink-0 hover:bg-white/[0.06] transition-colors duration-300">
      <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
      <span className="text-[13px] text-white/50 whitespace-nowrap">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated blob background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-white/[0.07] to-transparent rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] bg-gradient-to-tl from-white/[0.04] to-transparent rounded-full blur-[80px] animate-blob-delay" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[400px] bg-white/[0.03] rounded-full blur-[80px] animate-blob" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center px-6 pt-32 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] mb-10"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full opacity-60" />
          <span className="text-[13px] text-white/60 tracking-wide">Crafting Unique Brand Identities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
          className="text-[clamp(2.5rem,8vw,6.5rem)] font-extralight leading-[1.05] tracking-[-0.03em] mb-8"
        >
          Branding that you
          <br />
          need Indeed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-white/40 text-[15px] md:text-[17px] leading-relaxed max-w-[520px] mx-auto mb-12"
        >
          Elevate your brand with custom identity and package design. Showcase your
          story through bold visuals and strategic design solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-7 py-3 bg-white text-[#0a0a0a] text-[14px] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            Get Started Now
          </a>
          <a
            href="#projects"
            className="px-7 py-3 border border-white/[0.12] text-white/80 text-[14px] font-medium rounded-full hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
          >
            See Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-32 left-0 right-0 flex items-center gap-4 px-6 md:px-16"
      >
        <span className="text-[12px] text-white/25 tracking-wider uppercase">Scroll down</span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[22px] h-[34px] border border-white/15 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-[3px] h-[6px] bg-white/40 rounded-full"
          />
        </motion.div>
        <div className="flex-1 h-px bg-gradient-to-l from-white/10 to-transparent" />
        <span className="text-[12px] text-white/25 tracking-wider uppercase">to see projects</span>
      </motion.div>

      {/* Two-row service tags marquee */}
      <div className="absolute bottom-0 left-0 right-0 pb-2 pt-4 border-t border-white/[0.04] space-y-3 marquee-mask">
        <div className="flex marquee-left whitespace-nowrap">
          {[...row1Tags, ...row1Tags, ...row1Tags].map((t, i) => (
            <TagPill key={`r1-${i}`} icon={t.icon} label={t.label} />
          ))}
        </div>
        <div className="flex marquee-right whitespace-nowrap">
          {[...row2Tags, ...row2Tags, ...row2Tags].map((t, i) => (
            <TagPill key={`r2-${i}`} icon={t.icon} label={t.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
