import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { singleProductIcons } from '../pages/data';
// import { useDispatch } from 'react-redux';
// import { addProduct } from '../redux/cartRedux';


export const SingleProduct = ({ product }) => {
	const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter()
  // const dispatch = useDispatch();

  // const addProductToCart = () => {
  //   dispatch(addProduct({ product }));
  // }
  
  // Toggles between functions depending on icon
  const handleClick = (name) => {
    if (name === 'emptyHeart') {
      setIsFavorited(prev => !prev)
    } else if (name === 'shoppingCart') {
      addProductToCart()
    } else {
      router.push(`/Product/${product._id}`)
    }
  }

	return (
		<div
			className='group flex flex-col m-1 justify-between relative items-center bg-gray-400 p-4 rounded'
			key={product._id}>
			<div className='bg-white p-3 rounded'>
				<Image
					priority
					src={product.img}
					alt='Product Image'
					width={125}
					height={125}
				/>
			</div>
			<div className='m-3 flex transition-all ease duration-200 opacity-0 group-hover:opacity-100'>
				{singleProductIcons.map(({ name }) => (
					<div
						className='p-2 m-1 w-11 h-11 transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full'
						key={name}>
						<Image
							src={
								name !== 'emptyHeart'
									? require(`icons/${name}.png`)
									: require(`icons/${isFavorited ? 'empty' : 'full'}Heart.png`)
							}
							width={44}
							height={44}
							alt={`${name} icon`}
							onClick={() => handleClick(name)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
