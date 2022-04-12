import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { formSubmit } from 'redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Register = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { isFetching, currentUser, error } = useSelector(
		(state: RootState) => state.user
	);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm_password, setConfirmPassword] = useState('');

	const handleRegister = e => {
		e.preventDefault();
		formSubmit(
			dispatch,
			{ username, email, password, confirm_password },
			'register'
		);

    !error && router.push('/Login')
	};

	return (
		<div className='bg-gray-500 h-screen w-screen grid place-items-center'>
			<Head>
				<title>Register</title>
			</Head>
			<form
				onSubmit={e => handleRegister(e)}
				method='post'
				className='flex flex-col justify-center items-center bg-gray-100 rounded w-10/12 md:w-7/12 p-10'>
				<h1 className='font-medium text-4xl mb-4 uppercase text-center'>
					Create An Account
				</h1>
				<div className='grid grid-cols-2 gap-1 w-full'>
					<div className='flex flex-col'>
						<label htmlFor='First Name'>First Name</label>
						<input
							type='text'
							name='First Name'
							placeholder='First Name'
							className=' border-2 outline-none p-1 my-1'
							onChange={({ target }) => setFirstName(target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='Last Name'>Last Name</label>
						<input
							type='text'
							name='Last Name'
							placeholder='Last Name'
							className='border-2 outline-none p-1 my-1'
							onChange={({ target }) => setLastName(target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='Username'>Username</label>
						<input
							type='text'
							name='Username'
							placeholder='Username'
							className=' border-2 outline-none p-1 my-1'
							onChange={({ target }) => setUsername(target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='Email'>Email</label>
						<input
							type='email'
							name='Email'
							placeholder='Email'
							className='border-2 outline-none p-1 my-1'
							onChange={({ target }) => setEmail(target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='Password'>Password</label>
						<input
							type='password'
							name='Password'
							placeholder='Password'
							className='border-2 outline-none p-1 my-1'
							onChange={({ target }) => setPassword(target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='Confirm Password'>Confirm Password</label>
						<input
							type='password'
							name='Confirm Password'
							placeholder='Confirm Password'
							className='border-2 outline-none p-1 my-1'
							onChange={({ target }) => setConfirmPassword(target.value)}
						/>
					</div>
				</div>

				<p className='text-center inline-block my-2'>
					By creating an account, I consent to the processing of my personal
					data in accordance with the{' '}
					<b className='cursor-pointer'>Privacy Policy</b>
					<input
						type='checkbox'
						name='Checkbox'
						className='ml-2 w-4 h-4 cursor-pointer'
					/>{' '}
				</p>
				<div className='flex w-full'>
					<button
						type='button'
						className='flex-1 mt-4 font-semibold border-2 p-2 transition-all ease bg-gray-600 hover:bg-gray-400 text-white'
						onClick={() => router.back()}>
						Cancel
					</button>
					<button
						type='submit'
						className=' flex-1 mt-4 font-semibold border-2 p-2 transition-all ease bg-gray-600 hover:bg-gray-400 active:scale-95 text-white'>
						Create Account
					</button>
				</div>
				<Link href='/Login'>
					<a className='mt-5 underline underline-offset-8 text-slate-900 hover:text-slate-400'>
						Already have an account? Login in
					</a>
				</Link>
			</form>
		</div>
	);
};

export default Register;
