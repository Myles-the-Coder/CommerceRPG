import React from 'react';
import { categories } from 'pages/data';
import { CategoryItem } from './CategoryItem';

export const Categories = () => {
	return (
    <>
    <h1 className='text-5xl text-center font-bold mt-5'>Categories</h1>
		<div className='p-4 w-11/12 m-auto flex flex-wrap justify-center items-center'>
			{categories.map(item => (
				<CategoryItem item={item} key={item.id} />
			))}
		</div>
    </>
	);
};
