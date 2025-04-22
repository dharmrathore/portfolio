'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
// import profilepic from '../../public/images/rathore.jpg'
import Link from 'next/link'
import { iconsSvg } from '@/app/utils/Iconsvg'
import { motion } from 'framer-motion'
import 'animate.css'

const About = () => {
    return (
        <section className='w-full py-16 bg-gradient-to-b from-white to-gray-50' id='about'>
            <div className='max-w-7xl mx-auto px-4'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-center mb-12'
                >
                    <h2 className='text-3xl md:text-4xl font-bold mb-4 theme-color'>About Me</h2>
                    <div className='w-20 h-1 bg-[#1f436e] mx-auto rounded-full'></div>
                </motion.div>

                <div className='flex flex-col md:flex-row items-center gap-8'>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='w-full md:w-4/12'
                    >
                        <div className='relative group'>
                            <div className='absolute inset-0 bg-gradient-to-r from-[#1f436e] to-blue-600 rounded-lg transform group-hover:scale-105 transition-transform duration-300'></div>
                            <Image 
                                src="/images/rathore.jpg" 
                                alt='Dharmendra Rathore' 
                                width={640} 
                                height={840}
                                className='relative rounded-lg transform group-hover:scale-100 transition-transform duration-300'
                            />
                        </div>
                        
                        <div className='mt-6 text-center'>
                            <h2 className='text-2xl font-bold theme-color mb-2'>Dharmendra Rathore</h2>
                            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#1f436e] to-blue-600 text-white px-4 py-2 rounded-full'>
                                <p className='text-sm'>Available for Work</p>
                                <span className='w-2 h-2 bg-white rounded-full animate-ping'></span>
                            </div>
                        </div>

                        <div className='flex justify-center gap-4 mt-6'>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="#" 
                                className='w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#1f436e] hover:text-white transition-all duration-300'
                            >
                                <span dangerouslySetInnerHTML={{__html: iconsSvg.facebookIcon}} />
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://www.linkedin.com/in/dharmendra-rathore-0168aa105/" 
                                target='_blank'
                                className='w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#1f436e] hover:text-white transition-all duration-300'
                            >
                                <span dangerouslySetInnerHTML={{__html: iconsSvg.linkedinIcon}} />
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://visakwik.com/" 
                                target='_blank'
                                className='w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#1f436e] hover:text-white transition-all duration-300'
                            >
                                <span dangerouslySetInnerHTML={{__html: iconsSvg.webIcon}} />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='w-full md:w-8/12'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
                            Hello, I'm <span className='text-[#1f436e]'>Dharmendra Rathore</span>,<br />
                            <span className='bg-gradient-to-r from-[#1f436e] to-blue-600 bg-clip-text text-transparent'>
                                Senior UI Developer
                            </span> Based in India.
                        </h2>
                        
                        <p className='text-gray-600 mb-8 text-lg'>
                            Passionate about creating beautiful and functional web experiences. 
                            With over 7 years of experience in frontend development, I specialize in 
                            building responsive, user-friendly interfaces using modern technologies.
                        </p>

                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='inline-block'
                        >
                            <Link 
                                href="/resume/dharmendra_resume.pdf" 
                                target='_blank' 
                                className='px-6 py-3 bg-gradient-to-r from-[#1f436e] to-blue-600 text-white rounded-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300'
                            >
                                Download CV 
                                <span className='animate-bounce' dangerouslySetInnerHTML={{__html: iconsSvg.downloadIcon}}/>
                            </Link>
                        </motion.div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                            {[
                                { icon: iconsSvg.rightupIcon, text: 'Logo Design' },
                                { icon: iconsSvg.rightupIcon, text: 'Branding Identity' },
                                { icon: iconsSvg.rightupIcon, text: 'Web Design' },
                                { icon: iconsSvg.rightupIcon, text: 'Social Marketing' },
                                { icon: iconsSvg.rightupIcon, text: 'Digital Marketing' },
                                { icon: iconsSvg.rightupIcon, text: 'Product Design' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300'
                                >
                                    <span className='w-6 h-6 flex items-center justify-center text-[#1f436e]'>
                                        <span dangerouslySetInnerHTML={{__html: item.icon}}/>
                                    </span>
                                    <span className='text-gray-700'>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
