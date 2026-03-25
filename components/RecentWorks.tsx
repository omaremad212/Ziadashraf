'use client'

const images = [
  '/1.png',
  '/تيشيرت adidas Loose للأطفال، مريح وخفيف يناسب حركتهم طول اليوم.اختاروه لأطفالكم لأناقة يومية برا.jpg.jpeg',
  '/c822c6b9_sprint.jpg.jpeg',
  '/31cefa06_png (1).png',
  '/e42d66b0_png (1).png',
  '/مجوراتتت.jpg.jpeg',
  '/نسخة من شعار سمح.png',
  '/حذاء Lightblaze بتصميم خفيف وراحة تدوم طول اليوم، عملي ويناسب كل مشاويرك.متوفر بكل المقاسات وأرب.jpg.jpeg',
  '/بعد.png',
]

export default function RecentWorks() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <span className="text-sm text-white/50 uppercase tracking-widest">Gallery</span>
        <h2 className="text-4xl md:text-5xl font-light mt-3">Recent Works</h2>
      </div>

      <div className="pause-on-hover overflow-hidden">
        <div className="flex animate-marquee-slow">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-72 h-48 mx-3 rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a]"
            >
              <img
                src={src}
                alt="Recent work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
