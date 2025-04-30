'use client';

import React, { useEffect, useState } from 'react';
import { iconsSvg } from '@/app/utils/Iconsvg';

const skills = [
    {
        id: 1,
        name: 'HTML5',
        level: 95,
        icon: iconsSvg.htmlIcon,
        color: '#E44D26',
        bgColor: '#FFF4F2'
    },
    {
        id: 2,
        name: 'CSS3',
        level: 90,
        icon: iconsSvg.cssIcon,
        color: '#264DE4',
        bgColor: '#F2F4FF'
    },
    {
        id: 3,
        name: 'JavaScript',
        level: 85,
        icon: iconsSvg.jsIcon,
        color: '#F7DF1E',
        bgColor: '#FFFDF2'
    },
    {
        id: 4,
        name: 'React.js',
        level: 80,
        icon: iconsSvg.reactIcon,
        color: '#61DAFB',
        bgColor: '#F2FCFF'
    },
    {
        id: 5,
        name: 'Tailwind CSS',
        level: 85,
        icon: iconsSvg.tailwindIcon,
        color: '#38B2AC',
        bgColor: '#F2FFFD'
    },
    {
        id: 6,
        name: 'Bootstrap',
        level: 90,
        icon: iconsSvg.bootstrapIcon,
        color: '#7952B3',
        bgColor: '#F7F2FF'
    },
    {
        id: 7,
        name: 'Git',
        level: 80,
        icon: iconsSvg.gitIcon,
        color: '#F05032',
        bgColor: '#FFF2F0'
    },
    {
        id: 8,
        name: 'Jira',
        level: 75,
        icon: iconsSvg.jiraIcon,
        color: '#0052CC',
        bgColor: '#F2F6FF'
    },
    {
        id: 9,
        name: 'Angular.js',
        level: 70,
        icon: iconsSvg.angularIcon,
        color: '#DD0031',
        bgColor: '#FFF2F5'
    }
];

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('skills');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <section className='w-full py-16 bg-white' id='skills'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-sm mb-2 uppercase tracking-wider text-gray-500'>Skills</h2>
                    <h3 className='text-3xl md:text-4xl font-bold text-[#1f436e]'>Technical Expertise</h3>
                    <div className='mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full'></div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {skills.map((skill) => (
                        <div 
                            key={skill.id} 
                            className='bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-300'
                        >
                            <div className='flex items-center gap-4 mb-8'>
                                <div 
                                    className='w-16 h-16 rounded-2xl flex items-center justify-center'
                                    style={{ backgroundColor: skill.bgColor }}
                                >
                                    <div 
                                        className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full" 
                                        style={{ color: skill.color }}
                                        dangerouslySetInnerHTML={{ __html: skill.icon }} 
                                    />
                                </div>
                                <h4 className='text-xl font-semibold text-gray-800'>{skill.name}</h4>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex justify-between text-sm text-gray-600 mb-2'>
                                    <span>Beginner</span>
                                    <span className='font-medium'>{skill.level}%</span>
                                    <span>Expert</span>
                                </div>
                                <div className='w-full h-2 bg-gray-100 rounded-full overflow-hidden'>
                                    <div 
                                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                            isVisible ? 'animate-progress' : ''
                                        }`}
                                        style={{ 
                                            width: isVisible ? `${skill.level}%` : '0%',
                                            backgroundColor: skill.color
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 