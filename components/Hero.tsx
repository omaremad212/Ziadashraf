'use client'

import { motion } from 'framer-motion'

const row1 = [
  'Brand Graphics', 'Brand Migration', 'Package Design', 'Branding',
  'Slide Decks', 'Copywriting', 'Brand Graphics', 'Brand Migration',
  'Package Design', 'Branding', 'Slide Decks', 'Copywriting',
]
const row2 = [
  'Brand Integrations', 'Optimization', 'Brand Landing Pages', 'Social Media',
  'Icons', 'Brand Visibility', 'Brand Integrations', 'Optimization',
  'Brand Landing Pages', 'Social Media', 'Icons', 'Brand Visibility',
]

const previewImages = [
  '/1.png',
  '/c822c6b9_sprint.jpg.jpeg',
  '/31cefa06_png (1).png',
  '/e42d66b0_png (1).png',
  '/نسخة من شعار سمح.png',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Main hero content */}
      <div className="flex-1 flex items-center pt-[70px]">
        <div className="max-w-[1300px] mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[1fr,0.9fr] gap-10 items-center min-h-[calc(100vh-200px)]">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8"
              >
                <span className="text-[10px] text-white/60">&#10022;</span>
                <span className="text-[12px] text-white/50">Crafting Unique Brand Identities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.02em] mb-7"
              >
                Branding that you
                <br />
                need Indeed
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-white/35 text-[15px] leading-[1.7] max-w-[440px] mb-10"
              >
                Elevate your brand with custom identity and package design. Showcase your
                story through bold visuals and strategic design solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <a href="#contact" className="px-6 py-3 bg-white text-black text-[13px] font-semibold rounded-full hover:bg-white/90 transition-colors">
                  Get Started Now
                </a>
                <a href="#projects" className="px-6 py-3 border border-white/[0.15] text-white/70 text-[13px] font-medium rounded-full hover:bg-white/[0.04] transition-all">
                  See Projects
                </a>
              </motion.div>
            </div>

            {/* Right: Large profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[600px]">
                <img
                  src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
                  alt="Ziad Ashraf"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Small preview images row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-3 mt-6 mb-8 overflow-x-auto pb-2"
          >
            <span className="text-[11px] text-white/20 uppercase tracking-widest shrink-0 mr-2">Scroll down</span>
            <div className="flex gap-3">
              {previewImages.map((src, i) => (
                <div key={i} className="w-[70px] h-[70px] rounded-xl overflow-hidden border border-white/[0.08] shrink-0 bg-[#111]">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[11px] text-white/20 uppercase tracking-widest shrink-0 ml-2">to see projects</span>
          </motion.div>
        </div>
      </div>

      {/* Two-row scrolling tags at bottom */}
      <div className="border-t border-white/[0.04] py-4 space-y-2.5 marquee-mask">
        <div className="flex marquee-left whitespace-nowrap">
          {[...row1, ...row1].map((tag, i) => (
            <div key={`r1-${i}`} className="inline-flex items-center gap-2 px-4 py-2 mx-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] shrink-0">
              <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[12px] text-white/35">{tag}</span>
            </div>
          ))}
        </div>
        <div className="flex marquee-right whitespace-nowrap">
          {[...row2, ...row2].map((tag, i) => (
            <div key={`r2-${i}`} className="inline-flex items-center gap-2 px-4 py-2 mx-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] shrink-0">
              <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-[12px] text-white/35">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
