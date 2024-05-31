import React from 'react'

const HeroBanner = () => {
    return (
        <>
        <section className='w-full'>
            <div className='flex bg-gray-200 bg-gradient-to-tl text-[#1f436e] p-4 md:p-40 rounded-xl border w-full items-center justify-center flex-col'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl uppercase font-semibold'>I'M <span className='text-transparent text-stroke'>Dev </span> Rathore</h1>
                <ul className='mt-4 bg-white rounded-lg flex items-center gap-3 flex-wrap px-4 py-3'>
                    <li className='text-base pr-4 relative before:bg-gray-300 before:w-2 before:h-2 before:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>UI Developer</li>
                    <li className='text-base pr-4 relative before:bg-gray-300 before:w-2 before:h-2 before:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>Webflow Developer</li>
                    <li className='text-base pr-4 relative before:bg-gray-300 before:w-2 before:h-2 before:block before:absolute before:top-[10px] before:right-0 before:rounded-full before:last:hidden'>Marketer</li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default HeroBanner
