import React, { useState, useEffect, useMemo } from 'react';
import { SingleProduct } from 'components/SingleProduct';
import { publicRequest } from '../requestMethods';
import { Spinner } from '../components/Spinner';
import { Product } from 'redux/cartSlice';

export const Products = ({ category, filter, sort }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		try {
			const getProducts = async () => {
				const { data } = await publicRequest.get(
					`/products${category ? `?category=${category}` : ''}`
				);
				setProducts(data);
				setLoading(false);
				console.log(products);
			};
			getProducts();
		} catch (error) {
			console.error(error);
		}
	}, [category]);

	useEffect(() => {
		filter &&
			setFilteredProducts(
				category === 'all'
					? products
					: products.filter(({ categories }) =>
							Object.entries(filter).every(([_, value]) =>
								categories.includes(value)
							)
					  )
			);
	}, [filter, products, category]);

	useEffect(() => {
		switch (sort) {
			case 'newest':
				setFilteredProducts(prev =>
					[...prev].sort((a, b) => a.createdAt - b.createdAt)
				);
				break;
			case 'a-z':
				setFilteredProducts(prev =>
					[...prev].sort((a, b) => a.title.localeCompare(b.title))
				);
				break;
			case `z-a`:
				setFilteredProducts(prev =>
					[...prev].sort((a, b) => b.title.localeCompare(a.title))
				);
				break;
			case `asc`:
				setFilteredProducts(prev =>
					[...prev].sort((a, b) => a.price - b.price)
				);
				break;
			case `desc`:
				setFilteredProducts(prev =>
					[...prev].sort((a, b) => b.price - a.price)
				);
				break;
			default:
				break;
		}
	}, [sort]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className='flex p-2 flex-wrap justify-center items-center'>
			{filteredProducts.map((product: Product) => (
				<SingleProduct key={product._id} product={product} />
			))}
		</div>
	);
};
