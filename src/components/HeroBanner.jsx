import React from 'react'

const HeroBanner = () => {
    return (
        <>
        <section className='w-full md:py-5 min-h-screen relative bg-fixed z-[1] bg-no-repeat bg-cover bg-center bg-blend-screen flex items-center justify-center before:z-[-1] before:bg-[#1f436e] before:opacity-80 before:w-full before:h-full before:absolute before:top-0 before:left-0' id='home' style={{ backgroundImage: "url('images/bg-hero.jpg')" }}>
            <div className='max-w-7xl mx-auto px-4 relative z-[2]'>
                <div className='flex bg-transparent bg-gradient-to-tl text-[#fff] p-4 md:p-36 rounded-xl w-full items-center justify-center flex-col'>
                    <span className='text-sm md:text-lg uppercase tracking-[4px] mb-4 text-cyan-300'>Welcome to my Portfolio</span>
                    <h1 className='text-2xl md:text-4xl lg:text-6xl uppercase font-bold text-center'>
                        Hi, I'm <span className='text-transparent textstroke animate-pulse transition-all ease-in inline-block duration-200 bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400'>Dev</span> Rathore
                    </h1>
                    <p className='text-lg md:text-xl text-gray-200 mt-6 max-w-2xl text-center'>
                        Crafting beautiful and functional web experiences with modern technologies
                    </p>
                    <ul className='mt-8 bg-transparent/10 backdrop-blur-sm rounded-2xl flex items-center gap-3 md:gap-6 flex-wrap px-6 md:px-8 py-4 border border-white/10'>
                        <li className='text-sm md:text-base font-medium md:pr-6 relative before:bg-cyan-400 before:hidden before:md:w-1.5 before:md:h-1.5 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>Sr. Frontend Developer</li>
                        <li className='text-sm md:text-base font-medium md:pr-6 relative before:bg-cyan-400 before:hidden before:md:w-1.5 before:md:h-1.5 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>React Specialist</li>
                        <li className='text-sm md:text-base font-medium md:pr-6 relative before:bg-cyan-400 before:hidden before:md:w-1.5 before:md:h-1.5 before:md:block before:absolute before:top-[10px] before:right-0 before:rounded-full'>UI/UX Designer</li>
                        <li className='text-sm md:text-base font-medium relative'>Web Performance Expert</li>
                    </ul>
                    <div className='mt-12 flex gap-4'>
                        <a href="#contact" className='px-3 md:px-8 py-3 text-sm md:text-base bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300'>
                            Get in Touch
                        </a>
                        <a href="#projects" className='px-3 md:px-8 py-3 text-sm md:text-base bg-white/10 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/10'>
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroBanner
