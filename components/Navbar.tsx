import React from 'react';
import Image from 'next/image';

export const Navbar = () => {
	return (
		<nav className='h-16 border-b-2'>
			<div className='py-3 flex justify-evenly text-center items-center'>
				<div className='text-base cursor-pointer m-2 hidden md:block'>EN</div>
				<div className='mx-3 text-black-500 flex-1 flex w-20 md:w-40'>
					<input
						type='text'
						name='search'
						id='search'
            className='p-1 text-base w-20 md:w-40 border-l-2 border-y-2 border-slate-300 outline-none'
            placeholder='Search...'
          />
					<Image
						src={require('../icons/magnifying-glass.svg')}
						width={25}
						height={25}
						className='bg-slate-300'
						alt='Search Icon' />
				</div>
				<div className='text-black-500 text-xl md:text-2xl text-bold'>CommerceRPG</div>
				<div className='text-black-500 flex-2 md:flex-1'>
          <ul className='flex items-center justify-end text-center'>
            <li className='mx-1 md:mx-2 cursor-pointer'>REGISTER</li>
            <li className='mx-1 md:mx-2 cursor-pointer'>LOGOUT</li>
            <li className='mx-4'>	<Image
						src={require('../icons/magnifying-glass.svg')}
						width={25}
						height={25}
						alt='Search Icon' /></li>
          </ul>
          </div>
			</div>
		</nav>
	);
};
