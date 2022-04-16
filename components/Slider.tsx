import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sliderItems } from 'pages/data';

export const Slider = () => {
	let [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction: string) => {
		direction === 'left'
			? setSlideIndex(slideIndex > 0 ? slideIndex - 100 : 200)
			: setSlideIndex(slideIndex < 200 ? slideIndex + 100 : 0);
	};

	return (
		<div className='h-screen flex relative overflow-hidden'>
			<div className='absolute left-4 top-0 bottom-0 m-auto flex flex-col items-center justify-center h-12 '>
				<Image
					src={require('icons/arrowIcon.png')}
					width={50}
					height={50}
					className='bg-white z-10 rotate-180 cursor-pointer opacity-70 hover:opacity-100'
					alt='Left Arrow'
					onClick={() => handleClick('left')}
				/>
			</div>
			{sliderItems.map(({ id, img, title, desc, bg, href }) => {
				return (
					<div className={`text-center md:text-start ${bg}`} key={id}>
						<div
							className={`h-screen w-screen flex flex-col lg:flex-row items-center justify-center transform transition-all ease duration-1000 md:text-start ${bg} ${slideIndex !== 100 ? `-translate-x-[${slideIndex}vw]` : `-translate-x-full`}`}>
							<div className='ml-0 lg:ml-5 flex-1'>
								<Image src={img} width={650} height={450} alt='blank' />
							</div>
							<div className='p-4 flex-1'>
								<h1 className='text-3xl font-bold tracking-wide uppercase p-2'>
									{title}
								</h1>
								<p className='uppercase font-bold mb-4'>{desc}</p>
                <Link href={href}>
              	<a className='p-2 border border-slate-800'>
									Shop Now
								</a>
                </Link>
							</div>
						</div>
					</div>
				);
			})}

			<div className='absolute right-4 top-0 bottom-0 m-auto flex flex-col items-center justify-center h-12 '>
				<Image
					src={require('icons/arrowIcon.png')}
					width={50}
					height={50}
					className='cursor-pointer opacity-70 hover:opacity-100 bg-white'
					alt='Right Arrow'
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
};
