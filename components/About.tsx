'use client'

import { motion } from 'framer-motion'

const skills = [
  'Brand Identity', 'Package Design', 'Logo Design', 'Typography',
  'Visual Design', 'Adobe Creative Suite', 'Figma', 'Illustrator',
  'Photoshop', 'Social Media Design', 'Print Design', 'Mockup Design',
]

const experience = [
  { year: '2020 - Present', role: 'Senior Brand Designer', company: 'Freelance' },
  { year: '2017 - 2020', role: 'Graphic Designer', company: 'Creative Agency' },
  { year: '2015 - 2017', role: 'Junior Designer', company: 'Design Studio' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/freepik_prompt-a-cinematic-side-profile-silhouette-of-the-person-in-the-uploaded-image-img1-facing-left.-the-scene-is-minimalistic-and-dramatic-with-a-strong-backlight-creating-a-glowing-edge-aro_0001.png"
              alt="Ziad Ashraf"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-white/50 uppercase tracking-widest">About</span>
          <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6">Meet Ziad</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            I&apos;m a passionate brand and graphic designer dedicated to crafting unique visual
            identities that tell compelling stories. With years of experience in brand design,
            package design, and visual communication, I help businesses stand out in crowded
            markets through strategic design solutions.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            My approach combines creative thinking with strategic insight, ensuring every design
            not only looks stunning but also communicates the brand&apos;s core message effectively.
          </p>

          <div className="mb-8">
            <h3 className="text-sm text-white/50 uppercase tracking-widest mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-white/70 border border-white/10 rounded-full bg-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-white/50 uppercase tracking-widest mb-4">Experience</h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.year} className="flex items-start gap-4">
                  <span className="text-sm text-white/40 w-32 shrink-0">{exp.year}</span>
                  <div>
                    <p className="text-white font-medium">{exp.role}</p>
                    <p className="text-white/50 text-sm">{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
