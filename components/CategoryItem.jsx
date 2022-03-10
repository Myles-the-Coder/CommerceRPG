import React from 'react'

export const CategoryItem = ({item}) => {
  const {id, icon, title } = item
  return (
    <div key={id} className='m-3 bg-fuchsia-400 flex justify-center items-center flex-col text-center shadow-xl h-80'>
      <i className={`${icon} text-9xl`}></i>
      <h1 className='text-2xl font-bold text-white'>{title}</h1>
      <button className='my-3 font-bold text-center transition-all ease duration-200 hover:scale-110'>SHOP NOW</button>
      </div>
  )
}
