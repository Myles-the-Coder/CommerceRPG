import React, { useState } from 'react';
import Image from 'next/image';
import { singleProductIcons } from '../pages/data';

export const SingleProduct = ({ key, name }) => {
	const [isFavorited, setIsFavorited] = useState(false);

	return (
		<div
			className='flex flex-col m-1 justify-between items-center bg-gray-400 p-4 rounded group'
			key={key}>
			<div className='bg-white p-3 rounded'>
				<Image
					src={require(`icons/${name}`)}
					alt='Product Image'
					width={125}
					height={125}
				/>
			</div>
			<div className='m-3 flex transition-all ease duration-200 opacity-0 group-hover:opacity-100'>
				{singleProductIcons.map(({ name }) =>
					name !== 'emptyHeart' ? (
						<div
							className='p-2 m-1 w-11 h-11 transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full'
							key={name}>
							<Image
								src={require(`icons/${name}.png`)}
								width={44}
								height={44}
								alt={`${name} icon`}
							/>
						</div>
					) : (
						<div
							className='p-2 m-1 w-11 h-11 transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full'
							key={name}>
							<Image
								src={require(`icons/${
									isFavorited ? 'empty' : 'full'
								}Heart.png`)}
								width={44}
								height={44}
								alt='Empty heart icon'
								onClick={() => setIsFavorited(prev => !prev)}
							/>
						</div>
					)
				)}
				{/* <div className='p-2 m-1 w-11 h-11 transition-all ease duration-300 hover:scale-105 hover:bg-blue-200 cursor-pointer bg-white rounded-full'>
					<Image
						src={require(`icons/${isFavorited ? 'empty' : 'full'}Heart.png`)}
						width={44}
						height={44}
						alt='Empty heart icon'
						onClick={() => setIsFavorited(prev => !prev)}
					/>
				</div> */}
			</div>
		</div>
	);
};
