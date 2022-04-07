import React from 'react';
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Footer } from 'components/Footer';
import { useSelector } from 'react-redux';
import { SingleProduct } from '../components/SingleProduct';

const Wishlist = () => {
	const { wishlist } = useSelector(state => state.user);
	console.log(wishlist);

	return (
		<>
			<Announcements />
			<Navbar />
			<h1 className='text-center text-3xl p-3'>
				Your Wishlist {wishlist.length === 0 && 'is currently empty'}
			</h1>
			<div className='flex p-2 flex-wrap justify-center items-center'>
				{wishlist.map(product => (
					<SingleProduct key={product._id} product={product} />
				))}
			</div>
			<Newsletter />
			<Footer />
		</>
	);
};

export default Wishlist;
