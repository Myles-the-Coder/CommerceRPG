import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Footer } from 'components/Footer';
import { publicRequest } from '../../requestMethods';

const Product = () => {
	const router = useRouter();
	const { id } = router.query;
	const [quantity, setQuantity] = useState(1);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const getProduct = async () => {
			try {
				const { data } = await publicRequest.get(`/products/find/${id}`);
				setProduct(data);
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, [id]);

	const changeProductQuantity = action => {
		setQuantity(
			action === 'add' ? quantity + 1 : quantity > 1 ? quantity - 1 : 1
		);
	};

	return (
		<>
			<Announcements />
			<Navbar />
			{product && (
				<div className='h-[85vh] flex flex-col md:flex-row justify-center items-center p-9'>
					<div className='border p-20 flex-1 flex flex-col justify-center items-center shadow-xl rounded'>
						<h1 className='font-bold text-3xl mb-8'>{product.title}</h1>
						<Image
							src={product.img}
							width={125}
							height={125}
							alt={product.title}
						/>
					</div>
					<div className='p-2 mx-10 text-center md:text-start'>
						<p className='text-2xl'>{product.desc}</p>
						<p className='my-2 font-bold text-2xl'>Price: {product.price}</p>
						<div className='flex items-center justify-center'>
							<button
								className='text-3xl p-4'
								onClick={() => changeProductQuantity('subtract')}>
								-
							</button>
							<span className='mx-1 border-2 rounded p-2 text-xl'>
								{quantity}
							</span>
							<button
								className='text-3xl p-4'
								onClick={() => changeProductQuantity('add')}>
								+
							</button>
							<button className='ml-10 border-2 p-4 rounded font-medium transition-all ease hover:bg-gray-200'>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			)}
			<Newsletter />
			<Footer />
		</>
	);
};

export default Product;
