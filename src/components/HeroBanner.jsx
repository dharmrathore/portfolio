'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroBanner = () => {
    const roles = [
        'Sr. Frontend Developer',
        'React Specialist',
        'UI/UX Designer',
        'Web Performance Expert'
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section 
            className='w-full min-h-screen relative flex items-center justify-center overflow-hidden' 
            id='home'
        >
            {/* Background Image with Overlay */}
            <div 
                className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: "url('images/bg-hero.jpg')" }}
            >
                <div className='absolute inset-0 bg-gradient-to-br from-[#1f436e]/90 via-[#1f436e]/80 to-violet-900/90'></div>
            </div>

            {/* Animated Background Elements */}
            <div className='absolute inset-0 z-[1] overflow-hidden'>
                <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl'></div>
            </div>

            {/* Content */}
            <div className='max-w-7xl mx-auto px-4 relative z-[2] py-20'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='text-center'
                >
                    {/* Welcome Badge */}
                    <motion.div
                        variants={itemVariants}
                        className='inline-block mb-6'
                    >
                        <span className='inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-cyan-300 text-sm md:text-base font-semibold border border-cyan-400/20 shadow-lg'>
                            <span className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'></span>
                            Welcome to my Portfolio
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight'
                    >
                        <span className='text-white block mb-2'>
                            Hi, I'm
                        </span>
                        <span className='block'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 animate-gradient'>
                                Dharmendra
                            </span>
                            <span className='text-white ml-3'>Rathore</span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className='text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed'
                    >
                        Crafting <span className='text-cyan-300 font-semibold'>beautiful</span> and{' '}
                        <span className='text-violet-300 font-semibold'>functional</span> web experiences 
                        with modern technologies and creative solutions
                    </motion.p>

                    {/* Roles Badge */}
                    <motion.div
                        variants={itemVariants}
                        className='mb-12'
                    >
                        <div className='inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 md:px-10 py-4 md:py-6 border border-white/20 shadow-2xl'>
                            {roles.map((role, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    className='flex items-center gap-3 group'
                                >
                                    <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full group-hover:scale-150 transition-transform duration-300'></div>
                                    <span className='text-sm md:text-base font-medium text-white group-hover:text-cyan-300 transition-colors duration-300'>
                                        {role}
                                    </span>
                                    {index < roles.length - 1 && (
                                        <div className='hidden md:block w-px h-6 bg-white/20'></div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6'
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className='group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-xl text-white font-semibold text-base md:text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden'
                        >
                            <span className='relative z-10 flex items-center gap-2'>
                                Get in Touch
                                <svg className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className='absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </motion.a>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className='group px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-md rounded-xl text-white font-semibold text-base md:text-lg border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 shadow-xl flex items-center gap-2'
                        >
                            View Projects
                            <svg className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block'
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className='flex flex-col items-center gap-2 text-white/60'
                        >
                            <span className='text-sm'>Scroll Down</span>
                            <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBanner;
