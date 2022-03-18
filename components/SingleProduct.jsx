import React from 'react';
import Image from 'next/image';

export const SingleProduct = ({ key, name }) => {
	return (
    <div className='flex group flex-col m-1 w-96 justify-between items-center bg-gray-400 rounded p-4' key={key}>
      <div className='bg-white p-3 rounded'>
			<Image src={require(`../icons/${name}`)} alt='Product Image' width={125} height={125}/>
      </div>
      <div className='m-3 flex transition-opacity ease duration-200 opacity-0 group-hover:opacity-100'>
      <i className='ra ra-glass-heart text-2xl transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full p-2 m-2'></i>
      <i className='ra ra-glass-heart text-2xl transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full p-2 m-2'></i>
      <i className='ra ra-glass-heart text-2xl transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full p-2 m-2'></i>
      </div>
		</div>
	);
};
