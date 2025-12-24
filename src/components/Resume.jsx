'use client';

import { iconsSvg } from '@/app/utils/Iconsvg';
import React from 'react';
import { motion } from 'framer-motion';

const resumeweb = [
    {
        id: '1',
        years: '2019 - Present',
        title: 'Senior UI Developer',
        company: 'Appy Pie',
        description: 'Leading UI development initiatives and mentoring junior developers',
        location: 'Remote / India',
        achievements: ['Built scalable React applications', 'Improved performance by 40%', 'Led team of 5 developers']
    },
    {
        id: '2',
        years: '2017 - 2019',
        title: 'Junior UI Developer',
        company: 'Olive e-Business Pvt. Ltd',
        description: 'Developed responsive web applications and collaborated with cross-functional teams',
        location: 'India',
        achievements: ['Created 20+ responsive websites', 'Implemented modern UI/UX designs']
    },
    {
        id: '3',
        years: '2016 - 2017',
        title: 'UI Developer',
        company: 'IDC Technologies Solutions India Pvt. Ltd.',
        description: 'Designed and developed user interfaces for enterprise applications',
        location: 'India',
        achievements: ['Delivered 15+ client projects', 'Enhanced user experience']
    },
];

const resumeinfo = [
    {
        id: '1',
        years: '2010 - 2013',
        title: 'Bachelor Degree',
        company: 'AmarDeep College Firozabad U.P',
        description: 'Completed graduation with focus on computer science and web technologies',
        type: 'Education'
    },
    {
        id: '2',
        years: '2007 - 2009',
        title: 'Higher Secondary Education',
        company: 'Gyan College Firozabad U.P',
        description: 'Completed higher secondary education with excellent academic performance',
        type: 'Education'
    },
    {
        id: '3',
        years: '2015 - 2016',
        title: 'UI/UX Design Certification',
        company: 'Tech Altum Web Designing Training Institute',
        description: 'Specialized training in modern UI/UX design principles and practices',
        type: 'Certification'
    }
];

const Resume = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className='w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden' id='resume'>
            {/* Background decorative elements */}
            <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-violet-200/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/10 to-blue-200/10 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto px-4 relative z-10'>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-violet-100 text-[#1f436e] rounded-full text-sm font-semibold mb-4'
                    >
                        RESUME & EXPERIENCE
                    </motion.span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-[#1f436e] via-blue-600 to-violet-600 bg-clip-text text-transparent'>
                            Professional Journey
                        </span>
                    </h2>
                    <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-6'>
                        Years of experience building exceptional digital experiences and leading successful projects
                    </p>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='h-1 w-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full'></div>
                        <div className='h-1 w-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full'></div>
                        <div className='h-1 w-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
                    </div>
                </motion.div>

                {/* Resume Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Experience Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='space-y-6'
                    >
                        <div className='mb-8'>
                            <h3 className='text-2xl md:text-3xl font-bold text-[#1f436e] mb-2 flex items-center gap-3'>
                                <span className='w-10 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full'></span>
                                Work Experience
                            </h3>
                            <p className='text-gray-600'>Professional growth and achievements</p>
                        </div>

                        {resumeweb.map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className='group relative'
                            >
                                <div className='relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden'>
                                    {/* Timeline line */}
                                    <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-violet-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300'></div>

                                    {/* Icon */}
                                    <div className='flex items-start gap-4 mb-4'>
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className='relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300'
                                        >
                                            <span className='text-white' dangerouslySetInnerHTML={{__html: iconsSvg.resumeIcon}}/>
                                            <div className='absolute -inset-1 bg-gradient-to-br from-blue-400 to-violet-400 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300'></div>
                                        </motion.div>

                                        <div className='flex-1'>
                                            <div className='flex items-start justify-between gap-4 mb-2'>
                                                <div>
                                                    <h4 className='text-xl font-bold text-gray-800 group-hover:text-[#1f436e] transition-colors duration-300 mb-1'>
                                                        {item.title}
                                                    </h4>
                                                    <p className='text-blue-600 font-semibold'>{item.company}</p>
                                                </div>
                                                <span className='px-3 py-1 bg-gradient-to-r from-blue-100 to-violet-100 text-[#1f436e] rounded-full text-xs font-semibold whitespace-nowrap'>
                                                    {item.years}
                                                </span>
                                            </div>
                                            <p className='text-sm text-gray-500 mb-2'>{item.location}</p>
                                            <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
                                            
                                            {/* Achievements */}
                                            {item.achievements && (
                                                <div className='mt-4 pt-4 border-t border-gray-100'>
                                                    <p className='text-xs font-semibold text-gray-500 uppercase mb-2'>Key Achievements</p>
                                                    <ul className='space-y-1'>
                                                        {item.achievements.map((achievement, idx) => (
                                                            <li key={idx} className='flex items-center gap-2 text-sm text-gray-600'>
                                                                <span className='w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full'></span>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Decorative element */}
                                    <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-violet-100/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Education & Certification Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='space-y-6'
                    >
                        <div className='mb-8'>
                            <h3 className='text-2xl md:text-3xl font-bold text-[#1f436e] mb-2 flex items-center gap-3'>
                                <span className='w-10 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full'></span>
                                Education & Training
                            </h3>
                            <p className='text-gray-600'>Academic background and professional development</p>
                        </div>

                        {resumeinfo.map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className='group relative'
                            >
                                <div className='relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden'>
                                    {/* Timeline line */}
                                    <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-pink-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300'></div>

                                    {/* Icon */}
                                    <div className='flex items-start gap-4 mb-4'>
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                                                item.type === 'Certification' 
                                                    ? 'bg-gradient-to-br from-violet-500 to-pink-500' 
                                                    : 'bg-gradient-to-br from-emerald-500 to-teal-500'
                                            }`}
                                        >
                                            <span className='text-white' dangerouslySetInnerHTML={{__html: iconsSvg.resumeIcon}}/>
                                            <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300 ${
                                                item.type === 'Certification' 
                                                    ? 'bg-gradient-to-br from-violet-400 to-pink-400' 
                                                    : 'bg-gradient-to-br from-emerald-400 to-teal-400'
                                            }`}></div>
                                        </motion.div>

                                        <div className='flex-1'>
                                            <div className='flex items-start justify-between gap-4 mb-2'>
                                                <div>
                                                    <h4 className='text-xl font-bold text-gray-800 group-hover:text-[#1f436e] transition-colors duration-300 mb-1'>
                                                        {item.title}
                                                    </h4>
                                                    <p className='text-violet-600 font-semibold'>{item.company}</p>
                                                </div>
                                                <span className='px-3 py-1 bg-gradient-to-r from-violet-100 to-pink-100 text-violet-700 rounded-full text-xs font-semibold whitespace-nowrap'>
                                                    {item.years}
                                                </span>
                                            </div>
                                            {item.type && (
                                                <span className='inline-block px-2 py-1 bg-violet-50 text-violet-600 rounded text-xs font-semibold mb-2'>
                                                    {item.type}
                                                </span>
                                            )}
                                            <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Decorative element */}
                                    <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100/20 to-pink-100/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Summary Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className='mt-16 bg-gradient-to-r from-blue-50 via-violet-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-blue-100'
                >
                    <div className='text-center max-w-3xl mx-auto'>
                        <h3 className='text-2xl md:text-3xl font-bold text-[#1f436e] mb-4'>
                            Over 8 Years of Excellence
                        </h3>
                        <p className='text-gray-600 text-lg leading-relaxed'>
                            Dedicated to creating exceptional user experiences through innovative design and cutting-edge technology. 
                            Continuously learning and adapting to deliver the best solutions for clients and users.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
