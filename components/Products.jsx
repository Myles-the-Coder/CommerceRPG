import React from 'react';
import { SingleProduct } from 'components/SingleProduct';

export const Products = ({ products }) => {
	return (
		<div className='flex p-2 flex-wrap justify-center items-center'>
			{products.map(({ key, name }) => (
				<SingleProduct key={key} name={name} />
			))}
		</div>
	);
};

