'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {

    const [isScroll, setIsScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isActiveSection, setIsActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {

            //setIsScroll(window.scroll > 50);
            if (window.scrollY > 50) {
                setIsScroll(true);
            } 
            else {
                setIsScroll(false);
            }

            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight / 2 ; 

            const top = 200;
            sections.forEach((section) => {
                if (section.offsetTop - top <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                    setIsActiveSection(section.getAttribute('id'));
                }
            });

        
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCLoseMenu = () => {
        setMenuOpen(!menuOpen)
    }


    const heandleScrollSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); 
    };

    return (
        <>
        <header className={`z-10 mx-auto w-full items-center justify-between  bg-white fixed  top-0 right-0 transition-all  left-0 flex duration-500 ${isScroll ? 'shadow-lg py-0' : 'py-4'}`}>
            <nav className="w-full flex items-center justify-between max-w-7xl mx-auto px-4 py-3 md:py-6 duration-500 transition-all">
                <Link href="/" className='font-semibold text-lg text-[#1f436e]' title='Dev'>Dev</Link>
                <button 
                    className="block md:hidden text-gray-600 hover:text-[#1f436e] focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
                <ul className={`flex-col md:flex-row flex md:flex items-center justify-center gap-4 fixed md:static top-0 left-0 bg-white h-screen md:h-auto w-72 md:w-auto transform ${menuOpen ? '-translate-x-0 z-10' : '-translate-x-full'} md:translate-x-0 transition-transform duration-500 ease-in-out`}>

                    <li>
                        <button onClick={(e)=>{e.preventDefault(); heandleScrollSection('home')}} className={`text-sm  md:text-base hover:text-[#1f436e] font-medium border-b-2 transition-all duration-300 ease-linear pb-1 border-transparent hover:border-[#1f436e] border-solid  ${isActiveSection === 'home' ? 'text-[#1f436e] border-[#1f436e]' : 'text-gray-600' }`} href="/#home" rel="home" title="Home" scroll={true}>Home</button>
                    </li>
                    <li>
                        <button onClick={(e)=>{e.preventDefault(); heandleScrollSection('about')}} className={`text-sm  md:text-base  font-medium border-b-2 transition-all duration-300 ease-linear pb-1 border-transparent hover:border-[#1f436e] border-solid  ${isActiveSection === 'about' ? 'text-[#1f436e] border-[#1f436e]' : 'text-gray-600' }`} href="/#about" rel="about" title="about" scroll={true}>About</button>
                    </li>
                    <li>
                        <button onClick={(e)=>{e.preventDefault(); heandleScrollSection('services')}} className={`text-sm  md:text-base hover:text-[#1f436e] font-medium border-b-2 transition-all duration-300 ease-linear pb-1 border-transparent hover:border-[#1f436e] border-solid  ${isActiveSection === 'services' ? 'text-[#1f436e] border-[#1f436e]' : 'text-gray-600' }`} href="/#services" rel="Services" title="Services" scroll={true}>Services</button>
                    </li>
                    <li>
                        <button onClick={(e)=>{e.preventDefault(); heandleScrollSection('resume')}} className={`text-sm  md:text-base hover:text-[#1f436e] font-medium border-b-2 transition-all duration-300 ease-linear pb-1 border-transparent hover:border-[#1f436e] border-solid  ${isActiveSection === 'resume' ? 'text-[#1f436e] border-[#1f436e]' : 'text-gray-600' }`} href="/#resume" rel="Resume" title="Resume" scroll={true}>Resume</button>
                    </li>
                    <li>
                        <button onClick={(e)=>{e.preventDefault(); heandleScrollSection('projects')}} className={`text-sm  md:text-base hover:text-[#1f436e] font-medium border-b-2 transition-all duration-300 ease-linear pb-1 border-transparent hover:border-[#1f436e] border-solid  ${isActiveSection === 'projects' ? 'text-[#1f436e] border-[#1f436e]' : 'text-gray-600' }`} href="/#projects" rel="Projects" title="Projects" scroll={true}>Projects</button>
                    </li>
                    <li>
                        <button onClick={(e)=>{e.preventDefault(); heandleScrollSection('contact')}} className={`text-sm  md:text-base hover:text-[#1f436e] font-medium border-b-2 transition-all duration-300 ease-linear pb-1 border-transparent hover:border-[#1f436e] border-solid  ${isActiveSection === 'contact' ? 'text-[#1f436e] border-[#1f436e]' : 'text-gray-600' }`} href="/#contact" rel="Contact" title="Contact" scroll={true}>Contact</button>
                    </li>
                </ul>

                {menuOpen && <div className='fixed inset-0 bg-black bg-opacity-50 z-0 transition-all duration-200 ease-in' onClick={()=> handleCLoseMenu() }></div>}
            </nav>
        </header>
        </>
    )
}

export default Header
