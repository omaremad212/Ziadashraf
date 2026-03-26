'use client'
import { motion } from 'framer-motion'

/* ---- service‑tag rows (match the reference exactly) ---- */
const row1 = [
  'Brand Graphics', 'Brand Migration', 'Package Design', 'Branding',
  'Slide Decks', 'Copywriting', 'Brand Graphics', 'Brand Migration',
]
const row2 = [
  'Brand Integrations', 'Optimization', 'Brand Landing Pages', 'Social Media',
  'Icons', 'Brand Visibility', 'Brand Integrations', 'Optimization',
]

/* small icons for the tags (SVG paths) */
const ico1 = 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
const ico2 = 'M13 10V3L4 14h7v7l9-11h-7z'

/* preview thumbnails */
const thumbs = [
  '/1.png',
  '/c822c6b9_sprint.jpg.jpeg',
  '/31cefa06_png (1).png',
  '/e42d66b0_png (1).png',
  '/نسخة من شعار سمح.png',
]

function Tag({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="mx-1.5 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/[.06] bg-white/[.02] px-4 py-2">
      <svg className="h-3.5 w-3.5 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
      <span className="text-[12px] text-white/30">{label}</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col">
      {/* ---- background image (right side, faded) ---- */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] overflow-hidden lg:block">
        <img
          src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
          alt="" className="h-full w-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
      </div>

      {/* ---- content ---- */}
      <div className="relative z-10 mx-auto flex max-w-[1240px] flex-1 flex-col justify-center px-6 pb-40 pt-28">
        {/* badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/[.08] bg-white/[.03] px-4 py-2">
          <span className="text-xs text-amber-400/70">&#10022;</span>
          <span className="text-[12px] text-white/50">Crafting Unique Brand Identities</span>
        </motion.div>

        {/* heading */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .85, delay: .08, ease: [.22,1,.36,1] }}
          className="max-w-[640px] text-[clamp(2.6rem,7vw,5.8rem)] font-normal leading-[1.05] tracking-[-.02em]">
          Branding that you{'\n'}need Indeed
        </motion.h1>

        {/* sub */}
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .22 }}
          className="mt-7 max-w-[440px] text-[15px] leading-[1.7] text-white/35">
          Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
        </motion.p>

        {/* buttons */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .36 }}
          className="mt-10 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-black transition hover:bg-white/90">
            Get Started Now
          </a>
          <a href="#projects" className="rounded-full border border-white/[.14] px-6 py-3 text-[13px] font-medium text-white/70 transition hover:bg-white/[.04]">
            See Projects
          </a>
        </motion.div>

        {/* scroll‑indicator + thumbnails */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .5 }}
          className="mt-16 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[.18em] text-white/20">Scroll down</span>
          <span className="h-px w-8 bg-white/[.08]" />
          <div className="flex gap-2">
            {thumbs.map((s, i) => (
              <div key={i} className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-lg border border-white/[.08] bg-[#111]">
                <img src={s} alt="" className="h-full w-full object-cover opacity-70 transition hover:opacity-100" />
              </div>
            ))}
          </div>
          <span className="h-px w-8 bg-white/[.08]" />
          <span className="text-[10px] uppercase tracking-[.18em] text-white/20">to see projects</span>
        </motion.div>
      </div>

      {/* ---- two‑row scrolling tags ---- */}
      <div className="fade-x space-y-2 border-t border-white/[.04] py-4">
        <div className="flex whitespace-nowrap marquee-l">
          {[...row1, ...row1, ...row1].map((t, i) => <Tag key={`a${i}`} label={t} icon={ico1} />)}
        </div>
        <div className="flex whitespace-nowrap marquee-r">
          {[...row2, ...row2, ...row2].map((t, i) => <Tag key={`b${i}`} label={t} icon={ico2} />)}
        </div>
      </div>
    </section>
  )
}
