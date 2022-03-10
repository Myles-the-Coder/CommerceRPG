import React from 'react'
import {categories} from '../pages/data'
import { CategoryItem } from './CategoryItem'

export const Categories = () => {
  return (
    <div className='p-4 grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3'>
      {categories.map((item) => <CategoryItem item={item} key={item.id}/>)}</div>
  )
}
