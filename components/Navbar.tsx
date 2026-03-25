'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
            alt="Ziad Ashraf"
            className="w-10 h-10 rounded-full object-cover"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
        >
          Get in touch
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-6 py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex mt-3 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full"
          >
            Get in touch
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
