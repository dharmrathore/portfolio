'use client';

import React, { useEffect, useState } from 'react';
import { iconsSvg } from '@/app/utils/Iconsvg';
import { motion } from 'framer-motion';

// Redux icon SVG
const reduxIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.923 15.245c-.51 0-.884-.142-1.174-.426-.29-.285-.435-.66-.435-1.174 0-.513.145-.89.435-1.175.29-.284.664-.426 1.174-.426.51 0 .884.142 1.174.426.29.284.435.662.435 1.175 0 .514-.145.89-.435 1.174-.29.284-.664.426-1.174.426zm-2.27-3.21c-.29-.284-.664-.426-1.174-.426-.51 0-.884.142-1.174.426-.29.285-.435.662-.435 1.175 0 .514.145.89.435 1.174.29.284.664.426 1.174.426.51 0 .884-.142 1.174-.426.29-.284.435-.66.435-1.174 0-.513-.145-.89-.435-1.175zm-4.35-2.11c0 .514-.145.89-.435 1.174-.29.284-.664.426-1.174.426-.51 0-.884-.142-1.174-.426-.29-.284-.435-.66-.435-1.174 0-.513.145-.89.435-1.175.29-.284.664-.426 1.174-.426.51 0 .884.142 1.174.426.29.284.435.662.435 1.175zm2.27-3.21c.29.284.435.662.435 1.175 0 .514-.145.89-.435 1.174-.29.284-.664.426-1.174.426-.51 0-.884-.142-1.174-.426-.29-.284-.435-.66-.435-1.174 0-.513.145-.89.435-1.175.29-.284.664-.426 1.174-.426.51 0 .884.142 1.174.426zm4.35-2.11c.51 0 .884.142 1.174.426.29.284.435.662.435 1.175 0 .514-.145.89-.435 1.174-.29.284-.664.426-1.174.426-.51 0-.884-.142-1.174-.426-.29-.284-.435-.66-.435-1.174 0-.513.145-.89.435-1.175.29-.284.664-.426 1.174-.426zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>`;

const bemIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;

const figmaIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.375 1.93 4.375 4.405 0 2.507-1.899 4.576-4.375 4.576zM12.034 7.51h3.564c1.666 0 3.015-1.312 3.015-2.936 0-1.624-1.349-2.935-3.015-2.935h-3.564v5.871zm0 1.471H8.15c-2.476 0-4.375-1.97-4.375-4.446 0-2.475 1.899-4.405 4.375-4.405h3.884v8.851zm-3.888-5.871c-1.665 0-3.014 1.312-3.014 2.935 0 1.623 1.349 2.936 3.014 2.936h3.888V3.111H8.146zm0 10.261H8.15c-2.476 0-4.375-1.969-4.375-4.445 0-2.475 1.899-4.405 4.375-4.405h3.884v8.85H8.146zm-3.884-5.87c-1.665 0-3.014 1.312-3.014 2.936 0 1.623 1.349 2.935 3.014 2.935h3.888v-5.871H4.262zm8.772 5.871h-3.565c-1.666 0-3.015-1.313-3.015-2.936 0-1.623 1.349-2.935 3.015-2.935h3.565v5.871zm-3.565-5.871c-1.665 0-3.014 1.312-3.014 2.935 0 1.624 1.349 2.936 3.014 2.936h3.565V8.981h-3.565z"/></svg>`;

const adobeXdIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.916 3.314c.395-.01.774.15 1.053.428.275.275.428.65.428 1.044v14.428c0 .395-.153.77-.428 1.044a1.48 1.48 0 0 1-1.053.428H4.084a1.48 1.48 0 0 1-1.053-.428A1.48 1.48 0 0 1 2.603 19.22V4.786c0-.395.153-.77.428-1.044a1.48 1.48 0 0 1 1.053-.428h15.832zm-3.688 4.32l-3.24 4.512 3.24 4.512h-2.16l-2.112-3.024-2.112 3.024H7.344l3.24-4.512-3.24-4.512h2.16l2.112 3.024 2.112-3.024h2.16z"/></svg>`;

const photoshopIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.966 22.624l-1.69-4.281H8.122v4.281H5.116V1.719h8.85c2.508 0 4.05.135 4.632.405a3.45 3.45 0 0 1 1.512 1.122c.36.345.622.78.783 1.29.165.51.247 1.125.247 1.845v2.25c0 .72-.135 1.35-.405 1.89a3.6 3.6 0 0 1-1.125 1.35c-.48.345-1.05.6-1.71.765.84.195 1.5.51 1.98.945.48.435.84.96 1.08 1.575.24.615.36 1.35.36 2.205v2.58c0 .48.03.915.09 1.305.06.39.15.72.27.99.12.27.27.48.45.63.18.15.39.27.63.36.24.09.51.135.81.135V22.5c-.48.03-.93 0-1.35-.09-.42-.09-.78-.255-1.08-.495-.3-.24-.525-.54-.675-.9-.15-.36-.24-.78-.27-1.26l-.015-.12h-2.58l-.09.18c-.12.33-.3.615-.54.855-.24.24-.54.42-.9.54-.36.12-.78.18-1.26.18-.48 0-.93-.06-1.35-.18-.42-.12-.78-.3-1.08-.54-.3-.24-.525-.54-.675-.9-.15-.36-.225-.78-.225-1.26v-2.25c0-.48.075-.9.225-1.26.15-.36.375-.66.675-.9.3-.24.66-.42 1.08-.54.42-.12.87-.18 1.35-.18h2.25v-.855h-2.25c-.48 0-.93.06-1.35.18-.42.12-.78.3-1.08.54-.3.24-.525.54-.675.9-.15.36-.225.78-.225 1.26v2.25c0 .48.075.9.225 1.26.15.36.375.66.675.9.3.24.66.42 1.08.54.42.12.87.18 1.35.18h2.25v-1.71h-2.25c-.48 0-.93-.06-1.35-.18-.42-.12-.78-.3-1.08-.54-.3-.24-.525-.54-.675-.9-.15-.36-.225-.78-.225-1.26V7.344c0-.48.075-.9.225-1.26.15-.36.375-.66.675-.9.3-.24.66-.42 1.08-.54.42-.12.87-.18 1.35-.18h6.39v1.71h-6.39c-.48 0-.93.06-1.35.18-.42.12-.78.3-1.08.54-.3.24-.525.54-.675.9-.15.36-.225.78-.225 1.26v2.25c0 .48.075.9.225 1.26.15.36.375.66.675.9.3.24.66.42 1.08.54.42.12.87.18 1.35.18h2.25v1.71h-2.25zm-2.25-7.344v2.25c0 .48.075.9.225 1.26.15.36.375.66.675.9.3.24.66.42 1.08.54.42.12.87.18 1.35.18h2.25V8.124h-2.25c-.48 0-.93-.06-1.35-.18-.42-.12-.78-.3-1.08-.54-.3-.24-.525-.54-.675-.9-.15-.36-.225-.78-.225-1.26V5.874c0-.48.075-.9.225-1.26.15-.36.375-.66.675-.9.3-.24.66-.42 1.08-.54.42-.12.87-.18 1.35-.18h2.25v1.71h-2.25c-.48 0-.93.06-1.35.18-.42.12-.78.3-1.08.54-.3.24-.525.54-.675.9-.15.36-.225.78-.225 1.26z"/></svg>`;

const skills = [
    {
        id: 1,
        name: 'HTML5',
        level: 100,
        icon: iconsSvg.htmlIcon,
        color: '#E44D26',
        bgColor: '#FFF4F2',
        description: 'Semantic markup and modern HTML5 features'
    },
    {
        id: 2,
        name: 'CSS3',
        level: 100,
        icon: iconsSvg.cssIcon,
        color: '#264DE4',
        bgColor: '#F2F4FF',
        description: 'Advanced styling and animations'
    },
    {
        id: 3,
        name: 'JavaScript',
        level: 85,
        icon: iconsSvg.jsIcon,
        color: '#F7DF1E',
        bgColor: '#FFFDF2',
        description: 'ES6+ and modern JavaScript patterns'
    },
    {
        id: 4,
        name: 'React.js',
        level: 80,
        icon: iconsSvg.reactIcon,
        color: '#61DAFB',
        bgColor: '#F2FCFF',
        description: 'Component-based UI development'
    },
    {
        id: 5,
        name: 'Redux.js',
        level: 75,
        icon: reduxIcon,
        color: '#764ABC',
        bgColor: '#F3E8FF',
        description: 'State management and predictable data flow'
    },
    {
        id: 6,
        name: 'Tailwind CSS',
        level: 85,
        icon: iconsSvg.tailwindIcon,
        color: '#38B2AC',
        bgColor: '#F2FFFD',
        description: 'Utility-first CSS framework'
    },
    {
        id: 7,
        name: 'Bootstrap',
        level: 100,
        icon: iconsSvg.bootstrapIcon,
        color: '#7952B3',
        bgColor: '#F7F2FF',
        description: 'Responsive design framework'
    },
    {
        id: 8,
        name: 'Git',
        level: 80,
        icon: iconsSvg.gitIcon,
        color: '#F05032',
        bgColor: '#FFF2F0',
        description: 'Version control and collaboration'
    },
    {
        id: 9,
        name: 'Jira',
        level: 75,
        icon: iconsSvg.jiraIcon,
        color: '#0052CC',
        bgColor: '#F2F6FF',
        description: 'Project management and tracking'
    },
    {
        id: 10,
        name: 'Angular.js',
        level: 70,
        icon: iconsSvg.angularIcon,
        color: '#DD0031',
        bgColor: '#FFF2F5',
        description: 'Full-featured framework'
    },
    {
        id: 11,
        name: 'BEM Methodology',
        level: 85,
        icon: bemIcon,
        color: '#FF6B6B',
        bgColor: '#FFF0F0',
        description: 'Block Element Modifier naming convention'
    },
    {
        id: 12,
        name: 'Figma',
        level: 80,
        icon: figmaIcon,
        color: '#F24E1E',
        bgColor: '#FFF4F0',
        description: 'Collaborative interface design tool'
    },
    {
        id: 13,
        name: 'Adobe XD',
        level: 75,
        icon: adobeXdIcon,
        color: '#FF61F6',
        bgColor: '#FFF0FC',
        description: 'User experience design software'
    },
    {
        id: 14,
        name: 'Photoshop',
        level: 80,
        icon: photoshopIcon,
        color: '#31A8FF',
        bgColor: '#F0F8FF',
        description: 'Image editing and graphic design'
    }
];

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('skills');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <section className='w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden' id='skills'>
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
                        TECHNICAL SKILLS
                    </motion.span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-[#1f436e] via-blue-600 to-violet-600 bg-clip-text text-transparent'>
                            Expertise & Technologies
                        </span>
                    </h2>
                    <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                        Mastery of modern web technologies and frameworks to build exceptional digital experiences
                    </p>
                    <div className='flex items-center justify-center gap-2 mt-6'>
                        <div className='h-1 w-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full'></div>
                        <div className='h-1 w-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full'></div>
                        <div className='h-1 w-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className='group relative'
                        >
                            {/* Card */}
                            <div className='relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden'>
                                {/* Gradient overlay on hover */}
                                <div 
                                    className='absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300'
                                    style={{ 
                                        background: `linear-gradient(135deg, ${skill.color} 0%, ${skill.bgColor} 100%)`
                                    }}
                                ></div>

                                {/* Content */}
                                <div className='relative z-10'>
                                    {/* Icon and Title */}
                                    <div className='flex items-center gap-4 mb-6'>
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className='w-16 h-16 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300'
                                            style={{ backgroundColor: skill.bgColor }}
                                        >
                                            <div
                                                className="w-10 h-10 [&>svg]:w-full [&>svg]:h-full"
                                                style={{ color: skill.color }}
                                                dangerouslySetInnerHTML={{ __html: skill.icon }}
                                            />
                                        </motion.div>
                                        <div>
                                            <h4 className='text-xl font-bold text-gray-800 group-hover:text-[#1f436e] transition-colors duration-300'>
                                                {skill.name}
                                            </h4>
                                            <p className='text-xs text-gray-500 mt-1'>{skill.description}</p>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className='space-y-3'>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                Proficiency
                                            </span>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-lg font-bold' style={{ color: skill.color }}>
                                                    {skill.level}%
                                                </span>
                                                {skill.level >= 90 && (
                                                    <span className='text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold'>
                                                        Expert
                                                    </span>
                                                )}
                                                {skill.level >= 75 && skill.level < 90 && (
                                                    <span className='text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-semibold'>
                                                        Advanced
                                                    </span>
                                                )}
                                                {skill.level < 75 && (
                                                    <span className='text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full font-semibold'>
                                                        Intermediate
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Progress Bar Container */}
                                        <div className='relative w-full h-3 bg-gray-100 rounded-full overflow-hidden'>
                                            {/* Animated Progress Bar */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ 
                                                    duration: 1.5, 
                                                    delay: index * 0.1,
                                                    ease: "easeOut"
                                                }}
                                                className='h-full rounded-full relative overflow-hidden'
                                                style={{ backgroundColor: skill.color }}
                                            >
                                                {/* Shimmer effect */}
                                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer'></div>
                                            </motion.div>

                                            {/* Progress indicator dots */}
                                            <div className='absolute inset-0 flex items-center justify-between px-1'>
                                                {[0, 25, 50, 75, 100].map((point) => (
                                                    <div
                                                        key={point}
                                                        className={`w-1 h-1 rounded-full ${
                                                            skill.level >= point ? 'bg-white' : 'bg-transparent'
                                                        } transition-all duration-300`}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Skill Level Indicator */}
                                        <div className='flex justify-between text-xs text-gray-400'>
                                            <span>Beginner</span>
                                            <span>Intermediate</span>
                                            <span>Advanced</span>
                                            <span>Expert</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative corner element */}
                                <div 
                                    className='absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-300'
                                    style={{ 
                                        background: `radial-gradient(circle at top right, ${skill.color}, transparent)`
                                    }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className='mt-16 text-center'
                >
                    <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-violet-50 rounded-full border border-blue-100'>
                        <span className='text-sm text-gray-600'>
                            Continuously learning and adapting to new technologies
                        </span>
                        <span className='text-2xl'>🚀</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 