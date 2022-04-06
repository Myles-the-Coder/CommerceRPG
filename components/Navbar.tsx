import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const Navbar = () => {
	const user = true;
	const {quantity} = useSelector((state: RootState) => state.cart);
	return (
		<nav className='h-16 border-b-2 bg-gray-200'>
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
						src={require('icons/magnifyingGlass.png')}
						width={30}
						height={30}
						className='bg-slate-300 cursor-pointer'
						alt='Search Icon'
					/>
				</div>
				<div className='text-black-500 text-xl md:text-2xl text-bold'>
					<Link href='/'>
						<a>CommerceRPG</a>
					</Link>
				</div>
				<div className='text-black-500 flex-2 md:flex-1'>
					<ul className='flex items-center justify-end text-center'>
						{!user && (
							<li className='mx-1 md:mx-2 cursor-pointer'>
								<Link href='/Register'>
									<a>REGISTER</a>
								</Link>
							</li>
						)}
						<li className='mx-1 md:mx-2 cursor-pointer'>LOGOUT</li>
						<li className='mx-4 relative'>
							{' '}
							<Link href='/Cart'>
								<a>
									<div
										className={`absolute right-0 top-0 w-4 h-4 bg-gray-600 z-50 rounded-full text-white justify-center items-center text-[10px] ${
											quantity === 0 ? `hidden` : 'flex'
										}`}>
										{quantity}
									</div>
									<Image
										src={require('icons/shoppingCart.png')}
										width={35}
										height={35}
										alt='Search Icon'
										className='cursor-pointer'
									/>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
