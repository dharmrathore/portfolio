"use client";

import { iconsSvg } from '@/app/utils/Iconsvg';
import React, { useState } from "react";
import { motion } from 'framer-motion';

const Footer = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    const handleInput = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ success: false, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            setSubmitStatus({ success: true, message: 'Message sent successfully! 🎉' });
            setState({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setSubmitStatus({ success: false, message: error.message || 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: iconsSvg.phoneIcon,
            title: 'Phone Number',
            content: '+91 7531836471',
            link: 'tel:+917531836471',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: iconsSvg.emailIcon,
            title: 'Email Address',
            content: 'rathore.dharm90@gmail.com',
            link: 'mailto:rathore.dharm90@gmail.com',
            color: 'from-violet-500 to-pink-500'
        }
    ];

    const socialLinks = [
        { icon: iconsSvg.facebookIcon, href: "#", label: "Facebook" },
        { icon: iconsSvg.linkedinIcon, href: "https://www.linkedin.com/in/dharmendra-rathore-0168aa105/", label: "LinkedIn" },
        { icon: iconsSvg.webIcon, href: "https://visakwik.com/", label: "Website" }
    ];

    return (
        <footer className='w-full py-20 bg-gradient-to-br from-gray-900 via-[#1f436e] to-gray-900 relative overflow-hidden' id='contact'>
            {/* Background decorative elements */}
            <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl'></div>
            
            {/* Animated grid pattern */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute inset-0' style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

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
                        className='inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-400/20'
                    >
                        GET IN TOUCH
                    </motion.span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white'>
                        Let's Work Together
                    </h2>
                    <p className='text-gray-300 text-lg max-w-2xl mx-auto mb-6'>
                        Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                    </p>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'></div>
                        <div className='h-1 w-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full'></div>
                        <div className='h-1 w-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full'></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='space-y-6'
                    >
                        <div className='mb-8'>
                            <h3 className='text-2xl font-bold text-white mb-2'>Contact Information</h3>
                            <p className='text-gray-400'>Reach out through any of these channels</p>
                        </div>

                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, x: 5 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='group block bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300'
                            >
                                <div className='flex items-start gap-4'>
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                        <span className='text-white text-xl' dangerouslySetInnerHTML={{__html: info.icon}} />
                                    </div>
                                    <div className='flex-1'>
                                        <h4 className='text-white font-semibold mb-1'>{info.title}</h4>
                                        <p className='text-gray-300 text-sm group-hover:text-cyan-300 transition-colors duration-300'>{info.content}</p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* Social Links */}
                        <div className='pt-6'>
                            <h4 className='text-white font-semibold mb-4'>Follow Me</h4>
                            <div className='flex gap-4'>
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target={social.href !== "#" ? '_blank' : undefined}
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300'
                                        aria-label={social.label}
                                    >
                                        <span dangerouslySetInnerHTML={{__html: social.icon}} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='lg:col-span-2'
                    >
                        <div className='bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10 shadow-2xl'>
                            <h3 className='text-2xl font-bold text-white mb-6'>Send a Message</h3>
                            
                            <form onSubmit={handleSubmitForm} className='space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <label className='block text-white font-medium mb-2' htmlFor="name">
                                            Your Name <span className='text-red-400'>*</span>
                                        </label>
                                        <input 
                                            onChange={handleInput} 
                                            value={state.name} 
                                            type="text" 
                                            name="name" 
                                            className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300' 
                                            id="name" 
                                            placeholder='Dharmendra Rathore'  
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <label className='block text-white font-medium mb-2' htmlFor="email">
                                            Your Email <span className='text-red-400'>*</span>
                                        </label>
                                        <input 
                                            onChange={handleInput} 
                                            value={state.email} 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300' 
                                            placeholder='rathore.dharm90@gmail.com' 
                                            required
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <label className='block text-white font-medium mb-2' htmlFor="message">
                                        Your Message <span className='text-red-400'>*</span>
                                    </label>
                                    <textarea 
                                        onChange={handleInput} 
                                        value={state.message} 
                                        name="message" 
                                        id="message" 
                                        rows={6} 
                                        className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none' 
                                        placeholder='Tell me about your project...' 
                                        required
                                    ></textarea>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className='flex items-center justify-between flex-wrap gap-4'
                                >
                                    <motion.button
                                        type="submit" 
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ${
                                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </>
                                        )}
                                    </motion.button>

                                    {submitStatus.message && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`px-4 py-2 rounded-lg ${
                                                submitStatus.success 
                                                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                                                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                                            }`}
                                        >
                                            {submitStatus.message}
                                        </motion.div>
                                    )}
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className='border-t border-white/10 pt-8 mt-12'
                >
                    <div className='text-center'>
                        <p className='text-gray-400 text-sm'>
                            &copy; {new Date().getFullYear()} Designed and Developed by{' '}
                            <span className='text-cyan-300 font-semibold'>Dharmendra Rathore</span>
                            {' '}All Rights Reserved.
                        </p>
                        <div className='flex items-center justify-center gap-2 mt-4'>
                            <span className='text-gray-500 text-xs'>Made with</span>
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className='text-red-500'
                            >
                                ❤️
                            </motion.span>
                            <span className='text-gray-500 text-xs'>in India</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
