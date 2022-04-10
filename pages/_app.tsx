import '/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import UserCheck from 'components/UserCheck';
import '/node_modules/rpg-awesome/css/rpg-awesome.min.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Head>
					<title>CommerceRPG</title>
				</Head>
        <UserCheck>
				<Component {...pageProps} />
        </UserCheck>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
