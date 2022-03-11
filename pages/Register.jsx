import React from 'react';

export const Register = () => {
	return (
		<div className='bg-teal-500 h-screen w-screen grid place-items-center'>
			<form
				action=''
				className='flex flex-col justify-center items-center bg-gray-100 rounded w-9/12 md:w-7/12 p-10'>
				<h1 className='font-medium text-4xl mb-4 uppercase text-center'>
					Create An Account
				</h1>
					<label htmlFor='First Name'>First Name</label>
					<input
						type='text'
						name='First Name'
						id=''
						placeholder='First Name'
						className='w-10/12 md:w-7/12 border-2 outline-none p-1 my-1'
					/>

					<label htmlFor='Last Name'>Last Name</label>
					<input
						type='text'
						name='Last Name'
						id=''
						placeholder='Last Name'
						className='w-10/12 md:w-7/12 border-2 outline-none p-1 my-1'
					/>

					<label htmlFor='Username'>Username</label>
					<input
						type='text'
						name='Username'
						id=''
						placeholder='Username'
						className='w-10/12 md:w-7/12 border-2 outline-none p-1 my-1'
					/>

					<label htmlFor='Email'>Email</label>
					<input
						type='email'
						name='Email'
						id=''
						placeholder='Email'
						className='w-10/12 md:w-7/12 border-2 outline-none p-1 my-1'
					/>

					<label htmlFor='Password'>Password</label>
					<input
						type='password'
						name='Password'
						placeholder='Password'
						id=''
						className='w-10/12 md:w-7/12 border-2 outline-none p-1 my-1'
					/>

					<label htmlFor='Confirm Password'>Confirm Password</label>
					<input
						type='password'
						name='Confirm Password'
						id=''
						placeholder='Confirm Password'
						className='w-10/12 md:w-7/12 border-2 outline-none p-1 my-1'
					/>

				<p className='text-center inline-block my-2'>
					By creating an account, I consent to the processing of my personal
					data in accordance with the{' '}
					<b className='cursor-pointer'>Privacy Policy</b>
					<input
						type='checkbox'
						name=''
						id=''
						className='ml-2 w-4 h-4 cursor-pointer'
					/>{' '}
				</p>
				<button
					type='submit'
					className='mt-4 font-semibold border-2 p-2 w-5/12 transition-all ease hover:bg-gray-200'>
					Create Account
				</button>
			</form>
		</div>
	);
};
