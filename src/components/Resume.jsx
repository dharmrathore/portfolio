import { iconsSvg } from '@/app/utils/Iconsvg';
import React from 'react'


const resumeweb = [
    {
        id: '1',
        years: '2019 - Present',
        title: 'Senior UI Developer',
        company: 'Appy pie',

    },
    {
        id: '2',
        years: '2017 - 2019',
        title: 'Junior UI Developer',
        company: 'Olive e-Business Pvt. Ltd',
    },
    {
        id: '3',
        years: '2016 - 2017',
        title: 'UI Developer',
        company: 'IDC Technologies Solutions India Pvt. Ltd.',
    }, 
];

const resumeinfo = [

    {
        id: '1',
        years: '2010 - 2013',
        title: 'Bachelor Degree',
        company: 'AmarDeep College Firozabad U.P',
    },
    {
        id: '2',
        years: '2007 - 2009',
        title: 'Higher secoundery Education',
        company: 'Gyan College Firozabad U.P',
    },
    {
        id: '3',
        years: '2015 - 2016',
        title: 'Tech Altum Web Designing Training Institute',
        company: 'UI/UX Design',
    }  
];

const Resume = () => {
    return (
        <>
        <section className='w-full py-4 md:py-10 bg-gray-200 bg-gradient-to-tl' id='resume'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='py-4 text-center'>
                    <h2 className='text-sm mb-2 md:mb-4'>EXPERIENCE</h2>
                    <h3 className='text-xl md:text-3xl font-semibold text-[#1f436e]'>Professional Resume</h3>
                </div>
                <div className="mt-4 md:mt-7 pb-4">
                    <div  className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                        <ul className='flex p-4 md:p-10 gap-4 border border-solid border-gray-300 rounded-lg flex-col bg-white'> 
                            {resumeweb.map((item, index) => (
                                <li className='flex gap-4 py-4 md:py-7 items-start  border-b border-b-solid border-b-gray-300 last:border-0' key={item.id}>
                                    <div className='rounded-lg bg-gray-50 w-10 h-10 text-[#1f436e] flex items-center justify-center flex-grow-0 flex-shrink-0'>
                                        <span dangerouslySetInnerHTML={{__html: iconsSvg.resumeIcon}}/>
                                    </div>
                                
                                    <div className='flex gap-3 flex-col'>
                                        <h2 className='text-sm md:text-base'>{item.years}</h2>
                                        <h3 className='text-base md:text-xl font-semibold text-[#1f436e]'>{item.title}</h3>
                                        <p className='text-sm md:text-base'>{item.company}</p>
                                    </div>
                                </li>
                                
                            ))}
                        </ul>
                        <ul className='flex p-5 md:p-10 gap-4 border border-solid border-gray-300 rounded-lg flex-col bg-white'> 
                            {resumeinfo.map((item, index) => (
                                <li className='flex gap-4 py-4 md:py-7 items-start  border-b border-b-solid border-b-gray-300 last:border-0' key={item.id}>
                                    <div className='rounded-lg bg-gray-50 w-10 h-10 text-[#1f436e] flex items-center justify-center flex-grow-0 flex-shrink-0'>
                                        <span dangerouslySetInnerHTML={{__html: iconsSvg.resumeIcon}}/>
                                    </div>
                                
                                    <div className='flex gap-3 flex-col'>
                                        <h2 className='text-sm md:text-base'>{item.years}</h2>
                                        <h3 className='text-base md:text-xl font-semibold text-[#1f436e]'>{item.title}</h3>
                                        <p className='text-sm md:text-base'>{item.company}</p>
                                    </div>
                                </li>
                                
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Resume
