'use client';
import React, { useState, useEffect } from 'react';
import tabsContentData from '../api/Category.json';
import Loader from './Loader';

const tabsButton = [
	{ id: 1, name: 'All' },
	{ id: 2, name: 'Design' },
	{ id: 3, name: 'Templates' },
	{ id: 4, name: 'Branding' },
	{ id: 5, name: 'Marketing' },
	{ id: 6, name: 'Website' }
];

const Projects = () => {
	const [isActive, setIsActive] = useState(tabsButton[0].id);
	const [isLoader, setIsLoader] = useState(false);
	const [filteredContent, setFilteredContent] = useState([]);

	const handleActiveTabs = (id) => {
		setIsActive(id);
		setIsLoader(true);

		setTimeout(() => { 
			const content = id === 1 ? tabsContentData : tabsContentData.filter(items => items.category === tabsButton.find(tab => tab.id === id).name);
			setFilteredContent(content);
			setIsLoader(false);
		}, 1000);
	};

	useEffect(() => {
		setFilteredContent(tabsContentData);
	}, []);

	return (
		<>
			<section className='w-full md:py-5' id='projects'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='text-center py-4 w-full md:mb-4'>
						<h2 className='text-sm mb-2 md:mb-4 uppercase'>Works</h2>
						<h3 className='text-xl md:text-3xl font-semibold theme-color'>Creative Portfolio</h3>
					</div>
					<ul className='flex items-center gap-3 justify-start text-sm md:text-base mb-5 md:mb-8 overscroll-auto overflow-x-auto'>
						{tabsButton.map((item) => (
							<li key={item.id}>
								<button onClick={() => handleActiveTabs(item.id)} className={`text-gray-600 p-2 border-b-2 border-transparent ${isActive === item.id ? 'text-[#1f436e] theme-color border-b-[#1f436e]' : 'hover:border-b-[#1f436e] hover:theme-color'}`}>
									{item.name}
								</button>
							</li>
						))}
					</ul>

					<div className='tabs pb-10'>
						<div className='gap-4 flex-wrap grid md:grid-cols-2 lg:grid-cols-4 transition-all duration-500'>
							{isLoader ? (
								<Loader/>
							) : (
								filteredContent.map((data, index) => (
									<div key={index} className='flex flex-col gap-3 p-4 border rounded-md ease-in transition-all duration-500 transform hover:shadow-lg hover:scale-105 group'>
										<div className='block w-full h-60 bg-cover group-hover:bg-top-100 group-hover:bg-left-100 bg-left-top bg-no-repeat overflow-hidden transition-all duration-500 ease-in  opacity-70 hover:opacity-100' style={{ backgroundImage: `url(${data.image})` }}></div>
										<div className='flex flex-col gap-2 bg-gray-200 p-3 h-[120px] justify-center'>
											<h4 className='text-base md:text-lg font-bold theme-color'>{data.title}</h4>
											<p className='text-sm md:text-base'>{data.description}</p>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;
