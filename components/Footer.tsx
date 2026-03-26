'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-8 px-8">
      <div className="max-w-[1300px] mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/[0.06] bg-[#0f0f0f] p-12 md:p-16 text-center mb-12 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.02] rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-8">
              <span className="text-[10px] text-white/40">&#10022;</span>
              <span className="text-[11px] text-white/30 uppercase tracking-widest">In the studio</span>
            </div>

            {/* Available badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="text-[11px] text-emerald-400/70 font-medium">Available for work</span>
              </div>
            </div>

            <h2 className="text-[clamp(1.5rem,4vw,2.8rem)] font-normal leading-[1.2] tracking-tight max-w-2xl mx-auto mb-8">
              Curious about what we can create together? Let&apos;s bring something extraordinary to life!
            </h2>

            <p className="mb-8">
              <a href="mailto:ziadashraf@gmail.com" className="text-white/30 text-[13px] hover:text-white/50 transition-colors border-b border-white/10 hover:border-white/25 pb-0.5">
                ziadashraf@gmail.com
              </a>
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:ziadashraf@gmail.com"
                className="px-6 py-3 bg-white text-black text-[13px] font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Book a Free Call
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-white/[0.12] text-white/60 text-[13px] font-medium rounded-full hover:bg-white/[0.04] transition-all"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-white/15 text-[11px] tracking-wide">&copy;2025 Ziad Ashraf. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['Instagram', 'Behance', 'LinkedIn', 'Dribbble'].map((s) => (
              <a key={s} href="#" className="text-white/15 hover:text-white/40 text-[11px] tracking-wide transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
