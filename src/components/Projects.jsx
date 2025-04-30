'use client';
import React, { useState, useEffect } from 'react';
import tabsContentData from '../api/Category.json';
import Loader from './Loader';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const tabsButton = [
	{ id: 1, name: 'All' },
	{ id: 2, name: 'Branding' },
	{ id: 3, name: 'Design' },
	{ id: 4, name: 'Marketing' },
	{ id: 5, name: 'Templates'},
	{ id: 6, name: 'Website' }
];

const Projects = () => {
	const [isActive, setIsActive] = useState(tabsButton[0].id);
	const [isLoader, setIsLoader] = useState(false);
	const [filteredContent, setFilteredContent] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);

	const handleActiveTabs = (id) => {
		setIsActive(id);
		setIsLoader(true);

		setTimeout(() => { 
			const content = id === 1 ? tabsContentData : tabsContentData.filter(items => items.category === tabsButton.find(tab => tab.id === id).name);
			setFilteredContent(content);
			setIsLoader(false);
		}, 500);
	};

	useEffect(() => {
		setFilteredContent(tabsContentData);
	}, []);

	return (
		<section className='w-full py-16 bg-gradient-to-b from-gray-50 to-white' id='projects'>
			<div className='max-w-7xl mx-auto px-4'>
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-sm uppercase tracking-wider text-gray-600 mb-2'>Works</h2>
					<h3 className='text-3xl md:text-4xl font-bold text-[#1f436e] mb-1'>Creative Portfolio</h3>
					<div className='mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full'></div>

					{/* Tabs */}
					<div className='flex items-center justify-center flex-wrap gap-2 md:gap-4 mt-8'>
						{tabsButton.map((item) => (
							<motion.button
								key={item.id}
								onClick={() => handleActiveTabs(item.id)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
									isActive === item.id 
									? 'bg-gradient-to-r from-[#1f436e] to-blue-600 text-white shadow-lg' 
									: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
								}`}
							>
								{item.name}
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* Projects Grid */}
				<AnimatePresence mode='wait'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
						{isLoader ? (
							<div className='col-span-full flex justify-center'>
								<Loader />
							</div>
						) : (
							filteredContent.map((project, index) => (
								<motion.div
									key={index}
									layout
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300'
									onClick={() => setSelectedProject(project)}
								>
									{/* Project Image */}
									<div className='relative h-64 overflow-hidden'>
										<Image 
											src={project.image} 
											alt={project.title}
											width={400}
											height={300}
											className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
										/>
										{/* Overlay */}
										<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6'>
											<div className='text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
												<h4 className='text-lg font-semibold mb-2'>{project.title}</h4>
												<p className='text-sm text-gray-200'>{project.description}</p>
											</div>
										</div>
									</div>
									
									{/* Project Info */}
									<div className='p-6'>
										<h4 className='text-lg font-semibold text-[#1f436e] mb-2'>{project.title}</h4>
										<p className='text-gray-600 text-sm line-clamp-2'>{project.description}</p>
										
										{/* Tags */}
										<div className='mt-4 flex flex-wrap gap-2'>
											<span className='px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
												{project.category}
											</span>
										</div>
									</div>
								</motion.div>
							))
						)}
					</div>
				</AnimatePresence>

				{/* Project Modal */}
				<AnimatePresence>
					{selectedProject && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
							onClick={() => setSelectedProject(null)}
						>
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.8, opacity: 0 }}
								className='bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto'
								onClick={e => e.stopPropagation()}
							>
								<div className='relative'>
									<Image
										src={selectedProject.image}
										alt={selectedProject.title}
										width={800}
										height={600}
										className='w-full h-[40vh] object-cover'
									/>
									<button
										onClick={() => setSelectedProject(null)}
										className='absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300'
									>
										✕
									</button>
								</div>
								<div className='p-6'>
									<h3 className='text-2xl font-bold text-[#1f436e] mb-4'>{selectedProject.title}</h3>
									<p className='text-gray-600 mb-6'>{selectedProject.description}</p>
									<div className='flex flex-wrap gap-3'>
										<span className='px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm'>
											{selectedProject.category}
										</span>
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}

export default Projects;
