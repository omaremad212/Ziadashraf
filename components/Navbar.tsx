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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'}`}>
        <div className="max-w-[1300px] mx-auto px-8 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img
                src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
                alt="ZA"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[14px] font-semibold tracking-tight hidden sm:block">Portfolite</span>
          </a>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-1.5 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-[13px] text-white/50 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 bg-white text-black text-[13px] font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Get in touch
          </a>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block w-5 h-[1.5px] bg-white" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="block w-5 h-[1.5px] bg-white" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/90 backdrop-blur-2xl border-b border-white/[0.06] px-8 py-6"
          >
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-white/60 hover:text-white text-[15px]">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-block mt-4 px-5 py-2.5 bg-white text-black text-[13px] font-semibold rounded-full">
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
