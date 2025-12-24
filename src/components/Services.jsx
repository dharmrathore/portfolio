'use client';

import { iconsSvg } from '@/app/utils/Iconsvg';
import { motion } from 'framer-motion';
import React from 'react';

const services = [
    {
        id: 1,
        icon: iconsSvg.brandIcon,
        title: "Branding Design",
        description: "Create compelling brand identities that resonate with your target audience and stand out in the competitive market. From logo design to complete brand guidelines.",
        color: "from-blue-400 to-indigo-600",
        features: ["Logo Design", "Brand Identity", "Style Guides"]
    },
    {
        id: 2,
        icon: iconsSvg.websiteIcon,
        title: "Responsive Web Design",
        description: "Develop fully responsive websites that provide seamless experiences across all devices and screen sizes. Mobile-first approach for optimal performance.",
        color: "from-emerald-400 to-teal-600",
        features: ["Mobile-First", "Cross-Browser", "Performance"]
    },
    {
        id: 3,
        icon: iconsSvg.applicationIcon,
        title: "Innovative App Design",
        description: "Design intuitive and innovative applications that solve real-world problems with modern UI/UX principles. User-centered design approach.",
        color: "from-violet-400 to-purple-600",
        features: ["UI/UX Design", "Prototyping", "User Research"]
    },
    {
        id: 4,
        icon: iconsSvg.developerIcon,
        title: "Web Development",
        description: "Build robust and scalable web applications using cutting-edge technologies and best practices. From concept to deployment.",
        color: "from-rose-400 to-red-600",
        features: ["React/Next.js", "Full-Stack", "API Integration"]
    },
    {
        id: 5,
        icon: iconsSvg.strategyIcon,
        title: "Product Strategy",
        description: "Develop comprehensive product strategies that align with business goals and user needs. Data-driven decision making for success.",
        color: "from-amber-400 to-orange-600",
        features: ["Strategy Planning", "Market Research", "Roadmap"]
    },
    {
        id: 6,
        icon: iconsSvg.seoIcon,
        title: "SEO Optimization",
        description: "Optimize websites for search engines to improve visibility and drive organic traffic. Technical SEO and content optimization.",
        color: "from-cyan-400 to-blue-600",
        features: ["Technical SEO", "Content Strategy", "Analytics"]
    }
];

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className='w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden' id='services'>
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
                        WHAT I OFFER
                    </motion.span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-[#1f436e] via-blue-600 to-violet-600 bg-clip-text text-transparent'>
                            Professional Services
                        </span>
                    </h2>
                    <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-6'>
                        Comprehensive solutions to transform your digital presence and achieve your business goals
                    </p>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='h-1 w-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full'></div>
                        <div className='h-1 w-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full'></div>
                        <div className='h-1 w-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className='group relative'
                        >
                            {/* Card */}
                            <div className='relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden'>
                                {/* Gradient overlay on hover */}
                                <div 
                                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></div>

                                {/* Decorative corner element */}
                                <div 
                                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}
                                ></div>

                                {/* Content */}
                                <div className='relative z-10'>
                                    {/* Icon Container */}
                                    <div className='mb-6 relative'>
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                                        >
                                            <span className='relative z-10 w-full h-full flex items-center justify-center' dangerouslySetInnerHTML={{ __html: service.icon }} />
                                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}></div>
                                        </motion.div>
                                        
                                        {/* Decorative circle */}
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} opacity-20`}
                                        ></motion.div>
                                    </div>

                                    {/* Title */}
                                    <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-[#1f436e] transition-colors duration-300'>
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className='text-gray-600 leading-relaxed mb-6 text-sm'>
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    {service.features && (
                                        <div className='mb-6'>
                                            <ul className='space-y-2'>
                                                {service.features.map((feature, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        viewport={{ once: true }}
                                                        className='flex items-center gap-2 text-sm text-gray-600'
                                                    >
                                                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></span>
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Learn More Button */}
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className='mt-6'
                                    >
                                        <button className='group/btn flex items-center text-[#1f436e] font-semibold hover:text-blue-600 transition-colors duration-300'>
                                            <span className='mr-2'>Learn More</span>
                                            <svg 
                                                className='w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-2' 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Bottom border accent */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className='mt-16 text-center'
                >
                    <div className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-violet-50 rounded-full border border-blue-100 shadow-lg'>
                        <span className='text-gray-700 font-medium'>
                            Ready to start your project?
                        </span>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='px-6 py-2 bg-gradient-to-r from-[#1f436e] to-blue-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300'
                        >
                            Get in Touch
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
