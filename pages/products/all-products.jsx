import React from 'react'
import { Navbar } from '../../components/Navbar';
import { Announcements } from '../../components/Announcements';
import { Newsletter } from '../../components/Newsletter';
import { Products } from '../../components/Products';
import { Footer } from '../../components/Footer';
import {ProductsHeading} from '../../components/ProductsHeading'
import { fullInventory } from '../data';

const allProducts = () => {
  return (
    <>
    <Announcements />
    <Navbar />
    <ProductsHeading title='All Products'/>
    <Products products={fullInventory}/>
    <Newsletter />
    <Footer />
  </>
  )
}

export default allProducts