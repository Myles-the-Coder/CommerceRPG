import React  from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {removeProduct, incQuantity, decQuantity} from '/redux/cartSlice'

export const CartItem = ({product}) => {
 const {title, img, price, quantity } = product
 const dispatch = useDispatch()

 const handleClick = (action: string) => {
  switch (action) {
    case 'remove':
      dispatch(removeProduct({...product}))
      break;
    case 'incQuantity':
      dispatch(incQuantity({...product}))
      break;
    case 'decQuantity':
      dispatch(decQuantity({...product}))
    default:
      break;
  }
}

  return (
    <div className='flex flex-col md:flex-row justify-between items-center min-h-[40vh]' key={product._id}>
    <div className='flex-1 px-2 py-4 m-3 shadow flex justify-center items-center flex-col bg-gray-300'>
        <h3 className='mb-2'>
          <b>Product:</b> {title}
        </h3>
        <Image src={img} width={100} height={100} alt={title}/>
      </div>
      <b className='block md:hidden'>Quantity:</b>
      <div className='flex-1 flex items-center justify-center'>
        <button
          className='text-xl md:text-3xl p-4'
          onClick={() => handleClick('decQuantity')}>
          -
        </button>
        <span className='mx-1 border-2 rounded p-2 text-xl'>{product.quantity}</span>
        <button
          className='text-xl md:text-3xl p-4'
          onClick={() => handleClick('incQuantity')}>
          +
        </button>
        </div>

      <div className='flex-1 text-center p-3 m-2'>
      <h3>
          <b className='block md:hidden'>Price: </b>
          <b>{price * quantity}</b> 
        </h3>
      </div>
      <button className='w-9 h-9 flex justify-center items-center absolute right-4 bg-gray-300 rounded-full cursor-pointer hover:brightness-105 hover:scale-105' onClick={() => handleClick('remove')}>
      <Image src={require('../icons/TrashCan.png')} width={30} height={30} alt='Trash Icon'/>
      </button>

      <hr className='bg-white h-1 outline-none' />
    </div>
  )
}
