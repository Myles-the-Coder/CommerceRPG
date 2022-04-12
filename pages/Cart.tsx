import React from 'react';
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Footer } from 'components/Footer';
import { CartItem } from 'components/CartItem';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { userRequest } from '../requestMethods';
import { Product } from 'redux/cartSlice';
import Link from 'next/link';
import { RootState } from 'redux/store';
import { useDispatch } from 'react-redux';
import { clearCart } from 'redux/cartSlice';


const Cart = () => {
  const dispatch = useDispatch();
	const { wishlist } = useSelector((state: RootState) => state.user);
	const { products, quantity } = useSelector((state: RootState)=> state.cart);
	const stripePromise = loadStripe(process.env.STRIPE_KEY);

	const cartTotal = (products: Product[]) => {
		return products.reduce(
			(sum, { price, quantity }) => sum + price * quantity,
			0
		);
	};

  const clearCartHandler = () => {
    dispatch(clearCart());
  }

	const handleStripeCheckout = async () => {
		try {
			const stripe = await stripePromise;
			const { data } = await userRequest.post('/checkout/payment', {
				item: {
					title: 'CommerceRPG',
					desc: 'Your Cart Items',
					img: 'Test',
					quantity,
					price: cartTotal(products),
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
				<Link href='/ProductList' passHref>
					<a className='py-2 m-2 text-sm md:text-lg bg-white px-5 border-2 border-slate-400 uppercase transition ease hover:scale-105 active:scale-100'>
						Continue shopping
					</a>
				</Link>
				<a className='transition ease hover:underline underline-offset-8 cursor-pointer'>Shopping Cart({quantity})</a>
				<Link href='/Wishlist'>
					<a className='transition ease hover:underline underline-offset-8'>Your Wishlist({wishlist.length})</a>
				</Link>
				<button
					className='py-2 m-2 text-sm md:text-lg  bg-black text-white px-5 uppercase transition ease hover:scale-105 active:scale-100'
					onClick={handleStripeCheckout}>
					Checkout
				</button>
			</div>

			{products.length > 0 ? (
				<>
					<div className='hidden md:flex justify-center text-center items-center p-2 mb-5 '>
						<p className='text-xl flex-1'>Items</p>
						<p className='text-xl flex-1'>Quantity</p>
						<p className='text-xl flex-1'>Price</p>
					</div>
					<hr className='bg-white h-1 outline-none' />
					{products.map((product: Product) => (
						<CartItem key={product._id} product={product} />
					))}
					<hr className='bg-white h-1 outline-none' />

					<div className='border-2 float-none md:float-right mx-auto md:mx-6 my-3 p-6 bg-slate-300 w-96 '>
						<h3 className='font-bold'>Subtotal: {cartTotal(products)}</h3>
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
