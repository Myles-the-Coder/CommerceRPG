import React from 'react'
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import {Products}  from 'components/Products';
import { Footer } from 'components/Footer';
import {ProductsHeading} from 'components/ProductsHeading'
import { inventory } from '../data';

const Inventory = () => {
  return (
    <>
    <Announcements />
    <Navbar />
    <ProductsHeading title='Inventory'/>
    <Products products={inventory}/>
    <Newsletter />
    <Footer />
  </>
  )
}

export default Inventory