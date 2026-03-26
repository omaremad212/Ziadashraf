'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/70 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/10">
              <img
                src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
                alt="Ziad Ashraf"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* Center nav links */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1.5 text-[13px] text-white/50 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-white text-[#0a0a0a] text-[13px] font-semibold rounded-full hover:bg-white/90 transition-all duration-200"
          >
            Get in touch
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/[0.06] px-6 py-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-[15px] text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 text-center py-3 bg-white text-[#0a0a0a] text-sm font-semibold rounded-full"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
