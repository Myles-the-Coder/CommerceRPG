import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Products } from 'components/Products';
import { Footer } from 'components/Footer';
import { ProductsHeading } from 'components/ProductsHeading';

const ProductList = () => {
	const router = useRouter();
	const [filter, setFilter] = useState({});
	const [sort, setSort] = useState('newest');
	const { category } = router.query;
	const handleFilter = ({ target }) => {
		const { name, value } = target;
		setFilter({ [name]: value });
	};
	return (
		<>
			<Announcements />
			<Navbar />
			<ProductsHeading handleFilter={handleFilter} category={category} />
			<Products category={category} filter={filter} />
			<Newsletter />
			<Footer />
		</>
	);
};

export default ProductList;
