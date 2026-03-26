'use client'
import { motion } from 'framer-motion'

const skills = [
  'Brand Identity', 'Package Design', 'Logo Design', 'Typography',
  'Visual Design', 'Adobe Suite', 'Figma', 'Illustrator',
  'Photoshop', 'Social Media', 'Print Design', 'Mockups',
]

const jobs = [
  { role: 'Senior Brand Designer', at: 'Freelance', period: '2020 \u2014 Present' },
  { role: 'Graphic Designer', at: 'Creative Agency', period: '2017 \u2014 2020' },
  { role: 'Junior Designer', at: 'Design Studio', period: '2015 \u2014 2017' },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Big image */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 overflow-hidden rounded-3xl border border-white/[.06] bg-[#111]" style={{ maxHeight: 520 }}>
          <img
            src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
            alt="Ziad Ashraf" className="h-full w-full object-cover object-top" />
        </motion.div>

        {/* two cols: text | experience */}
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-7 text-[2.4rem] font-normal tracking-tight md:text-[3rem]">Meet Ziad</h2>
            <p className="mb-4 text-[14px] leading-[1.8] text-white/35">
              I&apos;m a passionate brand and graphic designer dedicated to crafting unique visual identities that tell compelling stories. With years of experience in brand design, package design, and visual communication, I help businesses stand out in crowded markets through strategic design solutions.
            </p>
            <p className="mb-9 text-[14px] leading-[1.8] text-white/35">
              My approach combines creative thinking with strategic insight, ensuring every design not only looks stunning but also communicates the brand&apos;s core message effectively.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="rounded-full border border-white/[.07] bg-white/[.02] px-3 py-1.5 text-[11px] text-white/40">{s}</span>
              ))}
            </div>
            <a href="#projects" className="text-[12px] uppercase tracking-[.18em] text-white/25 transition hover:text-white/50">
              Recent Works <span className="text-amber-400/60">&#10022;</span>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
            <h3 className="mb-5 text-[12px] font-medium uppercase tracking-[.14em] text-white/25">Experience</h3>
            <div className="divide-y divide-white/[.06]">
              {jobs.map(j => (
                <div key={j.period} className="py-4 first:pt-0">
                  <p className="text-[14px] font-medium text-white/70">{j.role}</p>
                  <p className="mt-0.5 text-[12px] text-white/25">{j.at}</p>
                  <p className="mt-1 text-[11px] text-white/15">{j.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
