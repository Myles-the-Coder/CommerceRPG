import React, { useState } from 'react';
import Head from 'next/head';
import { Navbar } from '../../components/Navbar';
import { Announcements } from '../../components/Announcements';
import { Newsletter } from '../../components/Newsletter';
import { Products } from '../../components/Products';
import { Footer } from '../../components/Footer';
import { ProductsHeading } from '../../components/ProductsHeading';
import { fullInventory } from '../data';

const allProducts = () => {
	const [filter, setFilter] = useState({});
	const handleFilter = ({ target }) => {
		const value = target.value;
		setFilter({ [target.name]: value });
	};

	return (
		<>
			<Head>
				<title>All Products</title>
			</Head>
			<Announcements />
			<Navbar />
			<ProductsHeading title='All Products' handleFilter={handleFilter} />
			<Products products={fullInventory} />
			<Newsletter />
			<Footer />
		</>
	);
};

export default allProducts;
