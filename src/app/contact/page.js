import React from 'react';
import Hero from '@/components/about/Hero';
import ContactForm from '@/components/ContactForm';


const page = () => {
  return (
    <>
    <Hero className="pt-32 pb-24" title="Contact" subTitle="Get In Touch" />

    <ContactForm />
    
    </>
  )
}

export default page