import React from 'react';
import { SingleProduct } from '../components/SingleProduct';
import { weapons } from '../pages/data';

export const Products = () => {
	return (
		<div className='flex p-2 flex-wrap justify-center'>
			{weapons.map(({ key, icon }) => (
				<SingleProduct key={key} item={icon} />
			))}
		</div>
	);
};
