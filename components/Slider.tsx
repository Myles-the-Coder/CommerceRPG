import React, { useState } from 'react';
import Image from 'next/image';
import { sliderItems } from '../pages/data';

export const Slider = () => {
	let [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction: string) => {
		direction === 'left'
			? setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
			: setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
	};

	return (
		<div className='w-full h-screen flex relative overflow-hidden'>
			<div className='absolute left-4 top-0 bottom-0 m-auto flex justify-center'>
				<Image
					src={require('../icons/right-arrow.svg')}
					width={50}
					height={50}
					className='z-10 rotate-180 cursor-pointer opacity-50 hover:opacity-100'
					alt='Left Arrow'
					onClick={() => handleClick('left')}
				/>
			</div>
			{sliderItems.map(({ id, img, title, desc, bg }) => {
				return (
					<div className={`h-full flex ${bg}`} key={id}>
						<div
							className={`h-screen w-screen flex flex-col md:flex-row items-center transform transition-all ease duration-1000 ${slideIndex !== 1 ? `-translate-x-[${slideIndex * 100}vw]` : '-translate-x-full'}`}>
							<div className='flex-1 m-1'>
								<Image src={img} width={800} height={600} alt='blank' />
							</div>
							<div className='flex-1 p-10'>
								<h1 className='text-5xl font-bold  tracking-wide uppercase'>
									{title}
								</h1>
								<p className='uppercase font-bold my-12'>{desc}</p>
								<button className='p-2 border border-slate-800'>
									Shop Now
								</button>
							</div>
						</div>
					</div>
				);
			})}

			<div className='absolute right-4 top-0 bottom-0 m-auto flex align-middle justify-center'>
				<Image
					src={require('../icons/right-arrow.svg')}
					width={50}
					height={50}
					className='cursor-pointer opacity-50 hover:opacity-100'
					alt='Right Arrow'
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
};
