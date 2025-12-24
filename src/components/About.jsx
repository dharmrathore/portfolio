'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { iconsSvg } from '@/app/utils/Iconsvg'
import { motion } from 'framer-motion'

const About = () => {
    const skills = [
        { icon: iconsSvg.rightupIcon, text: 'Logo Design', color: 'from-blue-400 to-cyan-400' },
        { icon: iconsSvg.rightupIcon, text: 'Branding Identity', color: 'from-purple-400 to-pink-400' },
        { icon: iconsSvg.rightupIcon, text: 'Web Design', color: 'from-green-400 to-emerald-400' },
        { icon: iconsSvg.rightupIcon, text: 'Social Marketing', color: 'from-orange-400 to-red-400' },
        { icon: iconsSvg.rightupIcon, text: 'Digital Marketing', color: 'from-indigo-400 to-blue-400' },
        { icon: iconsSvg.rightupIcon, text: 'Product Design', color: 'from-violet-400 to-purple-400' }
    ];

    const stats = [
        { number: '8+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' }
    ];

    return (
        <section className='w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden' id='about'>
            {/* Background decorative elements */}
            <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-violet-200/20 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto px-4 relative z-10'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-violet-100 text-[#1f436e] rounded-full text-sm font-semibold mb-4'
                    >
                        ABOUT ME
                    </motion.span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                        <span className='bg-gradient-to-r from-[#1f436e] via-blue-600 to-violet-600 bg-clip-text text-transparent'>
                            Crafting Digital
                        </span>
                        <br />
                        <span className='text-gray-800'>Experiences</span>
                    </h2>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='h-1 w-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full'></div>
                        <div className='h-1 w-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full'></div>
                        <div className='h-1 w-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
                    </div>
                </motion.div>

                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
                    {/* Left Side - Image & Profile */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='w-full lg:w-5/12'
                    >
                        <div className='relative group'>
                            {/* Decorative background */}
                            <div className='absolute -inset-4 bg-gradient-to-r from-[#1f436e] via-blue-600 to-violet-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500'></div>
                            
                            {/* Image container */}
                            <div className='relative rounded-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500'>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10'></div>
                                <Image 
                                    src="/images/rathore.jpg" 
                                    alt='Dharmendra Rathore' 
                                    width={640} 
                                    height={840}
                                    className='relative w-full h-auto transform group-hover:scale-110 transition-transform duration-700'
                                />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-6 py-4 border border-gray-100'
                            >
                                <div className='flex items-center gap-3'>
                                    <div className='relative'>
                                        <div className='w-3 h-3 bg-green-500 rounded-full animate-ping absolute'></div>
                                        <div className='w-3 h-3 bg-green-500 rounded-full relative'></div>
                                    </div>
                                    <div>
                                        <p className='text-sm font-semibold text-gray-800'>Available for Work</p>
                                        <p className='text-xs text-gray-500'>Open to opportunities</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className='flex justify-center gap-4 mt-12'
                        >
                            {[
                                { icon: iconsSvg.facebookIcon, href: "#", color: "from-blue-500 to-blue-600" },
                                { icon: iconsSvg.linkedinIcon, href: "https://www.linkedin.com/in/dharmendra-rathore-0168aa105/", color: "from-indigo-500 to-indigo-600" },
                                { icon: iconsSvg.webIcon, href: "https://visakwik.com/", color: "from-violet-500 to-violet-600" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target={social.href !== "#" ? '_blank' : undefined}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                                >
                                    <span className='relative z-10' dangerouslySetInnerHTML={{__html: social.icon}} />
                                    <div className='absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300'></div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='w-full lg:w-7/12'
                    >
                        {/* Introduction */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className='mb-8'
                        >
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight'>
                                <span className='text-gray-800'>Hello, I'm </span>
                                <span className='bg-gradient-to-r from-[#1f436e] to-blue-600 bg-clip-text text-transparent'>
                                    Dharmendra Rathore
                                </span>
                                <br />
                                <span className='text-gray-700'>
                                    Senior UI Developer
                                </span>
                                <br />
                                <span className='text-gray-600 text-2xl md:text-3xl'>
                                    Based in India 🇮🇳
                                </span>
                            </h2>
                            
                            <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                                Passionate about creating <span className='font-semibold text-[#1f436e]'>beautiful and functional</span> web experiences. 
                                With over <span className='font-semibold text-blue-600'>8+ years</span> of experience in frontend development, 
                                I specialize in building <span className='font-semibold text-violet-600'>responsive, user-friendly interfaces</span> using modern technologies.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className='grid grid-cols-3 gap-4 mb-10'
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className='bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300'
                                >
                                    <div className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1f436e] to-blue-600 bg-clip-text text-transparent mb-1'>
                                        {stat.number}
                                    </div>
                                    <div className='text-xs md:text-sm text-gray-600'>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className='mb-10'
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='inline-block'
                            >
                                <Link 
                                    href="/resume/Dharmendra_Rathore_Senior_UI_Developer_8_Years.pdf" 
                                    target='_blank' 
                                    className='group relative px-8 py-4 bg-gradient-to-r from-[#1f436e] via-blue-600 to-violet-600 text-white rounded-xl inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden'
                                >
                                    <span className='relative z-10 font-semibold'>Download CV</span>
                                    <span className='relative z-10 transform group-hover:translate-y-1 transition-transform duration-300' dangerouslySetInnerHTML={{__html: iconsSvg.downloadIcon}}/>
                                    <div className='absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Skills Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className='grid grid-cols-2 md:grid-cols-3 gap-4'
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className='group relative p-4 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden'
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                    <div className='relative z-10 flex items-center gap-3'>
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                            <span className='w-5 h-5' dangerouslySetInnerHTML={{__html: skill.icon}}/>
                                        </div>
                                        <span className='text-gray-700 font-medium group-hover:text-[#1f436e] transition-colors duration-300'>{skill.text}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
