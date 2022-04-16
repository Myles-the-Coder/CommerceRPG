import React from 'react';
import Image from 'next/image'

export const Spinner = () => (
	// animation effect while waiting for rendering
	<span className='h-screen w-full flex justify-center items-center'>
		{/* <span className='animate-ping relative flex h-10 w-10  rounded-full bg-gray-600 opacity-75'></span> */}
    <Image src={'https://th.bing.com/th/id/R.be15642d4bb1e4d1d9588a31d055788a?rik=Q%2f0D1830UeJK0g&riu=http%3a%2f%2fwww.freepsdhtml.com%2fwp-content%2fuploads%2f2017%2f09%2f40.gif&ehk=OENtzX%2bZxTHTSYZJhjjJond2S5213x2X7A9%2fGBkJR98%3d&risl=&pid=ImgRaw&r=0'} alt='Loading Icon' layout='fill' />
  </span>
);
