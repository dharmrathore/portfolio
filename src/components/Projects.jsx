"use client";
import React, { useState } from 'react'
import tabsContentData from "../../src/app/json/Category.json"


const tabsButton = [
    {
        id: '1',
        name: 'All',
    },
    {
        id: '2',
        name: 'Design',
    },
    {
        id: '3',
        name: 'Game',
    },
    {
        id: '4',
        name: 'Branding',
    },
    {
        id: '5',
        name: 'Marketing',
    }
]




const Projects = () => {

    const  [isActive, setIsActive] = useState(tabsButton[0].id)

    const handleActiveTabs = (id) =>{
        setIsActive(id)
        console.log(id)
    }

    const  filteredContent =  isActive === "1" ?
    tabsContentData : tabsContentData.filter(items => items.category === tabsButton.find(tab => tab.id === isActive).name);


    return (
        <>
        <section className='w-full md:py-5' id='projects'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='text-center py-4 w-full md:mb-4' >
                    <h2 className='text-sm mb-2 md:mb-4'>WORKS</h2>
                    <h3 className='text-xl md:text-3xl font-semibold theme-color'>Creative Portfolio</h3>
                </div>
                <ul className='flex items-center gap-3 justify-start text-sm md:text-base mb-5 md:mb-8 overscroll-auto overflow-x-auto'>
                    {tabsButton.map((items) =>
                        <li key={items.id}>
                            <button onClick={()=> handleActiveTabs(items.id)} className={`text-gray-600 p-2 border-b-2 border-transparent  ${isActive === items.id ? 'text-[#1f436e] theme-color border-b-[#1f436e]': 'hover:border-b-[#1f436e] hover:theme-color'}`}>{items.name}</button>
                        </li>
                    )}
                </ul>

                <div className='tabs'>
                    <div className='gap-4 flex-wrap grid md:grid-cols-2 lg:grid-cols-4 transition-all duration-500'>
                        {filteredContent.map((data, id)=>
                            <div className='flex flex-col gap-3 p-4 border rounded-md transition-all duration-500 transform hover:shadow-lg hover:scale-105' key={data}>
                                <div className='block'>
                                    <img src={data.image} alt={data.image} className='w-full max-w-full h-auto'/>
                                </div>
                                <div className='flex flex-col gap-2 bg-gray-200 p-3 h-full'>
                                    <h3 className='text-base md:text-xl font-semibold theme-color'>{data.title}</h3>
                                    <p className='text-sm md:text-base'>{data.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects