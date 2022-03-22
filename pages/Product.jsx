import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Announcements } from '../components/Announcements';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

export const Product = () => {
	const [quantity, setQuantity] = useState(0);

	const changeProductQuantity = action => {
		setQuantity(action === 'add' 
    ? quantity + 1 : quantity > 0 ? quantity - 1 : 0);
	};

	return (
		<>
			<Announcements />
			<Navbar />
			<div className='h-[85vh] flex flex-col md:flex-row justify-center items-center p-9'>
				<div className='border p-20 flex-1 flex flex-col justify-center items-center shadow-xl rounded'>
					<h1 className='font-bold text-3xl mb-8'>Sword</h1>
					<i className='ra ra-sword text-9xl'></i>
				</div>
				<div className='p-2 mx-10 text-center md:text-start'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
						autem perspiciatis obcaecati doloremque. Rerum, consequuntur.
					</p>
					<p className='my-2 font-bold text-2xl'>Price: 80g</p>
					<div className='flex items-center justify-center'>
						<button className='text-3xl p-4' onClick={() => changeProductQuantity('subtract')}>-</button>
						<span className='mx-1 border-2 rounded p-2 text-xl'>{quantity}</span>
						<button className='text-3xl p-4' onClick={() => changeProductQuantity('add')}>+</button>
						<button className='ml-10 border-2 p-4 rounded font-medium transition-all ease hover:bg-gray-200'>Add to Cart</button>
					</div>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</>
	);
};
