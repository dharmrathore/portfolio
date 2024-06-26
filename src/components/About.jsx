import Image from 'next/image'
import React from 'react'
// import profilepic from '../../public/images/rathore.jpg'
import Link from 'next/link'
import { iconsSvg } from '@/app/utils/Iconsvg'


const About = () => {

    return (
        <>
        <section className='w-full md:py-5' id='about'>
            <div className='max-w-7xl mx-auto px-4 flex items-center flex-wrap md:flex-row'>
                <div className='w-full md:w-4/12 flex flex-col gap-4 border rounded-lg p-4 md:p-10 shadow-xl'>
                    {/* <Image src={profilepic} alt={profilepic} className='max-w-full h-auto'/> */}

                    <Image src="/images/rathore.jpg" alt='' width={640} height={840} />
                    <h2 className='text-xl md:text-2xl text-center theme-color'>Dharmendra Rathore</h2>
                    <div className='border rounded-3xl text-center py-2 px-5 inline-flex items-center gap-2 justify-center mx-auto'>
                        <p className='text-sm md:text-base'>Available for Work</p>
                        <span className='w-2 h-2 bg-[#1f436e] rounded-full animate-ping'></span>
                    </div>
                    <ul className='flex items-center gap-4 flex-wrap justify-center'>
                        <li>    
                            <Link aria-label="facebook" href="#" rel='facebook' className='border rounded-md w-10 h-10 items-center justify-center flex hover:bg-[#1f436e] hover:text-white hover:shadow-lg'>
                                <span dangerouslySetInnerHTML={{__html: iconsSvg.facebookIcon}} />
                            </Link>
                        </li>
                        <li>
                            <Link aria-label="Linkedin" target='_blank' href="https://www.linkedin.com/in/dharmendra-rathore-0168aa105/" rel='Linkedin' className='border rounded-md w-10 h-10 items-center justify-center flex hover:bg-[#1f436e] hover:text-white hover:shadow-lg'>
                                <span dangerouslySetInnerHTML={{__html: iconsSvg.linkedinIcon}} />
                            </Link>
                        </li>
                        <li>
                            <Link title='visakwik' target='_blank' href="https://visakwik.com/" rel='web' className='border rounded-md w-10 h-10 items-center justify-center flex hover:bg-[#1f436e] hover:text-white hover:shadow-lg'>
                                <span dangerouslySetInnerHTML={{__html: iconsSvg.webIcon}} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='w-full md:w-8/12 p-0 md:p-10 mt-4 md:mt-0'>
                    <h2 className='text-xl md:text-3xl lg:text-5xl mb-6'>Hello, I'm Dharmendra Rathore,<span className='text-[#1f436e] '> Senior UI Developer</span> Based in India.</h2>
                    <Link href="/resume/dharmendra_resume.pdf" target='_blank' className='p-4 border bg-[#1f436e] bg-gradient-to-r text-white transition-all inline-flex items-center gap-1 rounded-md hover:from-pink-500 hover:to-violet-500 hover:shadow-lg hover:opacity-90'>
                        Download CV 
                        <span className='animate-pulse' dangerouslySetInnerHTML={{__html: iconsSvg.downloadIcon}}/>
                    </Link>
                    <ul className='grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <li className='inline-flex items-center text-sm md:text-base'>
                            <span className='w-5 h-5 flex items-center'>
                               <span dangerouslySetInnerHTML={{__html: iconsSvg.rightupIcon}}/>
                            </span>
                            Logo Design</li>
                        <li className='inline-flex items-center text-sm md:text-base'>
                            <span className='w-5 h-5 flex items-center'>
                               <span dangerouslySetInnerHTML={{__html: iconsSvg.rightupIcon}}/>
                            </span>
                            Branding Identity</li>
                        <li className='inline-flex items-center text-sm md:text-base'>
                            <span className='w-5 h-5 flex items-center'>
                               <span dangerouslySetInnerHTML={{__html: iconsSvg.rightupIcon}}/>
                            </span>
                            Web Design</li>
                        <li className='inline-flex items-center text-sm md:text-base'>
                            <span className='w-5 h-5 flex items-center'>
                               <span dangerouslySetInnerHTML={{__html: iconsSvg.rightupIcon}}/>
                            </span>
                            Social Marketing</li>
                        <li className='inline-flex items-center text-sm md:text-base'>
                            <span className='w-5 h-5 flex items-center'>
                               <span dangerouslySetInnerHTML={{__html: iconsSvg.rightupIcon}}/>
                            </span>
                            Digital Marketing</li>
                        <li className='inline-flex items-center text-sm md:text-base'>
                            <span className='w-5 h-5 flex items-center'>
                               <span dangerouslySetInnerHTML={{__html: iconsSvg.rightupIcon}}/>
                            </span>
                            Product Design</li>
                    </ul>
                </div>
            </div>
        </section>
           
        </>
    )
}

export default About
