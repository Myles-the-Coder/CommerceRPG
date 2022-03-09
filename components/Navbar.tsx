import React from 'react';
import Image from 'next/image';

export const Navbar = () => {
	return (
		<nav className='h-16'>
			<div className='py-3 flex justify-between text-center items-center'>
				<div className='text-base cursor-pointer m-2'>EN</div>
				<div className='mx-3 text-black-500 flex-1 flex w-full'>
					<input
						type='text'
						name='search'
						id='search'
            className='p-1 text-base border-l-4 border-y-4 border-slate-300 outline-none'
            placeholder='Search...'
          />
					<Image
						src={require('../icons/magnifying-glass.svg')}
						width={25}
						height={25}
						className='bg-slate-300'
						alt='Search Icon' />
				</div>
				<div className='text-black-500 flex-1 text-3xl text-bold'>CommerceRPG</div>
				<div className='text-black-500 flex-1'>
          <ul className='flex items-center justify-end text-center'>
            <li className='mx-2 cursor-pointer'>REGISTER</li>
            <li className='mx-2 cursor-pointer'>LOGOUT</li>
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
