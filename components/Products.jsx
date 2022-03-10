import React from 'react';
import { Product } from './Product';
import { weapons } from '../pages/data';

export const Products = () => {
	return (
		<div className='flex p-4 flex-wrap justify-center'>
			{weapons.map(({ key, icon }) => (
				<Product key={key} item={icon} />
			))}
		</div>
	);
};
