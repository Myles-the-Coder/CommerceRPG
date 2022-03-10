import '../styles/globals.css'
import {AppProps} from 'next/app'
import {ProductList} from '../pages/ProductList'
import '../node_modules/rpg-awesome/css/rpg-awesome.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <ProductList/>
}

export default MyApp
