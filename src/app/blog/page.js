import React from 'react'
import Hero from '@/components/about/Hero';
import Posts from '@/components/blog/Posts';
import Subscribe from '@/components/subscribe';


export const metadata = {
    title: "Blogs - Agway Investment Limited",
};
const page = () => {
  return (
    <>
    <Hero className='pt-52 pb-24' title="Recent Updates" subTitle="Our Blog" />
    <Posts className="pt-0 pb-52" itemsPerPage={4} />
    <Subscribe className="py-16 pt-64 lg:py-32 bg-blue-500" />
    
    </>
  )
}

export default page