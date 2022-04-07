import React from 'react';

export const ProductsHeading = ({category, handleFilter, handleSort}) => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

	return (
		<>
    <h1 className=' text-center font-bold text-5xl m-3'>{capitalize(category || 'Shop Products')}</h1>
    <div className='flex items-center justify-between md:justify-center'>
				{!category && <div className='mx-4'>
					<span className='text-xl font-medium'>Filter Products</span>
					<select name='Filter' defaultValue='all' className='p-2 border-2 m-2 cursor-pointer' onChange={handleFilter}>
						<option value='all'>All Products</option>
						<option value='weapons'>Weapons</option>
						<option value='armor'>Armor</option>
						<option value='magic'>Magic</option>
						<option value='inventory'>Inventory</option>
					</select>
				</div>}
				<div className='mx-4'>
					<span className='text-xl font-medium'>Sort Products</span>
					<select name='Sorted' className='p-2 border-2 m-2 cursor-pointer' onChange={handleSort}>
						<option value='newest'>Newest</option>
						<option value='a-z'>Alphabetically: A-Z</option>
						<option value='z-a'>Alphabetically: Z-A</option>
						<option value='asc'>Price (asc.)</option>
						<option value='desc'>Price (desc.)</option>
					</select>
				</div>
    </div>
		</>
	);
};
