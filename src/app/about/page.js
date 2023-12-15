import Hero from '@/components/about/Hero'
import Story from '@/components/about/Story'
import Team from '@/components/about/Team'
import Whyus from '@/components/about/Whyus'
import Subscribe from '@/components/subscribe'
import Testimonials from '@/components/testimonials'
import React from 'react'

const page = () => {
  return (
    <>
        <Hero className='pt-52 pb-24'/>
        <Story />
        <Whyus className='pt-52 pb-0' />
        <Testimonials className="pt-10 lg:pt-44 pb-10 lg:pb-32 "/>
        <Team className="py-10 lg:py-32"/>
        <Subscribe className="bg-blue-500 py-10 lg:py-32"/>
    </>
  )
}

export default page