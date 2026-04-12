'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/* ---- service-tag rows ---- */
const row1 = [
  'Brand Graphics', 'Brand Migration', 'Package Design', 'Branding',
  'Slide Decks', 'Copywriting', 'Brand Graphics', 'Brand Migration',
]
const row2 = [
  'Brand Integrations', 'Optimization', 'Brand Landing Pages', 'Social Media',
  'Icons', 'Brand Visibility', 'Brand Integrations', 'Optimization',
]
const ico1 = 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
const ico2 = 'M13 10V3L4 14h7v7l9-11h-7z'

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

/* ---- Smoke / Fog Canvas ---- */
function SmokeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, animId = 0

    function resize() {
      w = canvas!.width = canvas!.offsetWidth * (window.devicePixelRatio > 1 ? 1.5 : 1)
      h = canvas!.height = canvas!.offsetHeight * (window.devicePixelRatio > 1 ? 1.5 : 1)
    }
    resize()
    window.addEventListener('resize', resize)

    // Particles for the smoke
    interface P { x: number; y: number; r: number; vx: number; vy: number; o: number; life: number; maxLife: number }
    const particles: P[] = []
    const COUNT = 60

    function spawnParticle(): P {
      const side = Math.random()
      return {
        x: w * (0.2 + Math.random() * 0.3),
        y: h * (0.3 + Math.random() * 0.5),
        r: 80 + Math.random() * 200,
        vx: (Math.random() - 0.3) * 0.4,
        vy: -0.15 - Math.random() * 0.3,
        o: 0,
        life: 0,
        maxLife: 300 + Math.random() * 400,
      }
    }

    for (let i = 0; i < COUNT; i++) {
      const p = spawnParticle()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.life++
        p.x += p.vx
        p.y += p.vy
        p.vx += (Math.random() - 0.5) * 0.02

        // fade in then out
        const progress = p.life / p.maxLife
        if (progress < 0.15) {
          p.o = (progress / 0.15) * 0.07
        } else if (progress > 0.7) {
          p.o = ((1 - progress) / 0.3) * 0.07
        } else {
          p.o = 0.07
        }

        if (p.life >= p.maxLife) {
          Object.assign(p, spawnParticle())
        }

        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        grad.addColorStop(0, `rgba(180, 180, 180, ${p.o})`)
        grad.addColorStop(0.5, `rgba(120, 120, 120, ${p.o * 0.5})`)
        grad.addColorStop(1, 'rgba(100, 100, 100, 0)')
        ctx!.fillStyle = grad
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" style={{ mixBlendMode: 'screen' }} />
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#080808]">
      {/* ---- Smoke background ---- */}
      <div className="pointer-events-none absolute inset-0">
        <SmokeCanvas />
      </div>

      {/* ---- Content (centered) ---- */}
      <div className="relative z-10 mx-auto flex max-w-[900px] flex-1 flex-col items-center justify-center px-6 pt-20 text-center">
        {/* badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[.08] bg-white/[.04] px-5 py-2.5">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span className="text-[13px] text-white/70">Crafting Unique Brand Identities</span>
        </motion.div>

        {/* heading — extra light weight, very large */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: .1, ease: [.22,1,.36,1] }}
          className="text-[clamp(2.8rem,8vw,7rem)] font-extralight leading-[1.05] tracking-[-0.03em]">
          Branding that you
          <br />
          need Indeed
        </motion.h1>

        {/* subtitle */}
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .3 }}
          className="mt-8 max-w-[540px] text-[15px] leading-[1.7] text-white/40">
          Elevate your brand with custom identity and package design. Showcase your
          story through bold visuals and strategic design solutions.
        </motion.p>

        {/* buttons — rounded with border, like the reference */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .45 }}
          className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#contact"
            className="rounded-[14px] border border-white/[.25] bg-black/40 px-8 py-3.5 text-[14px] font-medium text-white backdrop-blur-sm transition hover:bg-white/[.06] hover:border-white/40">
            Get Started Now
          </a>
          <a href="#projects"
            className="rounded-[14px] border border-white/[.25] bg-black/40 px-8 py-3.5 text-[14px] font-medium text-white backdrop-blur-sm transition hover:bg-white/[.06] hover:border-white/40">
            See Projects
          </a>
        </motion.div>
      </div>

      {/* ---- Scroll indicator (centered bottom) ---- */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="relative z-10 mb-8 flex items-center justify-center gap-4 px-6">
        <span className="text-[12px] text-white/20">Scroll down</span>
        <span className="h-px flex-1 max-w-[260px] bg-white/[.08]" />
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex h-9 w-[22px] items-start justify-center rounded-full border border-white/[.15] pt-2">
          <span className="h-[6px] w-[3px] rounded-full bg-white/30" />
        </motion.div>
        <span className="h-px flex-1 max-w-[260px] bg-white/[.08]" />
        <span className="text-[12px] text-white/20">to see projects</span>
      </motion.div>

      {/* ---- Two-row scrolling tags ---- */}
      <div className="fade-x relative z-10 space-y-2 border-t border-white/[.04] py-4">
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
