import React from 'react'

const HeroBanner = () => {
    return (
        <>
            <div className='flex bg-[#f0ffff] text-[#1f436e] p-20 md:p-40 rounded-lg border w-full items-center justify-center flex-col'>
                <h1 className='text-3xl md:text-7xl uppercase font-semibold'>I'M <span className='text-transparent text-stroke'>Dev</span> Rathore</h1>
                <ul className='mt-4 bg-white rounded-lg flex items-center gap-3 flex-wrap px-4 py-3'>
                    <li className='text-base pr-4 relative before:bg-gray-300 before:w-2 before:h-2 before:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>UI Developer</li>
                    <li className='text-base pr-4 relative before:bg-gray-300 before:w-2 before:h-2 before:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>Webflow Developer</li>
                    <li className='text-base pr-4 relative before:bg-gray-300 before:w-2 before:h-2 before:block before:absolute before:top-[10px] before:right-0 before:rounded-full before:last:hidden'>Marketer</li>
                </ul>
            </div>
        </>
    )
}

export default HeroBanner
