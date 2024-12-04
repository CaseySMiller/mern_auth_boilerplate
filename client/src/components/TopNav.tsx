export default function TopNav() {
  return (
    <nav className='bg-blue-500 text-white'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center py-4 px-4'>
          <div className='text-2xl font-bold'>
            <a href='/'>MERN Auth Boilerplate</a>
          </div>
          <div className='flex items-center'>
            <a href='/login'>Login</a>
            <a href='/signup'>Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
}