'use client';
import { iconsSvg } from '@/app/utils/Iconsvg';
import { motion } from 'framer-motion';
import React from 'react';
// import 'animate.css/animate.min.css';

const services = [
    {
        id: 1,
        icon: iconsSvg.brandIcon,
        title: "Branding Design",
        description: "Create compelling brand identities that resonate with your target audience and stand out in the market.",
        color: "from-blue-400 to-indigo-600"
    },
    {
        id: 2,
        icon: iconsSvg.websiteIcon,
        title: "Web Responsive Mobile",
        description: "Develop fully responsive websites that provide seamless experiences across all devices and screen sizes.",
        color: "from-emerald-400 to-teal-600"
    },
    {
        id: 3,
        icon: iconsSvg.applicationIcon,
        title: "Innovative Application Design",
        description: "Design intuitive and innovative applications that solve real-world problems with modern UI/UX principles.",
        color: "from-violet-400 to-purple-600"
    },
    {
        id: 4,
        icon: iconsSvg.developerIcon,
        title: "Web Development",
        description: "Build robust and scalable web applications using cutting-edge technologies and best practices.",
        color: "from-rose-400 to-red-600"
    },
    {
        id: 5,
        icon: iconsSvg.strategyIcon,
        title: "Product Strategy",
        description: "Develop comprehensive product strategies that align with business goals and user needs.",
        color: "from-amber-400 to-orange-600"
    },
    {
        id: 6,
        icon: iconsSvg.seoIcon,
        title: "SEO Optimization",
        description: "Optimize websites for search engines to improve visibility and drive organic traffic.",
        color: "from-cyan-400 to-blue-600"
    }
];

const Services = () => {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         import('wowjs').then((WOW) => {
    //             const wow = new WOW.WOW();
    //             wow.init();
    //         });
    //     }
    // }, []);

    return (
        <section className='w-full py-20 bg-gray-50' id='services'>
            <div className='max-w-7xl mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <span className='text-sm font-medium text-gray-600 uppercase tracking-wider'>SERVICES</span>
                    <h2 className='mt-4 text-3xl md:text-4xl font-bold text-[#1f436e]'>
                        Quality Services
                    </h2>
                    <div className='mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full'></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className='group relative'
                        >
                           
                            <div className='relative z-[1] h-full bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl'>
                               
                                <div className='mb-8 relative'>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110`}>
                                        <span className='w-full h-full flex items-center justify-center' dangerouslySetInnerHTML={{ __html: service.icon }} />
                                    </div>
                                  
                                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} opacity-20 transition-all duration-300 group-hover:scale-150`}></div>
                                </div>

                               
                                <h3 className='text-xl font-bold text-gray-800 mb-4 group-hover:text-[#1f436e] transition-colors duration-300'>
                                    {service.title}
                                </h3>
                                <p className='text-gray-600 leading-relaxed'>
                                    {service.description}
                                </p>

                                <div className='mt-6'>
                                    <button className='flex items-center text-[#1f436e] font-medium group/btn'>
                                        <span className='mr-2'>Learn More</span>
                                        <svg 
                                            className='w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1' 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transform transition-all duration-300 group-hover:scale-105`}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
