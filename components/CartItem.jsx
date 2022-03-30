import React  from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

export const CartItem = ({product}) => {
 const {quantity} = useSelector(state => state.cart.products)
//  const [newQuantity, setNewQuantity] = useState(quantity)
 const dispatch = useDispatch()

	const changeProductQuantity = action => {
		// if (action === 'add') {
    //   setNewQuantity(newQuantity + 1)
    // }
    console.log('hello')
	};


  return (
    <div className='flex flex-col md:flex-row justify-between items-center min-h-[40vh]' key={product._id}>
    <div className='flex-1 px-2 py-4 m-3 shadow flex justify-center items-center flex-col bg-gray-400'>
        <h3 className='mb-2'>
          <b>Product:</b> {product.title}
        </h3>
        <Image src={product.img} width={100} height={100} alt={product.title}/>
      </div>
      <b className='block md:hidden'>Quantity:</b>
      <div className='flex-1 flex items-center justify-center'>
        <button
          className='text-xl md:text-3xl p-4'
          onClick={() => changeProductQuantity('subtract')}>
          -
        </button>
        <span className='mx-1 border-2 rounded p-2 text-xl'>{product.quantity}</span>
        <button
          className='text-xl md:text-3xl p-4'
          onClick={() => changeProductQuantity('add')}>
          +
        </button>
        </div>

      <div className='flex-1 text-center p-3 m-2'>
      <h3>
          <b className='block md:hidden'>Price: </b>
          <b>{product.price * product.quantity}</b> 
        </h3>
      </div>
      <hr className='bg-white h-1 outline-none' />
    </div>
  )
}
