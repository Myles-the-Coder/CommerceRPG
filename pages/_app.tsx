import '/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '/node_modules/rpg-awesome/css/rpg-awesome.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<Provider store={store}>
      <Head>
        <title>CommerceRPG</title>
      </Head>
       <Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
