import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
        <header className="z-10  w-full items-center justify-between fixed bg-white top-0 right-0 transition-all left-0 flex py-4 shadow-lg">
           <nav className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/" className='font-semibold text-lg' title='Dev'>Dev</Link>
                <ul className='flex items-center justify-center gap-4'>
                    <li>
                        <Link className='text-sm text-theme md:text-base hover:text-[#2a6ade] font-medium' href="/home" rel="home" title="Home" scroll={false}>Home</Link>
                    </li>
                    <li>
                        <Link className='text-sm text-theme md:text-base hover:text-[#2a6ade] font-medium' href="/About" rel="about" title="about">About</Link>
                    </li>
                    <li>
                        <Link className='text-sm text-theme md:text-base hover:text-[#2a6ade] font-medium' href="/Services" rel="Services" title="Services">Services</Link>
                    </li>
                    <li>
                        <Link className='text-sm text-theme md:text-base hover:text-[#2a6ade] font-medium' href="/Resume" rel="Resume" title="Resume">Resume</Link>
                    </li>
                    <li>
                        <Link className='text-sm text-theme md:text-base hover:text-[#2a6ade] font-medium' href="/Projects" rel="Projects" title="Projects">Projects</Link>
                    </li>
                    <li>
                        <Link className='text-sm text-theme md:text-base hover:text-[#2a6ade] font-medium' href="/Contact" rel="Contact" title="Contact">Contact</Link>
                    </li>
                </ul>
           </nav>
           </header>
        </>
    )
}

export default Header
