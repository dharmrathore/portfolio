import { iconsSvg } from '@/app/utils/Iconsvg'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-full  md:py-5 mb-4' id='contact'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='text-center py-4 w-full md:mb-8'  >
                        <h2 className='text-sm mb-2 md:mb-4 uppercase'>Contact</h2>
                        <h3 className='text-xl md:text-3xl font-semibold theme-color'>Get in Touch with Me!</h3>
                    </div>
                    <div className="flex flex-wrap md:flex-row gap-4 md:gap-0 justify-between h-full">
                        <div className="basis-full md:basis-1/3 h-full">
                            <ul className='p-4 md:p-10 bg-gray-300 rounded-lg flex flex-col gap-4 h-full'>
                                {/* <li className='flex items-baseline gap-3 mb-4 flex-col'>
                                    <span className='text-xl theme-color' dangerouslySetInnerHTML={{__html: iconsSvg.locationIcon}} />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-base font-semibold'>Our Office:</h3>
                                        <p className='text-sm'>NSEZ Sector 81, Noida, India</p>
                                    </div>
                                </li> */}
                                <li className='flex items-baseline gap-3 mb-4 flex-col'>
                                    <span className='text-xl theme-color' dangerouslySetInnerHTML={{__html: iconsSvg.phoneIcon}} />
                                    <div  className='flex flex-col gap-1'>
                                        <h3 className='text-base font-semibold'>Contact Number:</h3>
                                        <p className='text-sm'>+91 7531836471</p>
                                    </div>
                                </li>
                                <li className='flex items-baseline gap-3 mb-4 flex-col'>
                                    <span className='text-xl theme-color' dangerouslySetInnerHTML={{__html: iconsSvg.emailIcon}} />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-base font-semibold'>Email Us:</h3>
                                        <p className='text-sm'>dharm.rathore90@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-7/12">
                            <div className='bg-white border p-4 md:p-10 rounded-lg'>
                                <div className='flex flex-col md:flex-row w-full gap-4 md:gap-8 mb-4 md:mb-8'>
                                    <div className='block w-full md:w-6/12'>
                                        <label className='mb-2 inline-block text-sm md:text-base' htmlFor="Your Name">Your Name</label>
                                        <input type="text" name="name" className='text-sm md:text-base w-full border p-3 rounded-lg theme-color' id="" placeholder='Enter Your Name...'/>
                                    </div>
                                    <div className='block w-full md:w-6/12'>
                                        <label className='mb-2 inline-block text-sm md:text-base' htmlFor="Your Email">Your Email</label>
                                        <input type="email" name="email" id="" className='text-sm md:text-base w-full border p-3 rounded-lg theme-color' placeholder='Enter Your Email...'/>
                                    </div>
                                </div>
                                <div className="block text-start mb-4 md:mb-8">
                                    <label className='mb-2 inline-block text-sm md:text-base' htmlFor="Your Message">Your Message</label>
                                    <textarea name="message" id="" rows={4} className='text-sm md:text-base w-full border p-3 rounded-lg theme-colorr' placeholder='Write Your Message...'></textarea>
                                </div>
                                <button type='submit' className="p-3 text-sm md:text-base md:p-4 border bg-[#1f436e] text-white transition-all flex items-center gap-1 rounded-md hover:shadow-lg hover:opacity-90">
                                    Send Me Message
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
