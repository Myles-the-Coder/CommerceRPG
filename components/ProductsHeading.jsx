import React from 'react';

export const ProductsHeading = ({category, handleFilter}) => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

	return (
		<>
    <h1 className=' text-center font-bold text-5xl m-3'>{capitalize(category)}</h1>
    <div className='flex items-center justify-between md:justify-center'>
				{!category && <div className='mx-4'>
					<span className='text-xl font-medium'>Filter Products</span>
					<select name='Filter' id='' defaultValue={'all'} className='p-2 border-2 m-2 cursor-pointer' onChange={handleFilter}>
						<option value='all'>All Products</option>
						<option value='weapon'>Weapons</option>
						<option value='armor'>Armor</option>
						<option value='magic'>Magic</option>
						<option value='inventory'>Inventory</option>
					</select>
				</div>}
				<div className='mx-4'>
					<span className='text-xl font-medium'>Sort Products</span>
					<select name='Sorted' id='' className='p-2 border-2 m-2 cursor-pointer' onChange={({target}) => setSort(target.value)}>
						<option value='Newest'>Newest</option>
						<option value='Alphabetically_A-Z'>Alphabetically: A-Z</option>
						<option value='Alphabetically_Z-A'>Alphabetically: Z-A</option>
						<option value='Price_asc'>Price (asc.)</option>
						<option value='Price_desc'>Price (desc.)</option>
					</select>
				</div>
    </div>
		</>
	);
};
