import React from 'react'
import { Navbar } from 'components/Navbar';
import { Announcements } from 'components/Announcements';
import { Newsletter } from 'components/Newsletter';
import { Products } from 'components/Products';
import { Footer } from 'components/Footer';
import {ProductsHeading} from 'components/ProductsHeading'
import { magic } from '../data';

const Magic = () => {
  return (
    <>
    <Announcements />
    <Navbar />
    <ProductsHeading title='Magic'/>
    <Products products={magic}/>
    <Newsletter />
    <Footer />
  </>
  )
}

export default Magic