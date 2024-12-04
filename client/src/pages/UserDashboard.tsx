import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import type { User } from '../models/User';
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


const UserDashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user: User = data?.me || {};

  const handleLogout = async () => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await Auth.logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold mx-auto text-center my-4'>
        User Dashboard
      </h1>
      <div className='flex items-center justify-center'>
        <Link to="/">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'>
            Home
          </button>
        </Link>
        {/* <Link to="/"> */}
          <button 
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'
          onClick={handleLogout}
          >
            Log Out
          </button>
        {/* </Link> */}
      </div>
      <div className='flex flex-col items-center justify-center'>
        {user ? (
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-bold mx-auto text-center my-4'>
              Welcome {user.username ? user.username : 'Unknown User'}!
            </h2>
            <h3 className='text-2xl font-bold mx-auto text-center my-4'>
              Your Email: {user.email ? user.email : 'unknown'}
            </h3>
            <h3 className='text-2xl font-bold mx-auto text-center my-4'>
              Your ID: {user._id ? user._id : 'unknown'}
            </h3>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold mx-auto text-center my-4'>
              Please Log In
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserDashboard