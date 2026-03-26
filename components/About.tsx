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
    <section id="about" className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/[0.06] bg-[#111]">
              <img
                src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
                alt="Ziad Ashraf"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/[0.03] rounded-full blur-[60px] pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="py-4"
          >
            <span className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-medium">About</span>
            <h2 className="text-4xl md:text-[3.2rem] font-extralight mt-2 mb-8 tracking-tight">
              Meet Ziad
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-white/40 text-[15px] leading-[1.8]">
                I&apos;m a passionate brand and graphic designer dedicated to crafting unique visual
                identities that tell compelling stories. With years of experience in brand design,
                package design, and visual communication, I help businesses stand out in crowded
                markets through strategic design solutions.
              </p>
              <p className="text-white/40 text-[15px] leading-[1.8]">
                My approach combines creative thinking with strategic insight, ensuring every design
                not only looks stunning but also communicates the brand&apos;s core message effectively.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h3 className="text-[12px] text-white/25 uppercase tracking-[0.2em] font-medium mb-4">Skills &amp; Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3.5 py-1.5 text-[12px] text-white/45 border border-white/[0.08] rounded-full bg-white/[0.02] hover:bg-white/[0.06] hover:text-white/60 transition-all duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-[12px] text-white/25 uppercase tracking-[0.2em] font-medium mb-5">Experience</h3>
              <div className="space-y-0 divide-y divide-white/[0.06]">
                {experience.map((e) => (
                  <div key={e.period} className="flex items-start gap-6 py-4 first:pt-0 last:pb-0">
                    <span className="text-[12px] text-white/25 w-[130px] shrink-0 pt-0.5">{e.period}</span>
                    <div>
                      <p className="text-white/80 text-[14px] font-medium">{e.role}</p>
                      <p className="text-white/30 text-[13px] mt-0.5">{e.at}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
