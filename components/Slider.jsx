import React from 'react';
import Image from 'next/image';

export const Slider = () => {
	return (
		<div className='w-full h-screen flex bg-purple-100 relative'>
			<div className='absolute left-4 top-0 bottom-0 m-auto flex align-middle justify-center'>
				<Image
					src={require('../icons/right-arrow.svg')}
					width={50}
					height={50}
					className='rotate-180 cursor-pointer opacity-50 hover:opacity-100'
					alt='Left Arrow'
				/>
			</div>
			<div className='h-full'>
				<div className='flex items-center justify-center'>
					<div className='flex-1'>
						<Image
							src='https://th.bing.com/th/id/R.f1f4e0eff8ce42ba20805da5f709d6e4?rik=8rVndKkAzONkiQ&pid=ImgRaw&r=0'
							width={1000}
							height={500}
							alt='blank'
						/>
					</div>
					<div className='flex-1'>
						<h1 className='text-5xl font-bold  tracking-wide uppercase'>
							All your questing needs!
						</h1>
						<p className='uppercase font-bold'>
							Bombs and Potions galore! 20% for new customers!
						</p>
						<button className='p-2 border border-b-black'>Shop Now</button>
					</div>
				</div>
			</div>

			<div className='absolute right-4 top-0 bottom-0 m-auto flex align-middle justify-center'>
				<Image
					src={require('../icons/right-arrow.svg')}
					width={50}
					height={50}
					className='cursor-pointer opacity-50 hover:opacity-100'
					alt='Right Arrow'
				/>
			</div>
		</div>
	);
};
