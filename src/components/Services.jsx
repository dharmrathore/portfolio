// "use client";
import { iconsSvg } from '@/app/utils/Iconsvg';
import React from 'react';
// import 'animate.css/animate.min.css';

const Services = () => {
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         import('wowjs').then((WOW) => {
    //             const wow = new WOW.WOW();
    //             wow.init();
    //         });
    //     }
    // }, []);

    return (
        <>
            <section className='w-full md:py-5' id='services'>
                <div className='max-w-7xl mx-auto px-4 flex items-center flex-col'>
                    <div className='text-center py-4 w-full wow animate__pulse' >
                        <h2 className='text-sm mb-2 md:mb-4'>SERVICES</h2>
                        <h3 className='text-xl md:text-3xl font-semibold text-[#1f436e]'>Quality Services</h3>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full md:my-10'>
                        <div className='flex flex-col gap-4 items-center bg-gray-50 bg-gradient-to-tl border-b-4 border-b-[#1f436e] text-center transition-all rounded-lg border  hover:shadow-lg p-4 duration-300 md:p-8 hover:-translate-y-2  shadow-xl'>
                            <div className='w-16 h-16 text-[#1f436e]'>
                                <span dangerouslySetInnerHTML={{ __html: iconsSvg.brandIcon }} />
                            </div>
                            <h3 className='text-base md:text-lg font-semibold text-[#1f436e]'>Branding Design</h3>
                            
                        </div>
                        <div className='flex flex-col gap-4 items-center bg-gray-50 bg-gradient-to-tl border-b-4 border-b-[#1f436e] text-center transition-all rounded-lg border  hover:shadow-lg p-4 duration-300 md:p-8 hover:-translate-y-2  shadow-xl'>
                            <div className='w-16 h-16 text-[#1f436e]'>
                                <span dangerouslySetInnerHTML={{ __html: iconsSvg.websiteIcon }} />
                            </div>
                            <h3 className='text-base md:text-lg font-semibold text-[#1f436e]'>Web Responsive Mobile</h3>
                          
                        </div>
                        <div className='flex flex-col gap-4 items-center bg-gray-50 bg-gradient-to-tl border-b-4 border-b-[#1f436e] text-center transition-all rounded-lg border  hover:shadow-lg p-4 duration-300 md:p-8 hover:-translate-y-2  shadow-xl'>
                            <div className='w-16 h-16 text-[#1f436e]'>
                                <span dangerouslySetInnerHTML={{ __html: iconsSvg.applicationIcon }} />
                            </div>
                            <h3 className='text-base md:text-lg font-semibold text-[#1f436e]'>Innovative Application Design</h3>
                        </div>
                        <div className='flex flex-col gap-4 items-center bg-gray-50 bg-gradient-to-tl border-b-4 border-b-[#1f436e] text-center transition-all rounded-lg border  hover:shadow-lg p-4 duration-300 md:p-8 hover:-translate-y-2  shadow-xl'>
                            <div className='w-16 h-16 text-[#1f436e]'>
                                <span dangerouslySetInnerHTML={{ __html: iconsSvg.developerIcon }} />
                            </div>
                            <h3 className='text-base md:text-lg font-semibold text-[#1f436e]'>Web Developer</h3>
                        </div>
                        <div className='flex flex-col gap-4 items-center bg-gray-50 bg-gradient-to-tl border-b-4 border-b-[#1f436e] text-center transition-all rounded-lg border  hover:shadow-lg p-4 duration-300 md:p-8 hover:-translate-y-2  shadow-xl'>
                            <div className='w-16 h-16 text-[#1f436e]'>
                                <span dangerouslySetInnerHTML={{ __html: iconsSvg.strategyIcon }} />
                            </div>
                            <h3 className='text-base md:text-lg font-semibold text-[#1f436e]'>Product Strategy</h3>
                        </div>
                        <div className='flex flex-col gap-4 items-center bg-gray-50 bg-gradient-to-tl border-b-4 border-b-[#1f436e] text-center transition-all rounded-lg border  hover:shadow-lg p-4 duration-300 md:p-8 hover:-translate-y-2  shadow-xl'>
                            <div className='w-16 h-16 text-[#1f436e]'>
                                <span dangerouslySetInnerHTML={{ __html: iconsSvg.seoIcon }} />
                            </div>
                            <h3 className='text-base md:text-lg font-semibold text-[#1f436e]'>SEO Optimize</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
