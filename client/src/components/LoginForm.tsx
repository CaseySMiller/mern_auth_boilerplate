import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [toDashboard, setToDashboard] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);
  
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);
  
  if (toDashboard) {
    return <Navigate to="/dashboard" />
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {  
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);

      setToDashboard(true);
      
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };


  return (
    <div className='flex flex-col items-center justify-center'>
      <form onSubmit={handleFormSubmit} className='flex flex-col w-1/2 mx-auto border-2 border-black rounded-lg p-4 mt-4'>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
          className='mx-2 my-2 border-2 border-light-gray rounded-lg p-2'
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
          className='mx-2 my-2 border-2 border-light-gray rounded-lg p-2'
        />
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/2 rounded mx-auto mt-4'>
          Submit
        </button>
          {showAlert && (
            <h3 className='text-red-500 text-center'>
              Something went wrong with your login credentials!
            </h3>
          )}
      </form>
    </div>
    )
  }

export default LoginForm