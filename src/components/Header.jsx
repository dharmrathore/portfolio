'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScroll(true);
          } else {
            setIsScroll(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <header className={`z-10  w-full items-center justify-between  bg-white fixed  top-0 right-0 transition-all  left-0 flex duration-500 ${isScroll ? 'shadow-lg py-0' : 'py-4'}`}>
            <nav className="w-full flex items-center justify-between max-w-7xl mx-auto px-4 py-6 duration-500 transition-all">
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
