// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import UserDashboard from './pages/UserDashboard.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/dashboard',
        element: <UserDashboard />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
