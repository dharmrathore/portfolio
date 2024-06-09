import React from 'react'

const HeroBanner = () => {
    return (
        <>
        <section className='w-full md:py-5' id='home'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex bg-gray-200 bg-gradient-to-tl text-[#1f436e] p-4 py-10 md:p-36 rounded-xl border w-full items-center justify-center flex-col'>
                    <h1 className='text-xl md:text-4xl lg:text-6xl uppercase font-semibold'>I'M <span className='text-transparent textstroke animate-pulse transition-all ease-in inline-block duration-200 bg-clip-text  bg-gradient-to-r from-cyan-500 to-violet-500'>Dev </span> Rathore</h1>
                    <ul className='mt-4 bg-white rounded-lg flex items-center gap-2 md:gap-3 flex-wrap px-3 md:px-4 py-3 '>
                        <li className='text-xs md:text-base md:pr-4 relative before:bg-[#1f436e]  before:hidden before:md:w-2 before:md:h-2 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>UI Developer</li>
                        <li className='text-xs md:text-base md:pr-4 relative before:bg-[#1f436e]  before:hidden before:md:w-2 before:md:h-2 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>Webflow Developer</li>
                        <li className='text-xs md:text-base md:pr-4 relative before:bg-[#1f436e]  before:hidden before:md:w-2 before:md:h-2 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full before:last:hidden'>Marketer</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroBanner
