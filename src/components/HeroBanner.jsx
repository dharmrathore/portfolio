import React from 'react'

const HeroBanner = () => {
    return (
        <>
        <section className='w-full md:py-5 min-h-screen relative bg-fixed z-[1] bg-no-repeat bg-cover bg-center bg-blend-screen flex items-center justify-center before:z-[-1] before:bg-[#1f436e] before:opacity-80  before:w-full before:h-full before:absolute before:top-0 before:left-0' id='home'  style={{ backgroundImage: "url('images/bg-hero.jpg')" }}>
            <div className='max-w-7xl mx-auto px-4 relative z-[2]'>
                <div className='flex bg-transparent bg-gradient-to-tl text-[#fff] p-4  md:p-36 rounded-xl  w-full items-center justify-center flex-col'>
                    <h1 className='text-2xl md:text-4xl lg:text-6xl uppercase font-semibold'>I'M <span className='text-transparent textstroke animate-pulse transition-all ease-in inline-block duration-200 bg-clip-text  bg-gradient-to-r from-cyan-500 to-violet-500'>Dev </span> Rathore</h1>
                    <ul className='mt-4 bg-transparent rounded-lg flex items-center gap-2 md:gap-3 flex-wrap px-3 md:px-4 py-3 '>
                        <li className='text-xs md:text-base md:pr-4 relative before:bg-[#fff]  before:hidden before:md:w-2 before:md:h-2 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>UI Developer</li>
                        <li className='text-xs md:text-base md:pr-4 relative before:bg-[#fff]  before:hidden before:md:w-2 before:md:h-2 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>Webflow Developer</li>
                        <li className='text-xs md:text-base md:pr-4 relative before:bg-[#fff]  before:hidden before:md:w-2 before:md:h-2 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full before:last:hidden'>Marketer</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroBanner
