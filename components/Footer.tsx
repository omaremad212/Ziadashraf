'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-green-400">Available For Work</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Let&apos;s create something
            <br />
            amazing together
          </h2>

          <p className="text-white/50 mb-10 max-w-lg mx-auto">
            Ready to elevate your brand? Let&apos;s discuss your project and bring your vision to life.
          </p>

          <a
            href="mailto:ziadashraf@gmail.com"
            className="inline-flex px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors text-lg"
          >
            Book a Free Call
          </a>

          <p className="mt-6 text-white/40">
            <a href="mailto:ziadashraf@gmail.com" className="hover:text-white transition-colors">
              ziadashraf@gmail.com
            </a>
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">©2025 Ziad Ashraf. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Instagram</a>
          <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Behance</a>
          <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
