import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { socialLogos } from 'pages/data';
import { cardLogos } from 'pages/data';
import { footerLinks } from 'pages/data';

export const Footer = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center items-center md:items-start bg-slate-300 text-black'>
			<div className='flex-1 flex-col p-2 mt-2 text-center'>
				<p>CommerceRPG</p>
				<p className='my-4'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, id
					molestias magnam cupiditate temporibus deserunt laboriosam debitis
					doloremque tempora voluptatibus adipisci quibusdam odit aut? Illum
					dolorum omnis facere molestiae animi?
				</p>
				<div className='flex m-1 justify-center'>
					{socialLogos.map(({ name }) => (
						<div className='mr-1' key={name}>
							<Image
								src={require(`icons/${name}.svg`)}
								width={40}
								height={50}
								className='cursor-pointer transform transition-all ease hover:-translate-y-1'
								alt={`${name} logo`}></Image>
						</div>
					))}
				</div>
			</div>
			<div className='flex-1 flex flex-col justify-start items-center'>
				<h1 className='font-bold text-xl my-3'>Useful Links</h1>
				<ul className='cursor-pointer grid grid-cols-3 md:grid-cols-2 m-0 p-0'>
					{footerLinks.map(({title, href}) => (
						<li
							key={title}
							className='m-1 cursor-pointer transform transition-all ease hover:scale-110'>
							<Link href={href}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='flex-1 my-2 flex flex-col justify-start items-center'>
				<h1 className='font-bold text-xl mb-3'>Contact</h1>
				<p>123 Fantasy Road</p>
				<p className='my-2'>+1 (555)123-1986</p>
				<p>99mylesjefferson@gmail.com</p>
				<div className='flex mt-3'>
					{cardLogos.map(({ name }) => (
						<Image
							key={name}
							src={require(`icons/${name}.svg`)}
							width={50}
							height={40}
							alt={`${name} logo`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
