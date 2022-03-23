import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SingleProduct } from 'components/SingleProduct';

export const Products = ({ category, filter }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get(
				`https://commerce-rpg.herokuapp.com/products${
					category ? `?category=${category}` : ''
				}`
			);
			setProducts(data);
		};
		getProducts();
	}, [category]);

	useEffect(() => {
		filter &&
			setFilteredProducts(
        Object.values(filter)[0] === 'all' ? products :
				products.filter(product =>
					Object.entries(filter).every(([key, value]) =>
						product.categories.includes(value)
					)
				)
			);
		console.log(filteredProducts);
	}, [filter, products, category]);
	return (
		<div className='flex p-2 flex-wrap justify-center items-center'>
			{filteredProducts.map(product => (
				<SingleProduct key={product._id} product={product} />
			))}
		</div>
	);
};
