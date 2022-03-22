import React from 'react'
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Products } from 'components/Products';
import { Footer } from 'components/Footer';
import {ProductsHeading} from 'components/ProductsHeading'
import { armor } from '../data';

const Armor = () => {
  return (
    <>
    <Announcements />
    <Navbar />
    <ProductsHeading title='Armor'/>
    <Products products={armor}/>
    <Newsletter />
    <Footer />
  </>
  )
}

export default Armor