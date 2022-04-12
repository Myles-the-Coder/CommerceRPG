import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { formSubmit } from 'redux/apiCalls';
import { RootState } from 'redux/store';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter()
  const { isFetching, error, currentUser } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		formSubmit(dispatch, { username, password }, 'login');
    currentUser && router.push('/')
	};

	return (
		<div className='bg-gray-500 h-screen w-screen grid place-items-center'>
			<form
				onSubmit={e => handleLogin(e)}
				method='post'
				className='flex flex-col justify-center items-center bg-gray-100 rounded w-9/12 md:w-6/12 p-10'>
				<h1 className='font-medium text-4xl mb-4 uppercase'>Sign in</h1>

				<label htmlFor='Username'>Username</label>
				<input
					type='text'
					name='Username'
					id='username'
					placeholder='Username'
					className='w-10/12 border-2 outline-none p-1 my-1'
					onChange={({ target }) => setUsername(target.value)}
				/>

				<label htmlFor='Password'>Password</label>
				<input
					type='password'
					name='Password'
					placeholder='Password'
					id='password'
					className='w-10/12 border-2 outline-none p-1 my-1'
					onChange={({ target }) => setPassword(target.value)}
				/>
				{error && (
					<span className='text-red-500 text-xl'>
						Wrong Username or Password
					</span>
				)}
				<button
					type='submit'
					className={`mt-4 font-semibold border-2 p-2 w-5/12 transition-all ease bg-gray-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed`}
					onClick={e => handleLogin(e)}
          disabled={isFetching}
					>
					Login
				</button>
				<div className='inline-block p-3 text-lg'>
					<p className='inline-block mr-2'>No Account Yet?</p>
					<Link href='/Register'>
						<a className='transition ease underline underline-offset-8 hover:text-gray-400'>
							Create Account
						</a>
					</Link>
				</div>
				<a
					href='#'
					className='mt-2 transition ease underline underline-offset-8 hover:text-gray-400'>
					Forgot Password?
				</a>
			</form>
		</div>
	);
};

export default Login;
