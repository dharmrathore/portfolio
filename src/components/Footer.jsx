"use client";
import { iconsSvg } from '@/app/utils/Iconsvg'
import React, { useState } from "react";

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

            setSubmitStatus({ success: true, message: 'Message sent successfully!' });
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

    return (
        <>
            <footer className='w-full md:py-5 bg-gray-50' id='contact'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='text-center py-4 w-full md:mb-8'>
                        <h2 className='text-sm mb-2 md:mb-4 uppercase'>Contact</h2>
                        <h3 className='text-xl md:text-3xl font-semibold theme-color'>Get in Touch with Me!</h3>
                    </div>
                    <div className="flex flex-wrap md:flex-row gap-4 md:gap-0 justify-between h-full">
                        <div className="basis-full md:basis-1/3">
                            <ul className='p-4 md:p-10 bg-gray-100 rounded-lg flex flex-col gap-4 h-full justify-center border border-stone-200'>
                                <li className='flex items-baseline gap-3 mb-4 flex-col'>
                                    <span className='text-xl theme-color' dangerouslySetInnerHTML={{__html: iconsSvg.phoneIcon}} />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-base font-semibold'>Contact Number:</h3>
                                        <a href="tel:+91 7531836471" className='text-sm'>+91 7531836471</a>
                                    </div>
                                </li>
                                <li className='flex items-baseline gap-3 mb-4 flex-col'>
                                    <span className='text-xl theme-color' dangerouslySetInnerHTML={{__html: iconsSvg.emailIcon}} />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-base font-semibold'>Email Us:</h3>
                                        <a href='mailto:rathore.dharm90@gmail.com' className='text-sm'>rathore.dharm90@gmail.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-7/12">
                            <div className='bg-white border p-4 md:p-10 rounded-lg'>
                                <form onSubmit={handleSubmitForm}>
                                    <div className='flex flex-col md:flex-row w-full gap-4 md:gap-8 mb-4 md:mb-8'>
                                        <div className='block w-full md:w-6/12'>
                                            <label className='mb-2 inline-block text-sm md:text-base' htmlFor="name">Your Name</label>
                                            <input 
                                                onChange={handleInput} 
                                                value={state.name} 
                                                type="text" 
                                                name="name" 
                                                className='text-sm md:text-base w-full border p-3 rounded-lg theme-color' 
                                                id="name" 
                                                placeholder='Enter Your Name...'  
                                                required
                                            />
                                        </div>
                                        <div className='block w-full md:w-6/12'>
                                            <label className='mb-2 inline-block text-sm md:text-base' htmlFor="email">Your Email</label>
                                            <input 
                                                onChange={handleInput} 
                                                value={state.email} 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                className='text-sm md:text-base w-full border p-3 rounded-lg theme-color' 
                                                placeholder='Enter Your Email...' 
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="block text-start mb-4 md:mb-8">
                                        <label className='mb-2 inline-block text-sm md:text-base' htmlFor="message">Your Message</label>
                                        <textarea 
                                            onChange={handleInput} 
                                            value={state.message} 
                                            name="message" 
                                            id="message" 
                                            rows={4} 
                                            className='text-sm md:text-base w-full border p-3 rounded-lg theme-color' 
                                            placeholder='Write Your Message...' 
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            className={`px-6 py-3 bg-[#1f436e] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 ${
                                                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                        {submitStatus.message && (
                                            <p className={`text-sm ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                                                {submitStatus.message}
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center my-4 py-2 mt-10'>
                        <p className='text-xs'>&copy; 2024, Designed and Developed by <span className='theme-color'> Dev Rathore</span> All Rights Reserved.</p>
                    </div>
            </footer>
        </>
    );
};

export default Footer;
