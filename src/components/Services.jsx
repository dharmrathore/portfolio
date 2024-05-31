import { iconsSvg } from '@/app/utils/Iconsvg'
import React from 'react'


const Services = () => {
    return (
        <>
        <section className='flex items-center flex-col w-full py-10'>
            <div className='text-center py-4 w-full'>
                <h2 className='text-base mb-4'>SERVICES</h2>
                <h3 className='text-3xl font-semibold text-[#1f436e]'>Quality Services</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:my-10'>
                <div className='flex flex-col gap-4 items-center bg-gray-200 bg-gradient-to-tl text-center transition-all rounded-lg border border-transparent hover:border-[#1f436e] p-4 duration-300 md:p-8 hover:-translate-y-2'>
                    <div className='w-16 h-16 text-[#1f436e]'>
                        <span dangerouslySetInnerHTML={{ __html: iconsSvg.brandIcon }} />
                    </div>
                    <h3 className='text-base md:text-lg  font-semibold'>Brand Identity Design</h3>
                    <p>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
                </div>
                <div className='flex flex-col gap-4 items-center bg-gray-200 bg-gradient-to-tl text-center transition-all rounded-lg border border-transparent hover:border-[#1f436e] p-4 duration-300 md:p-8 hover:-translate-y-2'>
                    <div className='w-16 h-16 text-[#1f436e]'>
                    <span dangerouslySetInnerHTML={{ __html: iconsSvg.websiteIcon }} />
                    </div>
                    <h3 className='text-base md:text-lg  font-semibold'>Website Design</h3>
                    <p>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
                </div>
                <div className='flex flex-col gap-4 items-center bg-gray-200 bg-gradient-to-tl text-center transition-all rounded-lg border border-transparent hover:border-[#1f436e] p-4 duration-300 md:p-8 hover:-translate-y-2'>
                    <div className='w-16 h-16 text-[#1f436e]'>
                        <span dangerouslySetInnerHTML={{ __html: iconsSvg.applicationIcon }} />
                    </div>
                    <h3 className='text-base md:text-lg  font-semibold'>Application Design</h3>
                    <p>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services
