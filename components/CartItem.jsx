import React  from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import {removeProduct, clearCart, incQuantity, decQuantity} from '/redux/cartSlice'

export const CartItem = ({product}) => {
 const {quantity} = useSelector(state => state.cart.products)
 const {title, img, price } = product
//  const [newQuantity, setNewQuantity] = useState(quantity)
 const dispatch = useDispatch()

  const removeCartItem = () => {
    dispatch(removeProduct({...product}))
  }

  const addToQuantity = () => {
    dispatch(incQuantity({...product}))
  }

  const subtractFromQuantity = () => {
    dispatch(decQuantity({...product}))
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
          onClick={subtractFromQuantity}>
          -
        </button>
        <span className='mx-1 border-2 rounded p-2 text-xl'>{product.quantity}</span>
        <button
          className='text-xl md:text-3xl p-4'
          onClick={addToQuantity}>
          +
        </button>
        </div>

      <div className='flex-1 text-center p-3 m-2'>
      <h3>
          <b className='block md:hidden'>Price: </b>
          <b>{price * product.quantity}</b> 
        </h3>
      </div>
      <button className='w-9 h-9 flex justify-center items-center absolute right-4 bg-gray-300 rounded-full cursor-pointer hover:brightness-105 hover:scale-105' onClick={removeCartItem}>
      <Image src={require('../icons/TrashCan.png')} width={30} height={30} alt='Trash Icon'/>
      </button>

      <hr className='bg-white h-1 outline-none' />
    </div>
  )
}
