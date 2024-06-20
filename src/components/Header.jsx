'use client';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Header = () => {

    const [isScroll, setIsScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isActiveSection, setIsActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight / 2;
           // const marginTop = 200;
        
            sections.forEach((section) => {
                if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                    setIsActiveSection(section.getAttribute('id'));
                }
            });
        
            if (window.scrollY > 100) {
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

    const handleCLoseMenu = () => {
        setMenuOpen(!menuOpen)
    }


    // const heandleScrollSection = (id) => {
    //     document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    //     setMenuOpen(false); 
    // };

    return (
        <>
        <header className={`z-10 mx-auto w-full items-center justify-between  bg-white fixed  top-0 right-0 transition-all  left-0 flex duration-500 ${isScroll ? 'shadow-lg py-0' : 'py-4'}`}>
            <nav className="w-full flex items-center justify-between max-w-7xl mx-auto px-4 py-3 md:py-4 duration-500 transition-all">
                <Link href="/" className='font-semibold text-lg text-[#1f436e]' title='Dev'>
                    <Image src="/images/logo.png" alt='logo' width={40} height={40}/>
                </Link>
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
                        <Link  className={`text-sm  md:text-base hover:text-[#1f436e] font-medium  transition-all duration-300 ease-linear pb-1  hover:border-[#1f436e] ${isActiveSection === 'home' ? 'text-[#1f436e]  border-b-2 border-[#1f436e] ' : 'text-gray-600 border-solid border-b-2 border-transparent' }`} href="/#home" rel="home" title="Home" scroll={true}>Home</Link>
                    </li>
                    <li>
                        <Link  className={`text-sm  md:text-base hover:text-[#1f436e] font-medium  transition-all duration-300 ease-linear pb-1  hover:border-[#1f436e] ${isActiveSection === 'about' ? 'text-[#1f436e] border-b-2  border-[#1f436e]' : 'text-gray-600 border-solid border-b-2 border-transparent' }`} href="/#about" rel="about" title="about" scroll={true}>About</Link>
                    </li>
                    <li>
                        <Link  className={`text-sm  md:text-base hover:text-[#1f436e] font-medium  transition-all duration-300 ease-linear pb-1  hover:border-[#1f436e] ${isActiveSection === 'services' ? 'text-[#1f436e] border-b-2  border-[#1f436e]' : 'text-gray-600 border-solid border-b-2 border-transparent' }`} href="/#services" rel="Services" title="Services" scroll={true}>Services</Link>
                    </li>
                    <li>
                        <Link className={`text-sm  md:text-base hover:text-[#1f436e] font-medium  transition-all duration-300 ease-linear pb-1  hover:border-[#1f436e] ${isActiveSection === 'resume' ? 'text-[#1f436e] border-b-2  border-[#1f436e]' : 'text-gray-600 border-solid border-b-2 border-transparent' }`} href="/#resume" rel="Resume" title="Resume" scroll={true}>Resume</Link>
                    </li>
                    <li>
                        <Link className={`text-sm  md:text-base hover:text-[#1f436e] font-medium  transition-all duration-300 ease-linear pb-1  hover:border-[#1f436e] ${isActiveSection === 'projects' ? 'text-[#1f436e] border-b-2  border-[#1f436e]' : 'text-gray-600 border-solid border-b-2 border-transparent' }`} href="/#projects" rel="Projects" title="Projects" scroll={true}>Projects</Link>
                    </li>
                    <li>
                        <Link className={`text-sm  md:text-base hover:text-[#1f436e] font-medium  transition-all duration-300 ease-linear pb-1  hover:border-[#1f436e] ${isActiveSection === 'contact' ? 'text-[#1f436e] border-b-2  border-[#1f436e]' : 'text-gray-600 border-solid border-b-2 border-transparent' }`} href="/#contact" rel="Contact" title="Contact" scroll={true}>Contact</Link>
                    </li> 
                    <li>
                        <Link className={`text-sm  md:text-base hover:text-[#1f436e] font-medium  transition-all duration-300 ease-linear pb-1  hover:border-[#1f436e] ${isActiveSection === 'contact' ? 'text-[#1f436e] border-b-2  border-[#1f436e]' : 'text-gray-600 border-solid border-b-2 border-transparent' }`} target='_blank' href="https://layermatrix.com/" rel="layer Matrix" title="layer Matrix" scroll={true}>layer Matrix</Link>
                    </li>
                </ul>

                {menuOpen && <div className='fixed inset-0 bg-black bg-opacity-50 z-0 transition-all duration-200 ease-in h-full w-full' onClick={()=> handleCLoseMenu() }></div>}
            </nav>
        </header>
        </>
    )
}

export default Header
