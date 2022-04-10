import React from 'react';
import Image from 'next/image';

export const Newsletter = () => {
	return (
		<div className=' flex justify-center items-center flex-col w-full h-[40vh] bg-gray-400'>
			<h1 className='text-6xl'>Newsletter <i className='ra ra-scroll-unfurled mr-3 text-5xl' /></h1>
			<p className='my-5 text-xl '>Subscribe for new inventory drops!</p>
			<div className='w-6/12 bg-white flex border-2'>
				<input
					type='text'
					placeholder='Your Email Address'
					className='outline-none p-2 w-full'
				/>
				<Image src={require('../icons/arrowIcon.png')} 
        width={35}
        height={30}
        className='hover:scale-110 cursor-pointer'
        alt='Right arrow'
        />
			</div>
		</div>
	);
};
