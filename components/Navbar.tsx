'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/[.06]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6">
        {/* logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
            alt="ZA" className="h-8 w-8 rounded-lg object-cover"
          />
          <span className="hidden text-sm font-semibold sm:block">Portfolite</span>
        </a>

        {/* center pill */}
        <div className="hidden items-center gap-0.5 rounded-full border border-white/[.06] bg-white/[.03] px-1 py-1 md:flex">
          {links.map(l => (
            <a key={l.name} href={l.href}
              className="rounded-full px-4 py-1.5 text-[13px] text-white/50 transition hover:bg-white/[.06] hover:text-white">
              {l.name}
            </a>
          ))}
        </div>

        {/* cta */}
        <a href="#contact"
          className="hidden rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-black transition hover:bg-white/90 md:inline-flex">
          Get in touch
        </a>

        {/* mobile */}
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 md:hidden" aria-label="Menu">
          <motion.span animate={open ? { rotate: 45, y: 5 } : {}} className="block h-[1.5px] w-5 bg-white" />
          <motion.span animate={open ? { rotate: -45, y: -3 } : {}} className="block h-[1.5px] w-5 bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="border-b border-white/[.06] bg-black/90 px-6 pb-6 pt-2 backdrop-blur-2xl md:hidden">
            {links.map(l => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)}
                className="block py-3 text-[15px] text-white/60 transition hover:text-white">{l.name}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black">
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
