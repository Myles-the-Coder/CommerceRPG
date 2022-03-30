import React, {useState} from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {

  }

  return (

    <div className='bg-teal-500 h-screen w-screen grid place-items-center'>
    <form
      action=''
      className='flex flex-col justify-center items-center bg-gray-100 rounded w-9/12 md:w-6/12 p-10'>
      <h1 className='font-medium text-4xl mb-4 uppercase'>Sign in</h1>

      <label htmlFor='Username'>Username</label>
      <input
        type='text'
        name='Username'
        id=''
        placeholder='Username'
        className='w-10/12 border-2 outline-none p-1 my-1'
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor='Password'>Password</label>
      <input
        type='password'
        name='Password'
        placeholder='Password'
        id=''
        className='w-10/12 border-2 outline-none p-1 my-1'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' className='mt-4 font-semibold border-2 p-2 w-5/12 transition-all ease hover:bg-gray-200' onClick={handleLogin}>Login</button>
      <a href="#" className='mt-4 transition ease underline hover:text-teal-500'>Forgot Password?</a>
    </form>
  </div>
  )
}

export default Login