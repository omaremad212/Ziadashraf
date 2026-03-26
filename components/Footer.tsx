'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="px-6 pb-8 pt-24">
      <div className="mx-auto max-w-[1240px]">
        {/* CTA card */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative mb-10 overflow-hidden rounded-3xl border border-white/[.06] bg-[#0c0c0c] p-12 text-center md:p-16">
          {/* glow */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-white/[.02] to-transparent" />

          <div className="relative z-10">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[.06] bg-white/[.03] px-3 py-1.5 text-[11px] uppercase tracking-[.16em] text-white/30">
              <span className="text-[10px] text-amber-400/60">&#10022;</span> In the studio
            </span>

            {/* available badge */}
            <div className="mb-7 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[.06] px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] font-medium text-emerald-400/70">Available for work</span>
              </span>
            </div>

            <h2 className="mx-auto max-w-2xl text-[clamp(1.4rem,3.8vw,2.6rem)] font-normal leading-[1.2] tracking-tight">
              Curious about what we can create together? Let&apos;s bring something extraordinary to life!
            </h2>

            <p className="mt-6">
              <a href="mailto:ziadashraf@gmail.com"
                className="border-b border-white/10 pb-0.5 text-[13px] text-white/30 transition hover:border-white/25 hover:text-white/50">
                ziadashraf@gmail.com
              </a>
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:ziadashraf@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-black transition hover:bg-white/90">
                Book a Free Call
              </a>
              <a href="#projects"
                className="rounded-full border border-white/[.12] px-6 py-3 text-[13px] font-medium text-white/60 transition hover:bg-white/[.04]">
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>

        {/* bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[.06] pt-5 sm:flex-row">
          <p className="text-[11px] tracking-wide text-white/15">&copy;2025 Ziad Ashraf. All rights reserved.</p>
          <div className="flex gap-5">
            {['Instagram','Behance','LinkedIn','Dribbble'].map(s => (
              <a key={s} href="#" className="text-[11px] tracking-wide text-white/15 transition hover:text-white/40">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
