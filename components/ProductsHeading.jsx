import React from 'react';

export const ProductsHeading = ({title}) => {
	return (
		<>
    <h1 className=' text-center font-bold text-5xl m-3'>{title}</h1>
    <div className='flex items-center justify-between md:justify-center'>
    {title === 'All Products' &&
				<div className='mx-4'>
					<span className='text-xl font-medium'>Filter Products</span>
					<select name='' id='' className='p-2 border-2 m-2 cursor-pointer'>
						<option value='all'>All</option>
						<option value='weapons'>Weapons</option>
						<option value='armor'>Armor</option>
						<option value='magic'>Magic</option>
						<option value='inventory'>Inventory</option>
					</select>
				</div>
    }
				<div className='mx-4'>
					<span className='text-xl font-medium'>Sort Products</span>
					<select name='' id='' className='p-2 border-2 m-2 cursor-pointer'>
						<option value='alphabetically_A-Z'>Alphabetically: A-Z</option>
						<option value='alphabetically_Z-A'>Alphabetically: Z-A</option>
						<option value='price_asc'>Price (asc.)</option>
						<option value='price_desc'>Price (desc.)</option>
					</select>
				</div>
    </div>
		</>
	);
};
