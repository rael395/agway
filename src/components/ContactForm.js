"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactForm = ({className}) => {
  return (
    <motion.section
    initial={{opacity: 0, y: 20}}
    whileInView={{
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.5
        },
    }}
    viewport={{once: true}}
    className={`${className}`}>
        <div className="container px-4 mx-auto">
            <div className="lg:flex items-stretch mb-32" >
                <div className="lg:w-6/12 flex-1" >
                    <Image 
                    src="/images/contact-us-1.jpg"
                    width={1000}
                    height={100}
                    alt="Image"
                    className="object-cover object-center max-w-full h-full bg-white"
                    />
                </div>
                <div className='lg:w-6/12 flex-1' >
                    <form className='p-14 bg-white h-full' >
                        <h2 className='text-gray-800 mb-4 text-3xl' >Get In Touch</h2>
                        <p className='text-gray-500 mb-6' >Do you have any questions or feedback to share with us? Please use the
                            form below to get in touch.
                        </p>
                        <div className='flex space-x-5 ' >
                            <div className='w-6/12 mb-6' >
                                <label
                                htmlFor='Firstname'
                                className='mb-2 block text-gray-600 text-base'
                                >
                                    First Name
                                </label>
                                <input 
                                type="text"
                                className='rounded-0 appearance-none !text-base p-2 
                                outline-1mt-1 px-3 py-2 bg-white border shadow-sm 
                                order-slate-300 placeholder-slate-400 focus:outline-none
                                focus:border-blue-500 focus:ring-blue-500 block w-full
                                sm:text-sm focus:ring-1 outline-gray-300'
                                id="Firstname"
                                />
                            </div>
                            <div className='w-6/12 mb-6' >
                                <label
                                htmlFor='Lastname'
                                className='mb-2 block text-gray-600 text-base'
                                >
                                    Last Name
                                </label>
                                <input 
                                type="text"
                                className='rounded-0 appearance-none !text-base p-2 
                                outline-1mt-1 px-3 py-2 bg-white border shadow-sm 
                                order-slate-300 placeholder-slate-400 focus:outline-none
                                focus:border-blue-500 focus:ring-blue-500 block w-full
                                sm:text-sm focus:ring-1 outline-gray-300'
                                id="Lastname"
                                />
                            </div>
                        </div>
                        <div className='w-6/12 mb-6' >
                                <label
                                htmlFor='email'
                                className='mb-2 block text-gray-600 text-base'
                                >
                                    Email Address
                                </label>
                                <input 
                                type="text"
                                className='rounded-0 appearance-none !text-base p-2 
                                outline-1mt-1 px-3 py-2 bg-white border shadow-sm 
                                order-slate-300 placeholder-slate-400 focus:outline-none
                                focus:border-blue-500 focus:ring-blue-500 block w-full
                                sm:text-sm focus:ring-1 outline-gray-300'
                                id="email"
                                />
                            </div>
                            <div className='w-6/12 mb-6' >
                                <label
                                htmlFor='phone'
                                className='mb-2 block text-gray-600 text-base'
                                >
                                    Phone Number
                                </label>
                                <input 
                                type="text"
                                className='rounded-0 appearance-none !text-base p-2 
                                outline-1mt-1 px-3 py-2 bg-white border shadow-sm 
                                order-slate-300 placeholder-slate-400 focus:outline-none
                                focus:border-blue-500 focus:ring-blue-500 block w-full
                                sm:text-sm focus:ring-1 outline-gray-300'
                                id="phone"
                                />
                            </div>
                            <div className='block mb-6' >
                                <label
                                htmlFor='message'
                                className='mb-2 block text-gray-600 text-base'
                                >
                                    Message
                                </label>
                                <textarea 
                                name=""
                                id="message"
                                cols="80"
                                rows="7"
                                className="rounded-0 appearance-none !text-base p-2 
                                outline-1mt-1 px-3 py-2 bg-white border shadow-sm 
                                order-slate-300 placeholder-slate-400 focus:outline-none
                                focus:border-blue-500 focus:ring-blue-500 block w-full
                                sm:text-sm focus:ring-1 outline-gray-300"></textarea>
                            </div>
                            <div className='block mb-6' >
                                <input 
                                type="submit"
                                className="cursor-pointer w-full block transition-all
                                duration-300 ease-in-out text-[11.5px] tracking-[2px]
                                font-bold uppercase bg-blue-500 py-4 px-5 text-white
                                hover:bg-white hover:text-blue-500 hover:shadow-2xl"
                                value="Send Message"
                                />
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default ContactForm