import { useEffect } from 'react';
import Head from 'next/head';
import Login from './Login';
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Slider } from 'components/Slider';
import { Categories } from 'components/Categories';
import { Newsletter } from 'components/Newsletter';
import { Footer } from 'components/Footer';
import { useRouter } from 'next/router';
import { RootStateOrAny, useSelector } from 'react-redux';

const App = () => {
	const { currentUser } = useSelector((state: RootStateOrAny) => state.user);
	return (
		<>
			<Head>
				<title>CommerceRPG</title>
			</Head>
			{currentUser ? (
				<>
					<Announcements />
					<Navbar />
					<Slider />
					<Categories />
					<Newsletter />
					<Footer />
				</>
			) : (
				<Login />
			)}
		</>
	);
};

export default App;
