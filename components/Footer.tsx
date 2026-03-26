'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-28 pb-10 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[700px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[13px] text-emerald-400/80 font-medium">Available For Work</span>
          </div>

          <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-extralight leading-[1.1] tracking-tight mb-6">
            Let&apos;s create something
            <br />
            <span className="text-white/60">amazing together</span>
          </h2>

          <p className="text-white/30 text-[15px] leading-relaxed max-w-md mx-auto mb-10">
            Ready to elevate your brand? Let&apos;s discuss your project and bring your vision to life.
          </p>

          {/* CTA Button */}
          <a
            href="mailto:ziadashraf@gmail.com"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] text-[15px] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-500"
          >
            Book a Free Call
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-6">
            <a
              href="mailto:ziadashraf@gmail.com"
              className="text-white/25 text-[14px] hover:text-white/50 transition-colors duration-300 border-b border-white/10 hover:border-white/25 pb-0.5"
            >
              ziadashraf@gmail.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto mt-24 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-white/20 text-[12px] tracking-wide">&copy;2025 Ziad Ashraf. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {['Instagram', 'Behance', 'LinkedIn', 'Dribbble'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-white/20 hover:text-white/50 text-[12px] tracking-wide transition-colors duration-200"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
