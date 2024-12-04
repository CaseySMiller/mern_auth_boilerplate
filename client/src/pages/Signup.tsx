import { Link } from 'react-router-dom'

import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold mx-auto text-center my-4'>
        Sign Up Page
      </h1>
      <div className='flex items-center justify-center'>
        <Link to="/">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'>
            Home
          </button>
        </Link>
        <Link to="/login">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>
            Log In
          </button>
        </Link>
      </div>
      <SignupForm />
    </div>
  )
}

export default Signup