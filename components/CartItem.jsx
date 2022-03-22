import React, {useState} from 'react'

export const CartItem = () => {
  const [quantity, setQuantity] = useState(0);

	const changeProductQuantity = action => {
		setQuantity(
			action === 'add' ? quantity + 1 : quantity > 0 ? quantity - 1 : 0
		);
	};
  return (
    <div className='flex flex-col md:flex-row justify-between items-center min-h-[40vh]'>
    <div className='flex-1 px-2 py-4 m-3 shadow flex justify-center items-center flex-col bg-gray-400'>
        <i className='ra ra-sword text-7xl'></i>
        <h3>
          <b>Product:</b> Sword
        </h3>
      </div>
      <b className='block md:hidden'>Quantity:</b>
      <div className='flex-1 flex items-center justify-center'>
        <button
          className='text-xl md:text-3xl p-4'
          onClick={() => changeProductQuantity('subtract')}>
          -
        </button>
        <span className='mx-1 border-2 rounded p-2 text-xl'>{quantity}</span>
        <button
          className='text-xl md:text-3xl p-4'
          onClick={() => changeProductQuantity('add')}>
          +
        </button>
        </div>

      <div className='flex-1 text-center p-3 m-2'>
      <h3>
          <b className='block md:hidden'>Price: </b>
          <b>{80 * quantity}g</b> 
        </h3>
      </div>
      <hr className='bg-white h-1 outline-none' />
    </div>
  )
}
