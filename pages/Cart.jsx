import React from 'react';
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Footer } from 'components/Footer';
import { CartItem } from 'components/CartItem';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { userRequest } from '../requestMethods';
import Link from 'next/link';

const Cart = () => {
	const { wishlist } = useSelector(state => state.user);
	const { products, quantity, total } = useSelector(state => state.cart);
	const stripePromise = loadStripe(process.env.STRIPE_KEY);

	const handleStripeCheckout = async () => {
		try {
			const stripe = await stripePromise;
			const { data } = await userRequest.post('/checkout/payment', {
				item: {
					title: 'CommerceRPG',
					desc: 'Your Cart Items',
					img: '',
					quantity,
					price: total,
				},
			});

			const result = await stripe.redirectToCheckout({
				sessionId: data.id,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Announcements />
			<Navbar />
			<div className='flex justify-between items-center p-2 mb-5'>
				<button className='py-2 m-2 text-sm md:text-lg bg-white px-5 border-2 border-slate-400 uppercase'>
					Continue shopping
				</button>
				<a href=''>Shopping Cart({quantity})</a>
				<Link href='/Wishlist'>
					<a >Your Wishlist({wishlist.length})</a>
				</Link>
				<button
					className='py-2 m-2 text-sm md:text-lg  bg-black text-white px-5 uppercase'
					onClick={handleStripeCheckout}>
					Checkout
				</button>
			</div>

			{products.length !== 0 ? (
				<>
					<div className='hidden md:flex justify-center text-center items-center p-2 mb-5 '>
						<p className='text-xl flex-1'>Items</p>
						<p className='text-xl flex-1'>Quantity</p>
						<p className='text-xl flex-1'>Price</p>
					</div>
					<hr className='bg-white h-1 outline-none' />
					{products.map(product => (
						<CartItem key={product.id} product={product} />
					))}
					<hr className='bg-white h-1 outline-none' />

					<div className='border-2 float-none md:float-right mx-auto md:mx-6 my-3 p-6 bg-slate-300 w-96 '>
						<h3 className='font-bold'>Subtotal: {total}</h3>
					</div>
				</>
			) : (
				<h1 className='text-center text-3xl p-5'>Your cart is empty</h1>
			)}
			<div />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Cart;
