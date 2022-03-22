import React  from 'react';
import { Navbar } from '../components/Navbar';
import { Announcements } from '../components/Announcements';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { CartItem } from '../components/CartItem';

const Cart = () => {
	return (
		<>
			<Announcements />
			<Navbar />
			<div className='flex justify-between items-center p-2 mb-5'>
				<button className='py-2 m-2 text-sm md:text-lg bg-white px-5 border-2 border-slate-400 uppercase'>
					Continue shopping
				</button>
				<a href=''>Shopping Cart(2)</a>
				<a href=''>Your Wishlist(0)</a>
				<button className='py-2 m-2 text-sm md:text-lg  bg-black text-white px-5 uppercase'>
					Checkout
				</button>
			</div>

			<h1 className='text-3xl text-center font-bold my-5'>Your Cart</h1>
			<div className='hidden md:flex justify-center text-center items-center p-2 mb-5 '>
				<p className='text-xl flex-1'>Items</p>
				<p className='text-xl flex-1'>Quantity</p>
				<p className='text-xl flex-1'>Price</p>
			</div>
			<hr className='bg-white h-1 outline-none' />
			<CartItem />
			<hr className='bg-white h-1 outline-none' />
			<CartItem />

			<div className='border-2 float-none md:float-right mx-auto md:mx-6 my-3 p-6 bg-slate-300 w-96 '>
				<h3>Subtotal: </h3>
			</div>
			<div />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Cart