import React from 'react';

export const SingleProduct = ({ item }) => {
	return (
		<div className='flex group flex-col m-1 w-96 h-72 justify-between items-center bg-gray-400 rounded p-4 '>
			<i className={`${item} text-8xl bg-white rounded-full p-5 mt-4`}></i>
      <div className='m-3 flex transition-opacity ease duration-200 opacity-0 group-hover:opacity-100'>
      <i className='ra ra-glass-heart text-2xl transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full p-2 m-2'></i>
      <i className='ra ra-glass-heart text-2xl transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full p-2 m-2'></i>
      <i className='ra ra-glass-heart text-2xl transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full p-2 m-2'></i>
      </div>
		</div>
	);
};
