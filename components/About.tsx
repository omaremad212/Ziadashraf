'use client'

import { motion } from 'framer-motion'

const skills = [
  'Brand Identity', 'Package Design', 'Logo Design', 'Typography',
  'Visual Design', 'Adobe Suite', 'Figma', 'Illustrator',
  'Photoshop', 'Social Media', 'Print Design', 'Mockups',
]

const experience = [
  { period: '2020 \u2014 Present', role: 'Senior Brand Designer', at: 'Freelance' },
  { period: '2017 \u2014 2020', role: 'Graphic Designer', at: 'Creative Agency' },
  { period: '2015 \u2014 2017', role: 'Junior Designer', at: 'Design Studio' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-14 items-start">
          {/* Left: Large profile image - takes up full space */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden bg-[#111] border border-white/[0.06]">
              <img
                src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
                alt="Ziad Ashraf"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="text-[2.5rem] md:text-[3rem] font-normal tracking-tight mb-8">
              Meet Ziad
            </h2>

            <p className="text-white/35 text-[14px] leading-[1.8] mb-5">
              I&apos;m a passionate brand and graphic designer dedicated to crafting unique visual
              identities that tell compelling stories. With years of experience in brand design,
              package design, and visual communication, I help businesses stand out in crowded
              markets through strategic design solutions.
            </p>
            <p className="text-white/35 text-[14px] leading-[1.8] mb-10">
              My approach combines creative thinking with strategic insight, ensuring every design
              not only looks stunning but also communicates the brand&apos;s core message effectively.
            </p>

            {/* Skills */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-[11px] text-white/40 border border-white/[0.08] rounded-full bg-white/[0.02]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-[12px] text-white/25 uppercase tracking-[0.15em] font-medium mb-4">Experience</h3>
              <div className="divide-y divide-white/[0.06]">
                {experience.map((e) => (
                  <div key={e.period} className="flex items-start gap-6 py-3.5 first:pt-0">
                    <span className="text-[11px] text-white/20 w-[120px] shrink-0 pt-0.5">{e.period}</span>
                    <div>
                      <p className="text-white/70 text-[13px] font-medium">{e.role}</p>
                      <p className="text-white/25 text-[12px] mt-0.5">{e.at}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Works link */}
            <a href="#projects" className="inline-flex items-center gap-2 text-[12px] text-white/30 hover:text-white/50 transition-colors uppercase tracking-widest">
              Recent Works <span className="text-white/60">&#10022;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
