import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   )
// }


const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold mx-auto text-center my-4'>
        Welcome to the MERN Auth Boilerplate
      </h1>
      <div className='flex items-center justify-center'>
        <Link to="/login">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>
            Sign Up
          </button>
        </Link>
        <Link to="/dashboard">
          {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>
            Dashboard
          </button> */}
          <Button>Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage