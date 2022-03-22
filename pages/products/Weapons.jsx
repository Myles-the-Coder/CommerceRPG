import React from 'react'
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Products } from 'components/Products';
import { Footer } from 'components/Footer';
import {ProductsHeading} from 'components/ProductsHeading'
import { weapons } from '../data';

const Weapons = () => {
  return (
    <>
    <Announcements />
    <Navbar />
    <ProductsHeading title='Weapons'/>
    <Products products={weapons}/>
    <Newsletter />
    <Footer />
  </>
  )
}

export default Weapons