import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectsGrid from '@/components/ProjectsGrid'
import About from '@/components/About'
import RecentWorks from '@/components/RecentWorks'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <About />
      <RecentWorks />
      <Process />
      <Services />
      <Testimonials />
      <Stats />
      <FAQ />
      <Footer />
    </main>
  )
}
