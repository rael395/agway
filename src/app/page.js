import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import Subscribe from '@/components/subscribe'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
  <>
  <Hero className="pt-32 pb-0 lg:pb-10"/>
  <About className="py-16 lg:py-32 overflow-hidden"/>
  <Services className="py-16 !pt-32 lg:py-32" />
  <Testimonials className="py-16 lg:py-32"/>
  <Subscribe />
  <Footer />
  
  </>
  )
}
