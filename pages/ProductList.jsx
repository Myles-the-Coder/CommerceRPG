import React from 'react';
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Products } from 'components/Products';
import { Footer } from 'components/Footer';

export const ProductList = () => {
	return (
		<>
			<Announcements />
			<Navbar />
			<h1 className=' text-center font-bold text-5xl m-3'>Weapons</h1>
			<div className='flex items-center justify-between md:justify-center'>
				
        <div className='mx-4'>
					<span className='text-xl font-medium'>Filter Products</span>
					<select name='' id='' className='p-2 border-2 m-2 cursor-pointer'>
						<option value='sword'>Sword</option>
						<option value='axe'>Axe</option>
						<option value='boomerang'>Boomerang</option>
					</select>
				</div>

				<div className='mx-4'>
					<span className='text-xl font-medium'>Sort Products</span>
					<select name='' id='' className='p-2 border-2 m-2 cursor-pointer'>
						<option value='price_asc'>Price (asc.)</option>
						<option value='price_desc'>Price (desc.)</option>
					</select>
				</div>
			</div>
			<Products/>
			<Newsletter />
			<Footer />
		</>
	);
};
