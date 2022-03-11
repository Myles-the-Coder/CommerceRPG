import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Announcements } from '../components/Announcements';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

export const Cart = () => {
	const [quantity, setQuantity] = useState(0);

	const changeProductQuantity = action => {
		setQuantity(
			action === 'add' ? quantity + 1 : quantity > 0 ? quantity - 1 : 0
		);
	};
	return (
		<div>
			<Announcements />
			<Navbar></Navbar>
			<h1 className='text-center text-2xl mt-2'>Your Bag</h1>
			<div className='flex justify-between items-center p-2 mb-5'>
				<button className='py-2 m-2 text-sm md:text-lg bg-white px-5 border-2 border-slate-400 uppercase'>
					Continue shopping
				</button>
				<a href=''>Shopping Bag(2)</a>
				<a href=''>Your Wishlist(0)</a>
				<button className='py-2 m-2 text-sm md:text-lg  bg-black text-white px-5 uppercase'>
					Checkout
				</button>
			</div>

			<div className='flex justify-between items-center min-h-[40vh]'>
      <div className='flex-1 p-2 m-3 shadow flex justify-center items-center flex-col'>
					<i className='ra ra-sword text-7xl'></i>
					<h3>
						<b>Product:</b> Sword
					</h3>
				</div>
				<div className='flex-1 flex flex-col items-center'>
					<h3>
						<b>Price:</b> 80g
					</h3>
          <div>
					<button
						className='text-xl md:text-3xl p-4'
						onClick={() => changeProductQuantity('subtract')}>
						-
					</button>
					<span className='mx-1 border-2 rounded p-2 text-xl'>{quantity}</span>
					<button
						className='text-xl md:text-3xl p-4'
						onClick={() => changeProductQuantity('add')}>
						+
					</button>
          </div>
				</div>
				<div className='flex-1 border-2 text-center p-3 m-2'>
					<h1 className='uppercase mb-3 text-2xl'>Order summary</h1>
				
          <div>
            <p>Subtotal</p>
            <p>80g</p>
            <button className='border-2 p-1 mt-3 bg-slate-200'>Checkout Now</button>
          </div>
        </div>
			</div>

			<hr className='bg-white h-1 outline-none' />


      <div className='flex justify-between items-center '>
				<div className='flex-1 p-2 m-3 shadow flex justify-center items-center flex-col'>
					<i className='ra ra-sword text-7xl'></i>
					<h3>
						<b>Product:</b> Sword
					</h3>
				</div>
			<div className='flex-1 flex flex-col items-center'>
					<h3>
						<b>Price:</b> {`${quantity * 80}g`}
					</h3>
          <div>
					<button
						className='text-xl md:text-3xl p-4'
						onClick={() => changeProductQuantity('subtract')}>
						-
					</button>
					<span className='mx-1 border-2 rounded p-2 text-xl'>{quantity}</span>
					<button
						className='text-xl md:text-3xl p-4'
						onClick={() => changeProductQuantity('add')}>
						+
					</button>
          </div>
				</div>
				<div className='flex-1 border-2 text-center p-3 m-2'>
					<h1 className='uppercase mb-3 text-2xl'>Order summary</h1>
          <div>
            <p>Subtotal</p>
            <p>120g</p>
            <button className='border-2 p-1 mt-3 bg-slate-200'>Checkout Now</button>
          </div>
        </div>
			</div>
		
			<Newsletter></Newsletter>
			<Footer></Footer>
		</div>
	);
};
